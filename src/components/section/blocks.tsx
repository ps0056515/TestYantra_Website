import Link from "next/link";
import type { ReactNode } from "react";
import { trustedClients } from "@/content/site";
import type {
  EngagementModel,
  NumberedItem,
  PlatformItem,
  SectionCaseStudy,
  SectionContent,
  SolutionCard,
  Stat,
  Step,
} from "@/content/sections";
import type { FaqItem } from "@/content/faq";

export function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--sec)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--sec)]" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-base leading-7 text-[var(--muted2)] sm:text-lg">{sub}</p> : null}
    </div>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[var(--sec)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--sec)]/20 transition hover:-translate-y-0.5 hover:opacity-95"
    >
      {children}
    </Link>
  );
}

export function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[var(--border2)] bg-[var(--bg2)] px-7 py-3.5 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--text)]"
    >
      {children}
    </Link>
  );
}

/** Soft background glow used on heroes */
function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--sec)]/10 blur-3xl" />
      <div className="bg-dot-grid absolute inset-0 opacity-60" />
    </div>
  );
}

const toneClass = {
  ok: "bg-emerald-500/10 text-emerald-600",
  info: "bg-[var(--sec)]/10 text-[var(--sec)]",
  warn: "bg-amber-500/10 text-amber-600",
} as const;

