export type Stat = {
  label: string;
  value: string;
};

export type ServiceSlug =
  | "managed-qa"
  | "crowd-testing"
  | "professional-services"
  | "training"
  | "ai-quality"
  | "development";

export type Service = {
  slug: ServiceSlug;
  name: string;
  summary: string;
  bullets: string[];
  outcomes: string[];
};

export type Location = {
  country: string;
  city: string;
  addressLines: string[];
  phone?: string;
  unit?: string;
};

export type BusinessUnit = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  external: boolean;
  email?: string;
  icon: string;
  accent: string;
  stats?: { value: string; label: string }[];
  highlights?: string[];
};

export type OutcomeMetric = {
  key:
    | "timeToCompetency"
    | "completionRate"
    | "proficiencyLift"
    | "internalMobility"
    | "managerConfidence";
  label: string;
  unit: "weeks" | "percent" | "index";
  baseline: number;
  target: number;
  description: string;
};

export type CaseStudy = {
  title: string;
  industry: string;
  problem: string;
  approach: string;
  results: { label: string; value: string }[];
};

export type RoiDefaults = {
  learners: number;
  currentWeeks: number;
  targetWeeks: number;
  costPerLearnerPerWeek: number;
};

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  useCases: string[];
  icon: string;
};

export const brand = {
  name: "TestYantra",
  legalName: "Test Yantra Software Solutions Pvt Ltd.",
  tagline: "Quality Engineering Redefined",
  emailPrimary: "contactus@testyantra.com",
  emailSolutions: "solutions@testyantraglobal.com",
  emailAlt: "info@testyantra.com",
  phoneIndia: "+91 9742490958",
  linkedIn: "https://www.linkedin.com/company/test-yantra-software-solutions",
} as const;

/** Canonical stats from content deck — used site-wide */
export const stats: Stat[] = [
  { value: "217+", label: "Clients worldwide" },
  { value: "18", label: "Years of excellence" },
  { value: "3,200+", label: "Professionals" },
  { value: "6", label: "Global locations" },
  { value: "14", label: "Industries served" },
  { value: "600k+", label: "Certified trainees" },
];

export const businessUnits: BusinessUnit[] = [
  {
    id: "testyantra",
    name: "TestYantra",
    tagline: "Quality Engineering & AI Testing",
    description:
      "India's leading quality engineering partner — managed QA, automation, crowd testing, and AI-augmented validation for global enterprises.",
    href: "/",
    external: false,
    icon: "🧪",
    accent: "var(--accent)",
    stats: [
      { value: "217+", label: "Clients" },
      { value: "18", label: "Years" },
    ],
    highlights: [
      "Managed QA & QE CoE",
      "TestYantra AI — two-lane capability",
      "14 industries, 6 global locations",
    ],
  },
  {
    id: "technoelevate",
    name: "TechnoElevate",
    tagline: "Software Development & Staffing",
    description:
      "Test Yantra's fast-growing development unit — custom engineering, managed delivery, and role-based staffing with 900+ skilled professionals.",
    href: "/development",
    external: false,
    email: "contactus@technoelevate.com",
    icon: "💻",
    accent: "var(--indigo)",
    stats: [
      { value: "900+", label: "Developers" },
      { value: "100%", label: "Quality-first" },
    ],
    highlights: [
      "Full-stack & cloud-native development",
      "Managed services & project delivery",
      "Role-based staffing & augmentation",
    ],
  },
  {
    id: "academy",
    name: "Academy",
    tagline: "QSpiders & JSpiders Training",
    description:
      "Training-as-a-service for job-ready capability — software testing via QSpiders (ISTQB® partner) and Java/J2EE via JSpiders.",
    href: "/academy",
    external: false,
    icon: "🎓",
    accent: "var(--teal)",
    stats: [
      { value: "600k+", label: "Trainees" },
      { value: "2", label: "Learning brands" },
    ],
    highlights: [
      "QSpiders — software testing paths",
      "JSpiders — Java/J2EE development",
      "Placement & enterprise cohorts",
    ],
  },
];

