import { industries } from "@/content/site";

/** Slugs used in nav/footer that are not primary `industries` rows but match contact dropdown labels. */
const EXTRA_SLUG_TO_LABEL: Record<string, string> = {
  healthcare: "Healthcare",
  fintech: "Banking & Finance",
  saas: "Software & Hi-Tech",
};

/** Map ?industry= slug from URLs to a label that exists in the contact form. */
export function industrySlugToContactLabel(slug: string | undefined): string | undefined {
  if (!slug) return undefined;
  if (EXTRA_SLUG_TO_LABEL[slug]) return EXTRA_SLUG_TO_LABEL[slug];
  const row = industries.find((i) => i.slug === slug);
  return row?.name;
}
