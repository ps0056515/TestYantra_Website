import { dbConfigured, query } from "@/lib/db";
import { clientIp, hashIp, hostOf, isBot, lookupCompany, rateLimit, sectionOf } from "@/lib/tracking";

export const runtime = "nodejs";

type TrackPayload = {
  path?: string;
  sessionId?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

const clip = (v: unknown, n: number): string | null => {
  const s = typeof v === "string" ? v.trim().slice(0, n) : "";
  return s || null;
};

export async function POST(request: Request) {
  const done = () => new Response(null, { status: 204 });

  try {
    if (!dbConfigured()) return done();
    const ua = request.headers.get("user-agent");
    if (isBot(ua)) return done();
    if (request.headers.get("sec-gpc") === "1") return done();

    const body = (await request.json()) as TrackPayload;
    const path = clip(body.path, 300);
    if (!path || !path.startsWith("/") || path.startsWith("/admin") || path.startsWith("/api")) return done();

    const ip = clientIp(request.headers);
    const excluded = (process.env.TRACKING_EXCLUDE_IPS ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (ip && excluded.includes(ip)) return done();

    const ipHash = ip ? hashIp(ip) : null;
    if (!rateLimit(`track:${ipHash ?? "anon"}`, 120, 60_000)) return done();

    const company = await lookupCompany(ip, ipHash);
    const country = request.headers.get("cf-ipcountry") ?? request.headers.get("x-vercel-ip-country");

    await query(
      `INSERT INTO visits (created_at, path, section, referrer_host, utm_source, utm_medium, utm_campaign, session_id, visitor_hash, country, company, company_domain)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
      [
        new Date().toISOString(),
        path,
        sectionOf(path),
        hostOf(body.referrer),
        clip(body.utm_source, 80),
        clip(body.utm_medium, 80),
        clip(body.utm_campaign, 120),
        clip(body.sessionId, 64),
        ipHash,
        clip(country, 4),
        company.name,
        company.domain,
      ],
    );
  } catch (err) {
    console.error("[track] failed", err);
  }
  return done();
}
