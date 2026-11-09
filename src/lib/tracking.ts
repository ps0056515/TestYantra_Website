import { createHmac } from "node:crypto";
import { dbConfigured, one, query } from "@/lib/db";

export type SiteSection = "gateway" | "qe" | "ai" | "company" | "other";

export function sectionOf(pathname: string): SiteSection {
  if (pathname === "/") return "gateway";
  if (pathname === "/qe" || pathname.startsWith("/qe/")) return "qe";
  if (pathname === "/ai" || pathname.startsWith("/ai/")) return "ai";
  if (pathname.startsWith("/company") || pathname === "/contact" || pathname.startsWith("/insights")) return "company";
  return "other";
}

const BOT_RE =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|headless|lighthouse|pingdom|uptime|monitor|curl|wget|python-requests|go-http-client|httpclient|axios|node-fetch|semrush|ahrefs|mj12|dotbot|petalbot/i;

export function isBot(userAgent: string | null): boolean {
  return !userAgent || BOT_RE.test(userAgent);
}

function secret(): string {
  return process.env.TRACKING_SALT ?? process.env.ADMIN_SECRET ?? process.env.ADMIN_PASSWORD ?? "testyantra-dev-salt";
}

/** One-way hash so we can count unique visitors and cache lookups without storing IP addresses. */
export function hashIp(ip: string): string {
  return createHmac("sha256", secret()).update(ip).digest("hex").slice(0, 32);
}

export function clientIp(headers: Headers): string | null {
  const fwd = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return fwd || headers.get("x-real-ip") || headers.get("cf-connecting-ip") || null;
}

function isPrivateIp(ip: string): boolean {
  return (
    ip === "::1" ||
    ip.startsWith("127.") ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(ip) ||
    ip.startsWith("fc") ||
    ip.startsWith("fd") ||
    ip.startsWith("fe80")
  );
}

export type CompanyInfo = { name: string | null; domain: string | null };

const CACHE_DAYS = 30;

/**
 * Reverse-IP company identification (B2B visitor identification).
 * Needs a paid IPinfo "Company" API token in IPINFO_TOKEN. Without it, nothing is looked up.
 * Results for ISP / hosting / consumer networks are discarded — only real businesses are kept.
 */
export async function lookupCompany(ip: string | null, ipHash: string | null): Promise<CompanyInfo> {
  const none: CompanyInfo = { name: null, domain: null };
  const token = process.env.IPINFO_TOKEN;
  if (!token || !ip || !ipHash || isPrivateIp(ip) || !dbConfigured()) return none;

  const cached = await one("SELECT name, domain, checked_at FROM ip_companies WHERE ip_hash = $1", [ipHash]);
  if (cached) {
    const ageDays = (Date.now() - Date.parse(String(cached.checked_at))) / 86_400_000;
    if (ageDays < CACHE_DAYS) {
      return { name: (cached.name as string) ?? null, domain: (cached.domain as string) ?? null };
    }
  }

  let result: CompanyInfo = none;
  let type: string | null = null;
  try {
    const res = await fetch(`https://ipinfo.io/${encodeURIComponent(ip)}/company?token=${encodeURIComponent(token)}`, {
      signal: AbortSignal.timeout(2000),
    });
    if (res.ok) {
      const j = (await res.json()) as { name?: string; domain?: string; type?: string };
      type = j.type ?? null;
      if (j.type === "business" && j.name) result = { name: j.name, domain: j.domain ?? null };
    }
  } catch {
    return none; // do not cache failures
  }

  await query(
    `INSERT INTO ip_companies (ip_hash, name, domain, type, checked_at) VALUES ($1,$2,$3,$4,$5)
     ON CONFLICT (ip_hash) DO UPDATE SET name = EXCLUDED.name, domain = EXCLUDED.domain, type = EXCLUDED.type, checked_at = EXCLUDED.checked_at`,
    [ipHash, result.name, result.domain, type, new Date().toISOString()],
  );
  return result;
}

/** Simple in-memory limiter — enough to blunt abuse of the public tracking endpoint. */
const buckets = new Map<string, { n: number; reset: number }>();
export function rateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || b.reset < now) {
    buckets.set(key, { n: 1, reset: now + windowMs });
    if (buckets.size > 5000) for (const [k, v] of buckets) if (v.reset < now) buckets.delete(k);
    return true;
  }
  b.n += 1;
  return b.n <= max;
}

export function hostOf(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}
