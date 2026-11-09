import type { SectionKey } from "@/content/sections";

/**
 * Presentation-only settings for the two sub-sites (imagery, gradients, announcement bar,
 * proof badges, nav feature cards). Copy that describes the offering lives in sections.ts.
 */

export type ProofBadge = { value: string; label: string };

export type FeatureCard = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
};

export type Quote = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type SectionTheme = {
  /** Hero artwork in /public/images */
  image: string;
  /** CSS filter used to tint the artwork towards the section accent */
  imageFilter: string;
  /** Tailwind gradient classes for the highlighted headline words */
  gradient: string;
  announcement: { tag: string; text: string; cta: string; href: string };
  /** Verifiable proof points shown under the hero (no third-party ratings are claimed) */
  badges: ProofBadge[];
  statsHeading: { eyebrow: string; title: string };
  outcomesHeading: { eyebrow: string; title: string; sub: string };
  navFeatured: { solutions: FeatureCard; platforms: FeatureCard };
  /**
   * Approved client quotes. Leave empty until the client has signed off — the
   * quote carousel only renders when at least one entry exists.
   */
  quotes: Quote[];
};

export const sectionTheme: Record<SectionKey, SectionTheme> = {
  qe: {
    image: "/images/qe_hero.png",
    imageFilter: "hue-rotate(-112deg) saturate(1.25) brightness(1.05)",
    gradient: "from-orange-400 via-rose-400 to-amber-300",
    announcement: {
      tag: "New",
      text: "TestYantra AI — validate LLMs and agentic systems before they go live",
      cta: "Explore Testing the AI",
      href: "/qe/solutions/testing-ai",
    },
    badges: [
      { value: "217+", label: "Enterprise clients" },
      { value: "20M+", label: "Automated tests executed" },
      { value: "14", label: "Industries served" },
      { value: "18 yrs", label: "Quality engineering" },
    ],
    statsHeading: {
      eyebrow: "Quality, at enterprise scale",
      title: "Real quality outcomes. Delivered release after release.",
    },
    outcomesHeading: {
      eyebrow: "Outcomes",
      title: "Results our clients measure",
      sub: "Delivery metrics from QA transformation programmes across banking, retail and enterprise software.",
    },
    navFeatured: {
      solutions: {
        eyebrow: "Featured",
        title: "Testing the AI",
        body: "Bias, drift, hallucination and prompt-injection validation for LLM and agentic systems.",
        cta: "Learn more",
        href: "/qe/solutions/testing-ai",
      },
      platforms: {
        eyebrow: "Platform",
        title: "FireFlink",
        body: "AI-powered scriptless test automation for web, mobile, API and enterprise apps.",
        cta: "Visit FireFlink",
        href: "https://www.fireflink.com/",
        external: true,
      },
    },
    quotes: [],
  },
  ai: {
    image: "/images/ai_hero.png",
    imageFilter: "saturate(1.1) brightness(1.05)",
    gradient: "from-indigo-300 via-fuchsia-400 to-pink-400",
    announcement: {
      tag: "New",
      text: "Build AI that is validated before it ships — engineering and assurance under one roof",
      cta: "See how we work",
      href: "/ai/how-we-work",
    },
    badges: [
      { value: "900+", label: "Engineers on the bench" },
      { value: "CMMI 3", label: "Delivery maturity" },
      { value: "50+", label: "Technology stacks" },
      { value: "18 yrs", label: "Group delivery experience" },
    ],
    statsHeading: {
      eyebrow: "Engineering at scale",
      title: "Real AI engineering. Built to reach production.",
    },
    outcomesHeading: {
      eyebrow: "Outcomes",
      title: "Delivery we stand behind",
      sub: "Product engineering and AI delivery across banking, automotive and legal-tech platforms.",
    },
    navFeatured: {
      solutions: {
        eyebrow: "Featured",
        title: "Generative AI & RAG",
        body: "Enterprise LLMs and retrieval pipelines with cited, grounded answers and guardrails.",
        cta: "Explore",
        href: "/ai/solutions#generative-ai-rag",
      },
      platforms: {
        eyebrow: "Engagement",
        title: "Build your squad",
        body: "Specialists or a full cross-functional squad from our 900+ engineer bench in about 48 hours.",
        cta: "Talk to an engineer",
        href: "/ai/contact?interest=talent",
      },
    },
    quotes: [],
  },
};
