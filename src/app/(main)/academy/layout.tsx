import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.academy;

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
