import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";

export const metadata = {
  title: "Annual Report — TestYantra",
  description:
    "TestYantra Annual Report: A year of quality engineering milestones, client growth, capability expansion and global impact.",
};

const highlights = [
  { metric: "360+", label: "Active Clients Globally", desc: "Enterprise and mid-market clients across 7+ industries worldwide." },
  { metric: "17+", label: "Years of Excellence", desc: "Over 17 years of dedicated quality engineering expertise and innovation." },
  { metric: "2,200+", label: "Automation Engineers", desc: "Specialists in automation, AI testing, DevOps and development across global delivery centres." },
  { metric: "11+", label: "Global Locations", desc: "Delivery centres and offices spanning India, US, UK and APAC." },
  { metric: "600k+", label: "Certified Trainees", desc: "Professionals upskilled through QSpiders and JSpiders training programmes." },
  { metric: "7+", label: "Industries Served", desc: "Banking, Insurance, Healthcare, Telecom, Retail, Travel and Hi-Tech." },
];

const milestones = [
  {
    year: "2025–26",
    items: [
      "Launched TestYantra.AI — a dedicated AI quality engineering brand with IntelliTest™, HealBot™, DefectIQ™ and VisionAI™",
      "Expanded Intelligent Automation practice with LLM-powered test generation across 40+ client engagements",
      "Achieved ISO 27001 re-certification across all delivery centres",
      "Opened new delivery centre in Hyderabad, expanding engineering headcount by 18%",
      "Onboarded 28 new enterprise clients across Banking, Healthcare and Retail verticals",
    ],
  },
  {
    year: "2024–25",
    items: [
      "Crossed 360+ active clients milestone, serving enterprises across 15+ countries",
      "Launched Managed QA COE service line — 12 COEs stood up for Fortune 500 clients in year one",
      "Expanded UK and US presence with new client-facing offices in London and New Jersey",
      "Delivered 600,000th trained professional through QSpiders and JSpiders academy network",
      "Recognised as a Top 10 Software Testing Company by leading analyst firms",
    ],
  },
  {
    year: "2023–24",
    items: [
      "Established AI Engineering practice — embedding GenAI and ML into quality pipelines",
      "Launched Testing as a Service (TaaS) platform for on-demand quality capacity",
      "Expanded crowd testing network to 10,000+ real devices across 50+ countries",
      "Achieved CMMI Level 3 appraisal across QA delivery operations",
      "Recognised by NASSCOM as an emerging Quality Engineering leader in India",
    ],
  },
];

const capabilityGrowth = [
  { name: "Quality Assurance", growth: "+22%", desc: "Managed QA COE and crowd testing engagements" },
  { name: "Test Automation", growth: "+35%", desc: "Framework-driven automation and CI/CD integration" },
  { name: "AI & Intelligent Automation", growth: "+68%", desc: "Fastest growing practice — AI testing and GenAI tools" },
  { name: "Performance Engineering", growth: "+18%", desc: "Load and scalability testing across enterprise platforms" },
  { name: "Security Testing", growth: "+29%", desc: "VAPT, penetration testing and compliance testing" },
  { name: "Training & Academy", growth: "+15%", desc: "QSpiders and JSpiders certified professionals" },
];

export default function AnnualReportPage() {
  return (
    <V2InnerShell>
      {/* Hero */}
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Annual Report</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl leading-tight">
          A year of quality engineering<br />milestones
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--muted2)] max-w-2xl">
          From AI-powered quality engineering to global delivery expansion — TestYantra&apos;s journey of growth, innovation and client impact across 17+ years of excellence in software quality.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-accent">Request Full Report →</Link>
          <Link href="/client-success" className="btn-outline">See Client Outcomes →</Link>
        </div>
      </div>

      {/* Key numbers */}
      <div className="mt-14">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">By the Numbers</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">TestYantra at a glance</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.metric}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-5"
            >
              <div className="text-3xl font-bold text-[var(--accent)]">{h.metric}</div>
              <div className="mt-1 text-sm font-semibold text-[var(--text)]">{h.label}</div>
              <p className="mt-1.5 text-xs leading-5 text-[var(--muted2)]">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Capability growth */}
      <div className="mt-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Capability Growth</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">Practice area growth (FY 2025–26)</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityGrowth.map((cap) => (
            <div
              key={cap.name}
              className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-5"
            >
              <div className="shrink-0">
                <div className="text-xl font-bold text-[var(--accent)]">{cap.growth}</div>
                <div className="text-xs text-[var(--muted)]">YoY</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text)]">{cap.name}</div>
                <p className="mt-1 text-xs text-[var(--muted2)]">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones timeline */}
      <div className="mt-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Milestones</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">Year in review</h2>
        <div className="mt-8 space-y-8">
          {milestones.map((period) => (
            <div key={period.year} className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-7">
              <div className="text-sm font-bold text-[var(--accent)] mb-4">{period.year}</div>
              <ul className="space-y-3">
                {period.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted2)]">
                    <span className="mt-0.5 shrink-0 font-bold text-[var(--accent)]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className="mt-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Recognition</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">Awards & analyst recognition</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { award: "Top 10 Software Testing Companies", body: "Software Testing News, 2025" },
            { award: "Emerging QE Leader in India", body: "NASSCOM, 2024" },
            { award: "Best QA Training Institution", body: "QSpiders / JSpiders Network, 2024" },
            { award: "ISO 27001 Certified", body: "All Delivery Centres, 2025" },
            { award: "CMMI Level 3 Appraised", body: "QA Delivery Operations, 2024" },
            { award: "Great Place to Work® Certified", body: "India & UK, 2025" },
          ].map((a) => (
            <div key={a.award} className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-5">
              <div className="text-2xl mb-3">🏆</div>
              <div className="text-sm font-semibold text-[var(--text)]">{a.award}</div>
              <div className="mt-1 text-xs text-[var(--muted)]">{a.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-[var(--accent)] bg-[var(--bg2)] p-10 text-center">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Get the full annual report</h2>
        <p className="mt-3 text-sm text-[var(--muted2)] max-w-lg mx-auto">
          Request the complete TestYantra Annual Report — including detailed financials, client case studies, capability roadmaps and strategic outlook for the year ahead.
        </p>
        <Link href="/contact" className="btn-accent mt-6 inline-block">
          Request the Report →
        </Link>
      </div>
    </V2InnerShell>
  );
}
