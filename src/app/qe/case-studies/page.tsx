import { CaseStudiesPage, sectionMetadata } from "@/components/section/pages";

export const metadata = sectionMetadata("qe", "caseStudies");

export default function Page() {
  return <CaseStudiesPage sectionKey="qe" />;
}
