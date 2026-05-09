import { notFound } from "next/navigation";
import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { capabilities } from "@/content/capabilities";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cap = capabilities.find((c) => c.slug === slug);
  if (!cap) return {};
  return {
    title: `${cap.title} — TestYantra Capabilities`,
    description: cap.summary,
  };
}

export default async function CapabilityPage({ params }: Props) {
  const { slug } = await params;
  const cap = capabilities.find((c) => c.slug === slug);
  if (!cap) notFound();

  const others = capabilities.filter((c) => c.slug !== cap.slug);

  return (
    <V2InnerShell>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--muted)]" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[var(--text)] transition">Home</Link>
        <span>/</span>
        <Link href="/capabilities" className="hover:text-[var(--text)] transition">Capabilities</Link>
        <span>/</span>
        <span className="text-[var(--muted2)]">{cap.title}</span>
      </nav>

      {/* Hero */}
      <div className="mt-6 max-w-3xl">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
            style={{ background: `${cap.color}20`, border: `1px solid ${cap.color}35` }}
          >
            {cap.icon}
          </div>
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: cap.color }}>
            Capability
          </div>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl leading-tight">
          {cap.title}
        </h1>
        <p className="mt-2 text-lg italic text-[var(--muted)]">{cap.tagline}</p>
        <p className="mt-5 text-base leading-7 text-[var(--muted2)] max-w-2xl">{cap.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-accent">Talk to an Expert →</Link>
          <Link href="/client-success" className="btn-outline">See Case Studies →</Link>
        </div>
      </div>

      {/* Outcomes strip */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {cap.outcomes.map((o) => (
          <div
            key={o.label}
            className="rounded-xl border bg-[var(--bg2)] px-5 py-5 text-center"
            style={{ borderColor: `${cap.color}30` }}
          >
            <div className="text-2xl font-bold" style={{ color: cap.color }}>{o.metric}</div>
            <div className="mt-1 text-xs text-[var(--muted)]">{o.label}</div>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="mt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">What We Deliver</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">Services within {cap.title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cap.services.map((svc) => (
            <div
              key={svc.name}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-5 transition hover:border-[var(--border2)]"
            >
              {svc.slug ? (
                <Link href={`/services/${svc.slug}`} className="group">
                  <h3 className="text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition">
                    {svc.name} →
                  </h3>
                </Link>
              ) : (
                <h3 className="text-sm font-semibold text-[var(--text)]">{svc.name}</h3>
              )}
              <p className="mt-2 text-xs leading-5 text-[var(--muted2)]">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="mt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Use Cases</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">Real outcomes from real engagements</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {cap.useCases.map((uc, idx) => (
            <div
              key={uc.title}
              className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-6"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                style={{ background: cap.color }}
              />
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                Case {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 text-sm font-semibold text-[var(--text)]">{uc.title}</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--muted2)]">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Tools & Technologies</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">Our {cap.title} toolkit</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {cap.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted2)]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Other capabilities */}
      <div className="mt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Explore More</div>
        <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">Other Capabilities</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/capabilities/${other.slug}`}
              className="group flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-4 transition hover:border-[var(--border2)]"
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                style={{ background: `${other.color}18` }}
              >
                {other.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition">
                  {other.title}
                </h3>
                <p className="mt-0.5 text-xs text-[var(--muted)]">{other.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="mt-16 rounded-2xl p-10 text-center"
        style={{ background: `linear-gradient(135deg, ${cap.color}15 0%, var(--bg2) 100%)`, border: `1px solid ${cap.color}30` }}
      >
        <h2 className="text-2xl font-semibold text-[var(--text)]">
          Ready to transform your {cap.title.toLowerCase()} capability?
        </h2>
        <p className="mt-3 text-sm text-[var(--muted2)] max-w-lg mx-auto">
          Talk to one of our {cap.title} specialists and discover how TestYantra can accelerate your quality outcomes.
        </p>
        <Link href="/contact" className="btn-accent mt-6 inline-block">
          Book a Free Consultation →
        </Link>
      </div>
    </V2InnerShell>
  );
}
