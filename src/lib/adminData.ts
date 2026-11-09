import { query, type Row } from "@/lib/db";

/** Dashboard day-buckets use India Standard Time. */
const TZ = "Asia/Kolkata";

export type Count = { label: string; views: number; visitors: number };
export type CompanyRow = {
  company: string;
  domain: string | null;
  views: number;
  sessions: number;
  lastSeen: string;
  sections: string;
  pages: string[];
};
export type LeadRow = {
  id: number;
  createdAt: string;
  name: string;
  email: string;
  emailDomain: string | null;
  interest: string | null;
  industry: string | null;
  message: string | null;
  section: string | null;
  sourcePath: string | null;
  referrer: string | null;
  utmSource: string | null;
  visitorCompany: string | null;
  status: string;
  emailDelivered: boolean;
};

export type Dashboard = {
  days: number;
  since: string;
  totals: { pageviews: number; visitors: number; sessions: number; leads: number; identifiedCompanies: number };
  /** Same measures for the equally long period immediately before, for comparison. */
  previous: { pageviews: number; visitors: number; sessions: number; leads: number };
  daily: { day: string; views: number; leads: number }[];
  sections: Count[];
  pages: Count[];
  sources: Count[];
  countries: Count[];
  companies: CompanyRow[];
  leads: LeadRow[];
  companyLookupEnabled: boolean;
};

const n = (v: unknown) => Number(v ?? 0);
const s = (v: unknown) => (v == null ? "" : String(v));
const opt = (v: unknown) => (v ? String(v) : null);

export async function getDashboard(days: number): Promise<Dashboard> {
  const since = new Date(Date.now() - days * 86_400_000).toISOString();
  const prevSince = new Date(Date.now() - 2 * days * 86_400_000).toISOString();
  const dayExpr = `to_char(created_at::timestamptz AT TIME ZONE '${TZ}', 'YYYY-MM-DD')`;

  const grouped = async (expr: string, limit: number, where = "TRUE"): Promise<Count[]> =>
    (
      await query(
        `SELECT ${expr} AS label, COUNT(*) AS views, COUNT(DISTINCT visitor_hash) AS visitors
         FROM visits WHERE created_at >= $1 AND ${where} GROUP BY 1 ORDER BY views DESC LIMIT ${limit}`,
        [since],
      )
    ).map((r) => ({ label: s(r.label), views: n(r.views), visitors: n(r.visitors) }));

  const [totals, leadCount, prev, prevLeads, viewDays, leadDays, sections, pages, sources, countries, companyRows, leadRows] =
    await Promise.all([
      query(
        `SELECT COUNT(*) AS pageviews, COUNT(DISTINCT visitor_hash) AS visitors, COUNT(DISTINCT session_id) AS sessions,
                COUNT(DISTINCT company) AS companies FROM visits WHERE created_at >= $1`,
        [since],
      ),
      query("SELECT COUNT(*) AS c FROM leads WHERE created_at >= $1", [since]),
      query(
        `SELECT COUNT(*) AS pageviews, COUNT(DISTINCT visitor_hash) AS visitors, COUNT(DISTINCT session_id) AS sessions
         FROM visits WHERE created_at >= $1 AND created_at < $2`,
        [prevSince, since],
      ),
      query("SELECT COUNT(*) AS c FROM leads WHERE created_at >= $1 AND created_at < $2", [prevSince, since]),
      query(`SELECT ${dayExpr} AS d, COUNT(*) AS c FROM visits WHERE created_at >= $1 GROUP BY 1`, [since]),
      query(`SELECT ${dayExpr} AS d, COUNT(*) AS c FROM leads WHERE created_at >= $1 GROUP BY 1`, [since]),
      grouped("section", 6),
      grouped("path", 12),
      grouped("COALESCE(utm_source, referrer_host, 'Direct / none')", 10),
      grouped("country", 8, "country IS NOT NULL"),
      query(
        `SELECT company, MAX(company_domain) AS domain, COUNT(*) AS views, COUNT(DISTINCT session_id) AS sessions,
                MAX(created_at) AS last_seen, string_agg(DISTINCT section, ',') AS sections
         FROM visits WHERE created_at >= $1 AND company IS NOT NULL
         GROUP BY company ORDER BY views DESC, last_seen DESC LIMIT 25`,
        [since],
      ),
      query("SELECT * FROM leads WHERE created_at >= $1 ORDER BY id DESC LIMIT 200", [since]),
    ]);

  const viewsByDay = new Map(viewDays.map((r) => [s(r.d), n(r.c)]));
  const leadsByDay = new Map(leadDays.map((r) => [s(r.d), n(r.c)]));
  const daily: Dashboard["daily"] = [];
  for (let i = days - 1; i >= 0; i--) {
    const day = new Date(Date.now() + 330 * 60_000 - i * 86_400_000).toISOString().slice(0, 10);
    daily.push({ day, views: viewsByDay.get(day) ?? 0, leads: leadsByDay.get(day) ?? 0 });
  }

  const companies: CompanyRow[] = await Promise.all(
    companyRows.map(async (r: Row) => {
      const pageRows = await query(
        `SELECT path, COUNT(*) AS c FROM visits WHERE created_at >= $1 AND company = $2 GROUP BY path ORDER BY c DESC LIMIT 6`,
        [since, s(r.company)],
      );
      return {
        company: s(r.company),
        domain: opt(r.domain),
        views: n(r.views),
        sessions: n(r.sessions),
        lastSeen: s(r.last_seen),
        sections: s(r.sections),
        pages: pageRows.map((p) => s(p.path)),
      };
    }),
  );

  const leads: LeadRow[] = leadRows.map((r) => ({
    id: n(r.id),
    createdAt: s(r.created_at),
    name: s(r.name),
    email: s(r.email),
    emailDomain: opt(r.email_domain),
    interest: opt(r.interest),
    industry: opt(r.industry),
    message: opt(r.message),
    section: opt(r.section),
    sourcePath: opt(r.source_path),
    referrer: opt(r.referrer),
    utmSource: opt(r.utm_source),
    visitorCompany: opt(r.visitor_company),
    status: s(r.status),
    emailDelivered: n(r.email_delivered) === 1,
  }));

  return {
    days,
    since,
    totals: {
      pageviews: n(totals[0]?.pageviews),
      visitors: n(totals[0]?.visitors),
      sessions: n(totals[0]?.sessions),
      leads: n(leadCount[0]?.c),
      identifiedCompanies: n(totals[0]?.companies),
    },
    previous: {
      pageviews: n(prev[0]?.pageviews),
      visitors: n(prev[0]?.visitors),
      sessions: n(prev[0]?.sessions),
      leads: n(prevLeads[0]?.c),
    },
    daily,
    sections,
    pages,
    sources,
    countries,
    companies,
    leads,
    companyLookupEnabled: Boolean(process.env.IPINFO_TOKEN),
  };
}

/** "up 25% vs previous 7 days" — plain-language change, safe when the earlier period was empty. */
export function changeText(now: number, before: number, days: number): string {
  if (before === 0) return now === 0 ? `no activity in either ${days}-day period` : `new — none in the previous ${days} days`;
  const pct = Math.round(((now - before) / before) * 100);
  if (pct === 0) return `unchanged vs previous ${days} days`;
  return `${pct > 0 ? "up" : "down"} ${Math.abs(pct)}% vs previous ${days} days (${before})`;
}

export function fmtIst(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}
