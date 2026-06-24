import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import { GuideGrid } from "@/components/GuideGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { chunkingStrategies, ragFailureChain, ragStrategyMatrix } from "@/data/advancedRag";
import { sectionGuides } from "@/data/deepReference";
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
        <div className="mt-8">
          <GuideGrid guides={sectionGuides.learn} />
        </div>
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
            <section id="strategy-decision-guide">
              <h2>Prompting, long context, RAG, or fine-tuning?</h2>
              <p>These approaches solve different problems and can be combined. Choose according to the knowledge, behavior, traceability, and maintenance requirements of the task.</p>
              <div className="not-prose mt-5 overflow-x-auto rounded-lg border border-line dark:border-slate-800">
                <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                  <thead className="bg-paper dark:bg-slate-900">
                    <tr>
                      <th className="p-4 font-black">Strategy</th>
                      <th className="p-4 font-black">Choose when</th>
                      <th className="p-4 font-black">Do not rely on it when</th>
                      <th className="p-4 font-black">How it combines</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ragStrategyMatrix.map((item) => (
                      <tr key={item.strategy} className="border-t border-line align-top dark:border-slate-800">
                        <th className="p-4 text-blue-700 dark:text-blue-200">{item.strategy}</th>
                        <td className="p-4 leading-6 text-slate-700 dark:text-slate-300">{item.chooseWhen}</td>
                        <td className="p-4 leading-6 text-slate-700 dark:text-slate-300">{item.avoidWhen}</td>
                        <td className="p-4 leading-6 text-slate-700 dark:text-slate-300">{item.combineWith}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section id="chunking-guide">
              <h2>Chunking strategy guide</h2>
              <p>There is no universally correct chunk size. Treat chunking as a retrieval design decision and evaluate it on representative questions from the target corpus.</p>
              <div className="not-prose mt-5 grid gap-4">
                {chunkingStrategies.map((strategy) => (
                  <article key={strategy.name} className="rounded-lg border border-line bg-paper p-5 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="m-0 text-lg font-bold">{strategy.name}</h3>
                    <dl className="mt-3 grid gap-2 text-sm leading-7">
                      <div><dt className="inline font-bold">Best for: </dt><dd className="inline text-slate-700 dark:text-slate-300">{strategy.bestFor}</dd></div>
                      <div><dt className="inline font-bold">Method: </dt><dd className="inline text-slate-700 dark:text-slate-300">{strategy.method}</dd></div>
                      <div><dt className="inline font-bold">Watch for: </dt><dd className="inline text-slate-700 dark:text-slate-300">{strategy.watchFor}</dd></div>
                      <div><dt className="inline font-bold">Evaluate with: </dt><dd className="inline text-slate-700 dark:text-slate-300">{strategy.evaluateWith}</dd></div>
                    </dl>
                  </article>
                ))}
              </div>
            </section>
            <section id="failure-chain">
              <h2>Where a RAG answer can fail</h2>
              <p>“The model hallucinated” is often too vague to be actionable. Diagnose the full chain, starting with whether the right source was available at all.</p>
              <div className="not-prose mt-5 grid gap-3">
                {ragFailureChain.map((item, index) => (
                  <article key={item.stage} className="grid gap-3 rounded-lg border border-line bg-paper p-5 dark:border-slate-800 dark:bg-slate-900 md:grid-cols-[44px_150px_1fr]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-700 text-sm font-black text-white">{index + 1}</span>
                    <h3 className="m-0 text-base font-bold">{item.stage}</h3>
                    <div className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                      <p className="m-0"><strong>Failure:</strong> {item.failure}</p>
                      <p className="m-0"><strong>Inspect:</strong> {item.evidence}</p>
                      <p className="m-0"><strong>Improve:</strong> {item.fix}</p>
                    </div>
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
                <a href="#strategy-decision-guide" className="hover:text-spruce dark:hover:text-emerald-200">Strategy decision guide</a>
                <a href="#chunking-guide" className="hover:text-spruce dark:hover:text-emerald-200">Chunking strategy guide</a>
                <a href="#failure-chain" className="hover:text-spruce dark:hover:text-emerald-200">RAG failure chain</a>
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
