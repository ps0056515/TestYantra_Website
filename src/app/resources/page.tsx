import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";

export const metadata = {
  title: "Resources — TestYantra",
  description:
    "Quality engineering knowledge hub — case studies, blog articles, webinars, QA maturity reports, the QA Academy and more from TestYantra.",
};

export default function ResourcesPage() {
  return (
    <V2InnerShell>
      {/* Hero */}
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Resources</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl leading-tight">
          Think. Learn. Engineer.
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--muted2)] max-w-2xl">
          The TestYantra knowledge hub — practical guides, in-depth research, client case studies, webinars and the QA Academy. Everything you need to elevate your engineering quality.
        </p>
      </div>

      {/* Featured resource categories */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: "📖",
            color: "#e8401a",
            title: "Blog & Articles",
            desc: "In-depth articles on test automation, AI in testing, DevOps quality, QA strategy and engineering leadership — written by practitioners for practitioners.",
            link: "/outcomes",
            cta: "Read Articles →",
            badge: "Latest",
          },
          {
            icon: "🏆",
            color: "#5c6fff",
            title: "Case Studies",
            desc: "Real outcomes from real engagements — how TestYantra helped banking, healthcare, retail and tech clients transform their quality engineering capabilities.",
            link: "/client-success",
            cta: "View Case Studies →",
            badge: "Client Stories",
          },
          {
            icon: "🎓",
            color: "#00bfa8",
            title: "QA Academy",
            desc: "Structured learning programmes for QA and engineering professionals — bootcamps, certifications, automation workshops and AI testing courses.",
            link: "/academy",
            cta: "Explore Academy →",
            badge: "Training",
          },
          {
            icon: "📊",
            color: "#f0a500",
            title: "Research & Reports",
            desc: "Annual quality engineering benchmarks, the QA Maturity Report and the State of AI in Testing — data-driven insights for engineering leaders.",
            link: "/outcomes",
            cta: "Download Reports →",
            badge: "Research",
          },
          {
            icon: "🎙️",
            color: "#e8401a",
            title: "Webinars & Events",
            desc: "Live and on-demand webinars covering the latest in test automation, AI quality, DevOps and quality transformation — with TestYantra experts and industry guests.",
            link: "/outcomes",
            cta: "Watch Webinars →",
            badge: "On-Demand",
          },
          {
            icon: "💼",
            color: "#5c6fff",
            title: "Careers",
            desc: "Join India's leading quality engineering company — open roles for automation engineers, QA leads, DevOps engineers, AI/ML specialists and more.",
            link: "/contact",
            cta: "View Openings →",
            badge: "We're Hiring",
          },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-7 transition hover:border-[var(--border2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <div
              className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl opacity-70 group-hover:opacity-100 transition"
              style={{ background: item.color }}
            />
            <div className="flex items-start justify-between">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
              >
                {item.icon}
              </div>
              <span
                className="rounded-full px-2.5 py-1 text-xs font-semibold"
                style={{ background: `${item.color}20`, color: item.color }}
              >
                {item.badge}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-[var(--text)] group-hover:text-white transition">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">{item.desc}</p>
            <div className="mt-5 text-sm font-medium" style={{ color: item.color }}>
              {item.cta}
            </div>
          </Link>
        ))}
      </div>

      {/* Featured articles */}
      <div className="mt-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Featured Reading</div>
        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Latest from the Knowledge Hub</h2>
          <Link href="/outcomes" className="text-sm text-[var(--accent)] hover:underline">View All →</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { cat: "AI Engineering", title: "How Generative AI is Rewriting the Rules of Test Automation", date: "March 2025 · 6 min read", link: "/outcomes/generative-ai-test-automation", thumb: "🤖" },
            { cat: "DevOps", title: "Continuous Testing as the Backbone of a High-Performing DevOps Culture", date: "February 2025 · 5 min read", link: "/outcomes/continuous-testing-devops-culture", thumb: "🔄" },
            { cat: "Quality Engineering", title: "The QA Maturity Ladder: Moving from Manual Testing to AI-Powered Quality", date: "January 2025 · 8 min read", link: "/outcomes/qa-maturity-ladder", thumb: "📊" },
          ].map((art) => (
            <Link
              key={art.title}
              href={art.link}
              className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg2)] overflow-hidden transition hover:border-[var(--border2)]"
            >
              <div className="flex h-32 items-center justify-center text-4xl bg-[var(--bg3)]">
                {art.thumb}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{art.cat}</span>
                <h3 className="mt-2 text-sm font-semibold leading-5 text-[var(--text)] group-hover:text-[var(--accent)] transition">{art.title}</h3>
                <p className="mt-auto pt-3 text-xs text-[var(--muted)]">{art.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured case studies */}
      <div className="mt-16">
        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Featured Case Studies</h2>
          <Link href="/client-success" className="text-sm text-[var(--accent)] hover:underline">All Stories →</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { industry: "Banking", metric: "72%", metricLabel: "faster release cycles", desc: "QA COE for a Tier-1 global bank — accelerating digital releases across 14 markets while maintaining regulatory compliance." },
            { industry: "Telecom", metric: "Daily", metricLabel: "deployments unlocked", desc: "Continuous testing pipeline for a leading OTT streaming platform — enabling daily releases with 85% automation coverage." },
            { industry: "Healthcare", metric: "100%", metricLabel: "HIPAA compliance", desc: "HIPAA-compliant quality engineering for a fast-growing HealthTech platform — zero production defects from day one." },
          ].map((cs) => (
            <Link
              key={cs.industry}
              href="/client-success"
              className="group rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-5 transition hover:border-[var(--border2)]"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{cs.industry}</span>
              <div className="mt-3">
                <span className="text-3xl font-bold text-[var(--text)]">{cs.metric}</span>
                <span className="ml-2 text-xs text-[var(--muted)]">{cs.metricLabel}</span>
              </div>
              <p className="mt-2 text-sm leading-5 text-[var(--muted2)]">{cs.desc}</p>
              <p className="mt-3 text-xs font-semibold text-[var(--accent)] group-hover:underline">Read case study →</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[var(--text)]">Stay ahead of the quality curve</h2>
            <p className="mt-2 text-sm text-[var(--muted2)]">
              Monthly insights on AI testing, DevOps quality, automation strategy and industry benchmarks — directly to your inbox.
            </p>
          </div>
          <Link href="/contact" className="btn-accent shrink-0">
            Subscribe →
          </Link>
        </div>
      </div>
    </V2InnerShell>
  );
}
