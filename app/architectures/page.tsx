import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideGrid } from "@/components/GuideGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { advancedRagPatterns, graphRagFieldGuide } from "@/data/advancedRag";
import { architectures } from "@/data/architectures";
import { sectionGuides } from "@/data/deepReference";
import { architectureExamples, officialSourceLinks } from "@/data/reference";

export const metadata: Metadata = {
  title: "RAG Architectures",
  description: "Practical RAG architecture patterns with diagrams, tools, advantages, limitations, and usage guidance.",
};

export default function ArchitecturesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Architectures" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Architectures" title="Practical RAG architecture patterns" description="Use these patterns as starting points, then validate retrieval quality, security, cost, and user outcomes for your domain." />
        <div className="mt-8">
          <GuideGrid guides={sectionGuides.architectures} />
        </div>
        <div className="mt-8 grid gap-6">
          {architectures.map((item) => (
            <article className="rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950" id={item.slug} key={item.slug}>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300">{item.summary}</p>
              <div className="mt-5"><ArchitectureDiagram steps={item.steps} /></div>
              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <Info title="Recommended tools" items={item.recommendedTools} />
                <Info title="Advantages" items={item.advantages} />
                <Info title="Limitations" items={item.limitations} />
              </div>
              {architectureExamples[item.slug] ? (
                <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-md border border-line bg-paper p-4 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="font-bold">Concrete example</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{architectureExamples[item.slug].example}</p>
                  </div>
                  <div className="rounded-md border border-line bg-paper p-4 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="font-bold">Step-by-step build path</h3>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300">
                      {architectureExamples[item.slug].buildSteps.map((step) => <li key={step}>{step}</li>)}
                    </ol>
                  </div>
                </div>
              ) : null}
              <p className="mt-5 text-sm font-semibold text-spruce dark:text-emerald-200">{item.whenToUse}</p>
              {architectureExamples[item.slug] ? (
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {architectureExamples[item.slug].sourceLinks.map((title) => {
                    const source = officialSourceLinks.find((item) => item.title === title || item.title.includes(title.replace(" documentation", "")));
                    return source ? <a key={title} href={source.href} target="_blank" rel="noreferrer" className="font-bold text-spruce dark:text-emerald-200">{title}</a> : null;
                  })}
                </div>
              ) : null}
              <Link className="mt-4 inline-block text-sm font-bold text-spruce dark:text-emerald-200" href={`/architectures#${item.slug}`}>Link to this pattern</Link>
            </article>
          ))}
        </div>
        <section className="mt-12 rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <SectionHeader
            eyebrow="GraphRAG field guide"
            title="Choose graph structure for a demonstrated retrieval need"
            description="GraphRAG is most valuable when relationships, corpus-level patterns, or multi-hop evidence matter. It is not an automatic upgrade over well-tuned hybrid retrieval."
          />
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Info title="Limitations that can motivate GraphRAG" items={graphRagFieldGuide.limitations} />
            <Info title="Readiness questions" items={graphRagFieldGuide.readinessQuestions} />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {graphRagFieldGuide.paradigms.map((item) => (
              <article key={item.title} className="rounded-lg border border-line bg-paper p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 overflow-x-auto rounded-lg border border-line dark:border-slate-800">
            <table className="min-w-[720px] w-full border-collapse text-left text-sm">
              <thead className="bg-paper dark:bg-slate-900"><tr><th className="p-4">Retrieval mode</th><th className="p-4">What it does</th></tr></thead>
              <tbody>
                {graphRagFieldGuide.retrievalModes.map(([mode, detail]) => (
                  <tr key={mode} className="border-t border-line dark:border-slate-800"><th className="p-4 font-bold">{mode}</th><td className="p-4 leading-7 text-slate-700 dark:text-slate-300">{detail}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold">
            <a href="https://arxiv.org/abs/2501.13958" target="_blank" rel="noreferrer" className="text-blue-700 dark:text-blue-200">GraphRAG survey</a>
            <a href="https://arxiv.org/abs/2404.16130" target="_blank" rel="noreferrer" className="text-blue-700 dark:text-blue-200">From Local to Global</a>
            <a href="https://microsoft.github.io/graphrag/query/overview/" target="_blank" rel="noreferrer" className="text-blue-700 dark:text-blue-200">Microsoft GraphRAG query methods</a>
          </div>
        </section>
        <section className="mt-8">
          <SectionHeader
            eyebrow="Advanced patterns"
            title="Agentic RAG, corrective RAG, Self-RAG, and GraphRAG are not synonyms"
            description="Each pattern changes a different control point in the system. Compare the mechanism, useful tasks, risks, and minimum controls before adopting one."
          />
          <div className="mt-6 overflow-x-auto rounded-lg border border-line bg-white dark:border-slate-800 dark:bg-slate-950">
            <table className="min-w-[1050px] w-full border-collapse text-left text-sm">
              <thead className="bg-paper dark:bg-slate-900">
                <tr><th className="p-4">Pattern</th><th className="p-4">Control mechanism</th><th className="p-4">Useful for</th><th className="p-4">Principal risk</th><th className="p-4">Minimum control</th></tr>
              </thead>
              <tbody>
                {advancedRagPatterns.map((item) => (
                  <tr key={item.name} className="border-t border-line align-top dark:border-slate-800">
                    <th className="p-4 text-blue-700 dark:text-blue-200">{item.name}</th>
                    <td className="p-4 leading-7 text-slate-700 dark:text-slate-300">{item.control}</td>
                    <td className="p-4 leading-7 text-slate-700 dark:text-slate-300">{item.usefulFor}</td>
                    <td className="p-4 leading-7 text-slate-700 dark:text-slate-300">{item.principalRisk}</td>
                    <td className="p-4 leading-7 text-slate-700 dark:text-slate-300">{item.minimumControl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <ul className="mt-2 grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
