export type Stat = {
  label: string;
  value: string;
};

export type ServiceProcess = {
  step: number;
  title: string;
  description: string;
};

export type Service = {
  slug:
    | "managed-qa"
    | "crowd-testing"
    | "professional-services"
    | "training"
    | "test-automation"
    | "performance-engineering"
    | "security-testing"
    | "ai-testing"
    | "devops-cicd"
    | "application-development"
    | "self-healing-automation"
    | "predictive-defect-analytics"
    | "visual-ai-accessibility"
    | "cloud-native-engineering"
    ;
  name: string;
  tagline: string;
  summary: string;
  bullets: string[];
  outcomes: string[];
  stats: { value: string; label: string }[];
  process: ServiceProcess[];
  tools: string[];
  industries: string[];
  relatedSlugs: string[];
};

export type Location = {
  country: string;
  city: string;
  addressLines: string[];
  phone?: string;
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
  industrySlug?: string;
  client?: string;
  problem: string;
  approach: string;
  results: { label: string; value: string }[];
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
  services?: string[];
};

export type RoiDefaults = {
  learners: number;
  currentWeeks: number;
  targetWeeks: number;
  costPerLearnerPerWeek: number;
};

export type SubVertical = {
  name: string;
  description: string;
  offerings: string[];
};

export type Industry = {
  slug:
    | "banking-finance"
    | "insurance"
    | "retail-ecommerce"
    | "media-entertainment"
    | "communications"
    | "travel"
    | "consumer-electronics";
  name: string;
  summary: string;
  detail: string;
  useCases: string[];
  challenges: string[];
  contactSlug: string;
  subVerticals: SubVertical[];
  stats: { label: string; value: string }[];
  caseStudyIndex?: number;
};

export const brand = {
  name: "Test Yantra",
  legalName: "Test Yantra Software Solutions Pvt Ltd.",
  emailPrimary: "contactus@testyantra.com",
  emailSolutions: "solutions@testyantraglobal.com",
  emailAlt: "info@testyantra.com",
  phoneIndia: "+91 9742490958",
} as const;

export const stats: Stat[] = [
  { value: "13+", label: "Years of experience" },
  { value: "3,700", label: "Career testers" },
  { value: "360+", label: "Active clients" },
  { value: "6+", label: "Global locations" },
  { value: "7", label: "Industries served" },
  { value: "600k+", label: "Certified trainees" },
];

