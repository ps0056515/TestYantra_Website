import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { caseStudies } from "@/content/site";

export default function ClientSuccessPage() {
  return (
    <V2InnerShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Client success</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Proof that executives can act on.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[var(--muted2)] sm:text-base">
          Outcomes-focused stories that connect training and capability programs to readiness, productivity, and internal
          mobility.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {caseStudies.map((cs) => (
          <div
            key={cs.title}
            className="flex min-h-0 flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.2)]"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">{cs.industry}</div>
            <div className="mt-2 text-lg font-semibold tracking-tight text-[var(--text)]">{cs.title}</div>
            <div className="mt-4 grid gap-3">
              <Block label="Problem" text={cs.problem} />
              <Block label="Approach" text={cs.approach} />
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {cs.results.map((r) => (
                <div key={r.label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">{r.label}</div>
                  <div className="mt-1 text-sm font-semibold tracking-tight text-[var(--text)]">{r.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-1 flex-col justify-end border-t border-[var(--border)] pt-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-[var(--muted)]">More detailed stories can be added next.</p>
                <Link
                  href="/contact"
                  className="inline-flex h-10 shrink-0 items-center justify-center self-start rounded-full bg-[var(--accent)] px-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:self-center"
                >
                  Request relevant examples
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </V2InnerShell>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">{label}</div>
      <div className="mt-1 text-sm leading-6 text-[var(--muted2)]">{text}</div>
    </div>
  );
}
