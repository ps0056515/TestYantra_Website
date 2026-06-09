"use client";

import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";
import { industries } from "@/content/site";

// Mapping industries to abstract, software-centric technology renders from our brand assets
function getIndustryImage(slug: string) {
  const imageMap: Record<string, string> = {
    "banking-finance": "/images/api_microservices_hero.png",
    "insurance": "/images/functional_testing_hero.png",
    "healthcare": "/images/accessibility_uat_hero.png",
    "retail-ecommerce": "/images/services_overview_hero.png",
    "media-entertainment": "/images/crowd_testing_hero.png",
    "communications": "/images/production_monitoring_hero.png",
    "travel": "/images/advisory_hero.png",
    "saas-hitech": "/images/dev_hero.png",
    "consumer-electronics": "/images/qe_hero.png",
    "fintech": "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80", // Mobile payment software
    "energy": "/images/testing_ai_hero.png",
    "government": "/images/qa_hero.png",
    "automotive": "/images/ai_in_testing_hero.png",
    "logistics": "/images/training_hero.png",
  };
  
  return imageMap[slug] || "/images/dev_hero.png";
}

// Logical categories for the 14 industries
const categories = [
  {
    id: "financial",
    title: "Financial Services",
    description: "Highly regulated, high-volume transactional platforms.",
    slugs: ["banking-finance", "insurance", "fintech"],
    color: "indigo"
  },
  {
    id: "technology",
    title: "Technology & Media",
    description: "High-velocity product teams and digital distribution networks.",
    slugs: ["saas-hitech", "media-entertainment", "communications", "consumer-electronics"],
    color: "teal"
  },
  {
    id: "commerce",
    title: "Commerce & Lifestyle",
    description: "Customer-facing platforms driven by peak conversions.",
    slugs: ["retail-ecommerce", "travel", "logistics"],
    color: "gold"
  },
  {
    id: "public",
    title: "Public Sector & Infrastructure",
    description: "Critical systems demanding zero downtime and strict compliance.",
    slugs: ["healthcare", "energy", "government", "automotive"],
    color: "accent"
  }
];

export default function IndustriesPage() {
  return (
    <V2InnerShell>
      {/* HERO SECTION */}
      <div className="relative overflow-hidden mb-16 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--teal)]/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollAnimate direction="up">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20">
              Industries We Serve
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] leading-tight mb-6">
              Industry context built into delivery.
            </h1>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <p className="text-base md:text-lg text-[var(--muted2)] leading-relaxed max-w-2xl mx-auto">
              Quality and capability programs tuned to how your customers behave, how your systems integrate, and what your business cannot afford to break.
            </p>
          </ScrollAnimate>
        </div>
      </div>

      {/* CATEGORIZED INDUSTRIES */}
      <div className="flex flex-col gap-12">
        {categories.map((cat) => {
          const categoryIndustries = industries.filter((ind) => cat.slugs.includes(ind.slug));

          return (
            <section key={cat.id} className="relative scroll-m-20">
              <ScrollAnimate direction="up">
                <div className="mb-14 flex items-center justify-between border-b border-[var(--border)] pb-6">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)]">
                      {cat.title}
                    </h2>
                    <p className="mt-3 text-base text-[var(--muted2)]">
                      {cat.description}
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <span
                      className="inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                      style={{ backgroundColor: `var(--${cat.color})`, color: "#fff" }}
                    >
                      {cat.slugs.length} Industries
                    </span>
                  </div>
                </div>
              </ScrollAnimate>

              {/* Reduced size by using grid-cols-3 instead of 2 */}
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {categoryIndustries.map((ind, i) => (
                  <ScrollAnimate key={ind.slug} direction="up" delay={i * 100}>
                    <div className="group relative h-full flex flex-col rounded-2xl border border-[var(--border2)] bg-[var(--surface)] hover:bg-[var(--bg)] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                      {/* Image Header - Reduced Height */}
                      <div className="relative h-40 overflow-hidden bg-[var(--surface)]">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent z-10" />
                        <img 
                          src={getIndustryImage(ind.slug)} 
                          alt={ind.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 mix-blend-screen opacity-80"
                        />
                        <div className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-[var(--bg)]/90 backdrop-blur-md flex items-center justify-center border border-[var(--border)] text-sm shadow-md">
                          {ind.icon}
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="relative z-20 flex-1 p-5 pt-6">
                        <h3 className="text-xl font-bold tracking-tight text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                          {ind.name}
                        </h3>
                        <p className="text-sm text-[var(--muted2)] leading-relaxed mb-5 line-clamp-3">
                          {ind.summary}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {ind.useCases.map((u, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg2)] px-2.5 py-1 text-xs font-medium text-[var(--muted2)] group-hover:border-[var(--accent)]/30 transition-colors"
                            >
                              <span className="w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                              <span className="truncate">{u}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Footer */}
                      <div className="mt-auto p-5 pt-0">
                        <Link
                          href={`/contact?industry=${encodeURIComponent(ind.slug)}`}
                          className="inline-flex w-full h-10 items-center justify-center rounded-lg border border-[var(--border2)] bg-[var(--bg2)] group-hover:bg-[var(--accent)] px-4 text-xs font-bold uppercase tracking-wider text-[var(--text)] group-hover:text-white transition-all duration-300 shadow-sm"
                        >
                          Explore Solutions →
                        </Link>
                      </div>
                    </div>
                  </ScrollAnimate>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </V2InnerShell>
  );
}
