import { SectionHomePage, sectionMetadata } from "@/components/section/pages";

export const metadata = sectionMetadata("qe", "home");

export default function Page() {
  return <SectionHomePage sectionKey="qe" />;
}
