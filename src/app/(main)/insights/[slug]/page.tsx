import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { InsightArticleBody } from "@/components/insights/InsightArticleBody";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { getInsightBySlug, insightPosts } from "@/content/insights";
import { insightPageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return insightPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return {};
  return insightPageMetadata(post.slug, post.title, post.excerpt, post.publishedAt);
}

export default async function InsightArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return notFound();

  return (
    <V2InnerShell>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        publishedAt={post.publishedAt}
      />
      <article className="max-w-3xl mx-auto mb-20">
        <Link
          href="/insights"
          className="inline-flex items-center text-sm font-semibold text-[var(--accent)] mb-8 hover:underline"
        >
          ← All insights
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--muted2)] leading-relaxed mb-4">{post.excerpt}</p>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>{post.readMinutes} min read</span>
          </div>
        </header>

        <InsightArticleBody blocks={post.blocks} />

        <footer className="mt-16 pt-8 border-t border-[var(--border)]">
          {post.relatedServiceSlug && (
            <p className="text-sm text-[var(--muted2)] mb-6">
              Related service:{" "}
              <Link
                href={`/qe/solutions/${post.relatedServiceSlug}`}
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Learn about our {post.relatedServiceSlug.replace(/-/g, " ")} offering →
              </Link>
            </p>
          )}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
            <h2 className="text-xl font-bold text-[var(--text)] mb-2">Talk to a TestYantra specialist</h2>
            <p className="text-sm text-[var(--muted2)] mb-5">
              Get a scoped recommendation for your QA, automation, or AI quality programme.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-6 text-sm font-bold text-white hover:opacity-90 transition-opacity"
            >
              Request a Consultation
            </Link>
          </div>
        </footer>
      </article>
    </V2InnerShell>
  );
}
