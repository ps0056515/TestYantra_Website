export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  slug: "managed-qa" | "crowd-testing" | "professional-services" | "training";
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
  useCases: string[];
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
    summary:
      "Own quality end-to-end with a managed testing function built for scale, speed, and predictable outcomes.",
    bullets: [
      "Independent Verification & Validation (IV&V)",
      "Project consulting: build/operate/transfer models",
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
    slug: "professional-services",
    name: "Professional Services",
    summary:
      "Specialists who plug into your teams to accelerate delivery, quality engineering, and transformation initiatives.",
    bullets: [
      "Quality engineering leadership and test strategy",
      "Automation frameworks and toolchain integration",
      "Delivery support across QA, DevOps, and operations",
    ],
    outcomes: [
      "Faster execution with proven playbooks",
      "Reduced operational friction across teams",
      "Smoother releases with clearer accountability",
    ],
  },
  {
    slug: "training",
    name: "Training",
    summary:
      "Build job-ready capability in software testing and development through structured, outcome-based learning paths.",
    bullets: [
      "Training-as-a-service for fresh job aspirants",
      "Software testing learning paths (QSpiders; ISTQB® partner)",
      "Java/J2EE development learning paths (JSpiders)",
      "Placement assistance and hiring enablement",
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
    addressLines: ["The black church, St. Mary’s place, Dublin, Ireland - D07 P4AX"],
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
    title: "Scaled onboarding from months to weeks",
    industry: "Technology services",
    problem:
      "New hires took too long to become productive, creating delivery pressure and inconsistent quality.",
    approach:
      "Defined role readiness, built cohort-based learning paths with checkpoints, and added practice + assessment signals.",
    results: [
      { label: "Time to competency", value: "12 → 8 weeks" },
      { label: "Completion", value: "62% → 82%" },
      { label: "Manager confidence", value: "+14 points" },
    ],
  },
  {
    title: "Role-based upskilling for internal mobility",
    industry: "Financial services",
    problem:
      "Critical roles were hard to fill externally; teams needed a dependable pipeline of ready talent.",
    approach:
      "Mapped skills to roles, created blended learning journeys, and measured proficiency with benchmarks.",
    results: [
      { label: "Internal mobility", value: "11% → 16%" },
      { label: "Proficiency lift", value: "+22%" },
      { label: "Hiring dependency", value: "Reduced" },
    ],
  },
];

export const industries: Industry[] = [
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    summary: "Reduce delivery risk while meeting security, compliance, and performance expectations.",
    useCases: ["Core banking modernization", "Payments reliability", "Mobile app quality at scale"],
  },
  {
    slug: "insurance",
    name: "Insurance",
    summary: "Improve speed-to-market and confidence for claims, policy, and customer experience workflows.",
    useCases: ["Claims platform releases", "Regulatory testing", "Automation for policy lifecycle"],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    summary: "Protect conversion and customer trust with real-world coverage and peak-load readiness.",
    useCases: ["Checkout stability", "Performance at scale", "Device/browser coverage"],
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    summary: "Ship streaming and content experiences with confidence across devices and networks.",
    useCases: ["Playback compatibility", "Localization testing", "CDN/network variability"],
  },
  {
    slug: "communications",
    name: "Communications",
    summary: "Validate complex integrations and reliability across network-dependent experiences.",
    useCases: ["Network scenario validation", "App reliability", "Integration testing"],
  },
  {
    slug: "travel",
    name: "Travel",
    summary: "Ensure booking flows and payments remain resilient through seasonality and change.",
    useCases: ["Search/booking flows", "Payment reliability", "Peak readiness testing"],
  },
  {
    slug: "consumer-electronics",
    name: "Consumer Electronics",
    summary: "Test across devices, firmware versions, and real-world environments.",
    useCases: ["Device compatibility", "IoT app testing", "Field issue reproduction"],
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

