import Link from "next/link";
import type { Metadata } from "next";
import { sections, type SectionKey } from "@/content/sections";
import { brand, industries } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { INTEREST_OPTIONS, interestFromSlug, type ContactInterest } from "@/lib/contactInterest";
import { industrySlugToContactLabel } from "@/lib/contactIndustry";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { ApproachTabs } from "@/components/section/ApproachTabs";
import {
  CaseStudyCards,
  CtaBand,
  Eyebrow,
  FaqList,
  GhostButton,
  Hero,
  ModelGrid,
  PageHeader,
  PlatformCards,
  SectionHeading,
  SolutionGrid,
  StackGrid,
  StatBand,
  StepList,
  TrustStrip,
  WhyFails,
  Wrap,
} from "@/components/section/blocks";

type PageKey = "home" | "howWeWork" | "platforms" | "solutions" | "caseStudies" | "contact";

const pagePath: Record<PageKey, string> = {
  home: "",
  howWeWork: "/how-we-work",
  platforms: "/platforms",
  solutions: "/solutions",
  caseStudies: "/case-studies",
  contact: "/contact",
};

export function sectionMetadata(key: SectionKey, page: PageKey): Metadata {
  const s = sections[key];
  const seo = s.seo[page];
  return createMetadata({
    title: seo.title,
    description: seo.description,
    path: `${s.basePath}${pagePath[page]}`,
    absoluteTitle: page === "home",
    keywords:
      key === "qe"
        ? ["quality engineering", "software testing services", "managed QA", "test automation", "TestYantra"]
        : ["AI engineering", "generative AI", "RAG", "agentic AI", "application engineering", "TestYantra"],
  });
}

export function SectionHomePage({ sectionKey }: { sectionKey: SectionKey }) {
  const s = sections[sectionKey];
  const other = sections[sectionKey === "qe" ? "ai" : "qe"];

  return (
    <>
      <FaqJsonLd faqs={s.faqs} />
      <Hero section={s} />
      <TrustStrip />
      <StatBand stats={s.stats} />
      <WhyFails data={s.whyFails} />

      <div>
        <Wrap className="py-20 sm:py-24">
          <SectionHeading eyebrow={s.approach.eyebrow} title={s.approach.title} sub={s.approach.sub} />
          <ApproachTabs pillars={s.approach.pillars} />
        </Wrap>
      </div>

      <div className="bg-[var(--bg2)]">
        <Wrap className="py-20 sm:py-24">
          <SectionHeading
            eyebrow="How we work"
            title="Five steps from idea to measurable outcome"
            sub={s.howWeWork.intro}
          />
          <StepList steps={s.howWeWork.steps} />
          <div className="mt-8">
            <GhostButton href={`${s.basePath}/how-we-work`}>Explore the full model</GhostButton>
          </div>
        </Wrap>
      </div>

      <div>
        <Wrap className="py-20 sm:py-24">
          <SectionHeading eyebrow="Solutions" title={s.solutions.title} sub={s.solutions.intro} />
          <SolutionGrid items={s.solutions.items.slice(0, 6)} contactHref={`${s.basePath}/contact`} />
          <div className="mt-10">
            <GhostButton href={`${s.basePath}/solutions`}>View all solutions</GhostButton>
          </div>
        </Wrap>
      </div>

      <div className="bg-[var(--bg2)]">
        <Wrap className="py-20 sm:py-24">
          <SectionHeading eyebrow="Case studies" title="Proven in production" sub={s.caseStudies.intro} />
          <CaseStudyCards items={s.caseStudies.items.slice(0, 2)} />
          <div className="mt-10">
            <GhostButton href={`${s.basePath}/case-studies`}>All case studies</GhostButton>
          </div>
        </Wrap>
      </div>

      <div>
        <Wrap className="py-20 sm:py-24">
          <SectionHeading eyebrow="FAQ" title="Questions buyers ask us" />
          <FaqList faqs={s.faqs} />
        </Wrap>
      </div>

      <div>
        <Wrap className="pb-20">
          <Link
            href={other.basePath}
            className="group flex flex-col items-start justify-between gap-4 rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8 transition hover:border-[var(--text)] sm:flex-row sm:items-center"
          >
            <div>
              <Eyebrow>Also from TestYantra</Eyebrow>
              <p className="mt-3 text-xl font-bold tracking-tight">Explore {other.name}</p>
              <p className="mt-1 text-sm text-[var(--muted2)]">{other.hero.sub}</p>
            </div>
            <span className="shrink-0 text-sm font-semibold transition group-hover:translate-x-1">Visit →</span>
          </Link>
        </Wrap>
      </div>

      <CtaBand section={s} />
    </>
  );
}

