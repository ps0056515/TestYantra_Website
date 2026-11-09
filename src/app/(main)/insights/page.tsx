import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";
import { insightPosts } from "@/content/insights";

export default function InsightsPage() {
  return (
    <V2InnerShell>
      <div className="relative overflow-hidden mb-16 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent)]/5 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20">
            Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight mb-6">
            QA & quality engineering guidance
          </h1>
          <p className="text-base md:text-lg text-[var(--muted2)] leading-relaxed">
            Practical frameworks on managed QA, test automation ROI, and AI in testing — written for
            engineering leaders evaluating partners and programmes.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {insightPosts.map((post, i) => (
          <ScrollAnimate key={post.slug} direction="up" delay={i * 60}>
            <article className="group flex h-full flex-col rounded-2xl border border-[var(--border2)] bg-[var(--surface)] p-6 hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-[var(--text)] leading-snug mb-3 group-hover:text-[var(--accent)] transition-colors">
                <Link href={`/insights/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-[var(--muted2)] leading-relaxed flex-1 mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>{post.readMinutes} min read</span>
              </div>
              <Link
                href={`/insights/${post.slug}`}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border2)] bg-[var(--bg2)] px-4 text-sm font-bold text-[var(--text)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all"
              >
                Read article →
              </Link>
            </article>
          </ScrollAnimate>
        ))}
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold text-[var(--text)] mb-3">Ready to discuss your QA programme?</h2>
        <p className="text-[var(--muted2)] mb-6 max-w-xl mx-auto">
          Our specialists help enterprises scope managed QA, automation, and AI quality pilots — typically
          within one business day.
        </p>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--accent)] px-8 text-sm font-bold text-white hover:opacity-90 transition-opacity"
        >
          Request a Consultation
        </Link>
      </div>
    </V2InnerShell>
  );
}
