import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { brand, industries } from "@/content/site";
import { industrySlugToContactLabel } from "@/lib/contactIndustry";
import { INTEREST_OPTIONS, interestSlugToContactLabel } from "@/lib/contactInterest";
import { ContactForm } from "@/components/contact/ContactForm";
import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.contact;

const industrySelectOptions = [...industries.map((i) => i.name), "Other"];

type Props = {
  searchParams: Promise<{ industry?: string; interest?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { industry: industrySlug, interest } = await searchParams;
  const fromSlug = industrySlugToContactLabel(industrySlug);
  const defaultIndustry =
    fromSlug && industrySelectOptions.includes(fromSlug) ? fromSlug : industrySelectOptions[0];

  const defaultInterest = interestSlugToContactLabel(interest);

  return (
    <V2InnerShell>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
            Accelerate quality.
            <br />
            <span className="text-[var(--accent)]">Ship with confidence.</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted2)]">
            Whether you need QE, AI testing, product engineering, or training — one group, one
            conversation.
          </p>
          <ul className="mt-10 space-y-8">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] text-[var(--accent)]">
                ✉
              </span>
              <div>
                <div className="font-semibold text-[var(--text)]">TestYantra</div>
                <a
                  href={`mailto:${brand.emailPrimary}`}
                  className="mt-1 block text-sm text-[var(--muted2)] transition hover:text-[var(--accent)]"
                >
                  {brand.emailPrimary}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] text-[var(--accent)]">
                📞
              </span>
              <div>
                <div className="font-semibold text-[var(--text)]">Sales &amp; enquiries</div>
                <a
                  href={`tel:${brand.phoneIndia.replace(/\s/g, "")}`}
                  className="mt-1 block text-sm font-semibold text-[var(--accent)] transition hover:opacity-90"
                >
                  {brand.phoneIndia}
                </a>
                <p className="mt-1 text-xs text-[var(--muted)]">India HQ · Response within 1 business day</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[var(--teal)] text-[var(--teal)]">
                📍
              </span>
              <div>
                <div className="font-semibold text-[var(--text)]">Global HQ</div>
                <p className="mt-1 text-sm text-[var(--muted2)]">
                  Bangalore, India · Plano, Texas · 6 locations
                </p>
                <Link href="/company/locations" className="mt-1 inline-block text-sm text-[var(--accent)]">
                  View all offices →
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg3)] p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] sm:p-8">
            <h2 className="text-xl font-light tracking-tight text-[var(--muted2)]">Send us a message</h2>
            <p className="mt-2 text-sm text-[var(--muted2)]">
              Our engineering team typically responds within one business day.{" "}
              <Link href="/privacy" className="font-semibold text-[var(--accent)] hover:underline">
                Privacy notice
              </Link>
            </p>
            <ContactForm
              defaultInterest={defaultInterest}
              defaultIndustry={defaultIndustry}
              industryOptions={industrySelectOptions}
              interestOptions={[...INTEREST_OPTIONS]}
            />
          </div>
        </div>
      </div>
    </V2InnerShell>
  );
}
