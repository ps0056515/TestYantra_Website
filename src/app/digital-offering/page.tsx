import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";

export const metadata = {
  title: "Digital Offering — TestYantra",
  description:
    "TestYantra's Digital Offering: Quality engineering for digital transformation — web, mobile, API, cloud and omnichannel platforms. Skills and frameworks for your digital journey.",
};

const offerings = [
  {
    icon: "📱",
    color: "#e8401a",
    title: "Mobile Application Testing",
    tagline: "iOS, Android and cross-platform quality",
    desc: "Comprehensive testing across native iOS, Android, React Native and Flutter applications — functional, UX, performance, compatibility and security testing on real devices and emulators.",
    services: ["Functional & Regression Testing", "Real Device Testing", "Performance & Load Testing", "Compatibility across OS versions", "Accessibility (WCAG) Validation"],
    link: "/services/crowd-testing",
  },
  {
    icon: "🌐",
    color: "#5c6fff",
    title: "Web & API Testing",
    tagline: "End-to-end digital channel quality",
    desc: "Full-stack web application testing and deep API quality engineering — REST, GraphQL and microservices — ensuring your digital channels deliver seamless, reliable user experiences at scale.",
    services: ["Cross-browser Testing", "Responsive Design Validation", "API Contract Testing", "Integration Testing", "Performance at Web Scale"],
    link: "/services/test-automation",
  },
  {
    icon: "☁️",
    color: "#00bfa8",
    title: "Cloud & Digital Platform Testing",
    tagline: "Cloud-native quality at speed",
    desc: "Quality engineering for cloud-native, SaaS and digital platform applications — containerised environments, microservices architectures and multi-tenant SaaS products tested for reliability, scalability and security.",
    services: ["Cloud Environment Testing", "Microservices Testing", "Multi-tenant SaaS Quality", "Scalability Testing", "Cloud Security Assessment"],
    link: "/services/devops-cicd",
  },
  {
    icon: "🔄",
    color: "#f0a500",
    title: "Omnichannel & Digital Experience",
    tagline: "Consistent quality across every touchpoint",
    desc: "End-to-end omnichannel quality assurance across web, mobile, kiosk, in-store and voice channels — ensuring your customers receive seamless, consistent digital experiences regardless of the channel they choose.",
    services: ["Cross-channel Journey Testing", "Digital Experience Monitoring", "Localisation & i18n Testing", "Accessibility Compliance", "UX & Usability Validation"],
    link: "/services/managed-qa",
  },
  {
    icon: "🚀",
    color: "#e8401a",
    title: "DevOps & Continuous Delivery",
    tagline: "Quality woven into every digital pipeline",
    desc: "Continuous testing embedded into your digital delivery pipeline — CI/CD quality gates, automated regression, shift-left testing and deployment validation — so your digital platforms ship faster without breaking.",
    services: ["CI/CD Pipeline Integration", "Automated Quality Gates", "Shift-Left Testing", "Deployment Verification", "Infrastructure Testing"],
    link: "/services/devops-cicd",
  },
  {
    icon: "🤖",
    color: "#5c6fff",
    title: "AI-Powered Digital Testing",
    tagline: "Intelligent quality for digital transformation",
    desc: "Applying AI and machine learning to every layer of digital testing — LLM-generated test suites, self-healing automation, visual AI regression and predictive defect analytics — for digital platforms that evolve at speed.",
    services: ["AI Test Generation", "Self-Healing Automation", "Visual AI Regression", "Predictive Risk Analytics", "Intelligent Test Selection"],
    link: "/ai",
  },
];

const digitalStats = [
  { n: "500+", l: "Digital Projects Delivered" },
  { n: "360+", l: "Global Clients" },
  { n: "85%", l: "Avg. Automation Coverage" },
  { n: "50+", l: "Countries — Crowd Testing" },
];

export default function DigitalOfferingPage() {
  return (
    <V2InnerShell>
      {/* Hero */}
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Digital Offering</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl leading-tight">
          Skills and frameworks for your<br />Digital Transformation
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--muted2)] max-w-2xl">
          TestYantra&apos;s Digital Offering brings quality engineering to every layer of your digital landscape — mobile apps, web platforms, APIs, cloud infrastructure and omnichannel journeys — with the automation depth and AI intelligence to keep pace with your digital ambitions.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-accent">Discuss Your Digital Needs →</Link>
          <Link href="/capabilities" className="btn-outline">Explore All Capabilities →</Link>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {digitalStats.map((s) => (
          <div key={s.l} className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-5 py-4">
            <div className="text-2xl font-bold text-[var(--accent)]">{s.n}</div>
            <div className="mt-1 text-xs text-[var(--muted)]">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Offerings */}
      <div className="mt-14">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">What We Cover</div>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">Digital quality engineering — end to end</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {offerings.map((off) => (
            <div
              key={off.title}
              className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-7 transition hover:border-[var(--border2)]"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl"
                style={{ background: off.color }}
              />
              <div className="flex items-start gap-4 mt-1">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                  style={{ background: `${off.color}18`, border: `1px solid ${off.color}30` }}
                >
                  {off.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{off.title}</h3>
                  <p className="text-xs italic text-[var(--muted)]">{off.tagline}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--muted2)]">{off.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {off.services.map((s) => (
                  <span key={s} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 text-xs text-[var(--muted2)]">
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href={off.link}
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: off.color }}
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Crowd testing callout */}
      <div
        className="mt-16 rounded-2xl p-8"
        style={{ background: "linear-gradient(135deg, rgba(232,64,26,0.08) 0%, var(--bg2) 100%)", border: "1px solid rgba(232,64,26,0.2)" }}
      >
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="text-4xl shrink-0">👥</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">Crowd Testing — Real Users, Real Confidence</h3>
            <p className="text-sm leading-6 text-[var(--muted2)] mb-4 max-w-2xl">
              Go live with confidence — TestYantra&apos;s global crowd of 10,000+ real-device testers across 50+ countries validates your digital product under real-world conditions: diverse devices, OS versions, network configurations and geographies. Leverage the power of crowd testing to catch what automation misses.
            </p>
            <Link href="/services/crowd-testing" className="btn-accent inline-block">
              Explore Crowd Testing →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-[var(--accent)] bg-[var(--bg2)] p-10 text-center">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Ready to transform your digital quality?</h2>
        <p className="mt-3 text-sm text-[var(--muted2)] max-w-lg mx-auto">
          Talk to our digital quality specialists and discover how TestYantra can accelerate your digital transformation with confidence.
        </p>
        <Link href="/contact" className="btn-accent mt-6 inline-block">
          Start the Conversation →
        </Link>
      </div>
    </V2InnerShell>
  );
}
