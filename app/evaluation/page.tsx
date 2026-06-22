import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import { SectionHeader } from "@/components/SectionHeader";
import { evaluationMetrics } from "@/data/portal";

export const metadata: Metadata = {
  title: "RAG Evaluation Center",
  description: "Evaluate RAG retrieval, faithfulness, citations, refusal behavior, latency, cost, and production quality.",
};

const workflow = [
  "Create representative questions",
  "Label expected sources",
  "Run retrieval-only tests",
  "Review generated answers",
  "Score citations and faithfulness",
  "Inspect traces and failures",
  "Fix ingestion, retrieval, prompts, or sources",
  "Repeat before release",
];

export default function EvaluationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Evaluation" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Evaluation"
          title="Measure whether your RAG system is actually useful"
          description="RAG quality is not just answer fluency. It includes retrieval quality, source support, citations, refusal behavior, cost, latency, and maintainability."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <section className="grid gap-4 md:grid-cols-2">
              {evaluationMetrics.map((metric) => (
                <article key={metric.name} className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                  <h2 className="text-xl font-bold">{metric.name}</h2>
                  <p className="mt-3 text-sm font-semibold text-spruce dark:text-emerald-200">{metric.question}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{metric.method}</p>
                </article>
              ))}
            </section>

            <section className="rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-2xl font-black">Evaluation workflow</h2>
              <ol className="mt-6 grid gap-3 md:grid-cols-2">
                {workflow.map((step, index) => (
                  <li key={step} className="rounded-md border border-line bg-paper p-4 text-sm leading-6 dark:border-slate-800 dark:bg-slate-900">
                    <span className="mr-2 font-black text-clay">{index + 1}.</span>{step}
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-2xl font-black">Example evaluation set</h2>
              <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                A useful evaluation set should include normal questions, hard questions, exact-reference questions, ambiguous questions, and questions the system should not answer.
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[
                  "Known-answer question: the source contains one direct answer.",
                  "Multi-source question: the answer requires comparing two approved sources.",
                  "Exact-reference question: the query contains a regulation number, policy code, or product identifier.",
                  "Ambiguous question: the system should ask for clarification.",
                  "Out-of-scope question: the system should refuse or redirect.",
                  "Stale-source question: the system must prefer the current document over older copies.",
                ].map((item) => <div className="rounded-md border border-line bg-paper p-4 text-sm leading-6 dark:border-slate-800 dark:bg-slate-900" key={item}>{item}</div>)}
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <Callout title="Do not evaluate only the final answer">
              Test retrieval separately. If the evidence is missing, even a strong model will improvise or produce a weak answer.
            </Callout>
            <div className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <p className="font-bold">Minimum release gate</p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                <li>Representative test set exists.</li>
                <li>Top retrieval failures are reviewed.</li>
                <li>Answers cite the right sources.</li>
                <li>Out-of-scope questions are handled safely.</li>
                <li>Logs or traces are available for debugging.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
