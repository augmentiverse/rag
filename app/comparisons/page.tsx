import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideGrid } from "@/components/GuideGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { comparisons } from "@/data/comparisons";
import { sectionGuides } from "@/data/deepReference";
import { comparisonHowTo } from "@/data/reference";

export const metadata: Metadata = {
  title: "RAG Tool Comparisons",
  description: "Structured comparison pages for Dify, LangChain, LlamaIndex, Flowise, vector databases, and RAG evaluation tools.",
};

export default function ComparisonsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Comparisons" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Comparisons" title="Transparent tool comparisons" description="Comparisons use explicit criteria and careful wording. Verify final procurement details with official documentation." />
        <div className="mt-8">
          <GuideGrid guides={sectionGuides.comparisons} />
        </div>
        <div className="mt-8 rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-2xl font-black">How to compare RAG tools responsibly</h2>
          <ol className="mt-4 grid gap-3 md:grid-cols-2">
            {comparisonHowTo.map((item) => <li className="rounded-md border border-line bg-paper p-4 text-sm leading-6 dark:border-slate-800 dark:bg-slate-900" key={item}>{item}</li>)}
          </ol>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {comparisons.map((comparison) => (
            <Link className="rounded-lg border border-line bg-white p-6 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950" href={`/comparisons/${comparison.slug}`} key={comparison.slug}>
              <h2 className="text-xl font-bold">{comparison.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{comparison.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
