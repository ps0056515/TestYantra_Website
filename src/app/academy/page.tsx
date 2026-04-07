import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";

export default function AcademyPage() {
  return (
    <V2InnerShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          Academy
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Two learning engines. One mission: job-ready capability.
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted2)] sm:text-lg">
          TestYantra delivers training-as-a-service for fresh job aspirants and enterprise teams through
          its two specialist learning units — QSpiders (software testing) and JSpiders (Java/J2EE
          development). With 600,000+ certified trainees, we are one of India&apos;s most trusted
          technology learning organisations.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <AcademyCard
          eyebrow="Software Testing"
          title="QSpiders"
          description="A best-in-class learning solutions organisation headquartered in Bangalore, offering structured software testing programmes with official ISTQB® partnership. QSpiders has trained and placed thousands of quality engineers across the IT industry."
          highlights={[
            "Specialist faculty with deep software testing domain expertise",
            "Structured, outcome-focused learning paths for aspirants",
            "Official ISTQB® Accredited Training Organisation (ATO)",
            "Placement assistance and employer hiring support at scale",
          ]}
          ctaHref="http://qspiders.com/"
          ctaLabel="Visit QSpiders"
        />
        <AcademyCard
          eyebrow="Java / J2EE Development"
          title="JSpiders"
          description="A finishing-school approach that bridges the gap between academic curricula and industry-ready Java development skills. JSpiders is designed for the needs of India's IT hubs and produces work-ready engineers who contribute from day one."
          highlights={[
            "Role-ready Java and J2EE learning paths",
            "Practical projects, assignments, and expert mentorship",
            "Tailored to the hiring requirements of leading IT companies",
            "Placement support and career guidance included",
          ]}
          ctaHref="http://www.jspiders.com"
          ctaLabel="Visit JSpiders"
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <StatCard value="600k+" label="Certified trainees" />
        <StatCard value="3,700+" label="Career testers placed" />
        <StatCard value="13+" label="Years of learning excellence" />
      </div>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Enterprise training
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
              Need a custom cohort programme for your teams?
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">
              We design tailored learning paths, assessments, and outcomes reporting for enterprise
              hiring pipelines, QA upskilling programmes, and workforce transformation initiatives.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:w-auto"
            >
              Talk to our training team
            </Link>
          </div>
        </div>
      </div>
    </V2InnerShell>
  );
}

function AcademyCard({
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
    <div className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">{eyebrow}</div>
      <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">{title}</div>
      <p className="mt-3 text-sm leading-6 text-[var(--muted2)]">{description}</p>
      <ul className="mt-5 grid flex-1 gap-2 sm:grid-cols-2">
        {highlights.map((h) => (
          <li
            key={h}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted2)]"
          >
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--bg3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          {ctaLabel} ↗
        </a>
        <div className="text-xs text-[var(--muted)]">External site</div>
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] px-6 py-5">
      <div className="text-2xl font-bold tracking-tight text-[var(--accent)]">{value}</div>
      <div className="mt-1 text-sm text-[var(--muted2)]">{label}</div>
    </div>
  );
}
