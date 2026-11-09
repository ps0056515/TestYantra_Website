"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SectionNavProps = {
  basePath: string;
  name: string;
  otherPath: string;
  otherName: string;
};

const links = [
  { suffix: "", label: "Home" },
  { suffix: "/how-we-work", label: "How We Work" },
  { suffix: "/platforms", label: "Platforms" },
  { suffix: "/solutions", label: "Solutions" },
  { suffix: "/case-studies", label: "Case Studies" },
];

export function SectionNav({ basePath, name, otherPath, otherName }: SectionNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === basePath ? pathname === basePath : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--navbg)] backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="TestYantra home" onClick={() => setOpen(false)}>
          <span className="text-lg font-extrabold tracking-[0.08em] text-[var(--text)]">
            TES<span className="text-[var(--accent)]">TY</span>ANTRA
          </span>
          <span className="hidden h-5 w-px bg-[var(--border2)] sm:block" aria-hidden />
          <span className="hidden text-sm font-semibold text-[var(--sec)] sm:block">{name}</span>
        </Link>

        <div role="navigation" className="ml-6 hidden items-center gap-1 lg:flex" aria-label={`${name} navigation`}>
          {links.map((l) => {
            const href = `${basePath}${l.suffix}`;
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-[var(--sec)]/10 text-[var(--sec)]"
                    : "text-[var(--muted2)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href={otherPath}
            className="hidden rounded-full border border-[var(--border2)] px-4 py-2 text-xs font-semibold text-[var(--muted2)] transition hover:border-[var(--text)] hover:text-[var(--text)] xl:inline-flex"
          >
            Switch to {otherName} →
          </Link>
          <Link
            href={`${basePath}/contact`}
            className="hidden rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition hover:opacity-85 sm:inline-flex"
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
        <div className="border-t border-[var(--border)] bg-[var(--bg)] px-5 pb-6 pt-3 lg:hidden">
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
    </header>
  );
}
