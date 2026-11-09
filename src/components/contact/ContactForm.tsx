"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  defaultInterest: string;
  defaultIndustry: string;
  industryOptions: string[];
  interestOptions: string[];
};

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({
  defaultInterest,
  defaultIndustry,
  industryOptions,
  interestOptions,
}: Props) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      interest: String(fd.get("interest") ?? defaultInterest),
      industry: String(fd.get("industry") ?? defaultIndustry),
      message: String(fd.get("message") ?? ""),
      companyWebsite: String(fd.get("companyWebsite") ?? ""),
      marketingOptIn: fd.get("marketingOptIn") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setErrorMessage(data.error ?? "Could not submit. Please email contactus@testyantra.com.");
        setState("error");
        return;
      }

      setState("success");
      form.reset();

      const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      if (typeof window !== "undefined" && gaId && "gtag" in window) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag("event", "generate_lead", {
          event_category: "contact",
          event_label: payload.interest,
        });
      }
    } catch {
      setErrorMessage("Network error. Please email contactus@testyantra.com or call +91 9742490958.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <p className="text-lg font-bold text-[var(--text)]">Thank you — we received your enquiry.</p>
        <p className="mt-2 text-sm text-[var(--muted2)]">
          Our team typically responds within one business day. For urgent requests, call{" "}
          <a href="tel:+919742490958" className="font-semibold text-[var(--accent)]">
            +91 9742490958
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-sm font-semibold text-[var(--accent)] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input id="companyWebsite" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" name="name" placeholder="John Doe" required autoComplete="name" />
        <FormField
          label="Work Email"
          name="email"
          placeholder="john@company.com"
          type="email"
          required
          autoComplete="email"
        />
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
            {interestOptions.map((i) => (
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
            {industryOptions.map((i) => (
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
          required
          minLength={10}
          placeholder="Tell us about your challenge — QA, automation, product engineering, or training..."
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:ring-2 focus:ring-[var(--accent)]"
        />
      </div>

      {state === "error" && errorMessage && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
          {errorMessage}
        </p>
      )}

      <p className="text-xs leading-relaxed text-[var(--muted2)]">
        We use your details only to respond to this enquiry and related follow-up. See our{" "}
        <Link href="/privacy" className="font-semibold text-[var(--accent)] hover:underline">
          privacy notice
        </Link>{" "}
        for how we collect, use, store and share information.
      </p>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-4 py-3">
        <input
          type="checkbox"
          name="marketingOptIn"
          className="mt-0.5 h-4 w-4 rounded border-[var(--border)] accent-[var(--accent)]"
        />
        <span className="text-xs leading-relaxed text-[var(--muted2)]">
          Optional: send me occasional updates about TestYantra services, events, or insights. You can
          unsubscribe at any time.
        </span>
      </label>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="h-12 w-full rounded-lg bg-[var(--accent)] text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "submitting" ? "Sending…" : "Submit Enquiry"}
      </button>

      <p className="text-center text-xs text-[var(--muted)]">
        Prefer direct contact?{" "}
        <a href="mailto:contactus@testyantra.com" className="text-[var(--accent)] hover:underline">
          contactus@testyantra.com
        </a>{" "}
        ·{" "}
        <a href="tel:+919742490958" className="text-[var(--accent)] hover:underline">
          +91 9742490958
        </a>
      </p>
    </form>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:ring-2 focus:ring-[var(--accent)]"
      />
    </div>
  );
}
