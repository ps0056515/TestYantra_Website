"use client";

import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { services } from "@/content/site";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";

function getHeroImage(slug: string): string {
  switch (slug) {
    case "managed-qa":
      return "/images/qa_hero.png";
    case "crowd-testing":
      return "/images/crowd_testing_hero.png";
    case "ai-quality":
      return "/images/ai_hero.png";
    case "development":
      return "/images/dev_hero.png";
    case "professional-services":
      return "/images/advisory_hero.png";
    case "training":
      return "/images/training_hero.png";
    case "functional-testing":
      return "/images/functional_testing_hero.png";
    case "accessibility-uat":
      return "/images/accessibility_uat_hero.png";
    case "test-automation":
      return "/images/qe_hero.png";
    case "api-microservices":
      return "/images/api_microservices_hero.png";
    case "production-monitoring":
      return "/images/production_monitoring_hero.png";
    case "testing-ai":
      return "/images/testing_ai_hero.png";
    case "ai-in-testing":
      return "/images/ai_in_testing_hero.png";
    default:
      return "/images/qa_hero.png";
  }
}

function getCategoryBadge(slug: string) {
  const qaSlugs = ["managed-qa", "crowd-testing", "functional-testing", "accessibility-uat"];
  const qeSlugs = ["test-automation", "api-microservices", "production-monitoring"];
  const aiSlugs = ["ai-quality", "testing-ai", "ai-in-testing"];

  if (qaSlugs.includes(slug)) {
    return { text: "Quality Assurance", style: "bg-[var(--indigo)]/10 text-[var(--indigo)]" };
  }
  if (qeSlugs.includes(slug)) {
    return { text: "Quality Engineering & Ops", style: "bg-[var(--teal)]/10 text-[var(--teal)]" };
  }
  if (aiSlugs.includes(slug)) {
    return { text: "AI & Cognitive Practice", style: "bg-[var(--accent)]/10 text-[var(--accent)]" };
  }
  return { text: "Enterprise Solutions", style: "bg-[var(--gold)]/10 text-[var(--gold)]" };
}

export default function ServicesPage() {
  return (
    <V2InnerShell>
      {/* SERVICES OVERVIEW SPLIT HERO */}
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7 space-y-6">
          <ScrollAnimate direction="left">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] tracking-widest">
              Our Capabilities Portfolio
            </div>
          </ScrollAnimate>

          <ScrollAnimate direction="left" delay={100}>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl font-display leading-[1.15] bg-gradient-to-r from-[var(--text)] to-[var(--muted)] bg-clip-text text-transparent">
              End-to-End practices, custom fit to your size.
            </h1>
          </ScrollAnimate>

          <ScrollAnimate direction="left" delay={200}>
            <p className="text-base leading-7 text-[var(--muted2)] sm:text-lg max-w-2xl">
              Scroll down to explore our comprehensive suites of QA, Quality Engineering, AI validation, Software Development, and Training services. We provide flexible pods, center-of-excellence setups, and fully managed outcomes.
            </p>
          </ScrollAnimate>

          <ScrollAnimate direction="left" delay={300}>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-accent">
                Consult with an Expert
              </Link>
              <a href="#services-list" className="btn-outline">
                Scroll to Services ↓
              </a>
            </div>
          </ScrollAnimate>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <ScrollAnimate direction="right" delay={150}>
            <div className="relative group w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-[var(--border2)] bg-[var(--surface)] shadow-2xl transition duration-500 hover:scale-[1.02] hover:border-[var(--accent)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent opacity-50 group-hover:opacity-80 transition duration-500" />
              <img
                src="/images/services_overview_hero.png"
                alt="Services Overview"
                className="w-full h-full object-cover mix-blend-lighten"
              />
            </div>
          </ScrollAnimate>
        </div>
      </div>

      {/* DETAILED SERVICES SCROLL LIST */}
      <div id="services-list" className="mt-36 space-y-32 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <ScrollAnimate direction="up">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
              Our 13 Practices
            </h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted2)] sm:text-base">
              A detailed guide to each of our capabilities. Click on "In-Depth Details" to view core specifications, outcomes, and advanced frameworks for any practice.
            </p>
          </ScrollAnimate>
        </div>

        <div className="space-y-32">
          {services.map((svc, index) => {
            const isEven = index % 2 === 0;
            const heroImg = getHeroImage(svc.slug);
            const badge = getCategoryBadge(svc.slug);

            return (
              <div
                key={svc.slug}
                className="grid gap-12 lg:grid-cols-12 lg:items-center border-t border-[var(--border)] pt-20 first:border-t-0 first:pt-0"
              >
                {/* Text Side */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <ScrollAnimate direction={isEven ? "left" : "right"}>
                    <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${badge.style}`}>
                      {badge.text}
                    </span>
                  </ScrollAnimate>

                  <ScrollAnimate direction={isEven ? "left" : "right"} delay={100}>
                    <h3 className="text-3xl font-semibold tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition">
                      {svc.name}
                    </h3>
                  </ScrollAnimate>

                  <ScrollAnimate direction={isEven ? "left" : "right"} delay={150}>
                    <p className="text-sm leading-relaxed text-[var(--muted2)] sm:text-base">
                      {svc.summary}
                    </p>
                  </ScrollAnimate>

                  {/* Bullet features preview */}
                  <ScrollAnimate direction={isEven ? "left" : "right"} delay={200}>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {svc.bullets.map((b) => (
                        <li key={b} className="text-sm text-[var(--muted2)] flex items-start gap-2 bg-[var(--bg2)] border border-[var(--border)] rounded-xl p-3 shadow-sm hover:border-[var(--accent)]/30 transition">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollAnimate>

                  <ScrollAnimate direction={isEven ? "left" : "right"} delay={250}>
                    <div className="pt-2">
                      <Link href={`/services/${svc.slug}`} className="btn-outline inline-flex items-center gap-2 group">
                        In-Depth Details
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </ScrollAnimate>
                </div>

                {/* Visual Side */}
                <div className={`lg:col-span-5 flex justify-center ${isEven ? "" : "lg:order-1"}`}>
                  <ScrollAnimate direction={isEven ? "right" : "left"} delay={150}>
                    <div className="relative group w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-[var(--border2)] bg-[var(--surface)] shadow-xl transition duration-500 hover:scale-[1.02] hover:border-[var(--accent)]">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/5 to-transparent opacity-40 group-hover:opacity-75 transition duration-500" />
                      <img
                        src={heroImg}
                        alt={svc.name}
                        className="w-full h-full object-cover mix-blend-lighten"
                      />
                    </div>
                  </ScrollAnimate>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </V2InnerShell>
  );
}
