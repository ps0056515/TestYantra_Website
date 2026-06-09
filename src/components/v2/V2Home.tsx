import Link from "next/link";
import type { CSSProperties } from "react";
import {
  aiLane01,
  aiLane02,
  aiOverview,
  capabilityGroups,
  ctaBand,
  deliveryModels,
  ecosystemIntro,
  hero,
  heroOfferLine,
  heroStats,
  practiceAreas,
  serviceCatalogue,
  serviceCatalogueIntro,
  teamModels,
} from "@/content/home";
import { businessUnits, caseStudies, clientTrustStrip, industries, trustedClients } from "@/content/site";
import { V2CapabilityTabs } from "./V2CapabilityTabs";
import { AnimatedCounter } from "./AnimatedCounter";
import { ScrollAnimate } from "./ScrollAnimate";

const pillarColors: Record<string, string> = {
  accent: "pb1 pi1 pc1",
  teal: "pb2 pi2 pc2",
  indigo: "pb3 pi3 pc3",
  gold: "pb4 pi4 pc4",
  violet: "pb5 pi5 pc5",
};

type CatalogueLaneProps = {
  lane: (typeof serviceCatalogue)[keyof typeof serviceCatalogue];
  accentVar: "--accent" | "--indigo";
  delayOffset?: number;
};

