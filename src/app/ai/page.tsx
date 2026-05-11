import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";

export const metadata = {
  title: "TestYantra.AI — AI-Powered Quality Engineering",
  description:
    "TestYantra.AI: Applying generative AI, agentic intelligence and machine learning across every dimension of quality engineering — from AI-native test generation to testing AI systems.",
};

/* ── Named AI products ─────────────────────────────────────── */
const aiProducts = [
  {
    name: "IntelliTest™",
    tagline: "LLM-Powered Test Intelligence",
    icon: "🧠",
    color: "#5c6fff",
    desc: "Generates comprehensive test suites from requirements, user stories, Jira tickets and code diffs using large language models. IntelliTest™ reduces test authoring time by 60% while expanding coverage to edge cases human testers routinely miss.",
    features: ["Test generation from natural language specs", "Code diff-aware regression suites", "BDD scenario generation", "Test data synthesis"],
  },
  {
    name: "HealBot™",
    tagline: "Self-Healing Automation Engine",
    icon: "⚡",
    color: "#e8401a",
    desc: "AI-driven framework that detects broken automation scripts when UIs or APIs change and auto-repairs them — without human intervention. HealBot™ eliminates the #1 cause of automation abandonment: maintenance overhead.",
    features: ["Element localisation healing", "API contract auto-repair", "Change-aware test re-generation", "Zero-downtime maintenance"],
  },
  {
    name: "DefectIQ™",
    tagline: "Predictive Defect Analytics",
    icon: "📊",
    color: "#00bfa8",
    desc: "ML models trained on code quality signals, commit patterns, historical defect data and sprint velocity to identify high-risk areas before testing begins. DefectIQ™ tells your team where to focus — before bugs become incidents.",
    features: ["Risk-ranked test prioritisation", "Hotspot heatmaps by module", "Defect trend forecasting", "Sprint quality scoring"],
  },
  {
    name: "VisionAI™",
    tagline: "Visual Intelligence & Accessibility",
    icon: "👁️",
    color: "#f0a500",
    desc: "Computer vision-powered visual regression, cross-browser rendering validation and automated WCAG 2.2 accessibility audits — catching the visual and accessibility bugs that scripted tests were never designed to find.",
    features: ["Pixel-perfect visual regression", "Cross-browser rendering comparison", "WCAG 2.2 automated audits", "Layout shift detection"],
  },
];

/* ── AI operating model pillars ───────────────────────────── */
const operatingModel = [
  {
    num: "01",
    title: "AI-Native Testing",
    icon: "🤖",
    color: "#5c6fff",
    headline: "Re(AI)magining how testing is done",
    body: "We embed AI across every phase of the test lifecycle — generation, execution, maintenance and analysis. Using LLMs, computer vision and ML, our AI-native testing approach compresses the quality feedback loop while expanding coverage to depths and speeds human testers alone cannot reach. The result: faster releases, higher confidence, lower cost.",
    items: ["LLM-powered test generation", "Self-healing automation", "Visual AI regression", "AI-driven test prioritisation"],
  },
  {
    num: "02",
    title: "Testing AI Systems",
    icon: "🔬",
    color: "#e8401a",
    headline: "Validating the AI your enterprise builds and buys",
    body: "As AI systems become mission-critical, traditional testing frameworks fall short. TestYantra.AI brings a purpose-built methodology for validating LLMs, agentic workflows, recommendation engines and ML models — covering accuracy, hallucination, bias, adversarial robustness, latency and compliance with AI governance frameworks including the EU AI Act.",
    items: ["LLM accuracy & hallucination testing", "Agentic AI workflow validation", "ML model performance testing", "AI bias & fairness auditing"],
  },
  {
    num: "03",
    title: "Intelligent Quality Ops",
    icon: "📡",
    color: "#00bfa8",
    headline: "Quality intelligence that drives decisions",
    body: "DefectIQ™ and our AI analytics layer transform raw quality data into predictive intelligence — surfacing risk before it materialises, recommending where to focus testing effort and delivering executive-grade quality dashboards in real time. Quality ops becomes proactive, not reactive.",
    items: ["Predictive defect scoring", "Risk-based test selection", "Real-time quality dashboards", "Sprint quality forecasting"],
  },
  {
    num: "04",
    title: "Responsible AI Quality",
    icon: "🛡️",
    color: "#f0a500",
    headline: "Trust built into every AI engagement",
    body: "We operationalise responsible AI testing — ensuring AI systems are accurate, fair, transparent, secure and compliant. Our framework covers EU AI Act readiness, GDPR alignment, bias detection, adversarial testing and explainability validation, giving enterprises the confidence to deploy AI at scale without governance risk.",
    items: ["EU AI Act readiness assessment", "GDPR & data privacy validation", "Adversarial AI testing", "Model explainability verification"],
  },
];

