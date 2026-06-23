import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideGrid } from "@/components/GuideGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { TutorialExplorer } from "@/components/TutorialExplorer";
import { sectionGuides } from "@/data/deepReference";
import { tutorials } from "@/data/tutorials";

export const metadata: Metadata = {
  title: "RAG Tutorials",
  description: "Dynamic RAG tutorials with complete step-by-step guidance, difficulty levels, prerequisites, code patterns, and trusted official learning resources.",
};

export default function TutorialsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Tutorials" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tutorials"
          title="Learn RAG by building, testing, and improving"
          description="Filter tutorials by level and topic. Each tutorial includes outcomes, prerequisites, step-by-step guidance, trusted official references, and next steps."
        />
        <div className="mt-8">
          <GuideGrid guides={sectionGuides.tutorials} />
        </div>
        <div className="mt-8">
          <TutorialExplorer tutorials={tutorials} />
        </div>
      </section>
    </>
  );
}
