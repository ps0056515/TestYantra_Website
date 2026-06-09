"use client";

import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";
import { caseStudies } from "@/content/site";

export default function ClientSuccessPage() {
  return (
    <V2InnerShell>
      {/* HERO SECTION */}
      <div className="relative overflow-hidden mb-24 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent)]/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollAnimate direction="up">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20">
              Client Success
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] leading-tight mb-6">
              Proof that executives can act on.
            </h1>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <p className="text-base md:text-lg text-[var(--muted2)] leading-relaxed max-w-2xl mx-auto">
              Outcomes-focused stories that connect training and capability programs to readiness, productivity, and internal mobility.
            </p>
          </ScrollAnimate>
        </div>
      </div>

      {/* CASE STUDIES GRID */}
      <div className="space-y-12 mb-20">
        {caseStudies.map((cs, i) => (
          <ScrollAnimate key={cs.title} direction="up" delay={i * 50}>
            <div className="group relative flex flex-col xl:flex-row gap-8 rounded-3xl border border-[var(--border2)] bg-[var(--surface)] p-8 hover:bg-[var(--bg)] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
              
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/5 group-hover:to-[var(--accent)]/5 transition-colors duration-700 pointer-events-none" />

              {/* Left Column: Title & Overview */}
              <ScrollAnimate direction="left" delay={100} className="xl:w-1/3 flex flex-col relative z-10">
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                    {cs.industry}
                  </span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-[var(--text)] leading-tight mb-6">
                  {cs.title}
                </h2>

                <div className="mt-auto hidden xl:block">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border2)] bg-[var(--bg2)] group-hover:bg-[var(--accent)] px-6 text-sm font-bold text-[var(--text)] group-hover:text-white transition-all duration-300 shadow-sm"
                  >
                    Request Full Context →
                  </Link>
                </div>
              </ScrollAnimate>

              {/* Middle Column: Problem & Approach */}
              <ScrollAnimate direction="up" delay={200} className="xl:w-1/3 flex flex-col gap-6 relative z-10">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 hover:border-[var(--accent)]/30 hover:bg-[var(--surface)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <div className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">The Challenge</div>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--muted2)]">
                    {cs.problem}
                  </p>
                </div>
                
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 hover:border-[var(--accent)]/30 hover:bg-[var(--surface)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <div className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Our Approach</div>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--muted2)]">
                    {cs.approach}
                  </p>
                </div>
              </ScrollAnimate>

              {/* Right Column: Key Results Grid */}
              <ScrollAnimate direction="right" delay={300} className="xl:w-1/3 relative z-10 flex flex-col">
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-4 pl-1">
                  Key Outcomes
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1 flex-1">
                  {cs.results.map((r, idx) => (
                    <div 
                      key={r.label} 
                      className="flex flex-col justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm hover:shadow-md hover:border-[var(--accent)]/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="text-3xl font-black tracking-tighter text-[var(--text)] mb-2">
                        {r.value}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted2)] leading-snug">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimate>

              {/* Mobile/Tablet CTA (Hidden on Desktop) */}
              <div className="mt-4 xl:hidden relative z-10">
                <Link
                  href="/contact"
                  className="inline-flex w-full h-12 items-center justify-center rounded-xl border border-[var(--border2)] bg-[var(--bg2)] px-6 text-sm font-bold text-[var(--text)] transition-all duration-300"
                >
                  Request Full Context →
                </Link>
              </div>

            </div>
          </ScrollAnimate>
        ))}
      </div>
    </V2InnerShell>
  );
}
