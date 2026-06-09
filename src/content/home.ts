/** Homepage content sourced from TestYantra_Website_Content.pptx + group ecosystem */

import { technoElevate } from "./site";

export const hero = {
  eyebrow: "End-to-End Engineering",
  titleLine1: "Build Better.",
  titleLine2: "Ship with",
  titleHighlight: "Confidence.",
  subtitle:
    "AI-augmented engineering services that help enterprises build, validate, and launch software faster — from concept to production.",
  ctaPrimary: { label: "Explore Our Capabilities", href: "#pillars" },
  ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
} as const;

export const heroOfferLine = {
  label: "One partner across the lifecycle",
  pillars: ["Quality Engineering", "Product Development", "Talent Platform"] as const,
} as const;

export const heroStats = [
  { value: "217", suffix: "+", label: "Clients" },
  { value: "18", suffix: "", label: "Years" },
  { value: "3,200", suffix: "+", label: "Professionals" },
  { value: "6", suffix: "", label: "Global Locations" },
  { value: "14", suffix: "", label: "Industries" },
] as const;

export type PracticeArea = {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  color: "accent" | "teal" | "indigo" | "gold" | "violet";
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "qa",
    icon: "🛡️",
    title: "Quality Assurance",
    description:
      "End-to-end validation of software behaviour, user journeys, and business outcomes.",
    href: "#capabilities-qa",
    color: "accent",
  },
  {
    id: "qe",
    icon: "🧪",
    title: "Quality Engineering",
    description:
      "Shift-left engineering practices, automation, and performance built into the SDLC.",
    href: "#capabilities-qe",
    color: "teal",
  },
  {
    id: "ai-qe",
    icon: "🤖",
    title: "AI Quality Engineering",
    description:
      "Test AI systems and deploy AI to supercharge your testing operations.",
    href: "#ai",
    color: "indigo",
  },
  {
    id: "dev",
    icon: "💻",
    title: "Development",
    description:
      "Quality-first software development via TechnoElevate — aligned to your engineering standards and delivery cadence.",
    href: "/development",
    color: "gold",
  },
  {
    id: "devops",
    icon: "🚀",
    title: "DevOps",
    description:
      "CI/CD pipeline integration, release governance, and production observability.",
    href: "#capabilities-monitoring",
    color: "violet",
  },
];

export type ServiceCatalogueItem = {
  label: string;
  href: string;
};

export const serviceCatalogueIntro = {
  titleLine1: "Comprehensive. Specialized.",
  titleLine2: "From build to validation.",
  qaCta: { label: "Explore QA Services", href: "/services" },
  devCta: { label: "Explore TechnoElevate", href: "/development" },
} as const;

const qaCatalogueItems: ServiceCatalogueItem[] = [
  { label: "End-to-End Testing", href: "/services/functional-testing" },
  { label: "Test Automation Engineering", href: "/services/test-automation" },
  { label: "Load Testing & App Performance", href: "/services/functional-testing" },
  { label: "CX Testing", href: "/services/functional-testing" },
  { label: "Accessibility Testing", href: "/services/accessibility-uat" },
  { label: "API / Microservices Testing", href: "/services/api-microservices" },
  { label: "ETL / Data Warehouse Testing", href: "/services/managed-qa" },
  { label: "IoT Testing", href: "/services/managed-qa" },
  { label: "Package Application Testing", href: "/services/managed-qa" },
  { label: "Service Virtualisation", href: "/services/api-microservices" },
  { label: "UAT & Business Assurance", href: "/services/accessibility-uat" },
  { label: "Mobile App Testing", href: "/services/functional-testing" },
  { label: "Device & Embedded Testing", href: "/services/managed-qa" },
  { label: "Cloud Assurance", href: "/services/production-monitoring" },
];

const developmentCatalogueItems: ServiceCatalogueItem[] = [
  ...technoElevate.services.map((service) => ({
    label: service.title,
    href: "/development",
  })),
  {
    label: "Talent Platform & Team Building",
    href: "/development#talent-platform",
  },
];

export const serviceCatalogue = {
  qa: {
    label: "Quality Engineering",
    subtitle: "TestYantra — validation, automation, and AI-powered quality",
    items: qaCatalogueItems,
  },
  development: {
    label: "Product Development",
    subtitle: "TechnoElevate — engineering, cloud, AI, and dedicated teams",
    items: developmentCatalogueItems,
  },
} as const;

