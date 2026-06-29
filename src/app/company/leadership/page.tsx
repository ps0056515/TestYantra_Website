"use client";

import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";

const leadershipPoints = [
  "Built multiple business verticals to support enterprise QA needs across domains and technologies.",
  "Established a crowd testing service platform for flexible and fast QA coverage across B2B and B2C apps.",
  "Created a training organization supporting large-scale hiring and capability development for IT companies.",
  "Launched Innovexce as the group's product engineering unit — 900+ engineers delivering quality-first builds.",
  "Grew a high-performing leadership team spanning QE, development, training, and delivery functions.",
  "Scaled delivery with a large, globally distributed testing and engineering organization.",
];

export default function LeadershipPage() {
  return (
    <V2InnerShell>
      {/* HERO SECTION */}
      <div className="relative overflow-hidden mb-16 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent)]/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollAnimate direction="up">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20">
              Company Leadership
            </div>
          </ScrollAnimate>

          <ScrollAnimate direction="up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight mb-6">
              Leadership that turns strategy into execution.
            </h1>
          </ScrollAnimate>

          <ScrollAnimate direction="up" delay={200}>
            <p className="text-base md:text-lg text-[var(--muted2)] leading-relaxed max-w-2xl mx-auto">
              The story behind Test Yantra is a delivery-first mindset:
              translate vision into repeatable systems — TestYantra, Innovexce,
              and Academy — that consistently improve outcomes.
            </p>
          </ScrollAnimate>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mb-20">
        {/* WHAT WE BUILT */}
        <ScrollAnimate direction="up" delay={50} className="lg:col-span-2">
          <div className="h-full rounded-3xl border border-[var(--border2)] bg-[var(--surface)] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <svg
                className="w-6 h-6 text-[var(--accent)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--text)]">
                What this leadership built
              </h2>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {leadershipPoints.map((p, idx) => (
                <ScrollAnimate key={idx} direction="left" delay={idx * 150}>
                  <li className="flex h-full items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5 hover:border-[var(--accent)]/30 hover:bg-[var(--surface)] hover:-translate-y-0.5 transition-all duration-300">
                    <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                    <span className="text-sm leading-relaxed text-[var(--muted2)]">
                      {p}
                    </span>
                  </li>
                </ScrollAnimate>
              ))}
            </ul>
          </div>
        </ScrollAnimate>

        {/* OPERATING PRINCIPLES */}
        <ScrollAnimate direction="up" delay={150}>
          <div className="h-full flex flex-col rounded-3xl border border-[var(--border2)] bg-[var(--surface)] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <svg
                className="w-6 h-6 text-[var(--accent)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--text)]">
                Operating Principles
              </h2>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              {[
                { k: "Clarity", v: "Simple systems, measurable gates." },
                { k: "Speed", v: "Fail early, learn fast, automate deeply." },
                {
                  k: "Trust",
                  v: "Transparent delivery, predictable outcomes.",
                },
              ].map((x, idx) => (
                <ScrollAnimate key={x.k} direction="right" delay={idx * 200}>
                  <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5 hover:border-[var(--accent)]/30 hover:bg-[var(--surface)] hover:-translate-y-0.5 transition-all duration-300">
                    <div className="text-sm font-bold tracking-widest uppercase text-[var(--accent)] mb-2">
                      {x.k}
                    </div>
                    <div className="text-sm leading-relaxed text-[var(--text)]">
                      {x.v}
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>

            <Link
              href="/#ecosystem"
              className="mt-8 inline-flex w-full h-12 items-center justify-center rounded-xl border border-[var(--accent)] bg-[var(--accent)]/10 px-6 text-sm font-bold text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
            >
              Explore the group →
            </Link>
          </div>
        </ScrollAnimate>
      </div>
    </V2InnerShell>
  );
}
