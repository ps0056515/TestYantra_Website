import Link from "next/link";

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
              <h6>Quality Engineering</h6>
              <ul>
                <li>
                  <Link href="/services/managed-qa">Managed QA Services</Link>
                </li>
                <li>
                  <Link href="/services">Test Automation</Link>
                </li>
                <li>
                  <Link href="/services/crowd-testing">Crowd Testing</Link>
                </li>
                <li>
                  <Link href="/services">Performance Engineering</Link>
                </li>
                <li>
                  <Link href="/services">Security Testing</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>AI Engineering</h6>
              <ul>
                <li>
                  <Link href="/services">AI Test Generation</Link>
                </li>
                <li>
                  <Link href="/services">ML Defect Analytics</Link>
                </li>
                <li>
                  <Link href="/services">Self-Healing Automation</Link>
                </li>
                <li>
                  <Link href="/services">GenAI Integration</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Development & DevOps</h6>
              <ul>
                <li>
                  <Link href="/services">Application Development</Link>
                </li>
                <li>
                  <Link href="/services">DevOps & CI/CD</Link>
                </li>
                <li>
                  <Link href="/services">Cloud Engineering</Link>
                </li>
                <li>
                  <Link href="/services">Mobile Engineering</Link>
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
                  <Link href="/contact?industry=banking-finance">Banking & Payments</Link>
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
                  <Link href="/contact?industry=media-entertainment">Telecom & Media</Link>
                </li>
                <li>
                  <Link href="/contact?industry=retail-ecommerce">Retail & E-Commerce</Link>
                </li>
                <li>
                  <Link href="/contact?industry=saas">SaaS & Hi-Tech</Link>
                </li>
                <li>
                  <Link href="/contact?industry=travel">Travel</Link>
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
                  <Link href="/outcomes">Blog & Articles</Link>
                </li>
                <li>
                  <Link href="/client-success">Case Studies</Link>
                </li>
                <li>
                  <Link href="/outcomes">Webinars & Events</Link>
                </li>
                <li>
                  <Link href="/academy">QA Training</Link>
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
                  <Link href="/outcomes">AI in Testing 2025</Link>
                </li>
                <li>
                  <Link href="/outcomes">DevOps Benchmarks</Link>
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
                  <Link href="/company/locations">Who We Are</Link>
                </li>
                <li>
                  <Link href="/company/leadership">Leadership</Link>
                </li>
                <li>
                  <Link href="/company/locations">Global Presence</Link>
                </li>
                <li>
                  <Link href="/company/leadership">Awards & Recognition</Link>
                </li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Community</h6>
              <ul>
                <li>
                  <Link href="/contact">Careers</Link>
                </li>
                <li>
                  <Link href="/contact">CSR & Sustainability</Link>
                </li>
                <li>
                  <Link href="/contact">Newsroom</Link>
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
