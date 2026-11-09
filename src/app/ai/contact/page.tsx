import { SectionContactPage, sectionMetadata } from "@/components/section/pages";

export const metadata = sectionMetadata("ai", "contact");

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ industry?: string; interest?: string }>;
}) {
  return <SectionContactPage sectionKey="ai" searchParams={searchParams} />;
}
