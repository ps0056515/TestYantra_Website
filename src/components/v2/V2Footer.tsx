import Link from "next/link";
import { Container } from "@/components/Container";

export function V2Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-grid">
          <div className="foot-brand">
            <Link href="/" className="nav-logo" style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
              <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                <path d="M15 1.5 L26.5 7.5 L26.5 19.5 Q26.5 26 15 29 Q3.5 26 3.5 19.5 L3.5 7.5 Z" fill="#e8401a" />
                <path d="M10 14.5 L13.5 18.5 L20.5 11" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              TestYantra
            </Link>
            <p>
              India&apos;s leading Quality Engineering company — partnering with global brands to build, test and deliver
              software they&apos;re proud to ship.
            </p>
            <p style={{ fontSize: "12.5px", lineHeight: 1.6, color: "var(--muted)", marginTop: 8 }}>
              QSpiders Corporate Office,<br />
              Bengaluru · Mumbai · Hyderabad<br />
              United States · United Kingdom · APAC
            </p>
            <div className="foot-social" style={{ marginTop: 20 }}>
              <a href="https://www.linkedin.com" className="fsoc" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://twitter.com" className="fsoc" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href="https://www.facebook.com" className="fsoc" target="_blank" rel="noopener noreferrer">fb</a>
              <a href="https://www.youtube.com" className="fsoc" target="_blank" rel="noopener noreferrer">yt</a>
            </div>
          </div>

          <div className="foot-col">
            <h5>TestYantra.AI</h5>
            <ul>
              <li><Link href="/ai">AI Overview</Link></li>
              <li><Link href="/ai#ai-products">IntelliTest™</Link></li>
              <li><Link href="/ai#ai-products">HealBot™</Link></li>
              <li><Link href="/ai#ai-products">DefectIQ™</Link></li>
              <li><Link href="/ai#ai-products">VisionAI™</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Capabilities</h5>
            <ul>
              <li><Link href="/capabilities/quality-assurance">Quality Assurance</Link></li>
              <li><Link href="/capabilities/quality-engineering">Quality Engineering</Link></li>
              <li><Link href="/capabilities/intelligent-automation">Intelligent Automation</Link></li>
              <li><Link href="/capabilities/development">Development &amp; DevOps</Link></li>
              <li><Link href="/capabilities">All Capabilities</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Solutions</h5>
            <ul>
              <li><Link href="/industries/banking-finance">Banking &amp; Finance</Link></li>
              <li><Link href="/industries/insurance">Insurance</Link></li>
              <li><Link href="/industries/media-entertainment">Telecom &amp; Media</Link></li>
              <li><Link href="/industries/retail-ecommerce">Retail &amp; E-Commerce</Link></li>
              <li><Link href="/solutions">All Solutions</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Engagement</h5>
            <ul>
              <li><Link href="/engagement/dedicated-team">Dedicated Team</Link></li>
              <li><Link href="/engagement/managed-coe">Managed QA COE</Link></li>
              <li><Link href="/engagement/project-based">Project-Based</Link></li>
              <li><Link href="/engagement/staff-augmentation">Staff Augmentation</Link></li>
              <li><Link href="/engagement/taas">Testing as a Service</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Company &amp; Resources</h5>
            <ul>
              <li><Link href="/company/leadership">About TestYantra</Link></li>
              <li><Link href="/client-success">Client Stories</Link></li>
              <li><Link href="/outcomes">Blog &amp; Articles</Link></li>
              <li><Link href="/academy">QA Academy</Link></li>
              <li><Link href="/contact">Careers</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© {new Date().getFullYear()} TestYantra Software Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="foot-locs">
            <Link href="/company/locations">Bengaluru</Link>
            <Link href="/company/locations">Mumbai</Link>
            <Link href="/company/locations">United States</Link>
            <Link href="/company/locations">United Kingdom</Link>
            <Link href="/company/locations">APAC</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
