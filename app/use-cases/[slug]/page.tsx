import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useCases } from "@/data/useCases";

export function generateStaticParams() {
  return useCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = useCases.find((useCase) => useCase.slug === slug);
  return { title: item ? item.title : "Use Case", description: item?.problem };
}

export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = useCases.find((useCase) => useCase.slug === slug);
  if (!item) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Use Cases", href: "/use-cases" }, { label: item.title }]} />
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <h1 className="text-4xl font-black">{item.title}</h1>
          <Section title="Problem" body={item.problem} />
          <Section title="Why RAG helps" body={item.whyRagHelps} />
          <Section title="Recommended architecture" body={item.recommendedArchitecture} />
          <List title="Relevant tools" items={item.relevantTools} />
          <List title="Risks and precautions" items={item.risks} />
          <List title="Evaluation criteria" items={item.evaluationCriteria} />
        </div>
      </article>
    </>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">{body}</p>
    </section>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="mt-3 grid gap-2 text-slate-700 dark:text-slate-300">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}
