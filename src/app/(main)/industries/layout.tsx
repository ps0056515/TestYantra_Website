import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.industries;

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
