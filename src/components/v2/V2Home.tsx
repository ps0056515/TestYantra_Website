import Link from "next/link";
import {
  aiLane01,
  aiLane02,
  aiOverview,
  capabilityGroups,
  deliveryModels,
  ecosystemIntro,
  hero,
  heroStats,
  practiceAreas,
  serviceCatalogue,
  teamModels,
} from "@/content/home";
import { businessUnits, caseStudies, industries } from "@/content/site";
import { V2CapabilityTabs } from "./V2CapabilityTabs";

const pillarColors: Record<string, string> = {
  accent: "pb1 pi1 pc1",
  teal: "pb2 pi2 pc2",
  indigo: "pb3 pi3 pc3",
  gold: "pb4 pi4 pc4",
  violet: "pb5 pi5 pc5",
};

export function V2Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-eyebrow">
            <div className="eyebrow-dot" />
            {hero.eyebrow}
          </div>
          <h1>
            {hero.titleLine1}
            <br />
            {hero.titleLine2}{" "}
            <span className="italic-highlight">{hero.titleHighlight}</span>
          </h1>
          <p className="hero-sub">{hero.subtitle}</p>
          <div className="hero-actions">
            <a href={hero.ctaPrimary.href} className="btn-accent">
              {hero.ctaPrimary.label}
            </a>
            <Link href={hero.ctaSecondary.href} className="btn-outline">
              {hero.ctaSecondary.label} →
            </Link>
          </div>
        </div>
        <div className="hero-visual" style={{ position: "relative", zIndex: 1 }}>
          <div className="hv-wrap hv-wrap-lg">
            <div className="hv-ring hvr1" />
            <div className="hv-ring hvr2" />
            <div className="hv-ring hvr3" />
            <div className="hv-center">
              <span style={{ fontWeight: 700, fontSize: 13 }}>TYSS</span>
              <span className="hv-center-label">QUALITY CORE</span>
            </div>
            <div className="hv-node hn1">
              🛡️<span className="hv-node-label">QA</span>
            </div>
            <div className="hv-node hn2">
              🧪<span className="hv-node-label">QE</span>
            </div>
            <div className="hv-node hn3">
              🤖<span className="hv-node-label">AI</span>
            </div>
            <div className="hv-node hn4">
              💻<span className="hv-node-label">Dev</span>
            </div>
            <div className="hv-node hn5">
              🚀<span className="hv-node-label">Ops</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar stats-bar-5">
        {heroStats.map((s, i) => (
          <div key={s.label} className={`stat-cell fi${i ? ` fi-d${Math.min(i, 3)}` : ""}`}>
            <div className="stat-num">
              {s.value}
              {s.suffix ? <sup>{s.suffix}</sup> : null}
            </div>
            <div className="stat-desc">{s.label}</div>
          </div>
        ))}
      </div>

      {/* PRACTICE AREAS */}
      <section className="pillars" id="pillars">
        <span className="section-eyebrow">What We Deliver</span>
        <div className="row-header">
          <h2 className="section-h2">
            Five practice areas.
            <br />
            One embedded partner.
          </h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            From quality assurance to AI-powered testing and development — five disciplines, one
            seamless engineering partner.
          </p>
        </div>
        <div className="pillars-row pillars-row-5">
          {practiceAreas.map((p, i) => {
            const c = pillarColors[p.color] ?? pillarColors.accent;
            const [bar, icon, cta] = c.split(" ");
            const inner = (
              <>
                <div className={`pillar-bar ${bar}`} />
                <div className={`pillar-icon ${icon}`}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className={`pillar-cta ${cta}`}>Explore →</span>
                <div className="pillar-n">0{i + 1}</div>
              </>
            );
            return p.href.startsWith("/") ? (
              <Link key={p.id} href={p.href} className="pillar fi fi-d1 pillar-link">
                {inner}
              </Link>
            ) : (
              <a key={p.id} href={p.href} className="pillar fi fi-d1 pillar-link">
                {inner}
              </a>
            );
          })}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="ecosystem" id="ecosystem">
        <div className="eco-glow" />
        <span className="section-eyebrow">{ecosystemIntro.eyebrow}</span>
        <h2 className="section-h2 fi">
          {ecosystemIntro.title.split("\n").map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
        <p className="section-sub fi">{ecosystemIntro.subtitle}</p>
        <div className="eco-grid">
          {businessUnits.map((unit, i) => (
            <div key={unit.id} className={`eco-card fi fi-d${Math.min(i, 3)}`}>
              <div className="eco-icon" style={{ borderColor: unit.accent }}>
                {unit.icon}
              </div>
              <div className="eco-tag">{unit.tagline}</div>
              <h3>{unit.name}</h3>
              <p>{unit.description}</p>
              {unit.stats ? (
                <div className="eco-stats">
                  {unit.stats.map((s) => (
                    <div key={s.label}>
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}
              <ul className="eco-highlights">
                {unit.highlights?.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {unit.external ? (
                <a
                  href={unit.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eco-cta"
                >
                  Visit {unit.name} ↗
                </a>
              ) : (
                <Link href={unit.href} className="eco-cta">
                  Explore {unit.name} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE CATALOGUE */}
      <section className="services" id="services">
        <span className="section-eyebrow">Service Catalogue</span>
        <div className="row-header">
          <h2 className="section-h2">
            Comprehensive. Specialized.
            <br />
            At every layer of quality.
          </h2>
          <Link href="/services" className="link-arrow">
            All Services →
          </Link>
        </div>
        <div className="catalog-grid">
          {serviceCatalogue.map((name, i) => (
            <div key={name} className={`catalog-pill fi${i % 4 ? ` fi-d${i % 4}` : ""}`}>
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES TABS */}
      <section className="capabilities" id="capabilities">
        <span className="section-eyebrow">Deep Capabilities</span>
        <h2 className="section-h2 fi">Expertise that runs deep</h2>
        <p className="section-sub fi">
          Three capability domains — explore what we deliver across QA, QE, and production
          monitoring.
        </p>
        <V2CapabilityTabs groups={capabilityGroups} />
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="engage" id="engage">
        <span className="section-eyebrow">Engagement Models</span>
        <div className="engage-split">
          <div>
            <h2 className="section-h2">Team models</h2>
            <p className="section-sub">
              Whether you need to scale fast, build a CoE, or extend your bench — we flex to your
              operating model.
            </p>
            <div className="engage-cards">
              {teamModels.map((m, i) => (
                <div key={m.title} className={`engage-card fi fi-d${Math.min(i, 3)}`}>
                  <h4>{m.title}</h4>
                  <p>{m.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-h2">Delivery models</h2>
            <p className="section-sub">
              Six commercial models designed for enterprise agility — from outcome-based engagements
              to full managed operations.
            </p>
            <div className="delivery-list">
              {deliveryModels.map((m, i) => (
                <div key={m.num} className={`delivery-row fi fi-d${Math.min(i, 3)}`}>
                  <span className="delivery-num">{m.num}</span>
                  <div>
                    <h4>{m.title}</h4>
                    <p>{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="ai-spot" id="ai">
        <div className="ai-inner">
          <div className="ai-left">
            <span className="section-eyebrow">{aiOverview.eyebrow}</span>
            <h2 className="section-h2">{aiOverview.title}</h2>
            <p className="section-sub" style={{ marginBottom: 30 }}>
              {aiOverview.subtitle}
            </p>
            
            {/* Animated Interactive Runtime Console Mock */}
            <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 overflow-hidden shadow-lg hidden md:block select-none max-w-lg mt-6">
              <div className="flex items-center gap-1.5 border-b border-[var(--border)] pb-3 mb-4">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                <span className="text-[10px] font-mono text-[var(--muted)] ml-2 uppercase tracking-wider">TestYantra Agentic Runtime v1.0.4</span>
              </div>
              <div className="font-mono text-xs space-y-2.5 text-[var(--muted2)]">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--teal)]">&gt;</span>
                  <span>init_autonomous_verification_agent...</span>
                </div>
                <div className="flex items-center gap-2 pl-4">
                  <span className="text-[var(--indigo)]">●</span>
                  <span>Loading Playwright driver instance...</span>
                </div>
                <div className="flex items-center gap-2 pl-4">
                  <span className="text-[var(--teal)]">✓</span>
                  <span>Self-healing parser attached successfully.</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-[var(--indigo)]/10 p-2 rounded-lg border border-[var(--indigo)]/20 animate-pulse">
                  <span className="text-[var(--indigo)]">&gt;&gt;</span>
                  <span>Running LLM scoring and drift validation loops.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ai-right">
            <div className="ai-lane-cards">
              {aiOverview.lanes.map((lane) => (
                <a key={lane.id} href={lane.href} className="ai-lane-card">
                  <span className="ai-lane-label">{lane.label}</span>
                  <h4>{lane.title}</h4>
                  <p>{lane.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--indigo)] mt-4 group-hover:underline">
                    View Lane details &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-lanes-detail" id={aiLane01.id}>
        <div className="ai-lane-header">
          <span className="section-eyebrow">{aiLane01.eyebrow}</span>
          <h2 className="section-h2">{aiLane01.title}</h2>
          <p className="section-sub">{aiLane01.intro}</p>
        </div>
        <div className="ai-detail-grid">
          {aiLane01.items.map((item, i) => (
            <div key={item.title} className={`ai-detail-card fi fi-d${Math.min(i, 3)}`}>
              <span className="ai-detail-tag">{item.tag}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ai-lanes-detail ai-lanes-alt" id={aiLane02.id}>
        <div className="ai-lane-header">
          <span className="section-eyebrow">{aiLane02.eyebrow}</span>
          <h2 className="section-h2">{aiLane02.title}</h2>
          <p className="section-sub">{aiLane02.intro}</p>
        </div>
        <div className="ai-detail-grid">
          {aiLane02.items.map((item, i) => (
            <div key={item.title} className={`ai-detail-card fi fi-d${Math.min(i, 3)}`}>
              <h4>{item.title}</h4>
              <div className="ai-detail-sub">{item.subtitle}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT SUCCESS */}
      <section className="client-success" id="client-success">
        <span className="section-eyebrow">Client Success</span>
        <div className="row-header">
          <h2 className="section-h2">Outcomes that move the needle</h2>
          <Link href="/client-success" className="link-arrow">
            All Case Studies →
          </Link>
        </div>
        <div className="cs-grid">
          {caseStudies.map((cs, i) => (
            <div key={cs.title} className={`cs-card fi fi-d${Math.min(i, 3)}`}>
              <div className={`cs-thumb cst${(i % 3) + 1}`}>
                {["🏦", "📡", "🏥"][i % 3]}
                <span className={`cs-industry ci${(i % 3) + 1}`}>{cs.industry}</span>
              </div>
              <div className="cs-body">
                <h3>{cs.title}</h3>
                <p>{cs.problem}</p>
                <div className="cs-metric">
                  {cs.results.map((r) => (
                    <div key={r.label} className="cs-m-item">
                      <div
                        className={`cs-m-num ${["m-acc", "m-teal", "m-ind"][cs.results.indexOf(r) % 3]}`}
                      >
                        {r.value}
                      </div>
                      <div className="cs-m-label">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries" id="industries">
        <span className="section-eyebrow">14 Industries</span>
        <h2 className="section-h2 fi">Built for sectors that cannot afford failure</h2>
        <div className="ind-grid ind-grid-dense">
          {industries.map((ind, i) => (
            <Link
              key={ind.slug}
              href={`/contact?industry=${encodeURIComponent(ind.slug)}`}
              className={`ind-card fi fi-d${Math.min(i % 4, 3)}`}
            >
              <span className="ind-icon">{ind.icon}</span>
              <h3>{ind.name}</h3>
              <p>{ind.summary}</p>
            </Link>
          ))}
        </div>
        <div className="ind-more fi">
          <Link href="/industries" className="link-arrow">
            View all industries →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <h2>
          Ready to accelerate quality
          <br />
          and <em>ship with confidence?</em>
        </h2>
        <Link href="/contact" className="btn-white">
          Start a Conversation →
        </Link>
      </div>
    </>
  );
}
