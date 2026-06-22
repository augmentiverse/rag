import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import { SectionHeader } from "@/components/SectionHeader";
import { learnTopics } from "@/data/learn";
import { learnDeepDives, officialSourceLinks } from "@/data/reference";

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
            <section>
              <h2>Practical examples</h2>
              <div className="grid gap-4">
                {learnDeepDives.map((item) => (
                  <article className="rounded-lg border border-line bg-paper p-5 dark:border-slate-800 dark:bg-slate-900" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <ol>
                      {item.steps.map((step) => <li key={step}>{step}</li>)}
                    </ol>
                  </article>
                ))}
              </div>
            </section>
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
            <div className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <p className="font-bold">Trusted starting sources</p>
              <div className="mt-3 grid gap-3 text-sm">
                {officialSourceLinks.slice(0, 5).map((source) => (
                  <a className="rounded-md border border-line bg-paper p-3 hover:border-spruce dark:border-slate-800 dark:bg-slate-900" href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                    <span className="font-bold text-spruce dark:text-emerald-200">{source.title}</span>
                    <span className="mt-1 block leading-6 text-slate-700 dark:text-slate-300">{source.note}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