/* ── Industry AI use cases ────────────────────────────────── */
const industryUseCases = [
  {
    industry: "Banking & Finance",
    icon: "🏦",
    color: "#e8401a",
    useCase: "AI-Powered Fraud Detection Validation",
    desc: "Testing ML fraud models for accuracy, latency and regulatory compliance — ensuring zero false positives don't lock out legitimate customers while catching real fraud at transaction speed.",
  },
  {
    industry: "Healthcare",
    icon: "🏥",
    color: "#00bfa8",
    useCase: "Clinical AI System Validation",
    desc: "FDA 21 CFR-compliant testing of AI diagnostic tools, clinical decision support systems and patient risk scoring models — where accuracy is a matter of patient safety.",
  },
  {
    industry: "Retail & E-Commerce",
    icon: "🛒",
    color: "#5c6fff",
    useCase: "Recommendation Engine Quality",
    desc: "Validating personalisation AI, search ranking models and dynamic pricing engines for accuracy, bias and business impact — ensuring AI drives revenue, not customer frustration.",
  },
  {
    industry: "Telecom & Media",
    icon: "📡",
    color: "#f0a500",
    useCase: "Content Moderation AI Testing",
    desc: "Adversarial testing of AI content moderation systems — edge cases, bias, multilingual accuracy and harmful content detection — at the scale and speed modern platforms require.",
  },
  {
    industry: "Insurance",
    icon: "🛡️",
    color: "#e8401a",
    useCase: "Underwriting AI Model Validation",
    desc: "Rigorous bias auditing, fairness testing and accuracy validation for AI underwriting and claims processing models — ensuring regulatory compliance and equitable outcomes.",
  },
  {
    industry: "SaaS & Hi-Tech",
    icon: "⚙️",
    color: "#00bfa8",
    useCase: "Agentic AI Workflow Testing",
    desc: "End-to-end testing of LLM-powered agentic systems — multi-step workflows, tool use, memory, guardrails and adversarial prompting — for reliability in production environments.",
  },
];

