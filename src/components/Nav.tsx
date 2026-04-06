"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";
import { LogoLink } from "@/components/Logo";
import { industries, services } from "@/content/site";

const chevron = (
  <svg className="ml-0.5 inline h-3.5 w-3.5 opacity-70" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const serviceLinks = services.map((s) => ({
    href: `/services/${s.slug}`,
    label: s.name,
  }));

  const industryLinks = industries.map((i) => ({
    href: "/industries",
    label: i.name,
  }));

  const partnerLinks = [
    { href: "/contact", label: "Partner with us" },
    { href: "/contact", label: "Alliance inquiries" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
          <LogoLink />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <Dropdown
              label="Services"
              href="/services"
              items={serviceLinks}
              id="services"
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
            <Dropdown
              label="Industries We Serve"
              href="/industries"
              items={industryLinks}
              id="industries"
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
            <NavLink href="/client-success">Client Success</NavLink>
            <NavLink href="/academy">Ideas</NavLink>
            <Dropdown
              label="Partners"
              href="/contact"
              items={partnerLinks}
              id="partners"
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
            <NavLink href="/company/leadership">About</NavLink>
            <NavLink href="/contact">Careers</NavLink>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-lg border border-neutral-900 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 p-2 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen ? (
          <div id="mobile-nav" className="border-t border-neutral-100 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              <MobileGroup title="Services" links={serviceLinks} onNavigate={() => setMobileOpen(false)} />
              <MobileGroup title="Industries" links={industryLinks} onNavigate={() => setMobileOpen(false)} />
              <MobileLink href="/client-success" onNavigate={() => setMobileOpen(false)}>
                Client Success
              </MobileLink>
              <MobileLink href="/academy" onNavigate={() => setMobileOpen(false)}>
                Ideas
              </MobileLink>
              <MobileGroup title="Partners" links={partnerLinks} onNavigate={() => setMobileOpen(false)} />
              <MobileLink href="/company/leadership" onNavigate={() => setMobileOpen(false)}>
                About
              </MobileLink>
              <MobileLink href="/contact" onNavigate={() => setMobileOpen(false)}>
                Careers
              </MobileLink>
            </div>
            <div className="mt-4 flex flex-col gap-2 border-t border-neutral-100 pt-4">
              <Link
                href="/contact"
                className="rounded-lg border border-neutral-900 py-2.5 text-center text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                className="rounded-lg bg-brand-orange py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full px-3 py-2 text-sm font-medium text-foreground transition hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  href,
  items,
  id,
  openDropdown,
  setOpenDropdown,
}: {
  label: string;
  href: string;
  items: { href: string; label: string }[];
  id: string;
  openDropdown: string | null;
  setOpenDropdown: (v: string | null) => void;
}) {
  const open = openDropdown === id;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenDropdown(id)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <Link
        href={href}
        className="inline-flex items-center rounded-full px-3 py-2 text-sm font-medium text-foreground transition hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
      >
        {label}
        {chevron}
      </Link>
      {open ? (
        <div
          className="absolute left-0 top-full z-50 min-w-[220px] pt-1"
          role="menu"
          aria-label={label}
        >
          <div className="rounded-xl border border-neutral-200 bg-white py-2 shadow-lg">
            {items.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-foreground transition hover:bg-neutral-50 hover:text-brand-orange"
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-neutral-50"
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: { href: string; label: string }[];
  onNavigate: () => void;
}) {
  return (
    <details className="group rounded-lg border border-neutral-100">
      <summary className="cursor-pointer list-none px-3 py-2.5 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between">
          {title}
          {chevron}
        </span>
      </summary>
      <div className="flex flex-col border-t border-neutral-100 px-2 py-1">
        {links.map((l) => (
          <Link
            key={l.href + l.label}
            href={l.href}
            className="rounded-md px-3 py-2 text-sm text-muted hover:bg-neutral-50 hover:text-foreground"
            onClick={onNavigate}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
