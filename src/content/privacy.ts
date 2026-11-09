/**
 * Privacy notice — reflects default TestYantra practices (Zoho mail, website API).
 * Update if CRM, retention, or privacy mailbox changes.
 */

import { brand } from "@/content/site";

export const privacyMeta = {
  lastUpdated: "2026-11-02",
  dataController: brand.legalName,
  dataProtectionContact: brand.privacyEmail,
  salesMailbox: brand.emailPrimary,
  enquiryRetentionMonths: 24,
  /** Retention for active client records — legal may extend contract term */
  clientRecordYears: 7,
} as const;

export type PrivacySection = { id: string; title: string; paragraphs: string[] };

export const privacySections: PrivacySection[] = [
  {
    id: "overview",
    title: "Overview",
    paragraphs: [
      `${privacyMeta.dataController} (“TestYantra”, “we”, “us”) operates testyantra.com to present our quality engineering, product engineering, and training services. This notice explains how we handle personal information when you use the site, especially when you submit a contact or enquiry form.`,
      "We aim to meet transparency expectations under applicable privacy laws, including India’s Digital Personal Data Protection Act, 2023, where it applies. This page is not legal advice.",
    ],
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    paragraphs: [
      "Enquiry form: your name, work email, area of interest, industry, message, and whether you optionally consent to marketing updates.",
      "Browsing: if Google Analytics (GA4) is enabled on our production site, we may receive aggregated usage data (e.g. pages viewed, device/browser type, approximate location). We store light/dark theme preference in your browser’s local storage only — not on our servers.",
      "Please do not submit sensitive personal data (health, financial accounts, etc.) in free-text fields unless necessary for your enquiry and you agree we may process it for that purpose.",
    ],
  },
  {
    id: "why-we-use-it",
    title: "Why we use your information",
    paragraphs: [
      "We use enquiry information to respond to you, understand your needs, and follow up by email or phone about TestYantra services. This is based on our legitimate interest in business communications and, where relevant, steps at your request before a contract.",
      "Marketing updates are sent only if you tick the separate optional checkbox on the form. You may opt out at any time (e.g. reply “unsubscribe” or email our privacy contact) without affecting handling of your original enquiry.",
      "Analytics helps us improve site content and measure interest in our services.",
    ],
  },
  {
    id: "where-it-goes",
    title: "Where enquiries go and who can access them",
    paragraphs: [
      `When you submit the contact form, our website sends your details over HTTPS to our application server, which delivers them by email (typically via Zoho SMTP) to our designated commercial mailbox: ${privacyMeta.salesMailbox}. We may later add automation (e.g. CRM or webhook) — those systems would receive the same enquiry fields for the same purpose.`,
      "Access is restricted to people who need it to respond to enquiries or operate the website: for example members of our sales and solutions teams, relevant delivery leadership, and IT staff who administer email or hosting. Access to the Zoho mailbox is limited to authorised accounts.",
      "If your enquiry is about TechnoElevate product engineering, Academy training, or another group company, we may forward your name, email, and message to colleagues in that unit so they can reply. We do not sell personal information to third parties.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep information",
    paragraphs: [
      `Unconverted website enquiries: we aim to retain them for up to ${privacyMeta.enquiryRetentionMonths} months from the date of submission, then delete or anonymise them in email, backups, or CRM in line with our records schedule.`,
      `If you become an active client, related contact and project data may be kept longer (typically up to ${privacyMeta.clientRecordYears} years after the relationship ends, or as required by law, regulation, or contract).`,
    ],
  },
  {
    id: "rights",
    title: "Your rights and contacts",
    paragraphs: [
      "Depending on applicable law, you may have rights to access, correct, erase, or restrict processing of your personal data, or to object to certain processing. You may also complain to a supervisory authority where one applies.",
      `Privacy and data-rights requests: ${privacyMeta.dataProtectionContact} (subject line: “Privacy request”). We respond within a reasonable period and may need to verify your identity.`,
      `General sales enquiries: ${privacyMeta.salesMailbox} or the phone numbers on our Locations page.`,
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We use HTTPS on the public website, access controls on corporate email (Zoho), and limit who can configure enquiry delivery on the server.",
      "Web infrastructure (including reverse proxies such as nginx) is maintained and patched by our operations team. An externally visible software version number does not by itself describe security posture.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    paragraphs: [
      "We may update this notice. The “Last updated” date at the top of this page shows the latest revision.",
    ],
  },
];
