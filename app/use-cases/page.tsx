import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideGrid } from "@/components/GuideGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { UseCaseCard } from "@/components/UseCaseCard";
import { sectionGuides } from "@/data/deepReference";
import { useCases } from "@/data/useCases";

export const metadata: Metadata = {
  title: "RAG Use Cases",
  description: "RAG use cases for education, libraries, research, public administration, enterprises, legal monitoring, support, and archives.",
};

export default function UseCasesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Use Cases" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Use cases" title="Where RAG helps and what to watch" description="Each use case includes the problem, recommended architecture, relevant tools, risks, and evaluation criteria." />
        <div className="mt-8">
          <GuideGrid guides={sectionGuides.useCases} />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => <UseCaseCard item={item} key={item.slug} />)}
        </div>
      </section>
    </>
  );
}