export const services: Service[] = [
  {
    slug: "managed-qa",
    name: "Managed QA Services",
    tagline: "Your quality function. Fully owned.",
    summary:
      "Own quality end-to-end with a managed testing function built for scale, speed, and predictable outcomes.",
    bullets: [
      "Independent Verification & Validation (IV&V)",
      "Project consulting: build/operate/transfer models",
      "Offshore Development Centers (ODC) and dedicated labs",
      "Shift-left, continuous testing aligned to CI/CD",
      "QA Centre of Excellence (CoE) setup and governance",
      "Dedicated testing teams with domain specialists",
    ],
    outcomes: [
      "Earlier defect discovery and fewer late-cycle surprises",
      "Higher release confidence with measurable quality gates",
      "Lower total cost of quality via automation and reuse",
    ],
    stats: [
      { value: "3×", label: "Avg automation uplift" },
      { value: "60%", label: "Defect leakage reduction" },
      { value: "40%", label: "QA cost saving" },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Assessment",
        description:
          "We audit your current testing landscape — coverage, tooling, team structure, and delivery cadence — to establish a baseline and identify the highest-leverage improvement areas.",
      },
      {
        step: 2,
        title: "QA Strategy & CoE Design",
        description:
          "We design the operating model: team structure, governance, toolchain, quality gates, and KPIs. Whether build/operate/transfer or fully managed, we align the model to your context.",
      },
      {
        step: 3,
        title: "Team Onboarding & Setup",
        description:
          "Domain-specialist engineers are onboarded, tooling is configured, and test environments are provisioned. We establish reporting cadences visible to both engineering and leadership.",
      },
      {
        step: 4,
        title: "Run, Measure & Optimise",
        description:
          "The managed service runs continuously, with monthly reviews tracking quality metrics, coverage trends, and delivery performance against agreed targets. We iterate and improve.",
      },
    ],
    tools: [
      "Jira",
      "Confluence",
      "Selenium",
      "Playwright",
      "Jenkins",
      "Azure DevOps",
      "Postman",
      "JMeter",
      "TestRail",
      "Zephyr",
    ],
    industries: [
      "Banking & Finance",
      "Insurance",
      "Healthcare",
      "Retail & E-Commerce",
      "Communications",
    ],
    relatedSlugs: ["test-automation", "professional-services", "devops-cicd"],
  },
  {
    slug: "crowd-testing",
    name: "Crowd Testing",
    tagline: "Real users. Real devices. Real world.",
    summary:
      "Test in the real world — devices, networks, locales, and user behaviours — before your users do.",
    bullets: [
      "On-demand coverage across 1,000+ real devices and geographies",
      "Exploratory testing with structured, reproducible findings",
      "Usability signals and crash/defect reproduction steps",
      "Localisation and accessibility testing across markets",
      "Beta testing programmes with structured tester panels",
      "Functional, compatibility, and UX testing in real environments",
    ],
    outcomes: [
      "Broader device and locale coverage without lab overhead",
      "Quicker feedback loops for pre-release readiness",
      "Higher app store ratings and fewer production regressions",
    ],
    stats: [
      { value: "1,000+", label: "Real devices in pool" },
      { value: "50+", label: "Countries covered" },
      { value: "24hr", label: "Turnaround for results" },
    ],
    process: [
      {
        step: 1,
        title: "Test Brief & Scope",
        description:
          "We work with you to define the device matrix, target geographies, user personas, and test objectives — ensuring the crowd is focused on what matters most.",
      },
      {
        step: 2,
        title: "Tester Selection & Briefing",
        description:
          "Testers are selected from our curated pool based on device, OS, location, and demographic criteria. They are briefed with structured test charters and clear acceptance criteria.",
      },
      {
        step: 3,
        title: "Parallel Execution",
        description:
          "Testing runs simultaneously across the selected device/locale combinations, with real-time defect submission, severity triage, and reproduction steps captured as evidence.",
      },
      {
        step: 4,
        title: "Results & Recommendations",
        description:
          "You receive a structured report with triage findings, severity ratings, reproduction videos, and prioritised recommendations — typically within 24 hours of test completion.",
      },
    ],
    tools: [
      "TestFlight",
      "Firebase App Distribution",
      "BrowserStack",
      "Real Device Labs",
      "Slack",
      "Jira",
      "Bugzilla",
    ],
    industries: [
      "Media & Entertainment",
      "Retail & E-Commerce",
      "Consumer Electronics",
      "Travel",
      "Communications",
    ],
    relatedSlugs: ["test-automation", "managed-qa", "performance-engineering"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    tagline: "Experts in. Outcomes out.",
    summary:
      "Specialists who plug into your teams to accelerate delivery, quality engineering, and transformation initiatives.",
    bullets: [
      "Quality engineering leadership and test strategy consulting",
      "Automation framework design and toolchain integration",
      "Delivery support across QA, DevOps, and operations",
      "QA transformation programme management",
      "Test architecture reviews and modernisation roadmaps",
      "Agile QA coaching and practice uplift",
    ],
    outcomes: [
      "Faster execution with proven playbooks and senior guidance",
      "Reduced operational friction across engineering and QA teams",
      "Smoother releases with clearer accountability and governance",
    ],
    stats: [
      { value: "360+", label: "Clients served" },
      { value: "13+", label: "Years of delivery" },
      { value: "50+", label: "Senior consultants" },
    ],
    process: [
      {
        step: 1,
        title: "Engagement Discovery",
        description:
          "We assess your current state — delivery velocity, quality posture, toolchain, team capability — and identify where specialist input will deliver the most value.",
      },
      {
        step: 2,
        title: "Engagement Design",
        description:
          "We propose a tailored engagement model: embedded consultant, advisory retainer, or project delivery. Scope, milestones, and success criteria are agreed upfront.",
      },
      {
        step: 3,
        title: "Delivery & Collaboration",
        description:
          "Our specialists work embedded within your teams — pairing with engineers, coaching QA leads, and driving the agreed programme of work with minimal overhead on your side.",
      },
      {
        step: 4,
        title: "Knowledge Transfer & Exit",
        description:
          "Engagements conclude with structured knowledge transfer — documentation, training sessions, and capability handover — so your teams own the outcomes long-term.",
      },
    ],
    tools: [
      "Jira",
      "Confluence",
      "GitHub",
      "Azure DevOps",
      "Miro",
      "Selenium",
      "Playwright",
      "Jenkins",
      "TestRail",
    ],
    industries: [
      "Banking & Finance",
      "Insurance",
      "Healthcare",
      "Retail & E-Commerce",
      "Communications",
      "Travel",
    ],
    relatedSlugs: ["managed-qa", "test-automation", "devops-cicd"],
  },
  {
    slug: "training",
    name: "Training & QA Academy",
    tagline: "Build the QA talent your organisation actually needs.",
    summary:
      "Build job-ready capability in software testing and development through structured, outcome-based learning paths designed for both aspirants and enterprise teams.",
    bullets: [
      "Software testing learning paths via QSpiders (ISTQB® accredited)",
      "Java/J2EE and full-stack development via JSpiders",
      "Training-as-a-service for fresh QA and development job aspirants",
      "Enterprise QA upskilling for existing engineering teams",
      "Placement assistance, hiring enablement, and cohort management",
      "Customised training programmes aligned to your tech stack",
    ],
    outcomes: [
      "Stronger teams with modern QA and engineering practices",
      "Improved hiring readiness and faster ramp-up speed",
      "Consistent skill standards across distributed organisations",
    ],
    stats: [
      { value: "600k+", label: "Certified trainees" },
      { value: "ISTQB®", label: "Accredited partner" },
      { value: "90%+", label: "Placement success rate" },
    ],
    process: [
      {
        step: 1,
        title: "Skill Assessment",
        description:
          "We assess current capability levels across target roles — manual testing, automation, performance, security — to identify gaps and personalise the learning journey.",
      },
      {
        step: 2,
        title: "Learning Path Design",
        description:
          "Cohort-based or individual learning paths are designed using our QSpiders and JSpiders curricula, adapted to your industry context and technology environment.",
      },
      {
        step: 3,
        title: "Structured Delivery",
        description:
          "Instructor-led sessions, hands-on labs, and project-based assignments run across defined cohort cycles, with assessments and progress tracking throughout.",
      },
      {
        step: 4,
        title: "Certification & Placement",
        description:
          "Trainees complete ISTQB® accredited assessments. Enterprise cohorts receive knowledge validation reports. Aspirants receive placement support and hiring enablement.",
      },
    ],
    tools: [
      "QSpiders LMS",
      "JSpiders Platform",
      "ISTQB® Curriculum",
      "Selenium",
      "Java",
      "Postman",
      "JIRA",
      "Git",
    ],
    industries: [
      "Banking & Finance",
      "Insurance",
      "Healthcare",
      "Retail & E-Commerce",
      "Communications",
      "Media & Entertainment",
    ],
    relatedSlugs: ["managed-qa", "professional-services", "test-automation"],
  },
  {
    slug: "test-automation",
    name: "Test Automation Engineering",
    tagline: "Scripts that run while your team sleeps.",
    summary:
      "Build scalable, maintainable automation frameworks that integrate deep into your CI/CD pipeline and deliver fast, reliable feedback at every stage of delivery.",
    bullets: [
      "UI, API, and mobile automation at enterprise scale",
      "Framework design: Selenium, Playwright, Cypress, Appium",
      "CI/CD pipeline integration with comprehensive test reporting",
      "Test data management and environment orchestration",
      "BDD/TDD approach with Cucumber and SpecFlow",
      "Automated accessibility and cross-browser validation",
    ],
    outcomes: [
      "Significantly faster regression cycles with broader coverage",
      "Reduced manual testing effort and human error risk",
      "Earlier defect detection through shift-left automation",
    ],
    stats: [
      { value: "80%+", label: "Regression automation" },
      { value: "5×", label: "Faster feedback cycles" },
      { value: "70%", label: "Manual effort reduction" },
    ],
    process: [
      {
        step: 1,
        title: "Framework Assessment",
        description:
          "We evaluate your application architecture, tech stack, and existing test assets to recommend the right automation framework — or audit and improve what you have.",
      },
      {
        step: 2,
        title: "Framework Design & Setup",
        description:
          "The automation framework is designed for maintainability and scale: layer separation, page object models, reusable utilities, reporting integration, and CI/CD hooks.",
      },
      {
        step: 3,
        title: "Script Development & Review",
        description:
          "Test scripts are developed iteratively, reviewed for quality, and baselined against agreed coverage targets. We prioritise critical journeys, then expand.",
      },
      {
        step: 4,
        title: "CI/CD Integration & Handover",
        description:
          "The suite is integrated into your pipeline with quality gates, failure alerting, and trend reporting. Your team is trained to extend and maintain the framework independently.",
      },
    ],
    tools: [
      "Selenium",
      "Playwright",
      "Cypress",
      "Appium",
      "RestAssured",
      "Postman",
      "Cucumber",
      "Jenkins",
      "GitHub Actions",
      "TestNG",
      "JUnit",
      "Allure",
    ],
    industries: [
      "Banking & Finance",
      "Retail & E-Commerce",
      "Healthcare",
      "Insurance",
      "Media & Entertainment",
      "Travel",
    ],
    relatedSlugs: ["devops-cicd", "ai-testing", "managed-qa"],
  },
  {
    slug: "performance-engineering",
    name: "Performance Engineering",
    tagline: "Break it before your users do.",
    summary:
      "Validate that your systems perform reliably under real-world conditions — peak load, stress scenarios, and sustained traffic — before your users ever find out.",
    bullets: [
      "Load, stress, soak, and scalability testing",
      "JMeter, Gatling, k6, and Locust tooling expertise",
      "Performance bottleneck identification and root-cause analysis",
      "Cloud-based performance lab setup and continuous monitoring",
      "APM integration for end-to-end transaction tracing",
      "Shift-left performance assertions in CI/CD pipelines",
    ],
    outcomes: [
      "Confidence that your systems scale without degradation",
      "Production performance issues surfaced and resolved before release",
      "Clear SLA and SLO validation with measurable benchmarks",
    ],
    stats: [
      { value: "4×", label: "Avg peak load capacity uplift" },
      { value: "70%", label: "Production incident reduction" },
      { value: "50%", label: "MTTR improvement" },
    ],
    process: [
      {
        step: 1,
        title: "Baseline & Scope",
        description:
          "We define performance budgets, SLA targets, and test scope — identifying critical user journeys, expected traffic patterns, and peak load scenarios relevant to your business.",
      },
      {
        step: 2,
        title: "Load Model Design",
        description:
          "Realistic load models are built reflecting your actual traffic patterns, peak multipliers, and geographic distribution. Virtual user scripts are validated against production behaviour.",
      },
      {
        step: 3,
        title: "Execution & Monitoring",
        description:
          "Tests are executed across defined scenarios with real-time monitoring via APM tools. Resource utilisation, response times, error rates, and throughput are captured at every load level.",
      },
      {
        step: 4,
        title: "Analysis & Remediation",
        description:
          "We deliver a detailed findings report with root-cause analysis, bottleneck identification, and prioritised remediation recommendations. We support fix verification with re-test cycles.",
      },
    ],
    tools: [
      "Apache JMeter",
      "Gatling",
      "k6",
      "Locust",
      "Grafana",
      "InfluxDB",
      "Dynatrace",
      "New Relic",
      "Datadog",
      "AWS CloudWatch",
      "Azure Monitor",
    ],
    industries: [
      "Retail & E-Commerce",
      "Banking & Finance",
      "Travel",
      "Media & Entertainment",
      "Communications",
    ],
    relatedSlugs: ["devops-cicd", "test-automation", "managed-qa"],
  },
  {
    slug: "security-testing",
    name: "Security Testing",
    tagline: "Find it before the attackers do.",
    summary:
      "Identify vulnerabilities before attackers do — comprehensive VAPT, penetration testing, and OWASP-compliant security assessments across your full application stack.",
    bullets: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "OWASP Top 10 and API security testing",
      "Secure code review and threat modelling",
      "Compliance testing for GDPR, PCI-DSS, and ISO 27001",
      "Mobile application security testing (iOS & Android)",
      "Supply chain and software composition analysis (SCA)",
    ],
    outcomes: [
      "Reduced exposure to known and emerging security vulnerabilities",
      "Regulatory and compliance confidence built into every release",
      "Secure SDLC practices embedded across your full delivery cycle",
    ],
    stats: [
      { value: "OWASP", label: "Top 10 certified testing" },
      { value: "PCI-DSS", label: "Compliance validation" },
      { value: "100%", label: "Critical CVE remediation rate" },
    ],
    process: [
      {
        step: 1,
        title: "Scoping & Threat Modelling",
        description:
          "We define the attack surface, identify high-risk components, and build a threat model aligned to your architecture — focusing effort on what matters most from a risk perspective.",
      },
      {
        step: 2,
        title: "Reconnaissance & Discovery",
        description:
          "Automated and manual discovery identifies exposed endpoints, authentication surfaces, third-party dependencies, and known vulnerability signatures across the target scope.",
      },
      {
        step: 3,
        title: "VAPT Execution",
        description:
          "Our certified security engineers conduct both automated scanning and manual penetration testing, exploiting identified vulnerabilities to demonstrate real-world risk and impact.",
      },
      {
        step: 4,
        title: "Reporting & Remediation Support",
        description:
          "A detailed report with CVSS-rated findings, evidence, and remediation guidance is delivered. We provide developer-facing fix guidance and verify remediation with re-test cycles.",
      },
    ],
    tools: [
      "Burp Suite Pro",
      "OWASP ZAP",
      "Nessus",
      "Metasploit",
      "Nmap",
      "Nikto",
      "SonarQube",
      "Snyk",
      "OWASP Dependency-Check",
      "Kali Linux",
    ],
    industries: [
      "Banking & Finance",
      "Healthcare",
      "Insurance",
      "Retail & E-Commerce",
      "Communications",
    ],
    relatedSlugs: ["managed-qa", "test-automation", "devops-cicd"],
  },
  {
    slug: "ai-testing",
    name: "AI-Powered Testing",
    tagline: "Test smarter. Cover more. Ship faster.",
    summary:
      "Apply generative AI and machine learning to transform the speed, coverage, and intelligence of your testing practice — from automated test generation to predictive defect analytics.",
    bullets: [
      "AI-powered test case generation from requirements and user stories",
      "Self-healing automation frameworks that adapt to UI changes",
      "Predictive defect analytics using machine learning models",
      "Visual AI testing and automated accessibility compliance checks",
      "LLM-assisted test review and coverage gap analysis",
      "AI-driven risk-based test prioritisation",
    ],
    outcomes: [
      "Up to 60% faster test coverage generation with LLM-powered suites",
      "Drastically reduced test maintenance through self-healing scripts",
      "Early risk identification before formal testing cycles begin",
    ],
    stats: [
      { value: "60%", label: "Faster test suite generation" },
      { value: "80%", label: "Self-healing resolution rate" },
      { value: "3×", label: "Coverage improvement" },
    ],
    process: [
      {
        step: 1,
        title: "AI Readiness Assessment",
        description:
          "We evaluate your current test assets, requirements artefacts, and automation maturity to identify where AI tooling will deliver the highest productivity and coverage uplift.",
      },
      {
        step: 2,
        title: "Toolchain Selection & Integration",
        description:
          "We select and configure the right AI testing tools for your stack — whether LLM-based generation, self-healing platforms, or visual AI engines — and integrate them with your existing pipeline.",
      },
      {
        step: 3,
        title: "Pilot & Validation",
        description:
          "AI-generated and AI-maintained tests run alongside your existing suite for a validation period. We measure generation quality, self-healing success rates, and coverage delta.",
      },
      {
        step: 4,
        title: "Scale & Continuous Improvement",
        description:
          "Validated AI practices are scaled across your suite. Models are fine-tuned on your domain, feedback loops are established, and the team is trained to extend and govern the AI-assisted practice.",
      },
    ],
    tools: [
      "Functionize",
      "Applitools",
      "Healenium",
      "Mabl",
      "Testim",
      "GitHub Copilot",
      "OpenAI API",
      "LangChain",
      "Playwright",
      "Selenium",
    ],
    industries: [
      "Banking & Finance",
      "Retail & E-Commerce",
      "Media & Entertainment",
      "Healthcare",
      "Insurance",
    ],
    relatedSlugs: ["test-automation", "devops-cicd", "managed-qa"],
  },
  {
    slug: "self-healing-automation",
    name: "Self-Healing Automation",
    tagline:
      "Reduce maintenance overhead with intelligent, adaptive automation.",
    summary:
      "Apply generative AI and machine learning to transform the speed, coverage, and intelligence of your testing practice — from automated test generation to predictive defect analytics.",
    bullets: [
      "AI-powered test case generation from requirements and user stories",
      "Self-healing automation frameworks that adapt to UI changes",
      "Predictive defect analytics using machine learning models",
      "Visual AI testing and automated accessibility compliance checks",
      "LLM-assisted test review and coverage gap analysis",
      "AI-driven risk-based test prioritisation",
    ],
    outcomes: [
      "Up to 60% faster test coverage generation with LLM-powered suites",
      "Drastically reduced test maintenance through self-healing scripts",
      "Early risk identification before formal testing cycles begin",
    ],
    stats: [
      { value: "60%", label: "Faster test suite generation" },
      { value: "80%", label: "Self-healing resolution rate" },
      { value: "3×", label: "Coverage improvement" },
    ],
    process: [
      {
        step: 1,
        title: "AI Readiness Assessment",
        description:
          "We evaluate your current test assets, requirements artefacts, and automation maturity to identify where AI tooling will deliver the highest productivity and coverage uplift.",
      },
      {
        step: 2,
        title: "Toolchain Selection & Integration",
        description:
          "We select and configure the right AI testing tools for your stack — whether LLM-based generation, self-healing platforms, or visual AI engines — and integrate them with your existing pipeline.",
      },
      {
        step: 3,
        title: "Pilot & Validation",
        description:
          "AI-generated and AI-maintained tests run alongside your existing suite for a validation period. We measure generation quality, self-healing success rates, and coverage delta.",
      },
      {
        step: 4,
        title: "Scale & Continuous Improvement",
        description:
          "Validated AI practices are scaled across your suite. Models are fine-tuned on your domain, feedback loops are established, and the team is trained to extend and govern the AI-assisted practice.",
      },
    ],
    tools: [
      "Functionize",
      "Applitools",
      "Healenium",
      "Mabl",
      "Testim",
      "GitHub Copilot",
      "OpenAI API",
      "LangChain",
      "Playwright",
      "Selenium",
    ],
    industries: [
      "Banking & Finance",
      "Retail & E-Commerce",
      "Media & Entertainment",
      "Healthcare",
      "Insurance",
    ],
    relatedSlugs: ["test-automation", "devops-cicd", "managed-qa"],
  },
  {
    slug: "predictive-defect-analytics",
    name: "Predictive Defect Analytics",
    tagline:
      "Reduce maintenance overhead with intelligent, adaptive automation.",
    summary:
      "Apply generative AI and machine learning to transform the speed, coverage, and intelligence of your testing practice — from automated test generation to predictive defect analytics.",
    bullets: [
      "AI-powered test case generation from requirements and user stories",
      "Self-healing automation frameworks that adapt to UI changes",
      "Predictive defect analytics using machine learning models",
      "Visual AI testing and automated accessibility compliance checks",
      "LLM-assisted test review and coverage gap analysis",
      "AI-driven risk-based test prioritisation",
    ],
    outcomes: [
      "Up to 60% faster test coverage generation with LLM-powered suites",
      "Drastically reduced test maintenance through self-healing scripts",
      "Early risk identification before formal testing cycles begin",
    ],
    stats: [
      { value: "60%", label: "Faster test suite generation" },
      { value: "80%", label: "Self-healing resolution rate" },
      { value: "3×", label: "Coverage improvement" },
    ],
    process: [
      {
        step: 1,
        title: "AI Readiness Assessment",
        description:
          "We evaluate your current test assets, requirements artefacts, and automation maturity to identify where AI tooling will deliver the highest productivity and coverage uplift.",
      },
      {
        step: 2,
        title: "Toolchain Selection & Integration",
        description:
          "We select and configure the right AI testing tools for your stack — whether LLM-based generation, self-healing platforms, or visual AI engines — and integrate them with your existing pipeline.",
      },
      {
        step: 3,
        title: "Pilot & Validation",
        description:
          "AI-generated and AI-maintained tests run alongside your existing suite for a validation period. We measure generation quality, self-healing success rates, and coverage delta.",
      },
      {
        step: 4,
        title: "Scale & Continuous Improvement",
        description:
          "Validated AI practices are scaled across your suite. Models are fine-tuned on your domain, feedback loops are established, and the team is trained to extend and govern the AI-assisted practice.",
      },
    ],
    tools: [
      "Functionize",
      "Applitools",
      "Healenium",
      "Mabl",
      "Testim",
      "GitHub Copilot",
      "OpenAI API",
      "LangChain",
      "Playwright",
      "Selenium",
    ],
    industries: [
      "Banking & Finance",
      "Retail & E-Commerce",
      "Media & Entertainment",
      "Healthcare",
      "Insurance",
    ],
    relatedSlugs: ["test-automation", "devops-cicd", "managed-qa"],
  },
  {
    slug: "devops-cicd",
    name: "DevOps & Continuous Testing",
    tagline: "Quality at the speed of delivery.",
    summary:
      "Embed quality gates and continuous testing into every stage of your CI/CD pipeline — from code commit to production deployment — for zero-risk, high-confidence releases.",
    bullets: [
      "CI/CD pipeline setup and optimisation (Jenkins, GitHub Actions, Azure DevOps, GitLab)",
      "Continuous testing integration and automated quality gates",
      "Infrastructure-as-code testing and environment validation",
      "Release automation and deployment orchestration",
      "Shift-left quality embedding from commit to production",
      "Pipeline observability, alerting, and quality trend dashboards",
    ],
    outcomes: [
      "Faster release cycles underpinned by automated quality gates",
      "Reduced deployment risk through continuous pipeline validation",
      "End-to-end observability across build, test, and release stages",
    ],
    stats: [
      { value: "5×", label: "Deploy frequency improvement" },
      { value: "<10 min", label: "Commit-to-feedback latency" },
      { value: "40%", label: "Change failure rate reduction" },
    ],
    process: [
      {
        step: 1,
        title: "Pipeline Audit",
        description:
          "We map your current CI/CD pipeline, identify quality gate gaps, and benchmark key metrics — deploy frequency, change failure rate, MTTR — against industry baselines.",
      },
      {
        step: 2,
        title: "Quality Gate Design",
        description:
          "We design a continuous testing architecture: which tests run at each stage, what thresholds gate progression, and how failures are reported and routed to the right owners.",
      },
      {
        step: 3,
        title: "Integration & Rollout",
        description:
          "Test suites, security scans, and performance assertions are integrated at the appropriate pipeline stages. Environments are provisioned as code, and the pipeline is hardened for reliability.",
      },
      {
        step: 4,
        title: "Optimise & Govern",
        description:
          "We monitor pipeline performance, reduce flakiness, and optimise test execution time. Dashboards provide real-time visibility for engineering and delivery leadership.",
      },
    ],
    tools: [
      "Jenkins",
      "GitHub Actions",
      "Azure DevOps",
      "GitLab CI",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana",
      "SonarQube",
      "Snyk",
    ],
    industries: [
      "Banking & Finance",
      "Retail & E-Commerce",
      "Media & Entertainment",
      "Healthcare",
      "Communications",
    ],
    relatedSlugs: ["test-automation", "performance-engineering", "ai-testing"],
  },
  {
    slug: "application-development",
    name: "Application Development",
    tagline: "Quality built in from commit one.",
    summary:
      "Quality-first full-stack engineering — web, mobile, APIs, and cloud-native applications — built with automated testing and architectural rigour embedded from sprint zero.",
    bullets: [
      "Full-stack web and mobile development (React, Node.js, Flutter, TypeScript)",
      "Cloud-native microservices and API design (REST, GraphQL, gRPC)",
      "Quality-first development: unit, integration, and contract tests from day one",
      "Code quality gates, architecture reviews, and technical debt management",
      "Accessibility-first UI development (WCAG 2.2 compliant)",
      "Performance-optimised front-end and back-end engineering",
    ],
    outcomes: [
      "Faster delivery cycles with fewer rework and defect-fix iterations",
      "Applications engineered to scale with quality built in from day one",
      "Reduced long-term technical debt through disciplined engineering practices",
    ],
    stats: [
      { value: "TDD", label: "Quality-first approach" },
      { value: "Full-stack", label: "Web, mobile & API" },
      { value: "Zero", label: "Unplanned technical debt" },
    ],
    process: [
      {
        step: 1,
        title: "Architecture & Planning",
        description:
          "We design the application architecture with scalability, testability, and security as first-class concerns — defining APIs, data models, and quality gates before the first sprint begins.",
      },
      {
        step: 2,
        title: "Sprint Development",
        description:
          "Development runs in two-week sprints with test-driven practices, automated unit and integration tests, and code review processes ensuring quality is built in rather than bolted on.",
      },
      {
        step: 3,
        title: "CI/CD & Quality Gates",
        description:
          "Every commit triggers the full quality pipeline: static analysis, unit tests, integration tests, security scanning, and performance assertions — with nothing reaching staging until all gates pass.",
      },
      {
        step: 4,
        title: "Release & Handover",
        description:
          "Releases are deployed through automated pipelines with blue/green or canary strategies. Full documentation, test coverage reports, and runbooks are handed over with the product.",
      },
    ],
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Flutter",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "GitHub Actions",
      "Playwright",
    ],
    industries: [
      "Banking & Finance",
      "Healthcare",
      "Retail & E-Commerce",
      "Insurance",
      "Media & Entertainment",
    ],
    relatedSlugs: ["devops-cicd", "test-automation", "managed-qa"],
  },
  {
    slug: "visual-ai-accessibility",
    name: "Visual AI & Accessibility",
    tagline: "Inclusive design powered by AI.",
    summary:
      "Quality-first full-stack engineering — web, mobile, APIs, and cloud-native applications — built with automated testing and architectural rigour embedded from sprint zero.",
    bullets: [
      "Full-stack web and mobile development (React, Node.js, Flutter, TypeScript)",
      "Cloud-native microservices and API design (REST, GraphQL, gRPC)",
      "Quality-first development: unit, integration, and contract tests from day one",
      "Code quality gates, architecture reviews, and technical debt management",
      "Accessibility-first UI development (WCAG 2.2 compliant)",
      "Performance-optimised front-end and back-end engineering",
    ],
    outcomes: [
      "Faster delivery cycles with fewer rework and defect-fix iterations",
      "Applications engineered to scale with quality built in from day one",
      "Reduced long-term technical debt through disciplined engineering practices",
    ],
    stats: [
      { value: "TDD", label: "Quality-first approach" },
      { value: "Full-stack", label: "Web, mobile & API" },
      { value: "Zero", label: "Unplanned technical debt" },
    ],
    process: [
      {
        step: 1,
        title: "Architecture & Planning",
        description:
          "We design the application architecture with scalability, testability, and security as first-class concerns — defining APIs, data models, and quality gates before the first sprint begins.",
      },
      {
        step: 2,
        title: "Sprint Development",
        description:
          "Development runs in two-week sprints with test-driven practices, automated unit and integration tests, and code review processes ensuring quality is built in rather than bolted on.",
      },
      {
        step: 3,
        title: "CI/CD & Quality Gates",
        description:
          "Every commit triggers the full quality pipeline: static analysis, unit tests, integration tests, security scanning, and performance assertions — with nothing reaching staging until all gates pass.",
      },
      {
        step: 4,
        title: "Release & Handover",
        description:
          "Releases are deployed through automated pipelines with blue/green or canary strategies. Full documentation, test coverage reports, and runbooks are handed over with the product.",
      },
    ],
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Flutter",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "GitHub Actions",
      "Playwright",
    ],
    industries: [
      "Banking & Finance",
      "Healthcare",
      "Retail & E-Commerce",
      "Insurance",
      "Media & Entertainment",
    ],
    relatedSlugs: ["devops-cicd", "test-automation", "managed-qa"],
  },
  {
    slug: "cloud-native-engineering",
    name: "Cloud-Native Engineering",
    tagline: "Scalable, resilient applications for the modern enterprise.",
    summary:
      "Quality-first full-stack engineering — web, mobile, APIs, and cloud-native applications — built with automated testing and architectural rigour embedded from sprint zero.",
    bullets: [
      "Full-stack web and mobile development (React, Node.js, Flutter, TypeScript)",
      "Cloud-native microservices and API design (REST, GraphQL, gRPC)",
      "Quality-first development: unit, integration, and contract tests from day one",
      "Code quality gates, architecture reviews, and technical debt management",
      "Accessibility-first UI development (WCAG 2.2 compliant)",
      "Performance-optimised front-end and back-end engineering",
    ],
    outcomes: [
      "Faster delivery cycles with fewer rework and defect-fix iterations",
      "Applications engineered to scale with quality built in from day one",
      "Reduced long-term technical debt through disciplined engineering practices",
    ],
    stats: [
      { value: "TDD", label: "Quality-first approach" },
      { value: "Full-stack", label: "Web, mobile & API" },
      { value: "Zero", label: "Unplanned technical debt" },
    ],
    process: [
      {
        step: 1,
        title: "Architecture & Planning",
        description:
          "We design the application architecture with scalability, testability, and security as first-class concerns — defining APIs, data models, and quality gates before the first sprint begins.",
      },
      {
        step: 2,
        title: "Sprint Development",
        description:
          "Development runs in two-week sprints with test-driven practices, automated unit and integration tests, and code review processes ensuring quality is built in rather than bolted on.",
      },
      {
        step: 3,
        title: "CI/CD & Quality Gates",
        description:
          "Every commit triggers the full quality pipeline: static analysis, unit tests, integration tests, security scanning, and performance assertions — with nothing reaching staging until all gates pass.",
      },
      {
        step: 4,
        title: "Release & Handover",
        description:
          "Releases are deployed through automated pipelines with blue/green or canary strategies. Full documentation, test coverage reports, and runbooks are handed over with the product.",
      },
    ],
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Flutter",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "GitHub Actions",
      "Playwright",
    ],
    industries: [
      "Banking & Finance",
      "Healthcare",
      "Retail & E-Commerce",
      "Insurance",
      "Media & Entertainment",
    ],
    relatedSlugs: ["devops-cicd", "test-automation", "managed-qa"],
  },
];

