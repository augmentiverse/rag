import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LastVerified } from "@/components/LastVerified";
import { RelatedContent } from "@/components/RelatedContent";
import { tools } from "@/data/tools";

const statusLabels = {
  yes: "Yes",
  partial: "Partial / depends on edition",
  no: "No",
  verify: "Check official source",
} as const;

const openSourceLabels = {
  yes: "Open source",
  partial: "Partly open source",
  no: "Proprietary",
  verify: "Check official source",
} as const;

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === slug);
  return { title: tool ? tool.name : "Tool", description: tool?.description };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === slug);
  if (!tool) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: tool.name }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <Badge tone="blue">{tool.category}</Badge>
            <h1 className="mt-4 text-4xl font-black">{tool.name}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">{tool.description}</p>
            <dl className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ["Main use case", tool.mainUseCase],
                ["Open source", openSourceLabels[tool.openSource]],
                ["Self-hosting", statusLabels[tool.selfHosting]],
                ["Cloud", statusLabels[tool.cloud]],
                ["Pricing note", tool.pricingNote],
                ["Target users", tool.targetUsers.join(", ")],
              ].map(([label, value]) => (
                <div className="rounded-md border border-line bg-paper p-4 dark:border-slate-800 dark:bg-slate-900" key={label}>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</dt>
                  <dd className="mt-2 text-sm leading-6">{value}</dd>
                </div>
              ))}
            </dl>
            <TwoColumn title="Strengths" items={tool.strengths} />
            <TwoColumn title="Limitations" items={tool.limitations} />
            <section className="mt-8">
              <h2 className="text-2xl font-bold">How to evaluate this tool</h2>
              <ol className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  `Test ${tool.name} with a small representative corpus.`,
                  "Verify official documentation, pricing, licensing, and deployment options.",
                  "Measure retrieval quality, latency, and operational complexity.",
                  "Check whether the team can maintain ingestion, updates, logs, and evaluation.",
                ].map((item) => <li className="rounded-md border border-line bg-paper p-4 text-sm leading-6 dark:border-slate-800 dark:bg-slate-900" key={item}>{item}</li>)}
              </ol>
            </section>
          </article>
          <aside className="space-y-4">
            <div className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <LastVerified date={tool.lastVerified} />
              <div className="mt-5 grid gap-2 text-sm font-semibold text-spruce dark:text-emerald-200">
                <a href={tool.websiteUrl} target="_blank" rel="noreferrer">Official website</a>
                <a href={tool.documentationUrl} target="_blank" rel="noreferrer">Documentation</a>
                {tool.githubUrl ? <a href={tool.githubUrl} target="_blank" rel="noreferrer">GitHub</a> : null}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">{tool.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
            </div>
            <RelatedContent links={[{ href: "/comparisons", label: "Comparison pages" }, { href: "/architectures", label: "RAG architectures" }, { href: "/editorial-principles", label: "Editorial principles" }]} />
          </aside>
        </div>
      </section>
    </>
  );
}

function TwoColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((item) => <li className="rounded-md border border-line bg-paper p-4 text-sm leading-6 dark:border-slate-800 dark:bg-slate-900" key={item}>{item}</li>)}
      </ul>
    </section>
  );
}
