"use client";

import Link from "next/link";
import { useState } from "react";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { industries, services, caseStudies } from "@/content/site";
import { INDUSTRY_ART } from "@/components/v2/IndustryArt";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";

const INDUSTRY_SERVICES: Record<string, string[]> = {
  "banking-finance": ["managed-qa", "test-automation", "security-testing", "performance-engineering"],
  insurance: ["managed-qa", "test-automation", "security-testing", "professional-services"],
  "retail-ecommerce": ["crowd-testing", "performance-engineering", "test-automation", "managed-qa"],
  "media-entertainment": ["crowd-testing", "test-automation", "performance-engineering", "devops-cicd"],
  communications: ["managed-qa", "test-automation", "performance-engineering", "professional-services"],
  travel: ["performance-engineering", "test-automation", "crowd-testing", "security-testing"],
  "consumer-electronics": ["crowd-testing", "ai-testing", "test-automation", "managed-qa"],
};

type Industry = (typeof industries)[number];

export function IndustryDetailClient({ industry }: { industry: Industry }) {
  const [activeSubVertical, setActiveSubVertical] = useState(0);
  const sv = industry.subVerticals[activeSubVertical];

  const ArtComponent = INDUSTRY_ART[industry.slug];
  const relevantServiceSlugs = INDUSTRY_SERVICES[industry.slug] ?? [];
  const relevantServices = relevantServiceSlugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean) as typeof services;
  const caseStudy =
    industry.caseStudyIndex !== undefined ? caseStudies[industry.caseStudyIndex] : undefined;

  return (
    <V2InnerShell>
      {/* ── Hero ── */}
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Industry</div>
          <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
            {industry.name}
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted2)] sm:text-lg">{industry.detail}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/contact?industry=${industry.contactSlug}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none"
            >
              Talk to a specialist <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/client-success"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[var(--border2)] bg-[var(--surface)] px-6 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--bg3)] focus:outline-none"
            >
              View case studies
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          {ArtComponent ? (
            <ArtComponent className="w-full rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.35)]" />
          ) : (
            <div className="h-48 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg2)]" />
          )}
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {industry.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5 text-center"
          >
            <div className="text-2xl font-semibold tracking-tight text-[var(--text)]">{s.value}</div>
            <div className="mt-1 text-xs text-[var(--muted)]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Sub-Verticals ── */}
      {industry.subVerticals.length > 0 && (
        <div className="mt-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Segments we serve
          </div>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
            QA expertise across every {industry.name} sub-sector
          </h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-12">
            {/* Tab list */}
            <div className="flex flex-row flex-wrap gap-2 lg:col-span-4 lg:flex-col lg:flex-nowrap">
              {industry.subVerticals.map((subV, i) => (
                <button
                  key={subV.name}
                  onClick={() => setActiveSubVertical(i)}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition focus:outline-none ${
                    activeSubVertical === i
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm"
                      : "border-[var(--border)] bg-[var(--bg2)] text-[var(--muted2)] hover:border-[var(--border2)] hover:text-[var(--text)]"
                  }`}
                >
                  <span>{subV.name}</span>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition ${activeSubVertical === i ? "opacity-100" : "opacity-40"}`}
                  />
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 lg:col-span-8">
              <div className="text-lg font-semibold tracking-tight text-[var(--text)]">{sv.name}</div>
              <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">{sv.description}</p>
              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  Our offerings
                </div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {sv.offerings.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm leading-5 text-[var(--muted2)]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <Link
                  href={`/contact?industry=${industry.contactSlug}&segment=${encodeURIComponent(sv.name)}`}
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[var(--border2)] bg-[var(--surface)] px-4 text-xs font-semibold text-[var(--text)] transition hover:bg-[var(--bg3)] focus:outline-none"
                >
                  Discuss {sv.name} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Use Cases + Challenges ── */}
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 lg:col-span-2">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">Key use cases</div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {industry.useCases.map((u) => (
              <li
                key={u}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--muted2)]"
              >
                {u}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">Common challenges</div>
          <ul className="mt-4 grid gap-3">
            {industry.challenges.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm leading-6 text-[var(--muted2)]">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Relevant Services ── */}
      {relevantServices.length > 0 && (
        <div className="mt-12">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
            Services we bring to {industry.name}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relevantServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-4 py-4 transition hover:border-[var(--border2)] hover:bg-[var(--bg3)]"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-semibold text-[var(--text)]">{svc.name}</div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--muted)] transition group-hover:text-[var(--text)]" />
                </div>
                <div className="mt-1 text-xs leading-5 text-[var(--muted2)]">{svc.summary}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── Case Study Highlight ── */}
      {caseStudy && (
        <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            Client success
          </div>
          <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
            {caseStudy.title}
          </div>
          <p className="mt-3 text-sm leading-6 text-[var(--muted2)]">{caseStudy.problem}</p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">{caseStudy.approach}</p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {caseStudy.results.map((r) => (
              <div
                key={r.label}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-center"
              >
                <div className="text-base font-semibold text-[var(--text)]">{r.value}</div>
                <div className="mt-0.5 text-xs text-[var(--muted)]">{r.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Link
              href="/client-success"
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[var(--border2)] bg-[var(--surface)] px-4 text-xs font-semibold text-[var(--text)] transition hover:bg-[var(--bg3)] focus:outline-none"
            >
              See all case studies <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Ready to start?
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
              Speak with a {industry.name} quality specialist
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">
              Tell us about your engineering challenge and we&apos;ll map the right combination of services,
              tooling, and delivery model for your context.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href={`/contact?industry=${industry.contactSlug}`}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none sm:w-auto"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link href="/industries" className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]">
          ← All industries
        </Link>
      </div>
    </V2InnerShell>
  );
}