export const locations: Location[] = [
  {
    country: "India",
    city: "Bangalore (Global Delivery & Engineering Center)",
    addressLines: [
      "#88, 3rd Floor, Brigade Chambers,",
      "Gandhi Bazaar Main Rd, Basavanagudi, Bangalore-560004, Karnataka, India",
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
    addressLines: [
      "The black church, St. Mary’s place, Dublin, Ireland - D07 P4AX",
    ],
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
    addressLines: [
      "120, Adelaide Street West Suite 2500, Toronto, Ontario M5H 1T1, Canada",
    ],
    phone: "+1 (639) 916-0279",
  },
  {
    country: "Australia",
    city: "Parramatta, NSW",
    addressLines: [
      "Suite 43, 37 Campbell Street, Parramatta, NSW 2150, Australia.",
    ],
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
    description:
      "Share of roles filled by internal candidates after upskilling.",
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
    title: "Transforming QA for a Global Retail Bank's Digital Channels",
    industry: "Banking & Finance",
    industrySlug: "banking-finance",
    client: "Tier-1 Global Bank · 14 markets",
    problem:
      "A Tier-1 bank needed to accelerate digital releases while maintaining regulatory compliance across 14 markets, but fragmented QA practices created bottlenecks and inconsistent quality signals.",
    approach:
      "TestYantra built a centralised QA Centre of Excellence with an AI-augmented automation framework, embedding continuous testing and regulatory validation across all digital channels.",
    results: [
      { label: "Release cycle speed", value: "72% faster" },
      { label: "Defect leakage", value: "60% reduction" },
      { label: "Automation coverage", value: "3× increase" },
    ],
    quote:
      "TestYantra didn't just improve our test coverage — they transformed how our engineering teams think about quality. The CoE model gave us visibility and control we'd never had before.",
    quoteAuthor: "Head of Digital Engineering",
    quoteRole: "Tier-1 Retail Bank",
    services: ["Managed QA", "Test Automation", "Security Testing"],
  },
  {
    title: "Continuous Testing Pipeline for a Leading OTT Streaming Platform",
    industry: "Telecom & Media",
    industrySlug: "media-entertainment",
    client: "Global OTT Platform · 50+ device types",
    problem:
      "A global media company's manual testing cycles could not keep pace with weekly content updates across 50+ device types, creating quality bottlenecks and delaying releases.",
    approach:
      "TestYantra embedded continuous testing into the DevOps pipeline with a real-device farm integration, enabling daily deployments with automated regression across web, iOS, and Android.",
    results: [
      { label: "Deploy frequency", value: "Weekly → Daily" },
      { label: "Automation coverage", value: "85%" },
      { label: "QA cost reduction", value: "40%" },
    ],
    quote:
      "We went from fearing every release to shipping with confidence every single day. The TestYantra team understood our device fragmentation challenge in a way no other vendor had.",
    quoteAuthor: "VP Engineering",
    quoteRole: "Global Streaming Platform",
    services: [
      "Crowd Testing",
      "DevOps & Continuous Testing",
      "Performance Engineering",
    ],
  },
  {
    title: "HIPAA-Compliant Quality Engineering for a HealthTech Platform",
    industry: "Healthcare",
    industrySlug: "healthcare",
    client: "Digital Health Scale-up · US market",
    problem:
      "A fast-growing digital health company needed robust quality and security testing across patient-facing applications without slowing down their aggressive product roadmap.",
    approach:
      "TestYantra delivered a HIPAA-aligned testing framework covering functional, security, and performance testing with automated compliance checks embedded into every sprint.",
    results: [
      { label: "Regulatory compliance", value: "100% HIPAA" },
      { label: "Regression speed", value: "55% faster" },
      { label: "Critical production defects", value: "Zero" },
    ],
    quote:
      "When patient data is involved, there is no room for QA shortcuts. TestYantra understood that from day one and built a testing programme we could stand behind in any audit.",
    quoteAuthor: "CTO",
    quoteRole: "Digital Health Platform",
    services: ["Security Testing", "Managed QA", "Test Automation"],
  },
  {
    title: "E-Commerce Platform Stability During Peak Sale Events",
    industry: "Retail & E-Commerce",
    industrySlug: "retail-ecommerce",
    client: "Major Retail Brand · UK & EU markets",
    problem:
      "A major retail brand faced recurring checkout failures during peak sale events, costing millions in lost revenue and severely damaging customer trust.",
    approach:
      "TestYantra conducted comprehensive performance engineering, stress testing, and real-device crowd testing to identify bottlenecks, then embedded continuous performance monitoring into the release pipeline.",
    results: [
      { label: "Peak load capacity", value: "4× increase" },
      { label: "Checkout failure rate", value: "Eliminated" },
      { label: "Revenue protected per event", value: "$2M+" },
    ],
    quote:
      "After two consecutive peak events with zero incidents, our CFO asked what changed. The answer was TestYantra's performance engineering programme.",
    quoteAuthor: "Director of Platform Engineering",
    quoteRole: "UK Retail Brand",
    services: ["Performance Engineering", "Crowd Testing", "Test Automation"],
  },
  {
    title: "Insurance Claims Automation Across Multinational Operations",
    industry: "Insurance",
    industrySlug: "insurance",
    client: "Multinational Insurer · 8 jurisdictions",
    problem:
      "A multinational insurer's claims platform required regression testing across 8 jurisdictions with differing regulatory rules, consuming 60% of QA capacity on manual cycles that produced inconsistent results.",
    approach:
      "TestYantra redesigned the regression architecture with a data-driven automation framework that parameterised regulatory rules by jurisdiction, reducing the test suite from 4,000 manual cases to 1,200 automated scenarios with higher coverage.",
    results: [
      { label: "Manual QA effort", value: "65% reduction" },
      { label: "Regulatory defect detection", value: "2.4× improvement" },
      { label: "Release cycle", value: "3 weeks → 5 days" },
    ],
    quote:
      "We had accepted slow releases as a fact of life in insurance. TestYantra showed us that speed and compliance are not opposites — you just need the right automation strategy.",
    quoteAuthor: "Head of Claims Technology",
    quoteRole: "Multinational Insurer",
    services: ["Test Automation", "Managed QA", "Professional Services"],
  },
  {
    title: "5G Network Service Quality Validation for a Tier-1 Telco",
    industry: "Communications",
    industrySlug: "communications",
    client: "Tier-1 Telecommunications Provider",
    problem:
      "A Tier-1 telecom provider's 5G rollout programme required end-to-end quality validation across BSS/OSS integration points, service activation flows, and customer-facing portals — simultaneously across three markets.",
    approach:
      "TestYantra deployed a dedicated test engineering team specialised in BSS/OSS, building an automated integration test suite that ran nightly across all three market environments, with service quality dashboards visible to product and operations leadership.",
    results: [
      { label: "Integration defects pre-launch", value: "78% caught" },
      { label: "BSS regression cycle", value: "50% faster" },
      { label: "Post-launch incidents", value: "40% reduction" },
    ],
    quote:
      "Our previous vendor didn't understand telecom systems. TestYantra's team had worked in BSS/OSS environments before — that domain knowledge made all the difference in the speed of onboarding and the quality of coverage.",
    quoteAuthor: "Director of Network Product Engineering",
    quoteRole: "Tier-1 Telecom Provider",
    services: ["Managed QA", "Test Automation", "Performance Engineering"],
  },
];

export const industries: Industry[] = [
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    summary:
      "Reduce delivery risk while meeting security, compliance, and performance expectations.",
    detail:
      "Financial institutions operate under immense regulatory scrutiny and zero-tolerance expectations for downtime. TestYantra brings deep domain knowledge to core banking modernisation, payments infrastructure, and digital channel quality — combining rigorous compliance testing with AI-powered automation to accelerate releases without compromising regulatory confidence.",
    useCases: [
      "Core banking modernisation",
      "Payments reliability & PCI-DSS compliance",
      "Mobile banking quality at scale",
      "Open banking API validation",
      "Regulatory test automation",
    ],
    challenges: [
      "Strict regulatory and compliance requirements",
      "Complex integration landscapes across legacy and modern systems",
      "Zero tolerance for production defects in critical transaction flows",
    ],
    contactSlug: "banking-finance",
    caseStudyIndex: 0,
    stats: [
      { value: "40+", label: "BFSI clients" },
      { value: "72%", label: "Faster release cycles" },
      { value: "60%", label: "Defect leakage reduction" },
      { value: "3×", label: "Automation coverage uplift" },
    ],
    subVerticals: [
      {
        name: "Retail Banking",
        description:
          "Quality engineering for digital channels, mobile apps, and customer-facing journeys — ensuring flawless experiences for millions of account holders.",
        offerings: [
          "Digital banking regression automation",
          "Mobile banking app testing (iOS & Android)",
          "PSD2 & open banking API validation",
          "Accessibility testing for WCAG 2.2 compliance",
          "Customer onboarding flow end-to-end testing",
        ],
      },
      {
        name: "Corporate Banking",
        description:
          "Rigorous validation for trade finance, treasury, and cash management platforms where accuracy and reliability are non-negotiable.",
        offerings: [
          "Trade finance workflow testing & automation",
          "Treasury management system integration testing",
          "Regulatory compliance testing (Basel IV, MiFID II)",
          "Corporate portal and API integration QA",
          "Multi-entity, multi-currency transaction validation",
        ],
      },
      {
        name: "Payments",
        description:
          "Comprehensive QA for real-time payment rails, digital wallets, and fraud detection systems — ensuring every transaction clears with confidence.",
        offerings: [
          "Real-time payment platform testing (ISO 20022, SWIFT)",
          "PCI-DSS compliance and security testing",
          "Payment gateway reliability & failover testing",
          "Digital wallet and contactless payment validation",
          "Fraud detection rule and model regression testing",
        ],
      },
      {
        name: "FinTech & Digital Banking",
        description:
          "Fast-moving quality assurance for challenger banks, lending platforms, and embedded finance products that demand rapid iteration without compromise.",
        offerings: [
          "Agile QA embedded in sprint cycles",
          "API-first testing for open finance platforms",
          "BaaS integration and third-party connector testing",
          "Regulatory sandbox validation",
          "Automated compliance testing for FCA/RBI/OCC requirements",
        ],
      },
      {
        name: "Wealth & Investments",
        description:
          "Precision testing for portfolio management, advisory platforms, and trading systems where data accuracy and latency matter.",
        offerings: [
          "Portfolio management system regression testing",
          "Data integrity and calculation accuracy validation",
          "Low-latency trading platform performance testing",
          "Advisory workflow and robo-advisory QA",
          "Cross-border investment compliance testing",
        ],
      },
    ],
  },
  {
    slug: "insurance",
    name: "Insurance",
    summary:
      "Improve speed-to-market and confidence for claims, policy, and customer experience workflows.",
    detail:
      "Insurance platforms must balance rapid feature delivery with the accuracy and compliance requirements of policy, claims, and underwriting systems. TestYantra helps insurers automate complex regression suites, validate regulatory requirements, and test across the full policyholder lifecycle — reducing time-to-market while maintaining the quality standards the industry demands.",
    useCases: [
      "Claims platform releases and regression",
      "Regulatory and compliance testing",
      "Policy lifecycle automation",
      "Underwriting system validation",
      "Customer portal quality assurance",
    ],
    challenges: [
      "Long release cycles due to complex legacy integration",
      "High cost of manual regression across policy workflows",
      "Evolving regulatory requirements across multiple jurisdictions",
    ],
    contactSlug: "insurance",
    stats: [
      { value: "30+", label: "Insurance clients" },
      { value: "55%", label: "Regression cycle reduction" },
      { value: "80%", label: "Automation coverage achieved" },
      { value: "4×", label: "Faster compliance validation" },
    ],
    subVerticals: [
      {
        name: "General Insurance (P&C)",
        description:
          "End-to-end QA for property, casualty, and commercial insurance platforms spanning policy issuance, endorsements, and claims settlement.",
        offerings: [
          "Policy lifecycle automation testing",
          "Claims management system regression",
          "Underwriting rules engine validation",
          "Premium calculation accuracy testing",
          "Broker and agent portal QA",
        ],
      },
      {
        name: "Life & Health Insurance",
        description:
          "Precision testing for life, health, and benefits platforms where benefits accuracy, HIPAA compliance, and enrollment integrity are critical.",
        offerings: [
          "Benefits calculation and eligibility testing",
          "HIPAA / Solvency II compliance validation",
          "Enrollment workflow and open enrolment testing",
          "Claims adjudication automation testing",
          "Policy illustration and projection accuracy",
        ],
      },
      {
        name: "InsurTech Platforms",
        description:
          "Agile quality assurance for embedded insurance, parametric products, and API-driven insurance platforms competing on speed and customer experience.",
        offerings: [
          "API integration and partner connector testing",
          "Real-time pricing model validation",
          "Embedded insurance journey end-to-end testing",
          "Parametric trigger and payout logic testing",
          "Mobile-first insurance app QA",
        ],
      },
      {
        name: "Claims Management",
        description:
          "Thorough testing of claims intake, assessment, fraud detection, and settlement workflows to reduce cycle time and cost of claims.",
        offerings: [
          "First notice of loss (FNOL) workflow testing",
          "Claims fraud detection model regression",
          "Third-party administrator (TPA) integration testing",
          "Automated settlement and payment validation",
          "Subrogation workflow and reporting testing",
        ],
      },
      {
        name: "Reinsurance & Specialty",
        description:
          "Complex data flow validation and integration testing for reinsurance treaties, catastrophe modelling systems, and specialty risk platforms.",
        offerings: [
          "Treaty and facultative contract data validation",
          "Catastrophe modelling system integration testing",
          "Cedant and retrocessionaire data exchange testing",
          "Premium and loss bordereau accuracy validation",
          "Regulatory reporting for Lloyd's and global markets",
        ],
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    summary:
      "Protect conversion and customer trust with real-world coverage and peak-load readiness.",
    detail:
      "In retail, every second of downtime and every failed checkout is lost revenue. TestYantra partners with retail and e-commerce brands to build peak-readiness through performance engineering, real-device crowd testing, and continuous regression automation — so your platform performs when customers need it most.",
    useCases: [
      "Checkout and payment flow stability",
      "Peak-load performance testing",
      "Cross-device and cross-browser coverage",
      "Omnichannel integration testing",
      "Loyalty and promotion engine validation",
    ],
    challenges: [
      "Platform stability under peak traffic during sale events",
      "Broad device and browser coverage requirements",
      "Rapid deployment cycles for seasonal campaigns",
    ],
    contactSlug: "retail-ecommerce",
    caseStudyIndex: 3,
    stats: [
      { value: "4×", label: "Peak load capacity increase" },
      { value: "$2M+", label: "Revenue protected per event" },
      { value: "50+", label: "Retail & e-commerce clients" },
      { value: "100%", label: "Checkout failure elimination" },
    ],
    subVerticals: [
      {
        name: "Online Retail Platforms",
        description:
          "Comprehensive functional and performance QA for e-commerce storefronts, ensuring seamless browsing, search, and purchasing journeys.",
        offerings: [
          "End-to-end purchase journey automation",
          "Search and filter functionality testing",
          "Cross-browser and responsive design testing",
          "Product catalogue and pricing accuracy validation",
          "Continuous regression in agile sprints",
        ],
      },
      {
        name: "Omnichannel & In-Store Tech",
        description:
          "Integration testing across digital and physical channels — ensuring inventory, pricing, and customer data stay consistent across touchpoints.",
        offerings: [
          "POS system integration and regression testing",
          "Click-and-collect workflow end-to-end testing",
          "Inventory synchronisation validation",
          "In-store kiosk and digital signage QA",
          "Unified customer profile data accuracy testing",
        ],
      },
      {
        name: "Marketplace Platforms",
        description:
          "Quality assurance for multi-seller marketplace platforms, covering seller onboarding, catalogue management, and dispute resolution workflows.",
        offerings: [
          "Seller onboarding flow automation",
          "Multi-seller checkout and split payment testing",
          "Catalogue moderation and listing accuracy QA",
          "Commission and fee calculation validation",
          "Dispute and returns workflow testing",
        ],
      },
      {
        name: "Loyalty & Promotions",
        description:
          "Rigorous testing of loyalty engines, promotion rules, and campaign systems to ensure every points calculation, discount, and offer fires correctly.",
        offerings: [
          "Points accrual and redemption logic testing",
          "Promotion engine rule regression testing",
          "Campaign activation and audience segmentation QA",
          "Partner loyalty integration testing",
          "Fraud and abuse pattern detection validation",
        ],
      },
      {
        name: "Payments & Checkout",
        description:
          "Deep checkout flow and payment integration testing — the most revenue-critical part of any retail platform.",
        offerings: [
          "Multi-payment gateway integration testing",
          "Buy-now-pay-later (BNPL) provider testing",
          "3DS2 and strong customer authentication flows",
          "Checkout performance testing under peak load",
          "Abandoned cart and recovery flow validation",
        ],
      },
    ],
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    summary:
      "Ship streaming and content experiences with confidence across devices and networks.",
    detail:
      "Streaming and media platforms demand consistent quality across thousands of device configurations, network conditions, and content types. TestYantra enables media companies to accelerate delivery with continuous device-farm testing, playback compatibility validation, and localisation quality assurance — giving audiences the seamless experience they expect.",
    useCases: [
      "Playback compatibility across device matrix",
      "Localisation and subtitle accuracy testing",
      "CDN and network variability testing",
      "Live streaming quality validation",
      "Content ingestion and metadata testing",
    ],
    challenges: [
      "Enormous device and OS fragmentation",
      "Network-dependent playback quality across regions",
      "High content release velocity with tight QA windows",
    ],
    contactSlug: "media-entertainment",
    caseStudyIndex: 1,
    stats: [
      { value: "85%", label: "Automation coverage" },
      { value: "50+", label: "Device types validated" },
      { value: "40%", label: "QA cost reduction" },
      { value: "Daily", label: "Deployment cadence achieved" },
    ],
    subVerticals: [
      {
        name: "OTT & Streaming",
        description:
          "Comprehensive quality assurance for subscription and ad-supported streaming platforms across the full device matrix and network variability spectrum.",
        offerings: [
          "Video playback compatibility across 50+ device types",
          "Adaptive bitrate (ABR) streaming quality testing",
          "DRM protection and geo-restriction validation",
          "CDN performance and failover testing",
          "Subscription and paywall flow end-to-end testing",
        ],
      },
      {
        name: "Gaming",
        description:
          "Functional, performance, and compatibility testing for mobile, console, and PC games — ensuring immersive, bug-free player experiences at launch.",
        offerings: [
          "Game functionality and regression testing",
          "Cross-platform compatibility (iOS, Android, PC, console)",
          "Multiplayer and server load testing",
          "In-app purchase and monetisation flow QA",
          "Accessibility and localisation testing for global markets",
        ],
      },
      {
        name: "Broadcast & Live Events",
        description:
          "Quality validation for broadcast infrastructure, live streaming pipelines, and event production software under real-time pressure.",
        offerings: [
          "Live streaming pipeline end-to-end testing",
          "Broadcast automation system integration QA",
          "Low-latency delivery and sync testing",
          "Failover and disaster recovery validation",
          "Second-screen experience synchronisation testing",
        ],
      },
      {
        name: "Digital Publishing & Ad Tech",
        description:
          "Testing for digital publishing platforms, content management systems, and programmatic advertising stacks.",
        offerings: [
          "CMS workflow and publishing automation testing",
          "Ad server integration and impression tracking validation",
          "Paywall and subscriber experience QA",
          "SEO metadata and structured data accuracy testing",
          "Programmatic auction and bidder integration testing",
        ],
      },
      {
        name: "Music & Podcast Platforms",
        description:
          "Specialised QA for audio streaming, podcasting platforms, and music distribution systems across mobile, smart speaker, and in-car environments.",
        offerings: [
          "Audio streaming and offline playback testing",
          "Smart speaker and voice assistant integration QA",
          "Rights management and licensing data validation",
          "Creator upload and distribution workflow testing",
          "Cross-device playlist and library sync testing",
        ],
      },
    ],
  },
  {
    slug: "communications",
    name: "Communications",
    summary:
      "Validate complex integrations and reliability across network-dependent experiences.",
    detail:
      "Telecommunications providers face quality challenges that span complex BSS/OSS systems, network-dependent applications, and demanding customer experience standards. TestYantra brings specialised expertise in network scenario validation, integration testing, and reliability engineering — helping comms companies ship confidently at pace.",
    useCases: [
      "Network scenario and failover validation",
      "BSS/OSS system integration testing",
      "Application reliability and performance",
      "5G and VoIP service quality testing",
      "Customer portal and self-service app QA",
    ],
    challenges: [
      "Highly complex integration between BSS/OSS and network layers",
      "Real-world network condition simulation at scale",
      "Mission-critical reliability requirements",
    ],
    contactSlug: "communications",
    stats: [
      { value: "25+", label: "Telco & comms clients" },
      { value: "99.9%", label: "Reliability target achieved" },
      { value: "50%", label: "Faster BSS/OSS regression" },
      { value: "5G", label: "Network service validation" },
    ],
    subVerticals: [
      {
        name: "Mobile Network Operators",
        description:
          "End-to-end testing for MNO platforms spanning 4G/5G service activation, roaming, and the customer self-service experience.",
        offerings: [
          "5G service activation and provisioning testing",
          "Roaming and international service validation",
          "Network performance and coverage testing",
          "Prepaid/postpaid billing accuracy testing",
          "Self-service app and USSD workflow QA",
        ],
      },
      {
        name: "ISPs & Broadband",
        description:
          "Quality engineering for broadband provisioning, network management, and customer-facing service portals.",
        offerings: [
          "Service provisioning workflow automation testing",
          "Network management system (NMS) integration QA",
          "Broadband speed and QoS measurement testing",
          "Customer portal and self-service flow testing",
          "Modem and CPE firmware regression testing",
        ],
      },
      {
        name: "Enterprise Communications (UCaaS)",
        description:
          "Testing for unified communications, collaboration, and contact centre platforms where reliability directly impacts business productivity.",
        offerings: [
          "VoIP and video conferencing quality testing",
          "Contact centre platform regression and load testing",
          "Collaboration tool integration testing (Teams, Webex, Zoom)",
          "SIP trunk and telephony gateway validation",
          "Multi-tenant UCaaS provisioning testing",
        ],
      },
      {
        name: "BSS/OSS Systems",
        description:
          "Deep integration and regression testing for billing, mediation, order management, and network operations support systems.",
        offerings: [
          "BSS integration and billing system regression",
          "Order management and fulfilment workflow testing",
          "Revenue assurance and mediation testing",
          "OSS network inventory accuracy validation",
          "API gateway and system integration testing",
        ],
      },
      {
        name: "Satellite & IoT Connectivity",
        description:
          "Validation for satellite communication systems, IoT platform integrations, and M2M connectivity stacks.",
        offerings: [
          "Satellite link and latency performance testing",
          "IoT device provisioning and connectivity testing",
          "M2M protocol and message broker validation",
          "Edge computing integration testing",
          "SIM management and eSIM orchestration QA",
        ],
      },
    ],
  },
  {
    slug: "travel",
    name: "Travel",
    summary:
      "Ensure booking flows and payments remain resilient through seasonality and change.",
    detail:
      "Travel platforms live and die by the reliability of their search, booking, and payment flows — especially during peak demand. TestYantra helps travel technology teams validate end-to-end booking journeys, stress-test infrastructure for seasonal peaks, and ensure payment integrations remain robust across markets and currencies.",
    useCases: [
      "Search and booking flow end-to-end testing",
      "Payment gateway reliability across currencies",
      "Peak-season load and stress testing",
      "GDS and third-party API integration validation",
      "Mobile app quality for iOS and Android",
    ],
    challenges: [
      "Seasonal traffic spikes placing extreme load on infrastructure",
      "Complex third-party API and GDS integrations",
      "Multi-currency and multi-market payment reliability",
    ],
    contactSlug: "travel",
    stats: [
      { value: "20+", label: "Travel technology clients" },
      { value: "10×", label: "Peak traffic simulation capacity" },
      { value: "99%", label: "Booking flow reliability" },
      { value: "45%", label: "Regression cycle reduction" },
    ],
    subVerticals: [
      {
        name: "Online Travel Agencies (OTAs)",
        description:
          "Quality assurance for OTA search, pricing, booking, and post-booking management platforms across web and mobile.",
        offerings: [
          "Search and availability engine testing",
          "Dynamic pricing and fare aggregation accuracy",
          "Multi-leg booking flow end-to-end automation",
          "Post-booking change and cancellation workflow testing",
          "Loyalty and rewards integration testing",
        ],
      },
      {
        name: "Airlines & GDS Integration",
        description:
          "Testing for airline reservation systems, GDS connectivity, and ancillary service platforms where accuracy and speed are mission-critical.",
        offerings: [
          "GDS (Amadeus, Sabre, Travelport) integration testing",
          "NDC and direct API connectivity testing",
          "Seat selection, ancillary, and upsell flow QA",
          "Check-in and boarding system integration testing",
          "Revenue management system regression testing",
        ],
      },
      {
        name: "Hotels & Hospitality",
        description:
          "Comprehensive testing for property management systems, booking engines, and channel management platforms across hotel brands and OTA distribution.",
        offerings: [
          "PMS integration and rate distribution testing",
          "Channel manager and OTA connectivity QA",
          "Guest experience app and mobile check-in testing",
          "Revenue management and yield system testing",
          "Group booking and event management workflow QA",
        ],
      },
      {
        name: "Ground Transport & Car Rental",
        description:
          "End-to-end testing for car rental platforms, ride-hailing systems, and ground transport booking integrations.",
        offerings: [
          "Fleet availability and booking engine testing",
          "GPS tracking and telematics integration QA",
          "Dynamic pricing and surge model validation",
          "Driver and vehicle onboarding workflow testing",
          "Cross-platform mobile app regression testing",
        ],
      },
      {
        name: "Travel B2B & Distribution",
        description:
          "Quality engineering for B2B booking platforms, corporate travel management systems, and distribution technology.",
        offerings: [
          "Corporate travel policy and approval workflow testing",
          "TMC platform integration and booking QA",
          "Content aggregation and normalisation testing",
          "Invoice, billing, and reconciliation accuracy validation",
          "API rate shop and caching behaviour testing",
        ],
      },
    ],
  },
  {
    slug: "consumer-electronics",
    name: "Consumer Electronics",
    summary:
      "Test across devices, firmware versions, and real-world environments.",
    detail:
      "Consumer electronics companies require quality validation across hardware, firmware, and companion software — under real-world conditions that lab environments cannot fully replicate. TestYantra's crowd testing capabilities and IoT testing expertise enable device manufacturers to achieve broad coverage, catch field-level issues early, and ship products consumers trust.",
    useCases: [
      "Device and firmware compatibility testing",
      "IoT companion app testing across ecosystems",
      "Field issue reproduction and root-cause analysis",
      "Cross-platform smart device integration testing",
      "Accessibility and localisation validation",
    ],
    challenges: [
      "Vast hardware and firmware version matrix",
      "Real-world environment simulation for IoT scenarios",
      "Field defect reproduction and regression across device generations",
    ],
    contactSlug: "consumer-electronics",
    stats: [
      { value: "500+", label: "Device types tested" },
      { value: "35+", label: "CE & IoT clients" },
      { value: "60%", label: "Field defect detection rate" },
      { value: "3×", label: "Faster firmware release cycles" },
    ],
    subVerticals: [
      {
        name: "Smart Home & IoT",
        description:
          "Testing for smart home ecosystems, IoT hubs, and connected device platforms across multiple wireless protocols and cloud integrations.",
        offerings: [
          "IoT device interoperability testing (Zigbee, Z-Wave, Matter)",
          "Smart home hub and cloud backend integration QA",
          "Voice assistant integration testing (Alexa, Google, Siri)",
          "Over-the-air (OTA) update validation",
          "Energy monitoring and automation rule testing",
        ],
      },
      {
        name: "Mobile Devices & Wearables",
        description:
          "Comprehensive functional, performance, and compatibility testing for smartphones, tablets, smartwatches, and fitness trackers.",
        offerings: [
          "Companion app functional and regression testing",
          "Cross-OS compatibility testing (Android, iOS, WearOS)",
          "Sensor accuracy and health data validation testing",
          "Battery, performance, and thermal regression testing",
          "Localisation and accessibility compliance testing",
        ],
      },
      {
        name: "Audio & Visual Equipment",
        description:
          "Quality assurance for smart TVs, soundbars, AV receivers, and connected entertainment systems.",
        offerings: [
          "Smart TV app and UI regression testing",
          "Streaming service integration and playback QA",
          "Voice remote and gesture control testing",
          "Firmware OTA update and rollback testing",
          "HDMI, Bluetooth, and Wi-Fi connectivity validation",
        ],
      },
      {
        name: "Connected Automotive",
        description:
          "Testing for in-vehicle infotainment, telematics, and connected car platforms where safety and reliability are paramount.",
        offerings: [
          "Infotainment system functional and regression testing",
          "CarPlay, Android Auto, and OEM integration QA",
          "Telematics data accuracy and transmission testing",
          "OTA software update validation for automotive platforms",
          "Driver assistance feature integration testing",
        ],
      },
      {
        name: "Embedded Systems & Firmware",
        description:
          "Specialised testing for embedded software, firmware releases, and real-time operating systems across electronics product lines.",
        offerings: [
          "Firmware regression and update validation",
          "Real-time OS (RTOS) integration testing",
          "Hardware-in-the-loop (HIL) simulation testing",
          "Memory and resource utilisation testing",
          "Cross-generation hardware backward compatibility testing",
        ],
      },
    ],
  },
];

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/academy", label: "Academy" },
  { href: "/outcomes", label: "Outcomes" },
  { href: "/industries", label: "Industries" },
  { href: "/client-success", label: "Client Success" },
  { href: "/company/leadership", label: "Leadership" },
  { href: "/company/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
] as const;
