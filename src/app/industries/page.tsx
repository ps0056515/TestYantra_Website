import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { industries } from "@/content/site";

export default function IndustriesPage() {
  return (
    <V2InnerShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Industries</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Industry context built into delivery.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[var(--muted2)] sm:text-base">
          Quality and capability programs tuned to how your customers behave, how your systems integrate, and what your
          business cannot afford to break.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {industries.map((ind) => (
          <div
            key={ind.slug}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold tracking-tight text-[var(--text)]">{ind.name}</div>
                <div className="mt-2 text-sm leading-6 text-[var(--muted2)]">{ind.summary}</div>
              </div>
              <div className="mt-1 shrink-0 text-sm text-[var(--muted)]" aria-hidden>
                ↗
              </div>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {ind.useCases.map((u) => (
                <div
                  key={u}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted2)]"
                >
                  {u}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href={`/contact?industry=${encodeURIComponent(ind.slug)}`}
                className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--border2)] bg-[var(--accent)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--accentH)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--indigo)]"
              >
                Discuss {ind.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </V2InnerShell>
  );
}
