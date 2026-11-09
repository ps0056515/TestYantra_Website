import Link from "next/link";
import { brand, stats, technoElevate, trustedClients } from "@/content/site";
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
  const clientNames = trustedClients.slice(0, 14).map((c) => c.name);

  return (
    <div className="sans-headings bg-[var(--bg)] text-[var(--text)]">
      {/* Hero */}
      <div className="relative overflow-hidden pt-[132px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-48 left-1/4 h-[520px] w-[640px] rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="absolute -top-48 right-1/4 h-[520px] w-[640px] rounded-full bg-[var(--indigo)]/10 blur-3xl" />
          <div className="bg-dot-grid absolute inset-0 opacity-60" />
        </div>
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border2)] bg-[var(--bg2)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {brand.name} · {brand.tagline}
          </div>
          <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
            Two ways we engineer
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--indigo)] bg-clip-text text-transparent">
              enterprise confidence.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--muted2)]">
            Choose where to start. Whether you need to assure the quality of what you ship, or build the next
            generation of applications and AI — TestYantra has a dedicated practice for it.
          </p>
        </div>

        {/* Entry cards */}
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-5 pb-20 sm:px-8 lg:grid-cols-2">
          {entryCards.map((c) => (
            <Link
              key={c.key}
              href={sections[c.key].basePath}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg2)] p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:p-10"
              style={{ ["--c" as string]: c.color }}
            >
              <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--c)]/10 blur-3xl transition group-hover:bg-[var(--c)]/20" />
              <span className="relative text-xs font-bold uppercase tracking-[0.2em] text-[var(--c)]">{c.kicker}</span>
              <h2 className="relative mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{c.title}</h2>
              <p className="relative mt-4 text-base leading-7 text-[var(--muted2)]">{c.body}</p>
              <ul className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm font-medium">
                    <span className="mt-0.5 text-[var(--c)]">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 flex items-end justify-between gap-4 border-t border-[var(--border)] pt-6">
                <div className="flex gap-8">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-3xl font-extrabold text-[var(--c)]">{s.value}</div>
                      <div className="text-xs font-semibold text-[var(--muted)]">{s.label}</div>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--c)] px-5 py-3 text-sm font-semibold text-white transition group-hover:gap-3">
                  {c.cta} <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Trust */}
      <div className="border-y border-[var(--border)] bg-[var(--bg2)]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            Trusted by global enterprises and leading Indian brands
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clientNames.map((n) => (
              <li key={n} className="text-base font-bold tracking-tight text-[var(--muted)]/80 sm:text-lg">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats */}
      <div>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5">
                <dt className="order-2 mt-1 text-xs font-medium text-[var(--muted2)]">{s.label}</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-[var(--text)]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

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
