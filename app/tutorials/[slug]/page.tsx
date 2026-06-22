import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import { RelatedContent } from "@/components/RelatedContent";
import { tutorials } from "@/data/tutorials";

export function generateStaticParams() {
  return tutorials.map((tutorial) => ({ slug: tutorial.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = tutorials.find((item) => item.slug === slug);
  return { title: tutorial ? tutorial.title : "Tutorial", description: tutorial?.subtitle };
}

export default async function TutorialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tutorial = tutorials.find((item) => item.slug === slug);
  if (!tutorial) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Tutorials", href: "/tutorials" }, { label: tutorial.title }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap gap-2">
              <Badge tone={tutorial.level === "Beginner" ? "green" : tutorial.level === "Intermediate" ? "blue" : "clay"}>{tutorial.level}</Badge>
              <Badge>{tutorial.duration}</Badge>
              {tutorial.tools.slice(0, 4).map((tool) => <Badge key={tool}>{tool}</Badge>)}
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-normal">{tutorial.title}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">{tutorial.subtitle}</p>
            <Callout title="Outcome">{tutorial.outcome}</Callout>

            <section className="mt-8">
              <h2 className="text-2xl font-black">Prerequisites</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {tutorial.prerequisites.map((item) => <li className="rounded-md border border-line bg-paper p-4 text-sm dark:border-slate-800 dark:bg-slate-900" key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-black">Step-by-step tutorial</h2>
              <div className="mt-5 grid gap-5">
                {tutorial.steps.map((step, index) => (
                  <section key={step.title} className="rounded-lg border border-line bg-paper p-5 dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-clay">Step {index + 1}</p>
                    <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{step.body}</p>
                    <ul className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-2">
                      {step.checklist.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </section>
                ))}
              </div>
            </section>

            {tutorial.code ? (
              <section className="mt-10">
                <h2 className="text-2xl font-black">{tutorial.code.label}</h2>
                <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-5 text-sm leading-7 text-slate-100"><code>{tutorial.code.snippet}</code></pre>
              </section>
            ) : null}

            <section className="mt-10">
              <h2 className="text-2xl font-black">Next steps</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {tutorial.nextSteps.map((item) => <li className="rounded-md border border-line bg-paper p-4 text-sm dark:border-slate-800 dark:bg-slate-900" key={item}>{item}</li>)}
              </ul>
            </section>
          </article>

          <aside className="space-y-4">
            <div className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <p className="font-bold">Best for</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tutorial.audience.map((item) => <Badge key={item}>{item}</Badge>)}
              </div>
            </div>
            <div className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <p className="font-bold">Official and trusted resources</p>
              <div className="mt-4 grid gap-3">
                {tutorial.officialResources.map((resource) => (
                  <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer" className="rounded-md border border-line bg-paper p-4 text-sm hover:border-spruce dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500">
                    <span className="flex items-center justify-between gap-3 font-bold">
                      {resource.title}
                      <ExternalLink className="h-4 w-4" />
                    </span>
                    <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{resource.type}</span>
                    <span className="mt-2 block leading-6 text-slate-700 dark:text-slate-300">{resource.note}</span>
                  </a>
                ))}
              </div>
            </div>
            <RelatedContent links={[{ href: "/implementation", label: "Implementation playbook" }, { href: "/evaluation", label: "Evaluation center" }, { href: "/tools", label: "Tools directory" }]} />
          </aside>
        </div>
      </section>
    </>
  );
}
