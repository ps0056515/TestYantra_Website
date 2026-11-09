import { ADMIN_COOKIE, adminConfigured, checkPassword, makeSessionToken } from "@/lib/adminAuth";
import { clientIp, rateLimit } from "@/lib/tracking";

export const runtime = "nodejs";

const redirect = (to: string, cookie?: string) =>
  new Response(null, { status: 303, headers: { Location: to, ...(cookie ? { "Set-Cookie": cookie } : {}) } });

export async function POST(request: Request) {
  if (!adminConfigured()) return redirect("/admin/login?error=config");
  if (!rateLimit(`login:${clientIp(request.headers) ?? "x"}`, 8, 10 * 60_000)) return redirect("/admin/login?error=rate");

  const form = await request.formData();
  if (!checkPassword(String(form.get("password") ?? ""))) return redirect("/admin/login?error=bad");

  const { value, maxAgeSeconds } = makeSessionToken();
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return redirect(
    "/admin",
    `${ADMIN_COOKIE}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAgeSeconds}${secure}`,
  );
}
