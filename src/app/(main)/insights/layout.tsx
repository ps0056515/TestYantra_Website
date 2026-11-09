import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.insights;

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
