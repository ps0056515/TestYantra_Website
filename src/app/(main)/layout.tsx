import { V2ClientEffects } from "@/components/v2/V2ClientEffects";
import { V2Footer } from "@/components/v2/V2Footer";
import { V2Nav } from "@/components/v2/V2Nav";
import { V2ThemeSwitcher } from "@/components/v2/V2ThemeSwitcher";

/** Group-level chrome: gateway, company, legal, insights and shared pages. */
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <V2ClientEffects />
      <V2ThemeSwitcher />
      <V2Nav />
      {/*
        Do not use flex-1 on main: it stretches main to fill the viewport and leaves a huge
        empty band (same as page bg) between content and the footer.
      */}
      <main className="relative z-0 w-full min-w-0 shrink-0 overflow-visible">{children}</main>
      <V2Footer />
    </div>
  );
}
