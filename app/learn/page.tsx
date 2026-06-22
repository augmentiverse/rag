import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import { SectionHeader } from "@/components/SectionHeader";
import { learnTopics } from "@/data/learn";

export const metadata: Metadata = {
  title: "Learn RAG",
  description: "A complete educational introduction to Retrieval-Augmented Generation concepts, patterns, strengths, limitations, mistakes, and best practices.",
};

export default function LearnPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Learn RAG" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Learn RAG" title="Retrieval-Augmented Generation, from first principles to practice" description="Understand why RAG emerged, how it differs from fine-tuning and long-context models, and how modern RAG systems are designed." />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="prose-rag rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            {learnTopics.map((topic) => (
              <section id={topic.slug} key={topic.slug}>
                <h2>{topic.title}</h2>
                <p>{topic.body}</p>
              </section>
            ))}
          </div>
          <div className="space-y-4">
            <Callout title="Core definition">
              RAG connects language models with external knowledge sources to improve grounding, accuracy, traceability, and domain relevance.
            </Callout>
            <div className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <p className="font-bold">On this page</p>
              <div className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-300">
                {learnTopics.map((topic) => <a key={topic.slug} href={`#${topic.slug}`} className="hover:text-spruce dark:hover:text-emerald-200">{topic.title}</a>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
