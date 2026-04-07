import Link from "next/link";

export function V2Nav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="nav-logo-mark" aria-hidden="true">
          <path d="M15 1.5 L26.5 7.5 L26.5 19.5 Q26.5 26 15 29 Q3.5 26 3.5 19.5 L3.5 7.5 Z" fill="var(--accent)" />
          <path d="M10 14.5 L13.5 18.5 L20.5 11" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        TestYantra
      </Link>
      <ul className="nav-center">
        <li>
          <Link href="/services">
            Services <span className="nav-chevron">▾</span>
          </Link>
          <div className="mega-drop">
            <div className="mega-col">
              <h6>Quality Engineering</h6>
              <ul>
                <li>
                  <Link href="/services/managed-qa">Managed QA Services</Link>
                </li>
                <li>
                  <Link href="/services/test-automation">Test Automation Engineering</Link>
                </li>
                <li>
                  <Link href="/services/crowd-testing">Crowd Testing</Link>
                </li>
                <li>
                  <Link href="/services/performance-engineering">Performance Engineering</Link>
                </li>
                <li>
                  <Link href="/services/security-testing">Security Testing</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>AI Engineering</h6>
              <ul>
                <li>
                  <Link href="/services/ai-testing">AI-Powered Testing</Link>
                </li>
                <li>
                  <Link href="/services/ai-testing">Self-Healing Automation</Link>
                </li>
                <li>
                  <Link href="/services/ai-testing">Predictive Defect Analytics</Link>
                </li>
                <li>
                  <Link href="/services/ai-testing">Visual AI & Accessibility</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Development & DevOps</h6>
              <ul>
                <li>
                  <Link href="/services/application-development">Application Development</Link>
                </li>
                <li>
                  <Link href="/services/devops-cicd">DevOps & CI/CD</Link>
                </li>
                <li>
                  <Link href="/services/application-development">Cloud-Native Engineering</Link>
                </li>
                <li>
                  <Link href="/services/training">Training & QA Academy</Link>
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
                  <Link href="/industries/banking-finance">Banking & Finance</Link>
                </li>
                <li>
                  <Link href="/industries/insurance">Insurance</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Other Sectors</h6>
              <ul>
                <li>
                  <Link href="/industries/media-entertainment">Telecom & Media</Link>
                </li>
                <li>
                  <Link href="/industries/retail-ecommerce">Retail & E-Commerce</Link>
                </li>
                <li>
                  <Link href="/industries/travel">Travel</Link>
                </li>
                <li>
                  <Link href="/industries/communications">Communications</Link>
                </li>
                <li>
                  <Link href="/industries/consumer-electronics">Consumer Electronics</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link href="/client-success">Client Success</Link>
        </li>
        <li>
          <Link href="/outcomes">
            Insights <span className="nav-chevron">▾</span>
          </Link>
          <div className="mega-drop" style={{ minWidth: 380 }}>
            <div className="mega-col">
              <h6>Resources</h6>
              <ul>
                <li>
                  <Link href="/outcomes">Insights & Articles</Link>
                </li>
                <li>
                  <Link href="/client-success">Case Studies</Link>
                </li>
                <li>
                  <Link href="/academy">QA Academy</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Research</h6>
              <ul>
                <li>
                  <Link href="/outcomes">QA Maturity Report</Link>
                </li>
                <li>
                  <Link href="/outcomes">AI in Testing 2026</Link>
                </li>
                <li>
                  <Link href="/outcomes">DevOps Quality Benchmarks</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link href="/company/leadership">
            Company <span className="nav-chevron">▾</span>
          </Link>
          <div className="mega-drop" style={{ minWidth: 360 }}>
            <div className="mega-col">
              <h6>About</h6>
              <ul>
                <li>
                  <Link href="/company/leadership">About TestYantra</Link>
                </li>
                <li>
                  <Link href="/company/leadership">Leadership Team</Link>
                </li>
                <li>
                  <Link href="/company/locations">Global Presence</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Connect</h6>
              <ul>
                <li>
                  <Link href="/contact">Careers</Link>
                </li>
                <li>
                  <Link href="/contact">Partner with Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link href="/contact">Partners</Link>
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
