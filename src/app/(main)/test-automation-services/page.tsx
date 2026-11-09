import { ServiceLandingPage } from "@/components/marketing/ServiceLandingPage";
import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.testAutomationServices;

export default function TestAutomationServicesPage() {
  return (
    <ServiceLandingPage
      eyebrow="Test automation · Quality engineering"
      h1="Test automation services & CI/CD quality gates"
      subtitle="Playwright, Selenium, and API automation built for your pipeline — faster regression, lower maintenance, and measurable coverage for enterprise product teams."
      bullets={[
        "Custom framework design (Playwright, Selenium, Cypress) aligned to your stack",
        "API, UI, and service-layer automation with CI/CD release gating",
        "Migration from legacy tools (UFT, Tosca, Selenium-only) with coverage preserved",
        "AI-assisted self-healing and maintenance reduction in mature programmes",
        "FireFlink and TestYantra automation CoE options for scriptless and coded automation",
      ]}
      proof={[
        { value: "85%", label: "Automation coverage (mature)" },
        { value: "80%", label: "Faster regression (typical)" },
        { value: "20M+", label: "Tests executed (group)" },
        { value: "217+", label: "Enterprise clients" },
      ]}
      contactHref="/contact?interest=test-automation"
      relatedHref="/qe/solutions/test-automation"
      relatedLabel="Test automation service details →"
    />
  );
}
