"use client";

import Link from "next/link";
import { useState } from "react";
import { caseStudies } from "@/content/site";
import { ArrowRight, Quote } from "lucide-react";

const INDUSTRY_ACCENT: Record<string, string> = {
  "Banking & Finance": "text-[var(--indigo,rgba(129,140,248,1))] border-[rgba(129,140,248,0.3)] bg-[rgba(129,140,248,0.08)]",
  "Telecom & Media":  "text-[var(--teal,rgba(86,220,255,0.85))] border-[rgba(86,220,255,0.3)] bg-[rgba(86,220,255,0.08)]",
  Healthcare:         "text-emerald-400 border-emerald-400/30 bg-emerald-400/[0.07]",
  "Retail & E-Commerce": "text-amber-400 border-amber-400/30 bg-amber-400/[0.07]",
  Insurance:          "text-violet-400 border-violet-400/30 bg-violet-400/[0.07]",
  Communications:     "text-sky-400 border-sky-400/30 bg-sky-400/[0.07]",
};

const RESULT_COLOR: Record<string, string> = {
  "Banking & Finance": "text-[var(--indigo,rgba(129,140,248,1))]",
  "Telecom & Media":   "text-[var(--teal,rgba(86,220,255,0.85))]",
  Healthcare:          "text-emerald-400",
  "Retail & E-Commerce": "text-amber-400",
  Insurance:           "text-violet-400",
  Communications:      "text-sky-400",
};

const ALL_FILTER = "All";
const FILTERS = [ALL_FILTER, "Banking & Finance", "Telecom & Media", "Healthcare", "Retail & E-Commerce", "Insurance", "Communications"];

const AGGREGATE_STATS = [
  { value: "360+",  label: "Active clients" },
  { value: "13+",   label: "Years of delivery" },
  { value: "6",     label: "Global industries" },
  { value: "98%",   label: "Client retention rate" },
];

