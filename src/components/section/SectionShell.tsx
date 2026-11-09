import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { brand } from "@/content/site";
import { sections, type SectionKey } from "@/content/sections";
import { sectionTheme } from "@/content/sectionTheme";
import { SectionNav } from "@/components/section/SectionNav";

export function SectionShell({ sectionKey, children }: { sectionKey: SectionKey; children: ReactNode }) {
  const section = sections[sectionKey];
  const other = sections[sectionKey === "qe" ? "ai" : "qe"];
  const theme = sectionTheme[sectionKey];

  const solutionGroups = Array.from(new Set(section.solutions.items.map((i) => i.group))).map((group) => ({
    title: group,
    links: section.solutions.items
      .filter((i) => i.group === group)
      .map((i) => ({ label: i.name, href: i.href ?? `${section.basePath}/solutions#${i.slug}` })),
  }));

  const menus = {
    solutions: { groups: solutionGroups, featured: theme.navFeatured.solutions },
    platforms: {
      groups: [
        {
          title: "Platforms & accelerators",
          links: section.platforms.items.map((p) => ({
            label: p.name,
            href: p.href ?? `${section.basePath}/platforms`,
          })),
        },
        {
          title: "Explore",
          links: [
            { label: "Platforms overview", href: `${section.basePath}/platforms` },
            { label: "How we work", href: `${section.basePath}/how-we-work` },
            { label: "Case studies", href: `${section.basePath}/case-studies` },
          ],
        },
      ],
      featured: theme.navFeatured.platforms,
    },
  };

  return (
    <div
      className="sans-headings flex min-h-dvh flex-col bg-[var(--bg)] text-[var(--text)]"
      style={{ "--sec": section.accent } as CSSProperties}
    >
      <SectionNav
        basePath={section.basePath}
        name={section.name}
        otherPath={other.basePath}
        otherName={other.name}
        announcement={theme.announcement}
        image={theme.image}
        imageFilter={theme.imageFilter}
        menus={menus}
      />
      <main className="w-full min-w-0 pt-[108px]">{children}</main>
      <SectionFooter sectionKey={sectionKey} />
    </div>
  );
}

function SectionFooter({ sectionKey }: { sectionKey: SectionKey }) {
  const section = sections[sectionKey];
  const other = sections[sectionKey === "qe" ? "ai" : "qe"];

  const pageLinks = [
    { href: section.basePath, label: "Home" },
    { href: `${section.basePath}/how-we-work`, label: "How We Work" },
    { href: `${section.basePath}/platforms`, label: "Platforms" },
    { href: `${section.basePath}/solutions`, label: "Solutions" },
    { href: `${section.basePath}/case-studies`, label: "Case Studies" },
    { href: `${section.basePath}/contact`, label: "Contact" },
  ];

  return (
    <div role="contentinfo" className="border-t border-[var(--border)] bg-[var(--bg2)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="text-lg font-extrabold tracking-[0.08em] text-[var(--text)]">
            TES<span className="text-[var(--accent)]">TY</span>ANTRA
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted2)]">{brand.groupStatement}</p>
          <p className="mt-4 text-sm text-[var(--muted2)]">
            <a href={`mailto:${brand.emailPrimary}`} className="hover:text-[var(--sec)]">
              {brand.emailPrimary}
            </a>
            <br />
            {brand.phoneIndia}
          </p>
        </div>

        <FooterColumn title={section.name} className="md:col-span-3">
          {pageLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-[var(--sec)]">
                {l.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="TestYantra group" className="md:col-span-2">
          <li>
            <Link href="/" className="hover:text-[var(--sec)]">
              Gateway
            </Link>
          </li>
          <li>
            <Link href={other.basePath} className="hover:text-[var(--sec)]">
              {other.name}
            </Link>
          </li>
          <li>
            <a href="https://www.fireflink.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--sec)]">
              FireFlink ↗
            </a>
          </li>
          <li>
            <a href="https://www.qspiders.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--sec)]">
              Academy ↗
            </a>
          </li>
        </FooterColumn>

        <FooterColumn title="Company" className="md:col-span-2">
          <li>
            <Link href="/company/leadership" className="hover:text-[var(--sec)]">
              Leadership
            </Link>
          </li>
          <li>
            <Link href="/company/locations" className="hover:text-[var(--sec)]">
              Locations
            </Link>
          </li>
          <li>
            <Link href="/insights" className="hover:text-[var(--sec)]">
              Insights
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-[var(--sec)]">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-[var(--sec)]">
              Terms
            </Link>
          </li>
        </FooterColumn>
      </div>
      <div className="border-t border-[var(--border)] px-5 py-5 text-center text-xs text-[var(--muted)] sm:px-8">
        © {new Date().getFullYear()} {brand.legalName} All rights reserved.
      </div>
    </div>
  );
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <h5 className="text-xs font-bold uppercase tracking-widest text-[var(--text)]">{title}</h5>
      <ul className="mt-4 space-y-2.5 text-sm text-[var(--muted2)]">{children}</ul>
    </div>
  );
}
