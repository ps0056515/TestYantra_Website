"use client";

import { useState } from "react";

function Rich({ text }: { text: string }) {
  return (
    <div className="space-y-3 text-sm leading-6 text-slate-800">
      {text.split("\n").filter((l) => l.trim()).map((line, i) => (
        <p key={i}>
          {line.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
            part.startsWith("**") ? <strong key={j}>{part.slice(2, -2)}</strong> : <span key={j}>{part}</span>,
          )}
        </p>
      ))}
    </div>
  );
}

export function AiSummaryPanel({ days }: { days: number }) {
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [result, setResult] = useState<{ text: string; source: "ai" | "basic" } | null>(null);

  async function run() {
    setState("loading");
    try {
      const res = await fetch("/api/admin/summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ days }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setResult(await res.json());
      setState("idle");
    } catch {
      setState("error");
    }
  }

  return (
    <div className="rounded-2xl border border-indigo-200 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold">AI summary</h2>
          <p className="text-xs text-slate-500">Last {days} days: traffic, accounts viewing, and new enquiries.</p>
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
      {state === "error" ? <p className="mt-3 text-sm text-red-600">Could not generate the summary. Please sign in again.</p> : null}
      {result ? (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <Rich text={result.text} />
          <p className="mt-3 text-[11px] text-slate-400">
            {result.source === "ai" ? "Written by AI from aggregated, de-identified data." : "Rule-based summary (no AI key configured)."}
          </p>
        </div>
      ) : null}
    </div>
  );
}
