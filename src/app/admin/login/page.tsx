import { adminConfigured } from "@/lib/adminAuth";

const ERRORS: Record<string, string> = {
  bad: "Incorrect password.",
  rate: "Too many attempts. Try again in a few minutes.",
  config: "ADMIN_PASSWORD is not set on the server.",
};

export default async function AdminLogin({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  const configured = adminConfigured();

  return (
    <div className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6">
      <h1 className="text-2xl font-bold">TestYantra Admin</h1>
      <p className="mt-1 text-sm text-slate-500">Enquiries, traffic and account insights.</p>

      {!configured ? (
        <p className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
          Admin is disabled. Set <code>ADMIN_PASSWORD</code> in the server environment and restart.
        </p>
      ) : (
        <form method="post" action="/api/admin/login" className="mt-6 space-y-4">
          <input
            type="password"
            name="password"
            required
            autoFocus
            autoComplete="current-password"
            placeholder="Admin password"
            className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-slate-900"
          />
          {error && ERRORS[error] ? <p className="text-sm text-red-600">{ERRORS[error]}</p> : null}
          <button type="submit" className="h-11 w-full rounded-lg bg-slate-900 text-sm font-semibold text-white">
            Sign in
          </button>
        </form>
      )}
    </div>
  );
}
