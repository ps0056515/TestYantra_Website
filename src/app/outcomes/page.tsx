import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { articles } from "@/content/articles";

const CATEGORY_COLORS: Record<string, string> = {
  "AI Engineering": "text-[var(--accent)]",
  DevOps: "text-[var(--teal,rgba(86,220,255,0.85))]",
  "Quality Engineering": "text-[var(--indigo,rgba(129,140,248,1))]",
  "Performance Engineering": "text-[var(--gold,rgba(251,191,36,1))]",
  "Security Testing": "text-[var(--accent)]",
  Industry: "text-[var(--teal,rgba(86,220,255,0.85))]",
};

const reports = [
  {
    title: "QA Maturity Report 2026",
    description:
      "Benchmark your quality engineering capability against 350+ engineering organisations across banking, retail, media, and healthcare.",
    cta: "Request Report",
  },
  {
    title: "AI in Testing 2026",
    description:
      "How 400+ QA leaders are adopting generative AI, self-healing automation, and predictive analytics — with adoption rates, ROI data, and pitfalls to avoid.",
    cta: "Request Report",
  },
  {
    title: "DevOps Quality Benchmarks",
    description:
      "Deployment frequency, change failure rates, and quality gate metrics from high-performing engineering teams using continuous testing pipelines.",
    cta: "Request Report",
  },
];

export default function OutcomesPage() {
  return (
    <V2InnerShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          Insights & Resources
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Think. Learn. Engineer.
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted2)]">
          Perspectives, research, and practical guidance from TestYantra&apos;s quality engineering
          practice — helping engineering leaders make sharper decisions about quality, automation, and
          delivery speed.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">Latest articles</div>
          <Link
            href="/client-success"
            className="text-xs text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            View case studies →
          </Link>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/outcomes/${a.slug}`}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition hover:border-[var(--accent)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.25)]"
            >
              <div
                className={`text-xs font-semibold uppercase tracking-wider ${CATEGORY_COLORS[a.category] ?? "text-[var(--accent)]"}`}
              >
                {a.category}
              </div>
              <div className="mt-2 flex-1 text-base font-semibold leading-snug tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition">
                {a.title}
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted2)]">{a.excerpt}</p>
              <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
                <span className="text-xs text-[var(--muted)]">{a.date}</span>
                <span className="text-xs font-medium text-[var(--accent)] transition group-hover:underline">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="text-sm font-semibold tracking-tight text-[var(--text)]">Research & reports</div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {reports.map((r) => (
            <div
              key={r.title}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6"
            >
              <div className="flex-1">
                <div className="text-base font-semibold tracking-tight text-[var(--text)]">{r.title}</div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">{r.description}</p>
              </div>
              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex h-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 text-xs font-semibold text-[var(--text)] transition hover:bg-[var(--bg3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  {r.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              QA Academy
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
              Looking for structured QA training?
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">
              TestYantra&apos;s Academy offers job-ready training paths through QSpiders and JSpiders —
              backed by ISTQB® accreditation and a track record of 600,000+ certified trainees.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/academy"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:w-auto"
            >
              Explore Academy
            </Link>
          </div>
        </div>
      </div>
    </V2InnerShell>
  );
}
