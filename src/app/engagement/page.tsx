import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { engagementModels } from "@/content/engagement";

export const metadata = {
  title: "Engagement Models — TestYantra",
  description:
    "Five flexible engagement models — from dedicated teams and managed COEs to project-based, staff augmentation and Testing as a Service — designed to match any organisation's structure and ambition.",
};

export default function EngagementPage() {
  return (
    <V2InnerShell>
      {/* Hero */}
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Engagement Models</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl leading-tight">
          Work with TestYantra<br />the way that suits you
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--muted2)] max-w-2xl">
          Every organisation is different. That&apos;s why we offer five flexible engagement models — from a fully dedicated team to on-demand Testing as a Service. You pick the model that fits; we deliver the outcomes.
        </p>
      </div>

      {/* Model cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {engagementModels.map((model, i) => (
          <Link
            key={model.slug}
            href={`/engagement/${model.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-7 transition hover:border-[var(--border2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <div
              className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl opacity-80 group-hover:opacity-100 transition"
              style={{ background: model.color }}
            />
            <div className="flex items-start gap-3 mt-1">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                style={{ background: `${model.color}18`, border: `1px solid ${model.color}30` }}
              >
                {model.icon}
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: model.color }}>
                  Model 0{i + 1}
                </div>
                <h2 className="text-lg font-semibold text-[var(--text)] group-hover:text-white transition leading-tight">
                  {model.title}
                </h2>
              </div>
            </div>
            <p className="mt-4 text-xs italic text-[var(--muted)]">{model.tagline}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted2)]">{model.summary}</p>

            {/* Key outcomes */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              {model.outcomes.slice(0, 2).map((o) => (
                <div
                  key={o.label}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-center"
                >
                  <div className="text-sm font-bold" style={{ color: model.color }}>{o.metric}</div>
                  <div className="mt-0.5 text-xs text-[var(--muted)]">{o.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 text-sm font-medium" style={{ color: model.color }}>
              Learn more →
            </div>
          </Link>
        ))}

        {/* Custom engagement card */}
        <div className="relative overflow-hidden rounded-2xl border border-dashed border-[var(--border2)] bg-[var(--surface)] p-7 flex flex-col justify-center items-center text-center">
          <div className="text-3xl">✨</div>
          <h2 className="mt-3 text-lg font-semibold text-[var(--text)]">Custom Engagement</h2>
          <p className="mt-2 text-sm text-[var(--muted2)]">
            Have a unique requirement? We&apos;ll design a bespoke engagement model around your specific needs and constraints.
          </p>
          <Link href="/contact" className="btn-accent mt-5 inline-block text-sm">
            Talk to Us →
          </Link>
        </div>
      </div>

      {/* Comparison guide */}
      <div className="mt-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Quick Guide</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">Which model is right for you?</h2>
        <div className="mt-8 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--bg2)]">
                <th className="px-5 py-3 text-left font-semibold text-[var(--muted2)]">If you need…</th>
                <th className="px-5 py-3 text-left font-semibold text-[var(--muted2)]">Best Model</th>
              </tr>
            </thead>
            <tbody>
              {[
                { need: "A long-term, integrated QA team aligned to your culture", model: "Dedicated QA Team" },
                { need: "Full QA function ownership with governance and strategy", model: "Managed QA COE" },
                { need: "A specific project delivered with defined scope and cost", model: "Project-Based" },
                { need: "Fast access to a specific skill or to backfill a role", model: "Staff Augmentation" },
                { need: "Flexible, on-demand quality capacity with no fixed headcount", model: "Testing as a Service" },
                { need: "Something that doesn't fit any of the above", model: "Custom Engagement" },
              ].map((row, i) => (
                <tr
                  key={row.need}
                  className={`border-b border-[var(--border)] transition hover:bg-[var(--surface)] ${i % 2 === 0 ? "" : "bg-[var(--surface)]"}`}
                >
                  <td className="px-5 py-3.5 text-[var(--muted2)]">{row.need}</td>
                  <td className="px-5 py-3.5 font-semibold text-[var(--accent)]">{row.model}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-[var(--accent)] bg-[var(--bg2)] p-10 text-center">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Still deciding? Let&apos;s talk.</h2>
        <p className="mt-3 text-sm text-[var(--muted2)] max-w-lg mx-auto">
          Our engagement specialists will review your organisation, goals and constraints — and recommend the right model for you. No commitment required.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-accent">Schedule a Consultation →</Link>
          <Link href="/client-success" className="btn-outline">See Client Stories →</Link>
        </div>
      </div>
    </V2InnerShell>
  );
}
