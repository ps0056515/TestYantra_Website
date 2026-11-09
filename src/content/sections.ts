import { caseStudies, services, technoElevate, type Service } from "@/content/site";
import { homepageFaqs, type FaqItem } from "@/content/faq";

/**
 * Two-section site model.
 * Gateway (/) -> Quality Engineering (/qe) and Application Engineering & AI (/ai).
 * Both sections share one page-template set; only the content below differs.
 */

export type SectionKey = "qe" | "ai";

export type Stat = { value: string; label: string };

export type Pillar = {
  label: string;
  title: string;
  body: string;
  bullets: string[];
};

export type NumberedItem = { n: string; title: string; lead: string; body: string };

export type Step = { n: string; title: string; label: string; body: string };

export type EngagementModel = { title: string; body: string; bestFor: string };

export type PlatformItem = {
  name: string;
  tag: string;
  body: string;
  bullets: string[];
  href?: string;
  external?: boolean;
};

export type SolutionCard = {
  slug: string;
  group: string;
  name: string;
  summary: string;
  bullets: string[];
  /** Detail page, if any */
  href?: string;
};

export type SectionCaseStudy = {
  title: string;
  client?: string;
  industry: string;
  problem: string;
  approach: string;
  results: { label: string; value: string }[];
};

export type SectionContent = {
  key: SectionKey;
  basePath: string;
  name: string;
  shortName: string;
  /** CSS colour (variable) used as the section accent */
  accent: string;
  contactInterest: string;
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    chips: string[];
    visualTitle: string;
    visualRows: { label: string; value: string; tone: "ok" | "info" | "warn" }[];
  };
  stats: Stat[];
  whyFails: { eyebrow: string; title: string; sub: string; items: NumberedItem[] };
  approach: { eyebrow: string; title: string; sub: string; pillars: Pillar[] };
  howWeWork: { title: string; intro: string; steps: Step[]; modelsTitle: string; models: EngagementModel[] };
  platforms: {
    title: string;
    intro: string;
    items: PlatformItem[];
    stackTitle: string;
    stack: { category: string; skills: string[] }[];
  };
  solutions: { title: string; intro: string; items: SolutionCard[] };
  caseStudies: { title: string; intro: string; items: SectionCaseStudy[] };
  faqs: FaqItem[];
  cta: { title: string; sub: string };
  seo: {
    home: { title: string; description: string };
    howWeWork: { title: string; description: string };
    platforms: { title: string; description: string };
    solutions: { title: string; description: string };
    caseStudies: { title: string; description: string };
    contact: { title: string; description: string };
  };
};

const bySlug = (slug: Service["slug"]) => services.find((s) => s.slug === slug)!;

const qeSolutionGroups: { group: string; slugs: Service["slug"][] }[] = [
  { group: "Quality Assurance", slugs: ["managed-qa", "functional-testing", "crowd-testing", "accessibility-uat"] },
  {
    group: "Quality Engineering",
    slugs: ["test-automation", "api-microservices", "production-monitoring", "professional-services"],
  },
  { group: "AI Quality", slugs: ["ai-quality", "testing-ai", "ai-in-testing"] },
  { group: "Talent", slugs: ["training"] },
];

const qeSolutions: SolutionCard[] = qeSolutionGroups.flatMap(({ group, slugs }) =>
  slugs.map((slug) => {
    const s = bySlug(slug);
    return {
      slug: s.slug,
      group,
      name: s.name,
      summary: s.summary,
      bullets: s.bullets.slice(0, 3),
      href: `/qe/solutions/${s.slug}`,
    };
  }),
);

export const qeSolutionSlugs = qeSolutionGroups.flatMap((g) => g.slugs);

const aiSolutions: SolutionCard[] = [
  ...technoElevate.aiHub.capabilities.map((c) => ({
    slug: c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    group: "AI Engineering",
    name: c.title,
    summary: c.description,
    bullets: [...c.pills],
    href: "link" in c && c.link ? "/qe/solutions/testing-ai" : undefined,
  })),
  ...technoElevate.services
    .filter((s) => !["AI & LLM Integration", "Agentic AI & Automation"].includes(s.title))
    .map((s) => ({
      slug: s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      group: "Application Engineering",
      name: s.title,
      summary: s.description,
      bullets: [...s.pills],
    })),
];

