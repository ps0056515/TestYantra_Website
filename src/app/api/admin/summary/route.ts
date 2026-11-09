import { isAdminRequest } from "@/lib/adminAuth";
import { getDashboard } from "@/lib/adminData";
import { generateSummary } from "@/lib/aiSummary";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isAdminRequest(request)) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await request.json().catch(() => ({}))) as { days?: number };
  const days = [7, 30, 90].includes(Number(body.days)) ? Number(body.days) : 7;
  try {
    const result = await generateSummary(await getDashboard(days));
    return Response.json(result, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("[summary] dashboard query failed", err);
    return Response.json({ error: "Database unavailable" }, { status: 503 });
  }
}
