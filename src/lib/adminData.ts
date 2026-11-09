import { getDb } from "@/lib/db";

/** Dashboard day-buckets use India Standard Time (UTC+5:30). */
const TZ = "+330 minutes";

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

export function getDashboard(days: number): Dashboard {
  const db = getDb();
  const since = new Date(Date.now() - days * 86_400_000).toISOString();

  const t = db.get(
    `SELECT COUNT(*) AS pageviews, COUNT(DISTINCT visitor_hash) AS visitors, COUNT(DISTINCT session_id) AS sessions,
            COUNT(DISTINCT company) AS companies FROM visits WHERE created_at >= ?`,
    since,
  );
  const leadCount = db.get("SELECT COUNT(*) AS c FROM leads WHERE created_at >= ?", since);

  const viewsByDay = new Map(
    db
      .all(
        `SELECT date(created_at, '${TZ}') AS d, COUNT(*) AS c FROM visits WHERE created_at >= ? GROUP BY d`,
        since,
      )
      .map((r) => [s(r.d), n(r.c)]),
  );
  const leadsByDay = new Map(
    db
      .all(
        `SELECT date(created_at, '${TZ}') AS d, COUNT(*) AS c FROM leads WHERE created_at >= ? GROUP BY d`,
        since,
      )
      .map((r) => [s(r.d), n(r.c)]),
  );
  const daily: Dashboard["daily"] = [];
  for (let i = days - 1; i >= 0; i--) {
    const day = new Date(Date.now() + 330 * 60_000 - i * 86_400_000).toISOString().slice(0, 10);
    daily.push({ day, views: viewsByDay.get(day) ?? 0, leads: leadsByDay.get(day) ?? 0 });
  }

  const grouped = (expr: string, limit: number, where = "1=1"): Count[] =>
    db
      .all(
        `SELECT ${expr} AS label, COUNT(*) AS views, COUNT(DISTINCT visitor_hash) AS visitors
         FROM visits WHERE created_at >= ? AND ${where} GROUP BY label ORDER BY views DESC LIMIT ${limit}`,
        since,
      )
      .map((r) => ({ label: s(r.label), views: n(r.views), visitors: n(r.visitors) }));

  const companies: CompanyRow[] = db
    .all(
      `SELECT company, MAX(company_domain) AS domain, COUNT(*) AS views, COUNT(DISTINCT session_id) AS sessions,
              MAX(created_at) AS last_seen, group_concat(DISTINCT section) AS sections
       FROM visits WHERE created_at >= ? AND company IS NOT NULL
       GROUP BY company ORDER BY views DESC, last_seen DESC LIMIT 25`,
      since,
    )
    .map((r) => ({
      company: s(r.company),
      domain: r.domain ? s(r.domain) : null,
      views: n(r.views),
      sessions: n(r.sessions),
      lastSeen: s(r.last_seen),
      sections: s(r.sections),
      pages: db
        .all(
          `SELECT path, COUNT(*) AS c FROM visits WHERE created_at >= ? AND company = ? GROUP BY path ORDER BY c DESC LIMIT 6`,
          since,
          s(r.company),
        )
        .map((p) => s(p.path)),
    }));

  const leads: LeadRow[] = db
    .all("SELECT * FROM leads WHERE created_at >= ? ORDER BY id DESC LIMIT 200", since)
    .map((r) => ({
      id: n(r.id),
      createdAt: s(r.created_at),
      name: s(r.name),
      email: s(r.email),
      emailDomain: r.email_domain ? s(r.email_domain) : null,
      interest: r.interest ? s(r.interest) : null,
      industry: r.industry ? s(r.industry) : null,
      message: r.message ? s(r.message) : null,
      section: r.section ? s(r.section) : null,
      sourcePath: r.source_path ? s(r.source_path) : null,
      referrer: r.referrer ? s(r.referrer) : null,
      utmSource: r.utm_source ? s(r.utm_source) : null,
      visitorCompany: r.visitor_company ? s(r.visitor_company) : null,
      status: s(r.status),
      emailDelivered: n(r.email_delivered) === 1,
    }));

  return {
    days,
    since,
    totals: {
      pageviews: n(t?.pageviews),
      visitors: n(t?.visitors),
      sessions: n(t?.sessions),
      leads: n(leadCount?.c),
      identifiedCompanies: n(t?.companies),
    },
    daily,
    sections: grouped("section", 6),
    pages: grouped("path", 12),
    sources: grouped("COALESCE(utm_source, referrer_host, 'Direct / none')", 10),
    countries: grouped("country", 8, "country IS NOT NULL"),
    companies,
    leads,
    companyLookupEnabled: Boolean(process.env.IPINFO_TOKEN),
  };
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
