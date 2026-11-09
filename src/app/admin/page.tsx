import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/adminAuth";
import { dbConfigured } from "@/lib/db";
import { changeText, fmtIst, getDashboard, type Count } from "@/lib/adminData";
import { AiSummaryPanel } from "./AiSummaryPanel";

export const dynamic = "force-dynamic";

const SECTION_LABEL: Record<string, string> = {
  gateway: "Gateway (home)",
  qe: "Quality Engineering",
  ai: "App Engineering & AI",
  company: "Company / Contact / Insights",
  other: "Other",
};
const STATUSES = ["new", "contacted", "qualified", "won", "lost", "spam"];

function Card({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-3xl font-bold">{value}</div>
      {hint ? <div className="mt-1 text-xs text-slate-400">{hint}</div> : null}
    </div>
  );
}

function Panel({ title, id, children }: { title: string; id?: string; children: React.ReactNode }) {
  return (
    <div id={id} className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="mb-3 text-base font-bold">{title}</h2>
      {children}
    </div>
  );
}

function Bars({ rows, labelMap }: { rows: Count[]; labelMap?: Record<string, string> }) {
  const max = Math.max(1, ...rows.map((r) => r.views));
  if (!rows.length) return <p className="text-sm text-slate-400">No data yet.</p>;
  return (
    <ul className="space-y-2">
      {rows.map((r) => (
        <li key={r.label} className="text-sm">
          <div className="flex justify-between gap-3">
            <span className="truncate">{labelMap?.[r.label] ?? r.label}</span>
            <span className="shrink-0 text-slate-500">
              {r.views} <span className="text-slate-300">·</span> {r.visitors} visitors
            </span>
          </div>
          <div className="mt-1 h-1.5 rounded bg-slate-100">
            <div className="h-1.5 rounded bg-indigo-500" style={{ width: `${(r.views / max) * 100}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

function DbProblem({ message }: { message: string }) {
  return (
    <div className="mx-auto max-w-xl px-6 py-24">
      <h1 className="text-xl font-bold">Database not connected</h1>
      <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">{message}</p>
      <p className="mt-3 text-sm text-slate-500">Until then, enquiries are still emailed but not saved here, and visits are not recorded.</p>
    </div>
  );
}

export default async function AdminDashboard({ searchParams }: { searchParams: Promise<{ days?: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");

  const { days: d } = await searchParams;
  const days = [7, 30, 90].includes(Number(d)) ? Number(d) : 7;

  if (!dbConfigured()) return <DbProblem message="DATABASE_URL is not set. Add your Neon connection string to the server environment and restart." />;
  let data: Awaited<ReturnType<typeof getDashboard>>;
  try {
    data = await getDashboard(days);
  } catch (err) {
    console.error("[admin] dashboard query failed", err);
    return <DbProblem message="Could not reach the database. Check that DATABASE_URL is correct and the Neon project is active." />;
  }
  const { totals } = data;
  const maxDay = Math.max(1, ...data.daily.map((x) => x.views));
  const conv = totals.sessions ? ((totals.leads / totals.sessions) * 100).toFixed(1) : "0";

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">TestYantra Admin</h1>
          <p className="text-sm text-slate-500">Enquiries, traffic and the companies looking at us. Times in IST.</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          {[7, 30, 90].map((x) => (
            <Link
              key={x}
              href={`/admin?days=${x}`}
              className={`rounded-lg border px-3 py-1.5 font-semibold ${
                x === days ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white"
              }`}
            >
              {x}d
            </Link>
          ))}
          <a href="/api/admin/leads.csv" className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-semibold">
            Export leads CSV
          </a>
          <form method="post" action="/api/admin/logout">
            <button className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-semibold">Sign out</button>
          </form>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        <Card label="Page views" value={totals.pageviews} hint={changeText(totals.pageviews, data.previous.pageviews, days)} />
        <Card label="Unique visitors" value={totals.visitors} hint={changeText(totals.visitors, data.previous.visitors, days)} />
        <Card label="Visits" value={totals.sessions} hint="one browsing session = one visit" />
        <Card label="Enquiries" value={totals.leads} hint={`${conv} per 100 visits · ${changeText(totals.leads, data.previous.leads, days)}`} />
        <Card label="Companies identified" value={totals.identifiedCompanies} hint="businesses whose network visited" />
      </div>

      <AiSummaryPanel days={days} />

      <Panel title="Page views per day">
        <div className="flex h-28 items-end gap-1">
          {data.daily.map((x) => (
            <div key={x.day} className="group relative flex flex-1 flex-col items-center justify-end" title={`${x.day}: ${x.views} views, ${x.leads} enquiries`}>
              {x.leads > 0 ? <span className="mb-0.5 text-[10px] font-bold text-emerald-600">{x.leads}</span> : null}
              <div className="w-full rounded-t bg-indigo-500/80" style={{ height: `${Math.max(2, (x.views / maxDay) * 100)}%` }} />
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-400">Green numbers above a bar are enquiries received that day.</p>
      </Panel>

      <Panel title="Companies looking at the site" id="companies">
        {!data.companyLookupEnabled ? (
          <p className="mb-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
            Company identification is <strong>off</strong>. Add an <code>IPINFO_TOKEN</code> (IPinfo Company API) on the server
            to resolve visiting networks to company names. Enquiries below still show the company from the sender&apos;s email domain.
          </p>
        ) : null}
        {data.companies.length === 0 ? (
          <p className="text-sm text-slate-400">No identified companies in this period.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="py-2 pr-4">Company</th>
                  <th className="pr-4">Views</th>
                  <th className="pr-4">Visits</th>
                  <th className="pr-4">Interest</th>
                  <th className="pr-4">Top pages</th>
                  <th>Last seen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.companies.map((c) => (
                  <tr key={c.company} className="align-top">
                    <td className="py-2 pr-4 font-semibold">
                      {c.company}
                      {c.domain ? <div className="text-xs font-normal text-slate-400">{c.domain}</div> : null}
                    </td>
                    <td className="pr-4">{c.views}</td>
                    <td className="pr-4">{c.sessions}</td>
                    <td className="pr-4">{c.sections.split(",").map((k) => SECTION_LABEL[k] ?? k).join(", ")}</td>
                    <td className="pr-4 text-xs text-slate-600">{c.pages.join(" · ")}</td>
                    <td className="whitespace-nowrap text-slate-500">{fmtIst(c.lastSeen)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>

      <Panel title={`Enquiries (${data.leads.length})`} id="leads">
        {data.leads.length === 0 ? (
          <p className="text-sm text-slate-400">No enquiries in this period.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="py-2 pr-4">When</th>
                  <th className="pr-4">Contact</th>
                  <th className="pr-4">Company</th>
                  <th className="pr-4">Interested in</th>
                  <th className="pr-4">Came from</th>
                  <th className="pr-4">Message</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.leads.map((l) => (
                  <tr key={l.id} className="align-top">
                    <td className="whitespace-nowrap py-2 pr-4 text-slate-500">
                      {fmtIst(l.createdAt)}
                      {!l.emailDelivered ? <div className="text-[11px] font-semibold text-amber-600">email not sent</div> : null}
                    </td>
                    <td className="pr-4">
                      <div className="font-semibold">{l.name}</div>
                      <a href={`mailto:${l.email}`} className="text-xs text-indigo-600">{l.email}</a>
                    </td>
                    <td className="pr-4">
                      {l.visitorCompany ?? l.emailDomain ?? "—"}
                      {l.visitorCompany && l.emailDomain ? <div className="text-xs text-slate-400">{l.emailDomain}</div> : null}
                    </td>
                    <td className="pr-4">
                      {l.interest}
                      <div className="text-xs text-slate-400">{l.industry}</div>
                    </td>
                    <td className="pr-4 text-xs text-slate-600">
                      <div>{SECTION_LABEL[l.section ?? ""] ?? l.section}</div>
                      <div className="text-slate-400">{l.sourcePath}</div>
                      <div className="text-slate-400">{l.utmSource ?? l.referrer ?? "Direct"}</div>
                    </td>
                    <td className="max-w-xs pr-4">
                      <details>
                        <summary className="cursor-pointer text-slate-600">{(l.message ?? "").slice(0, 60)}{(l.message ?? "").length > 60 ? "…" : ""}</summary>
                        <p className="mt-2 whitespace-pre-wrap text-slate-800">{l.message}</p>
                      </details>
                    </td>
                    <td>
                      <form method="post" action="/api/admin/lead-status" className="flex gap-1">
                        <input type="hidden" name="id" value={l.id} />
                        <select name="status" defaultValue={l.status} className="rounded border border-slate-300 bg-white px-1 py-1 text-xs">
                          {STATUSES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <button className="rounded border border-slate-300 px-2 text-xs font-semibold">Save</button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="By section">
          <Bars rows={data.sections} labelMap={SECTION_LABEL} />
        </Panel>
        <Panel title="Top pages">
          <Bars rows={data.pages} />
        </Panel>
        <Panel title="Where visitors come from">
          <Bars rows={data.sources} />
        </Panel>
        <Panel title="Countries">
          <Bars rows={data.countries} />
          {data.countries.length === 0 ? (
            <p className="mt-1 text-xs text-slate-400">Country needs a CDN header (e.g. Cloudflare <code>CF-IPCountry</code>).</p>
          ) : null}
        </Panel>
      </div>
    </div>
  );
}
