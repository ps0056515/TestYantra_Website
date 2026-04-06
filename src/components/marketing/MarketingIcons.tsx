import type { ReactNode } from "react";
import type { ShowcaseIndustry } from "@/content/marketing";

export function TabIcon({
  name,
  className,
}: {
  name: "rocket" | "robot" | "bolt" | "brain" | "shield";
  className?: string;
}) {
  const c = className ?? "h-5 w-5";
  switch (name) {
    case "rocket":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" strokeLinejoin="round" />
        </svg>
      );
    case "robot":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="8" width="12" height="10" rx="2" />
          <path d="M9 8V6a3 3 0 016 0v2" />
          <circle cx="10" cy="13" r="1" fill="currentColor" />
          <circle cx="14" cy="13" r="1" fill="currentColor" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case "brain":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5a3 3 0 00-3 3v1a3 3 0 106 0V8a3 3 0 00-3-3z" />
          <path d="M8 11a3 3 0 00-3 3c0 2 2 3 4 3h2c2 0 4-1 4-3a3 3 0 00-3-3" />
        </svg>
      );
    case "shield":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function IndustryGlyph({
  icon,
  className,
}: {
  icon: ShowcaseIndustry["icon"];
  className?: string;
}) {
  const c = className ?? "h-5 w-5 text-white";
  switch (icon) {
    case "bulb":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18h6M10 22h4M12 3a5 5 0 015 5c0 2-1 3-2 4v1H9v-1c-1-1-2-2-2-4a5 5 0 015-5z" />
        </svg>
      );
    case "video":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="6" width="14" height="12" rx="2" />
          <path d="M17 10l4-2v8l-4-2" />
        </svg>
      );
    case "health":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 21s-7-4.5-7-11a4 4 0 017-2 4 4 0 017 2c0 6.5-7 11-7 11z" />
          <path d="M12 11v4M10 13h4" strokeLinecap="round" />
        </svg>
      );
    case "globe":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 000 18M12 3a15 15 0 010 18" />
        </svg>
      );
    case "dna":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 4c2 2 2 4 0 6M17 4c-2 2-2 4 0 6M7 20c2-2 2-4 0-6M17 20c-2-2-2-4 0-6" />
          <path d="M9 8h6M9 16h6" strokeLinecap="round" />
        </svg>
      );
    case "code":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14" strokeLinecap="round" />
        </svg>
      );
    case "cart":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6h15l-2 9H8L6 6z" />
          <circle cx="10" cy="20" r="1" fill="currentColor" />
          <circle cx="18" cy="20" r="1" fill="currentColor" />
        </svg>
      );
  }
}

export function StatIcon({ name }: { name: "blueprint" | "team" | "award" }) {
  const c = "h-10 w-10 text-brand-orange";
  if (name === "blueprint") {
    return (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M8 8h8M8 12h5M8 16h8" strokeLinecap="round" />
        <path d="M17 17l3 3" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "team") {
    return (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="16" cy="9" r="2" />
        <path d="M4 19c0-3 2.5-5 5-5s5 2 5 5M13 14c2.5 0 4.5 1.8 5 4" />
      </svg>
    );
  }
  return (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <circle cx="12" cy="10" r="4" />
      <path d="M6 20c0-3.5 2.5-6 6-6s6 2.5 6 6" />
      <path d="M12 6V4M15 7l1.5-1.5M9 7L7.5 5.5" strokeLinecap="round" />
    </svg>
  );
}

export function WhyIcon({ index }: { index: number }) {
  const c = "h-8 w-8 text-foreground";
  const paths: Record<number, ReactNode> = {
    0: (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M6 20c0-3.5 3-6 6-6s6 2.5 6 6" />
        <circle cx="18" cy="7" r="2" fill="white" stroke="currentColor" />
        <path d="M18 6v2M17 7h2" strokeLinecap="round" />
      </svg>
    ),
    1: (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <circle cx="8" cy="10" r="2" />
        <circle cx="12" cy="9" r="2.2" />
        <circle cx="16" cy="10" r="2" />
        <path d="M4 18c0-2.5 2-4.5 4.5-4.5" />
        <circle cx="18" cy="6" r="1.8" fill="white" stroke="currentColor" />
        <path d="M17 6l2 2" strokeLinecap="round" />
      </svg>
    ),
    2: (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M8 18l-3-3 3-3M16 18l3-3-3-3" strokeLinecap="round" />
        <rect x="9" y="8" width="6" height="10" rx="1" />
      </svg>
    ),
    3: (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M4 6h16v12H4z" />
        <path d="M8 10h8M8 14h5" strokeLinecap="round" />
      </svg>
    ),
    4: (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <rect x="5" y="5" width="8" height="10" rx="1" />
        <rect x="11" y="9" width="8" height="10" rx="1" />
      </svg>
    ),
    5: (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M5 14v3a2 2 0 002 2h10a2 2 0 002-2v-3" />
        <path d="M12 4v10M8 8h8" strokeLinecap="round" />
        <rect x="14" y="16" width="6" height="4" rx="1" />
      </svg>
    ),
  };
  return paths[index] ?? paths[0];
}
