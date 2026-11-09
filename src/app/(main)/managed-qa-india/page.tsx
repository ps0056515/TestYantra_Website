import { ServiceLandingPage } from "@/components/marketing/ServiceLandingPage";
import { staticPageSeo } from "@/lib/seo";

export const metadata = staticPageSeo.managedQaIndia;

export default function ManagedQaIndiaPage() {
  return (
    <ServiceLandingPage
      eyebrow="Managed QA · India & global delivery"
      h1="Managed QA services in India for global enterprises"
      subtitle="End-to-end quality ownership from Bangalore and follow-the-sun delivery — managed PODs, QA CoE, IV&V, and CI/CD-aligned testing for 217+ clients."
      bullets={[
        "Dedicated managed QA pods with SLAs, governance, and release sign-off",
        "Centre of Excellence models with reusable frameworks and traceability",
        "Offshore, nearshore, and onshore blends — Bengaluru HQ plus US, UK, and APAC",
        "Banking, healthcare, SaaS, and retail programmes with regulatory-aware testing",
        "Integrated with test automation, crowd testing, and production monitoring",
      ]}
      proof={[
        { value: "217+", label: "Global clients" },
        { value: "18", label: "Years in QA" },
        { value: "6", label: "Delivery locations" },
        { value: "14", label: "Industries served" },
      ]}
      contactHref="/contact?interest=managed-qa"
      relatedHref="/qe/solutions/managed-qa"
      relatedLabel="Managed QA service details →"
    />
  );
}
