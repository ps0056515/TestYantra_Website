import { SectionShell } from "@/components/section/SectionShell";

export default function qeLayout({ children }: { children: React.ReactNode }) {
  return <SectionShell sectionKey="qe">{children}</SectionShell>;
}
