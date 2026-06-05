import { industries } from "@/content/site";

const EXTRA_SLUG_TO_LABEL: Record<string, string> = {
  healthcare: "Healthcare & Life Sciences",
  fintech: "FinTech",
  saas: "SaaS & Hi-Tech",
  "saas-hitech": "SaaS & Hi-Tech",
};

export function industrySlugToContactLabel(slug: string | undefined): string | undefined {
  if (!slug) return undefined;
  if (EXTRA_SLUG_TO_LABEL[slug]) return EXTRA_SLUG_TO_LABEL[slug];
  const row = industries.find((i) => i.slug === slug);
  return row?.name;
}
