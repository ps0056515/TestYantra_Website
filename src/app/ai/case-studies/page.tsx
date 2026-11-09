import { CaseStudiesPage, sectionMetadata } from "@/components/section/pages";

export const metadata = sectionMetadata("ai", "caseStudies");

export default function Page() {
  return <CaseStudiesPage sectionKey="ai" />;
}
