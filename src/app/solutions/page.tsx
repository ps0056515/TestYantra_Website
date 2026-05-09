import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";

export const metadata = {
  title: "Industry Solutions — TestYantra",
  description:
    "Quality engineering solutions purpose-built for Banking, Insurance, Healthcare, Telecom, Retail, Travel, SaaS and more — with deep domain expertise and proven industry credentials.",
};

type Solution = {
  slug: string;
  title: string;
  icon: string;
  color: string;
  tagline: string;
  desc: string;
  link: string;
  highlights: string[];
};

const solutions: Solution[] = [
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    icon: "🏦",
    color: "#e8401a",
    tagline: "Quality for the world's most regulated digital systems",
    desc: "Core banking modernisation, digital channels, payments, open banking and regulatory compliance — we understand the stakes and the requirements intimately.",
    link: "/industries/banking-finance",
    highlights: ["Core Banking Testing", "Payments & ISO 20022", "Open Banking APIs", "Regulatory Compliance"],
  },
  {
    slug: "insurance",
    title: "Insurance",
    icon: "🛡️",
    color: "#5c6fff",
    tagline: "Testing across the full insurance lifecycle",
    desc: "Policy administration, claims processing, underwriting systems and InsurTech platforms — comprehensive quality engineering for complex, interconnected insurance ecosystems.",
    link: "/industries/insurance",
    highlights: ["Policy Systems Testing", "Claims Processing", "Underwriting Automation", "InsurTech Platforms"],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    icon: "🏥",
    color: "#00bfa8",
    tagline: "Compliance-grade quality for patient-critical systems",
    desc: "EHR systems, medical devices, clinical trials platforms and digital health apps — HIPAA, FDA 21 CFR Part 11 and HL7 FHIR expertise woven into every engagement.",
    link: "/solutions/healthcare",
    highlights: ["EHR & EMR Testing", "HIPAA Compliance", "Medical Device Validation", "FDA 21 CFR Part 11"],
  },
  {
    slug: "telecom-media",
    title: "Telecom & Media",
    icon: "📡",
    color: "#f0a500",
    tagline: "Performance at global scale, quality at every packet",
    desc: "BSS/OSS modernisation, OTT streaming platforms, network function testing and broadcast systems — ensuring quality at millions of concurrent users and petabytes of data.",
    link: "/industries/media-entertainment",
    highlights: ["BSS/OSS Testing", "OTT Platform Quality", "Network Function Testing", "5G Applications"],
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & E-Commerce",
    icon: "🛒",
    color: "#e8401a",
    tagline: "Zero downtime, flawless journeys, peak season ready",
    desc: "Omnichannel retail, POS, supply chain, loyalty programmes and e-commerce platforms — peak-season performance testing, accessibility compliance and seamless UX across every touchpoint.",
    link: "/industries/retail-ecommerce",
    highlights: ["Omnichannel Testing", "Peak Load Performance", "POS & Payments", "Accessibility (WCAG)"],
  },
  {
    slug: "travel",
    title: "Travel & Hospitality",
    icon: "✈️",
    color: "#5c6fff",
    tagline: "Booking confidence from search to check-in",
    desc: "GDS integration testing, booking engines, loyalty platforms and traveller apps — ensuring seamless, high-performance experiences from the first search to the final check-in.",
    link: "/industries/travel",
    highlights: ["Booking Engine Testing", "GDS Integration", "Loyalty Platform QA", "Mobile Travel Apps"],
  },
  {
    slug: "saas-hitech",
    title: "SaaS & Hi-Tech",
    icon: "⚙️",
    color: "#00bfa8",
    tagline: "Ship faster, break less, delight more",
    desc: "Product engineering teams, ISVs and SaaS companies rely on TestYantra for continuous quality — automating regression, shifting left on security and enabling rapid release cycles without sacrificing reliability.",
    link: "/solutions/saas-hitech",
    highlights: ["Continuous Testing", "Shift-Left Security", "API Testing at Scale", "Performance at SaaS Pace"],
  },
  {
    slug: "fintech",
    title: "FinTech & Payments",
    icon: "💳",
    color: "#f0a500",
    tagline: "Trust at transaction speed",
    desc: "Digital wallets, payment gateways, crypto platforms and embedded finance — rigorous functional, security and performance testing for financial products where failures have real consequences.",
    link: "/solutions/fintech",
    highlights: ["Payment Gateway Testing", "Digital Wallet QA", "PCI-DSS Compliance", "High-Frequency Transactions"],
  },
];

export default function SolutionsPage() {
  return (
    <V2InnerShell>
      {/* Hero */}
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Solutions</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl leading-tight">
          Industry-deep quality engineering<br />for the sectors that matter most
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--muted2)] max-w-2xl">
          Generic testing delivers generic results. TestYantra brings domain expertise to every engagement — engineers who know your industry&apos;s regulations, technology stacks and business-critical failure modes.
        </p>
      </div>

      {/* Domain expertise strip */}
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { n: "8+", l: "Industry Verticals" },
          { n: "360+", l: "Enterprise Clients" },
          { n: "100%", l: "Compliance Track Record" },
          { n: "17+", l: "Years of Domain Expertise" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-5 py-4">
            <div className="text-2xl font-bold text-[var(--accent)]">{s.n}</div>
            <div className="mt-1 text-xs text-[var(--muted)]">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Solution cards grid */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {solutions.map((sol) => (
          <Link
            key={sol.slug}
            href={sol.link}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-7 transition hover:border-[var(--border2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <div
              className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl opacity-70 group-hover:opacity-100 transition"
              style={{ background: sol.color }}
            />
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                style={{ background: `${sol.color}18`, border: `1px solid ${sol.color}30` }}
              >
                {sol.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[var(--text)] group-hover:text-white transition">
                  {sol.title}
                </h2>
                <p className="mt-0.5 text-xs italic text-[var(--muted)]">{sol.tagline}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted2)]">{sol.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sol.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 text-xs text-[var(--muted2)]"
                >
                  {h}
                </span>
              ))}
            </div>
            <div className="mt-5 text-sm font-medium" style={{ color: sol.color }}>
              Explore {sol.title} Quality Engineering →
            </div>
          </Link>
        ))}
      </div>

      {/* Cross-cutting themes */}
      <div className="mt-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Cross-Industry</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">Quality themes that span all sectors</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { icon: "🔐", title: "Security & Compliance", desc: "OWASP, PCI-DSS, HIPAA, ISO 27001, SOC 2 — we bring regulatory knowledge to every engagement and build compliance into quality frameworks from day one." },
            { icon: "📱", title: "Omnichannel & Mobile", desc: "Web, mobile, API and embedded systems tested in concert — ensuring seamless user experiences across every touchpoint and device your customers use." },
            { icon: "⚡", title: "Peak Performance", desc: "Load, stress and soak testing calibrated to your actual peak traffic scenarios — ensuring your systems hold up when business demands are at their highest." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-6">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-3 text-base font-semibold text-[var(--text)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-[var(--accent)] bg-[var(--bg2)] p-10 text-center">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Don&apos;t see your industry?</h2>
        <p className="mt-3 text-sm text-[var(--muted2)] max-w-lg mx-auto">
          Our quality engineering expertise spans many more domains. Talk to us — we&apos;ll walk you through our relevant experience and approach for your specific context.
        </p>
        <Link href="/contact" className="btn-accent mt-6 inline-block">
          Talk to a Domain Expert →
        </Link>
      </div>
    </V2InnerShell>
  );
}
