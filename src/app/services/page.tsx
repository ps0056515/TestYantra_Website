import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { services } from "@/content/site";

export default function ServicesPage() {
  return (
    <V2InnerShell>
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Services</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Quality engineering, delivered in the shape you need.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[var(--muted2)] sm:text-base">
          Build confidence at every stage—strategy, automation, execution, and capability uplift.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {services.map((svc) => (
          <Link
            key={svc.slug}
            href={`/services/${svc.slug}`}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition hover:border-[var(--border2)] hover:bg-[var(--bg3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold tracking-tight text-[var(--text)]">{svc.name}</div>
                <div className="mt-2 text-sm leading-6 text-[var(--muted2)]">{svc.summary}</div>
              </div>
              <div className="mt-1 text-sm text-[var(--muted)] transition group-hover:text-[var(--text)]">→</div>
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {svc.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted2)]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </V2InnerShell>
  );
}
