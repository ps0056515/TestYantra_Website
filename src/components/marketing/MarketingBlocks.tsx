import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { brand } from "@/content/site";
import {
  clientLogos,
  companyStats,
  showcaseIndustries,
  whyChooseItems,
} from "@/content/marketing";
import { IndustryGlyph, StatIcon, WhyIcon } from "@/components/marketing/MarketingIcons";

export function HeroSection() {
  return (
    <section className="border-b border-neutral-100 bg-white pb-16 pt-10 sm:pb-24 sm:pt-14">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full bg-brand-peach px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-orange">
            Future-proof quality assurance
          </div>
          <h1 className="mt-8 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem]">
            <span className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
              <span className="text-brand-orange">Re</span>
              <span className="inline-flex -rotate-6 items-center justify-center rounded-lg bg-brand-orange px-2.5 py-1 text-white shadow-[0_8px_24px_-6px_rgba(243,129,24,0.55)] sm:px-3 sm:py-1.5">
                De
              </span>
              <span className="text-brand-orange">fining</span>
            </span>
            <span className="mt-3 block text-foreground">Software Quality</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
            We reimagine QA to do more with less, accelerating defect detection, reducing test cycles,
            and improving overall delivery efficiency.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-lg bg-brand-orange px-8 text-sm font-semibold text-white shadow-md transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function VideoWordmarkSection() {
  return (
    <section className="border-b border-neutral-100 bg-white py-16 sm:py-24" aria-label="Brand">
      <Container>
        <div className="flex min-h-[280px] flex-col items-center justify-center sm:min-h-[360px]">
          <div className="relative inline-block">
            <p className="select-none text-center text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-[#9ea0a3]">TEST</span>
              <span className="text-[#f9cb9c]">Y</span>
              <span className="text-[#9ea0a3]">ANTRA</span>
            </p>
            <button
              type="button"
              className="absolute left-[52%] top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              aria-label="Play introduction video"
            >
              <svg className="ml-0.5 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AiEvolutionSection() {
  return (
    <section className="relative overflow-hidden bg-hero-navy text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-24 top-0 h-[min(100%,480px)] w-[min(100%,480px)] rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <svg
          className="absolute right-0 top-1/2 h-[120%] w-1/2 -translate-y-1/2 opacity-30"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M280 40C340 120 360 200 320 280 280 360 200 380 120 340 40 300 20 200 60 120 100 40 200 20 280 40Z"
            stroke="white"
            strokeWidth="1.2"
          />
          <path
            d="M260 80C300 140 310 220 270 280 230 340 160 350 100 310 40 270 30 190 70 130 110 70 200 50 260 80Z"
            stroke="rgba(196,181,253,0.9)"
            strokeWidth="1"
          />
        </svg>
      </div>
      <Container>
        <div className="relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-tight">
              The Home of Our AI Evolution
            </h2>
            <p className="mt-4 max-w-lg text-lg text-white/85">
              Designed for exploration, insight, and impact
            </p>
            <Link
              href="/academy"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-brand-orange px-6 text-sm font-semibold text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hero-navy"
            >
              Learn More
            </Link>
          </div>
          <div className="relative hidden min-h-[220px] lg:block" aria-hidden>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 to-transparent blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CompanyOverviewSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          We at <span className="text-brand-orange">TestYantra</span>
        </h2>
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-neutral-200 bg-white px-6 py-10 text-center sm:px-12 sm:py-12">
          <p className="text-base leading-8 text-foreground sm:text-lg sm:leading-8">
            At <span className="font-semibold text-brand-orange">Test Yantra</span>, we help teams
            build software that performs—consistently, reliably, and at scale. With deep expertise in
            quality engineering, automation, and AI-driven testing, we bring precision to every
            stage of the development lifecycle. For over two decades, we’ve partnered with
            organizations to accelerate delivery, reduce risk, and create seamless digital
            experiences.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <StatIcon name={s.icon} />
              <div className="mt-4 text-2xl font-bold text-foreground">{s.stat}</div>
              <div className="mt-1 text-sm font-medium text-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function OurClientsSection() {
  return (
    <section className="border-y border-neutral-100 bg-white py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Our <span className="text-brand-orange">Clients</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-foreground">
          We partner with forward-thinking teams—from startups to global enterprises—who prioritize
          quality, speed, and innovation.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clientLogos.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white px-6 py-10 shadow-sm"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white"
                style={{ backgroundColor: c.tint }}
              >
                {c.initial}
              </div>
              <div className="mt-4 text-sm font-medium text-muted">{c.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Why Choose <span className="text-brand-orange">TestYantra?</span>
        </h2>
        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[calc(100%-0.75rem)] hidden border-t border-dashed border-foreground sm:block"
            aria-hidden
          />
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {whyChooseItems.map((item, i) => (
              <div key={item.label} className="relative flex flex-col items-center text-center">
                <WhyIcon index={i} />
                <p className="mt-4 max-w-[8rem] text-xs font-semibold leading-snug text-foreground sm:text-sm">
                  {item.label}
                </p>
                <div
                  className={`relative z-10 mt-8 h-3 w-3 rounded-full sm:mt-10 ${
                    item.active ? "bg-brand-orange" : "bg-foreground"
                  }`}
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function IndustriesStackSection() {
  return (
    <section className="bg-white pb-16 pt-4 sm:pb-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Built for Every Industry.
        </h2>
        <p className="mt-2 text-xl font-bold text-brand-orange">Driven by Innovation.</p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-foreground">
          We partner with forward-thinking teams—from startups to global enterprises—who prioritize
          quality, speed, and innovation.
        </p>
        <div className="mt-12 flex flex-col gap-4">
          {showcaseIndustries.map((ind) => (
            <div
              key={ind.slug}
              className="relative h-[220px] overflow-hidden rounded-3xl sm:h-[260px]"
            >
              <Image
                src={ind.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 1152px"
                priority={ind.slug === "banking"}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40"
                aria-hidden
              />
              <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-black/35 to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/35 to-transparent" aria-hidden />
              <div className="relative z-10 flex h-full flex-col justify-start p-8 sm:p-10">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl shadow-md"
                  style={{ backgroundColor: ind.iconBg }}
                >
                  <IndustryGlyph icon={ind.icon} />
                </div>
                <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
                  {ind.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/90">{ind.description}</p>
                <Link
                  href="/industries"
                  className="mt-4 inline-flex w-fit text-sm font-semibold text-white/95 underline-offset-4 hover:underline"
                >
                  Explore industries
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HomeContactTeaserSection() {
  return (
    <section className="border-t border-neutral-100 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to <span className="text-brand-orange">engineer</span> the future?
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Partner with us to redefine what&apos;s possible in software quality and delivery speed.
            </p>
            <ul className="mt-10 space-y-8">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange text-brand-orange">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 6h16v12H4z" />
                    <path d="M4 8l8 5 8-5" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-foreground">Inquiries</div>
                  <a
                    href={`mailto:${brand.emailSolutions}`}
                    className="mt-1 block text-sm text-muted transition hover:text-brand-orange"
                  >
                    {brand.emailSolutions}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange text-brand-orange">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21s-6-4.2-6-10a6 6 0 1112 0c0 5.8-6 10-6 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-foreground">Global HQ</div>
                  <p className="mt-1 text-sm text-muted">Bangalore, India | San Jose, USA</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)] sm:p-8">
              <h3 className="text-xl font-light text-muted">Send us a message</h3>
              <p className="mt-4 text-sm text-muted">
                Continue to our contact form to share your goals, industry, and timelines—we&apos;ll
                respond with a practical quality plan.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-lg bg-brand-orange text-sm font-semibold text-white transition hover:opacity-95 sm:w-auto sm:px-10"
              >
                Open contact form
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
