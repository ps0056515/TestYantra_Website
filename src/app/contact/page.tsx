import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { brand, industries, technoElevate } from "@/content/site";
import { industrySlugToContactLabel } from "@/lib/contactIndustry";

const INTEREST_OPTIONS = [
  "Quality Engineering & Testing",
  "TechnoElevate — Development & Staffing",
  "AI Quality Engineering",
  "Training & Academy",
  "General Inquiry",
] as const;

const industrySelectOptions = [...industries.map((i) => i.name), "Other"];

type Props = {
  searchParams: Promise<{ industry?: string; interest?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { industry: industrySlug, interest } = await searchParams;
  const fromSlug = industrySlugToContactLabel(industrySlug);
  const defaultIndustry =
    fromSlug && industrySelectOptions.includes(fromSlug) ? fromSlug : industrySelectOptions[0];

  const defaultInterest =
    interest === "development"
      ? "TechnoElevate — Development & Staffing"
      : interest === "training"
        ? "Training & Academy"
        : INTEREST_OPTIONS[0];

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
            Whether you need QE, AI testing, software development via TechnoElevate, or training —
            one group, one conversation.
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
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[var(--indigo)] text-[var(--indigo)]">
                💻
              </span>
              <div>
                <div className="font-semibold text-[var(--text)]">TechnoElevate</div>
                <a
                  href={`mailto:${technoElevate.email}`}
                  className="mt-1 block text-sm text-[var(--muted2)] transition hover:text-[var(--indigo)]"
                >
                  {technoElevate.email}
                </a>
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
            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Full Name" name="name" placeholder="John Doe" />
                <FormField label="Email Address" name="email" placeholder="john@company.com" type="email" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">
                  I&apos;m interested in
                </label>
                <div className="relative mt-2">
                  <select
                    key={defaultInterest}
                    name="interest"
                    defaultValue={defaultInterest}
                    className="h-12 w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  >
                    {INTEREST_OPTIONS.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">Industry</label>
                <div className="relative mt-2">
                  <select
                    key={defaultIndustry}
                    name="industry"
                    defaultValue={defaultIndustry}
                    className="h-12 w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  >
                    {industrySelectOptions.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your challenge — QE, development, AI, or training..."
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <button
                type="button"
                className="h-12 w-full rounded-lg bg-[var(--accent)] text-sm font-semibold text-white transition hover:opacity-95"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
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
      <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:ring-2 focus:ring-[var(--accent)]"
      />
    </div>
  );
}
