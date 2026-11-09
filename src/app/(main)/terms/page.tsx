import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { termsMeta, termsSections } from "@/content/terms";
import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.terms;

export default function TermsPage() {
  return (
    <V2InnerShell>
      <article className="max-w-3xl mx-auto pb-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-4">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-4">
          Website terms of use
        </h1>
        <p className="text-sm text-[var(--muted2)] mb-10">
          Last updated: {termsMeta.lastUpdated} · Operator: {termsMeta.operator}
        </p>

        <div className="space-y-10">
          {termsSections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-xl font-bold text-[var(--text)] mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-[var(--muted2)]">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm text-[var(--muted)]">
          <Link href="/privacy" className="text-[var(--accent)] hover:underline">
            Privacy notice
          </Link>
          {" · "}
          <Link href="/contact" className="text-[var(--accent)] hover:underline">
            Contact
          </Link>
        </p>
      </article>
    </V2InnerShell>
  );
}
