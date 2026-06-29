import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { brand, industries, Innovexce } from "@/content/site";
import { industrySlugToContactLabel } from "@/lib/contactIndustry";
import { interestSlugToContactLabel } from "@/lib/contactInterest";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";
import { ContactForm } from "@/components/v2/ContactForm";

const industrySelectOptions = [...industries.map((i) => i.name), "Other"];

type Props = {
  searchParams: Promise<{ industry?: string; interest?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { industry: industrySlug, interest } = await searchParams;
  const fromSlug = industrySlugToContactLabel(industrySlug);
  const defaultIndustry =
    fromSlug && industrySelectOptions.includes(fromSlug)
      ? fromSlug
      : industrySelectOptions[0];

  const defaultInterest = interestSlugToContactLabel(interest);

  return (
    <V2InnerShell>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column - Slide in from Left */}
        <div className="lg:col-span-5">
          <ScrollAnimate direction="left" delay={50} animateOnMount={true}>
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
              Accelerate quality.
              <br />
              <span className="text-[var(--accent)]">Ship with confidence.</span>
            </h1>
            <p className="mt-4 text-base leading-7 text-[var(--muted2)]">
              Whether you need QE, AI testing, product engineering via Innovexce,
              or training — one group, one conversation.
            </p>
            <ul className="mt-10 space-y-8">
              <li className="flex gap-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] text-[var(--accent)] bg-[var(--surface)] group-hover:scale-110 transition duration-300">
                  ✉
                </span>
                <div>
                  <div className="font-bold text-[var(--text)]">
                    TestYantra
                  </div>
                  <a
                    href={`mailto:${brand.emailPrimary}`}
                    className="mt-1 block text-sm text-[var(--muted2)] transition hover:text-[var(--accent)] font-medium"
                  >
                    {brand.emailPrimary}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] text-[var(--indigo)] bg-[var(--surface)] group-hover:scale-110 transition duration-300">
                  💻
                </span>
                <div>
                  <div className="font-bold text-[var(--text)]">
                    Innovexce
                  </div>
                  <a
                    href={`mailto:${Innovexce.email}`}
                    className="mt-1 block text-sm text-[var(--muted2)] transition hover:text-[var(--indigo)] font-medium"
                  >
                    {Innovexce.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] text-[var(--teal)] bg-[var(--surface)] group-hover:scale-110 transition duration-300">
                  📍
                </span>
                <div>
                  <div className="font-bold text-[var(--text)]">
                    Global HQ
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted2)] font-medium">
                    Bangalore, India · Plano, Texas · 6 locations
                  </p>
                  <Link
                    href="/company/locations"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-[var(--accent)] hover:underline"
                  >
                    View all offices &rarr;
                  </Link>
                </div>
              </li>
            </ul>
          </ScrollAnimate>
        </div>

        {/* Right Column (Form Card) - Slide in from Right */}
        <div className="lg:col-span-7">
          <ScrollAnimate direction="right" delay={100} animateOnMount={true}>
            <ContactForm
              defaultInterest={defaultInterest}
              defaultIndustry={defaultIndustry}
              industrySelectOptions={industrySelectOptions}
            />
          </ScrollAnimate>
        </div>
      </div>
    </V2InnerShell>
  );
}