function CatalogueLane({ lane, accentVar, delayOffset = 0 }: CatalogueLaneProps) {
  const accentClass = accentVar === "--indigo" ? "catalogue-pill-indigo" : "catalogue-pill-accent";
  return (
    <div className="catalogue-lane">
      <div className="catalogue-lane-header">
        <h3 className={`catalogue-lane-title ${accentClass}-title`}>{lane.label}</h3>
        <p className="catalogue-lane-sub">{lane.subtitle}</p>
      </div>
      <div className="catalogue-pills">
        {lane.items.map((item, i) => (
          <ScrollAnimate key={item.label} direction="up" delay={delayOffset + i * 30}>
            <Link href={item.href}>
              <div className={`catalogue-pill group ${accentClass}`}>
                <div className="catalogue-pill-shine" />
                <span className="catalogue-pill-dot" />
                <span className="catalogue-pill-label">{item.label}</span>
              </div>
            </Link>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  );
}

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
              <span style={{ fontWeight: 700, fontSize: 13 }}>GROUP</span>
              <span className="hv-center-label">DELIVERY HUB</span>
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
              <AnimatedCounter value={s.value} />
              {s.suffix ? <sup>{s.suffix}</sup> : null}
            </div>
            <div className="stat-desc">{s.label}</div>
          </div>
        ))}
      </div>

      {/* LIFECYCLE OFFER LINE */}
      <div className="hero-offer">
        <p className="hero-offer-text">
          <span className="hero-offer-label">{heroOfferLine.label}</span>
          {heroOfferLine.pillars.map((pillar, i) => (
            <span key={pillar}>
              {i > 0 ? <span className="hero-offer-sep"> · </span> : null}
              {pillar}
            </span>
          ))}
        </p>
      </div>

      {/* TRUSTED BY */}
      <div className="clients-strip">
        <div className="clients-strip-headline">{clientTrustStrip.headline}</div>
        <p className="clients-strip-sub">{clientTrustStrip.subline}</p>
        <div className="logo-wall">
          {trustedClients.map((client) => (
            <div
              key={client.name}
              className="logo-cell"
              title={client.name}
              style={{ "--client-color": client.color } as CSSProperties}
            >
              {client.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={client.logo} alt={client.name} className="logo-img" />
              ) : (
                <>
                  <span className="logo-mark" aria-hidden="true">
                    {client.initial}
                  </span>
                  <span className="logo-name">{client.name}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PRACTICE AREAS */}
      <section className="pillars" id="pillars">
        <ScrollAnimate direction="up">
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
        </ScrollAnimate>
        <div className="pillars-row pillars-row-5">
          {practiceAreas.map((p, i) => {
            const c = pillarColors[p.color] ?? pillarColors.accent;
            const [bar, icon, cta] = c.split(" ");
            const inner = (
              <ScrollAnimate direction="up" delay={i * 80} className="h-full">
                <div className={`pillar-bar ${bar}`} />
                <div className={`pillar-icon ${icon}`}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className={`pillar-cta ${cta}`}>Explore →</span>
                <div className="pillar-n">0{i + 1}</div>
              </ScrollAnimate>
            );
            return p.href.startsWith("/") ? (
              <Link key={p.id} href={p.href} className="pillar pillar-link">
                {inner}
              </Link>
            ) : (
              <a key={p.id} href={p.href} className="pillar pillar-link">
                {inner}
              </a>
            );
          })}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="ecosystem" id="ecosystem">
        <div className="eco-glow" />
        <ScrollAnimate direction="up">
          <span className="section-eyebrow">{ecosystemIntro.eyebrow}</span>
          <h2 className="section-h2">
            {ecosystemIntro.title.split("\n").map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <p className="section-sub">{ecosystemIntro.subtitle}</p>
        </ScrollAnimate>
        <div className="eco-grid">
          {businessUnits.map((unit, i) => (
            <ScrollAnimate key={unit.id} direction="up" delay={i * 100} className="h-full">
              <div className="eco-card h-full" style={{ margin: 0 }}>
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
                        <strong><AnimatedCounter value={s.value} /></strong>
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
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* SERVICE CATALOGUE */}
      <section className="services relative overflow-hidden" id="services">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <ScrollAnimate direction="up" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20">
              Service Catalogue
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] mb-6">
              {serviceCatalogueIntro.titleLine1}
              <br />
              <span className="text-[var(--muted)]">{serviceCatalogueIntro.titleLine2}</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href={serviceCatalogueIntro.qaCta.href} className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:gap-3 transition-all">
                {serviceCatalogueIntro.qaCta.label} <span>→</span>
              </Link>
              <Link href={serviceCatalogueIntro.devCta.href} className="inline-flex items-center gap-2 text-[var(--indigo)] font-semibold hover:gap-3 transition-all">
                {serviceCatalogueIntro.devCta.label} <span>→</span>
              </Link>
            </div>
          </div>
        </ScrollAnimate>

        <div className="relative z-10 max-w-6xl mx-auto space-y-14">
          <CatalogueLane lane={serviceCatalogue.qa} accentVar="--accent" />
          <CatalogueLane lane={serviceCatalogue.development} accentVar="--indigo" delayOffset={100} />
        </div>
      </section>

      {/* CAPABILITIES TABS */}
      <section className="capabilities" id="capabilities">
        <ScrollAnimate direction="up">
          <span className="section-eyebrow">Deep Capabilities</span>
          <h2 className="section-h2">Expertise that runs deep</h2>
          <p className="section-sub">
            Three capability domains — explore what we deliver across QA, QE, and production
            monitoring. Product engineering lives under TechnoElevate.
          </p>
        </ScrollAnimate>
        <ScrollAnimate direction="up" delay={100}>
          <V2CapabilityTabs groups={capabilityGroups} />
        </ScrollAnimate>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="engage" id="engage">
        <span className="section-eyebrow">Engagement Models</span>
        <div className="engage-split">
          <div>
            <ScrollAnimate direction="left">
              <h2 className="section-h2">Team models</h2>
              <p className="section-sub">
                Whether you need to scale fast, build a CoE, or extend your bench — we flex to your
                operating model.
              </p>
            </ScrollAnimate>
            <div className="engage-cards">
              {teamModels.map((m, i) => (
                <ScrollAnimate key={m.title} direction="left" delay={i * 80} className="w-full">
                  <div className="engage-card w-full" style={{ margin: 0 }}>
                    <h4>{m.title}</h4>
                    <p>{m.description}</p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
          <div>
            <ScrollAnimate direction="right">
              <h2 className="section-h2">Delivery models</h2>
              <p className="section-sub">
                Six commercial models designed for enterprise agility — from outcome-based engagements
                to full managed operations.
              </p>
            </ScrollAnimate>
            <div className="delivery-list">
              {deliveryModels.map((m, i) => (
                <ScrollAnimate key={m.num} direction="right" delay={i * 80} className="w-full">
                  <div className="delivery-row w-full" style={{ margin: 0 }}>
                    <span className="delivery-num">{m.num}</span>
                    <div>
                      <h4>{m.title}</h4>
                      <p>{m.description}</p>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="ai-spot" id="ai">
        <div className="ai-inner">
          <ScrollAnimate direction="left" className="ai-left">
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
          </ScrollAnimate>
          <ScrollAnimate direction="right" className="ai-right">
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
          </ScrollAnimate>
        </div>
      </section>

      <section className="ai-lanes-detail" id={aiLane01.id}>
        <ScrollAnimate direction="up">
          <div className="ai-lane-header">
            <span className="section-eyebrow">{aiLane01.eyebrow}</span>
            <h2 className="section-h2">{aiLane01.title}</h2>
            <p className="section-sub">{aiLane01.intro}</p>
          </div>
        </ScrollAnimate>
        <div className="ai-detail-grid">
          {aiLane01.items.map((item, i) => (
            <ScrollAnimate key={item.title} direction="up" delay={i * 80} className="h-full">
              <div className="ai-detail-card h-full" style={{ margin: 0 }}>
                <span className="ai-detail-tag">{item.tag}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      <section className="ai-lanes-detail ai-lanes-alt" id={aiLane02.id}>
        <ScrollAnimate direction="up">
          <div className="ai-lane-header">
            <span className="section-eyebrow">{aiLane02.eyebrow}</span>
            <h2 className="section-h2">{aiLane02.title}</h2>
            <p className="section-sub">{aiLane02.intro}</p>
          </div>
        </ScrollAnimate>
        <div className="ai-detail-grid">
          {aiLane02.items.map((item, i) => (
            <ScrollAnimate key={item.title} direction="up" delay={i * 80} className="h-full">
              <div className="ai-detail-card h-full" style={{ margin: 0 }}>
                <h4>{item.title}</h4>
                <div className="ai-detail-sub">{item.subtitle}</div>
                <p>{item.description}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* CLIENT SUCCESS */}
      <section className="client-success" id="client-success">
        <ScrollAnimate direction="up">
          <span className="section-eyebrow">Client Success</span>
          <div className="row-header">
            <h2 className="section-h2">Outcomes that move the needle</h2>
            <Link href="/client-success" className="link-arrow">
              All Case Studies →
            </Link>
          </div>
        </ScrollAnimate>
        <div className="cs-grid">
          {caseStudies.map((cs, i) => (
            <ScrollAnimate key={cs.title} direction="up" delay={i * 100} className="h-full">
              <div className="cs-card h-full" style={{ margin: 0 }}>
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
                          <AnimatedCounter value={r.value} />
                        </div>
                        <div className="cs-m-label">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries" id="industries">
        <ScrollAnimate direction="up">
          <span className="section-eyebrow">14 Industries</span>
          <h2 className="section-h2">Built for sectors that cannot afford failure</h2>
        </ScrollAnimate>
        <div className="ind-grid ind-grid-dense">
          {industries.map((ind, i) => (
            <ScrollAnimate key={ind.slug} direction="up" delay={i * 30} className="h-full">
              <Link
                href={`/contact?industry=${encodeURIComponent(ind.slug)}`}
                className="ind-card h-full"
                style={{ margin: 0 }}
              >
                <span className="ind-icon">{ind.icon}</span>
                <h3>{ind.name}</h3>
                <p>{ind.summary}</p>
              </Link>
            </ScrollAnimate>
          ))}
        </div>
        <div className="ind-more">
          <ScrollAnimate direction="up">
            <Link href="/industries" className="link-arrow">
              View all industries →
            </Link>
          </ScrollAnimate>
        </div>
      </section>

      {/* CTA */}
      <ScrollAnimate direction="up">
        <div className="cta-band">
          <h2>
            {ctaBand.line1}
            <br />
            and <em>{ctaBand.line2}</em>
          </h2>
          <Link href="/contact" className="btn-white">
            {ctaBand.button}
          </Link>
        </div>
      </ScrollAnimate>
    </>
  );
}
