/** SEO FAQ — mirrors buyer questions (similar to FireFlink FAQ blocks for rich results). */

export type FaqItem = { question: string; answer: string };

export const homepageFaqs: FaqItem[] = [
  {
    question: "What software testing services does TestYantra provide?",
    answer:
      "TestYantra offers managed QA, functional and E2E testing, test automation, API and microservices testing, crowd testing, accessibility and UAT, AI quality engineering, production monitoring, and professional IV&V services — delivered via managed PODs, CoE, or staff augmentation across 14 industries.",
  },
  {
    question: "Do you offer offshore QA and test automation from India?",
    answer:
      "Yes. TestYantra is headquartered in Bangalore with global delivery centres in the US, UK, Ireland, Netherlands, and APAC. We provide onshore, nearshore, and offshore models with follow-the-sun coverage for 217+ enterprise clients.",
  },
  {
    question: "How is TestYantra different from a pure staffing vendor?",
    answer:
      "We bring reusable automation frameworks, AI-augmented QE practices, and accountable delivery models (managed services, project-as-a-service, build-operate-transfer) — not just bodies. Product engineering via TechnoElevate includes TestYantra quality guardrails in the same group.",
  },
  {
    question: "Can TestYantra help with AI and LLM testing?",
    answer:
      "Yes. Our AI quality practice covers Testing the AI (model validation, drift, bias, LLM safety) and AI in Testing (self-healing automation, agentic workflows, framework migration). We validate AI systems before production and deploy AI to accelerate your existing QA operations.",
  },
  {
    question: "How do I request a quote or consultation?",
    answer:
      "Use the contact form at testyantra.com/contact, email contactus@testyantra.com, or call +91 9742490958. Share your industry, release cadence, and whether you need managed QA, automation, or product engineering — we typically respond within one business day.",
  },
  {
    question: "What is FireFlink and how does it relate to TestYantra?",
    answer:
      "FireFlink is the group's AI-powered scriptless test automation platform (NLP test authoring, device cloud, enterprise app support). TestYantra provides managed QA and quality engineering services; many clients use FireFlink as the automation engine within TestYantra-led programmes.",
  },
];
