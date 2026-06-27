const INTEREST_OPTIONS = [
  "Quality Engineering & Testing",
  "TechnoElevate — Product Engineering & Staffing",
  "TechnoElevate — Talent Platform (Build Your Team)",
  "AI Quality Engineering",
  "Training & Academy",
  "General Inquiry",
] as const;

export type ContactInterest = (typeof INTEREST_OPTIONS)[number];

const SLUG_TO_INTEREST: Record<string, ContactInterest> = {
  development: "TechnoElevate — Product Engineering & Staffing",
  talent: "TechnoElevate — Talent Platform (Build Your Team)",
  training: "Training & Academy",
  "ai-quality": "AI Quality Engineering",
  "testing-ai": "AI Quality Engineering",
  "ai-in-testing": "AI Quality Engineering",
};

export function interestSlugToContactLabel(slug: string | undefined): ContactInterest {
  if (!slug) return INTEREST_OPTIONS[0];
  return SLUG_TO_INTEREST[slug] ?? "Quality Engineering & Testing";
}

export { INTEREST_OPTIONS };
