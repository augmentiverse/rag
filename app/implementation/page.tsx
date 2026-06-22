import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import { SectionHeader } from "@/components/SectionHeader";
import { StackMap } from "@/components/StackMap";
import { implementationRoadmap, ragFaq, riskControls, stackLayers } from "@/data/portal";

export const metadata: Metadata = {
  title: "RAG Implementation Playbook",
  description: "A practical playbook for planning, building, launching, and maintaining Retrieval-Augmented Generation systems efficiently.",
};

export default function ImplementationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Implementation" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Implementation"
          title="Build RAG efficiently, from idea to maintained knowledge service"
          description="A good RAG project is part information architecture, part search engineering, part product design, and part evaluation practice."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <section className="rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-2xl font-black">Implementation roadmap</h2>
              <div className="mt-6 grid gap-4">
                {implementationRoadmap.map((phase) => (
                  <article key={phase.phase} className="rounded-lg border border-line bg-paper p-5 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-bold">{phase.phase}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{phase.outcome}</p>
                    <ul className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-2">
                      {phase.checklist.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title="Reference stack" description="Use this stack map to decide what must be owned, configured, evaluated, or purchased." />
              <div className="mt-6">
                <StackMap layers={stackLayers} />
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <Callout title="Efficient RAG principle">
              Start narrow, measure early, and improve retrieval before changing models. Most failed RAG systems fail because of source quality, chunking, metadata, or evaluation gaps.
            </Callout>
            <div className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <p className="font-bold">Controls to design early</p>
              <ul className="mt-3 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {riskControls.map(([risk, control]) => <li key={risk}><strong>{risk}:</strong> {control}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <p className="font-bold">Common questions</p>
              <div className="mt-3 grid gap-3">
                {ragFaq.slice(0, 3).map(([question, answer]) => (
                  <details key={question} className="rounded-md border border-line bg-paper p-3 dark:border-slate-800 dark:bg-slate-900">
                    <summary className="cursor-pointer text-sm font-bold">{question}</summary>
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
