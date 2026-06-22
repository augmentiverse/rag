import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { architectures } from "@/data/architectures";
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
