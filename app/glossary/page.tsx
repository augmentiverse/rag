import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GlossarySearch } from "@/components/GlossarySearch";
import { GuideGrid } from "@/components/GuideGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { sectionGuides } from "@/data/deepReference";
import { glossary } from "@/data/glossary";
import { learnDeepDives } from "@/data/reference";

export const metadata: Metadata = {
  title: "RAG Glossary",
  description: "Searchable glossary of Retrieval-Augmented Generation terms including embeddings, vector databases, reranking, grounding, and evaluation.",
};

export default function GlossaryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glossary" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Glossary" title="RAG terminology, alphabetically searchable" description="Use the glossary to align teams around retrieval, evaluation, grounding, citations, and architecture language." />
        <div className="mt-8">
          <GuideGrid guides={sectionGuides.glossary} />
        </div>
        <div className="mt-8 rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-2xl font-black">How to use the glossary</h2>
          <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
            Use these terms when writing project briefs, evaluation plans, procurement requirements, and tutorials. Shared vocabulary prevents confusion between retrieval quality, answer quality, source authority, and model behavior.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {learnDeepDives.map((item) => <div className="rounded-md border border-line bg-paper p-4 text-sm dark:border-slate-800 dark:bg-slate-900" key={item.title}>{item.title}</div>)}
          </div>
        </div>
        <div className="mt-8"><GlossarySearch terms={[...glossary].sort((a, b) => a.term.localeCompare(b.term))} /></div>
      </section>
    </>
  );
}
