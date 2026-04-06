export type AchieveTab = {
  id: string;
  title: string;
  subtitle: string;
  icon: "rocket" | "robot" | "bolt" | "brain" | "shield";
  panelTitle: string;
  panelIntro: string;
  bullets: string[];
};

export const achieveTabs: AchieveTab[] = [
  {
    id: "delivery",
    title: "Accelerate delivery",
    subtitle: "Faster releases without compromising quality",
    icon: "rocket",
    panelTitle: "Accelerate Your Software Delivery",
    panelIntro:
      "Enterprise teams use Test Yantra's managed services to gain end-to-end CI/CD pipeline coverage, reduce time-to-market by over 40%, and eliminate production incidents before they happen.",
    bullets: [
      "Enterprise-scale test factories with built-in SLAs and accelerative release automation",
      "Standardize QA across teams to minimize redundancy, improve consistency, and simplify debt",
      "AI-driven test recommendations that learn from your codebase and flag regressions instantly",
      "Transform QA teams by integrating traditional tooling with modern DevOps frameworks",
    ],
  },
  {
    id: "digital",
    title: "Drive Digital Transformation",
    subtitle: "Modernize platforms with quality at the core",
    icon: "robot",
    panelTitle: "Digitize with confidence",
    panelIntro:
      "We help you modernize legacy stacks, cloud-native apps, and customer journeys with testing strategies that keep pace with change.",
    bullets: [
      "Blueprint quality gates across cloud and hybrid estates",
      "Reduce transformation risk with continuous validation",
      "Align squads to shared definitions of done and release readiness",
    ],
  },
  {
    id: "automation",
    title: "Accelerate to Automation",
    subtitle: "Scale coverage without scaling headcount linearly",
    icon: "bolt",
    panelTitle: "Automation that compounds",
    panelIntro:
      "Build durable automation assets—frameworks, data, and pipelines—that shorten every future release.",
    bullets: [
      "Frameworks tuned to your stack and team skills",
      "Smart test selection and flaky-test containment",
      "Observability hooks from automation into delivery metrics",
    ],
  },
  {
    id: "cognitive",
    title: "Innovate Cognitive Capabilities",
    subtitle: "AI-assisted testing and insights",
    icon: "brain",
    panelTitle: "Smarter quality signals",
    panelIntro:
      "Blend human expertise with AI to prioritize risk, generate scenarios, and explain regressions faster.",
    bullets: [
      "Risk-based coverage recommendations",
      "Natural-language summaries for leadership reviews",
      "Continuous learning from production and test telemetry",
    ],
  },
  {
    id: "portfolio",
    title: "Manage Your Portfolio",
    subtitle: "Govern quality across programs",
    icon: "shield",
    panelTitle: "Portfolio-level governance",
    panelIntro:
      "Coordinate vendors, squads, and shared services with clear SLAs, reporting, and capacity planning.",
    bullets: [
      "Unified reporting across programs and geographies",
      "Capacity and skills planning for peak release windows",
      "Partner governance that scales",
    ],
  },
];

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  featured?: boolean;
  sublinks?: { label: string; href: string }[];
};

export const serviceCards: ServiceCard[] = [
  {
    id: "consulting",
    title: "QA Consulting",
    description: "",
    emoji: "🚀",
    featured: true,
    sublinks: [
      { label: "Quality Strategy and Roadmap", href: "/services/professional-services" },
      { label: "Test Process Assessment", href: "/services/professional-services" },
    ],
  },
  {
    id: "qa",
    title: "Quality Assurance",
    description: "Rigorous manual and exploratory testing to ensure flawless UX.",
    emoji: "🛡️",
  },
  {
    id: "automation",
    title: "Test Automation",
    description: "Next-gen automation frameworks that scale with your product.",
    emoji: "⚙️",
  },
  {
    id: "analytics",
    title: "Data Analytics",
    description: "Actionable insights derived from your testing data ecosystem.",
    emoji: "📈",
  },
  {
    id: "migration",
    title: "Platform Migration",
    description: "De-risk moves across platforms with structured validation waves.",
    emoji: "🔄",
  },
  {
    id: "cloud",
    title: "Cloud Transformation",
    description: "Leveraging cloud power for faster, more secure engineering.",
    emoji: "☁️",
  },
];

export type ShowcaseIndustry = {
  slug: string;
  title: string;
  description: string;
  image: string;
  iconBg: string;
  icon: "bulb" | "video" | "health" | "globe" | "dna" | "code" | "cart";
};

export const showcaseIndustries: ShowcaseIndustry[] = [
  {
    slug: "banking",
    title: "Banking & Financial Services",
    description: "Secure, scalable solutions designed for speed, trust, and seamless digital experiences.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c698a806e40?w=1200&q=80&auto=format&fit=crop",
    iconBg: "#f38118",
    icon: "bulb",
  },
  {
    slug: "industrial",
    title: "Industrial & Enterprise",
    description: "Reliable quality for complex systems, integrations, and operational software.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop",
    iconBg: "#7c3aed",
    icon: "video",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Patient-safe releases with compliance-aware testing and traceable quality evidence.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop",
    iconBg: "#06b6d4",
    icon: "health",
  },
  {
    slug: "insurance",
    title: "Insurance",
    description: "Confident policy, claims, and digital channel releases under regulatory pressure.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop",
    iconBg: "#22c55e",
    icon: "globe",
  },
  {
    slug: "life-sciences",
    title: "Life Sciences",
    description: "Validation-minded quality for regulated products and lab-to-market software.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80&auto=format&fit=crop",
    iconBg: "#2563eb",
    icon: "dna",
  },
  {
    slug: "software",
    title: "Software & Hi-Tech",
    description: "Velocity without chaos—CI/CD aligned testing for fast-moving product teams.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop",
    iconBg: "#0d9488",
    icon: "code",
  },
  {
    slug: "consumer",
    title: "Consumer Tech",
    description: "Delight users at scale with device, commerce, and experience coverage.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80&auto=format&fit=crop",
    iconBg: "#e11d48",
    icon: "cart",
  },
];

export const clientLogos = [
  { name: "Google", initial: "G", tint: "#4285F4" },
  { name: "Capgemini", initial: "C", tint: "#0070AD" },
  { name: "Qspiders", initial: "Q", tint: "#f38118" },
  { name: "Google", initial: "G", tint: "#4285F4" },
] as const;

export const whyChooseItems = [
  { label: "Faster Releases", active: true },
  { label: "AI-Driven Testing", active: false },
  { label: "Built-In Quality", active: false },
  { label: "Scale with Confidence", active: false },
  { label: "Accurate Results", active: false },
  { label: "Seamless Experiences", active: false },
] as const;

export const companyStats = [
  {
    stat: "17+ Years",
    label: "Market leadership",
    icon: "blueprint" as const,
  },
  { stat: "4000+", label: "QA Professionals", icon: "team" as const },
  { stat: "<80%", label: "Faster time-to-market", icon: "team" as const },
  { stat: "200+", label: "Client success stories", icon: "award" as const },
];
