import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { brand, industries } from "@/content/site";
import { industrySlugToContactLabel } from "@/lib/contactIndustry";
import { ContactForm } from "./ContactForm";

const EXTRA_INDUSTRY_OPTIONS = ["Healthcare", "Software & Hi-Tech", "Other"] as const;
const industrySelectOptions = [...industries.map((i) => i.name), ...EXTRA_INDUSTRY_OPTIONS];

type Props = {
  searchParams: Promise<{ industry?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { industry: industrySlug } = await searchParams;
  const fromSlug = industrySlugToContactLabel(industrySlug);
  const defaultIndustry =
    fromSlug && industrySelectOptions.includes(fromSlug) ? fromSlug : industrySelectOptions[0];

  return (
    <V2InnerShell>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: contact info */}
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Get in Touch</div>
          <h1 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
            Ready to <span className="text-[var(--accent)]">engineer</span><br />the future?
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted2)]">
            Partner with us to redefine what&apos;s possible in software quality and delivery speed.
            We&apos;ll respond within one business day.
          </p>

          <ul className="mt-10 space-y-7">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] text-[var(--accent)]">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6h16v12H4z" /><path d="M4 8l8 5 8-5" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-[var(--text)]">Enquiries</div>
                <a href={`mailto:${brand.emailSolutions}`} className="mt-1 block text-sm text-[var(--muted2)] transition hover:text-[var(--accent)]">
                  {brand.emailSolutions}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] text-[var(--accent)]">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21s-6-4.2-6-10a6 6 0 1112 0c0 5.8-6 10-6 10z" /><circle cx="12" cy="11" r="2.5" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-[var(--text)]">Global HQ</div>
                <p className="mt-1 text-sm text-[var(--muted2)]">Bengaluru, India · San Jose, USA</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] text-[var(--accent)]">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.8 19.8 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-[var(--text)]">Response Time</div>
                <p className="mt-1 text-sm text-[var(--muted2)]">Within 1 business day</p>
              </div>
            </li>
          </ul>

          {/* Quick links */}
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">Quick Actions</p>
            <div className="space-y-2">
              {[
                { label: "Book a Free QA Assessment", href: "#form" },
                { label: "View Engagement Models", href: "/engagement" },
                { label: "See Client Case Studies", href: "/client-success" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-4 py-3 text-sm font-medium text-[var(--muted2)] transition hover:border-[var(--border2)] hover:text-[var(--text)]"
                >
                  {item.label}
                  <span className="text-[var(--accent)]">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7" id="form">
          <ContactForm
            industryOptions={[...industrySelectOptions]}
            defaultIndustry={defaultIndustry}
          />
        </div>
      </div>
    </V2InnerShell>
  );
}
