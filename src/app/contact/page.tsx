import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { brand, industries, Innovexce } from "@/content/site";
import { industrySlugToContactLabel } from "@/lib/contactIndustry";
import {
  INTEREST_OPTIONS,
  interestSlugToContactLabel,
} from "@/lib/contactInterest";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";

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
            <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-xl shadow-black/5 sm:p-8 hover:border-[var(--accent)]/10 transition duration-300">
              <h2 className="text-xl font-bold tracking-tight text-[var(--text)]">
                Send us a message
              </h2>
              <p className="text-xs text-[var(--muted2)] font-medium mt-1">Our engineering team typically responds within 24 hours.</p>
              
              <form className="mt-8 space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    name="name"
                    placeholder="John Doe"
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted2)]">
                    I&apos;m interested in
                  </label>
                  <div className="relative mt-2">
                    <select
                      key={defaultInterest}
                      name="interest"
                      defaultValue={defaultInterest}
                      className="h-12 w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] pl-4 pr-10 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10 transition duration-300 cursor-pointer font-medium"
                    >
                      {INTEREST_OPTIONS.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[var(--muted)]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted2)]">
                    Industry
                  </label>
                  <div className="relative mt-2">
                    <select
                      key={defaultIndustry}
                      name="industry"
                      defaultValue={defaultIndustry}
                      className="h-12 w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] pl-4 pr-10 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10 transition duration-300 cursor-pointer font-medium"
                    >
                      {industrySelectOptions.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[var(--muted)]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted2)]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your challenge — QE, development, AI, or training..."
                    rows={4}
                    className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10 transition duration-300 font-medium"
                  />
                </div>
                <button
                  type="button"
                  className="h-12 w-full rounded-xl bg-[var(--accent)] text-sm font-bold text-white shadow-lg shadow-[var(--accent)]/10 hover:bg-[var(--accent)]/90 hover:-translate-y-0.5 transition-all duration-300 transform active:translate-y-0"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </V2InnerShell>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted2)]">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10 transition duration-300 font-medium"
      />
    </div>
  );
}
