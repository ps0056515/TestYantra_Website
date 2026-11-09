"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { FeatureCard } from "@/content/sectionTheme";

export type MegaMenu = {
  groups: { title: string; links: { label: string; href: string; hint?: string }[] }[];
  featured: FeatureCard;
};

type SectionNavProps = {
  basePath: string;
  name: string;
  otherPath: string;
  otherName: string;
  announcement: { tag: string; text: string; cta: string; href: string };
  image: string;
  imageFilter: string;
  menus: { solutions: MegaMenu; platforms: MegaMenu };
};

const links = [
  { suffix: "", label: "Home" },
  { suffix: "/how-we-work", label: "How We Work" },
  { suffix: "/platforms", label: "Platforms", menu: "platforms" as const },
  { suffix: "/solutions", label: "Solutions", menu: "solutions" as const },
  { suffix: "/case-studies", label: "Case Studies" },
];

function FeaturedCard({ card, image, imageFilter }: { card: FeatureCard; image: string; imageFilter: string }) {
  const inner = (
    <>
      <Image
        src={image}
        alt=""
        fill
        sizes="260px"
        className="object-cover transition duration-500 group-hover/card:scale-105"
        style={{ filter: imageFilter }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/70 to-[#060913]/20" />
      <div className="relative mt-auto p-5 text-white">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">{card.eyebrow}</div>
        <div className="mt-1 text-lg font-bold leading-snug">{card.title}</div>
        <p className="mt-1.5 text-xs leading-5 text-white/70">{card.body}</p>
        <div className="mt-3 text-xs font-semibold text-[var(--sec)]">
          {card.cta} {card.external ? "↗" : "→"}
        </div>
      </div>
    </>
  );
  const cls = "group/card relative flex min-h-[230px] overflow-hidden rounded-xl bg-[#060913]";
  return card.external ? (
    <a href={card.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={card.href} className={cls}>
      {inner}
    </Link>
  );
}

export function SectionNav({
  basePath,
  name,
  otherPath,
  otherName,
  announcement,
  image,
  imageFilter,
  menus,
}: SectionNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === basePath ? pathname === basePath : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex h-10 items-center justify-center gap-3 bg-[#060913] px-4 text-xs text-white">
        <span className="shrink-0 rounded-full bg-[var(--sec)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
          {announcement.tag}
        </span>
        <span className="truncate text-white/80">{announcement.text}</span>
        <Link
          href={announcement.href}
          className="hidden shrink-0 rounded-full border border-white/30 px-3 py-1 font-semibold hover:bg-white hover:text-[#060913] md:inline-flex"
        >
          {announcement.cta} →
        </Link>
      </div>

      <div className="border-b border-[var(--border)] bg-[var(--navbg)] backdrop-blur-md">
        <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center gap-4 px-5 sm:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 whitespace-nowrap"
            aria-label="TestYantra home"
            onClick={() => setOpen(false)}
          >
            <span className="text-lg font-extrabold tracking-[0.08em] text-[var(--text)]">
              TES<span className="text-[var(--accent)]">TY</span>ANTRA
            </span>
            <span className="hidden h-5 w-px bg-[var(--border2)] xl:block" aria-hidden />
            <span className="hidden text-sm font-semibold text-[var(--sec)] xl:block">{name}</span>
          </Link>

          <div role="navigation" className="ml-4 hidden items-center gap-1 lg:flex" aria-label={`${name} navigation`}>
            {links.map((l) => {
              const href = `${basePath}${l.suffix}`;
              const active = isActive(href);
              const linkCls = `flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition ${
                active
                  ? "bg-[var(--sec)]/10 text-[var(--sec)]"
                  : "text-[var(--muted2)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
              }`;
              if (!l.menu) {
                return (
                  <Link key={href} href={href} className={linkCls}>
                    {l.label}
                  </Link>
                );
              }
              const menu = menus[l.menu];
              return (
                <div key={href} className="group relative">
                  <Link href={href} className={linkCls}>
                    {l.label}
                    <span aria-hidden className="text-[9px] opacity-60">
                      ▾
                    </span>
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-[min(740px,90vw)] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-[1fr_250px] gap-6 rounded-2xl border border-[var(--border2)] bg-[var(--bg2)] p-6 shadow-2xl">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {menu.groups.map((g) => (
                          <div key={g.title}>
                            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--sec)]">
                              {g.title}
                            </div>
                            <ul className="mt-3 space-y-2">
                              {g.links.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="text-sm font-medium text-[var(--muted2)] hover:text-[var(--text)]"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <FeaturedCard card={menu.featured} image={image} imageFilter={imageFilter} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Link
              href={otherPath}
              className="hidden whitespace-nowrap rounded-full border border-[var(--border2)] px-4 py-2 text-xs font-semibold text-[var(--muted2)] transition hover:border-[var(--text)] hover:text-[var(--text)] 2xl:inline-flex"
            >
              Switch to {otherName} →
            </Link>
            <Link
              href={`${basePath}/contact`}
              className="hidden whitespace-nowrap rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition hover:opacity-85 sm:inline-flex"
            >
              Book a Discovery Call
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border2)] text-[var(--text)] lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <div className="max-h-[70vh] overflow-y-auto border-t border-[var(--border)] bg-[var(--bg)] px-5 pb-6 pt-3 lg:hidden">
            <ul className="space-y-1">
              {links.map((l) => {
                const href = `${basePath}${l.suffix}`;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-3 text-base font-medium ${
                        isActive(href) ? "bg-[var(--sec)]/10 text-[var(--sec)]" : "text-[var(--text)]"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={`${basePath}/contact`}
                onClick={() => setOpen(false)}
                className="rounded-full bg-[var(--text)] px-5 py-3 text-center text-sm font-semibold text-[var(--bg)]"
              >
                Book a Discovery Call
              </Link>
              <Link
                href={otherPath}
                onClick={() => setOpen(false)}
                className="rounded-full border border-[var(--border2)] px-5 py-3 text-center text-sm font-semibold text-[var(--muted2)]"
              >
                Switch to {otherName} →
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
