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
          <div className="foot-social">
            <a href="https://www.linkedin.com" className="fsoc" target="_blank" rel="noopener noreferrer">
              in
            </a>
            <a href="https://twitter.com" className="fsoc" target="_blank" rel="noopener noreferrer">
              𝕏
            </a>
            <a href="https://www.facebook.com" className="fsoc" target="_blank" rel="noopener noreferrer">
              fb
            </a>
            <a href="https://www.youtube.com" className="fsoc" target="_blank" rel="noopener noreferrer">
              yt
            </a>
          </div>
        </div>
        <div className="foot-col">
          <h5>Services</h5>
          <ul>
            <li>
              <Link href="/services/managed-qa">Managed QA Services</Link>
            </li>
            <li>
              <Link href="/services/test-automation">Test Automation</Link>
            </li>
            <li>
              <Link href="/services/crowd-testing">Crowd Testing</Link>
            </li>
            <li>
              <Link href="/services/ai-testing">AI-Powered Testing</Link>
            </li>
            <li>
              <Link href="/services/performance-engineering">Performance Engineering</Link>
            </li>
            <li>
              <Link href="/services/security-testing">Security Testing</Link>
            </li>
            <li>
              <Link href="/services/devops-cicd">DevOps & CI/CD</Link>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Industries</h5>
          <ul>
            <li>
              <Link href="/industries">All Industries</Link>
            </li>
            <li>
              <Link href="/industries/banking-finance">Banking & Finance</Link>
            </li>
            <li>
              <Link href="/industries/insurance">Insurance</Link>
            </li>
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
              <Link href="/industries/consumer-electronics">Consumer Electronics</Link>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <ul>
            <li>
              <Link href="/company/locations">About Us</Link>
            </li>
            <li>
              <Link href="/company/leadership">Leadership</Link>
            </li>
            <li>
              <Link href="/contact">Careers</Link>
            </li>
            <li>
              <Link href="/company/locations">Global Presence</Link>
            </li>
            <li>
              <Link href="/company/leadership">Awards</Link>
            </li>
            <li>
              <Link href="/contact">CSR Policy</Link>
            </li>
            <li>
              <Link href="/contact">Annual Report</Link>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Resources</h5>
          <ul>
            <li>
              <Link href="/outcomes">Blog & Articles</Link>
            </li>
            <li>
              <Link href="/client-success">Case Studies</Link>
            </li>
            <li>
              <Link href="/outcomes">Webinars</Link>
            </li>
            <li>
              <Link href="/academy">QA Academy</Link>
            </li>
            <li>
              <Link href="/contact">Newsroom</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/contact">GDPR</Link>
            </li>
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