export type CapabilityGroup = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: { title: string; description: string }[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "capabilities-qa",
    eyebrow: "Capabilities",
    title: "Quality Assurance",
    intro:
      "Validate every dimension of your software — from functional correctness to user experience, accessibility, and data integrity.",
    items: [
      {
        title: "Functional, System & E2E Testing",
        description:
          "Full-coverage testing across user journeys, integrations, and system boundaries.",
      },
      {
        title: "UAT & Business Validation",
        description:
          "Stakeholder-aligned acceptance testing that confirms business rules behave as expected.",
      },
      {
        title: "Exploratory Testing",
        description:
          "Charter-driven investigation to uncover defects automated scripts miss.",
      },
      {
        title: "UX / UI Validation",
        description:
          "Cross-browser, cross-device validation of interfaces and user experience flows.",
      },
      {
        title: "Accessibility Testing",
        description:
          "WCAG 2.1 / ADA compliance testing for inclusive digital experiences.",
      },
      {
        title: "Data Assurance",
        description:
          "Data completeness, accuracy, and lineage validation across pipelines and systems.",
      },
      {
        title: "Load & Performance Testing",
        description:
          "Scalability benchmarks, stress tests, and bottleneck analysis under real-world load.",
      },
      {
        title: "IV&V — Independent Validation",
        description:
          "Objective, third-party verification of critical systems and regulated environments.",
      },
      {
        title: "Package & Enterprise App Assurance",
        description:
          "Specialised testing for SAP, Salesforce, Oracle, and other packaged platforms.",
      },
    ],
  },
  {
    id: "capabilities-qe",
    eyebrow: "Capabilities",
    title: "Quality Engineering",
    intro:
      "Embed quality into the engineering lifecycle — not as a gate, but as a built-in capability that accelerates delivery.",
    items: [
      {
        title: "API / Microservices Testing",
        description:
          "Contract, integration, and end-to-end API testing at every layer of your service mesh.",
      },
      {
        title: "Component & Unit Testing",
        description:
          "Developer-side quality gates that surface defects before code ever leaves the branch.",
      },
      {
        title: "Test Automation Engineering",
        description:
          "Playwright, Selenium, and custom framework builds — with IP-led accelerators for faster stand-up.",
      },
      {
        title: "Performance Engineering & SRE",
        description:
          "Reliability engineering, SLA monitoring, and load strategy across cloud-native architectures.",
      },
      {
        title: "Service Virtualisation",
        description:
          "Simulate dependent services to enable parallel testing in decoupled, distributed environments.",
      },
      {
        title: "Production Monitoring",
        description:
          "Synthetic monitors, real-user monitoring, and observability integrations for always-on quality.",
      },
    ],
  },
  {
    id: "capabilities-monitoring",
    eyebrow: "Capabilities",
    title: "Production Monitoring",
    intro:
      "Quality doesn't stop at release. We monitor production environments so your users never feel the gap.",
    items: [
      {
        title: "Synthetic Monitoring",
        description:
          "Proactive 24/7 scripted checks that simulate user journeys before customers encounter issues.",
      },
      {
        title: "Production Support — L1, L2, L3",
        description:
          "Tiered incident response from first-line triage through to root-cause analysis and resolution.",
      },
      {
        title: "Observability",
        description:
          "End-to-end tracing, log aggregation, and metric correlation across distributed systems.",
      },
      {
        title: "Incident Management",
        description:
          "Structured incident lifecycle from detection to post-mortem, aligned with your ITSM workflows.",
      },
      {
        title: "Real User Monitoring",
        description:
          "Capture actual user behaviour, performance, and errors in production in real time.",
      },
    ],
  },
];

export const teamModels = [
  {
    title: "Managed POD",
    description:
      "A self-contained, cross-functional quality team with defined scope, governance, and delivery SLAs — fully managed by TestYantra.",
  },
  {
    title: "Centre of Excellence (CoE)",
    description:
      "Build an internal QE CoE with our expertise, tooling blueprints, and leadership — anchored to your enterprise standards.",
  },
  {
    title: "Role-Based Staffing",
    description:
      "Precision placement of QA and QE professionals — manual testers, automation engineers, architects, or performance specialists.",
  },
  {
    title: "Global Delivery",
    description:
      "Onshore, offshore, and nearshore delivery combinations optimised for time zones, cost, and communication quality.",
  },
] as const;

