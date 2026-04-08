import Link from "next/link";
import Image from "next/image";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { industries } from "@/content/site";
import { INDUSTRY_ART } from "@/components/v2/IndustryArt";
import { ArrowRight } from "lucide-react";

export default function IndustriesPage() {
  return (
    <V2InnerShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          Industries
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Industry context built into delivery.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[var(--muted2)] sm:text-base">
          Quality and capability programs tuned to how your customers behave,
          how your systems integrate, and what your business cannot afford to
          break.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {industries.map((ind) => {
          return (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition hover:border-[var(--border2)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)]"
            >
              <div className="relative h-44 w-full overflow-hidden p-3">
                <Image
                  src={INDUSTRY_ART[ind.slug]}
                  alt={ind.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain object-center [filter:var(--image-content-shadow)] transition duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition">
                      {ind.name}
                    </div>
                    <div className="mt-1.5 text-sm leading-6 text-[var(--muted2)]">
                      {ind.summary}
                    </div>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[var(--muted)] transition group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                </div>

                {/* Sub-vertical chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {ind.subVerticals.map((sv) => (
                    <span
                      key={sv.name}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 text-xs text-[var(--muted2)]"
                    >
                      {sv.name}
                    </span>
                  ))}
                </div>

                {/* Stats row */}
                <div className="mt-5 flex flex-wrap gap-4 border-t border-[var(--border)] pt-4">
                  {ind.stats.slice(0, 3).map((s) => (
                    <div key={s.label}>
                      <div className="text-sm font-semibold text-[var(--text)]">
                        {s.value}
                      </div>
                      <div className="text-xs text-[var(--muted)]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Don&apos;t see your sector?
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
              We work across many more industries
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">
              TestYantra&apos;s quality engineering practice spans healthcare,
              government, logistics, energy, and more. Tell us about your
              context and we&apos;ll show you how we can help.
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