export function HowWeWorkPage({ sectionKey }: { sectionKey: SectionKey }) {
  const s = sections[sectionKey];
  return (
    <>
      <PageHeader
        eyebrow={`${s.shortName} · How we work`}
        title="A delivery model built on outcomes, not hours"
        sub={s.howWeWork.intro}
      />
      <Wrap className="pb-8">
        <StepList steps={s.howWeWork.steps} />
      </Wrap>
      <Wrap className="py-20">
        <SectionHeading title={s.howWeWork.modelsTitle} sub="Choose the model that fits your stage — and change it as you grow." />
        <ModelGrid models={s.howWeWork.models} />
      </Wrap>
      <CtaBand section={s} />
    </>
  );
}

export function PlatformsPage({ sectionKey }: { sectionKey: SectionKey }) {
  const s = sections[sectionKey];
  return (
    <>
      <PageHeader eyebrow={`${s.shortName} · Platforms`} title={s.platforms.title} sub={s.platforms.intro} />
      <Wrap className="pb-20">
        <PlatformCards items={s.platforms.items} />
        <StackGrid title={s.platforms.stackTitle} stack={s.platforms.stack} />
      </Wrap>
      <CtaBand section={s} />
    </>
  );
}

export function SolutionsPage({ sectionKey }: { sectionKey: SectionKey }) {
  const s = sections[sectionKey];
  return (
    <>
      <PageHeader eyebrow={`${s.shortName} · Solutions`} title={s.solutions.title} sub={s.solutions.intro} />
      <Wrap className="pb-20">
        <SolutionGrid items={s.solutions.items} contactHref={`${s.basePath}/contact`} />
      </Wrap>
      <CtaBand section={s} />
    </>
  );
}

export function CaseStudiesPage({ sectionKey }: { sectionKey: SectionKey }) {
  const s = sections[sectionKey];
  return (
    <>
      <PageHeader eyebrow={`${s.shortName} · Case studies`} title={s.caseStudies.title} sub={s.caseStudies.intro} />
      <Wrap className="pb-20">
        <CaseStudyCards items={s.caseStudies.items} />
      </Wrap>
      <CtaBand section={s} />
    </>
  );
}

const industrySelectOptions = [...industries.map((i) => i.name), "Other"];

export async function SectionContactPage({
  sectionKey,
  searchParams,
}: {
  sectionKey: SectionKey;
  searchParams: Promise<{ industry?: string; interest?: string }>;
}) {
  const s = sections[sectionKey];
  const { industry: industrySlug, interest } = await searchParams;
  const fromSlug = industrySlugToContactLabel(industrySlug);
  const defaultIndustry =
    fromSlug && industrySelectOptions.includes(fromSlug) ? fromSlug : industrySelectOptions[0];
  const defaultInterest = interestFromSlug(interest) ?? (s.contactInterest as ContactInterest);

  return (
    <>
      <PageHeader
        eyebrow={`${s.shortName} · Contact`}
        title="Book a discovery call"
        sub="Tell us what you are building or fixing. A specialist from this practice will reply within one business day."
      />
      <Wrap className="grid gap-10 pb-24 lg:grid-cols-12">
        <aside className="space-y-6 lg:col-span-4">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-7 text-sm">
            <div className="font-bold">Email</div>
            <a href={`mailto:${brand.emailPrimary}`} className="mt-1 block text-[var(--sec)] hover:underline">
              {brand.emailPrimary}
            </a>
            <div className="mt-5 font-bold">Phone</div>
            <a href={`tel:${brand.phoneIndia.replace(/\s/g, "")}`} className="mt-1 block text-[var(--sec)] hover:underline">
              {brand.phoneIndia}
            </a>
            <div className="mt-5 font-bold">Global HQ</div>
            <p className="mt-1 text-[var(--muted2)]">Bangalore, India · 6 locations worldwide</p>
            <Link href="/company/locations" className="mt-2 inline-block font-semibold text-[var(--sec)]">
              View all offices →
            </Link>
          </div>
        </aside>
        <div className="lg:col-span-8">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-tight">Send us a message</h2>
            <p className="mt-2 text-sm text-[var(--muted2)]">
              <Link href="/privacy" className="font-semibold text-[var(--sec)] hover:underline">
                Privacy notice
              </Link>
            </p>
            <ContactForm
              defaultInterest={defaultInterest}
              defaultIndustry={defaultIndustry}
              industryOptions={industrySelectOptions}
              interestOptions={[...INTEREST_OPTIONS]}
            />
          </div>
        </div>
      </Wrap>
    </>
  );
}