export const sections: Record<SectionKey, SectionContent> = {
  qe: {
    key: "qe",
    basePath: "/qe",
    name: "Quality Engineering",
    shortName: "QE / Testing",
    accent: "var(--accent)",
    contactInterest: "Quality Engineering & Testing",
    hero: {
      eyebrow: "Quality Engineering & Testing",
      headline: "Release faster.",
      headlineAccent: "Break nothing.",
      sub: "Managed QA, intelligent test automation and AI-augmented validation — owned end to end by India's leading quality engineering partner, trusted by 217+ enterprises across 14 industries.",
      chips: ["Managed QA & CoE", "Test automation", "Crowd testing", "AI-augmented testing"],
      visualTitle: "Release readiness",
      visualRows: [
        { label: "Regression suite", value: "Passed", tone: "ok" },
        { label: "API contracts", value: "Passed", tone: "ok" },
        { label: "Self-healed locators", value: "42 auto-fixed", tone: "info" },
        { label: "Production monitors", value: "Healthy", tone: "ok" },
      ],
    },
    stats: [
      { value: "217+", label: "Enterprise clients" },
      { value: "20M+", label: "Automated tests executed" },
      { value: "18", label: "Years of quality engineering" },
      { value: "3,200+", label: "Group professionals" },
    ],
    whyFails: {
      eyebrow: "Why most QA programmes stall",
      title: "The same problems. Every release.",
      sub: "It is rarely the tools. It is the operating model around them.",
      items: [
        {
          n: "01",
          title: "Automation that rots",
          lead: "Fast to build, slow to maintain.",
          body: "Suites grow brittle as the product changes, and maintenance quietly eats the savings automation promised. We design modular frameworks and apply AI-assisted self-healing to cut maintenance effort by up to 60%.",
        },
        {
          n: "02",
          title: "Defects found too late",
          lead: "Quality checked at the end, not built in.",
          body: "When testing starts after development, every defect is expensive. We shift quality left and wire gates into CI/CD so problems surface in hours, not at release sign-off.",
        },
        {
          n: "03",
          title: "Nobody owns the outcome",
          lead: "Effort is reported. Quality is not.",
          body: "Body-shopping gives you testers, not accountability. Our managed PODs and CoE models run on SLAs, KPIs and governance — we own the quality result, not just the headcount.",
        },
      ],
    },
    approach: {
      eyebrow: "The TestYantra approach",
      title: "Process, people, platform — and AI",
      sub: "A managed quality function that plugs into your delivery rhythm and improves every sprint.",
      pillars: [
        {
          label: "Process",
          title: "Quality gates built into delivery",
          body: "Independent verification, risk-based scope and shift-left practices aligned to your CI/CD — with traceability your auditors can follow.",
          bullets: ["IV&V and QA maturity audits", "Shift-left, continuous testing", "Release gates with measurable KPIs"],
        },
        {
          label: "People",
          title: "A bench you do not have to hire",
          body: "3,200+ professionals across the group and a 600k+ academy pipeline mean capacity ramps up or down without recruitment cycles.",
          bullets: ["Managed POD and CoE teams", "Onshore, nearshore, offshore mix", "QSpiders-trained talent pipeline"],
        },
        {
          label: "Platform",
          title: "Frameworks and tooling you own",
          body: "Reusable automation frameworks, FireFlink scriptless automation and a vendor-neutral toolchain integrated with Jira, CI/CD and observability.",
          bullets: ["Playwright, Selenium, Cypress, Appium", "FireFlink AI scriptless automation", "Datadog, Dynatrace, New Relic integrations"],
        },
        {
          label: "AI",
          title: "AI in testing — and testing the AI",
          body: "Two lanes in one practice: use AI to make QE faster, and validate AI systems for drift, bias and LLM safety before production.",
          bullets: ["Self-healing and agentic test automation", "LLM, RAG and model validation", "Framework migration with AI assistance"],
        },
      ],
    },
    howWeWork: {
      title: "How we work",
      intro:
        "The same five steps on every engagement — discovery before delivery, and measurable outcomes before we call it done.",
      steps: [
        {
          n: "01",
          title: "Assess",
          label: "Where you are",
          body: "A QA maturity review of process, tooling, coverage and release risk — an independent baseline, not a sales deck.",
        },
        {
          n: "02",
          title: "Design",
          label: "What good looks like",
          body: "Test strategy, framework architecture, environments and KPIs agreed up front, mapped to your release cadence and compliance needs.",
        },
        {
          n: "03",
          title: "Build",
          label: "Assets you keep",
          body: "Automation suites, service virtualisation, test data and dashboards built on reusable accelerators — documented and owned by you.",
        },
        {
          n: "04",
          title: "Run",
          label: "Accountable delivery",
          body: "Managed PODs or a QE Centre of Excellence execute against SLAs, with continuous testing in your pipeline and production monitoring after release.",
        },
        {
          n: "05",
          title: "Improve",
          label: "Compounding gains",
          body: "Metrics-driven optimisation, AI-assisted maintenance reduction and, where you prefer, build-operate-transfer to your internal team.",
        },
      ],
      modelsTitle: "Engagement models",
      models: [
        {
          title: "Managed POD / CoE",
          body: "A dedicated, SLA-driven quality team or Centre of Excellence that owns testing for your product line.",
          bestFor: "Ongoing programmes · predictable quality",
        },
        {
          title: "Project as a service",
          body: "Fixed-scope engagements — automation build, migration, performance or accessibility audit — with clear acceptance criteria.",
          bestFor: "Defined outcomes · outcome-based SOW",
        },
        {
          title: "Professional services",
          body: "Specialists who plug into your teams for QE leadership, framework design and toolchain integration.",
          bestFor: "Targeted expertise · fast ramp-up",
        },
        {
          title: "Build · operate · transfer",
          body: "We stand up your QE capability, run it to maturity, then transfer people, process and tooling to you.",
          bestFor: "Internal capability building",
        },
      ],
    },
    platforms: {
      title: "Platforms & accelerators",
      intro:
        "Our delivery runs on a vendor-neutral toolchain, the FireFlink AI automation platform and a real-device crowd network — so you are never locked into a single tool.",
      items: [
        {
          name: "FireFlink",
          tag: "AI scriptless test automation",
          body: "A next-generation platform that uses NLP, AI and predictive analytics to automate web, mobile, API and enterprise applications without writing code.",
          bullets: ["Natural-language test authoring", "Web, mobile, API and SAP / Salesforce", "Up to 4x faster automation"],
          href: "https://www.fireflink.com/",
          external: true,
        },
        {
          name: "Crowd testing network",
          tag: "Real devices, real conditions",
          body: "On-demand testers across devices, networks and locales to validate what labs cannot reproduce — before your users find it.",
          bullets: ["400+ device-OS combinations", "Exploratory testing with structured findings", "Geo-fenced payment and checkout validation"],
          href: "/qe/solutions/crowd-testing",
        },
        {
          name: "QE toolchain & integrations",
          tag: "Vendor-neutral by design",
          body: "Frameworks and observability integrations wired into your pipelines, issue trackers and incident workflows.",
          bullets: ["Playwright, Selenium, Cypress, Appium", "Jira, TestRail, Zephyr, Xray", "Datadog, Dynatrace, New Relic, Grafana"],
        },
      ],
      stackTitle: "Tools we work with",
      stack: [
        { category: "Automation", skills: ["Playwright", "Selenium", "Cypress", "Appium", "JUnit", "TestNG"] },
        { category: "API & contracts", skills: ["Postman", "RestAssured", "Pact", "WireMock", "Kafka"] },
        { category: "Management", skills: ["Jira", "TestRail", "Zephyr", "Xray", "Qase", "Confluence"] },
        { category: "Observability", skills: ["Datadog", "Dynatrace", "New Relic", "Splunk", "Grafana", "PagerDuty"] },
        { category: "AI quality", skills: ["DeepEval", "Ragas", "Guardrails AI", "LlamaGuard", "LangChain"] },
        { category: "Accessibility", skills: ["JAWS", "NVDA", "VoiceOver", "Axe DevTools"] },
      ],
    },
    solutions: {
      title: "Quality engineering solutions",
      intro: "From managed QA to AI validation — pick a capability or let us assemble the full programme.",
      items: qeSolutions,
    },
    caseStudies: {
      title: "Case studies",
      intro: "Quality engineering outcomes from banking, media, healthcare, fintech and retail programmes.",
      items: caseStudies.map((c) => ({ ...c })),
    },
    faqs: homepageFaqs,
    cta: {
      title: "Let's make your next release your most confident one",
      sub: "Tell us about your product and release cadence. A quality engineering lead will respond within one business day.",
    },
    seo: {
      home: {
        title: "Quality Engineering & Software Testing Services | TestYantra",
        description:
          "Managed QA, test automation, crowd testing and AI-augmented quality engineering from TestYantra — 217+ clients, 18 years, 14 industries. Offshore delivery from India.",
      },
      howWeWork: {
        title: "How We Work — Quality Engineering",
        description:
          "Our five-step quality engineering model — assess, design, build, run, improve — with managed POD, CoE, project and build-operate-transfer engagements.",
      },
      platforms: {
        title: "Quality Engineering Platforms & Tools",
        description:
          "FireFlink AI scriptless automation, crowd testing network and a vendor-neutral QE toolchain used by TestYantra teams.",
      },
      solutions: {
        title: "Quality Engineering Solutions",
        description:
          "Managed QA, functional and E2E testing, test automation, API testing, crowd testing, accessibility, production monitoring and AI quality engineering.",
      },
      caseStudies: {
        title: "Quality Engineering Case Studies",
        description:
          "How TestYantra improved release speed, defect leakage and automation coverage for banking, media, healthcare, fintech and retail clients.",
      },
      contact: {
        title: "Talk to Quality Engineering",
        description: "Book a discovery call with TestYantra's quality engineering team. Response within one business day.",
      },
    },
  },

  ai: {
    key: "ai",
    basePath: "/ai",
    name: "Application Engineering & AI",
    shortName: "Application Engineering & AI",
    accent: "var(--indigo)",
    contactInterest: "Application Engineering & AI",
    hero: {
      eyebrow: "Application Engineering & AI",
      headline: "AI and applications",
      headlineAccent: "engineered for production.",
      sub: "Generative AI, agentic workflows and cloud-native applications — designed, built and scaled by 900+ engineers, with quality guardrails from day one.",
      chips: ["Generative AI & RAG", "Agentic automation", "Cloud-native apps", "Data platforms"],
      visualTitle: "AI delivery pipeline",
      visualRows: [
        { label: "Data & context layer", value: "Connected", tone: "ok" },
        { label: "RAG + agents", value: "In build", tone: "info" },
        { label: "Validation gate", value: "Bias · drift · LLM safety", tone: "ok" },
        { label: "Production rollout", value: "Staged", tone: "info" },
      ],
    },
    stats: [
      { value: "900+", label: "Engineers in the bench" },
      { value: "50+", label: "Technology stacks" },
      { value: "48hr", label: "Typical shortlist turnaround" },
      { value: "CMMI 3", label: "Delivery maturity" },
    ],
    whyFails: {
      eyebrow: "Why enterprise AI stalls",
      title: "It is not the models. It is everything around them.",
      sub: "Most AI programmes struggle for the same three reasons.",
      items: [
        {
          n: "01",
          title: "Stuck in pilot",
          lead: "The demo works. Production is a different job.",
          body: "Production needs fault-tolerant pipelines, governed data and real integrations. We engineer AI as software — architecture-first, CI/CD-ready and built to scale beyond the proof of concept.",
        },
        {
          n: "02",
          title: "Intelligence without context",
          lead: "Everyone has the same models.",
          body: "Answers are only as good as the context behind them. We build retrieval pipelines, vector search and data platforms that ground models in your own documents, systems and rules, with cited sources.",
        },
        {
          n: "03",
          title: "Shipped without assurance",
          lead: "No one validated it before go-live.",
          body: "AI that has not been tested for bias, drift, hallucination and prompt injection is a liability. Every build can pass through independent TestYantra AI validation before it reaches users.",
        },
      ],
    },
    approach: {
      eyebrow: "The engineering approach",
      title: "Architecture, squads, platforms — and assurance",
      sub: "Build and validate under one roof, with no hand-offs between engineering and QA.",
      pillars: [
        {
          label: "Architecture",
          title: "Architecture-first delivery",
          body: "Clean architecture, agile methods and CMMI Level 3 practices from the first sprint — so what you build is maintainable at scale.",
          bullets: ["Discovery and solution architecture", "CMMI Level 3 governance", "Cloud-native, API-first design"],
        },
        {
          label: "Squads",
          title: "The right team, quickly",
          body: "Dedicated cross-functional squads or individual specialists from a 900+ engineer bench and the QSpiders and JSpiders academy pipeline.",
          bullets: ["Managed squads and project delivery", "Staff augmentation and build-your-team", "Try-then-scale engagements"],
        },
        {
          label: "Platforms",
          title: "Modern AI and data stack",
          body: "LLMs, vector databases, agent frameworks and data platforms on AWS, Azure and GCP — selected for your constraints, not our defaults.",
          bullets: ["LLMs, RAG and semantic search", "LangGraph, CrewAI, MCP agents", "Snowflake, Kafka, MLOps"],
        },
        {
          label: "Assurance",
          title: "Validated before it ships",
          body: "Embedded TestYantra quality engineering — regression, automation, model validation and LLM safety — across every release.",
          bullets: ["Model and LLM validation", "Embedded QE in every squad", "Production monitoring and drift checks"],
        },
      ],
    },
    howWeWork: {
      title: "How we work",
      intro: "From use-case discovery to production rollout — one accountable team, with validation built into the path.",
      steps: [
        {
          n: "01",
          title: "Discover",
          label: "Start with a high-value problem",
          body: "Workshops to identify use cases, map data and systems, and define the measurable outcome before any build begins.",
        },
        {
          n: "02",
          title: "Architect",
          label: "Design for production",
          body: "Solution architecture, data and context strategy, security and integration design — agreed before the first sprint.",
        },
        {
          n: "03",
          title: "Build",
          label: "Squad-based delivery",
          body: "A cross-functional squad builds in agile sprints with demos every cycle, CI/CD from day one and reusable components.",
        },
        {
          n: "04",
          title: "Validate",
          label: "Independent assurance",
          body: "Functional, performance, security and AI-specific validation — bias, drift, hallucination and prompt-injection testing — before go-live.",
        },
        {
          n: "05",
          title: "Operate & scale",
          label: "Beyond launch",
          body: "Monitoring, tuning and roadmap delivery, with the option to transfer the team, tooling and knowledge to your organisation.",
        },
      ],
      modelsTitle: "Delivery models",
      models: technoElevate.deliveryModels.map((m) => ({
        title: m.title,
        body: m.description,
        bestFor: m.bestFor,
      })),
    },
    platforms: {
      title: "Platforms & capabilities",
      intro:
        "An AI engineering practice, a modern application stack and a deep engineering bench — assembled around your problem.",
      items: [
        {
          name: "AI Hub",
          tag: "Enterprise AI practice",
          body: "Production-grade RAG, ML scoring, agentic workflows, computer vision and NLP — built with the same rigour as our core engineering and validated by TestYantra AI.",
          bullets: ["Generative AI & RAG", "Agentic AI & automation", "ML, computer vision and NLP"],
          href: "/ai/solutions",
        },
        {
          name: "Talent platform",
          tag: "900+ engineers, on demand",
          body: "Adopt individual specialists, dedicated squads or a custom-built team from the bench and the academy pipeline — then scale without re-recruiting.",
          bullets: ["48hr typical shortlist", "50+ stacks covered", "Try-then-scale engagements"],
          href: "/ai/contact?interest=talent",
        },
        {
          name: "Embedded quality",
          tag: "Build and validate under one roof",
          body: "TestYantra quality engineering embedded in every squad — regression, automation and AI validation without a second vendor.",
          bullets: ["No build-to-QA hand-off", "AI validation for regulated rollouts", "Linked to the Quality Engineering practice"],
          href: "/qe",
        },
      ],
      stackTitle: "Technology bench",
      stack: technoElevate.talentPlatform.techBench
        .filter((b) => ["Frontend & Web", "Backend & APIs", "Mobile", "Cloud & DevOps", "Data & AI", "Enterprise"].includes(b.category))
        .map((b) => ({ category: b.category, skills: [...b.skills] })),
    },
    solutions: {
      title: "AI and application engineering solutions",
      intro: "Lead with AI where it creates value, backed by the application and data engineering that makes it work.",
      items: aiSolutions,
    },
    caseStudies: {
      title: "Case studies",
      intro: "Product engineering and AI delivery for banking, automotive and legal-tech platforms.",
      items: technoElevate.teCaseStudies.map((c) => ({
        title: c.title,
        client: c.client,
        industry: c.industry,
        problem: c.problem,
        approach: c.approach,
        results: [...c.results],
      })),
    },
    faqs: [
      {
        question: "What does the Application Engineering & AI practice do?",
        answer:
          "We design, build and scale cloud-native web, mobile, data and enterprise AI systems — generative AI and RAG, agentic workflows, ML platforms, computer vision and NLP — with embedded TestYantra quality engineering and CMMI Level 3 delivery practices.",
      },
      {
        question: "Can we hire engineers or a full squad instead of a managed project?",
        answer:
          "Yes. You can adopt individual specialists, a dedicated cross-functional squad or a custom team from our 900+ engineer bench, typically with a shortlist in about 48 hours, and start with a small trial before scaling.",
      },
      {
        question: "How do you make sure AI systems are safe to release?",
        answer:
          "Every AI build can be validated by TestYantra AI before go-live — model accuracy, drift, bias, hallucination and prompt-injection testing — with production monitoring afterwards.",
      },
      {
        question: "How is this related to the Quality Engineering practice?",
        answer:
          "They are two service lines of the same group. Application Engineering & AI builds software and AI; Quality Engineering validates it. You can engage either on its own or both together with no hand-offs.",
      },
    ],
    cta: {
      title: "Let's build the next version of your product — with AI inside",
      sub: "Share your use case, stack and timeline. An engineering lead will respond within one business day.",
    },
    seo: {
      home: {
        title: "Application Engineering & AI Services | TestYantra",
        description:
          "Generative AI, RAG, agentic automation and cloud-native application engineering — 900+ engineers with embedded quality assurance from TestYantra.",
      },
      howWeWork: {
        title: "How We Work — Application Engineering & AI",
        description:
          "Discover, architect, build, validate and operate — our delivery model for AI and application engineering, with managed squads, project delivery and build-operate-transfer.",
      },
      platforms: {
        title: "AI & Application Engineering Platforms",
        description:
          "The AI Hub, talent platform and technology bench behind TestYantra's Application Engineering & AI practice.",
      },
      solutions: {
        title: "AI & Application Engineering Solutions",
        description:
          "Generative AI and RAG, agentic AI, ML and data platforms, computer vision, NLP, cloud, mobile and enterprise integration.",
      },
      caseStudies: {
        title: "Application Engineering & AI Case Studies",
        description:
          "Product engineering and AI delivery for Kotak, CARS24 and LegalDST with embedded TestYantra validation.",
      },
      contact: {
        title: "Talk to Application Engineering & AI",
        description: "Book a discovery call with TestYantra's AI and application engineering team. Response within one business day.",
      },
    },
  },
};

export const sectionKeys: SectionKey[] = ["qe", "ai"];

export function getSection(key: SectionKey): SectionContent {
  return sections[key];
}
