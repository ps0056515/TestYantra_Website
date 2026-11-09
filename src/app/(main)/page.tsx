import Image from "next/image";
import Link from "next/link";
import { DarkBand, TrustStrip } from "@/components/section/blocks";
import { sectionTheme } from "@/content/sectionTheme";
import { brand, stats, technoElevate } from "@/content/site";
import { sections } from "@/content/sections";
import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.home;

const entryCards = [
  {
    key: "qe" as const,
    color: "var(--accent)",
    kicker: "Section 01",
    title: "Quality Engineering & Testing",
    body: "Managed QA, test automation, crowd testing and AI-augmented validation — accountable quality for every release.",
    points: ["Managed QA & CoE", "Test automation & CI/CD gates", "AI quality: testing the AI, AI in testing", "FireFlink scriptless platform"],
    stats: [
      { value: "217+", label: "Clients" },
      { value: "20M+", label: "Tests automated" },
    ],
    cta: "Enter Quality Engineering",
  },
  {
    key: "ai" as const,
    color: "var(--indigo)",
    kicker: "Section 02",
    title: "Application Engineering & AI",
    body: "Generative AI, agentic workflows and cloud-native applications — engineered for production with quality built in.",
    points: ["Generative AI, RAG & agents", "Cloud-native web & mobile engineering", "Data platforms & enterprise integration", "900+ engineers, squads on demand"],
    stats: [
      { value: "900+", label: "Engineers" },
      { value: "50+", label: "Stacks" },
    ],
    cta: "Enter Application Engineering & AI",
  },
];

export default function GatewayPage() {
  const gradient = "from-orange-400 via-pink-400 to-indigo-400";

  return (
    <div className="sans-headings bg-[var(--bg)] text-[var(--text)]" style={{ ["--sec" as string]: "var(--accent)" }}>
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-[#060913] pt-[68px] text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-[15%] h-[520px] w-[640px] rounded-full bg-[var(--accent)]/20 blur-3xl" />
          <div className="absolute -top-40 right-[15%] h-[520px] w-[640px] rounded-full bg-[var(--indigo)]/25 blur-3xl" />
        </div>
        <div className="mx-auto max-w-5xl px-5 pt-16 text-center sm:px-8 sm:pt-20">
          <Link
            href="/qe/solutions/testing-ai"
            className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-4 text-xs text-white/80 backdrop-blur transition hover:border-white/40"
          >
            <span className="rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              New
            </span>
            <span className="truncate">TestYantra AI — validate LLMs and agentic systems before go-live →</span>
          </Link>
          <h1 className="mt-7 text-balance text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-7xl">
            Two ways we engineer
            <br />
            <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>enterprise confidence.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            {brand.name} · {brand.tagline}. Choose where to start — assure the quality of what you ship, or build the
            next generation of applications and AI.
          </p>
        </div>

        {/* Entry cards */}
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-5 pb-20 sm:px-8 lg:grid-cols-2">
          {entryCards.map((c) => {
            const t = sectionTheme[c.key];
            return (
              <Link
                key={c.key}
                href={sections[c.key].basePath}
                className="group relative flex min-h-[600px] flex-col justify-end overflow-hidden rounded-[2rem] border border-white/10 transition duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-2xl"
                style={{ ["--c" as string]: c.color }}
              >
                <Image
                  src={t.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[50%_30%] transition duration-700 group-hover:scale-105"
                  style={{ filter: t.imageFilter }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/80 to-[#060913]/10"
                />
                <div className="relative p-8 sm:p-10">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--c)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                    {c.kicker}
                  </span>
                  <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                    {c.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/75">{c.body}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm font-medium text-white/90">
                        <span className="mt-0.5 text-[var(--c)]">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t border-white/15 pt-6">
                    <div className="flex gap-8">
                      {c.stats.map((s) => (
                        <div key={s.label}>
                          <div className="text-3xl font-extrabold text-white">{s.value}</div>
                          <div className="text-xs font-semibold text-white/60">{s.label}</div>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#060913] transition group-hover:gap-3 group-hover:bg-[var(--c)] group-hover:text-white">
                      {c.cta} <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Trust */}
      <TrustStrip />

      {/* Stats */}
      <DarkBand>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">One group</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Real engineering outcomes. At enterprise scale.
            </h2>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col bg-[#0a0f1f] p-6 sm:p-8">
                <dd
                  className={`bg-gradient-to-r ${gradient} bg-clip-text text-4xl font-extrabold tracking-tight text-transparent`}
                >
                  {s.value}
                </dd>
                <dt className="order-2 mt-2 text-xs font-medium text-white/65">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </DarkBand>

      {/* Better together */}
      <div className="bg-[var(--bg2)]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Better together</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-5xl">{technoElevate.differentiator.title}</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted2)]">
              Use either practice on its own — or both, with no hand-offs between the team that builds and the team
              that validates.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {technoElevate.differentiator.points.map((p, i) => (
              <article key={p.title} className="rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-8">
                <span className="text-sm font-bold text-[var(--accent)]">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted2)]">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Group */}
      <div>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">The TestYantra group</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Platforms and talent behind both practices</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <a
              href="https://www.fireflink.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold">FireFlink ↗</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted2)]">
                AI-powered scriptless test automation platform for web, mobile, API and enterprise applications.
              </p>
            </a>
            <a
              href="https://www.qspiders.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold">Academy — QSpiders &amp; JSpiders ↗</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted2)]">
                600k+ trained professionals feeding job-ready talent into both practices.
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0b1020] px-8 py-16 text-center text-white sm:py-20">
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Tell us what you are working on and we will connect you with the right team within one business day.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white">
              Book a Discovery Call
            </Link>
            <Link href="/qe/contact" className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold">
              Quality Engineering
            </Link>
            <Link href="/ai/contact" className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold">
              Application Engineering &amp; AI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