export function Hero({ section }: { section: SectionContent }) {
  const { hero, basePath } = section;
  return (
    <div className="relative">
      <Glow />
      <Wrap className="grid items-center gap-12 pb-20 pt-16 sm:pt-24 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {hero.headline}
            <br />
            <span className="text-[var(--sec)]">{hero.headlineAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted2)]">{hero.sub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryButton href={`${basePath}/contact`}>Book a Discovery Call</PrimaryButton>
            <GhostButton href={`${basePath}/how-we-work`}>See how we work</GhostButton>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {hero.chips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-[var(--border)] bg-[var(--bg2)] px-4 py-1.5 text-xs font-semibold text-[var(--muted2)]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-2xl shadow-[var(--sec)]/10">
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold">{hero.visualTitle}</div>
              <div className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--border2)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--border2)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--sec)]" />
              </div>
            </div>
            <ul className="mt-5 space-y-3">
              {hero.visualRows.map((r) => (
                <li
                  key={r.label}
                  className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3"
                >
                  <span className="text-sm font-medium text-[var(--muted2)]">{r.label}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${toneClass[r.tone]}`}>{r.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--bg3)]">
              <div className="h-full w-[88%] rounded-full bg-[var(--sec)]" />
            </div>
            <p className="mt-2 text-right text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)]">
              Illustrative
            </p>
          </div>
        </div>
      </Wrap>
    </div>
  );
}

export function TrustStrip() {
  const names = trustedClients.slice(0, 14).map((c) => c.name);
  return (
    <div className="border-y border-[var(--border)] bg-[var(--bg2)]">
      <Wrap className="py-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
          Trusted by global enterprises and leading Indian brands
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {names.map((n) => (
            <li key={n} className="text-base font-bold tracking-tight text-[var(--muted)]/80 sm:text-lg">
              {n}
            </li>
          ))}
        </ul>
      </Wrap>
    </div>
  );
}

export function StatBand({ stats }: { stats: Stat[] }) {
  return (
    <div>
      <Wrap className="py-16">
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6">
              <dt className="order-2 mt-1 text-sm font-medium text-[var(--muted2)]">{s.label}</dt>
              <dd className="text-4xl font-extrabold tracking-tight text-[var(--sec)] sm:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Wrap>
    </div>
  );
}

export function WhyFails({ data }: { data: SectionContent["whyFails"] }) {
  return (
    <div className="bg-[var(--bg2)]">
      <Wrap className="py-20 sm:py-24">
        <SectionHeading eyebrow={data.eyebrow} title={data.title} sub={data.sub} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.items.map((item: NumberedItem) => (
            <article
              key={item.n}
              className="flex flex-col rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--sec)]/5"
            >
              <span className="text-sm font-bold text-[var(--sec)]">{item.n}</span>
              <h3 className="mt-4 text-xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">{item.lead}</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted2)]">{item.body}</p>
            </article>
          ))}
        </div>
      </Wrap>
    </div>
  );
}

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="mt-12 grid gap-4">
      {steps.map((s) => (
        <li
          key={s.n}
          className="grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:grid-cols-[96px_1fr] sm:p-8 md:grid-cols-[96px_220px_1fr]"
        >
          <span className="text-5xl font-extrabold leading-none text-[var(--sec)]/25">{s.n}</span>
          <div>
            <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[var(--sec)]">{s.label}</p>
          </div>
          <p className="text-sm leading-7 text-[var(--muted2)] sm:col-span-2 md:col-span-1">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function ModelGrid({ models }: { models: EngagementModel[] }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {models.map((m, i) => (
        <article key={m.title} className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-7">
          <span className="text-xs font-bold text-[var(--sec)]">0{i + 1}</span>
          <h3 className="mt-3 text-lg font-bold tracking-tight">{m.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted2)]">{m.body}</p>
          <p className="mt-5 border-t border-[var(--border)] pt-4 text-xs font-semibold text-[var(--muted)]">
            Best for: {m.bestFor}
          </p>
        </article>
      ))}
    </div>
  );
}

function CardLink({ href, external, children }: { href?: string; external?: boolean; children: ReactNode }) {
  if (!href) return null;
  const cls = "mt-6 inline-flex text-sm font-semibold text-[var(--sec)] hover:underline";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children} ↗
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children} →
    </Link>
  );
}

export function PlatformCards({ items }: { items: PlatformItem[] }) {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {items.map((p) => (
        <article
          key={p.name}
          className="flex flex-col rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--sec)]/5"
        >
          <span className="w-fit rounded-full bg-[var(--sec)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--sec)]">
            {p.tag}
          </span>
          <h3 className="mt-5 text-2xl font-bold tracking-tight">{p.name}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted2)]">{p.body}</p>
          <ul className="mt-5 space-y-2 text-sm font-medium">
            {p.bullets.map((b) => (
              <li key={b} className="flex gap-2.5">
                <span className="mt-0.5 text-[var(--sec)]">✓</span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <CardLink href={p.href} external={p.external}>
              {p.external ? "Visit platform" : "Learn more"}
            </CardLink>
          </div>
        </article>
      ))}
    </div>
  );
}

export function StackGrid({ title, stack }: { title: string; stack: { category: string; skills: string[] }[] }) {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((s) => (
          <div key={s.category} className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--sec)]">{s.category}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.skills.map((k) => (
                <span
                  key={k}
                  className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs font-semibold text-[var(--muted2)]"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SolutionGrid({ items, contactHref }: { items: SolutionCard[]; contactHref: string }) {
  const groups = Array.from(new Set(items.map((i) => i.group)));
  return (
    <div className="mt-12 space-y-14">
      {groups.map((group) => (
        <div key={group}>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--muted)]">{group}</h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items
              .filter((i) => i.group === group)
              .map((s) => (
                <article
                  key={s.slug}
                  id={s.slug}
                  className="flex scroll-mt-28 flex-col rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-7 transition hover:-translate-y-1 hover:border-[var(--sec)]/40 hover:shadow-xl hover:shadow-[var(--sec)]/5"
                >
                  <h4 className="text-lg font-bold tracking-tight">{s.name}</h4>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted2)]">{s.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-lg bg-[var(--sec)]/8 px-2.5 py-1 text-xs font-semibold text-[var(--sec)]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Link
                      href={s.href ?? `${contactHref}?interest=${s.slug}`}
                      className="text-sm font-semibold text-[var(--sec)] hover:underline"
                    >
                      {s.href ? "Explore solution →" : "Talk to an expert →"}
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyCards({ items }: { items: SectionCaseStudy[] }) {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      {items.map((c) => (
        <article key={c.title} className="flex flex-col rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <span className="rounded-full bg-[var(--sec)]/10 px-3 py-1 text-[var(--sec)]">{c.industry}</span>
            {c.client ? <span className="text-[var(--muted)]">{c.client}</span> : null}
          </div>
          <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight">{c.title}</h3>
          <dl className="mt-5 space-y-4 text-sm leading-7">
            <div>
              <dt className="font-bold">Challenge</dt>
              <dd className="text-[var(--muted2)]">{c.problem}</dd>
            </div>
            <div>
              <dt className="font-bold">Approach</dt>
              <dd className="text-[var(--muted2)]">{c.approach}</dd>
            </div>
          </dl>
          <ul className="mt-auto grid grid-cols-3 gap-3 pt-6">
            {c.results.map((r) => (
              <li key={r.label} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-3 text-center">
                <div className="text-base font-extrabold text-[var(--sec)] sm:text-lg">{r.value}</div>
                <div className="mt-1 text-[11px] font-semibold text-[var(--muted)]">{r.label}</div>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export function FaqList({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="mt-10 divide-y divide-[var(--border)] rounded-3xl border border-[var(--border)] bg-[var(--bg2)]">
      {faqs.map((f) => (
        <details key={f.question} className="group px-6 py-5 sm:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
            {f.question}
            <span className="text-xl text-[var(--sec)] transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-[var(--muted2)]">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ section }: { section: SectionContent }) {
  return (
    <div className="px-5 pb-20 sm:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0b1020] px-8 py-16 text-center text-white sm:px-16 sm:py-20">
        <div aria-hidden className="absolute -top-32 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-[var(--sec)]/40 blur-3xl" />
        <h2 className="relative mx-auto max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
          {section.cta.title}
        </h2>
        <p className="relative mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{section.cta.sub}</p>
        <div className="relative mt-9 flex justify-center">
          <PrimaryButton href={`${section.basePath}/contact`}>Book a Discovery Call</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export function PageHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="relative">
      <Glow />
      <Wrap className="pb-14 pt-16 sm:pt-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted2)]">{sub}</p>
      </Wrap>
    </div>
  );
}
