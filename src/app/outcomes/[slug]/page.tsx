import Link from "next/link";
import { notFound } from "next/navigation";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { articles } from "@/content/articles";

type Params = Promise<{ slug: string }>;

const CATEGORY_COLORS: Record<string, string> = {
  "AI Engineering": "text-[var(--accent)]",
  DevOps: "text-[var(--teal,rgba(86,220,255,0.85))]",
  "Quality Engineering": "text-[var(--indigo,rgba(129,140,248,1))]",
  "Performance Engineering": "text-[var(--gold,rgba(251,191,36,1))]",
  "Security Testing": "text-[var(--accent)]",
  Industry: "text-[var(--teal,rgba(86,220,255,0.85))]",
};

export default async function ArticlePage(props: { params: Params }) {
  const params = await props.params;
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  const categoryColor = CATEGORY_COLORS[article.category] ?? "text-[var(--accent)]";

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <V2InnerShell>
      <div className="max-w-2xl">
        <div className={`text-xs font-semibold uppercase tracking-wider ${categoryColor}`}>
          {article.category}
        </div>
        <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
          {article.title}
        </h1>
        <div className="mt-4 flex items-center gap-4">
          <span className="text-sm text-[var(--muted)]">{article.date}</span>
          <span className="text-sm text-[var(--muted)]">·</span>
          <span className="text-sm text-[var(--muted)]">{article.readTime}</span>
        </div>
        <p className="mt-5 text-base leading-7 text-[var(--muted2)] sm:text-lg">{article.excerpt}</p>
      </div>

      <div className="mt-10 max-w-2xl space-y-8">
        {article.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-lg font-semibold tracking-tight text-[var(--text)]">
              {section.heading}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted2)] sm:text-base">{section.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              TestYantra
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
              Want to apply these insights to your engineering practice?
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">
              Our quality engineering specialists work with teams across banking, retail, healthcare, and
              technology to turn these principles into measurable outcomes.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:w-auto"
            >
              Talk to a specialist
            </Link>
          </div>
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <div className="mt-12">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">More articles</div>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {relatedArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/outcomes/${a.slug}`}
                className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5 transition hover:border-[var(--accent)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
              >
                <div
                  className={`text-xs font-semibold uppercase tracking-wider ${CATEGORY_COLORS[a.category] ?? "text-[var(--accent)]"}`}
                >
                  {a.category}
                </div>
                <div className="mt-2 flex-1 text-sm font-semibold leading-snug tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition">
                  {a.title}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-[var(--muted)]">{a.date}</span>
                  <span className="text-xs text-[var(--muted)]">{a.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8">
        <Link href="/outcomes" className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]">
          ← All articles
        </Link>
      </div>
    </V2InnerShell>
  );
}
