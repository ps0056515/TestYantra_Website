import Link from "next/link";
import { Container } from "@/components/Container";

export default function AcademyPage() {
  return (
    <div className="bg-white pb-12 pt-[124px] text-foreground sm:pb-16 sm:pt-[132px]">
      <Container>
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">
            Academy
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Two learning engines. One mission: job-ready capability.
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            Test Yantra delivers training-as-a-service for fresh job aspirants through its learning
            units—QSpiders (software testing) and JSpiders (Java/J2EE development).
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card
            title="QSpiders"
            eyebrow="Software testing"
            description="A best-in-class learning solutions organization headquartered in Bangalore, with courses in software testing and official ISTQB® partnership."
            highlights={[
              "Specialist faculty with deep subject matter expertise",
              "Outcome-focused training for job aspirants",
              "Placement assistance and employer hiring support",
              "Scale: competency building at high volume",
            ]}
            ctaHref="http://qspiders.com/"
            ctaLabel="Visit QSpiders"
          />
          <Card
            title="JSpiders"
            eyebrow="Java/J2EE development"
            description="A finishing-school approach designed to bridge the gap between industry requirements and academic curricula—focused on Java development capability."
            highlights={[
              "Role-ready Java/J2EE learning paths",
              "Practical projects and mentorship",
              "Designed for the needs of IT hubs",
              "Hiring readiness and placement support",
            ]}
            ctaHref="http://www.jspiders.com"
            ctaLabel="Visit JSpiders"
          />
        </div>

        <div className="mt-10 rounded-2xl border border-card-border bg-card p-6">
          <div className="text-sm font-semibold tracking-tight">
            Want an enterprise cohort program?
          </div>
          <p className="mt-2 text-sm leading-6 text-muted">
            We can tailor learning paths, assessments, and outcomes reporting for teams and hiring
            pipelines.
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Talk to our training team
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Card({
  eyebrow,
  title,
  description,
  highlights,
  ctaHref,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div className="rounded-2xl border border-card-border bg-card p-6">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted">{eyebrow}</div>
      <div className="mt-2 text-xl font-semibold tracking-tight">{title}</div>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {highlights.map((h) => (
          <li
            key={h}
            className="rounded-xl border border-card-border/60 bg-black/10 px-3 py-2 text-xs text-muted"
          >
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between gap-4">
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-card-border bg-black/10 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {ctaLabel}
        </a>
        <div className="text-xs text-muted">External site</div>
      </div>
    </div>
  );
}

