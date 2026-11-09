import { brand } from "@/content/site";

export const termsMeta = {
  lastUpdated: "2026-11-02",
  operator: brand.legalName,
  contactEmail: brand.emailPrimary,
} as const;

export type TermsSection = { id: string; title: string; paragraphs: string[] };

export const termsSections: TermsSection[] = [
  {
    id: "acceptance",
    title: "Use of this website",
    paragraphs: [
      `This website is operated by ${termsMeta.operator} (“TestYantra”). By accessing or using testyantra.com, you agree to these website terms. If you do not agree, please do not use the site.`,
      "Separate written agreements govern paid services, statements of work, and client engagements. If there is a conflict between these website terms and a signed contract, the contract prevails.",
    ],
  },
  {
    id: "information",
    title: "Information on the site",
    paragraphs: [
      "Content describes our services, capabilities, case summaries, and group companies in general terms. It is for information only and is not an offer, guarantee of results, or professional advice.",
      "We may update pages, pricing references, and service descriptions without notice. Case studies and metrics illustrate typical outcomes; your results may differ.",
    ],
  },
  {
    id: "ip",
    title: "Intellectual property",
    paragraphs: [
      "TestYantra names, logos, site design, text, and graphics are owned by us or our licensors. You may view and print pages for personal, non-commercial use. You may not copy, scrape, republish, or use our content for commercial purposes without written permission.",
    ],
  },
  {
    id: "links",
    title: "Third-party links",
    paragraphs: [
      "The site may link to group companies (e.g. TechnoElevate, Academy, FireFlink) or other third parties. We are not responsible for their content or privacy practices. Review their policies when you leave our site.",
    ],
  },
  {
    id: "enquiries",
    title: "Enquiries and submissions",
    paragraphs: [
      "When you submit a contact form, you confirm that the information you provide is accurate to the best of your knowledge and that you are authorised to share it.",
      "How we handle personal data is described in our Privacy notice. Do not submit confidential or proprietary information you cannot share with us for the purpose of responding to your enquiry.",
    ],
  },
  {
    id: "liability",
    title: "Disclaimer and liability",
    paragraphs: [
      "The site is provided “as is”. To the fullest extent permitted by law, we disclaim warranties of any kind regarding the site and its content. We are not liable for indirect, incidental, or consequential damages arising from use of the site or reliance on its content.",
      "Nothing in these terms excludes liability that cannot be excluded under applicable law.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      "These website terms are governed by the laws of India. Courts in Bengaluru, Karnataka shall have exclusive jurisdiction, subject to mandatory consumer or data-protection provisions that may apply in your location.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      `Questions about these terms: ${termsMeta.contactEmail}. Privacy: see our Privacy notice.`,
    ],
  },
];
