import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./testyantra-v2.css";
import { V2ClientEffects } from "@/components/v2/V2ClientEffects";
import { V2Footer } from "@/components/v2/V2Footer";
import { V2Nav } from "@/components/v2/V2Nav";
import { V2ThemeSwitcher } from "@/components/v2/V2ThemeSwitcher";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TestYantra — Engineering Quality at the Speed of Now",
  description:
    "TestYantra partners with global brands to weave quality into every layer of software delivery — from design to deployment, from automation to AI-powered intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="midnight"
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="flex min-h-dvh flex-col">
          <V2ClientEffects />
          <V2ThemeSwitcher />
          <V2Nav />
          {/*
            Do not use flex-1 on main: it stretches main to fill the viewport and leaves a huge
            empty band (same as page bg) between content and the footer.
          */}
          <main className="relative z-0 w-full min-w-0 shrink-0 overflow-visible">
            {children}
          </main>
          <V2Footer />
        </div>
      </body>
    </html>
  );
}
