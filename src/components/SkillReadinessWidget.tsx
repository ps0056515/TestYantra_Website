"use client";

import { useMemo, useState } from "react";

type Track = {
  title: string;
  description: string;
  nextSteps: string[];
};

type Answers = {
  goal: "job" | "team";
  domain: "testing" | "java" | "mixed";
  timeline: "30" | "90" | "180";
};

const tracks: Record<string, Track> = {
  qspiders: {
    title: "QSpiders — Software Testing Track",
    description:
      "A testing-first path for job aspirants and teams looking to strengthen quality fundamentals and practical execution.",
    nextSteps: ["Start with core testing + test design", "Add automation basics", "Build a project portfolio"],
  },
  jspiders: {
    title: "JSpiders — Java/J2EE Track",
    description:
      "A development-first path focused on Java/J2EE capability, structured learning, and practical outcomes.",
    nextSteps: ["Refresh Java foundations", "Build a web app project", "Practice interviews + problem solving"],
  },
  blended: {
    title: "Blended Track — Dev + QA Collaboration",
    description:
      "A dual-track for teams: shift-left quality with shared workflows across development, testing, and release.",
    nextSteps: ["Define quality gates", "Automate in CI", "Instrument production feedback loops"],
  },
};

export function SkillReadinessWidget() {
  const [answers, setAnswers] = useState<Answers>({
    goal: "job",
    domain: "testing",
    timeline: "90",
  });

  const recommendation = useMemo(() => {
    if (answers.goal === "team") return tracks.blended;
    if (answers.domain === "java") return tracks.jspiders;
    if (answers.domain === "mixed") return tracks.blended;
    return tracks.qspiders;
  }, [answers]);

  return (
    <div className="rounded-2xl border border-card-border bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">
            Skills readiness (mini)
          </div>
          <div className="mt-2 text-lg font-semibold tracking-tight">
            Get a recommended learning track in 30 seconds.
          </div>
          <p className="mt-2 text-sm leading-6 text-muted">
            Inspired by modern L&D platforms: clarity first, then a path you can act on.
          </p>
        </div>
        <div className="hidden rounded-full border border-card-border/60 bg-black/10 px-3 py-1 text-xs text-muted sm:block">
          {answers.timeline} days
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Segment
          label="Goal"
          value={answers.goal}
          options={[
            { id: "job", label: "Get job-ready" },
            { id: "team", label: "Upskill a team" },
          ]}
          onChange={(v) => setAnswers((a) => ({ ...a, goal: v as Answers["goal"] }))}
        />
        <Segment
          label="Focus"
          value={answers.domain}
          options={[
            { id: "testing", label: "Testing" },
            { id: "java", label: "Java/J2EE" },
            { id: "mixed", label: "Mixed" },
          ]}
          onChange={(v) => setAnswers((a) => ({ ...a, domain: v as Answers["domain"] }))}
        />
        <Segment
          label="Timeline"
          value={answers.timeline}
          options={[
            { id: "30", label: "30 days" },
            { id: "90", label: "90 days" },
            { id: "180", label: "180 days" },
          ]}
          onChange={(v) => setAnswers((a) => ({ ...a, timeline: v as Answers["timeline"] }))}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-card-border/60 bg-black/10 p-5">
        <div className="text-sm font-semibold tracking-tight">Recommendation</div>
        <div className="mt-2 text-base font-semibold tracking-tight">{recommendation.title}</div>
        <div className="mt-2 text-sm leading-6 text-muted">{recommendation.description}</div>
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {recommendation.nextSteps.map((s) => (
            <div
              key={s}
              className="rounded-xl border border-card-border/60 bg-black/10 px-3 py-2 text-xs text-muted"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Segment({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { id: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</div>
      <div className="mt-2 grid gap-2">
        {options.map((o) => {
          const active = o.id === value;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => onChange(o.id)}
              className={[
                "w-full rounded-xl border px-3 py-2 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-ring",
                active
                  ? "border-card-border bg-white/10 text-foreground"
                  : "border-card-border/60 bg-black/10 text-muted hover:bg-white/5",
              ].join(" ")}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

