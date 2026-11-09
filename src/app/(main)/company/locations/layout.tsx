import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.locations;

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
