"use client";

import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";
import { businessUnits } from "@/content/site";

export default function AcademyPage() {
  const academy = businessUnits.find((u) => u.id === "academy");

  return (
    <V2InnerShell>
      {/* HERO SECTION */}
      <div className="relative overflow-hidden mb-24 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--indigo)]/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <ScrollAnimate direction="up">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20">
              TestYantra Academy
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] leading-tight mb-6">
              Premier learning engines.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--indigo)]">
                One mission: Job-ready capability.
              </span>
            </h1>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <p className="text-base md:text-lg text-[var(--muted2)] leading-relaxed max-w-2xl mb-8">
              {academy?.description || "Empowering the next generation of software testing and development professionals. We bridge the gap between academic curricula and enterprise technical requirements through rigorous finishing-school methodologies."}
            </p>
          </ScrollAnimate>
        </div>
      </div>

      {/* ACADEMY CARDS */}
      <div className="grid gap-8 lg:grid-cols-3 mb-20">
        <ScrollAnimate direction="left" delay={100}>
          <div className="group relative h-full flex flex-col p-8 md:p-10 rounded-3xl border border-[var(--border2)] bg-[var(--surface)] hover:bg-[var(--bg)] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--indigo)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex-1">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--indigo)]/10 flex items-center justify-center border border-[var(--indigo)]/20 text-2xl">
                    🎯
                  </div>
                  <h2 className="text-3xl font-bold text-[var(--text)] tracking-tight">QSpiders</h2>
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--indigo)] bg-[var(--indigo)]/10 rounded-full">
                  Software Testing
                </span>
              </div>
              
              <p className="text-base text-[var(--muted2)] leading-relaxed mb-8">
                Recognized globally as a best-in-class learning organization. QSpiders operates as an official ISTQB® partner and provides the industry's most robust software testing finishing school, placing thousands of aspirants annually.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Specialist Faculty",
                  "ISTQB® Certification",
                  "450k+ Alumni Network",
                  "Scale & Competency",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--indigo)]" />
                    <span className="text-sm font-medium text-[var(--text)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 pt-6 mt-auto border-t border-[var(--border)]">
              <a
                href="https://qspiders.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--indigo)] hover:gap-3 transition-all"
              >
                Explore QSpiders Campus <span>→</span>
              </a>
            </div>
          </div>
        </ScrollAnimate>

        <ScrollAnimate direction="right" delay={200}>
          <div className="group relative h-full flex flex-col p-8 md:p-10 rounded-3xl border border-[var(--border2)] bg-[var(--surface)] hover:bg-[var(--bg)] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex-1">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--teal)]/10 flex items-center justify-center border border-[var(--teal)]/20 text-2xl">
                    ☕
                  </div>
                  <h2 className="text-3xl font-bold text-[var(--text)] tracking-tight">JSpiders</h2>
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--teal)] bg-[var(--teal)]/10 rounded-full">
                  Java & Full-Stack
                </span>
              </div>
              
              <p className="text-base text-[var(--muted2)] leading-relaxed mb-8">
                A dedicated development hub engineered to bridge the enterprise skills gap. JSpiders focuses intensively on Java, J2EE, Spring frameworks, and modern full-stack development paths designed specifically for IT hub hiring pipelines.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Java/J2EE Pathways",
                  "Microservices Mastery",
                  "Practical Projects",
                  "Employer Placement",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal)]" />
                    <span className="text-sm font-medium text-[var(--text)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 pt-6 mt-auto border-t border-[var(--border)]">
              <a
                href="https://www.jspiders.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--teal)] hover:gap-3 transition-all"
              >
                Explore JSpiders Campus <span>→</span>
              </a>
            </div>
          </div>
        </ScrollAnimate>

        <ScrollAnimate direction="up" delay={300}>
          <div className="group relative h-full flex flex-col p-8 md:p-10 rounded-3xl border border-[var(--border2)] bg-[var(--surface)] hover:bg-[var(--bg)] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex-1">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center border border-[var(--gold)]/20 text-2xl">
                    ✈️
                  </div>
                  <h2 className="text-3xl font-bold text-[var(--text)] tracking-tight">ZupFly</h2>
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--gold)] bg-[var(--gold)]/10 rounded-full">
                  Study Abroad
                </span>
              </div>
              
              <p className="text-base text-[var(--muted2)] leading-relaxed mb-8">
                Powered by the massive QSpiders legacy. ZupFly provides world-class study abroad coaching for GMAT, GRE, IELTS, and TOEFL, coupled with elite MS & MBA admissions counseling and partnerships with over 200 global universities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "GMAT & GRE Prep",
                  "IELTS & TOEFL",
                  "MS & MBA Admissions",
                  "200+ Univ Partners",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                    <span className="text-sm font-medium text-[var(--text)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 pt-6 mt-auto border-t border-[var(--border)]">
              <a
                href="https://zupfly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--gold)] hover:gap-3 transition-all"
              >
                Explore ZupFly <span>→</span>
              </a>
            </div>
          </div>
        </ScrollAnimate>
      </div>

      {/* ENTERPRISE COHORT CTA */}
      <ScrollAnimate direction="up" delay={100}>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent)]/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] tracking-tight mb-4">
              Require a Custom Enterprise Cohort?
            </h3>
            <p className="text-base text-[var(--muted2)] leading-relaxed">
              We tailor corporate learning paths, competency assessments, and outcomes reporting directly for your enterprise hiring pipelines. Upskill your talent with hands-on AI training directly from the TestYantra AI Practice.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Link 
              href="/contact?interest=training" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[var(--text)] text-[var(--bg)] font-bold shadow-md hover:scale-105 transition-transform duration-300"
            >
              Talk to our training team
            </Link>
          </div>
        </div>
      </ScrollAnimate>
    </V2InnerShell>
  );
}
