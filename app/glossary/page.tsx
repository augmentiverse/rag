import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GlossarySearch } from "@/components/GlossarySearch";
import { SectionHeader } from "@/components/SectionHeader";
import { glossary } from "@/data/glossary";

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
        <div className="mt-8"><GlossarySearch terms={[...glossary].sort((a, b) => a.term.localeCompare(b.term))} /></div>
      </section>
    </>
  );
}
