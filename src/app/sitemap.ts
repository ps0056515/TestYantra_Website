import type { MetadataRoute } from "next";
import { insightPosts } from "@/content/insights";
import { qeSolutionSlugs } from "@/content/sections";
import { absoluteUrl } from "@/lib/seo";

type Entry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] };

const staticPaths: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  // Quality Engineering section
  { path: "/qe", priority: 0.95, changeFrequency: "weekly" },
  { path: "/qe/how-we-work", priority: 0.85, changeFrequency: "monthly" },
  { path: "/qe/platforms", priority: 0.85, changeFrequency: "monthly" },
  { path: "/qe/solutions", priority: 0.9, changeFrequency: "weekly" },
  { path: "/qe/case-studies", priority: 0.85, changeFrequency: "monthly" },
  { path: "/qe/contact", priority: 0.9, changeFrequency: "monthly" },
  // Application Engineering & AI section
  { path: "/ai", priority: 0.95, changeFrequency: "weekly" },
  { path: "/ai/how-we-work", priority: 0.85, changeFrequency: "monthly" },
  { path: "/ai/platforms", priority: 0.85, changeFrequency: "monthly" },
  { path: "/ai/solutions", priority: 0.9, changeFrequency: "weekly" },
  { path: "/ai/case-studies", priority: 0.85, changeFrequency: "monthly" },
  { path: "/ai/contact", priority: 0.9, changeFrequency: "monthly" },
  // Shared
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/managed-qa-india", priority: 0.88, changeFrequency: "monthly" },
  { path: "/test-automation-services", priority: 0.88, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.88, changeFrequency: "weekly" },
  { path: "/industries", priority: 0.85, changeFrequency: "monthly" },
  { path: "/academy", priority: 0.8, changeFrequency: "monthly" },
  { path: "/company/locations", priority: 0.75, changeFrequency: "monthly" },
  { path: "/company/leadership", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticPaths.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const solutionEntries = qeSolutionSlugs.map((slug) => ({
    url: absoluteUrl(`/qe/solutions/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const insightEntries = insightPosts.map((p) => ({
    url: absoluteUrl(`/insights/${p.slug}`),
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...solutionEntries, ...insightEntries];
}
