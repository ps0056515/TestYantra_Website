import Link from "next/link";
import { notFound } from "next/navigation";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { services } from "@/content/site";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

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

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return notFound();

  const isDev = service.slug === "development";
  const heroImg = getHeroImage(service.slug);

  return (
    <V2InnerShell>
      <div className="bg-dot-grid relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8">
      {/* Decorative ambient auras */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--accent)] to-[var(--indigo)] opacity-[0.05] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.7% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* RICH SPLIT HERO SECTION */}
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center relative pb-16">
        <div className="lg:col-span-7 space-y-6">
          <ScrollAnimate direction="left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              Practice Area &amp; Capability
            </div>
          </ScrollAnimate>
          <ScrollAnimate direction="left" delay={100}>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl font-display leading-[1.15]">
              {service.name}
            </h1>
          </ScrollAnimate>
          <ScrollAnimate direction="left" delay={150}>
            <p className="text-base leading-7 text-[var(--muted2)] sm:text-lg max-w-2xl font-medium">
              {service.summary}
            </p>
          </ScrollAnimate>
          <ScrollAnimate direction="left" delay={200}>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href={`/contact?interest=${service.slug}`} className="btn-accent shadow-lg shadow-[var(--accent)]/15 hover:shadow-[var(--accent)]/30 hover:scale-[1.02] transition duration-300">
                Consult with an Expert
              </Link>
              <Link href="#details" className="btn-outline hover:bg-[var(--bg2)] hover:scale-[1.02] transition duration-300">
                Explore Specifications ↓
              </Link>
            </div>
          </ScrollAnimate>
        </div>
        <div className="lg:col-span-5 flex justify-center relative">
          {/* Subtle rotating image backing glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--accent)] to-[var(--indigo)] opacity-[0.08] blur-3xl rounded-full -z-10 animate-pulse" />
          
          <ScrollAnimate direction="right" delay={150}>
            <div className="relative group w-full max-w-md aspect-square rounded-3xl p-1.5 border border-[var(--border2)] bg-[var(--surface)] shadow-2xl transition duration-500 hover:scale-[1.03] hover:border-[var(--accent)]/60">
              {/* Tech corner brackets */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[var(--accent)] rounded-tl-3xl z-10" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[var(--accent)] rounded-tr-3xl z-10" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[var(--accent)] rounded-bl-3xl z-10" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[var(--accent)] rounded-br-3xl z-10" />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent opacity-50 group-hover:opacity-80 transition duration-500 rounded-3xl" />
              
              <img
                src={heroImg}
                alt={service.name}
                className="w-full h-full object-cover mix-blend-lighten rounded-[22px]"
              />
            </div>
          </ScrollAnimate>
        </div>
      </div>

      {/* INTERACTIVE STICKY SUB-NAVIGATION BAR */}
      <div className="sticky top-[72px] z-30 -mx-4 sm:-mx-6 lg:-mx-8 border-y border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 sm:space-x-8 overflow-x-auto scrollbar-none pr-4">
            <a href="#details" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--accent)] hover:text-[var(--accent)] shrink-0 transition">
              Offerings
            </a>
            <a href="#overview" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--muted2)] hover:text-[var(--accent)] shrink-0 transition">
              Overview
            </a>
            <a href="#use-cases" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--muted2)] hover:text-[var(--accent)] shrink-0 transition">
              Use Cases
            </a>
            <a href="#technologies" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--muted2)] hover:text-[var(--accent)] shrink-0 transition">
              Technologies
            </a>
          </div>
          <Link href={`/contact?interest=${service.slug}`} className="hidden sm:inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] hover:underline">
            Request Scope Build &rarr;
          </Link>
        </div>
      </div>

      {/* DETAIL GRID */}
      <div id="details" className="mt-32 grid gap-8 lg:grid-cols-3 scroll-mt-40">
        {/* Core Service Offerings Card */}
        <ScrollAnimate direction="up" className="lg:col-span-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8 h-full shadow-lg hover:border-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/5 transition duration-300">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent)] mb-2">
              Capabilities
            </div>
            <div className="text-2xl font-bold tracking-tight text-[var(--text)] mb-8">
              Core Service Offerings
            </div>
            <ul className="grid gap-6 sm:grid-cols-2">
              {service.bullets.map((b, i) => (
                <li
                  key={b}
                  className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg3)]/30 p-6 shadow-sm transition-all duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--bg2)] hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent)]/5 group flex flex-col justify-between"
                >
                  {/* Watermark Index */}
                  <div className="absolute top-4 right-4 text-3xl font-extrabold text-[var(--text)]/5 group-hover:text-[var(--accent)]/15 transition duration-300 select-none">
                    0{i + 1}
                  </div>
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition duration-300">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--muted2)] font-semibold group-hover:text-[var(--text)] transition duration-200">
                      {b}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimate>
        
        {/* Expected Outcomes Card */}
        <ScrollAnimate direction="up" delay={150}>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8 shadow-lg h-full flex flex-col justify-between hover:border-[var(--teal)]/20 hover:shadow-xl hover:shadow-[var(--teal)]/5 transition duration-300">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--teal)] mb-2">
                Outcomes
              </div>
              <div className="text-2xl font-bold tracking-tight text-[var(--text)] mb-8">
                Expected Outcomes &amp; Impact
              </div>
              <ul className="space-y-4">
                {service.outcomes.map((o) => (
                  <li key={o} className="text-sm leading-relaxed text-[var(--muted2)] flex items-start gap-4 p-3 rounded-2xl hover:bg-[var(--surface)] hover:text-[var(--text)] transition duration-200">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-[var(--teal)]">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-semibold">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {isDev && (
              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <Link href="/development" className="link-arrow text-sm font-semibold text-[var(--accent)] hover:underline">
                  Learn more about TechnoElevate →
                </Link>
              </div>
            )}
          </div>
        </ScrollAnimate>
      </div>

      {/* DETAILED PRACTICE OVERVIEW & TECHNOLOGY STACK */}
      <div id="overview" className="mt-32 grid gap-8 lg:grid-cols-3 border-t border-[var(--border)] pt-24 scroll-mt-40">
        {/* Left 2 Columns: Description & Use Cases */}
        <div className="lg:col-span-2 space-y-16">
          <ScrollAnimate direction="up">
            <div className="space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent)] mb-1">
                Overview
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text)]">
                Detailed Practice Overview
              </h2>
              <p className="text-sm leading-relaxed text-[var(--muted2)] sm:text-base max-w-3xl font-medium">
                {service.description}
              </p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate direction="up" delay={100}>
            <div id="use-cases" className="space-y-8 scroll-mt-40">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent)] mb-1">
                  Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text)]">
                  Key Use Cases &amp; Engagement Scopes
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {service.useCases.map((uc, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-md hover:border-[var(--accent)]/30 hover:shadow-xl hover:shadow-[var(--accent)]/5 transition-all duration-300 group overflow-hidden"
                  >
                    {/* Glowing corner overlay */}
                    <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-tr from-[var(--accent)]/5 to-[var(--indigo)]/5 rounded-full blur-xl group-hover:scale-150 transition duration-500" />
                    
                    {/* Small visual top highlight border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--indigo)] opacity-0 group-hover:opacity-100 transition duration-300" />
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent)]">
                        Scenario 0{i + 1}
                      </span>
                      <span className="text-[10px] font-bold text-[var(--muted)] border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 rounded-md">
                        Active Scope
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--muted2)] sm:text-sm font-semibold group-hover:text-[var(--text)] transition duration-200 relative z-10">
                      {uc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* Right 1 Column: Technologies Stack */}
        <ScrollAnimate direction="up" delay={150} className="h-full">
          <div id="technologies" className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8 shadow-lg h-full flex flex-col justify-between hover:border-[var(--indigo)]/20 hover:shadow-xl hover:shadow-[var(--indigo)]/5 transition duration-300 scroll-mt-40">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--indigo)] mb-2">
                Tooling
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--text)] mb-6">
                Technology &amp; Tooling Stack
              </h2>
              <p className="text-xs text-[var(--muted)] mb-8 leading-relaxed font-semibold">
                We design and engineer validation assets using leading frameworks, cloud tools, and compliance utilities standard in this practice.
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-xs font-bold text-[var(--muted2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--bg2)] hover:-translate-y-0.5 transition duration-200 shadow-sm cursor-default"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-[var(--border)] text-xs text-[var(--muted)] font-semibold">
              Need a custom integration? We build compatibility adapters for all enterprise toolchains.
            </div>
          </div>
        </ScrollAnimate>
      </div>
      </div>
    </V2InnerShell>
  );
}
