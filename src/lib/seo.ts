import type { Metadata } from "next";

/** Canonical production URL — override with NEXT_PUBLIC_SITE_URL in deployment */
export const siteConfig = {
  name: "TestYantra",
  legalName: "Test Yantra Software Solutions Pvt Ltd.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.testyantra.com").replace(/\/$/, ""),
  locale: "en_IN",
  email: "contactus@testyantra.com",
  phone: "+91 9742490958",
  linkedIn: "https://www.linkedin.com/company/test-yantra-software-solutions",
  defaultTitle:
    "Quality Engineering, Software Testing & AI Engineering | TestYantra",
  defaultDescription:
    "TestYantra — two practices: Quality Engineering & Testing (managed QA, test automation, AI quality) and Application Engineering & AI (GenAI, agentic AI, cloud-native engineering). 217+ clients, 18 years, 6 locations.",
  defaultKeywords: [
    "software testing company India",
    "QA outsourcing",
    "managed QA services",
    "test automation services",
    "quality engineering",
    "crowd testing",
    "AI testing services",
    "software testing Bangalore",
    "independent verification and validation",
    "product engineering India",
    "AI engineering services",
    "application engineering",
  ],
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

type CreateMetadataOptions = {
  /** Page title (site name appended via root template when set) */
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  /** Use full title without template suffix */
  absoluteTitle?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords,
  noIndex = false,
  absoluteTitle = false,
}: CreateMetadataOptions): Metadata {
  const desc = description ?? siteConfig.defaultDescription;
  const url = absoluteUrl(path);
  const kw = keywords ?? [...siteConfig.defaultKeywords];
  const resolvedTitle = title ?? siteConfig.defaultTitle;
  const ogTitle = absoluteTitle || !title ? resolvedTitle : resolvedTitle;

  return {
    title: absoluteTitle ? { absolute: resolvedTitle } : resolvedTitle,
    description: desc,
    keywords: kw,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: ogTitle,
      description: desc,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — End-to-End Engineering`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: desc,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

/** Static page SEO definitions */
export const staticPageSeo = {
  home: createMetadata({
    absoluteTitle: true,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    path: "/",
    keywords: [
      ...siteConfig.defaultKeywords,
      "end to end engineering",
      "TestYantra",
      "TechnoElevate",
    ],
  }),
  services: createMetadata({
    title: "QA & Software Testing Services",
    description:
      "Managed QA, test automation, crowd testing, AI quality engineering, accessibility, API testing & production monitoring. Flexible pods and CoE models — request a scope discussion.",
    path: "/qe/solutions",
    keywords: [
      "QA services",
      "software testing services",
      "test automation company",
      "managed testing services",
      "IV&V services",
    ],
  }),
  development: createMetadata({
    title: "Product Engineering & Software Development",
    description:
      "TechnoElevate — product engineering, cloud, AI & dedicated engineering squads with TestYantra quality built in. 900+ engineers. Start a project or build your team.",
    path: "/ai",
    keywords: [
      "product engineering India",
      "software development outsourcing",
      "dedicated development team",
      "TechnoElevate",
      "staff augmentation India",
    ],
  }),
  contact: createMetadata({
    title: "Contact Us — Request a Consultation",
    description:
      "Talk to TestYantra about QA, automation, AI testing, product engineering or training. Global HQ in Bangalore · 6 locations. Response within 1 business day.",
    path: "/contact",
    keywords: [
      "contact TestYantra",
      "QA consultation",
      "software testing quote",
      "hire QA team India",
    ],
  }),
  industries: createMetadata({
    title: "Industries We Serve — Banking, Healthcare, SaaS & More",
    description:
      "Quality engineering and product development for 14 regulated and high-velocity industries — banking, healthcare, insurance, retail, media, fintech & SaaS.",
    path: "/industries",
    keywords: [
      "banking software testing",
      "healthcare QA services",
      "fintech testing company",
      "SaaS quality engineering",
    ],
  }),
  clientSuccess: createMetadata({
    title: "Client Success & Case Studies",
    description:
      "See how global enterprises cut release cycles, automation coverage and defect leakage with TestYantra managed QA and quality engineering programmes.",
    path: "/qe/case-studies",
    keywords: ["QA case studies", "software testing success stories", "test automation ROI"],
  }),
  academy: createMetadata({
    title: "Training & Academy — QSpiders & JSpiders",
    description:
      "Enterprise and job-ready training in software testing and Java development — 600k+ certified trainees. ISTQB-aligned QA paths and placement support.",
    path: "/academy",
    keywords: ["software testing training", "QSpiders", "ISTQB training India", "QA certification"],
  }),
  leadership: createMetadata({
    title: "Leadership & About the Group",
    description:
      "Meet the leadership behind TestYantra, TechnoElevate and Academy — 18 years building quality engineering, product development and talent platforms.",
    path: "/company/leadership",
  }),
  locations: createMetadata({
    title: "Global Offices & Locations",
    description:
      "TestYantra delivery centres in Bangalore, Plano, London and APAC — follow-the-sun QA and engineering with onshore, nearshore and offshore models.",
    path: "/company/locations",
    keywords: [
      "TestYantra Bangalore",
      "QA company USA",
      "software testing UK",
      "offshore QA India",
    ],
  }),
  outcomes: createMetadata({
    title: "Training Outcomes & ROI",
    description: "Measure training and quality programme outcomes with TestYantra Academy and enterprise cohort models.",
    path: "/outcomes",
    noIndex: true,
  }),
  privacy: createMetadata({
    title: "Privacy Notice",
    description:
      "How TestYantra collects, uses, stores and protects personal information submitted through this website, including contact enquiries.",
    path: "/privacy",
    keywords: ["TestYantra privacy", "data protection", "privacy policy"],
  }),
  terms: createMetadata({
    title: "Website Terms of Use",
    description: "Terms governing use of the TestYantra website, content, and enquiry submissions.",
    path: "/terms",
    keywords: ["TestYantra terms", "website terms"],
  }),
  managedQaIndia: createMetadata({
    title: "Managed QA Services India | Offshore QA Company",
    description:
      "Managed QA pods, QA CoE, and IV&V from India with global delivery — 217+ clients, 18 years. Request a scoped consultation for your release cadence.",
    path: "/managed-qa-india",
    keywords: [
      "managed QA services India",
      "offshore QA company",
      "QA outsourcing Bangalore",
      "managed testing services",
      "software testing company India",
    ],
  }),
  testAutomationServices: createMetadata({
    title: "Test Automation Services | CI/CD & Regression Automation",
    description:
      "Enterprise test automation — Playwright, Selenium, API testing, CI/CD gates. Cut regression time and defect leakage. Talk to TestYantra automation specialists.",
    path: "/test-automation-services",
    keywords: [
      "test automation services",
      "test automation company",
      "CI/CD test automation",
      "Playwright automation services",
      "regression automation outsourcing",
    ],
  }),
  insights: createMetadata({
    title: "QA & Quality Engineering Insights",
    description:
      "Expert guides on managed QA vs in-house teams, test automation ROI, and AI in software testing — practical advice for engineering leaders.",
    path: "/insights",
    keywords: [
      "QA blog",
      "software testing insights",
      "test automation ROI",
      "managed QA guide",
      "AI in testing",
    ],
  }),
} as const;

export function insightPageMetadata(
  slug: string,
  title: string,
  excerpt: string,
  _publishedAt: string,
): Metadata {
  return createMetadata({
    title,
    description: `${excerpt} Read on TestYantra Insights.`,
    path: `/insights/${slug}`,
    keywords: ["software testing", "quality engineering", "TestYantra insights"],
  });
}

export function servicePageMetadata(slug: string, name: string, summary: string): Metadata {
  return createMetadata({
    title: `${name} Services`,
    description: `${summary} Talk to TestYantra specialists — 217+ clients, global delivery, enquiry welcome.`,
    path: `/qe/solutions/${slug}`,
    keywords: [
      name.toLowerCase(),
      "TestYantra",
      "software testing",
      "quality engineering",
    ],
  });
}
