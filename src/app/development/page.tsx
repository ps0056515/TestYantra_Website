import Link from "next/link";
import { technoElevate, businessUnits } from "@/content/site";

export default function DevelopmentPage() {
  const teUnit = businessUnits.find((u) => u.id === "technoelevate");
  const { aiHub } = technoElevate;

  return (
    <>
      {/* HERO — background image */}
      <section
        className="dev-hero dev-hero-bg"
        style={{ backgroundImage: `url(${technoElevate.heroImage})` }}
      >
        <div className="dev-hero-overlay" />
        <div className="dev-hero-glow" />
        <div className="dev-hero-inner">
          <div className="dev-announce fi">
            <span className="dev-announce-dot" />
            {technoElevate.announcement}
          </div>
          <div className="dev-badge">
            <span>💻</span> A Test Yantra Company · Product Engineering Studio
          </div>
          <h1>
            {technoElevate.tagline}
            <br />
            <span className="dev-hero-accent">with AI at the core</span>
          </h1>
          <p>{technoElevate.description}</p>
          <div className="dev-actions">
            <a href="#ai-hub" className="btn-accent" style={{ background: "var(--indigo)" }}>
              Explore AI Hub
            </a>
            <Link href="/contact?interest=development" className="btn-outline">
              Start a project →
            </Link>
            <a
              href={technoElevate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              technoelevate.com ↗
            </a>
          </div>
          {teUnit?.stats ? (
            <div className="dev-hero-stats">
              {teUnit.stats.map((s) => (
                <div key={s.label} className="dev-stat-pill">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
              <div className="dev-stat-pill">
                <strong>7</strong>
                <span>Service lines</span>
              </div>
              <div className="dev-stat-pill">
                <strong>AI</strong>
                <span>Production-ready</span>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* AI HUB — full-bleed background */}
      <section
        id="ai-hub"
        className="dev-ai-banner"
        style={{ backgroundImage: `url(${technoElevate.aiHubImage})` }}
      >
        <div className="dev-ai-overlay" />
        <div className="dev-ai-inner">
          <span className="section-eyebrow" style={{ color: "var(--teal)" }}>
            {aiHub.eyebrow}
          </span>
          <h2 className="section-h2">{aiHub.title}</h2>
          <p className="section-sub" style={{ maxWidth: 640 }}>
            {aiHub.subtitle}
          </p>

          <div className="dev-ai-grid">
            {aiHub.capabilities.map((cap) => (
              <div key={cap.title} className="dev-ai-card fi">
                <span className="dev-ai-icon">{cap.icon}</span>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
                <div className="svc-pills">
                  {cap.pills.map((p) => (
                    <span key={p} className="pill pill-ai">
                      {p}
                    </span>
                  ))}
                </div>
                {"link" in cap && cap.link ? (
                  <Link href={cap.link} className="dev-ai-link">
                    TestYantra AI validation →
                  </Link>
                ) : null}
              </div>
            ))}
          </div>

          <div className="dev-use-cases">
            <h4>Real-world AI we build</h4>
            <div className="dev-use-row">
              {aiHub.useCases.map((uc) => (
                <div key={uc.label} className="dev-use-chip">
                  <strong>{uc.label}</strong>
                  <span>{uc.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="services">
        <span className="section-eyebrow">Core Engineering</span>
        <div className="row-header">
          <h2 className="section-h2">
            Seven service lines.
            <br />
            End-to-end delivery.
          </h2>
          <p className="section-sub" style={{ marginBottom: 0, textAlign: "right" }}>
            From strategy and consulting through app development, cloud, AI integration, and managed
            services — we imagine, engineer, modernize, and manage.
          </p>
        </div>
        <div className="dev-services-grid dev-services-grid-3">
          {technoElevate.services.map((svc) => (
            <div key={svc.title} className="dev-svc fi">
              <span className="dev-svc-icon">{svc.icon}</span>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <div className="svc-pills">
                {svc.pills.map((p) => (
                  <span key={p} className="pill">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES + CLOUD BG */}
      <section
        className="dev-values-section"
        style={{ backgroundImage: `url(${technoElevate.cloudImage})` }}
      >
        <div className="dev-values-overlay" />
        <div className="dev-values-inner">
          <span className="section-eyebrow">Why TechnoElevate</span>
          <h2 className="section-h2">Engineering that works at enterprise scale</h2>
          <div className="dev-values-grid">
            {technoElevate.values.map((v) => (
              <div key={v.title} className="dev-value-card fi">
                <h4>{v.title}</h4>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="engage">
        <div className="engage-split">
          <div>
            <span className="section-eyebrow">Partner with us</span>
            <h2 className="section-h2">Build with quality built in</h2>
            <p className="section-sub">
              TechnoElevate + TestYantra = one partner for development, AI, and validation. No handoffs.
              No gaps.
            </p>
            <ul className="eco-highlights" style={{ marginTop: 28 }}>
              {teUnit?.highlights?.map((h) => (
                <li key={h}>{h}</li>
              ))}
              <li>AI Hub — LLM, RAG, agents, ML, and computer vision</li>
              <li>TestYantra AI validation on every production AI deployment</li>
            </ul>
            <div className="dev-actions" style={{ marginTop: 32 }}>
              <Link href="/services/ai-quality" className="link-arrow">
                TestYantra AI services →
              </Link>
            </div>
          </div>
          <div className="maturity-card">
            <h3>Contact TechnoElevate</h3>
            <p>Bangalore development center · Global delivery via Test Yantra</p>
            <div className="dev-contact-list">
              <a href={`mailto:${technoElevate.email}`}>{technoElevate.email}</a>
              <a href={`mailto:contactus@testyantra.com`}>contactus@testyantra.com</a>
              <a href={`tel:${technoElevate.phone.replace(/\s/g, "")}`}>{technoElevate.phone}</a>
              <p>
                Gopalan CoWorks, #92/9, 3rd Floor
                <br />
                80 feet Road, Kathriguppe, Bangalore 560085
              </p>
            </div>
            <Link
              href="/company/locations"
              className="btn-accent"
              style={{ display: "block", textAlign: "center", marginTop: 28, background: "var(--indigo)" }}
            >
              All Global Locations
            </Link>
          </div>
        </div>
      </section>

      <div className="cta-band" style={{ background: "linear-gradient(135deg, var(--indigo), #2A1F6E)" }}>
        <h2>
          Ship AI-powered software
          <br />
          <em>validated from day one.</em>
        </h2>
        <Link href="/contact?interest=development" className="btn-white">
          Talk to TechnoElevate →
        </Link>
      </div>
    </>
  );
}
