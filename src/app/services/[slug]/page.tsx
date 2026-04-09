import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { services } from "@/content/site";
import { SERVICE_ART } from "@/components/v2/ServiceArt";
import { SERVICE_IMAGES } from "@/components/v2/ServiceImages";
import {
  CheckCircle2,
  ArrowRight,
  Wrench,
  Building2,
  ChevronRight,
} from "lucide-react";

type Params = Promise<{ slug: string }>;

export default async function ServiceDetailPage(props: { params: Params }) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const ArtComponent = SERVICE_ART[service.slug];
  const heroImage = SERVICE_IMAGES[service.slug];
  const relatedServices = service.relatedSlugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean) as typeof services;

  return (
    <V2InnerShell>
      {/* ── Hero ── */}
      <div className="group relative left-1/2 right-1/2 w-screen max-w-none -translate-x-1/2 overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.28)] h-300 sm:h-400 lg:h-125">
        <Image
          src={heroImage}
          alt={service.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.82)_32%,rgba(2,6,23,0.46)_62%,rgba(2,6,23,0.12)_82%,rgba(2,6,23,0.02)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-10">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Service
            </div>
            <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {service.name}
            </h1>
            <p className="mt-2 text-lg font-medium italic text-[var(--accent)] sm:text-xl">
              {service.tagline}
            </p>
            <p className="mt-4 text-base leading-7 text-white">
              {service.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none"
              >
                Talk to a specialist <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white bg-[var(--surface)] px-6 text-sm font-semibold text-white transition hover:bg-[var focus:outline-none"
              >
                All services
              </Link>
            </div>
          </div>
          {/* <div className="lg:col-span-5">
            {ArtComponent ? (
              <ArtComponent className="w-full rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.4)]" />
            ) : (
              <div className="h-48 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg2)]" />
            )}
          </div> */}
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="mt-10 grid grid-cols-3 gap-3">
        {service.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5 text-center"
          >
            <div className="text-2xl font-semibold tracking-tight text-[var(--accent)]">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-[var(--muted)]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── What You Get + Outcomes ── */}
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.2)] lg:col-span-2">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
            What you get
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {service.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-sm leading-6 text-[var(--muted2)]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
            Expected outcomes
          </div>
          <ul className="mt-4 grid gap-4">
            {service.outcomes.map((o, i) => (
              <li key={o} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm leading-6 text-[var(--muted2)]">
                  {o}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Our Process ── */}
      <div className="mt-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          How we work
        </div>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
          Our delivery process
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-sm font-bold text-white shadow-sm">
                {step.step}
              </div>
              <div className="mt-3 text-sm font-semibold tracking-tight text-[var(--text)]">
                {step.title}
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--muted2)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tools & Technology ── */}
      <div className="mt-12">
        <div className="flex items-center gap-2">
          <Wrench className="h-4 w-4 text-[var(--muted)]" />
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
            Tools & technologies
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted2)] transition hover:border-[var(--border2)] hover:text-[var(--text)]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* ── Industries ── */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-[var(--muted)]" />
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
            Industries served
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.industries.map((ind) => (
            <span
              key={ind}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted2)]"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>

      {/* ── Related Services ── */}
      {relatedServices.length > 0 && (
        <div className="mt-12">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
            Related services
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {relatedServices.map((svc) => {
              const RelArt = SERVICE_ART[svc.slug];
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] transition hover:border-[var(--border2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
                >
                  {RelArt && (
                    <div className="h-28 overflow-hidden">
                      <RelArt className="h-full w-full rounded-none" />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition">
                        {svc.name}
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-[var(--muted)] transition group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
                    </div>
                    <div className="mt-1 text-xs italic text-[var(--muted)]">
                      {svc.tagline}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)]">
        <div className="h-1 w-full bg-[linear-gradient(90deg,var(--accent),var(--indigo,rgba(129,140,248,1)),var(--teal,rgba(86,220,255,0.85)))]" />
        <div className="p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Ready to get started?
              </div>
              <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
                Talk to a {service.name} specialist
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">
                Tell us about your engineering challenge and we&apos;ll map the
                right delivery model, tooling, and team structure for your
                context.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none sm:w-auto"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/services"
          className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
        >
          ← All services
        </Link>
      </div>
    </V2InnerShell>
  );
}
