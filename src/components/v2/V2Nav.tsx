"use client";

import { useState } from "react";
import Link from "next/link";
import { brand, groupExternalUrls } from "@/content/site";

type MenuLink = { href: string; label: string; external?: boolean };
type Feature = { eyebrow: string; title: string; body: string; cta: string; href: string; image: string; filter: string };
type Menu = { id: string; label: string; href: string; minWidth?: number; featured?: Feature; columns: { title: string; links: MenuLink[] }[] };

const menus: Menu[] = [
  {
    id: "qe",
    label: "Quality Engineering",
    href: "/qe",
    minWidth: 800,
    featured: {
      eyebrow: "Featured",
      title: "Testing the AI",
      body: "Validate LLMs and agentic systems for bias, drift, hallucination and prompt injection.",
      cta: "Learn more",
      href: "/qe/solutions/testing-ai",
      image: "/images/qe_hero.png",
      filter: "",
    },
    columns: [
      {
        title: "Quality Engineering",
        links: [
          { href: "/qe", label: "Home" },
          { href: "/qe/how-we-work", label: "How We Work" },
          { href: "/qe/platforms", label: "Platforms" },
          { href: "/qe/solutions", label: "Solutions" },
          { href: "/qe/case-studies", label: "Case Studies" },
        ],
      },
      {
        title: "Popular solutions",
        links: [
          { href: "/qe/solutions/managed-qa", label: "Managed QA Services" },
          { href: "/qe/solutions/test-automation", label: "Test Automation" },
          { href: "/qe/solutions/crowd-testing", label: "Crowd Testing" },
          { href: "/qe/solutions/testing-ai", label: "Testing the AI" },
          { href: "/qe/solutions/ai-in-testing", label: "AI in Testing" },
        ],
      },
    ],
  },
  {
    id: "ai",
    label: "Application Engineering & AI",
    href: "/ai",
    minWidth: 800,
    featured: {
      eyebrow: "Featured",
      title: "Generative AI & RAG",
      body: "Enterprise LLMs and retrieval pipelines with cited, grounded answers.",
      cta: "Explore",
      href: "/ai/solutions#generative-ai-rag",
      image: "/images/ai_hero.png",
      filter: "",
    },
    columns: [
      {
        title: "Application Engineering & AI",
        links: [
          { href: "/ai", label: "Home" },
          { href: "/ai/how-we-work", label: "How We Work" },
          { href: "/ai/platforms", label: "Platforms" },
          { href: "/ai/solutions", label: "Solutions" },
          { href: "/ai/case-studies", label: "Case Studies" },
        ],
      },
      {
        title: "Capabilities",
        links: [
          { href: "/ai/solutions#generative-ai-rag", label: "Generative AI & RAG" },
          { href: "/ai/solutions#agentic-ai-automation", label: "Agentic AI & Automation" },
          { href: "/ai/solutions#ml-data-platforms", label: "ML & Data Platforms" },
          { href: "/ai/contact?interest=talent", label: "Build Your Team" },
        ],
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    href: "/company/leadership",
    minWidth: 380,
    columns: [
      {
        title: "Group",
        links: [
          { href: "https://www.fireflink.com/", label: "FireFlink", external: true },
          { href: groupExternalUrls.academy, label: "Academy", external: true },
        ],
      },
      {
        title: "About",
        links: [
          { href: "/company/locations", label: "Global Presence" },
          { href: "/company/leadership", label: "Leadership" },
          { href: "/insights", label: "Insights" },
          { href: "/industries", label: "Industries" },
        ],
      },
    ],
  },
];

export function V2Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleParentClick = (e: React.MouseEvent, menuName: string) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1100) {
      e.preventDefault();
      e.stopPropagation();
      setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav>
      <Link href="/" className="nav-logo" style={{ gap: 0 }} onClick={closeMenu}>
        <span className="nav-logo-text">
          <span className="light-text">TES</span>
          <span className="orange-text">TY</span>
          <span className="light-text">ANTRA</span>
        </span>
      </Link>

      <ul
        className={`nav-center ${isOpen ? "open" : ""}`}
        onClick={(e) => {
          if ((e.target as HTMLElement).tagName === "A") closeMenu();
        }}
      >
        {menus.map((m) => (
          <li key={m.id}>
            <Link href={m.href} onClick={(e) => handleParentClick(e, m.id)}>
              {m.label} <span className={`nav-chevron ${activeSubmenu === m.id ? "expanded" : ""}`}>▾</span>
            </Link>
            <div
              className={`mega-drop ${activeSubmenu === m.id ? "mobile-show" : ""}`}
              style={m.minWidth ? { minWidth: m.minWidth } : undefined}
            >
              {m.columns.map((col) => (
                <div className="mega-col" key={col.title}>
                  <h6>{col.title}</h6>
                  <ul>
                    {col.links.map((l) => (
                      <li key={l.href}>
                        {l.external ? (
                          <a href={l.href} target="_blank" rel="noopener noreferrer">
                            {l.label} ↗
                          </a>
                        ) : (
                          <Link href={l.href}>{l.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {m.featured ? (
                <div className="mega-col mega-feature-wrap" style={{ width: 230, flexShrink: 0 }}>
                  <Link
                    href={m.featured.href}
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                      gap: 6,
                      height: "auto",
                      minHeight: 210,
                      padding: 18,
                      borderRadius: 12,
                      overflow: "hidden",
                      color: "#fff",
                      backgroundColor: "#060913",
                      backgroundImage: `linear-gradient(to top, #060913 15%, rgba(6,9,19,0.55) 60%, rgba(6,9,19,0.15)), url(${m.featured.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.65 }}>
                      {m.featured.eyebrow}
                    </span>
                    <strong style={{ fontSize: 16, lineHeight: 1.25 }}>{m.featured.title}</strong>
                    <span style={{ fontSize: 12, lineHeight: 1.5, opacity: 0.75 }}>{m.featured.body}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#ffb08a" }}>{m.featured.cta} →</span>
                  </Link>
                </div>
              ) : null}
            </div>
          </li>
        ))}
        <li>
          <a href={`mailto:${brand.emailPrimary}`}>Email us</a>
        </li>
      </ul>

      <div className="nav-right">
        <Link href="/contact" className="nav-cta" onClick={closeMenu}>
          Talk to Us
        </Link>

        <button
          className={`nav-mobile-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}
