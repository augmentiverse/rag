import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Dify Guide",
  description: "A practical guide to Dify's role in the RAG ecosystem, core concepts, architecture, strengths, limitations, and use cases.",
};

const concepts = ["apps", "chatflows", "workflows", "knowledge bases", "retrieval", "tools", "models", "observability"];
const difySteps = ["Create workspace", "Add knowledge base", "Upload documents", "Configure retrieval", "Create chat app", "Connect model", "Test citations", "Review logs"];

export default function DifyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Dify" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Dify guide" title="Dify as a platform for RAG applications, workflows, and agents" description="Dify is important because it gives teams a practical platform layer for turning retrieval, models, tools, and workflows into usable AI applications." />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="prose-rag rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <h2>What Dify is</h2>
            <p>Dify is a platform for building AI applications, workflows, agents, and RAG pipelines. It is useful when a team wants a visual, operational environment rather than only a code framework.</p>
            <h2>Why it matters in the RAG ecosystem</h2>
            <p>Dify helps make RAG accessible to product teams, educators, and organizations that need knowledge bases, app interfaces, model configuration, workflow logic, and observability in one place.</p>
            <h2>Main concepts</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {concepts.map((concept) => <div className="rounded-md border border-line bg-paper p-4 text-sm font-semibold dark:border-slate-800 dark:bg-slate-900" key={concept}>{concept}</div>)}
            </div>
            <h2>How to build a basic RAG application with Dify</h2>
            <ol>
              {difySteps.map((step) => <li key={step}>{step}.</li>)}
            </ol>
            <h2>Conceptual architecture</h2>
            <ArchitectureDiagram steps={["User", "Dify app", "Knowledge base", "Retriever", "Model provider", "Answer with sources", "Logs and evaluation"]} />
            <h2>Use cases</h2>
            <p>Institutional knowledge assistants, document Q&A, customer support, education, research assistants, legal or documentary search, and public administration knowledge bases are all common candidate areas.</p>
            <h2>Strengths and limitations</h2>
            <p>Dify is strong when teams need app delivery, workflow visibility, and knowledge-base management. Alternatives may be preferable when teams need low-level custom retrieval research, highly specialized infrastructure, or fully code-native control.</p>
            <h2>When to choose Dify</h2>
            <p>Choose Dify when you need a publishable RAG app and workflow environment. Consider LangChain, LlamaIndex, Haystack, or custom services when engineering flexibility is the main requirement.</p>
          </article>
          <aside className="space-y-4">
            <Callout title="Verification note">Dify features, deployment options, and pricing should be verified from the official website and documentation before project commitments.</Callout>
            <div className="rounded-lg border border-line bg-white p-5 text-sm leading-7 dark:border-slate-800 dark:bg-slate-950">
              <p className="font-bold">Official links</p>
              <a className="mt-3 block text-spruce dark:text-emerald-200" href="https://dify.ai/" target="_blank" rel="noreferrer">dify.ai</a>
              <a className="block text-spruce dark:text-emerald-200" href="https://docs.dify.ai/" target="_blank" rel="noreferrer">docs.dify.ai</a>
              <a className="block text-spruce dark:text-emerald-200" href="https://github.com/langgenius/dify" target="_blank" rel="noreferrer">GitHub repository</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
