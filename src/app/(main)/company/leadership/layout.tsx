import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.leadership;

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
