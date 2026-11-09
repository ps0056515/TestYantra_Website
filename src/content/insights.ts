export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readMinutes: number;
  tags: string[];
  relatedServiceSlug?: string;
  blocks: InsightBlock[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: "managed-qa-vs-in-house-team",
    title: "Managed QA vs In-House Team: Which Model Fits Your Release Cadence?",
    excerpt:
      "Compare cost, speed, and coverage when deciding between building an internal QA org and partnering with a managed QA provider — with a practical decision framework for CTOs and QA leaders.",
    publishedAt: "2025-06-12",
    readMinutes: 8,
    tags: ["Managed QA", "QA Outsourcing", "Quality Engineering"],
    relatedServiceSlug: "managed-qa",
    blocks: [
      {
        type: "p",
        text: "Every product leader eventually faces the same question: should we hire QA engineers internally, or partner with a managed QA provider? The answer is rarely ideological — it depends on release cadence, regulatory pressure, automation maturity, and how quickly you need to scale coverage without slowing delivery.",
      },
      {
        type: "h2",
        text: "When an in-house team makes sense",
      },
      {
        type: "p",
        text: "An internal QA organisation works best when testing is deeply embedded in proprietary systems, when you have stable headcount budgets, and when domain knowledge takes years to build — for example, core banking platforms or medical device software with strict validation cycles.",
      },
      {
        type: "ul",
        items: [
          "You have a long-term product with predictable release trains",
          "Regulatory or security requirements demand full-time embedded ownership",
          "Engineers and QA share the same tooling, repos, and sprint rituals",
          "Hiring pipelines for niche skills (mainframe, HL7, FIX protocol) are mature",
        ],
      },
      {
        type: "h2",
        text: "When managed QA delivers faster ROI",
      },
      {
        type: "p",
        text: "Managed QA — sometimes called QA-as-a-Service or independent verification & validation (IV&V) — gives you a ready-made CoE, automation frameworks, and POD-based delivery without 6–9 months of hiring. For companies scaling digital channels across markets, launching new product lines, or recovering from quality debt, this model often cuts time-to-coverage dramatically.",
      },
      {
        type: "ul",
        items: [
          "Release frequency is increasing but QA headcount is flat",
          "You need 24×5 or follow-the-sun coverage across time zones",
          "Automation coverage is below 40% and regressions are slipping to production",
          "M&A or platform consolidation requires surge capacity for 3–6 months",
          "You want an independent quality lens separate from delivery pressure",
        ],
      },
      {
        type: "h2",
        text: "Cost comparison: look beyond hourly rates",
      },
      {
        type: "p",
        text: "The common mistake is comparing a vendor's blended rate to a single QA engineer's salary. Fully loaded in-house cost includes recruitment, benefits, tool licences, device labs, management overhead, and bench time between projects. Managed QA providers amortise automation IP, crowd devices, and specialist skills across clients — which is why enterprises often see 30–50% lower cost per test cycle at comparable or higher coverage.",
      },
      {
        type: "h3",
        text: "Questions to ask any managed QA partner",
      },
      {
        type: "ul",
        items: [
          "How do you onboard to our stack in the first 2 weeks?",
          "What automation framework do you bring vs build net-new?",
          "Can you show defect leakage and cycle-time metrics from similar clients?",
          "How is knowledge transferred if we insource later?",
          "Do you offer production monitoring and L2/L3 support?",
        ],
      },
      {
        type: "h2",
        text: "Hybrid is the most common winning pattern",
      },
      {
        type: "p",
        text: "At TestYantra, the majority of enterprise clients run a hybrid model: a small internal QA leadership layer (strategy, tooling, sign-off) plus managed PODs for execution, automation, and regression at scale. This preserves ownership while eliminating hiring bottlenecks. If your releases are weekly or daily and quality is a board-level concern, start with a 90-day managed QA pilot measuring cycle time, escaped defects, and automation coverage — then decide what to insource.",
      },
    ],
  },
  {
    slug: "test-automation-roi-guide",
    title: "Test Automation ROI: How to Build a Business Case Your CFO Will Approve",
    excerpt:
      "A step-by-step framework to quantify automation savings — regression hours avoided, defect cost prevention, and release acceleration — with benchmarks from enterprise QA programmes.",
    publishedAt: "2025-07-18",
    readMinutes: 9,
    tags: ["Test Automation", "ROI", "Quality Engineering"],
    relatedServiceSlug: "test-automation",
    blocks: [
      {
        type: "p",
        text: "Test automation is no longer a nice-to-have — it is the baseline for any team shipping more than once a month. Yet many automation initiatives stall because the business case is framed in engineering terms ('we need Selenium/Cypress/Playwright') instead of financial outcomes. Here is a practical ROI model QA leaders use to secure budget and measure progress.",
      },
      {
        type: "h2",
        text: "Step 1: Baseline manual regression cost",
      },
      {
        type: "p",
        text: "Calculate fully loaded hours spent on manual regression per release multiplied by releases per year. Include weekend war rooms, hotfix retests, and UAT support. For a mid-size product team, manual regression often consumes 120–400 hours per release cycle — that is the number automation must beat.",
      },
      {
        type: "h2",
        text: "Step 2: Quantify escaped defect cost",
      },
      {
        type: "p",
        text: "Production defects cost 5–30× more to fix than defects caught in QA, depending on industry. For regulated sectors (banking, healthcare), a single Sev-1 incident can trigger audit findings and customer compensation. Track escaped defect rate before and after automation — a 40–60% reduction is a realistic target in the first year with proper framework investment.",
      },
      {
        type: "h2",
        text: "Step 3: Model release acceleration",
      },
      {
        type: "p",
        text: "If automation cuts regression from 5 days to 4 hours, how many additional releases can product ship per quarter? Faster feedback loops directly correlate with revenue experiments, compliance deadlines, and competitive feature parity. Even one extra release per quarter often justifies the automation programme alone.",
      },
      {
        type: "h3",
        text: "Sample ROI formula",
      },
      {
        type: "ul",
        items: [
          "Annual manual cost saved = (manual hours per release − automated hours) × releases × blended rate",
          "Defect cost avoided = escaped defects reduced × average production fix cost",
          "Opportunity value = incremental releases × average feature value (conservative estimate)",
          "Net ROI = (savings + avoided cost + opportunity) − (automation build + maintenance + tools)",
        ],
      },
      {
        type: "h2",
        text: "Common pitfalls that destroy ROI",
      },
      {
        type: "ul",
        items: [
          "Automating unstable UI flows before product stabilises — high flake rate erodes trust",
          "No ownership model for script maintenance after the initial build",
          "Chasing 100% coverage instead of risk-based prioritisation on revenue paths",
          "Separate automation team disconnected from sprint priorities",
          "Ignoring API and service-layer tests in favour of brittle UI-only suites",
        ],
      },
      {
        type: "h2",
        text: "Benchmarks from mature programmes",
      },
      {
        type: "p",
        text: "Enterprise clients typically target 70–85% regression automation on stable modules within 12–18 months, with API and contract tests covering microservice boundaries. Pair automation with CI/CD gates so failed builds block merges — this is where ROI compounds. TestYantra's automation CoE brings reusable frameworks, pipeline integration patterns, and POD teams so you see measurable coverage lift within the first sprint, not after a six-month tooling project.",
      },
    ],
  },
  {
    slug: "ai-in-software-testing-practical-guide",
    title: "AI in Software Testing: What Works Today (and What Is Still Hype)",
    excerpt:
      "Generative AI, intelligent test generation, and self-healing automation — a pragmatic guide for QA leaders evaluating AI tools without betting the programme on unproven claims.",
    publishedAt: "2025-08-05",
    readMinutes: 7,
    tags: ["AI Testing", "Test Automation", "Quality Engineering"],
    relatedServiceSlug: "ai-in-testing",
    blocks: [
      {
        type: "p",
        text: "AI in testing is moving from slide decks to production pipelines — but not every vendor claim survives contact with legacy codebases, flaky integrations, and compliance reviews. This guide separates high-value use cases from hype so you can pilot AI responsibly and measure outcomes.",
      },
      {
        type: "h2",
        text: "High-value use cases working now",
      },
      {
        type: "ul",
        items: [
          "Test case generation from requirements, user stories, and API specs — accelerates coverage planning",
          "Self-healing locators in UI automation — reduces maintenance when IDs and DOM shift",
          "Log and telemetry analysis for anomaly detection in production monitoring",
          "Visual regression with ML-based diffing — catches layout breaks humans miss at scale",
          "Risk-based test prioritisation using change-impact analysis from commit history",
        ],
      },
      {
        type: "h2",
        text: "Where to be sceptical",
      },
      {
        type: "p",
        text: "Fully autonomous 'AI replaces QA' claims ignore edge cases, accessibility, regulatory evidence, and exploratory testing. Generative models can hallucinate test data or miss domain-specific validation rules in banking and healthcare. Always keep a human review gate for test assets that enter regulated audit trails.",
      },
      {
        type: "h2",
        text: "Testing AI systems themselves",
      },
      {
        type: "p",
        text: "If your product embeds LLMs, RAG pipelines, or recommendation engines, quality engineering must expand: bias testing, prompt regression suites, guardrail validation, latency/load under token limits, and output consistency across model versions. This is a distinct discipline — 'Testing the AI' — and should run parallel to traditional functional and non-functional testing.",
      },
      {
        type: "h2",
        text: "A 90-day AI-in-testing pilot",
      },
      {
        type: "ul",
        items: [
          "Week 1–2: Pick one stable module with high manual regression cost",
          "Week 3–6: Pilot AI-assisted test generation + self-healing on that module only",
          "Week 7–10: Measure flake rate, maintenance hours, and defects caught vs baseline",
          "Week 11–12: Decide scale, governance, and data/privacy policies for AI tools",
        ],
      },
      {
        type: "p",
        text: "TestYantra's AI quality engineering practice combines tool evaluation, framework integration, and POD delivery so pilots connect to your CI/CD — not isolated proofs of concept. Request a scoped assessment if you are evaluating build vs buy for AI-augmented QA.",
      },
    ],
  },
];

export function getInsightBySlug(slug: string): InsightPost | undefined {
  return insightPosts.find((p) => p.slug === slug);
}
