import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { tutorials } from "@/data/tutorials";

export const metadata: Metadata = {
  title: "RAG Tutorials",
  description: "Step-by-step conceptual tutorials for building, evaluating, improving, and documenting RAG systems.",
};

export default function TutorialsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Tutorials" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Tutorials" title="Practical RAG tutorials" description="These first-version tutorials use conceptual steps and placeholders where API keys or deployment-specific details would be required." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {tutorials.map((tutorial) => (
            <article className="rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950" id={tutorial.slug} key={tutorial.slug}>
              <h2 className="text-xl font-bold">{tutorial.title}</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {tutorial.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <pre className="mt-5 overflow-x-auto rounded-md bg-slate-950 p-4 text-xs text-slate-100"><code>{`// Placeholder pattern
const retrievedContext = await retriever.search(question);
const answer = await model.generate({ question, context: retrievedContext });
return { answer, sources: retrievedContext.sources };`}</code></pre>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
