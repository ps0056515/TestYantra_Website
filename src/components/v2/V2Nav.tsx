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
        {/* ── TESTYANTRA.AI (featured) ── */}
        <li>
          <Link href="/ai" style={{ color: "var(--indigo)", fontWeight: 600 }}>
            TestYantra.AI <span style={{ fontSize: 9, verticalAlign: "super", opacity: 0.8 }}>✦</span>
          </Link>
        </li>

        {/* ── CAPABILITIES ── */}
        <li>
          <Link href="/capabilities">
            Capabilities <span className="nav-chevron">▾</span>
          </Link>
          <div className="mega-drop" style={{ minWidth: 720, gap: 28 }}>
            <div className="mega-col">
              <h6>Quality Assurance</h6>
              <ul>
                <li><Link href="/capabilities/quality-assurance">QA Overview</Link></li>
                <li><Link href="/services/managed-qa">Managed QA Services</Link></li>
                <li><Link href="/services/crowd-testing">Crowd Testing</Link></li>
                <li><Link href="/services/crowd-testing">Mobile & Digital Testing</Link></li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Quality Engineering</h6>
              <ul>
                <li><Link href="/capabilities/quality-engineering">QE Overview</Link></li>
                <li><Link href="/services/test-automation">Test Automation</Link></li>
                <li><Link href="/services/performance-engineering">Performance Engineering</Link></li>
                <li><Link href="/services/security-testing">Security Testing</Link></li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Intelligent Automation</h6>
              <ul>
                <li><Link href="/capabilities/intelligent-automation">IA Overview</Link></li>
                <li><Link href="/services/ai-testing">AI-Powered Testing</Link></li>
                <li><Link href="/services/self-healing-automation">Self-Healing Automation</Link></li>
                <li><Link href="/services/predictive-defect-analytics">Predictive Analytics</Link></li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Development & DevOps</h6>
              <ul>
                <li><Link href="/capabilities/development">Dev & DevOps Overview</Link></li>
                <li><Link href="/services/application-development">Application Development</Link></li>
                <li><Link href="/services/devops-cicd">DevOps & CI/CD</Link></li>
                <li><Link href="/services/training">Training & QA Academy</Link></li>
              </ul>
            </div>
          </div>
        </li>

        {/* ── SOLUTIONS ── */}
        <li>
          <Link href="/solutions">
            Solutions <span className="nav-chevron">▾</span>
          </Link>
          <div className="mega-drop" style={{ minWidth: 460 }}>
            <div className="mega-col">
              <h6>Financial Services</h6>
              <ul>
                <li><Link href="/industries/banking-finance">Banking & Finance</Link></li>
                <li><Link href="/industries/insurance">Insurance</Link></li>
                <li><Link href="/solutions/fintech">FinTech & Payments</Link></li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Technology & Media</h6>
              <ul>
                <li><Link href="/industries/media-entertainment">Telecom & Media</Link></li>
                <li><Link href="/solutions/saas-hitech">SaaS & Hi-Tech</Link></li>
                <li><Link href="/industries/consumer-electronics">Consumer Electronics</Link></li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Consumer & Enterprise</h6>
              <ul>
                <li><Link href="/industries/retail-ecommerce">Retail & E-Commerce</Link></li>
                <li><Link href="/industries/travel">Travel & Hospitality</Link></li>
                <li><Link href="/solutions/healthcare">Healthcare & Life Sciences</Link></li>
              </ul>
            </div>
          </div>
        </li>

        {/* ── ENGAGEMENT MODELS ── */}
        <li>
          <Link href="/engagement">
            Engagement <span className="nav-chevron">▾</span>
          </Link>
          <div className="mega-drop" style={{ minWidth: 480 }}>
            <div className="mega-col">
              <h6>Team Models</h6>
              <ul>
                <li><Link href="/engagement/dedicated-team">Dedicated QA Team</Link></li>
                <li><Link href="/engagement/staff-augmentation">Staff Augmentation</Link></li>
                <li><Link href="/engagement/managed-coe">Managed QA COE</Link></li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Delivery Models</h6>
              <ul>
                <li><Link href="/engagement/project-based">Project-Based</Link></li>
                <li><Link href="/engagement/taas">Testing as a Service</Link></li>
                <li><Link href="/contact">Custom Engagement</Link></li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Quick Links</h6>
              <ul>
                <li><Link href="/contact">Get a Free Assessment</Link></li>
                <li><Link href="/client-success">See Client Stories</Link></li>
                <li><Link href="/contact">Talk to an Expert</Link></li>
              </ul>
            </div>
          </div>
        </li>

        {/* ── RESOURCES ── */}
        <li>
          <Link href="/resources">
            Resources <span className="nav-chevron">▾</span>
          </Link>
          <div className="mega-drop" style={{ minWidth: 420 }}>
            <div className="mega-col">
              <h6>Knowledge Hub</h6>
              <ul>
                <li><Link href="/outcomes">Blog &amp; Articles</Link></li>
                <li><Link href="/client-success">Case Studies</Link></li>
                <li><Link href="/outcomes">Webinars &amp; Events</Link></li>
                <li><Link href="/academy">QA Academy</Link></li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Research</h6>
              <ul>
                <li><Link href="/outcomes">QA Maturity Report 2025</Link></li>
                <li><Link href="/outcomes">AI in Testing 2026</Link></li>
                <li><Link href="/outcomes">DevOps Quality Benchmarks</Link></li>
              </ul>
            </div>
            <div className="mega-col">
              <h6>Company</h6>
              <ul>
                <li><Link href="/company/leadership">About TestYantra</Link></li>
                <li><Link href="/company/locations">Global Presence</Link></li>
                <li><Link href="/contact">Careers</Link></li>
                <li><Link href="/contact">Newsroom</Link></li>
              </ul>
            </div>
          </div>
        </li>

        {/* ── CLIENT SUCCESS (standalone) ── */}
        <li>
          <Link href="/client-success">Client Stories</Link>
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
