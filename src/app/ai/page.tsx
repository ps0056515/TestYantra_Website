import { SectionHomePage, sectionMetadata } from "@/components/section/pages";

export const metadata = sectionMetadata("ai", "home");

export default function Page() {
  return <SectionHomePage sectionKey="ai" />;
}
