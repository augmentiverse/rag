import Link from "next/link";
import { ArrowRight, BookOpen, Boxes, Database, FileQuestion, GraduationCap, Landmark, Library, Network, SearchCheck, ShieldCheck, Sparkles } from "lucide-react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";

const navCards = [
  ["Learn RAG", "/learn", BookOpen],
  ["RAG Tools", "/tools", Boxes],
  ["Dify Guide", "/dify", Sparkles],
  ["Architectures", "/architectures", Network],
  ["Tutorials", "/tutorials", GraduationCap],
  ["Use Cases", "/use-cases", Landmark],
  ["Glossary", "/glossary", FileQuestion],
  ["Comparisons", "/comparisons", SearchCheck],
  ["Resources", "/resources", Library],
];

const pipeline = ["documents", "ingestion", "chunking", "embeddings", "vector database", "retrieval", "reranking", "prompt/context assembly", "LLM generation", "citations/evaluation"];

const audiences = [
  ["Developers", "Build reliable retrieval systems and choose maintainable toolchains."],
  ["Researchers", "Compare RAG patterns, evaluation methods, and retrieval tradeoffs."],
  ["Educators", "Teach grounding, sources, and practical AI literacy."],
  ["Librarians and documentalists", "Connect metadata, archives, and documentary authority to AI interfaces."],
  ["Businesses", "Assess platforms, governance, and production readiness."],
  ["Public institutions", "Design traceable knowledge services with source accountability."],
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <Badge tone="green">Educational reference hub</Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-normal text-ink dark:text-white md:text-7xl">RAG Reference Hub</h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700 dark:text-slate-300">
              Retrieval-Augmented Generation connects language models with external knowledge sources to improve grounding, accuracy, traceability, and domain relevance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/learn" className="inline-flex items-center gap-2 rounded-md bg-spruce px-5 py-3 text-sm font-bold text-white hover:bg-[#165557]">
                Start learning <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/tools" className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-bold text-spruce hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-emerald-100">
                Compare tools
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-paper p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-moss dark:text-emerald-300">RAG pipeline</p>
            <ArchitectureDiagram steps={pipeline} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {navCards.map(([label, href, Icon]) => (
            <Link key={href as string} href={href as string} className="group rounded-lg border border-line bg-white p-5 shadow-sm hover:shadow-soft dark:border-slate-800 dark:bg-slate-950">
              <Icon className="h-5 w-5 text-moss dark:text-emerald-300" />
              <h2 className="mt-4 text-xl font-bold">{label as string}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Open the {String(label).toLowerCase()} reference section.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why RAG matters" description="RAG is one of the most practical patterns for building AI systems that need current, private, or specialized knowledge." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {["Better grounding", "Private and domain knowledge", "Reduced hallucination", "Updatable knowledge", "Explainability through sources"].map((item) => (
              <div className="rounded-lg border border-line bg-paper p-5 dark:border-slate-800 dark:bg-slate-900" key={item}>
                <ShieldCheck className="h-5 w-5 text-clay" />
                <p className="mt-4 font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader title="Who is this site for?" description="The hub is written for both beginners and experts, with careful explanations, structured comparisons, and practical architecture guidance." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map(([title, text]) => (
            <article className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950" key={title}>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
