import { isAdminRequest } from "@/lib/adminAuth";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";

const cell = (v: unknown) => {
  let s = v == null ? "" : String(v);
  if (/^[=+\-@]/.test(s)) s = `'${s}`; // neutralise spreadsheet formula injection
  return `"${s.replace(/"/g, '""')}"`;
};

export async function GET(request: Request) {
  if (!isAdminRequest(request)) return new Response("Unauthorized", { status: 401 });

  const rows = getDb().all("SELECT * FROM leads ORDER BY id DESC");
  const cols = [
    "id", "created_at", "name", "email", "email_domain", "interest", "industry", "message", "marketing_opt_in",
    "section", "source_path", "referrer", "utm_source", "utm_medium", "utm_campaign", "visitor_company", "status", "email_delivered",
  ];
  const csv = [cols.join(","), ...rows.map((r) => cols.map((c) => cell(r[c])).join(","))].join("\r\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="testyantra-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
