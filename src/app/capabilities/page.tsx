import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { capabilities } from "@/content/capabilities";

export const metadata = {
  title: "Capabilities — TestYantra Quality Engineering",
  description:
    "Four capability pillars: Quality Assurance, Quality Engineering, Intelligent Automation and Development & DevOps — delivered by 2,200+ engineers across 11+ global locations.",
};

export default function CapabilitiesPage() {
  return (
    <V2InnerShell>
      {/* Hero */}
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Our Capabilities</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl leading-tight">
          Engineering quality across<br />every dimension of delivery
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--muted2)] max-w-2xl">
          Four distinct practice areas — Quality Assurance, Quality Engineering, Intelligent Automation and Development & DevOps — each world-class in isolation, unstoppable in combination.
        </p>
      </div>

      {/* Stats strip */}
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { n: "2,200+", l: "Automation Engineers" },
          { n: "360+", l: "Global Clients" },
          { n: "17+", l: "Years of Expertise" },
          { n: "11+", l: "Global Locations" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-5 py-4">
            <div className="text-2xl font-bold text-[var(--accent)]">{s.n}</div>
            <div className="mt-1 text-xs text-[var(--muted)]">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Capability cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {capabilities.map((cap, i) => (
          <Link
            key={cap.slug}
            href={`/capabilities/${cap.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-8 transition hover:border-[var(--border2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            {/* accent bar top */}
            <div
              className="absolute inset-x-0 top-0 h-1 rounded-t-2xl opacity-70 group-hover:opacity-100 transition"
              style={{ background: cap.color }}
            />

            <div className="flex items-start gap-4">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl"
                style={{ background: `${cap.color}18`, border: `1px solid ${cap.color}30` }}
              >
                {cap.icon}
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: cap.color }}>
                  0{i + 1}
                </div>
                <h2 className="mt-0.5 text-xl font-semibold text-[var(--text)] group-hover:text-white transition">
                  {cap.title}
                </h2>
                <p className="mt-0.5 text-xs italic text-[var(--muted)]">{cap.tagline}</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-[var(--muted2)]">{cap.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {cap.services.slice(0, 3).map((s) => (
                <span
                  key={s.name}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 text-xs text-[var(--muted2)]"
                >
                  {s.name}
                </span>
              ))}
              {cap.services.length > 3 && (
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 text-xs text-[var(--muted)]">
                  +{cap.services.length - 3} more
                </span>
              )}
            </div>

            <div className="mt-6 flex items-center gap-1 text-sm font-medium" style={{ color: cap.color }}>
              Explore {cap.title} →
            </div>
          </Link>
        ))}
      </div>

      {/* Why our capabilities */}
      <div className="mt-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Why TestYantra</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)] sm:text-3xl">
          The engineering depth that sets us apart
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { icon: "🧬", title: "Deep Engineering DNA", desc: "17+ years of pure quality engineering focus — not a bolt-on department, but our core identity. Every capability is driven by engineers who have lived these challenges." },
            { icon: "🤖", title: "AI-First by Design", desc: "AI and machine learning are woven into every practice area — from intelligent test generation to predictive defect analytics and self-healing frameworks." },
            { icon: "🌍", title: "Global Delivery at Scale", desc: "2,200+ engineers across 11+ locations deliver follow-the-sun quality coverage for enterprises that operate around the clock and cannot afford downtime." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-6">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-3 text-base font-semibold text-[var(--text)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-[var(--accent)] bg-[var(--bg2)] p-10 text-center">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Not sure which capability fits your needs?</h2>
        <p className="mt-3 text-sm text-[var(--muted2)] max-w-lg mx-auto">
          Our experts will run a free QA maturity assessment and recommend the right capability mix for your engineering organisation.
        </p>
        <Link href="/contact" className="btn-accent mt-6 inline-block">
          Get a Free Assessment →
        </Link>
      </div>
    </V2InnerShell>
  );
}
