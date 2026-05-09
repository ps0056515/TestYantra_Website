export type EngagementModel = {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  color: string;
  summary: string;
  description: string;
  features: string[];
  bestFor: string[];
  howItWorks: { step: string; desc: string }[];
  outcomes: { metric: string; label: string }[];
};

export const engagementModels: EngagementModel[] = [
  {
    slug: "dedicated-team",
    title: "Dedicated QA Team",
    tagline: "Your team, our expertise, your success",
    icon: "👥",
    color: "#e8401a",
    summary:
      "A fully dedicated team of QA engineers embedded into your delivery organisation — aligned to your processes, tools and culture, operating as a seamless extension of your engineering team.",
    description:
      "The Dedicated QA Team model gives you a dedicated, long-term quality engineering team hand-picked for your technology stack and domain. Unlike traditional outsourcing, your team is aligned to your ways of working from day one — participating in standups, sprint planning and retrospectives, using your tools, and building institutional knowledge about your product. You get continuity, deep context and a team that genuinely cares about your product quality.",
    features: [
      "Hand-picked engineers matched to your tech stack and domain",
      "Dedicated team lead / QA manager included",
      "Full integration into your Agile/Scrum ceremonies",
      "Tooling alignment — your tools, our expertise",
      "Continuous knowledge transfer and documentation",
      "Monthly performance reviews and QBRs",
      "SLA-backed delivery with defined quality KPIs",
      "Transparent dashboards and real-time reporting",
    ],
    bestFor: [
      "Organisations with ongoing, long-term QA needs",
      "Teams seeking deep product knowledge and continuity",
      "Companies wanting to scale QA capacity quickly",
      "Enterprises with complex, multi-platform products",
      "Organisations undergoing digital transformation",
    ],
    howItWorks: [
      { step: "Discovery & Alignment", desc: "We map your technology landscape, processes and culture to design the ideal team composition and onboarding plan." },
      { step: "Team Formation", desc: "Engineers are hand-selected from our talent pool — matched by skills, domain experience and culture fit. You interview before we onboard." },
      { step: "Onboarding Sprint", desc: "A structured 2-week onboarding sprint where the team learns your product, tools and processes before touching production tasks." },
      { step: "Active Delivery", desc: "Your dedicated team operates as part of your engineering organisation — sprinting, reviewing and delivering quality with full accountability." },
      { step: "Continuous Improvement", desc: "Quarterly health checks, retrospectives and capability upgrades keep the team sharp and the quality bar rising." },
    ],
    outcomes: [
      { metric: "2–4 wks", label: "Time to operational readiness" },
      { metric: "93%", label: "Team retention rate" },
      { metric: "60%", label: "Defect leakage reduction" },
      { metric: "45%", label: "Faster release cycles" },
    ],
  },
  {
    slug: "managed-coe",
    title: "Managed QA COE",
    tagline: "Centre of Excellence — owned and operated by TestYantra",
    icon: "🏛️",
    color: "#5c6fff",
    summary:
      "A fully managed Quality Centre of Excellence — strategy, tooling, governance, execution and continuous improvement delivered as a complete managed service, with TestYantra accountable for quality outcomes.",
    description:
      "The Managed QA COE model is our most comprehensive engagement. TestYantra assumes end-to-end accountability for your quality engineering function — from strategy and process design to tooling governance, team management, execution and continuous improvement. We build, run and optimise your COE while you focus on product and innovation. It is quality engineering as a fully managed capability — not just a resource.",
    features: [
      "Complete ownership of quality strategy and roadmap",
      "Tooling selection, licensing and administration",
      "Multi-team, multi-product quality governance",
      "Dedicated QA Director / Head of Quality",
      "KPI dashboards and executive reporting",
      "Risk-based test planning and prioritisation",
      "Continuous improvement programmes",
      "Audit-ready compliance and documentation",
    ],
    bestFor: [
      "Enterprises seeking to outsource their entire QA function",
      "Organisations without an internal QA leadership layer",
      "Companies with multiple product lines needing unified governance",
      "Businesses that need fast, comprehensive QA stand-up",
      "Regulated industries requiring compliance-grade quality management",
    ],
    howItWorks: [
      { step: "QA Maturity Assessment", desc: "We baseline your current quality capability using our proprietary maturity framework — identifying critical gaps and opportunities." },
      { step: "COE Blueprint", desc: "Design the COE operating model — team structure, tooling stack, governance framework, KPIs and 90-day stand-up plan." },
      { step: "COE Stand-Up", desc: "We hire, onboard and operationalise the COE within 4–6 weeks — standing up people, processes and tooling in parallel." },
      { step: "Steady-State Operations", desc: "The COE runs at full capacity — covering all teams, products and delivery pipelines under unified quality governance." },
      { step: "Maturity Progression", desc: "Quarterly maturity reviews and structured improvement programmes drive measurable quality uplift over time." },
    ],
    outcomes: [
      { metric: "4–6 wks", label: "COE stand-up time" },
      { metric: "L2→L4", label: "Avg. maturity progression in 12 months" },
      { metric: "55%", label: "Reduction in quality-related incidents" },
      { metric: "40%", label: "Cost of quality reduction" },
    ],
  },
  {
    slug: "project-based",
    title: "Project-Based Engagement",
    tagline: "Defined scope, fixed outcome, zero ambiguity",
    icon: "🎯",
    color: "#00bfa8",
    summary:
      "A time-bound, outcome-defined quality engagement for specific projects — with clear deliverables, milestones and accountability from kick-off to sign-off.",
    description:
      "The Project-Based model is ideal when you need quality expertise for a defined initiative — a platform migration, a major release, a compliance audit or a performance engineering project. We agree deliverables, milestones and acceptance criteria upfront, then execute with full accountability. You get predictable costs, clear outcomes and no hidden overruns — quality delivered on time and within scope.",
    features: [
      "Fixed-scope, outcome-defined engagements",
      "Deliverables and acceptance criteria agreed upfront",
      "Dedicated project manager and QA lead",
      "Weekly status reports and milestone tracking",
      "Risk and issues management throughout",
      "Formal handover and knowledge transfer",
      "Post-engagement support window included",
      "Suitable for time-critical or compliance-driven needs",
    ],
    bestFor: [
      "One-time or seasonal quality needs",
      "Platform migrations and digital transformations",
      "Compliance audits and regulatory certifications",
      "Performance testing ahead of peak seasons",
      "Security assessments and VAPT programmes",
    ],
    howItWorks: [
      { step: "Scope Definition", desc: "Detailed requirements gathering, risk assessment and scope validation to ensure complete alignment before work begins." },
      { step: "Proposal & Agreement", desc: "Fixed-price proposal with clear deliverables, milestones, team composition and acceptance criteria — no surprises." },
      { step: "Execution", desc: "The project team executes against the agreed plan — with weekly status reporting and proactive risk management throughout." },
      { step: "Review & Signoff", desc: "Formal review of all deliverables against acceptance criteria, client signoff and comprehensive documentation handover." },
      { step: "Post-Engagement Support", desc: "30-day post-engagement support window for defect triage, knowledge transfer and team capability uplift." },
    ],
    outcomes: [
      { metric: "95%", label: "On-time delivery rate" },
      { metric: "Fixed", label: "Price with zero overruns" },
      { metric: "100%", label: "Deliverable acceptance rate" },
      { metric: "30 days", label: "Post-project support included" },
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    tagline: "The right talent, right when you need it",
    icon: "🔧",
    color: "#f0a500",
    summary:
      "Rapidly scale your QA team with pre-vetted, expert engineers — on-demand, on-site or remote — fully integrated into your team with zero recruitment overhead.",
    description:
      "When you need to move fast — scale for a major release, backfill a critical role, or add specialised skills for a specific technology — TestYantra's Staff Augmentation model puts expert engineers in your team within days, not months. All our engineers are pre-vetted across technical depth, communication and collaboration skills. They integrate into your team as full members — your tools, your processes, your culture.",
    features: [
      "Pre-vetted engineers across 50+ tools and frameworks",
      "On-site, remote or hybrid placement",
      "Typical onboarding in 5–7 business days",
      "Flexible tenure — short-term or multi-year",
      "Specialist skills: automation, performance, AI testing",
      "Direct reporting to your management team",
      "Background-checked and reference-verified",
      "Easy scale-up or scale-down with 2-week notice",
    ],
    bestFor: [
      "Filling immediate skill gaps or vacancies",
      "Scaling teams for major releases or peak delivery periods",
      "Accessing specialist skills not available in-house",
      "Tryout model before permanent hiring decisions",
      "Hybrid models alongside in-house QA teams",
    ],
    howItWorks: [
      { step: "Requirement Profiling", desc: "We work with you to define the exact skills, experience, tools and cultural attributes required for the role." },
      { step: "Candidate Shortlisting", desc: "Within 48 hours, we present 2–3 pre-vetted candidates matched to your requirements — with CV, skills profile and assessment results." },
      { step: "Interview & Selection", desc: "You interview and select your preferred candidate — we handle all contracting, compliance and onboarding logistics." },
      { step: "Integration", desc: "The engineer joins your team — integrated into your tools, processes and delivery ceremonies from day one." },
      { step: "Performance Management", desc: "Regular check-ins, skills assessments and replacement guarantees ensure the placement continues to deliver at the required level." },
    ],
    outcomes: [
      { metric: "5–7 days", label: "Average time-to-placement" },
      { metric: "48 hrs", label: "First candidate shortlist" },
      { metric: "97%", label: "Placement satisfaction rate" },
      { metric: "2 weeks", label: "Replacement guarantee period" },
    ],
  },
  {
    slug: "taas",
    title: "Testing as a Service",
    tagline: "On-demand quality, consumption-based pricing",
    icon: "☁️",
    color: "#9c27b0",
    summary:
      "Flexible, on-demand testing capability delivered as a cloud service — consumption-based pricing, elastic capacity, and access to TestYantra's full automation and crowd testing infrastructure without capital investment.",
    description:
      "Testing as a Service (TaaS) is TestYantra's most flexible engagement model. Access our full quality engineering capability on demand — test execution, automation infrastructure, crowd testing networks and performance labs — on a consumption basis. No fixed headcount, no capital expenditure, no long-term commitments. Scale up for major releases, scale down between sprints — paying only for what you use.",
    features: [
      "On-demand access to 2,200+ expert QA engineers",
      "Elastic capacity — scale instantly for major releases",
      "Consumption-based pricing (per test cycle, per sprint, per use case)",
      "Access to TestYantra's automation infrastructure",
      "Crowd testing network of 10,000+ real devices globally",
      "Performance testing lab — JMeter, Gatling, k6 at scale",
      "AI-powered test execution and reporting",
      "Self-service portal with real-time dashboards",
    ],
    bestFor: [
      "Startups and scale-ups needing flexible quality capacity",
      "Enterprise teams with variable testing demand",
      "Organisations with seasonal peak testing requirements",
      "Companies exploring QA transformation before committing",
      "Product teams needing specific capability on demand",
    ],
    howItWorks: [
      { step: "Onboarding", desc: "Quick 3-day onboarding — we connect to your repositories, issue tracker and CI/CD pipeline, and set up your TaaS portal." },
      { step: "Service Catalogue", desc: "Access our full service catalogue — functional, automation, performance, crowd, security — and request services on demand." },
      { step: "Elastic Execution", desc: "Services are executed on demand — capacity scales automatically to match your sprint and release requirements." },
      { step: "Real-Time Visibility", desc: "Live dashboards show execution progress, defect metrics, quality KPIs and consumption spend in real time." },
      { step: "Monthly Billing", desc: "Transparent, itemised monthly billing based on actual consumption — with no minimum commitment and full flexibility to adjust." },
    ],
    outcomes: [
      { metric: "3 days", label: "Time to first test execution" },
      { metric: "Zero", label: "Capital investment required" },
      { metric: "40%", label: "Average cost saving vs. fixed model" },
      { metric: "10,000+", label: "Real devices in crowd network" },
    ],
  },
];
