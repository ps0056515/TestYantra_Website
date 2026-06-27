"use client";

import { useState } from "react";
import Link from "next/link";
import { businessUnits, brand, groupExternalUrls, technoElevate } from "@/content/site";

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
          // Close menu if a link (but not parent) is clicked
          if ((e.target as HTMLElement).tagName === "A") {
            closeMenu();
          }
        }}
      >
        <li>
          <Link href="/services" onClick={(e) => handleParentClick(e, "services")}>
            QA Services <span className={`nav-chevron ${activeSubmenu === "services" ? "expanded" : ""}`}>▾</span>
          </Link>
          <div className={`mega-drop ${activeSubmenu === "services" ? "mobile-show" : ""}`}>
            <div className="mega-col">
              <h6>Quality Assurance</h6>
              <ul>
                <li>
                  <Link href="/services/managed-qa">Managed QA Services</Link>
                </li>
                <li>
                  <Link href="/services/functional-testing">Functional & E2E Testing</Link>
                </li>
                <li>
                  <Link href="/services/crowd-testing">Crowd Testing</Link>
                </li>
                <li>
                  <Link href="/services/accessibility-uat">Accessibility & UAT</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Quality Engineering</h6>
              <ul>
                <li>
                  <Link href="/services/test-automation">Test Automation</Link>
                </li>
                <li>
                  <Link href="/services/api-microservices">API & Microservices</Link>
                </li>
                <li>
                  <Link href="/services/production-monitoring">Production Monitoring</Link>
                </li>
                <li>
                  <Link href="/services/professional-services">Professional Services</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>TestYantra AI</h6>
              <ul>
                <li>
                  <Link href="/services/testing-ai">Testing the AI</Link>
                </li>
                <li>
                  <Link href="/services/ai-in-testing">AI in Testing</Link>
                </li>
                <li>
                  <Link href="/services/ai-quality">AI Quality Engineering</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link href="/development" onClick={(e) => handleParentClick(e, "development")}>
            TechnoElevate <span className={`nav-chevron ${activeSubmenu === "development" ? "expanded" : ""}`}>▾</span>
          </Link>
          <div className={`mega-drop ${activeSubmenu === "development" ? "mobile-show" : ""}`} style={{ minWidth: 340 }}>
            <div className="mega-col">
              <h6>Product Engineering</h6>
              <ul>
                <li>
                  <Link href="/development">Overview</Link>
                </li>
                <li>
                  <Link href="/services/development">Product Engineering Services</Link>
                </li>
                <li>
                  <Link href="/development#talent-platform">Talent Platform</Link>
                </li>
                <li>
                  <Link href="/contact?interest=talent">Build Your Team</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link href="/industries" onClick={(e) => handleParentClick(e, "industries")}>
            Industries <span className={`nav-chevron ${activeSubmenu === "industries" ? "expanded" : ""}`}>▾</span>
          </Link>
          <div className={`mega-drop ${activeSubmenu === "industries" ? "mobile-show" : ""}`} style={{ minWidth: 400 }}>
            <div className="mega-col">
              <h6>Financial Services</h6>
              <ul>
                <li>
                  <Link href="/contact?industry=banking-finance">Banking & Finance</Link>
                </li>
                <li>
                  <Link href="/contact?industry=insurance">Insurance</Link>
                </li>
                <li>
                  <Link href="/contact?industry=fintech">FinTech</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Other Sectors</h6>
              <ul>
                <li>
                  <Link href="/contact?industry=healthcare">Healthcare & Life Sciences</Link>
                </li>
                <li>
                  <Link href="/contact?industry=media-entertainment">Media & Entertainment</Link>
                </li>
                <li>
                  <Link href="/contact?industry=retail-ecommerce">Retail</Link>
                </li>
                <li>
                  <Link href="/contact?industry=saas-hitech">SaaS & Hi-Tech</Link>
                </li>
                <li>
                  <Link href="/industries">All 14 Industries →</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link href="/#engage">Engagement</Link>
        </li>
        <li>
          <Link href="/client-success">Client Success</Link>
        </li>
        <li>
          <Link href="/company/leadership" onClick={(e) => handleParentClick(e, "company")}>
            Company <span className={`nav-chevron ${activeSubmenu === "company" ? "expanded" : ""}`}>▾</span>
          </Link>
          <div className={`mega-drop ${activeSubmenu === "company" ? "mobile-show" : ""}`} style={{ minWidth: 380 }}>
            <div className="mega-col">
              <h6>Group</h6>
              <ul>
                {businessUnits.map((u) => (
                  <li key={u.id}>
                    {u.external ? (
                      <a href={u.href} target="_blank" rel="noopener noreferrer">
                        {u.name} ↗
                      </a>
                    ) : (
                      <Link href={u.href}>{u.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mega-col">
              <h6>About</h6>
              <ul>
                <li>
                  <Link href="/company/locations">Global Presence</Link>
                </li>
                <li>
                  <Link href="/company/leadership">Leadership</Link>
                </li>
                <li>
                  <a href={groupExternalUrls.academy} target="_blank" rel="noopener noreferrer">
                    Academy ↗
                  </a>
                </li>
                <li>
                  <Link href="/contact">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
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

