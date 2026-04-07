import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";

const achievements = [
  "Built a globally distributed quality engineering organisation serving 360+ enterprise clients across 7 industries.",
  "Established a crowd testing service platform for scalable, real-world QA coverage across B2B and B2C applications.",
  "Founded QSpiders and JSpiders — India's leading software testing and development training institutions — with 600,000+ certified trainees.",
  "Grew a high-performing delivery organisation spanning India, USA, UK, Ireland, Netherlands, Canada, and Australia.",
  "Pioneered AI-augmented quality engineering practices, embedding machine learning and generative AI into QA delivery pipelines.",
  "Built a QA Centre of Excellence model adopted by Tier-1 banks, global telecoms, healthcare platforms, and retail enterprises.",
];

const principles = [
  {
    k: "Clarity",
    v: "Simple systems, measurable quality gates, and transparent reporting — so every stakeholder knows exactly where quality stands.",
  },
  {
    k: "Speed",
    v: "Fail early, learn fast, and automate deeply. Quality that slows delivery is not quality — it is overhead.",
  },
  {
    k: "Trust",
    v: "Predictable delivery, honest communication, and outcomes you can take to the board. We earn trust through consistency.",
  },
  {
    k: "Innovation",
    v: "We stay ahead of the curve — adopting AI, shifting left, and continuously improving the way we engineer quality.",
  },
];

const milestones = [
  { year: "2007", event: "TestYantra founded in Bangalore, India" },
  { year: "2010", event: "QSpiders established — India's first specialist QA training institution" },
  { year: "2013", event: "JSpiders launched for Java/J2EE development training" },
  { year: "2015", event: "Expanded to UK and USA — first global delivery centres" },
  { year: "2018", event: "Crowd testing platform launched for real-world device coverage" },
  { year: "2021", event: "AI engineering practice established — self-healing automation & predictive analytics" },
  { year: "2024", event: "Expanded to 7 global locations; 360+ active enterprise clients" },
];

export default function LeadershipPage() {
  return (
    <V2InnerShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          Company
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Leadership that turns strategy into execution.
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted2)]">
          The story behind TestYantra is a delivery-first mindset: translate vision into repeatable
          systems — teams, platforms, and practices — that consistently improve outcomes for our clients.
          Over 17 years, that philosophy has grown into a globally trusted quality engineering partner
          serving the world&apos;s leading enterprises.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 lg:col-span-2 shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
            What this leadership has built
          </div>
          <ul className="mt-4 grid gap-3">
            {achievements.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm leading-6 text-[var(--muted2)]">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--indigo,rgba(174,120,255,0.7))]" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
            Operating principles
          </div>
          <div className="mt-4 grid gap-3">
            {principles.map((x) => (
              <div
                key={x.k}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
              >
                <div className="text-sm font-semibold tracking-tight text-[var(--text)]">{x.k}</div>
                <div className="mt-1 text-xs leading-5 text-[var(--muted2)]">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
          Our journey
        </div>
        <div className="mt-4 grid gap-3">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-4 py-3"
            >
              <div className="w-12 shrink-0 text-sm font-bold text-[var(--accent)]">{m.year}</div>
              <div className="text-sm leading-6 text-[var(--muted2)]">{m.event}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: "17+", label: "Years in business" },
          { value: "360+", label: "Active enterprise clients" },
          { value: "7", label: "Global office locations" },
          { value: "600k+", label: "Certified trainees" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] px-5 py-4"
          >
            <div className="text-2xl font-bold tracking-tight text-[var(--accent)]">{s.value}</div>
            <div className="mt-1 text-sm text-[var(--muted2)]">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Get in touch
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
              Partner with us on your quality engineering goals
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">
              Whether you&apos;re building a QA Centre of Excellence, scaling automation, or
              transforming your delivery pipeline, our team is ready to help.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:w-auto"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </V2InnerShell>
  );
}
