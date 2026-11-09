import { SectionContactPage, sectionMetadata } from "@/components/section/pages";

export const metadata = sectionMetadata("qe", "contact");

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ industry?: string; interest?: string }>;
}) {
  return <SectionContactPage sectionKey="qe" searchParams={searchParams} />;
}
