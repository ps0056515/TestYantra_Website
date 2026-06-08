import Link from "next/link";
import { Container } from "@/components/Container";
import { brand, businessUnits, technoElevate } from "@/content/site";

export function V2Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-grid">
          <div className="foot-brand">
            <Link href="/" className="nav-logo" style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
              <span className="nav-logo-text">
                <span className="light-text">TES</span>
                <span className="orange-text">TY</span>
                <span className="light-text">ANTRA</span>
              </span>
            </Link>
            <p>
              {brand.tagline} — partnering with global brands to build, test, and deliver software
              they&apos;re proud to ship. Part of the Test Yantra group with <a href="https://technoelevate.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>TechnoElevate</a>, <a href="https://www.fireflink.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>FireFlink</a>, and
              Academy.
            </p>
            <div className="foot-social">
              <a href={brand.linkedIn} className="fsoc" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={technoElevate.social.twitter} className="fsoc" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href={technoElevate.social.facebook} className="fsoc" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href={technoElevate.social.linkedIn} className="fsoc" aria-label="Website" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
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
                <Link href="/services/test-automation">Test Automation</Link>
              </li>
              <li>
                <Link href="/services/crowd-testing">Crowd Testing</Link>
              </li>
              <li>
                <Link href="/services/ai-quality">AI Quality Engineering</Link>
              </li>
              <li>
                <Link href="/services/production-monitoring">Production Monitoring</Link>
              </li>
              <li>
                <Link href="/services/professional-services">Advisory & BOT</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Group Companies</h5>
            <ul>
              {businessUnits.map((u) => {
                const isTE = u.id === "technoelevate";
                return (
                  <li key={u.id}>
                    {u.external || isTE ? (
                      <a href={isTE ? "https://technoelevate.com/" : u.href} target="_blank" rel="noopener noreferrer">
                        {u.name} ↗
                      </a>
                    ) : (
                      <Link href={u.href}>{u.name}</Link>
                    )}
                  </li>
                );
              })}
              
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
            <a href="https://technoelevate.com/" target="_blank" rel="noopener noreferrer">TechnoElevate ↗</a>
            <Link href="/company/locations">United States</Link>
            <Link href="/company/locations">United Kingdom</Link>
            <Link href="/company/locations">APAC</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
