import { notFound } from "next/navigation";
import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";

type SolutionDetail = {
  slug: string;
  title: string;
  icon: string;
  color: string;
  tagline: string;
  intro: string;
  challenges: string[];
  capabilities: { name: string; desc: string }[];
  outcomes: { metric: string; label: string }[];
  tools: string[];
};

const solutionDetails: SolutionDetail[] = [
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    icon: "🏥",
    color: "#00bfa8",
    tagline: "Compliance-grade quality for patient-critical systems",
    intro:
      "Healthcare software failures have consequences that go beyond financial or reputational loss — patient safety, clinical outcomes and regulatory standing are all at stake. TestYantra's Healthcare & Life Sciences practice brings deep domain expertise, compliance-grade quality frameworks and a proven track record across EHR systems, medical devices, digital health platforms and clinical trial applications.",
    challenges: [
      "HIPAA, FDA 21 CFR Part 11, HL7 FHIR and IEC 62304 compliance requirements",
      "Interoperability testing across complex healthcare data standards",
      "Patient data security and privacy validation",
      "Rapid product iterations without compromising regulatory standing",
      "Legacy system integration with modern digital health platforms",
    ],
    capabilities: [
      { name: "EHR & EMR Testing", desc: "Comprehensive functional, regression and integration testing for electronic health record and medical record systems — Epic, Cerner, Allscripts and more." },
      { name: "HIPAA Compliance Testing", desc: "Structured compliance validation against HIPAA security and privacy rules — ensuring PHI protection across all data flows and system boundaries." },
      { name: "Medical Device Software Validation", desc: "IEC 62304-aligned software validation for embedded and connected medical devices — from pre-market testing to post-market surveillance support." },
      { name: "HL7 FHIR & Interoperability", desc: "API and integration testing for HL7 FHIR R4, SMART on FHIR, CDA and legacy HL7 v2 interfaces across healthcare data ecosystems." },
      { name: "Digital Health & Telehealth", desc: "Functional, performance and security testing for patient-facing digital health apps, telemedicine platforms and wearable device integrations." },
      { name: "Clinical Trial Systems", desc: "Validation of eClinical systems — CTMS, EDC, eTMF and randomisation platforms — to FDA 21 CFR Part 11 standards." },
    ],
    outcomes: [
      { metric: "100%", label: "Compliance audit pass rate" },
      { metric: "55%", label: "Faster regression cycles" },
      { metric: "Zero", label: "Production defect escapes" },
      { metric: "FDA 21 CFR", label: "Part 11 validated" },
    ],
    tools: ["Epic", "Cerner", "FHIR R4", "HL7 v2", "Postman", "RestAssured", "Selenium", "Jira", "TestRail", "Burp Suite"],
  },
  {
    slug: "saas-hitech",
    title: "SaaS & Hi-Tech",
    icon: "⚙️",
    color: "#00bfa8",
    tagline: "Ship faster, break less, delight more",
    intro:
      "SaaS and Hi-Tech companies live and die by release velocity and product reliability. TestYantra's SaaS & Hi-Tech practice is built for the pace of modern product engineering — continuous testing, shift-left security, deep API testing and AI-powered quality intelligence that keeps your teams shipping fast without the fear of breakage.",
    challenges: [
      "Maintaining quality at high release velocity (daily or weekly deployments)",
      "Managing regression risk across complex, multi-tenant SaaS architectures",
      "API stability and backward compatibility across rapidly evolving interfaces",
      "Shift-left security testing without slowing down development sprints",
      "Scaling QA capacity to match aggressive product roadmaps",
    ],
    capabilities: [
      { name: "Continuous Testing & CI/CD Integration", desc: "Quality gates woven into every pipeline stage — Jenkins, GitHub Actions, CircleCI, GitLab CI — with automated pass/fail reporting and trend dashboards." },
      { name: "API & Microservices Testing", desc: "Contract testing, integration testing and chaos engineering for distributed microservices architectures — REST, GraphQL, gRPC and event-driven APIs." },
      { name: "Shift-Left Security Testing", desc: "SAST, DAST and SCA integrated into development sprints — catching vulnerabilities before they reach staging or production environments." },
      { name: "Performance & Scalability Engineering", desc: "Load, stress and endurance testing calibrated to your real usage patterns — ensuring your platform scales with customer growth." },
      { name: "AI-Powered Test Automation", desc: "Self-healing test frameworks and LLM-powered test generation that keep coverage high without increasing manual test maintenance overhead." },
      { name: "QA Transformation & Tooling", desc: "Tool selection, framework architecture and QA capability uplift — helping engineering teams build quality engineering practices that scale." },
    ],
    outcomes: [
      { metric: "80%", label: "Test automation coverage" },
      { metric: "Daily", label: "Deployment frequency enabled" },
      { metric: "60%", label: "Fewer escaped defects" },
      { metric: "3×", label: "Pipeline throughput" },
    ],
    tools: ["Playwright", "Cypress", "Jest", "Postman", "k6", "Gatling", "Snyk", "SonarQube", "GitHub Actions", "Jenkins", "DataDog"],
  },
  {
    slug: "fintech",
    title: "FinTech & Payments",
    icon: "💳",
    color: "#f0a500",
    tagline: "Trust at transaction speed",
    intro:
      "In FinTech, a single payment failure or security breach can cost millions — and the customer's trust. TestYantra's FinTech & Payments practice combines deep financial domain expertise with rigorous security, performance and compliance testing to ensure your payment products work flawlessly at every transaction, at any scale.",
    challenges: [
      "PCI-DSS Level 1 compliance and cardholder data security validation",
      "High-frequency transaction performance under peak trading conditions",
      "Multi-currency, multi-jurisdiction payment flow testing",
      "Regulatory compliance across SEPA, ISO 20022, PSD2 and open banking mandates",
      "Third-party payment gateway and acquirer integration testing",
    ],
    capabilities: [
      { name: "Payment Gateway Testing", desc: "End-to-end payment flow testing across checkout, authorisation, settlement and refund cycles — including 3DS2, tokenisation and recurring payments." },
      { name: "PCI-DSS Compliance Testing", desc: "Comprehensive PCI-DSS scoping, gap analysis and compliance testing — covering all 12 PCI requirements and cardholder data environment validation." },
      { name: "High-Frequency Performance Testing", desc: "Load testing calibrated to your peak transaction volumes — 50K+ TPS scenarios with realistic payment mix and think-time profiles." },
      { name: "Open Banking & API Testing", desc: "PSD2, Open Banking UK and FDX API testing — covering consent flows, account aggregation, payment initiation and regulatory reporting interfaces." },
      { name: "Digital Wallet & BNPL Testing", desc: "Functional and security testing for digital wallets, crypto platforms and Buy-Now-Pay-Later products across iOS, Android and web." },
      { name: "Fraud Detection Validation", desc: "Testing fraud detection models, rule engines and ML-driven decisioning systems — ensuring accuracy, performance and compliance." },
    ],
    outcomes: [
      { metric: "PCI-DSS", label: "Level 1 validated" },
      { metric: "50K+", label: "TPS peak load tested" },
      { metric: "99.99%", label: "Transaction accuracy rate" },
      { metric: "Zero", label: "Security incidents post-go-live" },
    ],
    tools: ["JMeter", "Gatling", "Burp Suite", "OWASP ZAP", "Postman", "RestAssured", "Selenium", "Appium", "Nessus", "Wireshark"],
  },
];

