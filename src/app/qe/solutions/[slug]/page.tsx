import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { CtaBand, Eyebrow, GhostButton, PrimaryButton, Wrap } from "@/components/section/blocks";
import { qeSolutionSlugs, sections } from "@/content/sections";
import { services } from "@/content/site";
import { servicePageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return qeSolutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service || !qeSolutionSlugs.includes(service.slug)) return {};
  return servicePageMetadata(service.slug, service.name, service.summary);
}

export default async function SolutionDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service || !qeSolutionSlugs.includes(service.slug)) return notFound();
  const section = sections.qe;

  return (
    <>
      <ServiceJsonLd name={service.name} description={service.summary} slug={service.slug} />

      <div className="relative">
        <Wrap className="pb-14 pt-16 sm:pt-24">
          <Link href="/qe/solutions" className="text-sm font-semibold text-[var(--muted2)] hover:text-[var(--sec)]">
            ← All solutions
          </Link>
          <div className="mt-6">
            <Eyebrow>Quality Engineering solution</Eyebrow>
          </div>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            {service.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted2)]">{service.summary}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryButton href={`/qe/contact?interest=${service.slug}`}>Consult with an expert</PrimaryButton>
            <GhostButton href="/qe/how-we-work">How we work</GhostButton>
          </div>
        </Wrap>
      </div>

      <div className="bg-[var(--bg2)]">
        <Wrap className="grid gap-10 py-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted2)]">{service.description}</p>
            <h3 className="mt-10 text-lg font-bold tracking-tight">Capabilities</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 text-sm font-medium"
                >
                  <span className="text-[var(--sec)]">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-7">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--sec)]">Expected outcomes</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              {service.outcomes.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className="text-[var(--sec)]">●</span>
                  {o}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-[var(--sec)]">Tooling</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-[var(--border)] bg-[var(--bg2)] px-2.5 py-1 text-xs font-semibold text-[var(--muted2)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </Wrap>
      </div>

      {service.benefits?.length ? (
        <div>
          <Wrap className="py-20">
            <h2 className="text-3xl font-bold tracking-tight">
              {service.benefitsSectionTitle ?? `${service.name} benefits`}
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((b, i) => (
                <article key={b.title} className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-7">
                  <span className="text-xs font-bold text-[var(--sec)]">0{i + 1}</span>
                  <h3 className="mt-3 text-base font-bold tracking-tight">{b.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted2)]">{b.description}</p>
                </article>
              ))}
            </div>
          </Wrap>
        </div>
      ) : null}

      <CtaBand section={section} />
    </>
  );
}
