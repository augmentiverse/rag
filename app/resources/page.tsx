import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideGrid } from "@/components/GuideGrid";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { sectionGuides } from "@/data/deepReference";
import { officialSourceLinks } from "@/data/reference";
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
        <div className="mt-8">
          <GuideGrid guides={sectionGuides.resources} />
        </div>
        <div className="mt-8 rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-2xl font-black">Essential trusted sources</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {officialSourceLinks.map((source) => (
              <a className="rounded-md border border-line bg-paper p-4 hover:border-spruce dark:border-slate-800 dark:bg-slate-900" href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                <span className="font-bold text-spruce dark:text-emerald-200">{source.title}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-700 dark:text-slate-300">{source.note}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => <ResourceCard resource={resource} key={resource.title} />)}
        </div>
      </section>
    </>
  );
}
