"use client";

import { useState } from "react";
import type { Pillar } from "@/content/sections";

export function ApproachTabs({ pillars }: { pillars: Pillar[] }) {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg2)] shadow-sm">
      <div role="tablist" className="grid grid-cols-2 border-b border-[var(--border)] sm:grid-cols-4">
        {pillars.map((p, i) => (
          <button
            key={p.label}
            role="tab"
            aria-selected={i === active}
            type="button"
            onClick={() => setActive(i)}
            className={`px-4 py-4 text-sm font-semibold transition sm:py-5 ${
              i === active
                ? "bg-[var(--sec)] text-white"
                : "text-[var(--muted2)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
            }`}
          >
            <span className="mr-2 opacity-60">0{i + 1}</span>
            {p.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="grid gap-8 p-8 sm:p-12 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{current.title}</h3>
          <p className="mt-4 text-base leading-7 text-[var(--muted2)]">{current.body}</p>
        </div>
        <ul className="space-y-3 self-center">
          {current.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-sm font-medium"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--sec)] text-[11px] text-white">
                ✓
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
