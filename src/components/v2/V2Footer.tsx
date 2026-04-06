import Link from "next/link";
import { Container } from "@/components/Container";

export function V2Footer() {
  return (
    <footer>
      <Container>
      <div className="footer-grid">
        <div className="foot-brand">
          <Link href="/" className="nav-logo" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <div className="nav-logo-dot" />
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
              <Link href="/services">Quality Engineering</Link>
            </li>
            <li>
              <Link href="/services">AI Engineering</Link>
            </li>
            <li>
              <Link href="/services">Application Development</Link>
            </li>
            <li>
              <Link href="/services">DevOps</Link>
            </li>
            <li>
              <Link href="/services">Test Automation</Link>
            </li>
            <li>
              <Link href="/services/crowd-testing">Crowd Testing</Link>
            </li>
            <li>
              <Link href="/services">Security Testing</Link>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Industries</h5>
          <ul>
            <li>
              <Link href="/industries">Overview</Link>
            </li>
            <li>
              <Link href="/contact?industry=banking-finance">Banking & Finance</Link>
            </li>
            <li>
              <Link href="/contact?industry=healthcare">Healthcare</Link>
            </li>
            <li>
              <Link href="/contact?industry=media-entertainment">Telecom & Media</Link>
            </li>
            <li>
              <Link href="/contact?industry=retail-ecommerce">Retail</Link>
            </li>
            <li>
              <Link href="/contact?industry=saas">SaaS & Hi-Tech</Link>
            </li>
            <li>
              <Link href="/contact?industry=insurance">Insurance</Link>
            </li>
            <li>
              <Link href="/contact?industry=travel">Travel</Link>
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
