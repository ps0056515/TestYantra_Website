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
  | "development"
  | "functional-testing"
  | "accessibility-uat"
  | "test-automation"
  | "api-microservices"
  | "production-monitoring"
  | "testing-ai"
  | "ai-in-testing";

export type Service = {
  slug: ServiceSlug;
  name: string;
  summary: string;
  bullets: string[];
  outcomes: string[];
  description: string;
  technologies: string[];
  useCases: string[];
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
  tagline: "End-to-End Engineering",
  groupStatement:
    "The Test Yantra group — one partner from bench to production.",
  emailPrimary: "contactus@testyantra.com",
  emailSolutions: "solutions@testyantraglobal.com",
  emailAlt: "info@testyantra.com",
  phoneIndia: "+91 9742490958",
  linkedIn: "https://www.linkedin.com/company/test-yantra-software-solutions",
} as const;

/** Named enterprises — homepage & trust sections */
export type TrustedClient = {
  name: string;
  initial: string;
  color: string;
  logo?: string;
  /** Index in the sprite sheet (0-based, left to right) */
  spriteIndex: number;
};

/** Sprite configuration for the brand logos sprite image */
export const logoSprite = {
  src: "/images/brand_logos_sprite.png",
  /** Total number of logos in the sprite */
  count: 14,
  /** Each logo cell width in px (at 1x) */
  cellWidth: 200,
  /** Each logo cell height in px (at 1x) */
  cellHeight: 80,
} as const;

export const clientTrustStrip = {
  headline: "20,000,000+ automated tests and counting!",
  subline:
    "Trusted by 217+ enterprises across banking, fintech, media, retail, and SaaS — from QA to product engineering.",
} as const;

