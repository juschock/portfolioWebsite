import { notFound } from "next/navigation";
import LabExperience from "./LabExperience";

export function generateStaticParams() {
  return ["ops", "finance", "field", "studio"].map((slug) => ({ slug }));
}

export default async function LabPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!["ops", "finance", "field", "studio"].includes(slug)) notFound();
  return <LabExperience kind={slug as "ops" | "finance" | "field" | "studio"} />;
}
