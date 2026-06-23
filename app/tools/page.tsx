import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideGrid } from "@/components/GuideGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolFilter } from "@/components/ToolFilter";
import { sectionGuides } from "@/data/deepReference";
import { toolDecisionQuestions } from "@/data/reference";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "RAG Tools Directory",
  description: "Search and filter a structured directory of RAG platforms, orchestration frameworks, vector databases, rerankers, observability tools, and evaluation tools.",
};

export default function ToolsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Tools" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Directory" title="RAG tools directory" description="Filter tools by category, open-source status, hosting model, and likely fit. Pricing and exact feature claims should be verified from official sources before procurement." />
        <div className="mt-8">
          <GuideGrid guides={sectionGuides.tools} />
        </div>
        <div className="mt-8 rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-2xl font-black">How to use this directory</h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-700 dark:text-slate-300">
            Treat tools as parts of a stack, not as interchangeable products. A RAG platform, orchestration framework, vector database, parser, reranker, and evaluation tool solve different problems.
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {toolDecisionQuestions.map((question) => <li className="rounded-md border border-line bg-paper p-4 text-sm dark:border-slate-800 dark:bg-slate-900" key={question}>{question}</li>)}
          </ul>
        </div>
        <div className="mt-8">
          <ToolFilter tools={tools} />
        </div>
      </section>
    </>
  );
}
