import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { privacyMeta, privacySections } from "@/content/privacy";
import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.privacy;

export default function PrivacyPage() {
  return (
    <V2InnerShell>
      <article className="max-w-3xl mx-auto pb-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-4">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-4">
          Privacy notice
        </h1>
        <p className="text-sm text-[var(--muted2)] mb-10">
          Last updated: {privacyMeta.lastUpdated} · Data controller: {privacyMeta.dataController}
        </p>

        <div className="space-y-10">
          {privacySections.map((section) => (
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

        <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-base font-bold text-[var(--text)] mb-2">Data protection contact</h2>
          <p className="text-sm text-[var(--muted2)] mb-3">
            For access, correction, deletion, or other privacy requests:
          </p>
          <a
            href={`mailto:${privacyMeta.dataProtectionContact}`}
            className="text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            {privacyMeta.dataProtectionContact}
          </a>
        </div>

        <p className="mt-8 text-sm text-[var(--muted)]">
          <Link href="/contact" className="text-[var(--accent)] hover:underline">
            ← Back to contact
          </Link>
        </p>
      </article>
    </V2InnerShell>
  );
}
