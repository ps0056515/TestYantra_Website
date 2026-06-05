import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { businessUnits } from "@/content/site";

export default function AcademyPage() {
  const academy = businessUnits.find((u) => u.id === "academy");

  return (
    <V2InnerShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Academy</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Two learning engines. One mission: job-ready capability.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[var(--muted2)] sm:text-base">
          {academy?.description}
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
          ctaHref="https://qspiders.com/"
          ctaLabel="Visit QSpiders"
        />
        <Card
          title="JSpiders"
          eyebrow="Java/J2EE development"
          description="A finishing-school approach designed to bridge the gap between industry requirements and academic curricula — focused on Java development capability."
          highlights={[
            "Role-ready Java/J2EE learning paths",
            "Practical projects and mentorship",
            "Designed for the needs of IT hubs",
            "Hiring readiness and placement support",
          ]}
          ctaHref="https://www.jspiders.com"
          ctaLabel="Visit JSpiders"
        />
      </div>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6">
        <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
          Want an enterprise cohort program?
        </div>
        <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">
          We can tailor learning paths, assessments, and outcomes reporting for teams and hiring
          pipelines — including AI training for talent from our TestYantra AI practice.
        </p>
        <div className="mt-5">
          <Link href="/contact?interest=training" className="btn-accent">
            Talk to our training team
          </Link>
        </div>
      </div>
    </V2InnerShell>
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
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6">
      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">{eyebrow}</div>
      <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">{title}</div>
      <p className="mt-3 text-sm leading-6 text-[var(--muted2)]">{description}</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {highlights.map((h) => (
          <li
            key={h}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted2)]"
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
          className="rounded-full border border-[var(--border2)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]"
        >
          {ctaLabel} ↗
        </a>
      </div>
    </div>
  );
}
