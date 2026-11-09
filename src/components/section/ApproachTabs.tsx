"use client";

import Image from "next/image";
import { useState } from "react";
import type { Pillar } from "@/content/sections";

const focus = ["30% 35%", "75% 30%", "50% 75%", "25% 80%"];

export function ApproachTabs({
  pillars,
  image,
  imageFilter,
}: {
  pillars: Pillar[];
  image: string;
  imageFilter: string;
}) {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <div className="mt-12">
      <div role="tablist" className="flex flex-wrap gap-2">
        {pillars.map((p, i) => (
          <button
            key={p.label}
            role="tab"
            aria-selected={i === active}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-full border px-6 py-2.5 text-sm font-semibold transition ${
              i === active
                ? "border-transparent bg-[var(--sec)] text-white shadow-lg shadow-[var(--sec)]/30"
                : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
            }`}
          >
            <span className="mr-2 opacity-60">0{i + 1}</span>
            {p.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-8 grid items-stretch gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{current.title}</h3>
          <p className="mt-4 text-base leading-7 text-white/70">{current.body}</p>
          <ul className="mt-7 space-y-3">
            {current.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm font-medium text-white/90">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--sec)] text-[11px] text-white">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] sm:min-h-[360px]">
          <Image
            key={active}
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="scale-150 object-cover transition duration-700"
            style={{ objectPosition: focus[active % focus.length], filter: imageFilter }}
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#060913]/80 via-transparent to-[#060913]/20" />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">0{active + 1} · {current.label}</div>
            <div className="mt-1 text-sm font-semibold text-white">{current.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