export function ClientSuccessClient() {
  const [filter, setFilter] = useState(ALL_FILTER);

  const featured = caseStudies[0];
  const rest = caseStudies.slice(1);
  const filtered = filter === ALL_FILTER ? rest : rest.filter((cs) => cs.industry === filter);

  return (
    <>
      {/* ── Hero ── */}
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          Client success
        </div>
        <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
          Proof that executives can act on.
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted2)]">
          Real outcomes from real engagements — quality engineering programmes that delivered measurable
          improvements in release speed, defect reduction, automation coverage, and production confidence
          for global enterprises.
        </p>
      </div>

      {/* ── Aggregate Stats ── */}
      <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {AGGREGATE_STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5 text-center"
          >
            <div className="text-3xl font-semibold tracking-tight text-[var(--text)]">{s.value}</div>
            <div className="mt-1 text-xs text-[var(--muted)]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Featured Case Study ── */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] shadow-[0_16px_60px_rgba(0,0,0,0.35)]">
        {/* Accent band */}
        <div className="h-1 w-full bg-[linear-gradient(90deg,var(--accent),var(--indigo,rgba(129,140,248,1)),var(--teal,rgba(86,220,255,0.85)))]" />

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Featured engagement
            </span>
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${INDUSTRY_ACCENT[featured.industry] ?? ""}`}
            >
              {featured.industry}
            </span>
            {featured.client && (
              <span className="text-xs text-[var(--muted)]">{featured.client}</span>
            )}
          </div>

          <div className="mt-4 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold leading-snug tracking-tight text-[var(--text)] sm:text-3xl">
                {featured.title}
              </h2>
              <div className="mt-5 space-y-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    The challenge
                  </div>
                  <p className="mt-1.5 text-sm leading-7 text-[var(--muted2)]">{featured.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Our approach
                  </div>
                  <p className="mt-1.5 text-sm leading-7 text-[var(--muted2)]">{featured.approach}</p>
                </div>
              </div>

              {/* Services used */}
              {featured.services && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted2)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5">
              {/* Result metrics */}
              <div className="grid gap-3">
                {featured.results.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                  >
                    <div className={`text-2xl font-semibold tracking-tight ${RESULT_COLOR[featured.industry] ?? "text-[var(--accent)]"}`}>
                      {r.value}
                    </div>
                    <div className="text-sm text-[var(--muted2)]">{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial quote */}
              {featured.quote && (
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <Quote className="h-5 w-5 text-[var(--accent)] opacity-60" />
                  <p className="mt-2 text-sm italic leading-6 text-[var(--muted2)]">
                    &ldquo;{featured.quote}&rdquo;
                  </p>
                  <div className="mt-3 text-xs font-semibold text-[var(--text)]">
                    {featured.quoteAuthor}
                    {featured.quoteRole && (
                      <span className="ml-1 font-normal text-[var(--muted)]">— {featured.quoteRole}</span>
                    )}
                  </div>
                </div>
              )}

              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none"
              >
                Request full case study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter Tabs ── */}
      <div className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
            All engagements
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition focus:outline-none ${
                filter === f
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                  : "border-[var(--border)] bg-[var(--bg2)] text-[var(--muted2)] hover:border-[var(--border2)] hover:text-[var(--text)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Case Study Cards ── */}
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {filtered.length === 0 && (
          <div className="lg:col-span-2 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-8 text-center text-sm text-[var(--muted)]">
            No engagements found for this filter. <Link href="/contact" className="text-[var(--accent)] hover:underline">Tell us about your context →</Link>
          </div>
        )}
        {filtered.map((cs) => (
          <div
            key={cs.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition hover:border-[var(--border2)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)]"
          >
            {/* Top accent line */}
            <div className={`h-0.5 w-full ${
              cs.industry === "Banking & Finance" ? "bg-[var(--indigo,rgba(129,140,248,1))]" :
              cs.industry === "Telecom & Media"   ? "bg-[var(--teal,rgba(86,220,255,0.85))]" :
              cs.industry === "Healthcare"        ? "bg-emerald-400" :
              cs.industry === "Retail & E-Commerce" ? "bg-amber-400" :
              cs.industry === "Insurance"         ? "bg-violet-400" :
              cs.industry === "Communications"    ? "bg-sky-400" :
              "bg-[var(--accent)]"
            }`} />

            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${INDUSTRY_ACCENT[cs.industry] ?? ""}`}
                >
                  {cs.industry}
                </span>
                {cs.client && (
                  <span className="text-xs text-[var(--muted)]">{cs.client}</span>
                )}
              </div>

              <div className="mt-3 text-lg font-semibold leading-snug tracking-tight text-[var(--text)]">
                {cs.title}
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Challenge</div>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted2)]">{cs.problem}</p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Approach</div>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted2)]">{cs.approach}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {cs.results.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 text-center"
                  >
                    <div className={`text-lg font-semibold leading-tight ${RESULT_COLOR[cs.industry] ?? "text-[var(--accent)]"}`}>
                      {r.value}
                    </div>
                    <div className="mt-0.5 text-xs leading-tight text-[var(--muted)]">{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              {cs.quote && (
                <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                  <Quote className="h-4 w-4 text-[var(--accent)] opacity-50" />
                  <p className="mt-1.5 text-xs italic leading-5 text-[var(--muted2)]">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                  <div className="mt-2 text-xs font-semibold text-[var(--text)]">
                    {cs.quoteAuthor}
                    {cs.quoteRole && (
                      <span className="ml-1 font-normal text-[var(--muted)]">— {cs.quoteRole}</span>
                    )}
                  </div>
                </div>
              )}

              {/* Services */}
              {cs.services && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cs.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-1 items-end justify-end border-t border-[var(--border)] pt-4">
                <Link
                  href="/contact"
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[var(--border2)] bg-[var(--surface)] px-4 text-xs font-semibold text-[var(--text)] transition hover:bg-[var(--bg3)] focus:outline-none"
                >
                  Request case study <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Industries Served Strip ── */}
      <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          Industries we serve
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            "Banking & Finance",
            "Insurance",
            "Retail & E-Commerce",
            "Media & Entertainment",
            "Communications",
            "Travel",
            "Consumer Electronics",
            "Healthcare",
          ].map((ind) => (
            <span
              key={ind}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--muted2)]"
            >
              {ind}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-[var(--muted2)]">
          Don&apos;t see your sector? We have delivered quality engineering programmes across many more
          verticals. Reach out and we&apos;ll share the most relevant examples for your context.
        </p>
        <div className="mt-5">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none"
          >
            Request industry examples <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
