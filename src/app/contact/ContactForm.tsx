"use client";

import { useTransition, useState, useRef } from "react";
import { submitContact } from "./actions";

type Props = {
  industryOptions: string[];
  defaultIndustry: string;
};

export function ContactForm({ industryOptions, defaultIndustry }: Props) {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("idle");
    setErrorMsg("");

    startTransition(async () => {
      const result = await submitContact(data);
      if (result.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.error);
      }
    });
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg3)] p-8 sm:p-10 text-center shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-xl font-semibold text-[var(--text)] mb-2">Message sent!</h2>
        <p className="text-sm text-[var(--muted2)] max-w-sm mx-auto mb-6">
          Thank you — one of our team will be in touch within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-[var(--accent)] underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg3)] p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] sm:p-8">
      <h2 className="text-xl font-light tracking-tight text-[var(--muted2)]">Send us a message</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="mt-4 space-y-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Full Name" name="name" placeholder="John Doe" required />
          <FormField label="Email Address" name="email" placeholder="john@company.com" type="email" required />
        </div>

        {/* Phone (optional) */}
        <FormField label="Phone Number (optional)" name="phone" placeholder="+91 98765 43210" type="tel" />

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">
            Industry
          </label>
          <div className="relative mt-2">
            <select
              name="industry"
              defaultValue={defaultIndustry}
              className="h-12 w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none ring-0 focus:ring-2 focus:ring-[var(--accent)]"
            >
              {industryOptions.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">▾</span>
          </div>
        </div>

        {/* Service interest */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">
            I&apos;m interested in (optional)
          </label>
          <div className="relative mt-2">
            <select
              name="service"
              className="h-12 w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none ring-0 focus:ring-2 focus:ring-[var(--accent)]"
            >
              <option value="">Select a service area</option>
              <option value="Managed QA Services">Managed QA Services</option>
              <option value="Test Automation">Test Automation Engineering</option>
              <option value="AI-Powered Testing">AI-Powered Testing (TestYantra.AI)</option>
              <option value="Performance Engineering">Performance Engineering</option>
              <option value="Security Testing">Security Testing</option>
              <option value="Crowd Testing">Crowd Testing</option>
              <option value="DevOps & CI/CD">DevOps &amp; CI/CD</option>
              <option value="Application Development">Application Development</option>
              <option value="QA Maturity Assessment">QA Maturity Assessment (Free)</option>
              <option value="Training / QA Academy">Training / QA Academy</option>
              <option value="Other">Other</option>
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">▾</span>
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">
            Message <span className="text-[var(--accent)]">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Tell us about your engineering challenge or what you're looking to achieve..."
            rows={5}
            required
            className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>

        {status === "error" && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={pending}
          className="relative h-12 w-full rounded-lg bg-[var(--accent)] text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg3)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Sending…
            </span>
          ) : (
            "Submit Enquiry →"
          )}
        </button>

        <p className="text-center text-xs text-[var(--muted)]">
          We respond within one business day. Or email us directly at{" "}
          <a href="mailto:solutions@testyantraglobal.com" className="text-[var(--accent)] hover:underline">
            solutions@testyantraglobal.com
          </a>
        </p>
      </form>
    </div>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted2)]">
        {label} {required && <span className="text-[var(--accent)]">*</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:ring-2 focus:ring-[var(--accent)]"
      />
    </div>
  );
}
