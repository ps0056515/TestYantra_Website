import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";

export type ServiceLandingProps = {
  eyebrow: string;
  h1: string;
  subtitle: string;
  bullets: string[];
  proof: { value: string; label: string }[];
  contactHref: string;
  relatedHref: string;
  relatedLabel: string;
};

export function ServiceLandingPage({
  eyebrow,
  h1,
  subtitle,
  bullets,
  proof,
  contactHref,
  relatedHref,
  relatedLabel,
}: ServiceLandingProps) {
  return (
    <V2InnerShell>
      <div className="relative overflow-hidden mb-16 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-14">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent)]/5 pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <ScrollAnimate direction="up">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-4">{eyebrow}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight mb-6">
              {h1}
            </h1>
            <p className="text-base md:text-lg text-[var(--muted2)] leading-relaxed mb-8">{subtitle}</p>
            <Link href={contactHref} className="btn-accent inline-flex h-12 items-center px-8 text-sm font-bold">
              Request a consultation →
            </Link>
          </ScrollAnimate>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 mb-16">
        <ScrollAnimate direction="up">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-6">What you get</h2>
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-[var(--muted2)]">
                <span className="text-[var(--accent)] font-bold">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </ScrollAnimate>
        <ScrollAnimate direction="up" delay={100}>
          <div className="grid grid-cols-2 gap-4">
            {proof.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl border border-[var(--border2)] bg-[var(--surface)] p-6 text-center"
              >
                <div className="text-2xl font-black text-[var(--text)]">{p.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimate>
      </div>

      <ScrollAnimate direction="up">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10 text-center">
          <h2 className="text-xl font-bold text-[var(--text)] mb-3">Talk to a specialist</h2>
          <p className="text-sm text-[var(--muted2)] mb-6 max-w-lg mx-auto">
            Share your release cadence and goals — we typically respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={contactHref} className="btn-accent inline-flex h-12 items-center justify-center px-8 text-sm font-bold">
              Submit enquiry
            </Link>
            <Link
              href={relatedHref}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border2)] px-8 text-sm font-bold text-[var(--text)] hover:border-[var(--accent)]"
            >
              {relatedLabel}
            </Link>
          </div>
        </div>
      </ScrollAnimate>
    </V2InnerShell>
  );
}
