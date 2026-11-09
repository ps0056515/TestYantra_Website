import { homepageFaqs, type FaqItem } from "@/content/faq";
import { brand, locations, services } from "@/content/site";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export function FaqJsonLd({ faqs = homepageFaqs }: { faqs?: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  const hq = locations.find((l) => l.city.includes("Global HQ")) ?? locations[0];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
        alternateName: ["TestYantra", "Test Yantra"],
        url: siteConfig.url,
        logo: absoluteUrl("/icon.png"),
        email: siteConfig.email,
        telephone: siteConfig.phone,
        sameAs: [siteConfig.linkedIn, brand.linkedIn],
        address: {
          "@type": "PostalAddress",
          streetAddress: hq.addressLines.join(", "),
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560004",
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: siteConfig.email,
            telephone: siteConfig.phone,
            areaServed: ["IN", "US", "GB", "APAC"],
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-IN",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/qe/solutions?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#professional-service`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: absoluteUrl("/icon.png"),
        description: siteConfig.defaultDescription,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: "Worldwide",
        serviceType: services.slice(0, 8).map((s) => s.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Quality Engineering & Testing Services",
          itemListElement: services.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.summary,
              url: absoluteUrl(`/qe/solutions/${s.slug}`),
            },
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type ServiceJsonLdProps = {
  name: string;
  description: string;
  slug: string;
};

export function ServiceJsonLd({ name, description, slug }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(`/qe/solutions/${slug}`),
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    serviceType: name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type ArticleJsonLdProps = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
};

export function ArticleJsonLd({ title, description, slug, publishedAt }: ArticleJsonLdProps) {
  const url = absoluteUrl(`/insights/${slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon.png"),
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
