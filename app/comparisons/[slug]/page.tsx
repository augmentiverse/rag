import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ToolComparisonTable } from "@/components/ToolComparisonTable";
import { comparisons } from "@/data/comparisons";

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comparison = comparisons.find((item) => item.slug === slug);
  return { title: comparison ? comparison.title : "Comparison", description: comparison?.summary };
}

export default async function ComparisonDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = comparisons.find((item) => item.slug === slug);
  if (!comparison) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Comparisons", href: "/comparisons" }, { label: comparison.title }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black">{comparison.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">{comparison.summary}</p>
        <div className="mt-8"><ToolComparisonTable comparison={comparison} /></div>
      </section>
    </>
  );
}
