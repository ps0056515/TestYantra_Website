import Link from "next/link";
import { Container } from "@/components/Container";
import { OutcomesGraph } from "@/components/OutcomesGraph";
import { RoiEstimator } from "@/components/RoiEstimator";
import {
  caseStudies,
  ldOutcomeMetrics,
  ldOutcomesPillars,
  ldRoiDefaults,
} from "@/content/site";

export default function OutcomesPage() {
  return (
    <div className="bg-white pb-12 pt-[124px] text-foreground sm:pb-16 sm:pt-[132px]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgba(86,220,255,0.85)]" />
              Enterprise L&D ROI • Skills intelligence
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Prove learning impact with AI-guided skills signals.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Build readiness faster, validate proficiency, and show leaders the outcomes that
              matter: time-to-competency, completion, mobility, and confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#roi"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Run ROI estimate
              </a>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-card-border bg-card px-6 text-sm font-semibold text-foreground transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Talk to an L&D specialist
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-card-border bg-card p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                What leaders get
              </div>
              <div className="mt-4 grid gap-3">
                {ldOutcomesPillars.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-xl border border-card-border/60 bg-black/10 p-4"
                  >
                    <div className="text-sm font-semibold tracking-tight">{p.title}</div>
                    <div className="mt-1 text-sm leading-6 text-muted">{p.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <OutcomesGraph metrics={ldOutcomeMetrics} />
        </div>

        <div id="roi" className="mt-12 scroll-mt-24">
          <RoiEstimator defaults={ldRoiDefaults} />
        </div>

        <div className="mt-12">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                Customer stories
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Outcomes you can take to the board.
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                A few examples of how skills programs translate into readiness and measurable impact.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="rounded-2xl border border-card-border bg-card p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {cs.industry}
                </div>
                <div className="mt-2 text-lg font-semibold tracking-tight">{cs.title}</div>
                <div className="mt-4 grid gap-3">
                  <Block label="Problem" text={cs.problem} />
                  <Block label="Approach" text={cs.approach} />
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {cs.results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-xl border border-card-border/60 bg-black/10 p-4"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {r.label}
                      </div>
                      <div className="mt-1 text-sm font-semibold tracking-tight">{r.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-card-border bg-card p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                Next step
              </div>
              <div className="mt-2 text-xl font-semibold tracking-tight">
                Want an ROI-ready cohort plan for your roles?
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                We’ll map roles to skills, define measurable readiness criteria, and propose a
                cohort plan with signals leaders can track.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring sm:w-auto"
              >
                Get a cohort plan
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl border border-card-border/60 bg-black/10 p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</div>
      <div className="mt-1 text-sm leading-6 text-muted">{text}</div>
    </div>
  );
}

