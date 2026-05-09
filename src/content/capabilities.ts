export type CapabilityArea = {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  color: string;
  summary: string;
  description: string;
  services: { name: string; desc: string; slug?: string }[];
  outcomes: { metric: string; label: string }[];
  tools: string[];
  useCases: { title: string; desc: string }[];
};

export const capabilities: CapabilityArea[] = [
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    tagline: "Structured quality, engineered for scale",
    icon: "🔬",
    color: "#e8401a",
    summary:
      "Comprehensive QA services spanning functional, regression, UAT and exploratory testing — with dedicated teams, governance frameworks and measurable outcomes.",
    description:
      "TestYantra's Quality Assurance practice delivers structured, outcome-driven testing across functional, regression, exploratory and user acceptance dimensions. Our QA COEs embed expert teams into your delivery pipeline — covering web, mobile, API and desktop platforms — with rigorous governance, test asset management and continuous improvement built-in from day one.",
    services: [
      { name: "Managed QA Services", desc: "End-to-end quality as a managed service — dedicated teams, tooling and governance.", slug: "managed-qa" },
      { name: "Functional & Regression Testing", desc: "Comprehensive test coverage across all functional areas with automated regression suites." },
      { name: "Crowd Testing", desc: "Real-device, real-user testing across geographies, OS versions and network conditions.", slug: "crowd-testing" },
      { name: "Mobile & Digital Testing", desc: "Functional, UX and compatibility testing across iOS, Android and cross-platform apps.", slug: "crowd-testing" },
      { name: "UAT & Business Validation", desc: "Structured UAT programs with business stakeholder engagement and sign-off governance." },
      { name: "Exploratory Testing", desc: "Charter-driven exploratory sessions that surface defects automated suites miss." },
    ],
    outcomes: [
      { metric: "45%", label: "Average defect leakage reduction" },
      { metric: "3×", label: "Faster UAT sign-off cycles" },
      { metric: "98%", label: "Test asset reuse across releases" },
      { metric: "360+", label: "Global clients served" },
    ],
    tools: ["Jira", "Zephyr", "TestRail", "qTest", "ALM", "Xray", "Confluence", "BrowserStack", "Sauce Labs"],
    useCases: [
      { title: "Digital Banking Platform", desc: "Deployed a 40-member QA COE for a Tier-1 bank, reducing regression cycle from 3 weeks to 4 days while maintaining regulatory compliance across 14 markets." },
      { title: "E-Commerce Super App", desc: "Established end-to-end functional testing across 6 digital channels for a retail giant, cutting customer-reported defects by 62% within two quarters." },
      { title: "Healthcare SaaS Platform", desc: "Built a HIPAA-compliant QA framework for a HealthTech company, enabling weekly releases with zero compliance violations." },
    ],
  },
  {
    slug: "quality-engineering",
    title: "Quality Engineering",
    tagline: "Automation-first, platform-driven quality at velocity",
    icon: "⚡",
    color: "#5c6fff",
    summary:
      "Building scalable, intelligent test automation frameworks — from UI and API to performance and security — integrated deep into CI/CD pipelines for continuous quality feedback.",
    description:
      "Quality Engineering at TestYantra goes beyond writing scripts. We architect end-to-end automation ecosystems — selecting the right frameworks, building maintainable asset libraries, integrating with your CI/CD toolchain and instrumenting quality metrics dashboards — so your team ships faster with confidence, not anxiety.",
    services: [
      { name: "Test Automation Engineering", desc: "Scalable automation frameworks across UI, API, mobile and data — built for longevity.", slug: "test-automation" },
      { name: "Performance Engineering", desc: "Load, stress and soak testing ensuring systems hold up under real-world peak demand.", slug: "performance-engineering" },
      { name: "Security Testing", desc: "VAPT, penetration testing and OWASP compliance protecting your applications from modern threats.", slug: "security-testing" },
      { name: "API & Integration Testing", desc: "Deep API contract, integration and data validation testing across microservices and enterprise systems." },
      { name: "Continuous Testing in CI/CD", desc: "Quality gates woven into every pipeline stage — Jenkins, GitHub Actions, Azure DevOps, GitLab CI.", slug: "devops-cicd" },
      { name: "QA Centre of Excellence", desc: "Building internal QA capability — frameworks, standards, governance and tooling ecosystems." },
    ],
    outcomes: [
      { metric: "80%", label: "Average automation coverage achieved" },
      { metric: "70%", label: "Reduction in regression execution time" },
      { metric: "60%", label: "Fewer escaped defects to production" },
      { metric: "2200+", label: "Automation engineers globally" },
    ],
    tools: ["Selenium", "Playwright", "Cypress", "Appium", "RestAssured", "Postman", "JMeter", "Gatling", "k6", "Burp Suite", "OWASP ZAP"],
    useCases: [
      { title: "OTT Streaming Platform", desc: "Designed a cross-platform automation framework for a global media company, achieving 85% automation coverage and enabling daily deployments across 18 markets." },
      { title: "Fintech Payments Engine", desc: "Built an API and performance testing suite for a payments platform, reducing regression from 2 days to 3 hours and validating 50K+ TPS under peak load." },
      { title: "Insurance Core Platform", desc: "Implemented a data-driven automation framework covering 1,200+ test cases for a core insurance system, slashing regression costs by 55%." },
    ],
  },
  {
    slug: "intelligent-automation",
    title: "Intelligent Automation",
    tagline: "AI meets quality engineering — test smarter, release faster",
    icon: "🤖",
    color: "#00bfa8",
    summary:
      "Applying generative AI, machine learning and intelligent automation to every stage of the quality lifecycle — predicting failures, healing broken tests and generating coverage at unprecedented speed.",
    description:
      "TestYantra's Intelligent Automation practice sits at the frontier of AI and quality engineering. We operationalize LLMs for test generation, build ML-driven defect prediction models, deploy self-healing frameworks that auto-repair broken scripts and apply computer vision for visual regression — dramatically compressing the quality feedback loop and allowing your teams to focus on what matters: building great software.",
    services: [
      { name: "AI-Powered Test Generation", desc: "LLM-driven test suite generation from requirements, user stories and code diffs — 60% faster coverage.", slug: "ai-testing" },
      { name: "Self-Healing Automation", desc: "AI frameworks that auto-repair broken test scripts when UIs change — zero manual intervention.", slug: "self-healing-automation" },
      { name: "Predictive Defect Analytics", desc: "ML models trained on code signals identify high-risk areas before testing begins, reducing re-test cycles.", slug: "predictive-defect-analytics" },
      { name: "Visual AI & Accessibility", desc: "Computer vision-powered UI comparison and accessibility checks — catch rendering bugs humans miss.", slug: "visual-ai-accessibility" },
      { name: "AI Copilot for QA Teams", desc: "GenAI-powered test planning assistant that recommends test strategies, risk areas and coverage gaps." },
      { name: "Intelligent Test Orchestration", desc: "AI-driven test selection and prioritisation — run the right tests at the right time in the pipeline." },
    ],
    outcomes: [
      { metric: "60%", label: "Faster test suite generation" },
      { metric: "90%", label: "Reduction in script maintenance effort" },
      { metric: "40%", label: "Defect prediction accuracy improvement" },
      { metric: "3×", label: "Pipeline throughput increase" },
    ],
    tools: ["OpenAI GPT-4", "Anthropic Claude", "LangChain", "TensorFlow", "PyTorch", "Applitools", "Percy", "Healenium", "Functionize", "Testim"],
    useCases: [
      { title: "Global E-Commerce Platform", desc: "Deployed AI test generation for a retail super-app, reducing test authoring time by 65% and expanding functional coverage by 40% within the same sprint capacity." },
      { title: "Digital Banking App", desc: "Implemented a self-healing framework for a bank's mobile app, eliminating 92% of test maintenance effort while maintaining 95% automation coverage through continuous UI changes." },
      { title: "SaaS Analytics Platform", desc: "Applied predictive defect analytics to a SaaS company's CI pipeline, identifying 78% of production defects before they reached staging — saving $2.4M in customer escalation costs." },
    ],
  },
  {
    slug: "development",
    title: "Development & DevOps",
    tagline: "Build it right, deploy it fearlessly",
    icon: "🚀",
    color: "#f0a500",
    summary:
      "Full-stack application engineering, cloud-native development and DevOps transformation — with quality embedded from sprint zero through every CI/CD stage.",
    description:
      "TestYantra's Development & DevOps practice delivers quality-first engineering across the full SDLC. From web and mobile application development to microservices architecture, API engineering and cloud-native transformation — combined with DevOps practices that embed continuous testing, deployment automation and infrastructure-as-code — we ensure what gets built is built to last and deployed with confidence.",
    services: [
      { name: "Application Development", desc: "Full-stack web, mobile and API engineering — React, Node.js, Python, Java — quality-first from sprint zero.", slug: "application-development" },
      { name: "DevOps & CI/CD Engineering", desc: "Pipeline automation, infrastructure-as-code and continuous delivery orchestration across your delivery chain.", slug: "devops-cicd" },
      { name: "Cloud-Native Engineering", desc: "Microservices architecture, containerisation and cloud-native development for AWS, Azure and GCP.", slug: "cloud-native-engineering" },
      { name: "API & Integration Engineering", desc: "API design, development and integration engineering — REST, GraphQL, gRPC, event-driven architectures." },
      { name: "Mobile Application Development", desc: "Native iOS, Android and cross-platform (React Native, Flutter) mobile engineering with built-in quality gates." },
      { name: "Training & QA Academy", desc: "Structured upskilling for engineering teams — automation bootcamps, certification programs and workshops.", slug: "training" },
    ],
    outcomes: [
      { metric: "40%", label: "Faster time-to-market" },
      { metric: "99.9%", label: "Deployment success rate" },
      { metric: "60%", label: "Reduction in post-release defects" },
      { metric: "17+", label: "Years of engineering expertise" },
    ],
    tools: ["React", "Next.js", "Node.js", "Python", "Java", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Azure DevOps", "AWS", "Azure", "GCP"],
    useCases: [
      { title: "InsurTech Platform Modernisation", desc: "Re-architected a legacy monolith to cloud-native microservices for an insurance company, reducing deployment frequency from quarterly to weekly with zero regression incidents." },
      { title: "FinTech Mobile App", desc: "Delivered a React Native mobile banking app with 98% automated test coverage, enabling 14-day release cycles and a 4.8-star App Store rating at launch." },
      { title: "DevOps Transformation", desc: "Implemented a full DevOps pipeline for a retail enterprise — CI/CD, IaC, automated quality gates — compressing release cycles from 8 weeks to 3 days." },
    ],
  },
];
