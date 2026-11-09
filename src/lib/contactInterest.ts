const INTEREST_OPTIONS = [
  "Quality Engineering & Testing",
  "Application Engineering & AI",
  "Application Engineering — Talent (Build Your Team)",
  "AI Quality Engineering",
  "Training & Academy",
  "General Inquiry",
] as const;

export type ContactInterest = (typeof INTEREST_OPTIONS)[number];

const SLUG_TO_INTEREST: Record<string, ContactInterest> = {
  development: "Application Engineering & AI",
  ai: "Application Engineering & AI",
  qe: "Quality Engineering & Testing",
  talent: "Application Engineering — Talent (Build Your Team)",
  training: "Training & Academy",
  "ai-quality": "AI Quality Engineering",
  "testing-ai": "AI Quality Engineering",
  "ai-in-testing": "AI Quality Engineering",
};

/** Returns the matching interest label, or undefined when the slug is unknown. */
export function interestFromSlug(slug: string | undefined): ContactInterest | undefined {
  if (!slug) return undefined;
  return SLUG_TO_INTEREST[slug];
}

export function interestSlugToContactLabel(slug: string | undefined): ContactInterest {
  return interestFromSlug(slug) ?? INTEREST_OPTIONS[0];
}

export { INTEREST_OPTIONS };