export default function AIPage() {
  return (
    <>
      {/* ── HERO (full-bleed dark section) ───────────────────────── */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(92,111,255,0.22) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 90% 50%, rgba(232,64,26,0.12) 0%, transparent 60%), var(--bg)",
          borderBottom: "1px solid var(--border)",
          padding: "100px 0 80px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          {/* Brand badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 100,
              border: "1px solid rgba(92,111,255,0.4)",
              background: "rgba(92,111,255,0.1)",
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <span style={{ fontSize: 16 }}>✦</span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6c80ff",
              }}
            >
              TestYantra.AI
            </span>
          </div>

          <div className="ai-hero-grid">
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-fraunces, serif)",
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: "var(--text)",
                  marginBottom: 24,
                }}
              >
                AI-powered quality.
                <br />
                <span style={{ color: "#6c80ff" }}>Human-led</span> judgment.
              </h1>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "var(--muted2)",
                  maxWidth: 600,
                  marginBottom: 40,
                }}
              >
                TestYantra.AI applies generative AI, agentic intelligence and machine learning across every dimension of quality engineering — from automatically generating test suites to validating the AI systems your enterprise builds and deploys.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-accent">
                  Talk to Our AI Team
                </Link>
                <Link href="#ai-products" className="btn-outline">
                  Explore AI Products ↓
                </Link>
              </div>
            </div>

            {/* Stat cluster */}
            <div
              className="ai-hero-stats"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                minWidth: 260,
              }}
            >
              {[
                { n: "60%", l: "Faster test generation" },
                { n: "90%", l: "Maintenance reduction" },
                { n: "40%", l: "Earlier defect detection" },
                { n: "3×", l: "Pipeline throughput" },
              ].map((s) => (
                <div
                  key={s.l}
                  style={{
                    borderRadius: 14,
                    border: "1px solid rgba(92,111,255,0.2)",
                    background: "rgba(92,111,255,0.06)",
                    padding: "18px 16px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#6c80ff" }}>{s.n}</div>
                  <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <V2InnerShell>
        {/* ── AI HAS MOVED BEYOND PILOTS ─────────────────────────── */}
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", padding: "80px 0 20px" }}>
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            The AI Inflection Point
          </div>
          <h2
            style={{
              fontFamily: "var(--font-fraunces, serif)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 600,
              color: "var(--text)",
              lineHeight: 1.2,
              margin: "12px 0 20px",
            }}
          >
            AI in quality engineering has moved beyond pilots.
            <br />
            <span style={{ color: "var(--muted)" }}>Engineering teams must too.</span>
          </h2>
          <p className="text-sm leading-7 text-[var(--muted2)]">
            Most organisations are experimenting with AI in testing. Few are scaling it with confidence. Disconnected pilots, brittle automation, unclear ROI and low adoption continue to limit real impact. TestYantra.AI makes AI-powered quality engineering an enterprise-grade capability — not an experiment.
          </p>
        </div>

        {/* ── AI OPERATING MODEL ──────────────────────────────────── */}
        <div className="mt-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">AI Operating Model</div>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--text)] sm:text-3xl">
            An AI quality model built for scale
          </h2>
          <div className="mt-10 space-y-6">
            {operatingModel.map((pillar) => (
              <div
                key={pillar.num}
                className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-8 transition hover:border-[var(--border2)]"
              >
                {/* accent left bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: pillar.color }}
                />
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 pl-3">
                  <div className="shrink-0">
                    <div
                      className="text-3xl h-14 w-14 flex items-center justify-center rounded-xl"
                      style={{ background: `${pillar.color}18`, border: `1px solid ${pillar.color}30` }}
                    >
                      {pillar.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: pillar.color }}>
                        {pillar.num}
                      </span>
                      <h3 className="text-xl font-semibold text-[var(--text)]">{pillar.title}</h3>
                    </div>
                    <p className="text-xs italic text-[var(--muted)] mb-3">{pillar.headline}</p>
                    <p className="text-sm leading-6 text-[var(--muted2)] max-w-2xl mb-5">{pillar.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted2)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── AGENTIC SUITE FEATURE BLOCK ──────────────────────── */}
        <div className="mt-24">
          <div
            style={{
              borderRadius: 24,
              background: "linear-gradient(135deg, rgba(240,165,0,0.1) 0%, rgba(240,165,0,0.04) 50%, var(--bg2) 100%)",
              border: "2px solid rgba(240,165,0,0.3)",
              padding: "48px 40px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Dot-grid background texture */}
            <div style={{
              position: "absolute", inset: 0, opacity: 0.035,
              backgroundImage: "radial-gradient(circle at 1px 1px, #f0a500 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                borderRadius: 100, border: "1px solid rgba(240,165,0,0.4)",
                background: "rgba(240,165,0,0.1)", padding: "5px 14px", marginBottom: 20,
              }}>
                <span style={{ fontSize: 14 }}>⚡</span>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f0a500" }}>
                  Flagship Product
                </span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-fraunces, serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600, color: "var(--text)", lineHeight: 1.2, marginBottom: 16,
              }}>
                The Agentic Suite
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted2)", maxWidth: 600, marginBottom: 32 }}>
                One Orchestrator coordinates two specialist suites — QA &amp; Testing and Development &amp; Engineering — running autonomously from requirements to production. Embedded in your stack, your repo, your tools.
              </p>
              {/* Agent pills */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
                {[
                  { label: "🕹️ Orchestrator", color: "#f0a500" },
                  { label: "🧪 QA & Testing Suite", color: "#e8401a" },
                  { label: "🛠️ Development Suite", color: "#5c6fff" },
                  { label: "📄 Requirements & Story", color: "#f0a500" },
                  { label: "💗 Self-Healing Agent", color: "#e8401a" },
                  { label: "</> Code Generation", color: "#5c6fff" },
                  { label: "🔍 Triage & Root-Cause", color: "#00bfa8" },
                  { label: "+ 8 more agents", color: "#6b7280" },
                ].map((a) => (
                  <span key={a.label} style={{
                    fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 100,
                    background: `${a.color}12`, color: a.color, border: `1px solid ${a.color}30`,
                  }}>
                    {a.label}
                  </span>
                ))}
              </div>
              {/* Metrics strip */}
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 36 }}>
                {[
                  { label: "MAINTENANCE COST", dir: "↓" },
                  { label: "COVERAGE", dir: "↑" },
                  { label: "CYCLE TIME", dir: "↓" },
                  { label: "DEFECT ESCAPE", dir: "↓" },
                ].map((m) => (
                  <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "var(--muted2)", textTransform: "uppercase" }}>{m.label}</span>
                    <span style={{ fontSize: 20, fontWeight: 800, color: m.dir === "↑" ? "#00bfa8" : "#e8401a" }}>{m.dir}</span>
                  </div>
                ))}
              </div>
              <Link href="/ai/agentic-suite" className="btn-accent" style={{ display: "inline-block" }}>
                Explore the Agentic Suite →
              </Link>
            </div>
          </div>
        </div>

        {/* ── NAMED AI PRODUCTS ──────────────────────────────────── */}
        <div className="mt-24" id="ai-products">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">AI Products & Platforms</div>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--text)] sm:text-3xl">
            TestYantra.AI product suite
          </h2>
          <p className="mt-3 text-sm text-[var(--muted2)] max-w-2xl">
            Four purpose-built AI products that power our quality engineering capabilities — each targeting a distinct bottleneck in the quality lifecycle.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {aiProducts.map((product) => (
              <div
                key={product.name}
                className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-7 transition hover:border-[var(--border2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl"
                  style={{ background: product.color }}
                />
                <div className="flex items-start gap-4 mt-1">
                  <div
                    className="h-12 w-12 flex items-center justify-center rounded-xl text-2xl shrink-0"
                    style={{ background: `${product.color}18`, border: `1px solid ${product.color}30` }}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text)]">{product.name}</h3>
                    <p className="text-xs italic" style={{ color: product.color }}>{product.tagline}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--muted2)]">{product.desc}</p>
                <ul className="mt-5 space-y-2">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[var(--muted2)]">
                      <span className="font-bold text-sm" style={{ color: product.color }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold"
                  style={{ color: product.color }}
                >
                  Request a demo →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── INDUSTRY AI USE CASES ──────────────────────────────── */}
        <div className="mt-24">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Industry Use Cases</div>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--text)] sm:text-3xl">
            AI quality engineering for every sector
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industryUseCases.map((uc) => (
              <div
                key={uc.industry}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-6 transition hover:border-[var(--border2)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="h-10 w-10 flex items-center justify-center rounded-lg text-xl shrink-0"
                    style={{ background: `${uc.color}18` }}
                  >
                    {uc.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: uc.color }}>
                    {uc.industry}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[var(--text)] mb-2">{uc.useCase}</h3>
                <p className="text-xs leading-5 text-[var(--muted2)]">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHY TESTYANTRA FOR AI ──────────────────────────────── */}
        <div className="mt-24">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Why TestYantra</div>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--text)] sm:text-3xl">
            Why enterprises choose TestYantra.AI
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🧬",
                title: "17+ Years of Testing DNA",
                desc: "AI amplifies expertise — it doesn't replace it. Our 2,200+ engineers bring 17 years of quality engineering depth to every AI engagement, ensuring AI tools are wielded with judgment, not just velocity.",
              },
              {
                icon: "🏗️",
                title: "AI Products, Not Just Services",
                desc: "IntelliTest™, HealBot™, DefectIQ™ and VisionAI™ are proprietary platforms built in-house — giving you IP-backed AI acceleration rather than off-the-shelf tool reselling.",
              },
              {
                icon: "🔍",
                title: "We Test AI — We Don't Just Use It",
                desc: "Uniquely, TestYantra.AI both uses AI to improve testing AND tests AI systems themselves — making us the only partner who understands quality from both sides of the AI boundary.",
              },
              {
                icon: "🛡️",
                title: "Responsible AI Testing Framework",
                desc: "Every AI engagement includes bias detection, fairness auditing, adversarial testing and governance alignment — covering EU AI Act, GDPR and sector-specific AI regulatory requirements.",
              },
              {
                icon: "🌐",
                title: "Ecosystem Partnerships",
                desc: "Deep partnerships with OpenAI, Anthropic, Google DeepMind, Microsoft Azure AI and AWS Bedrock — ensuring our AI capabilities are always built on the best available foundation models.",
              },
              {
                icon: "📈",
                title: "Measurable AI ROI",
                desc: "Every TestYantra.AI engagement is measured against quantified outcomes — test generation speed, defect prediction accuracy, maintenance cost reduction and pipeline throughput — so ROI is never ambiguous.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[var(--muted2)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RESPONSIBLE AI ─────────────────────────────────────── */}
        <div
          className="mt-20 rounded-2xl p-10"
          style={{
            background: "linear-gradient(135deg, rgba(92,111,255,0.08) 0%, var(--bg2) 100%)",
            border: "1px solid rgba(92,111,255,0.2)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-start gap-8">
            <div className="shrink-0 text-5xl">⚖️</div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#6c80ff" }}>
                Responsible AI
              </div>
              <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Our commitment to trustworthy AI</h2>
              <p className="text-sm leading-6 text-[var(--muted2)] max-w-2xl mb-5">
                AI presents tremendous opportunity — but only for enterprises that treat it responsibly. At TestYantra, responsible AI is not a checkbox. It is embedded in every engagement: fairness testing, bias detection, adversarial validation, transparency audits and governance alignment with the EU AI Act, GDPR and sector-specific frameworks. We help enterprises deploy AI they can trust, at scale.
              </p>
              <div className="flex flex-wrap gap-2">
                {["EU AI Act Readiness", "GDPR Alignment", "Bias & Fairness Auditing", "Adversarial Testing", "Model Explainability", "AI Governance Frameworks"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{ background: "rgba(92,111,255,0.12)", color: "#8898ff", border: "1px solid rgba(92,111,255,0.25)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── AI PARTNER ECOSYSTEM ──────────────────────────────── */}
        <div className="mt-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">Partner Ecosystem</div>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
            Built on world-class AI foundations
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "OpenAI GPT-4", color: "#00a67e" },
              { name: "Anthropic Claude", color: "#b87333" },
              { name: "Google Gemini", color: "#4285F4" },
              { name: "Microsoft Azure AI", color: "#0078D4" },
              { name: "AWS Bedrock", color: "#FF9900" },
              { name: "Hugging Face", color: "#FFD21E" },
              { name: "LangChain", color: "#1C7C54" },
              { name: "Applitools", color: "#5b21b6" },
              { name: "Functionize", color: "#e8401a" },
              { name: "Healenium", color: "#00bfa8" },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-4 py-3 text-xs font-semibold text-[var(--muted2)]"
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <div
          className="mt-20 rounded-2xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(92,111,255,0.12) 0%, rgba(232,64,26,0.06) 50%, var(--bg2) 100%)",
            border: "1px solid rgba(92,111,255,0.25)",
          }}
        >
          <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6c80ff" }}>
            TestYantra.AI
          </div>
          <h2
            style={{
              fontFamily: "var(--font-fraunces, serif)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 600,
              color: "var(--text)",
              marginBottom: 16,
            }}
          >
            Ready to re(AI)magine your quality engineering?
          </h2>
          <p className="text-sm text-[var(--muted2)] max-w-lg mx-auto mb-8">
            AI transformation in quality doesn&apos;t start with tools. It starts with rethinking what precision, speed and coverage can look like when human expertise meets machine intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent">
              Talk to Our AI Team →
            </Link>
            <Link href="/capabilities/intelligent-automation" className="btn-outline">
              Explore Intelligent Automation
            </Link>
          </div>
        </div>
      </V2InnerShell>
    </>
  );
}
