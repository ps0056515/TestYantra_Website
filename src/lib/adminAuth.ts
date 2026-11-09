import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "ty_admin";
const SESSION_MS = 12 * 60 * 60 * 1000;

export function adminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

function key(): string {
  return process.env.ADMIN_SECRET ?? process.env.ADMIN_PASSWORD ?? "";
}

function sign(payload: string): string {
  return createHmac("sha256", key()).update(payload).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

export function checkPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  // Compare HMACs so length differences do not leak through timing.
  return safeEqual(sign(`pw:${input}`), sign(`pw:${expected}`));
}

export function makeSessionToken(): { value: string; maxAgeSeconds: number } {
  const exp = String(Date.now() + SESSION_MS);
  return { value: `${exp}.${sign(exp)}`, maxAgeSeconds: SESSION_MS / 1000 };
}

function validToken(token: string | undefined): boolean {
  if (!token || !adminConfigured()) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  return safeEqual(sig, sign(exp));
}

/** For Server Components. */
export async function isAdmin(): Promise<boolean> {
  const jar = await cookies();
  return validToken(jar.get(ADMIN_COOKIE)?.value);
}

/** For Route Handlers. */
export function isAdminRequest(request: Request): boolean {
  const header = request.headers.get("cookie") ?? "";
  const match = header.split(";").map((c) => c.trim()).find((c) => c.startsWith(`${ADMIN_COOKIE}=`));
  return validToken(match?.slice(ADMIN_COOKIE.length + 1));
}
