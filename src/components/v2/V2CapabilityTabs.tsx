"use client";

import { useEffect, useState } from "react";
import type { CapabilityGroup } from "@/content/home";

function tabIndexFromHash(groups: CapabilityGroup[]): number {
  if (typeof window === "undefined") return 0;
  const hash = window.location.hash.slice(1);
  const idx = groups.findIndex((g) => g.id === hash);
  return idx >= 0 ? idx : 0;
}

export function V2CapabilityTabs({ groups }: { groups: CapabilityGroup[] }) {
  const [active, setActive] = useState(0);
  const group = groups[active];

  useEffect(() => {
    setActive(tabIndexFromHash(groups));
    const onHashChange = () => setActive(tabIndexFromHash(groups));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [groups]);

  return (
    <div className="mt-12 space-y-12">
      <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-full w-fit mx-auto shadow-sm">
        {groups.map((g, i) => {
          const isActive = i === active;
          return (
            <button
              key={g.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "text-white shadow-md"
                  : "text-[var(--muted2)] hover:text-[var(--text)] hover:bg-[var(--bg2)]"
              }`}
              onClick={() => setActive(i)}
            >
              {isActive && (
                <div className="absolute inset-0 bg-[var(--accent)] rounded-full -z-10" />
              )}
              {g.title}
            </button>
          );
        })}
      </div>

      <div
        key={active} // Force re-render for animation on tab switch
        className="animate-in fade-in slide-in-from-bottom-4 duration-500"
        id={group.id}
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-[var(--muted2)] leading-relaxed">
            {group.intro}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {group.items.map((item, i) => (
            <div
              key={item.title}
              className="group relative p-6 md:p-8 rounded-2xl border border-[var(--border2)] bg-[var(--surface)] hover:bg-[var(--bg)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-start gap-4">
                <span className="mt-1.5 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] group-hover:bg-white transition-colors duration-300" />
                </span>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--muted2)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
