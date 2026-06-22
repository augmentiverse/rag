import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Editorial Principles",
  description: "Editorial principles for keeping RAG Reference Hub accurate, transparent, verifiable, and educational.",
};

const principles = [
  "Prefer official documentation, primary research, and verified sources.",
  "Check pricing, deployment options, and feature availability regularly.",
  "Avoid hype, unsupported benchmarks, and precise claims that cannot be verified.",
  "Use transparent comparison criteria and careful language.",
  "Treat this website as educational guidance, not a substitute for official documentation, legal advice, security review, or procurement due diligence.",
];

export default function EditorialPrinciplesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Editorial Principles" }]} />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Trust" title="Editorial principles" description="RAG Reference Hub is designed to be useful because it is clear about uncertainty and careful with claims." />
        <div className="mt-8 rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <ul className="grid gap-4 text-slate-700 dark:text-slate-300">
            {principles.map((principle) => <li className="rounded-md border border-line bg-paper p-4 dark:border-slate-800 dark:bg-slate-900" key={principle}>{principle}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
