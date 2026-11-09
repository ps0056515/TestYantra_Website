"use client";

import { useState } from "react";
import type { Quote } from "@/content/sectionTheme";

export function QuoteCarousel({ quotes }: { quotes: Quote[] }) {
  const [i, setI] = useState(0);
  if (quotes.length === 0) return null;
  const q = quotes[i % quotes.length];

  return (
    <figure className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12">
      <span aria-hidden className="absolute right-8 top-2 text-[120px] font-black leading-none text-[var(--sec)]/20">
        &rdquo;
      </span>
      <blockquote className="relative max-w-4xl text-xl font-medium leading-9 text-white sm:text-2xl sm:leading-10">
        {q.quote}
      </blockquote>
      <figcaption className="relative mt-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="font-bold text-white">{q.name}</div>
          <div className="text-sm text-white/60">
            {q.role}, {q.company}
          </div>
        </div>
        {quotes.length > 1 ? (
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous quote"
              onClick={() => setI((v) => (v - 1 + quotes.length) % quotes.length)}
              className="h-10 w-10 rounded-full border border-white/20 text-white hover:bg-white/10"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next quote"
              onClick={() => setI((v) => (v + 1) % quotes.length)}
              className="h-10 w-10 rounded-full border border-white/20 text-white hover:bg-white/10"
            >
              →
            </button>
          </div>
        ) : null}
      </figcaption>
    </figure>
  );
}
