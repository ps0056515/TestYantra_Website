"use client";

import { useState } from "react";
import { INTEREST_OPTIONS } from "@/lib/contactInterest";

type ContactFormProps = {
  defaultInterest: string;
  defaultIndustry: string;
  industrySelectOptions: string[];
};

export function ContactForm({
  defaultInterest,
  defaultIndustry,
  industrySelectOptions,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [interest, setInterest] = useState(defaultInterest);
  const [industry, setIndustry] = useState(defaultIndustry);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in your name and email.");
      return;
    }
    
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          interest,
          industry,
          message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Form submission failed.");
      }

      setStatus("success");
    } catch (error: any) {
      console.error("Submission Error:", error);
      alert(error.message || "Failed to submit enquiry. Please try again or email us directly at contactus@testyantra.com.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8 text-center shadow-xl shadow-black/5 animate-slide-up">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-3xl">
          ✓
        </div>
        <h3 className="mt-6 text-xl font-bold text-[var(--text)]">Enquiry Submitted!</h3>
        <p className="mt-2 text-sm text-[var(--muted2)] leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out, <strong className="text-[var(--text)] font-semibold">{name}</strong>. Our engineering team has received your request and will follow up at <strong className="text-[var(--text)] font-semibold">{email}</strong> shortly.
        </p>
        <button
          onClick={() => {
            setName("");
            setEmail("");
            setMessage("");
            setInterest(defaultInterest);
            setIndustry(defaultIndustry);
            setStatus("idle");
          }}
          className="mt-8 inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-2.5 text-xs font-bold text-[var(--text)] hover:bg-[var(--bg3)] transition duration-200"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-xl shadow-black/5 sm:p-8 hover:border-[var(--accent)]/10 transition duration-300">
      <h2 className="text-xl font-bold tracking-tight text-[var(--text)]">
        Send us a message
      </h2>
      <p className="text-xs text-[var(--muted2)] font-medium mt-1">Our engineering team typically responds within 24 hours.</p>
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted2)]">
              Full Name
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === "submitting"}
              className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10 transition duration-300 font-medium disabled:opacity-50"
            />
          </div>
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted2)]">
              Email Address
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="john@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "submitting"}
              className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10 transition duration-300 font-medium disabled:opacity-50"
            />
          </div>
        </div>
        
        <div>
          <label className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted2)]">
            I&apos;m interested in
          </label>
          <div className="relative mt-2">
            <select
              key={interest}
              name="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              disabled={status === "submitting"}
              className="h-12 w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] pl-4 pr-10 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10 transition duration-300 cursor-pointer font-medium disabled:opacity-50"
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
              key={industry}
              name="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              disabled={status === "submitting"}
              className="h-12 w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] pl-4 pr-10 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10 transition duration-300 cursor-pointer font-medium disabled:opacity-50"
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === "submitting"}
            className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10 transition duration-300 font-medium disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="h-12 w-full rounded-xl bg-[var(--accent)] text-sm font-bold text-white shadow-lg shadow-[var(--accent)]/10 hover:bg-[var(--accent)]/90 hover:-translate-y-0.5 transition-all duration-300 transform active:translate-y-0 disabled:opacity-65 disabled:pointer-events-none flex items-center justify-center gap-2"
        >
          {status === "submitting" ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            "Submit Enquiry"
          )}
        </button>
      </form>
    </div>
  );
}