export const deliveryModels = [
  {
    num: "01",
    title: "Managed Services / Teams",
    description:
      "Fully accountable quality operations with defined KPIs, reporting, and continuous improvement built in.",
  },
  {
    num: "02",
    title: "Project as a Service",
    description:
      "Fixed-scope, outcome-based engagements — TestYantra owns the delivery, you own the outcome.",
  },
  {
    num: "03",
    title: "Build, Operate & Transfer",
    description:
      "We stand up your QE capability, run it to maturity, then transfer knowledge and ownership to your team.",
  },
  {
    num: "04",
    title: "Co-Managed",
    description:
      "Shared model where TestYantra supplements and elevates your existing QA team with specialist skills and governance.",
  },
  {
    num: "05",
    title: "Crowd Services",
    description:
      "On-demand access to a global tester network for real-device coverage, UAT scale, and exploratory depth.",
  },
  {
    num: "06",
    title: "Audit & Advisory",
    description:
      "Independent QA maturity assessments, framework audits, and strategic recommendations from senior QE practitioners.",
  },
] as const;

export const aiOverview = {
  eyebrow: "TestYantra AI",
  title: "AI at the Centre of Quality.",
  subtitle:
    "Two distinct, high-value capabilities — testing AI systems with rigour, and deploying AI to transform how you test.",
  lanes: [
    {
      id: "lane-01",
      label: "Lane 01",
      title: "Testing the AI",
      description:
        "Validate your AI systems for model accuracy, data drift, bias, and responsible output — before your customers find out.",
      href: "#ai-lane-01",
    },
    {
      id: "lane-02",
      label: "Lane 02",
      title: "AI in Testing",
      description:
        "Augment your testing operations with AI-powered frameworks, agentic automation, and intelligent test lifecycle management.",
      href: "#ai-lane-02",
    },
  ],
} as const;

export const aiLane01 = {
  id: "ai-lane-01",
  eyebrow: "TestYantra AI · Lane 01",
  title: "Testing the AI",
  intro:
    "As AI systems proliferate, so does the cost of getting them wrong. We bring structured, independent validation to your models, agents, and AI-driven products.",
  items: [
    {
      tag: "Foundation",
      title: "Model Validation",
      description:
        "Evaluate model accuracy, precision, recall, and confidence thresholds against ground truth before production rollout.",
    },
    {
      tag: "Continuous",
      title: "Drift & Monitoring",
      description:
        "Detect data drift, concept drift, and performance degradation in live AI systems before they impact business outcomes.",
    },
    {
      tag: "Responsible AI",
      title: "Bias & Fairness Validation",
      description:
        "Audit model outputs for demographic bias, disparate impact, and fairness compliance across regulated use cases.",
    },
    {
      tag: "Gen AI",
      title: "LLM & Gen AI Validation",
      description:
        "Prompt injection testing, RAG pipeline validation, hallucination benchmarking, and output safety evaluation for generative AI systems.",
    },
  ],
} as const;

export const aiLane02 = {
  id: "ai-lane-02",
  eyebrow: "TestYantra AI · Lane 02",
  title: "AI in Testing",
  intro:
    "Intelligent automation. Agentic workflows. AI-trained talent. We embed AI into your testing operations to cut cycle time, increase coverage, and future-proof your QE capability.",
  items: [
    {
      title: "AI-Powered Framework",
      subtitle: "Playwright + MCP + Custom Agent",
      description:
        "Self-healing, context-aware test automation built on Playwright, Model Context Protocol, and TestYantra's proprietary agent layer — reducing maintenance overhead by up to 60%.",
    },
    {
      title: "Framework Migration",
      subtitle: "Legacy to Modern Stack",
      description:
        "AI-assisted migration from legacy automation frameworks (Selenium, UFT, Tosca) to modern, maintainable stacks — with zero loss of test coverage.",
    },
    {
      title: "Agentic Suite Integration",
      subtitle: "Full Lifecycle Automation",
      description:
        "Orchestrated AI agents that span requirements analysis, test design, execution, defect triage, and reporting — reducing human-in-loop effort across the test lifecycle.",
    },
    {
      title: "AI Training for Talent",
      subtitle: "Workforce Enablement",
      description:
        "Structured upskilling programmes that equip your QA teams to adopt AI-native tools, prompting techniques, and agentic workflows — closing the AI skills gap from within.",
    },
  ],
} as const;

export const ecosystemIntro = {
  eyebrow: "The TestYantra Group",
  title: "One ecosystem.\nFour engines of delivery.",
  subtitle:
    "From academy-trained talent to product engineering and quality validation — build, staff, test, and scale under a single trusted group. No handoffs between brands.",
} as const;

export const ctaBand = {
  line1: "Ready to build better",
  line2: "and ship with confidence?",
  button: "Start a Conversation →",
} as const;
