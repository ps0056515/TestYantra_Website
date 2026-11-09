import { SectionShell } from "@/components/section/SectionShell";

export default function aiLayout({ children }: { children: React.ReactNode }) {
  return <SectionShell sectionKey="ai">{children}</SectionShell>;
}
