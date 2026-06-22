import Link from "next/link";
import { ArrowRight, BookOpen, Boxes, CheckCircle2, FileQuestion, GraduationCap, Landmark, Library, Network, SearchCheck, ShieldCheck, Sparkles, Target, Workflow } from "lucide-react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Badge } from "@/components/Badge";
import { PersonaPathways } from "@/components/PersonaPathways";
import { PortalSearch } from "@/components/PortalSearch";
import { PortalStats } from "@/components/PortalStats";
import { SectionHeader } from "@/components/SectionHeader";
import { StackMap } from "@/components/StackMap";
import { architectures } from "@/data/architectures";
import { comparisons } from "@/data/comparisons";
import { personaPathways, portalIndex, riskControls, stackLayers } from "@/data/portal";
import { tools } from "@/data/tools";

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
  ["Implementation", "/implementation", Workflow],
  ["Evaluation", "/evaluation", Target],
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
  const stats = [
    { label: "Tool profiles", value: String(tools.length), detail: "Structured entries with verification notes and official links." },
    { label: "Architecture patterns", value: String(architectures.length), detail: "From basic RAG to enterprise observability and Graph RAG." },
    { label: "Comparison pages", value: String(comparisons.length), detail: "Criteria-based, cautious, vendor-neutral guidance." },
    { label: "Audience pathways", value: String(personaPathways.length), detail: "Entry points for beginners, engineers, educators, and decision-makers." },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-[#0f3d3e] dark:border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(188,222,198,0.32),transparent_34%),linear-gradient(135deg,#0f3d3e,#111827_58%,#4a2b22)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
          <div>
            <Badge tone="green">Educational reference hub</Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-normal text-white md:text-7xl">The practical portal for Retrieval-Augmented Generation</h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-emerald-50/90">
              Learn what RAG is, compare tools, design architectures, evaluate quality, and build grounded AI systems that users can trust.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50/80">
              RAG connects language models with external knowledge sources to improve grounding, accuracy, traceability, and domain relevance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/learn" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-spruce hover:bg-emerald-50">
                Start learning <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/implementation" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/15">
                Build efficiently
              </Link>
            </div>
            <div className="mt-10">
              <PortalStats stats={stats} />
            </div>
          </div>
          <div className="rounded-lg border border-white/20 bg-white/10 p-5 text-white shadow-soft backdrop-blur">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-emerald-100">RAG pipeline</p>
            <ArchitectureDiagram steps={pipeline} />
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {["Ground answers in sources", "Refresh knowledge without retraining", "Expose citations and evidence", "Measure quality over time"].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-md border border-white/15 bg-white/10 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-200" />
                  <span className="text-sm font-semibold text-emerald-50">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <PortalSearch items={portalIndex} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <SectionHeader title="Choose your pathway" description="Different users need different levels of depth. Start with the pathway closest to your role, then move into architectures, tools, and evaluation." />
        <div className="mt-8">
          <PersonaPathways personas={personaPathways} />
        </div>
      </section>

      <section className="border-y border-line bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Explore the portal" description="Use the hub as a map: learn the concepts, choose a stack, build a pipeline, evaluate quality, and keep knowledge current." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {navCards.map(([label, href, Icon]) => (
              <Link key={href as string} href={href as string} className="group rounded-lg border border-line bg-paper p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-950">
                <Icon className="h-5 w-5 text-moss dark:text-emerald-300" />
                <h2 className="mt-4 text-lg font-bold">{label as string}</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Open the {String(label).toLowerCase()} section.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader title="The RAG stack, end to end" description="Effective RAG is not a single tool. It is a chain of editorial, retrieval, generation, evaluation, and operational decisions." />
        <div className="mt-8">
          <StackMap layers={stackLayers} />
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
        <SectionHeader title="Risks every RAG project must control" description="A serious RAG portal should teach the failure modes, not only the happy path." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskControls.map(([risk, control]) => (
            <article key={risk} className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="text-lg font-bold">{risk}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{control}</p>
            </article>
          ))}
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
