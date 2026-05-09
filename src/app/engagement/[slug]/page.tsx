import { notFound } from "next/navigation";
import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { engagementModels } from "@/content/engagement";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return engagementModels.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const model = engagementModels.find((m) => m.slug === slug);
  if (!model) return {};
  return {
    title: `${model.title} — TestYantra Engagement Models`,
    description: model.summary,
  };
}

export default async function EngagementModelPage({ params }: Props) {
  const { slug } = await params;
  const model = engagementModels.find((m) => m.slug === slug);
  if (!model) notFound();

  const others = engagementModels.filter((m) => m.slug !== model.slug);

  return (
    <V2InnerShell>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--muted)]" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[var(--text)] transition">Home</Link>
        <span>/</span>
        <Link href="/engagement" className="hover:text-[var(--text)] transition">Engagement Models</Link>
        <span>/</span>
        <span className="text-[var(--muted2)]">{model.title}</span>
      </nav>

      {/* Hero */}
      <div className="mt-6 max-w-3xl">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
            style={{ background: `${model.color}20`, border: `1px solid ${model.color}35` }}
          >
            {model.icon}
          </div>
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: model.color }}>
            Engagement Model
          </div>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl leading-tight">
          {model.title}
        </h1>
        <p className="mt-2 text-lg italic text-[var(--muted)]">{model.tagline}</p>
        <p className="mt-5 text-base leading-7 text-[var(--muted2)] max-w-2xl">{model.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-accent">Get Started →</Link>
          <Link href="/engagement" className="btn-outline">Compare All Models</Link>
        </div>
      </div>

      {/* Outcomes */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {model.outcomes.map((o) => (
          <div
            key={o.label}
            className="rounded-xl border bg-[var(--bg2)] px-5 py-5 text-center"
            style={{ borderColor: `${model.color}30` }}
          >
            <div className="text-2xl font-bold" style={{ color: model.color }}>{o.metric}</div>
            <div className="mt-1 text-xs text-[var(--muted)]">{o.label}</div>
          </div>
        ))}
      </div>

      {/* What's included */}
      <div className="mt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">What&apos;s Included</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">Everything in the {model.title} model</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {model.features.map((feat) => (
            <div
              key={feat}
              className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-4"
            >
              <span className="mt-0.5 text-sm font-bold" style={{ color: model.color }}>✓</span>
              <span className="text-sm text-[var(--muted2)]">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Best for */}
      <div className="mt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Ideal For</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">Is this the right model for you?</h2>
        <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-6">
          <p className="text-sm text-[var(--muted2)] mb-4">
            The <strong className="text-[var(--text)]">{model.title}</strong> model is typically the best fit for organisations that:
          </p>
          <ul className="space-y-3">
            {model.bestFor.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--muted2)]">
                <span className="mt-0.5 shrink-0 font-bold" style={{ color: model.color }}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* How it works */}
      <div className="mt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Process</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">How we get started</h2>
        <div className="mt-8 relative">
          {/* connector line */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-[var(--border)] hidden sm:block" />
          <div className="space-y-5">
            {model.howItWorks.map((step, idx) => (
              <div key={step.step} className="flex items-start gap-5">
                <div
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: model.color }}
                >
                  {idx + 1}
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-5 flex-1">
                  <h3 className="text-sm font-semibold text-[var(--text)]">{step.step}</h3>
                  <p className="mt-1.5 text-sm text-[var(--muted2)]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other models */}
      <div className="mt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Explore More</div>
        <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">Other Engagement Models</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/engagement/${other.slug}`}
              className="group flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-4 transition hover:border-[var(--border2)]"
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                style={{ background: `${other.color}18` }}
              >
                {other.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition leading-tight">
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
        style={{ background: `linear-gradient(135deg, ${model.color}12 0%, var(--bg2) 100%)`, border: `1px solid ${model.color}30` }}
      >
        <h2 className="text-2xl font-semibold text-[var(--text)]">
          Ready to get started with {model.title}?
        </h2>
        <p className="mt-3 text-sm text-[var(--muted2)] max-w-lg mx-auto">
          Our engagement specialists will take you through the next steps — from initial assessment to team formation.
        </p>
        <Link href="/contact" className="btn-accent mt-6 inline-block">
          Start the Conversation →
        </Link>
      </div>
    </V2InnerShell>
  );
}
