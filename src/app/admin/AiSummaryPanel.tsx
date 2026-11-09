"use client";

import { useState } from "react";

function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/** Renders the restricted markdown the summary uses: ## headings, - bullets, 1. lists, **bold**. */
function Report({ text }: { text: string }) {
  const blocks: React.ReactNode[] = [];
  let bullets: string[] = [];
  let numbered: string[] = [];

  const flush = () => {
    if (bullets.length) {
      blocks.push(
        <ul key={`u${blocks.length}`} className="list-disc space-y-1.5 pl-5">
          {bullets.map((b, i) => (
            <li key={i}><Inline text={b} /></li>
          ))}
        </ul>,
      );
      bullets = [];
    }
    if (numbered.length) {
      blocks.push(
        <ol key={`o${blocks.length}`} className="list-decimal space-y-1.5 pl-5">
          {numbered.map((b, i) => (
            <li key={i}><Inline text={b} /></li>
          ))}
        </ol>,
      );
      numbered = [];
    }
  };

  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (/^#{1,3}\s/.test(line)) {
      flush();
      blocks.push(
        <h3 key={`h${blocks.length}`} className="mt-5 border-b border-slate-100 pb-1 text-sm font-bold uppercase tracking-wide text-indigo-700 first:mt-0">
          {line.replace(/^#{1,3}\s/, "")}
        </h3>,
      );
    } else if (/^[-*]\s/.test(line)) {
      if (numbered.length) flush();
      bullets.push(line.replace(/^[-*]\s/, ""));
    } else if (/^\d+[.)]\s/.test(line)) {
      if (bullets.length) flush();
      numbered.push(line.replace(/^\d+[.)]\s/, ""));
    } else {
      flush();
      blocks.push(<p key={`p${blocks.length}`}><Inline text={line} /></p>);
    }
  }
  flush();

  return <div className="space-y-2.5 text-sm leading-6 text-slate-700">{blocks}</div>;
}

export function AiSummaryPanel({ days }: { days: number }) {
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [result, setResult] = useState<{ text: string; source: "ai" | "basic"; error?: string; at: string } | null>(null);

  async function run() {
    setState("loading");
    try {
      const res = await fetch("/api/admin/summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ days }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const j = (await res.json()) as { text: string; source: "ai" | "basic"; error?: string };
      setResult({ ...j, at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" }) });
      setState("idle");
    } catch {
      setState("error");
    }
  }

  return (
    <div className="rounded-2xl border border-indigo-200 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold">AI summary — what is happening and what to do</h2>
          <p className="text-xs text-slate-500">
            Plain-English report for the last {days} days: how the site did, which companies are looking, new enquiries and next steps.
          </p>
        </div>
        <button
          type="button"
          onClick={run}
          disabled={state === "loading"}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
        >
          {state === "loading" ? "Analysing…" : result ? "Regenerate" : "Generate summary"}
        </button>
      </div>

      <details className="mt-3 text-xs text-slate-500">
        <summary className="cursor-pointer font-semibold text-slate-600">What do these terms mean?</summary>
        <ul className="mt-2 space-y-1 pl-4">
          <li><strong>Page view</strong> — one page opened by a visitor.</li>
          <li><strong>Unique visitor</strong> — one different person or device (counted once, however many pages they open).</li>
          <li><strong>Visit</strong> — one browsing session, from arriving to leaving.</li>
          <li><strong>Enquiry</strong> — someone who filled in the contact form.</li>
          <li><strong>Company looking at us</strong> — a business whose office network visited the site. It is the organisation, not a named person.</li>
        </ul>
      </details>

      {state === "error" ? <p className="mt-3 text-sm text-red-600">Could not generate the summary. Please sign in again.</p> : null}

      {result ? (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <Report text={result.text} />
          <p className="mt-4 text-[11px] text-slate-400">
            Generated {result.at} IST ·{" "}
            {result.source === "ai"
              ? "written by AI from aggregated data (no names, emails or IP addresses are sent)."
              : "automatic summary."}
          </p>
          {result.source === "basic" && result.error ? (
            <p className="mt-1 text-xs text-amber-700">AI was unavailable ({result.error}), so the automatic summary is shown.</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
