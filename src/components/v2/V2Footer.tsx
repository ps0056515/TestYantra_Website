import Link from "next/link";
import { Container } from "@/components/Container";
import { brand, businessUnits, technoElevate } from "@/content/site";

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
              {brand.tagline} — partnering with global brands to build, test, and deliver software
              they&apos;re proud to ship. Part of the Test Yantra group with TechnoElevate and
              Academy.
            </p>
            <div className="foot-social">
              <a href={brand.linkedIn} className="fsoc" target="_blank" rel="noopener noreferrer">
                in
              </a>
              <a href={technoElevate.social.twitter} className="fsoc" target="_blank" rel="noopener noreferrer">
                𝕏
              </a>
              <a href={technoElevate.social.facebook} className="fsoc" target="_blank" rel="noopener noreferrer">
                fb
              </a>
              <a href={technoElevate.social.linkedIn} className="fsoc" target="_blank" rel="noopener noreferrer">
                te
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h5>Quality Services</h5>
            <ul>
              <li>
                <Link href="/services/managed-qa">Managed QA</Link>
              </li>
              <li>
                <Link href="/#capabilities-qe">Test Automation</Link>
              </li>
              <li>
                <Link href="/services/crowd-testing">Crowd Testing</Link>
              </li>
              <li>
                <Link href="/services/ai-quality">AI Quality Engineering</Link>
              </li>
              <li>
                <Link href="/#capabilities-monitoring">Production Monitoring</Link>
              </li>
              <li>
                <Link href="/services/professional-services">Advisory & BOT</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Group Companies</h5>
            <ul>
              {businessUnits.map((u) => (
                <li key={u.id}>
                  {u.external ? (
                    <a href={u.href} target="_blank" rel="noopener noreferrer">
                      {u.name}
                    </a>
                  ) : (
                    <Link href={u.href}>{u.name}</Link>
                  )}
                </li>
              ))}
              <li>
                <a href={technoElevate.url} target="_blank" rel="noopener noreferrer">
                  technoelevate.com ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Industries</h5>
            <ul>
              <li>
                <Link href="/industries">All 14 Industries</Link>
              </li>
              <li>
                <Link href="/contact?industry=banking-finance">Banking & Finance</Link>
              </li>
              <li>
                <Link href="/contact?industry=healthcare">Healthcare</Link>
              </li>
              <li>
                <Link href="/contact?industry=media-entertainment">Media & Telecom</Link>
              </li>
              <li>
                <Link href="/contact?industry=saas-hitech">SaaS & Hi-Tech</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Connect</h5>
            <ul>
              <li>
                <Link href="/client-success">Case Studies</Link>
              </li>
              <li>
                <Link href="/company/locations">Locations</Link>
              </li>
              <li>
                <Link href="/company/leadership">Leadership</Link>
              </li>
              <li>
                <a href={`mailto:${brand.emailPrimary}`}>{brand.emailPrimary}</a>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© {new Date().getFullYear()} {brand.legalName} All rights reserved.</p>
          <div className="foot-locs">
            <Link href="/company/locations">Bengaluru HQ</Link>
            <Link href="/company/locations">TechnoElevate</Link>
            <Link href="/company/locations">United States</Link>
            <Link href="/company/locations">United Kingdom</Link>
            <Link href="/company/locations">APAC</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
