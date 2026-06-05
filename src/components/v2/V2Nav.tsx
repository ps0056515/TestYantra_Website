import Link from "next/link";
import { businessUnits, brand, technoElevate } from "@/content/site";

export function V2Nav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <div className="nav-logo-dot" />
        TestYantra
      </Link>
      <ul className="nav-center">
        <li>
          <Link href="/services">
            Services <span className="nav-chevron">▾</span>
          </Link>
          <div className="mega-drop">
            <div className="mega-col">
              <h6>Quality Assurance</h6>
              <ul>
                <li>
                  <Link href="/services/managed-qa">Managed QA Services</Link>
                </li>
                <li>
                  <Link href="/#capabilities-qa">Functional & E2E Testing</Link>
                </li>
                <li>
                  <Link href="/services/crowd-testing">Crowd Testing</Link>
                </li>
                <li>
                  <Link href="/#capabilities-qa">Accessibility & UAT</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Quality Engineering</h6>
              <ul>
                <li>
                  <Link href="/#capabilities-qe">Test Automation</Link>
                </li>
                <li>
                  <Link href="/#capabilities-qe">API & Microservices</Link>
                </li>
                <li>
                  <Link href="/#capabilities-monitoring">Production Monitoring</Link>
                </li>
                <li>
                  <Link href="/services/professional-services">Audit & Advisory</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>TestYantra AI</h6>
              <ul>
                <li>
                  <Link href="/#ai-lane-01">Testing the AI</Link>
                </li>
                <li>
                  <Link href="/#ai-lane-02">AI in Testing</Link>
                </li>
                <li>
                  <Link href="/services/ai-quality">AI Quality Engineering</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link href="/development">
            TechnoElevate <span className="nav-chevron">▾</span>
          </Link>
          <div className="mega-drop" style={{ minWidth: 340 }}>
            <div className="mega-col">
              <h6>Development Unit</h6>
              <ul>
                <li>
                  <Link href="/development">Overview</Link>
                </li>
                <li>
                  <a href={technoElevate.url} target="_blank" rel="noopener noreferrer">
                    technoelevate.com ↗
                  </a>
                </li>
                <li>
                  <Link href="/services/development">Development Services</Link>
                </li>
                <li>
                  <Link href="/contact?interest=development">Staffing & Augmentation</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link href="/industries">
            Industries <span className="nav-chevron">▾</span>
          </Link>
          <div className="mega-drop" style={{ minWidth: 400 }}>
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
                  <Link href="/contact?industry=healthcare">Healthcare</Link>
                </li>
                <li>
                  <Link href="/contact?industry=media-entertainment">Media & Telecom</Link>
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
          <Link href="/company/leadership">
            Company <span className="nav-chevron">▾</span>
          </Link>
          <div className="mega-drop" style={{ minWidth: 380 }}>
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
                  <Link href="/academy">Academy</Link>
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
        <Link href="/contact" className="nav-cta">
          Talk to Us
        </Link>
      </div>
    </nav>
  );
}
