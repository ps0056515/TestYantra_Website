import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { brand, industries } from "@/content/site";
import { industrySlugToContactLabel } from "@/lib/contactIndustry";

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
        <div className="lg:col-span-5">
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
            Ready to <span className="text-[var(--accent)]">engineer</span> the future?
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted2)]">
            Partner with us to redefine what&apos;s possible in software quality and delivery speed.
          </p>
          <ul className="mt-10 space-y-8">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] text-[var(--accent)]">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6h16v12H4z" />
                  <path d="M4 8l8 5 8-5" />
                </svg>
              </span>
              <div>
                <div className="font-semibold text-[var(--text)]">Inquiries</div>
                <a
                  href={`mailto:${brand.emailSolutions}`}
                  className="mt-1 block text-sm text-[var(--muted2)] transition hover:text-[var(--accent)]"
                >
                  {brand.emailSolutions}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] text-[var(--accent)]">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21s-6-4.2-6-10a6 6 0 1112 0c0 5.8-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </span>
              <div>
                <div className="font-semibold text-[var(--text)]">Global HQ</div>
                <p className="mt-1 text-sm text-[var(--muted2)]">Bangalore, India | San Jose, USA</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg3)] p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] sm:p-8">
            <h2 className="text-xl font-light tracking-tight text-[var(--muted2)]">Send us a message</h2>
            <form className="mt-4 space-y-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Full Name" name="name" placeholder="John Doe" />
                <FormField label="Email Address" name="email" placeholder="john@company.com" type="email" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">Industry</label>
                <div className="relative mt-2">
                  <select
                    key={defaultIndustry}
                    name="industry"
                    defaultValue={defaultIndustry}
                    className="h-12 w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none ring-0 focus:ring-2 focus:ring-[var(--accent)]"
                  >
                    {industrySelectOptions.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">
                    ▾
                  </span>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your engineering challenge.."
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <p className="text-xs text-[var(--muted)]">
                This form is UI-only for now (no backend). We can wire email or your CRM next.
              </p>
              <button
                type="button"
                className="h-12 w-full rounded-lg bg-[var(--accent)] text-sm font-semibold text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg3)]"
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
