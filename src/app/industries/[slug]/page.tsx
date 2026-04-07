import { notFound } from "next/navigation";
import { industries } from "@/content/site";
import { IndustryDetailClient } from "./IndustryDetailClient";

type Params = Promise<{ slug: string }>;

export default async function IndustryDetailPage(props: { params: Params }) {
  const { slug } = await props.params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return notFound();

  return <IndustryDetailClient industry={industry} />;
}
