import { isAdminRequest } from "@/lib/adminAuth";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";

const STATUSES = ["new", "contacted", "qualified", "won", "lost", "spam"];

export async function POST(request: Request) {
  if (!isAdminRequest(request)) return new Response("Unauthorized", { status: 401 });

  const form = await request.formData();
  const id = Number(form.get("id"));
  const status = String(form.get("status") ?? "");
  if (Number.isInteger(id) && STATUSES.includes(status)) {
    getDb().run("UPDATE leads SET status = ? WHERE id = ?", status, id);
  }
  return new Response(null, { status: 303, headers: { Location: "/admin#leads" } });
}
