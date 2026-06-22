import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { architectures } from "@/data/architectures";

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
              <p className="mt-5 text-sm font-semibold text-spruce dark:text-emerald-200">{item.whenToUse}</p>
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
