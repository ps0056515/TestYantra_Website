import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";

export const metadata = {
  title: "Agentic Suite — TestYantra.AI",
  description:
    "TestYantra Agentic Suite: An orchestrated multi-agent system that autonomously generates, heals, triages and governs quality engineering — embedded in your stack, not bolted on.",
};

/* ── P1 Agents ─────────────────────────────────────────────── */
const p1Agents = [
  {
    id: "self-healing",
    label: "CHANGE-AWARE",
    priority: "P1",
    icon: "💗",
    title: "Self-Healing Agent",
    tagline: "Watches requirement diffs (JIRA/ADO) and DOM/UI changes — auto-updates framework, page objects and impacted scripts. Auto-merges when confident, raises PR when borderline.",
    capabilities: [
      "Monitors JIRA/ADO for requirement changes",
      "Detects DOM & UI selector drift automatically",
      "Auto-updates page objects and test scripts",
      "Confident changes auto-merge; borderline → PR",
    ],
    maps: "HealBot™",
    color: "#e8401a",
  },
  {
    id: "test-authoring",
    label: "BDD → PLAYWRIGHT + POM",
    priority: "P1",
    icon: "</>",
    title: "Test Authoring Agent",
    tagline: "Converts BDD/Gherkin into runnable Playwright scripts wired to your Page Object Model. Selectors, waits, data parameterization, PR-ready commit to your repo.",
    capabilities: [
      "BDD/Gherkin → Playwright + POM generation",
      "Intelligent selector strategy and wait logic",
      "Test data parameterisation built-in",
      "PR-ready commit directly to your repository",
    ],
    maps: "IntelliTest™",
    color: "#5c6fff",
  },
  {
    id: "triage",
    label: "FAILURE INTELLIGENCE",
    priority: "P1",
    icon: "🔍",
    title: "Triage & Root-Cause Agent",
    tagline: "On test failure: classifies as real defect, env issue, flaky, or app change. Pulls logs, pinpoints likely line of code, attaches evidence to the bug. Routes to the right team.",
    capabilities: [
      "Failure classification: defect / env / flaky / change",
      "Automated log pull and evidence collection",
      "Pinpoints likely failing line of code",
      "Smart routing to the right team or backlog",
    ],
    maps: null,
    color: "#00bfa8",
  },
];

/* ── P2/P3 Agents ──────────────────────────────────────────── */
const futureAgents = [
  {
    priority: "P2",
    icon: "📈",
    title: "Predictive Reporting",
    desc: "Risk heatmaps, defect prediction, release-readiness scores from historical run + churn data.",
    maps: "DefectIQ™",
    color: "#5c6fff",
  },
  {
    priority: "P3",
    icon: "🔧",
    title: "Test Generator",
    desc: "Stories, BRDs and Figma flows — BDD/Gherkin test cases with traceability.",
    maps: "IntelliTest™",
    color: "#f0a500",
  },
  {
    priority: "P3",
    icon: "🔗",
    title: "API & Contract",
    desc: "Schema-aware test generation, contract validation, microservice integration coverage.",
    maps: null,
    color: "#00bfa8",
  },
  {
    priority: "P3",
    icon: "🗄️",
    title: "Test Data & Env",
    desc: "Provisions data, masks PII, sets up env state, tears down. BFSI/Healthcare-ready.",
    maps: null,
    color: "#e8401a",
  },
];

/* ── Embedded stack items ──────────────────────────────────── */
const stackItems = [
  {
    icon: "🔌",
    title: "Your Framework",
    detail: "Playwright / Selenium / WDIO",
  },
  {
    icon: "⚙️",
    title: "Your CI/CD",
    detail: "GitHub / GitLab / Azure DevOps",
  },
  {
    icon: "👤",
    title: "Human-in-Loop",
    detail: "Gated PRs, review thresholds",
  },
  {
    icon: "🛡️",
    title: "Governance",
    detail: "Audit trail, SLA logging",
  },
];

/* ── Priority badge colours ────────────────────────────────── */
const priorityColor: Record<string, string> = {
  P1: "#f0a500",
  P2: "#5c6fff",
  P3: "#6b7280",
};