export const trustedClients: TrustedClient[] = [
  { name: "Kotak", initial: "K", color: "#ed1c24", spriteIndex: 0 },
  { name: "CARS24", initial: "C", color: "#0057b8", spriteIndex: 1 },
  { name: "LegalDST", initial: "L", color: "#1e3a5f", spriteIndex: 2 },
  { name: "Capgemini", initial: "C", color: "#0070ad", spriteIndex: 3 },
  { name: "Google", initial: "G", color: "#4285f4", spriteIndex: 4 },
  { name: "Kuku FM", initial: "K", color: "#e8401a", spriteIndex: 5 },
  { name: "Motilal Oswal", initial: "M", color: "#f9a825", spriteIndex: 6 },
  { name: "NCDEX", initial: "N", color: "#8b4513", spriteIndex: 7 },
  { name: "Nergy", initial: "N", color: "#2563eb", spriteIndex: 8 },
  { name: "nimbbl", initial: "n", color: "#111827", spriteIndex: 9 },
  { name: "Paymentz", initial: "P", color: "#0d9488", spriteIndex: 10 },
  { name: "QSS Technosoft", initial: "Q", color: "#dc2626", spriteIndex: 11 },
  { name: "Quilo", initial: "Q", color: "#0f172a", spriteIndex: 12 },
  { name: "Securden", initial: "S", color: "#16a34a", spriteIndex: 13 },
];

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
      "Talent platform — 900+ engineer pool",
      "Build squads from academy-trained bench",
    ],
  },
  {
    id: "fireflink",
    name: "FireFlink",
    tagline: "AI-Powered Scriptless Testing",
    description:
      "A next-generation scriptless test automation platform using NLP, AI, and predictive analytics to automate web, mobile, API, and enterprise applications.",
    href: "https://www.fireflink.com/",
    external: true,
    icon: "🔥",
    accent: "var(--accent)",
    stats: [
      { value: "4×", label: "Faster automation" },
      { value: "Zero", label: "Code required" },
    ],
    highlights: [
      "AI & NLP natural language test writing",
      "Scriptless automation for Web, Mobile, API",
      "Enterprise support for SAP, Salesforce",
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
    "TechnoElevate is the specialized product engineering studio within TestYantra. Partnering with global leaders like Kotak, CARS24, and LegalDST, our 900+ certified engineers design, build, and scale cloud-native web, mobile, data, and enterprise AI systems using CMMI Level 3 architecture-first practices.",
  announcement:
    "Partnering with Kotak, CARS24, and LegalDST to deliver custom product engineering with TestYantra quality guardrails built in.",
  services: [
    {
      icon: "🌐",
      title: "Application Development & Management",
      description:
        "Enterprise web platforms and design systems — built with React, Next.js, and Angular, delivering modern frontend architectures.",
      pills: ["React", "Next.js", "Angular", "PWAs"],
    },
    {
      icon: "📱",
      title: "Mobile Engineering",
      description:
        "High-performance native and cross-platform mobile apps for iOS and Android, leveraging Flutter, React Native, and Swift.",
      pills: ["React Native", "Flutter", "iOS / Swift", "Android / Kotlin"],
    },
    {
      icon: "☁️",
      title: "Cloud & Infrastructure",
      description:
        "AWS, GCP, and Azure cloud migrations, serverless container orchestration, and automated CI/CD pipelines under DevOps/SRE standards.",
      pills: ["AWS", "Azure", "GCP", "Kubernetes", "DevOps"],
    },
    {
      icon: "📈",
      title: "Data & Analytics",
      description:
        "Data lakes, warehouses, event streaming pipelines, and real-time business intelligence dashboards built for high throughput.",
      pills: ["Snowflake", "Apache Kafka", "Flink", "BI Dashboards"],
    },
    {
      icon: "🧠",
      title: "AI & LLM Integration",
      description:
        "Enterprise-grade LLM retrieval-augmented generation (RAG) pipelines, proprietary vector databases, and semantic search.",
      pills: ["LLMs", "RAG", "Vector DBs", "Semantic Search"],
    },
    {
      icon: "🤖",
      title: "Agentic AI & Automation",
      description:
        "Multi-agent workflow orchestration using LangGraph and CrewAI with automated document processing and decision flows.",
      pills: ["Agents", "LangGraph", "CrewAI", "Document AI"],
    },
    {
      icon: "🔌",
      title: "Enterprise Integration & APIs",
      description:
        "Building robust middleware systems and custom API connectors to sync legacy structures with modern SaaS platforms.",
      pills: ["REST", "GraphQL", "SAP", "HubSpot / Salesforce"],
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
  talentPlatform: {
    id: "talent-platform",
    eyebrow: "Staffing & Team Building",
    title: "Your talent platform — build teams from a trained bench",
    subtitle:
      "TechnoElevate is more than project delivery. Companies adopt engineers from our 900+ professional pool — or compose dedicated squads from bench-ready, academy-trained talent across every major technology stack.",
    poolStats: [
      { value: "900+", label: "Engineers in pool" },
      { value: "600k+", label: "Academy-trained pipeline" },
      { value: "50+", label: "Technology stacks" },
      { value: "48hr", label: "Typical shortlist turnaround" },
    ],
    engagementOptions: [
      {
        icon: "👤",
        title: "Individual specialists",
        description:
          "Add one or more engineers — developers, QA, DevOps, data, or AI — to your existing team with flexible duration and ramp time.",
        bestFor: "Gap-fill, niche skills, surge capacity",
      },
      {
        icon: "👥",
        title: "Dedicated squad",
        description:
          "A pre-formed cross-functional pod (e.g. 3 devs + 1 QA + 1 lead) working exclusively on your product, managed by TechnoElevate.",
        bestFor: "Product builds, long-running programs",
      },
      {
        icon: "🏗️",
        title: "Build your own team",
        description:
          "Pick roles from our bench — mix senior architects, mid-level developers, and fresh academy graduates — and we assemble your custom roster.",
        bestFor: "Startups and enterprises scaling fast",
      },
      {
        icon: "🎓",
        title: "Academy-to-bench pipeline",
        description:
          "Access QSpiders & JSpiders trained candidates — job-ready in software testing and Java/J2EE — vetted and onboarded through TechnoElevate.",
        bestFor: "High-volume hiring, graduate programs",
      },
      {
        icon: "🌍",
        title: "Global delivery mix",
        description:
          "Blend onshore, nearshore, and offshore resources from Test Yantra’s six locations — optimized for timezone coverage and cost.",
        bestFor: "Follow-the-sun, hybrid models",
      },
      {
        icon: "🔄",
        title: "Try-then-scale",
        description:
          "Start with a small bench trial (individual or mini-squad), evaluate fit and velocity, then scale the team without re-recruiting.",
        bestFor: "Risk reduction, proof before commit",
      },
    ],
    howItWorks: [
      { step: "01", title: "Share your stack & roles", detail: "Tell us technologies, seniority mix, team size, and timeline." },
      { step: "02", title: "Receive curated shortlists", detail: "Profiles from our pool and academy bench — matched to your requirements." },
      { step: "03", title: "Interview & select", detail: "You choose who joins; we handle contracts, onboarding, and IT setup." },
      { step: "04", title: "Embed & deliver", detail: "Resources join your tools, stand-ups, and culture — with TestYantra QE optional." },
      { step: "05", title: "Scale or rotate", detail: "Add capacity, swap roles, or convert to permanent hire as needs evolve." },
    ],
    techBench: [
      { category: "Frontend & Web", skills: ["React", "Next.js", "Angular", "Vue", "TypeScript", "PWAs"] },
      { category: "Backend & APIs", skills: ["Java", "Spring", "Node.js", "Python", ".NET", "Go", "GraphQL"] },
      { category: "Mobile", skills: ["iOS / Swift", "Android / Kotlin", "React Native", "Flutter"] },
      { category: "Cloud & DevOps", skills: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "CI/CD"] },
      { category: "Data & AI", skills: ["Snowflake", "Kafka", "Spark", "LLM / RAG", "ML", "Python"] },
      { category: "Quality & Testing", skills: ["Selenium", "Playwright", "API testing", "Performance", "Security"] },
      { category: "Enterprise", skills: ["SAP", "Salesforce", "Oracle", "ServiceNow", "Mainframe"] },
      { category: "Academy tracks", skills: ["Manual QA", "Automation QA", "Java / J2EE", "ISTQB® ready"] },
    ],
    academyNote:
      "Our 600k+ academy alumni feed a continuous bench of trained candidates — QSpiders for testing, JSpiders for Java development — assessed and deployment-ready through TechnoElevate.",
  },
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
    summary: "Own quality end-to-end with a managed testing function built for scale, speed, and predictable outcomes.",
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
    description: "Our Managed QA services provide global enterprises with end-to-end quality ownership. We handle the entire testing lifecycle, from initial QA strategy, resourcing, test design, and execution, through to release sign-off. Utilizing SLA-driven pod structures and dedicated Centre of Excellence (CoE) architectures, we optimize your QA spend, build robust traceability, and improve deployment predictability.",
    technologies: ["Jira", "Confluence", "TestRail", "HP ALM", "Zephyr", "Qase"],
    useCases: [
      "Enterprise ERP migration quality verification",
      "Continuous daily release cycles for global SaaS products",
      "Establishment of SLA-backed offshore QA centers"
    ]
  },
  {
    slug: "crowd-testing",
    name: "Crowd Testing",
    summary: "Test in the real world—devices, networks, locales, and user behaviors—before your users do.",
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
    description: "Leverage a distributed workforce of professional testers on-demand to validate your application under actual real-world conditions. Test across hundreds of unique device-OS combinations, active cellular networks, localized languages, and specific regional user profiles to identify edge cases, usability problems, and performance bottlenecks before your production users do.",
    technologies: ["Appium", "BrowserStack", "SauceLabs", "TestFlight", "Firebase Beta"],
    useCases: [
      "Geo-fenced payment flows and digital checkout testing",
      "Cross-device hardware/OS compatibility audits for mobile apps",
      "Multilingual localization verification for global user launches"
    ]
  },
  {
    slug: "ai-quality",
    name: "AI Quality Engineering",
    summary: "Test AI systems with rigour and deploy AI to transform how you test — two lanes, one integrated practice.",
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
    description: "Our integrated AI Quality Engineering practice covers two core dimensions: validating AI and machine learning systems for safety, bias, and correctness (Lane 01), and deploying intelligent AI agents to automate and optimize standard testing pipelines (Lane 02). We ensure your AI models perform reliably under heavy workload, maintain alignment, and run efficiently.",
    technologies: ["Python", "TensorFlow", "PyTorch", "MLflow", "LangChain", "OpenAI API"],
    useCases: [
      "RAG search pipeline accuracy and safety validation",
      "Bias audits and compliance checking for predictive models",
      "Self-healing Playwright automation scripts for dynamic UIs"
    ]
  },
  {
    slug: "development",
    name: "Development (TechnoElevate)",
    summary: "TechnoElevate is the product engineering studio within TestYantra — designing, building, and scaling software solutions at scale.",
    bullets: [
      "Application Development & Management (React, Next.js, PWAs)",
      "Mobile Engineering (Native iOS/Android, React Native, Flutter)",
      "Enterprise AI & LLM Integration (RAG, agentic workflows)",
      "Data Platforms & Analytics (Snowflake, Event pipelines, BI)",
      "Cloud Transformation & DevOps (AWS, Azure, GCP, Kubernetes)",
      "Enterprise middleware integrations (Stripe, HubSpot, SAP)",
    ],
    outcomes: [
      "Architecture-first engineering with CMMI Level 3 quality",
      "Accelerated delivery with embedded TestYantra validation",
      "Flexible engagement (scrum pods, managed projects, staffing)",
    ],
    description: "TechnoElevate is the specialized product engineering studio within TestYantra. Partnering with global enterprises, Kotak, CARS24, and LegalDST, TechnoElevate designs, builds, and scales modern software solutions. The studio combines architecture-first development, agile methodologies, CMMI Level 3 quality processes, and integrated quality engineering to deploy clean, high-performance web, mobile, cloud-native, and AI-enabled platforms.",
    technologies: ["React", "Next.js", "Angular", "iOS & Android", "React Native", "Flutter", "LLMs & RAG", "LangGraph", "Kubernetes", "Snowflake", "AWS / Azure / GCP"],
    useCases: [
      "BFSI automation and secure fintech portals",
      "Enterprise AI integration with cited RAG pipelines",
      "Greenfield product builds and legacy systems modernization",
      "Cloud-native migrations and high-scale Kubernetes deployments"
    ]
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    summary: "Specialists who plug into your teams to accelerate delivery, quality engineering, and transformation initiatives.",
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
    description: "Deploy highly qualified quality engineering specialists to accelerate your critical projects. From advisory consulting and maturity audits to building custom automation architectures, our experts integrate directly into your engineering loops to reduce technical debt and build scalable quality pipelines.",
    technologies: ["Agile/Scrum", "DevOps Consulting", "GitLab CI", "GitHub Actions", "SonarQube"],
    useCases: [
      "Systematic QA maturity and process audits for enterprise apps",
      "CI/CD release pipeline test automation setups",
      "Build, Operate & Transfer (BOT) framework scaling"
    ]
  },
  {
    slug: "training",
    name: "Training & Academy",
    summary: "Build job-ready capability through QSpiders, JSpiders, and enterprise cohort programmes.",
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
    description: "Accelerate workforce capabilities through QSpiders (ISTQB® partner) and JSpiders. We deliver tailored talent cohort programs, fresh graduate bootcamps, and continuous upskilling in modern engineering and AI testing practices, providing organizations with job-ready tech professionals.",
    technologies: ["ISTQB Syllabus", "Java/J2EE", "Python", "Manual Testing Core", "Automation Basics"],
    useCases: [
      "Onboarding fresh graduate cohorts for enterprise needs",
      "Continuous QA team upskilling on Playwright and AI frameworks",
      "Upskilling software developers in modern J2EE practices"
    ]
  },
  {
    slug: "functional-testing",
    name: "Functional & E2E Testing",
    summary: "Ensure every function, integration, and user journey operates exactly as intended across your entire system topology.",
    bullets: [
      "Functional & System Integration Testing (SIT)",
      "End-to-End (E2E) user journey validation",
      "Regression testing and impact analysis",
      "Cross-browser and cross-device validation"
    ],
    outcomes: [
      "Zero critical defects escaping to production",
      "Comprehensive test coverage across complex workflows",
      "Accelerated deployment readiness with high confidence"
    ],
    description: "Ensure complete correctness of system features and business workflows. We design comprehensive system integration and regression suites that validate critical user pathways across diverse browsers, devices, and network profiles, preventing regressions and safeguarding customer journeys.",
    technologies: ["Selenium", "Jira", "Xray", "Zephyr", "Postman", "Charles Proxy"],
    useCases: [
      "Core e-commerce checkout and billing pathway verification",
      "End-to-end transaction validations in secure banking apps",
      "Continuous regression validation for legacy system updates"
    ]
  },
  {
    slug: "accessibility-uat",
    name: "Accessibility & UAT",
    summary: "Inclusive digital products validated by real business stakeholders and compliance standards.",
    bullets: [
      "WCAG 2.1 / ADA compliance auditing and validation",
      "Screen reader, keyboard navigation, and color contrast audits",
      "User Acceptance Testing (UAT) governance and support",
      "Business process validation and operational readiness"
    ],
    outcomes: [
      "100% compliance with digital accessibility standards",
      "Stakeholder-approved releases with verified business rules",
      "Improved customer satisfaction and inclusive user experiences"
    ],
    description: "Build inclusive software products that comply with ADA and WCAG 2.1 digital accessibility standards. Our team executes screen reader, keyboard navigation, and contrast audits, alongside coordinating user acceptance testing to align application performance with actual business requirements.",
    technologies: ["JAWS", "NVDA", "VoiceOver", "Axe DevTools", "Color Contrast Analyzer"],
    useCases: [
      "Accessibility audit and WCAG compliance certification for government portals",
      "User Acceptance Testing coordination for healthcare applications",
      "Validation of keyboard-only control pathways in public portals"
    ]
  },
  {
    slug: "test-automation",
    name: "Test Automation Engineering",
    summary: "Build modular, high-speed, and low-maintenance test automation suites that run inside your CI/CD pipeline.",
    bullets: [
      "Playwright, Selenium, and Cypress custom framework design",
      "API and UI test automation integration",
      "CI/CD pipeline test execution and gating",
      "AI-augmented self-healing and smart test execution"
    ],
    outcomes: [
      "Up to 80% reduction in regression testing cycle time",
      "High-confidence release gates in CI/CD pipeline",
      "Significant decrease in test maintenance overhead"
    ],
    description: "Replace repetitive manual testing loops with high-speed automated validation suites. We design, deploy, and maintain custom automation frameworks that plug directly into your deployment pipelines, delivering immediate execution feedback and robust test gating.",
    technologies: ["Playwright", "Selenium", "Cypress", "Appium", "JUnit", "TestNG"],
    useCases: [
      "Automating deployment pipeline regression test gates",
      "Cross-platform automation framework consolidation for SaaS applications",
      "Automating end-to-end API data verification workflows"
    ]
  },
  {
    slug: "api-microservices",
    name: "API & Microservices Testing",
    summary: "Validate the integrity, contract reliability, and performance of your APIs and microservices mesh.",
    bullets: [
      "API contract testing and schema validation",
      "Integration testing of microservices and message queues",
      "Performance, load, and security testing of endpoints",
      "Mocking and service virtualization for parallel testing"
    ],
    outcomes: [
      "Robust integration reliability before UI integration",
      "Faster defect isolation at the service level",
      "Prevention of breaking changes across service updates"
    ],
    description: "Validate the functionality, contract integrity, and security of backend APIs and microservices architectures. We perform service contract verification and virtualize external systems, enabling developers to test updates independently and deploy safely.",
    technologies: ["Postman", "RestAssured", "Pact Contract Testing", "Swagger", "WireMock", "Kafka"],
    useCases: [
      "Contract validation for microservices and event queues",
      "Load and performance profiling for REST/GraphQL APIs",
      "Mocking third-party dependency APIs for test isolation"
    ]
  },
  {
    slug: "production-monitoring",
    name: "Production Monitoring & Observability",
    summary: "Proactive, continuous quality verification in production environments so issues are caught before users feel them.",
    bullets: [
      "Synthetic monitoring and scripted user journey checks",
      "Real User Monitoring (RUM) and error tracking",
      "Observability and APM integration (Datadog, Dynatrace, New Relic)",
      "L1/L2/L3 production quality support and incident triage"
    ],
    outcomes: [
      "Mean Time to Detect (MTTD) reduced to minutes",
      "Proactive issue resolution before customer impact",
      "Always-on validation of production user experience"
    ],
    description: "Ensure quality verification doesn't end at deployment. We configure continuous synthetic checks and user-monitoring telemetry, routing alerts to active incident triage centers to identify and resolve performance errors before they affect customers.",
    technologies: ["Datadog", "Dynatrace", "New Relic", "Splunk", "Grafana", "PagerDuty"],
    useCases: [
      "24/7 synthetic monitoring scripts for e-commerce checkout paths",
      "Core API transaction latency and error-rate monitoring",
      "Proactive alert routing and issue resolution playbook integration"
    ]
  },
  {
    slug: "testing-ai",
    name: "Testing the AI (Lane 01)",
    summary: "Rigorous validation of AI and machine learning systems for model accuracy, data drift, bias, and responsible output.",
    bullets: [
      "Model accuracy, precision, and recall validation",
      "Data drift and concept drift detection in production",
      "Bias auditing and compliance checking for regulated sectors",
      "LLM validation — RAG pipelines, hallucinations, safety gates"
    ],
    outcomes: [
      "Deploy AI models with verified accuracy and compliance",
      "Prevent silent model degradation and drift in production",
      "Mitigate ethical, legal, and operational AI risks"
    ],
    description: "Run advanced validation procedures for AI models and Generative AI pipelines. We evaluate systems for response hallucinations, bias, model drift, and safety vulnerabilities, ensuring predictable outputs and operational security.",
    technologies: ["LlamaGuard", "DeepEval", "Guardrails AI", "Ragas", "Pandas", "Scikit-Learn"],
    useCases: [
      "Hallucination rate auditing for LLM chatbots",
      "RAG response validity and prompt injection auditing",
      "Model precision verification and drift reporting for finance models"
    ]
  },
  {
    slug: "ai-in-testing",
    name: "AI in Testing (Lane 02)",
    summary: "Accelerate your quality operations by embedding AI, agentic automation, and LLM-assisted pipelines into the test lifecycle.",
    bullets: [
      "Agentic automation frameworks (Playwright + MCP)",
      "AI-assisted test generation and documentation",
      "Self-healing automation test suites",
      "AI-driven framework migrations from legacy stacks"
    ],
    outcomes: [
      "Up to 60% reduction in automation maintenance effort",
      "Faster stand-up of automated test suites",
      "Future-proof QA teams with AI-native skills"
    ],
    description: "Supercharge your test engineering efficiency by embedding Generative AI and automated agents. We implement self-healing code selectors, prompt-to-test-case generators, and automated logs triage systems, cutting test suite maintenance overhead.",
    technologies: ["GitHub Copilot", "Cursor AI", "Playwright + AI Agents", "LangChain Agents", "Prompt Engineering"],
    useCases: [
      "Self-healing UI element locator automated scripts",
      "AI-assisted test case description and data generation",
      "Automated testing suite migrations from legacy frameworks to modern stacks"
    ]
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
