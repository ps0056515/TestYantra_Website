"use client";

import { useMemo, useState } from "react";
import type { OutcomeMetric } from "@/content/site";

type Persona = "ld" | "business" | "learner";

function formatMetric(m: OutcomeMetric, value: number) {
  switch (m.unit) {
    case "weeks":
      return `${value} w`;
    case "percent":
      return `${value}%`;
    case "index":
      return `${value}`;
  }
}

export function OutcomesGraph({ metrics }: { metrics: OutcomeMetric[] }) {
  const [persona, setPersona] = useState<Persona>("ld");

  const curated = useMemo(() => {
    const byPersona: Record<Persona, OutcomeMetric["key"][]> = {
      ld: ["timeToCompetency", "completionRate", "proficiencyLift", "internalMobility"],
      business: ["timeToCompetency", "internalMobility", "managerConfidence"],
      learner: ["timeToCompetency", "proficiencyLift", "managerConfidence"],
    };
    const keys = new Set(byPersona[persona]);
    return metrics.filter((m) => keys.has(m.key));
  }, [metrics, persona]);

  return (
    <div className="rounded-2xl border border-card-border bg-card p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">
            Outcomes graph
          </div>
          <div className="mt-2 text-lg font-semibold tracking-tight">
            Make impact legible—for every stakeholder.
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
            Toggle the lens. The same learning system can tell different stories: L&D efficiency,
            business readiness, and learner momentum.
          </p>
        </div>
        <div className="inline-flex rounded-2xl border border-card-border/60 bg-black/10 p-1">
          <Tab label="L&D" active={persona === "ld"} onClick={() => setPersona("ld")} />
          <Tab
            label="Business"
            active={persona === "business"}
            onClick={() => setPersona("business")}
          />
          <Tab
            label="Learner"
            active={persona === "learner"}
            onClick={() => setPersona("learner")}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {curated.map((m) => {
          const min = Math.min(m.baseline, m.target);
          const max = Math.max(m.baseline, m.target);
          const range = Math.max(1, max - min);
          const baselinePct = ((m.baseline - min) / range) * 100;
          const targetPct = ((m.target - min) / range) * 100;

          return (
            <div key={m.key} className="rounded-2xl border border-card-border/60 bg-black/10 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold tracking-tight">{m.label}</div>
                  <div className="mt-1 text-xs leading-5 text-muted">{m.description}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                    baseline → target
                  </div>
                  <div className="mt-1 text-sm font-semibold tracking-tight">
                    {formatMetric(m, m.baseline)} →{" "}
                    <span className="text-[rgba(120,162,255,0.95)]">
                      {formatMetric(m, m.target)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="relative h-2 w-full rounded-full bg-white/5">
                  <div
                    className="absolute top-0 h-2 rounded-full bg-gradient-to-r from-[rgba(120,162,255,0.85)] via-[rgba(86,220,255,0.55)] to-[rgba(174,120,255,0.75)]"
                    style={{
                      left: `${Math.min(baselinePct, targetPct)}%`,
                      width: `${Math.max(2, Math.abs(targetPct - baselinePct))}%`,
                    }}
                    aria-hidden="true"
                  />
                  <Dot leftPct={baselinePct} label="Baseline" />
                  <Dot leftPct={targetPct} label="Target" highlight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Tab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-xl px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-ring",
        active ? "bg-white/10 text-foreground" : "text-muted hover:bg-white/5",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function Dot({
  leftPct,
  label,
  highlight,
}: {
  leftPct: number;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2"
      style={{ left: `calc(${leftPct}% - 5px)` }}
      aria-hidden="true"
      title={label}
    >
      <div
        className={[
          "h-2.5 w-2.5 rounded-full border",
          highlight
            ? "border-card-border bg-[rgba(120,162,255,0.95)]"
            : "border-card-border/80 bg-white/40",
        ].join(" ")}
      />
    </div>
  );
}

