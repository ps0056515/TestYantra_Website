"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type NavSection = {
  heading: string;
  links: { label: string; href: string }[];
};

const sections: NavSection[] = [
  {
    heading: "Capabilities",
    links: [
      { label: "Quality Assurance", href: "/capabilities/quality-assurance" },
      { label: "Quality Engineering", href: "/capabilities/quality-engineering" },
      { label: "Intelligent Automation", href: "/capabilities/intelligent-automation" },
      { label: "Development & DevOps", href: "/capabilities/development" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Banking & Finance", href: "/industries/banking-finance" },
      { label: "Insurance", href: "/industries/insurance" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Telecom & Media", href: "/industries/media-entertainment" },
      { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
      { label: "Travel & Hospitality", href: "/industries/travel" },
      { label: "SaaS & Hi-Tech", href: "/solutions/saas-hitech" },
    ],
  },
  {
    heading: "Engagement Models",
    links: [
      { label: "Dedicated QA Team", href: "/engagement/dedicated-team" },
      { label: "Managed QA COE", href: "/engagement/managed-coe" },
      { label: "Project-Based", href: "/engagement/project-based" },
      { label: "Staff Augmentation", href: "/engagement/staff-augmentation" },
      { label: "Testing as a Service", href: "/engagement/taas" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog & Articles", href: "/outcomes" },
      { label: "Case Studies", href: "/client-success" },
      { label: "QA Academy", href: "/academy" },
      { label: "Digital Offering", href: "/digital-offering" },
      { label: "Annual Report", href: "/annual-report" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About TestYantra", href: "/company/leadership" },
      { label: "Global Presence", href: "/company/locations" },
      { label: "Careers", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function V2MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => { setOpen(false); setExpanded(null); };

  return (
    <>
      {/* Hamburger button (mobile only, shown via CSS) */}
      <button
        className="mobile-hamburger"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="mobile-backdrop"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div className={`mobile-drawer ${open ? "mobile-drawer-open" : ""}`} aria-hidden={!open}>
        {/* Drawer header */}
        <div className="mobile-drawer-header">
          <Link href="/" className="nav-logo" onClick={close}>
            <svg width="26" height="26" viewBox="0 0 30 30" fill="none" aria-hidden="true">
              <path d="M15 1.5 L26.5 7.5 L26.5 19.5 Q26.5 26 15 29 Q3.5 26 3.5 19.5 L3.5 7.5 Z" fill="#e8401a" />
              <path d="M10 14.5 L13.5 18.5 L20.5 11" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            TestYantra
          </Link>
          <button
            className="mobile-close-btn"
            onClick={close}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        {/* AI featured link */}
        <div className="mobile-drawer-body">
          <Link
            href="/ai"
            className="mobile-ai-link"
            onClick={close}
          >
            <span style={{ fontSize: 18 }}>✦</span>
            <span>TestYantra.AI</span>
            <span className="mobile-ai-badge">New</span>
          </Link>

          {/* Accordion sections */}
          {sections.map((section) => (
            <div key={section.heading} className="mobile-section">
              <button
                className="mobile-section-btn"
                onClick={() =>
                  setExpanded(expanded === section.heading ? null : section.heading)
                }
                aria-expanded={expanded === section.heading}
              >
                <span>{section.heading}</span>
                <span
                  className="mobile-chevron"
                  style={{
                    transform: expanded === section.heading ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▾
                </span>
              </button>
              {expanded === section.heading && (
                <div className="mobile-section-links">
                  {section.links.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className="mobile-link"
                      onClick={close}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/client-success" className="mobile-link mobile-link-standalone" onClick={close}>
            Client Stories
          </Link>
        </div>

        {/* CTA */}
        <div className="mobile-drawer-footer">
          <Link href="/contact" className="btn-accent" style={{ display: "block", textAlign: "center" }} onClick={close}>
            Talk to Us →
          </Link>
        </div>
      </div>
    </>
  );
}
