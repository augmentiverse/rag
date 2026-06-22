import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "RAG Resources",
  description: "Structured resources for RAG documentation, papers, datasets, benchmarks, courses, repositories, and communities.",
};

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Resources" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Resources" title="Official docs, papers, datasets, benchmarks, courses, and communities" description="This resource list is structured so it can grow into a curated library. Prefer official documentation and primary sources when making implementation decisions." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => <ResourceCard resource={resource} key={resource.title} />)}
        </div>
      </section>
    </>
  );
}