export default function AgenticSuitePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(240,165,0,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 90% 60%, rgba(92,111,255,0.1) 0%, transparent 55%), var(--bg)",
          borderBottom: "1px solid var(--border)",
          padding: "96px 0 72px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--muted)", marginBottom: 32 }}>
            <Link href="/ai" style={{ color: "var(--muted)", textDecoration: "none" }}>TestYantra.AI</Link>
            <span>/</span>
            <span style={{ color: "var(--muted2)" }}>Agentic Suite</span>
          </div>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            borderRadius: 100, border: "1px solid rgba(240,165,0,0.4)",
            background: "rgba(240,165,0,0.1)", padding: "5px 16px", marginBottom: 24,
          }}>
            <span style={{ fontSize: 14 }}>⚡</span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f0a500" }}>
              TestYantra.AI — Agentic Suite
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-fraunces, serif)",
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 600, lineHeight: 1.1,
            color: "var(--text)", marginBottom: 20,
          }}>
            Autonomous quality engineering.<br />
            <span style={{ color: "#f0a500" }}>Orchestrated.</span> Embedded. Governed.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--muted2)", maxWidth: 640, marginBottom: 40 }}>
            The Agentic Suite is a coordinated multi-agent system that autonomously authors tests, heals broken automation,
            triages failures and predicts release risk — running inside your stack, not replacing it.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-accent">Request a Demo →</Link>
            <Link href="/ai" className="btn-outline">← Back to TestYantra.AI</Link>
          </div>
        </div>
      </section>

      <V2InnerShell>

        {/* ── ORCHESTRATOR AGENT (full-width hero card) ──────── */}
        <div className="mt-14">
          <div
            style={{
              borderRadius: 20,
              background: "linear-gradient(135deg, rgba(240,165,0,0.14) 0%, rgba(240,165,0,0.06) 60%, var(--bg2) 100%)",
              border: "2px solid rgba(240,165,0,0.4)",
              padding: "36px 40px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background pattern */}
            <div style={{
              position: "absolute", inset: 0, opacity: 0.04,
              backgroundImage: "radial-gradient(circle at 1px 1px, #f0a500 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: "rgba(240,165,0,0.2)", border: "2px solid rgba(240,165,0,0.5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, flexShrink: 0,
                  }}>
                    🕹️
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f0a500", marginBottom: 4 }}>
                      Orchestrator Agent
                    </div>
                    <h2 style={{ fontSize: 26, fontWeight: 700, color: "var(--text)", margin: "0 0 6px", fontFamily: "var(--font-fraunces, serif)" }}>
                      The Central Intelligence
                    </h2>
                    <p style={{ fontSize: 14, color: "var(--muted2)", margin: 0, maxWidth: 540, lineHeight: 1.65 }}>
                      Routes work across the suite · Coordinates handoffs · Enforces human-in-loop gates · Logs every decision for SLA audit
                    </p>
                  </div>
                </div>
                {/* Priority roadmap */}
                <div style={{ display: "flex", gap: 12, flexShrink: 0, flexWrap: "wrap" }}>
                  {[["P1", "Now", "#f0a500"], ["P2", "Next", "#5c6fff"], ["P3", "Roadmap", "#6b7280"]].map(([p, label, color]) => (
                    <div key={p} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: "0.06em" }}>{p}</div>
                      <div style={{ fontSize: 10, color: "var(--muted)", marginTop: 2 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orchestrator capabilities */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
                {[
                  "Routes tasks to the right agent",
                  "Coordinates cross-agent handoffs",
                  "Enforces human-in-loop review gates",
                  "Full decision audit trail for SLA compliance",
                  "Escalates edge cases to human reviewers",
                  "Manages agent priority queue (P1 → P2 → P3)",
                ].map((cap) => (
                  <span key={cap} style={{
                    fontSize: 12, padding: "4px 12px", borderRadius: 100,
                    background: "rgba(240,165,0,0.12)", color: "#f0a500",
                    border: "1px solid rgba(240,165,0,0.25)",
                  }}>
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── P1 AGENTS ──────────────────────────────────────── */}
        <div className="mt-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-5">
            Priority 1 — Now Available
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {p1Agents.map((agent) => (
              <div
                key={agent.id}
                style={{
                  borderRadius: 18,
                  background: "var(--bg2)",
                  border: `1px solid ${agent.color}35`,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: "absolute", inset: "0 0 auto 0", height: 3,
                  borderRadius: "18px 18px 0 0",
                  background: agent.color,
                }} />

                {/* Label + Priority */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, marginTop: 4 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: agent.color }}>
                    {agent.label}
                  </span>
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 100,
                    background: `${priorityColor.P1}20`, color: priorityColor.P1,
                    border: `1px solid ${priorityColor.P1}40`,
                  }}>
                    P1 Now
                  </span>
                </div>

                {/* Icon */}
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `${agent.color}18`, border: `1px solid ${agent.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: agent.icon === "</>" ? 14 : 24, fontWeight: 700,
                  color: agent.icon === "</>" ? agent.color : "inherit",
                  marginBottom: 16, flexShrink: 0,
                }}>
                  {agent.icon}
                </div>

                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", margin: "0 0 10px", fontFamily: "var(--font-fraunces, serif)" }}>
                  {agent.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--muted2)", lineHeight: 1.65, margin: "0 0 16px", flex: 1 }}>
                  {agent.tagline}
                </p>

                {/* Capabilities */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                  {agent.capabilities.map((cap) => (
                    <li key={cap} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "var(--muted2)" }}>
                      <span style={{ color: agent.color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {cap}
                    </li>
                  ))}
                </ul>

                {/* Maps to */}
                {agent.maps && (
                  <div style={{
                    fontSize: 11, padding: "4px 10px", borderRadius: 6,
                    background: `${agent.color}10`, color: agent.color,
                    border: `1px solid ${agent.color}25`,
                    alignSelf: "flex-start",
                  }}>
                    Powers {agent.maps}
                  </div>
                )}
                {!agent.maps && (
                  <div style={{
                    fontSize: 11, padding: "4px 10px", borderRadius: 6,
                    background: "rgba(0,191,168,0.08)", color: "#00bfa8",
                    border: "1px solid rgba(0,191,168,0.2)",
                    alignSelf: "flex-start",
                  }}>
                    New capability
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── P2 / P3 ROADMAP AGENTS ─────────────────────────── */}
        <div className="mt-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-5">
            Priority 2 &amp; 3 — Roadmap
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {futureAgents.map((agent) => (
              <div
                key={agent.title}
                style={{
                  borderRadius: 16,
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  padding: "22px 20px",
                  opacity: 0.85,
                  position: "relative",
                }}
              >
                {/* Priority badge */}
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 100,
                  background: `${priorityColor[agent.priority]}15`,
                  color: priorityColor[agent.priority],
                  border: `1px solid ${priorityColor[agent.priority]}35`,
                }}>
                  {agent.priority}
                </div>

                <div style={{ fontSize: 28, marginBottom: 12 }}>{agent.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", margin: "0 0 8px", fontFamily: "var(--font-fraunces, serif)" }}>
                  {agent.title}
                </h3>
                <p style={{ fontSize: 12, color: "var(--muted2)", lineHeight: 1.6, margin: "0 0 12px" }}>{agent.desc}</p>

                {agent.maps && (
                  <div style={{
                    fontSize: 10, padding: "3px 8px", borderRadius: 5,
                    background: `${agent.color}10`, color: agent.color,
                    border: `1px solid ${agent.color}20`,
                    display: "inline-block",
                  }}>
                    → {agent.maps}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── ORCHESTRATOR FLOW DIAGRAM (text) ───────────────── */}
        <div className="mt-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">How it works</div>
          <h2 className="mt-1 text-2xl font-semibold text-[var(--text)] mb-8">The Orchestrator coordinates everything</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
            {[
              { step: "01", title: "Trigger", desc: "A requirement change, failed build, or scheduled cycle triggers the Orchestrator Agent.", icon: "⚡" },
              { step: "02", title: "Route", desc: "Orchestrator evaluates the trigger type and dispatches to the appropriate specialist agent(s).", icon: "🕹️" },
              { step: "03", title: "Execute", desc: "Agents work autonomously — healing scripts, authoring tests, triaging failures — in parallel where possible.", icon: "🤖" },
              { step: "04", title: "Gate & Govern", desc: "Human-in-loop gates review borderline decisions. Every action is logged to the SLA audit trail.", icon: "🛡️" },
            ].map((item, idx) => (
              <div key={item.step} style={{
                padding: "28px 24px",
                background: "var(--bg2)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                borderLeft: "1px solid var(--border)",
                borderRight: idx === 3 ? "1px solid var(--border)" : "none",
                borderRadius: idx === 0 ? "16px 0 0 16px" : idx === 3 ? "0 16px 16px 0" : 0,
                position: "relative",
              }}>
                {/* Connector arrow */}
                {idx < 3 && (
                  <div style={{
                    position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)",
                    width: 28, height: 28, borderRadius: "50%",
                    background: "var(--bg3)", border: "1px solid var(--border2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, color: "#f0a500", zIndex: 2,
                  }}>→</div>
                )}
                <div style={{ fontSize: 24, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#f0a500", marginBottom: 4, textTransform: "uppercase" }}>
                  Step {item.step}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", margin: "0 0 8px", fontFamily: "var(--font-fraunces, serif)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 12, color: "var(--muted2)", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── EMBEDDED IN YOUR STACK ─────────────────────────── */}
        <div className="mt-14">
          <div
            style={{
              borderRadius: 20,
              background: "var(--bg2)",
              border: "1px solid var(--border2)",
              padding: "32px 36px",
            }}
          >
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f0a500", marginBottom: 6 }}>
                Embedded in Your Stack
              </div>
              <p style={{ fontSize: 14, color: "var(--muted2)", margin: 0 }}>
                Agents run on the client&apos;s framework, repo, pipeline and tools — no rip-and-replace
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {stackItems.map((item) => (
                <div key={item.title} style={{
                  borderRadius: 14,
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  padding: "20px 18px",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 11, color: "var(--muted2)", lineHeight: 1.5 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── METRICS STRIP ──────────────────────────────────── */}
        <div
          className="mt-8"
          style={{
            borderRadius: 16,
            background: "linear-gradient(90deg, rgba(240,165,0,0.08) 0%, var(--bg2) 50%, rgba(92,111,255,0.08) 100%)",
            border: "1px solid var(--border)",
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "MAINTENANCE COST", dir: "↓", color: "#e8401a" },
            { label: "COVERAGE", dir: "↑", color: "#00bfa8" },
            { label: "CYCLE TIME", dir: "↓", color: "#e8401a" },
            { label: "DEFECT ESCAPE", dir: "↓", color: "#e8401a" },
          ].map((m, i) => (
            <div key={m.label} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && <span style={{ margin: "0 16px", color: "var(--border2)", fontSize: 16 }}>•</span>}
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--muted2)", textTransform: "uppercase" }}>
                {m.label}
              </span>
              <span style={{ fontSize: 18, fontWeight: 800, color: m.color, marginLeft: 6 }}>{m.dir}</span>
            </div>
          ))}
        </div>

        {/* ── PRODUCT MAPPING ────────────────────────────────── */}
        <div className="mt-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">Product Mapping</div>
          <h2 className="mt-1 text-2xl font-semibold text-[var(--text)] mb-6">
            How the Agentic Suite powers TestYantra.AI products
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--bg2)]">
                  <th className="px-5 py-3 text-left font-semibold text-[var(--muted2)]">Agent</th>
                  <th className="px-5 py-3 text-left font-semibold text-[var(--muted2)]">TestYantra.AI Product</th>
                  <th className="px-5 py-3 text-left font-semibold text-[var(--muted2)]">Priority</th>
                  <th className="px-5 py-3 text-left font-semibold text-[var(--muted2)]">Key Outcome</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { agent: "Self-Healing Agent", product: "HealBot™", priority: "P1", outcome: "Eliminates automation maintenance overhead" },
                  { agent: "Test Authoring Agent", product: "IntelliTest™", priority: "P1", outcome: "BDD → runnable Playwright in minutes" },
                  { agent: "Triage & Root-Cause Agent", product: "New capability", priority: "P1", outcome: "Failure classified and routed in < 2 min" },
                  { agent: "Predictive Reporting", product: "DefectIQ™", priority: "P2", outcome: "Release-readiness score before go/no-go" },
                  { agent: "Test Generator", product: "IntelliTest™", priority: "P3", outcome: "Stories + Figma → traced BDD test cases" },
                  { agent: "API & Contract", product: "New capability", priority: "P3", outcome: "Microservice contract coverage automated" },
                  { agent: "Test Data & Env", product: "New capability", priority: "P3", outcome: "PII-safe data provisioned on demand" },
                ].map((row, i) => (
                  <tr key={row.agent} className={`border-b border-[var(--border)] transition hover:bg-[var(--surface)] ${i % 2 === 0 ? "" : "bg-[var(--surface)]"}`}>
                    <td className="px-5 py-3.5 font-medium text-[var(--text)]">{row.agent}</td>
                    <td className="px-5 py-3.5">
                      <span className="text-[var(--accent)] font-semibold">{row.product}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 100,
                        background: `${priorityColor[row.priority]}15`, color: priorityColor[row.priority],
                        border: `1px solid ${priorityColor[row.priority]}30`,
                      }}>
                        {row.priority}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[var(--muted2)]">{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── CTA ────────────────────────────────────────────── */}
        <div
          className="mt-16 rounded-2xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(240,165,0,0.1) 0%, rgba(92,111,255,0.06) 50%, var(--bg2) 100%)",
            border: "1px solid rgba(240,165,0,0.25)",
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f0a500", marginBottom: 12 }}>
            Agentic Suite
          </div>
          <h2 style={{
            fontFamily: "var(--font-fraunces, serif)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 600, color: "var(--text)", marginBottom: 16,
          }}>
            Ready to deploy autonomous quality engineering?
          </h2>
          <p className="text-sm text-[var(--muted2)] max-w-lg mx-auto mb-8">
            The Agentic Suite runs in your repo, your pipeline, your tools — no platform migration, no rip-and-replace.
            P1 agents can be deployed in a two-week sprint.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent">Request a P1 Deployment →</Link>
            <Link href="/ai" className="btn-outline">Back to TestYantra.AI</Link>
          </div>
        </div>
      </V2InnerShell>
    </>
  );
}
