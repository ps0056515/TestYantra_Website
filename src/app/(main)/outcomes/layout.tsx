import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.outcomes;

export default function OutcomesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