export async function generateStaticParams() {
  return solutionDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sol = solutionDetails.find((s) => s.slug === slug);
  if (!sol) return {};
  return {
    title: `${sol.title} Quality Engineering — TestYantra Solutions`,
    description: sol.intro.slice(0, 160),
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sol = solutionDetails.find((s) => s.slug === slug);
  if (!sol) notFound();

  return (
    <V2InnerShell>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--muted)]" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[var(--text)] transition">Home</Link>
        <span>/</span>
        <Link href="/solutions" className="hover:text-[var(--text)] transition">Solutions</Link>
        <span>/</span>
        <span className="text-[var(--muted2)]">{sol.title}</span>
      </nav>

      {/* Hero */}
      <div className="mt-6 max-w-3xl">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
            style={{ background: `${sol.color}20`, border: `1px solid ${sol.color}35` }}
          >
            {sol.icon}
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: sol.color }}>
            Industry Solution
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl leading-tight">
          {sol.title}
        </h1>
        <p className="mt-2 text-lg italic text-[var(--muted)]">{sol.tagline}</p>
        <p className="mt-5 text-base leading-7 text-[var(--muted2)] max-w-2xl">{sol.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-accent">Talk to a Domain Expert →</Link>
          <Link href="/client-success" className="btn-outline">See Case Studies →</Link>
        </div>
      </div>

      {/* Outcomes */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {sol.outcomes.map((o) => (
          <div
            key={o.label}
            className="rounded-xl border bg-[var(--bg2)] px-5 py-5 text-center"
            style={{ borderColor: `${sol.color}30` }}
          >
            <div className="text-2xl font-bold" style={{ color: sol.color }}>{o.metric}</div>
            <div className="mt-1 text-xs text-[var(--muted)]">{o.label}</div>
          </div>
        ))}
      </div>

      {/* Challenges */}
      <div className="mt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Industry Challenges</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">What we understand about your world</h2>
        <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-6">
          <ul className="space-y-3">
            {sol.challenges.map((ch) => (
              <li key={ch} className="flex items-start gap-2.5 text-sm text-[var(--muted2)]">
                <span className="mt-0.5 shrink-0 font-bold" style={{ color: sol.color }}>→</span>
                {ch}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Capabilities */}
      <div className="mt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">What We Deliver</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">
          Quality engineering for {sol.title}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sol.capabilities.map((cap) => (
            <div
              key={cap.name}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-5 transition hover:border-[var(--border2)]"
            >
              <h3 className="text-sm font-semibold text-[var(--text)]">{cap.name}</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--muted2)]">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Tools & Platforms</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {sol.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted2)]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="mt-16 rounded-2xl p-10 text-center"
        style={{ background: `linear-gradient(135deg, ${sol.color}12 0%, var(--bg2) 100%)`, border: `1px solid ${sol.color}30` }}
      >
        <h2 className="text-2xl font-semibold text-[var(--text)]">
          Ready to elevate {sol.title} quality?
        </h2>
        <p className="mt-3 text-sm text-[var(--muted2)] max-w-lg mx-auto">
          Talk to one of our {sol.title} domain specialists and discover how TestYantra can transform your quality engineering outcomes.
        </p>
        <Link href="/contact" className="btn-accent mt-6 inline-block">
          Schedule a Consultation →
        </Link>
      </div>
    </V2InnerShell>
  );
}
