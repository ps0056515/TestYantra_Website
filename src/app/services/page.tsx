import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { services } from "@/content/site";
import { SERVICE_ART } from "@/components/v2/ServiceArt";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <V2InnerShell>
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Services</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Quality engineering, delivered in the shape you need.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[var(--muted2)] sm:text-base">
          Strategy, automation, execution, and capability uplift — across every layer of your delivery pipeline.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {services.map((svc) => {
          const ArtComponent = SERVICE_ART[svc.slug];
          return (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition hover:border-[var(--border2)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {/* SVG art preview */}
              {ArtComponent && (
                <div className="h-40 w-full overflow-hidden">
                  <ArtComponent className="h-full w-full rounded-none transition duration-500 group-hover:scale-[1.02]" />
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition">
                      {svc.name}
                    </div>
                    <div className="mt-0.5 text-xs italic text-[var(--muted)]">{svc.tagline}</div>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[var(--muted)] transition group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">{svc.summary}</p>

                {/* Stats chips */}
                <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
                  {svc.stats.map((s) => (
                    <span key={s.label} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 text-xs text-[var(--muted2)]">
                      <span className="font-semibold text-[var(--text)]">{s.value}</span> {s.label}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Not sure where to start?
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
              Let us map the right service mix for your context
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">
              Most clients use a combination of services. Share your engineering challenge and we&apos;ll
              recommend the right starting point, delivery model, and tooling for your team.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none sm:w-auto"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </V2InnerShell>
  );
}