export const technoElevate = {
  name: "TechnoElevate",
  url: "https://technoelevate.com",
  email: "contactus@technoelevate.com",
  phone: "+91 9742490958",
  tagline: "Software Engineering at Scale",
  heroImage:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80&auto=format&fit=crop",
  aiHubImage:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80&auto=format&fit=crop",
  cloudImage:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop",
  description:
    "TechnoElevate is the product engineering studio within TestYantra — from LLM-powered applications to ML scoring engines and computer-vision systems, we design, build, and scale enterprise software with 900+ skilled professionals.",
  announcement:
    "AI-powered product engineering — LLM, RAG, and ML at enterprise scale, with TestYantra quality guardrails built in.",
  services: [
    {
      icon: "🌐",
      title: "Application Development",
      description:
        "Enterprise-grade web and mobile apps — modern frameworks, design systems, and CI/CD-first delivery from concept to production.",
      pills: ["React", "Java", "Mobile", "Design Systems"],
    },
    {
      icon: "☁️",
      title: "Cloud Transformation",
      description:
        "Migrate, modernize, and optimize on AWS, Azure, and GCP — cloud-native architecture with security and scalability at the core.",
      pills: ["AWS", "Azure", "GCP", "DevOps"],
    },
    {
      icon: "📈",
      title: "Data & Analytics",
      description:
        "Data pipelines, warehouses, and analytics platforms that turn raw data into decisions — built for volume, velocity, and trust.",
      pills: ["ETL", "BI", "Data Lakes", "Dashboards"],
    },
    {
      icon: "🔌",
      title: "Enterprise Integration & APIs",
      description:
        "Connect legacy and modern systems with robust API layers, middleware, and event-driven architectures that scale.",
      pills: ["REST", "GraphQL", "Microservices", "ESB"],
    },
    {
      icon: "🛠️",
      title: "Managed Services",
      description:
        "End-to-end ownership of delivery with defined SLAs, governance, and continuous improvement — imagine, engineer, and manage.",
      pills: ["Dedicated Teams", "SLA-driven", "24/7 Support"],
    },
    {
      icon: "👥",
      title: "Professional Staffing",
      description:
        "Role-based augmentation — developers, architects, data engineers, and AI specialists onshore, offshore, or hybrid.",
      pills: ["Staff Aug", "Team Extension", "Leadership"],
    },
    {
      icon: "🧪",
      title: "Quality-Integrated Delivery",
      description:
        "Every build inherits TestYantra QE — shift-left testing, automation, and production monitoring from sprint zero.",
      pills: ["Test Automation", "CI/CD", "Monitoring"],
    },
  ],
  aiHub: {
    eyebrow: "AI Hub",
    title: "Enterprise AI — from strategy to production",
    subtitle:
      "Production-grade RAG, ML scoring, agentic workflows, and computer vision — built with the same rigour as our core engineering work, validated by TestYantra AI.",
    capabilities: [
      {
        icon: "🧠",
        title: "Generative AI & RAG",
        description:
          "Enterprise LLMs and retrieval-augmented pipelines with verified citations, grounded answers, and guardrails for regulated industries.",
        pills: ["LLM", "RAG", "Vector DB", "Prompt Safety"],
      },
      {
        icon: "🤖",
        title: "Agentic AI & Automation",
        description:
          "Multi-agent systems that orchestrate complex workflows — human-in-the-loop validation, decision engines, and self-healing pipelines.",
        pills: ["Agents", "MCP", "Workflows", "Auto-heal"],
      },
      {
        icon: "📊",
        title: "ML & Data Platforms",
        description:
          "Scoring engines, recommendation systems, and ML ops pipelines — from credit risk models to predictive maintenance at scale.",
        pills: ["MLOps", "Scoring", "Feature Store", "Drift Monitor"],
      },
      {
        icon: "👁️",
        title: "Computer Vision",
        description:
          "Visual inspection, document OCR, and retail analytics — production CV systems with accuracy benchmarks and edge deployment.",
        pills: ["OCR", "Detection", "Classification", "Edge AI"],
      },
      {
        icon: "💬",
        title: "NLP & Conversational AI",
        description:
          "Chatbots, document intelligence, and semantic search — NLP solutions tuned to your domain vocabulary and compliance needs.",
        pills: ["Chatbots", "NER", "Summarization", "Search"],
      },
      {
        icon: "✅",
        title: "AI Validation (TestYantra)",
        description:
          "Model validation, bias auditing, drift monitoring, and LLM safety testing — ship AI with confidence via our QE practice.",
        pills: ["Model QA", "Bias Audit", "LLM Testing", "Compliance"],
        link: "/#ai-lane-01",
      },
    ],
    useCases: [
      { label: "Legal research", detail: "LLM-powered document analysis with cited sources" },
      { label: "Credit scoring", detail: "ML engines for lending and risk assessment" },
      { label: "Retail vision", detail: "Computer vision for inventory and shelf analytics" },
      { label: "Ops automation", detail: "Agentic workflows across enterprise back-office" },
    ],
  },
  values: [
    {
      title: "Value-based outcomes",
      description: "We investigate each case thoroughly and deliver as true partners — not just vendors.",
    },
    {
      title: "Domain + technology",
      description: "Proven methodologies combined with deep business domain knowledge across 14 industries.",
    },
    {
      title: "Agile & flat",
      description: "Small, credible teams — developers, strategists, and designers who stay close to your product.",
    },
    {
      title: "AI, not hype",
      description: "Production AI with guardrails — beyond proof-of-concept, into regulated enterprise deployment.",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/technoelevate/",
    twitter: "https://twitter.com/technoelevate",
    linkedIn: "https://www.linkedin.com/company/technoelevate",
  },
} as const;

export const services: Service[] = [
  {
    slug: "managed-qa",
    name: "Managed QA Services",
    summary:
      "Own quality end-to-end with a managed testing function built for scale, speed, and predictable outcomes.",
    bullets: [
      "Independent Verification & Validation (IV&V)",
      "Managed POD and Centre of Excellence models",
      "Offshore Development Centers (ODC) and dedicated labs",
      "Shift-left, continuous testing aligned to CI/CD",
    ],
    outcomes: [
      "Earlier defect discovery and fewer late-cycle surprises",
      "Higher release confidence with measurable quality gates",
      "Lower total cost of quality via automation and reuse",
    ],
  },
  {
    slug: "crowd-testing",
    name: "Crowd Testing",
    summary:
      "Test in the real world—devices, networks, locales, and user behaviors—before your users do.",
    bullets: [
      "Fast on-demand coverage across devices and geographies",
      "Exploratory testing with structured findings",
      "Usability signals + crash/defect reproduction steps",
    ],
    outcomes: [
      "Broader coverage without the lab overhead",
      "Quicker feedback loops for pre-release readiness",
      "Higher app store ratings and fewer production regressions",
    ],
  },
  {
    slug: "ai-quality",
    name: "AI Quality Engineering",
    summary:
      "Test AI systems with rigour and deploy AI to transform how you test — two lanes, one integrated practice.",
    bullets: [
      "Model validation, drift monitoring, and bias auditing",
      "LLM & Gen AI validation — RAG, hallucination, prompt injection",
      "AI-powered automation — Playwright, MCP, self-healing agents",
      "Framework migration and agentic test lifecycle management",
    ],
    outcomes: [
      "Responsible AI in production with measurable confidence",
      "Up to 60% reduction in automation maintenance overhead",
      "Future-proof QE teams with AI-native skills",
    ],
  },
  {
    slug: "development",
    name: "Development (TechnoElevate)",
    summary:
      "Quality-first software development through TechnoElevate — custom engineering, managed delivery, and staffing.",
    bullets: [
      "Full-stack and cloud-native application engineering",
      "Managed services with SLA-driven accountability",
      "Role-based staffing and team augmentation",
      "Integrated TestYantra QE on every engagement",
    ],
    outcomes: [
      "Faster time-to-market with built-in quality",
      "Flexible commercial models from project to managed ops",
      "Single partner for build and validate",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    summary:
      "Specialists who plug into your teams to accelerate delivery, quality engineering, and transformation initiatives.",
    bullets: [
      "Quality engineering leadership and test strategy",
      "Automation frameworks and toolchain integration",
      "Audit & advisory — QA maturity assessments",
      "Build, Operate & Transfer (BOT) models",
    ],
    outcomes: [
      "Faster execution with proven playbooks",
      "Reduced operational friction across teams",
      "Smoother releases with clearer accountability",
    ],
  },
  {
    slug: "training",
    name: "Training & Academy",
    summary:
      "Build job-ready capability through QSpiders, JSpiders, and enterprise cohort programmes.",
    bullets: [
      "Training-as-a-service for fresh job aspirants",
      "Software testing learning paths (QSpiders; ISTQB® partner)",
      "Java/J2EE development learning paths (JSpiders)",
      "AI training for talent — workforce enablement",
    ],
    outcomes: [
      "Stronger teams with modern QA and engineering practices",
      "Improved hiring readiness and ramp-up speed",
      "Consistent skill standards across distributed orgs",
    ],
  },
];

export const locations: Location[] = [
  {
    country: "India",
    city: "Bangalore — Global HQ",
    unit: "TestYantra",
    addressLines: [
      "#88, 3rd Floor, Brigade Chambers,",
      "Gandhi Bazaar Main Rd, Basavanagudi, Bangalore-560004, Karnataka, India",
    ],
    phone: "+91 9742490958",
  },
  {
    country: "India",
    city: "Bangalore — TechnoElevate",
    unit: "TechnoElevate",
    addressLines: [
      "Gopalan CoWorks, #92/9, 3rd Floor,",
      "Above Reliance Smart Bazaar, 80 feet Road, Kathriguppe, Bangalore 560085",
    ],
    phone: "+91 9742490958",
  },
  {
    country: "United States",
    city: "Plano, Texas",
    addressLines: ["5055 West Park Blvd, Suite 400, Plano, Texas 75093"],
    phone: "+1 (415) 429-3957",
  },
  {
    country: "United Kingdom",
    city: "Bromley",
    addressLines: ["1 Elmfield Park, Bromley - BR1 1LU, United Kingdom"],
    phone: "+44 02034115450",
  },
  {
    country: "Ireland",
    city: "Dublin",
    addressLines: ["The black church, St. Mary's place, Dublin, Ireland - D07 P4AX"],
    phone: "+353 19696560",
  },
  {
    country: "Netherlands",
    city: "Utrecht",
    addressLines: ["Vliegend Hertlaan 15-97, 3526 KT Utrecht, Netherlands"],
    phone: "+31308992386",
  },
  {
    country: "Canada",
    city: "Toronto, Ontario",
    addressLines: ["120, Adelaide Street West Suite 2500, Toronto, Ontario M5H 1T1, Canada"],
    phone: "+1 (639) 916-0279",
  },
  {
    country: "Australia",
    city: "Parramatta, NSW",
    addressLines: ["Suite 43, 37 Campbell Street, Parramatta, NSW 2150, Australia."],
    phone: "+61452595180",
  },
];

export const ldOutcomesPillars = [
  {
    title: "See readiness clearly",
    description:
      "Make skills visible across roles—identify gaps, validate proficiency, and focus investment where it changes outcomes.",
  },
  {
    title: "Build skills faster",
    description:
      "Accelerate time-to-competency with structured cohorts, practice-first learning, and adaptive reinforcement.",
  },
  {
    title: "Put skills to work",
    description:
      "Translate learning into deployment—align skill signals to projects, teams, and hiring pipelines.",
  },
  {
    title: "Prove impact",
    description:
      "Connect learning inputs to measurable improvements leaders can trust: ramp time, completion, proficiency, and mobility.",
  },
] as const;

export const ldOutcomeMetrics: OutcomeMetric[] = [
  {
    key: "timeToCompetency",
    label: "Time to competency",
    unit: "weeks",
    baseline: 12,
    target: 8,
    description: "Weeks for a learner to reach defined role readiness.",
  },
  {
    key: "completionRate",
    label: "Cohort completion",
    unit: "percent",
    baseline: 62,
    target: 82,
    description: "Completion rate for structured programs with assessments.",
  },
  {
    key: "proficiencyLift",
    label: "Proficiency lift",
    unit: "percent",
    baseline: 0,
    target: 22,
    description: "Post-program improvement measured via benchmarks.",
  },
  {
    key: "internalMobility",
    label: "Internal mobility",
    unit: "percent",
    baseline: 11,
    target: 16,
    description: "Share of roles filled by internal candidates after upskilling.",
  },
  {
    key: "managerConfidence",
    label: "Manager confidence",
    unit: "index",
    baseline: 64,
    target: 78,
    description: "Confidence index based on readiness signals and performance.",
  },
];

export const ldRoiDefaults: RoiDefaults = {
  learners: 250,
  currentWeeks: 12,
  targetWeeks: 8,
  costPerLearnerPerWeek: 450,
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Global retail bank — digital channel QA transformation",
    industry: "Banking & Finance",
    problem:
      "A Tier-1 bank needed to accelerate digital releases across 14 markets while maintaining regulatory compliance.",
    approach:
      "Centralised QA CoE with AI-augmented automation framework, managed POD delivery, and continuous production monitoring.",
    results: [
      { label: "Release cycles", value: "72% faster" },
      { label: "Defect leakage", value: "60% reduction" },
      { label: "Automation coverage", value: "3× increase" },
    ],
  },
  {
    title: "OTT streaming platform — continuous testing pipeline",
    industry: "Media & Telecom",
    problem:
      "Quality bottlenecks were slowing streaming platform releases and blocking daily deployment goals.",
    approach:
      "Embedded continuous testing into DevOps pipeline with service virtualisation and synthetic monitoring.",
    results: [
      { label: "Deploy frequency", value: "Daily" },
      { label: "Test automation", value: "85%" },
      { label: "Delivery cost", value: "40% lower" },
    ],
  },
  {
    title: "HealthTech platform — HIPAA-compliant quality engineering",
    industry: "Healthcare",
    problem:
      "Patient-facing apps needed robust quality and security testing without slowing an aggressive product roadmap.",
    approach:
      "Shift-left QA with accessibility testing, security validation, and production L2/L3 support.",
    results: [
      { label: "HIPAA compliance", value: "100%" },
      { label: "Regression speed", value: "55% faster" },
      { label: "Production defects", value: "Zero critical" },
    ],
  },
];

export const industries: Industry[] = [
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    icon: "🏦",
    summary: "Core banking, payments, open banking and regulatory compliance at scale.",
    useCases: ["Core banking modernization", "Payments reliability", "IV&V for regulated systems"],
  },
  {
    slug: "insurance",
    name: "Insurance",
    icon: "🛡️",
    summary: "Policy, claims, and digital channels under regulatory pressure.",
    useCases: ["Claims platform releases", "Regulatory testing", "Automation for policy lifecycle"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: "🏥",
    summary: "HIPAA-aware quality for EHR, medical devices, and clinical software.",
    useCases: ["HIPAA compliance testing", "Medical device validation", "Clinical trial systems"],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    icon: "🛒",
    summary: "Protect conversion and customer trust with peak-load readiness.",
    useCases: ["Checkout stability", "Performance at scale", "Omnichannel coverage"],
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    icon: "📡",
    summary: "Streaming, content, and broadcast experiences across devices and networks.",
    useCases: ["OTT streaming QA", "Playback compatibility", "CDN variability testing"],
  },
  {
    slug: "communications",
    name: "Telecom & Communications",
    icon: "📶",
    summary: "BSS/OSS, network functions, and integration reliability.",
    useCases: ["Network scenario validation", "BSS/OSS testing", "5G app reliability"],
  },
  {
    slug: "travel",
    name: "Travel & Hospitality",
    icon: "✈️",
    summary: "Booking flows and payments resilient through seasonality.",
    useCases: ["Search/booking flows", "GDS integration", "Peak readiness testing"],
  },
  {
    slug: "saas-hitech",
    name: "SaaS & Hi-Tech",
    icon: "⚙️",
    summary: "Velocity without chaos — CI/CD aligned testing for product teams.",
    useCases: ["Regression automation", "API contract testing", "DevOps quality gates"],
  },
  {
    slug: "consumer-electronics",
    name: "Consumer Electronics & IoT",
    icon: "📱",
    summary: "Device, firmware, and embedded testing in real-world environments.",
    useCases: ["IoT app testing", "Device compatibility", "Embedded systems QA"],
  },
  {
    slug: "fintech",
    name: "FinTech",
    icon: "💳",
    summary: "Digital payments, wallets, and lending platforms built for trust.",
    useCases: ["Payment gateway testing", "Fraud scenario validation", "Open banking APIs"],
  },
  {
    slug: "energy",
    name: "Energy & Utilities",
    icon: "⚡",
    summary: "Operational technology and customer portals with zero downtime tolerance.",
    useCases: ["SCADA integration", "Billing systems", "Smart meter platforms"],
  },
  {
    slug: "government",
    name: "Government & Public Sector",
    icon: "🏛️",
    summary: "Accessible, secure digital services for citizens at scale.",
    useCases: ["Accessibility compliance", "Security testing", "Citizen portal QA"],
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: "🚗",
    summary: "Connected vehicles, infotainment, and telematics quality.",
    useCases: ["Infotainment testing", "Telematics validation", "OTA update QA"],
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    icon: "📦",
    summary: "End-to-end supply chain software that cannot break under load.",
    useCases: ["WMS/TMS testing", "Route optimisation QA", "Integration testing"],
  },
];

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/development", label: "TechnoElevate" },
  { href: "/academy", label: "Academy" },
  { href: "/industries", label: "Industries" },
  { href: "/client-success", label: "Client Success" },
  { href: "/company/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
] as const;
