import Link from "next/link";

export function V2Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-eyebrow">
            <div className="eyebrow-dot" />
            Quality Engineering · AI · Development · DevOps
          </div>
          <h1>
            Quality isn&apos;t
            <br />
            a phase —
            <br />
            it&apos;s a <span className="italic-highlight">discipline</span>
            <br />
            we <span className="teal-word">engineer</span>
          </h1>
          <p className="hero-sub">
            TestYantra partners with global brands to weave quality into every
            layer of software delivery — from design to deployment, from
            automation to AI-powered intelligence.
          </p>
          <div className="hero-actions">
            <a href="#pillars" className="btn-accent">
              Explore Our Services
            </a>
            <a href="#client-success" className="btn-outline">
              See Client Stories →
            </a>
          </div>
        </div>
        <div
          className="hero-visual"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="hv-wrap">
            {/* Static orbit rings */}
            <div className="hv-ring hvr1" />
            <div className="hv-ring hvr2" />
            <div className="hv-ring hvr3" />

            {/* Animated signal dots — separate from rings so rings stay static */}
            <div className="hv-orb horb1" />
            <div className="hv-orb horb2" />
            <div className="hv-orb horb3" />
            <div className="hv-orb horb4" />

            {/* Center orb */}
            <div className="hv-center">
              <div className="hv-pulse-r hpr1" />
              <div className="hv-pulse-r hpr2" />
              <div className="hv-inner-badge">
                <span className="hv-monogram">TY</span>
                <span className="hv-center-label">QUALITY CORE</span>
              </div>
            </div>

            {/* Satellite nodes */}
            <div className="hv-node hn1">
              <div className="hv-node-icon-wrap ni-qe">🧪</div>
              <span className="hv-node-name">Quality Eng.</span>
            </div>
            <div className="hv-node hn2">
              <div className="hv-node-icon-wrap ni-ai">🤖</div>
              <span className="hv-node-name">AI Testing</span>
            </div>
            <div className="hv-node hn3">
              <div className="hv-node-icon-wrap ni-devops">🚀</div>
              <span className="hv-node-name">DevOps</span>
            </div>
            <div className="hv-node hn4">
              <div className="hv-node-icon-wrap ni-dev">💻</div>
              <span className="hv-node-name">Dev</span>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stat-cell fi">
          <div className="stat-num">
            360<sup>+</sup>
          </div>
          <div className="stat-desc">Global Clients</div>
        </div>
        <div className="stat-cell fi fi-d1">
          <div className="stat-num">
            17<sup>+</sup>
          </div>
          <div className="stat-desc">Years in Quality Engineering</div>
        </div>
        <div className="stat-cell fi fi-d2">
          <div className="stat-num">
            2200<sup>+</sup>
          </div>
          <div className="stat-desc">Automation Engineers</div>
        </div>
        <div className="stat-cell fi fi-d3">
          <div className="stat-num">
            11<sup>+</sup>
          </div>
          <div className="stat-desc">Global Locations</div>
        </div>
      </div>

      <section className="pillars" id="pillars">
        <span className="section-eyebrow">Four Engineering Pillars</span>
        <div className="row-header">
          <h2 className="section-h2">
            What we deliver,
            <br />
            end to end
          </h2>
          <p className="section-sub">
            From quality strategy to AI-enabled automation and full-stack
            development — four practice areas, one seamless engineering partner.
          </p>
        </div>
        <div className="pillars-row">
          <div className="pillar fi">
            <div className="pillar-bar pb1" />
            <div className="pillar-icon pi1">🧪</div>
            <h3>Quality Engineering</h3>
            <p>
              Platform-driven, Shift-Left quality at the heart of delivery. We
              turn quality from a gate into a continuous competitive advantage —
              across functional, regression, performance and security testing.
            </p>
            <Link href="/services/managed-qa" className="pillar-cta pc1">
              Discover QE →
            </Link>
            <div className="pillar-n">01</div>
          </div>
          <div className="pillar fi fi-d1">
            <div className="pillar-bar pb2" />
            <div className="pillar-icon pi2">🤖</div>
            <h3>AI Engineering</h3>
            <p>
              Generative AI meets quality engineering. We deploy ML-driven test
              intelligence, self-healing frameworks, and predictive defect
              analytics — dramatically cutting release cycle time.
            </p>
            <Link href="/services/ai-testing" className="pillar-cta pc2">
              Discover AI →
            </Link>
            <div className="pillar-n">02</div>
          </div>
          <div className="pillar fi fi-d2">
            <div className="pillar-bar pb3" />
            <div className="pillar-icon pi3">💻</div>
            <h3>Development</h3>
            <p>
              Full-stack application engineering — web, mobile, APIs and
              cloud-native microservices — built quality-first with automated
              unit testing and code quality gates embedded from sprint zero.
            </p>
            <Link href="/services/application-development" className="pillar-cta pc3">
              Discover Dev →
            </Link>
            <div className="pillar-n">03</div>
          </div>
          <div className="pillar fi fi-d3">
            <div className="pillar-bar pb4" />
            <div className="pillar-icon pi4">🚀</div>
            <h3>DevOps</h3>
            <p>
              Continuous testing woven into every CI/CD stage.
              Infrastructure-as-code, release automation, configuration
              management and deployment orchestration — engineered for zero-risk
              delivery.
            </p>
            <Link href="/services/devops-cicd" className="pillar-cta pc4">
              Discover DevOps →
            </Link>
            <div className="pillar-n">04</div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <span className="section-eyebrow">Service Catalog</span>
        <div className="row-header">
          <h2 className="section-h2">
            Everything you need
            <br />
            to ship with confidence
          </h2>
          <Link href="/services" className="link-arrow">
            View All Services →
          </Link>
        </div>
        <div className="services-grid">
          <Link href="/services/managed-qa" className="svc-card fi">
            <span className="svc-icon">🔬</span>
            <h3>Managed QA Services</h3>
            <p>
              End-to-end quality as a managed service — dedicated teams,
              tooling, governance and continuous improvement metrics owned by
              TestYantra.
            </p>
            <div className="svc-pills">
              <span className="pill">QA COE</span>
              <span className="pill">Test Strategy</span>
              <span className="pill">Governance</span>
            </div>
            <span className="svc-learn">Learn more →</span>
          </Link>
          <Link href="/services/test-automation" className="svc-card fi fi-d1">
            <span className="svc-icon">⚡</span>
            <h3>Test Automation Engineering</h3>
            <p>
              Building scalable, maintainable automation frameworks across UI,
              API, mobile and data layers — integrated deep into your CI/CD
              pipeline.
            </p>
            <div className="svc-pills">
              <span className="pill">Selenium</span>
              <span className="pill">Playwright</span>
              <span className="pill">Cypress</span>
              <span className="pill">Appium</span>
            </div>
            <span className="svc-learn">Learn more →</span>
          </Link>
          <Link href="/services/crowd-testing" className="svc-card fi fi-d2">
            <span className="svc-icon">👥</span>
            <h3>Crowd Testing</h3>
            <p>
              Global crowd of real-device testers across geographies, OS
              versions, and network conditions — go live with unmatched coverage
              and real-world confidence.
            </p>
            <div className="svc-pills">
              <span className="pill">Real Devices</span>
              <span className="pill">Localization</span>
              <span className="pill">Exploratory</span>
            </div>
            <span className="svc-learn">Learn more →</span>
          </Link>
          <Link href="/services/devops-cicd" className="svc-card fi">
            <span className="svc-icon">🔄</span>
            <h3>DevOps & Continuous Testing</h3>
            <p>
              Embedding quality into every build stage — Jenkins, GitHub
              Actions, Azure DevOps, GitLab CI — with continuous feedback loops
              and automated gates.
            </p>
            <div className="svc-pills">
              <span className="pill">CI/CD</span>
              <span className="pill">Jenkins</span>
              <span className="pill">GitHub Actions</span>
            </div>
            <span className="svc-learn">Learn more →</span>
          </Link>
          <Link href="/services/application-development" className="svc-card fi fi-d1">
            <span className="svc-icon">💻</span>
            <h3>Application Development</h3>
            <p>
              Full-stack and cloud-native application engineering — React,
              Node.js, microservices and APIs — with quality embedded from the
              first commit.
            </p>
            <div className="svc-pills">
              <span className="pill">React</span>
              <span className="pill">Node.js</span>
              <span className="pill">Microservices</span>
            </div>
            <span className="svc-learn">Learn more →</span>
          </Link>
          <Link href="/services/crowd-testing" className="svc-card fi fi-d2">
            <span className="svc-icon">📱</span>
            <h3>Mobile & Digital Testing</h3>
            <p>
              Functional, performance and compatibility testing across iOS,
              Android and cross-platform apps using real device clouds and
              device farms.
            </p>
            <div className="svc-pills">
              <span className="pill">iOS</span>
              <span className="pill">Android</span>
              <span className="pill">Flutter</span>
            </div>
            <span className="svc-learn">Learn more →</span>
          </Link>
          <Link href="/services/performance-engineering" className="svc-card fi">
            <span className="svc-icon">🏋️</span>
            <h3>Performance Engineering</h3>
            <p>
              Load, stress, soak and scalability testing — JMeter, Gatling, k6 —
              ensuring your systems hold up under real-world peak demand and
              beyond.
            </p>
            <div className="svc-pills">
              <span className="pill">JMeter</span>
              <span className="pill">Gatling</span>
              <span className="pill">k6</span>
            </div>
            <span className="svc-learn">Learn more →</span>
          </Link>
          <Link href="/services/security-testing" className="svc-card fi fi-d1">
            <span className="svc-icon">🔐</span>
            <h3>Security Testing</h3>
            <p>
              VAPT, penetration testing, OWASP compliance and secure code review
              — protecting your applications and data from modern threat
              landscapes.
            </p>
            <div className="svc-pills">
              <span className="pill">VAPT</span>
              <span className="pill">OWASP</span>
              <span className="pill">Pen Testing</span>
            </div>
            <span className="svc-learn">Learn more →</span>
          </Link>
          <Link href="/services/training" className="svc-card fi fi-d2">
            <span className="svc-icon">🎓</span>
            <h3>Training & QA Academy</h3>
            <p>
              Structured upskilling for QA and engineering teams — bootcamps,
              certification programs and workshops in automation, AI testing and
              DevOps.
            </p>
            <div className="svc-pills">
              <span className="pill">Bootcamps</span>
              <span className="pill">Certifications</span>
              <span className="pill">Workshops</span>
            </div>
            <span className="svc-learn">Learn more →</span>
          </Link>
        </div>
      </section>

      <section className="ai-spot" id="ai">
        <div className="ai-inner">
          <div className="ai-left">
            <span
              className="section-eyebrow"
              style={{ color: "var(--indigo)" }}
            >
              TestYantra.AI
            </span>
            <h2 className="section-h2">
              Intelligence built
              <br />
              into every test
            </h2>
            <p className="section-sub" style={{ marginBottom: 40 }}>
              Our AI Engineering practice applies generative AI, machine
              learning and intelligent automation to every stage of the software
              quality lifecycle — predicting failures before they reach
              production.
            </p>
            <Link href="/services" className="btn-accent">
              Explore TestYantra.AI
            </Link>
          </div>
          <div className="ai-cards fi">
            <div className="ai-card">
              <div className="ai-card-icon">🧠</div>
              <div>
                <h4>AI-Powered Test Generation</h4>
                <p>
                  Auto-generate comprehensive test suites from requirements,
                  user stories and code diffs using large language models — 60%
                  faster coverage.
                </p>
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-card-icon">📊</div>
              <div>
                <h4>Predictive Defect Analytics</h4>
                <p>
                  ML models trained on code quality signals identify high-risk
                  areas before testing begins — reducing defect leakage and
                  re-test cycles.
                </p>
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-card-icon">⚡</div>
              <div>
                <h4>Self-Healing Automation</h4>
                <p>
                  AI-driven test maintenance auto-repairs broken scripts when
                  UIs change — zero manual intervention, no delayed releases.
                </p>
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-card-icon">🔍</div>
              <div>
                <h4>Visual AI Testing</h4>
                <p>
                  Computer vision-powered UI comparison and accessibility checks
                  at pixel level — catch rendering bugs humans miss every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-success" id="client-success">
        <span className="section-eyebrow">Client Success</span>
        <div className="row-header">
          <h2 className="section-h2">
            Outcomes that move
            <br />
            the needle
          </h2>
          <Link href="/client-success" className="link-arrow">
            All Case Studies →
          </Link>
        </div>
        <div className="cs-grid">
          <div className="cs-card fi">
            <div className="cs-thumb cst1">
              🏦
              <span className="cs-industry ci1">Banking</span>
            </div>
            <div className="cs-body">
              <h3>
                Transforming QA for a Global Retail Bank&apos;s Digital Channels
              </h3>
              <p>
                A Tier-1 bank needed to accelerate digital releases while
                maintaining regulatory compliance across 14 markets. TestYantra
                built a centralised QA COE with an AI-augmented automation
                framework.
              </p>
              <div className="cs-metric">
                <div className="cs-m-item">
                  <div className="cs-m-num m-acc">72%</div>
                  <div className="cs-m-label">Faster release cycles</div>
                </div>
                <div className="cs-m-item">
                  <div className="cs-m-num m-teal">60%</div>
                  <div className="cs-m-label">Defect leakage reduction</div>
                </div>
                <div className="cs-m-item">
                  <div className="cs-m-num m-ind">3×</div>
                  <div className="cs-m-label">Automation coverage</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-card fi fi-d1">
            <div className="cs-thumb cst2">
              📡
              <span className="cs-industry ci2">Telecom</span>
            </div>
            <div className="cs-body">
              <h3>
                Continuous Testing Pipeline for a Leading OTT Streaming Platform
              </h3>
              <p>
                A global media giant faced quality bottlenecks slowing their
                streaming platform releases. TestYantra embedded continuous
                testing into their DevOps pipeline, enabling daily deployments.
              </p>
              <div className="cs-metric">
                <div className="cs-m-item">
                  <div className="cs-m-num m-ind">Daily</div>
                  <div className="cs-m-label">Deploy frequency</div>
                </div>
                <div className="cs-m-item">
                  <div className="cs-m-num m-acc">85%</div>
                  <div className="cs-m-label">Test automation rate</div>
                </div>
                <div className="cs-m-item">
                  <div className="cs-m-num m-teal">40%</div>
                  <div className="cs-m-label">Cost reduction</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-card fi fi-d2">
            <div className="cs-thumb cst3">
              🏥
              <span className="cs-industry ci3">Healthcare</span>
            </div>
            <div className="cs-body">
              <h3>
                HIPAA-Compliant Quality Engineering for a HealthTech Platform
              </h3>
              <p>
                A fast-growing digital health company needed robust quality and
                security testing across patient-facing apps without slowing down
                their aggressive product roadmap.
              </p>
              <div className="cs-metric">
                <div className="cs-m-item">
                  <div className="cs-m-num m-teal">100%</div>
                  <div className="cs-m-label">HIPAA compliance</div>
                </div>
                <div className="cs-m-item">
                  <div className="cs-m-num m-acc">55%</div>
                  <div className="cs-m-label">Faster regression</div>
                </div>
                <div className="cs-m-item">
                  <div className="cs-m-num m-ind">Zero</div>
                  <div className="cs-m-label">Prod defects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="clients-strip">
        <p className="strip-label">
          Trusted by 360+ global brands across industries
        </p>
        <div className="logo-row fi">
          <div className="logo-cell">FinServ Co</div>
          <div className="logo-cell">Telecom Giant</div>
          <div className="logo-cell">HealthTech</div>
          <div className="logo-cell">Retail Brand</div>
          <div className="logo-cell">SaaS Leader</div>
          <div className="logo-cell">Media House</div>
          <div className="logo-cell">InsureTech</div>
          <div className="logo-cell">Travel Tech</div>
          <div className="logo-cell">E-Commerce</div>
          <div className="logo-cell">Consumer App</div>
          <div className="logo-cell">BankingCo</div>
          <div className="logo-cell">Hi-Tech ISV</div>
        </div>
      </div>

      <section className="industries" id="industries">
        <span className="section-eyebrow">Industries</span>
        <h2 className="section-h2 fi">
          Built for sectors that
          <br />
          cannot afford failure
        </h2>
        <div className="ind-grid">
          <div className="ind-card fi">
            <span className="ind-icon">🏦</span>
            <h3>Banking & Finance</h3>
            <p>
              Core banking, payments, open banking and regulatory compliance.
            </p>
          </div>
          <div className="ind-card fi fi-d1">
            <span className="ind-icon">🛡️</span>
            <h3>Insurance</h3>
            <p>
              Policy systems, claims processing, underwriting and insuretech.
            </p>
          </div>
          <div className="ind-card fi fi-d2">
            <span className="ind-icon">🏥</span>
            <h3>Healthcare & Life Sciences</h3>
            <p>EHR systems, medical devices, HIPAA and clinical trials.</p>
          </div>
          <div className="ind-card fi fi-d3">
            <span className="ind-icon">📡</span>
            <h3>Telecom & Media</h3>
            <p>BSS/OSS, OTT streaming, network functions and broadcast.</p>
          </div>
          <div className="ind-card fi">
            <span className="ind-icon">🛒</span>
            <h3>Retail & E-Commerce</h3>
            <p>Omnichannel platforms, POS, supply chain and loyalty apps.</p>
          </div>
          <div className="ind-card fi fi-d1">
            <span className="ind-icon">✈️</span>
            <h3>Travel & Hospitality</h3>
            <p>Booking engines, GDS, loyalty platforms and traveller apps.</p>
          </div>
          <div className="ind-card fi fi-d2">
            <span className="ind-icon">⚙️</span>
            <h3>SaaS & Hi-Tech</h3>
            <p>
              Product engineering, regression automation and DevOps quality.
            </p>
          </div>
          <div className="ind-card fi fi-d3">
            <span className="ind-icon">🌐</span>
            <h3>Internet & Consumer</h3>
            <p>High-traffic platforms, gaming, social and consumer mobile.</p>
          </div>
        </div>
      </section>

      <section className="why" id="why">
        <span className="section-eyebrow">Why TestYantra</span>
        <div className="why-inner">
          <div>
            <h2 className="section-h2 fi">
              Your quality engineering
              <br />
              transformation partner
            </h2>
            <p className="section-sub fi" style={{ marginBottom: 0 }}>
              We don&apos;t just test software. We embed quality thinking across
              your engineering organization — from Shift-Left strategy to
              AI-powered delivery pipelines — so that quality becomes your
              team&apos;s natural output, not an afterthought.
            </p>
            <div className="why-points">
              <div className="why-pt fi">
                <div className="why-icon">🎯</div>
                <div>
                  <h4>Test-to-Fit Philosophy</h4>
                  <p>
                    Every engagement starts with understanding your business
                    roadmap, then designing a quality solution that fits
                    precisely — not a generic template.
                  </p>
                </div>
              </div>
              <div className="why-pt fi fi-d1">
                <div className="why-icon">🔬</div>
                <div>
                  <h4>Deep Automation DNA</h4>
                  <p>
                    With 2,200+ automation engineers across tools and domains,
                    we bring unmatched depth to every framework conversation.
                  </p>
                </div>
              </div>
              <div className="why-pt fi fi-d2">
                <div className="why-icon">🌍</div>
                <div>
                  <h4>Global Follow-the-Sun Delivery</h4>
                  <p>
                    Offices across India, US, UK and 11+ locations — continuous
                    delivery coverage for enterprises that operate around the
                    clock.
                  </p>
                </div>
              </div>
              <div className="why-pt fi fi-d3">
                <div className="why-icon">📈</div>
                <div>
                  <h4>Structured QA Transformation</h4>
                  <p>
                    Our maturity assessment framework benchmarks your current
                    state and builds a time-bound roadmap to world-class
                    quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="maturity-card fi">
              <h3>QA Maturity Assessment</h3>
              <p>Where does your engineering quality stand today?</p>
              <div className="mat-levels">
                <div className="mat-row">
                  <span className="mat-name">Initial</span>
                  <div className="mat-track">
                    <div className="mat-fill mf1" />
                  </div>
                  <span className="mat-tag">L1</span>
                </div>
                <div className="mat-row">
                  <span className="mat-name">Managed</span>
                  <div className="mat-track">
                    <div className="mat-fill mf2" />
                  </div>
                  <span className="mat-tag">L2</span>
                </div>
                <div className="mat-row">
                  <span className="mat-name">Defined</span>
                  <div className="mat-track">
                    <div className="mat-fill mf3" />
                  </div>
                  <span className="mat-tag">L3</span>
                </div>
                <div className="mat-row">
                  <span className="mat-name">Quantified</span>
                  <div className="mat-track">
                    <div className="mat-fill mf4" />
                  </div>
                  <span className="mat-tag">L4</span>
                </div>
                <div className="mat-row">
                  <span className="mat-name">Optimizing</span>
                  <div className="mat-track">
                    <div className="mat-fill mf5" />
                  </div>
                  <span className="mat-tag">L5</span>
                </div>
              </div>
              <div className="mat-note">
                Our clients typically progress from L2 to L4 within 10–14
                months, with 40–65% faster release cycles and measurable
                reduction in production defects.
              </div>
              <Link
                href="/contact"
                className="btn-accent"
                style={{ display: "block", textAlign: "center", marginTop: 24 }}
              >
                Take the Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="approach">
        <span className="section-eyebrow">Our Approach</span>
        <h2 className="section-h2 fi">
          Swift Quality —{" "}
          <em style={{ fontStyle: "italic", fontWeight: 300 }}>
            the TestYantra way
          </em>
        </h2>
        <div className="approach-steps">
          <div className="appr-step fi">
            <div className="appr-num">01</div>
            <h4>Assess</h4>
            <p>
              Benchmark current QA maturity, map gaps and build a structured
              transformation roadmap.
            </p>
          </div>
          <div className="appr-step fi fi-d1">
            <div className="appr-num">02</div>
            <h4>Shift Left</h4>
            <p>
              Bring quality to design — wireframes, pseudo-code and specs
              reviewed before a line is written.
            </p>
          </div>
          <div className="appr-step fi fi-d2">
            <div className="appr-num">03</div>
            <h4>Automate</h4>
            <p>
              Intelligent, self-healing automation across UI, API, performance
              and security — at scale.
            </p>
          </div>
          <div className="appr-step fi fi-d3">
            <div className="appr-num">04</div>
            <h4>Integrate</h4>
            <p>
              Wire continuous testing into every CI/CD stage — fail fast, fix
              faster, ship with confidence.
            </p>
          </div>
          <div className="appr-step fi" style={{ transitionDelay: "0.4s" }}>
            <div className="appr-num">05</div>
            <h4>Optimise</h4>
            <p>
              AI analytics, predictive defect scoring and continuous improvement
              loops — always getting better.
            </p>
          </div>
        </div>
      </section>

      <section className="insights" id="insights">
        <span className="section-eyebrow">Insights & Resources</span>
        <div className="row-header">
          <h2 className="section-h2">Think. Learn. Engineer.</h2>
          <Link href="/outcomes" className="link-arrow">
            All Insights →
          </Link>
        </div>
        <div className="insights-grid">
          <Link href="/outcomes/generative-ai-test-automation" className="ins-card fi" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="ins-thumb it1">🤖</div>
            <div className="ins-body">
              <div className="ins-cat">AI Engineering</div>
              <h3>
                How Generative AI is Rewriting the Rules of Test Automation
              </h3>
              <p>
                From self-healing scripts to LLM-generated test suites — a
                practical look at how AI is transforming QA team productivity.
              </p>
              <p className="ins-meta">March 2025 · 6 min read</p>
              <p className="ins-read-cta">Read article →</p>
            </div>
          </Link>
          <Link href="/outcomes/continuous-testing-devops-culture" className="ins-card fi fi-d1" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="ins-thumb it2">🔄</div>
            <div className="ins-body">
              <div className="ins-cat">DevOps</div>
              <h3>
                Continuous Testing as the Backbone of a High-Performing DevOps
                Culture
              </h3>
              <p>
                Why embedding testing into every CI/CD stage is the single most
                impactful quality decision engineering leaders can make.
              </p>
              <p className="ins-meta">February 2025 · 5 min read</p>
              <p className="ins-read-cta">Read article →</p>
            </div>
          </Link>
          <Link href="/outcomes/qa-maturity-ladder" className="ins-card fi fi-d2" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="ins-thumb it3">📊</div>
            <div className="ins-body">
              <div className="ins-cat">Quality Engineering</div>
              <h3>
                The QA Maturity Ladder: Moving from Manual Testing to AI-Powered
                Quality
              </h3>
              <p>
                A practical framework for assessing and elevating your
                engineering quality capability across five maturity stages.
              </p>
              <p className="ins-meta">January 2025 · 8 min read</p>
              <p className="ins-read-cta">Read article →</p>
            </div>
          </Link>
        </div>
      </section>

      <div className="cta-band">
        <h2>
          Ready to make quality
          <br />
          your <em>engineering superpower?</em>
        </h2>
        <a href="mailto:info@testyantra.com" className="btn-white">
          Start a Conversation →
        </a>
      </div>
    </>
  );
}
