import Link from "next/link";
import { ArrowRight, BookOpen, Boxes, CheckCircle2, FileQuestion, GraduationCap, Landmark, Library, Network, SearchCheck, ShieldCheck, Sparkles, Target, Workflow } from "lucide-react";
import { PersonaPathways } from "@/components/PersonaPathways";
import { PortalSearch } from "@/components/PortalSearch";
import { PortalStats } from "@/components/PortalStats";
import { RagPipeline } from "@/components/RagPipeline";
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
      <section className="rag-hero" aria-labelledby="rag-hero-title">
        <div className="rag-hero-inner">
          <div>
            <p className="rag-hero-kicker">The reference portal for intelligent retrieval</p>
            <h1 id="rag-hero-title" className="rag-hero-title">Make knowledge <em>more intelligent.</em></h1>
            <p className="rag-hero-lead">A clear, practical guide to Retrieval-Augmented Generation: understand the foundations, explore tools, and build AI systems grounded in evidence.</p>
            <p className="rag-hero-sub">From document ingestion and vector search to evaluation and traceable answers — explore the RAG ecosystem at your own pace.</p>
            <div className="rag-hero-buttons">
              <Link href="/learn" className="rag-hero-button primary"><BookOpen className="h-4 w-4" aria-hidden="true" /> Learn RAG <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <Link href="/architectures" className="rag-hero-button secondary"><Network className="h-4 w-4" aria-hidden="true" /> Explore architectures</Link>
            </div>
            <p className="rag-hero-proof"><ShieldCheck className="h-4 w-4" aria-hidden="true" /> Independent reference · Practical learning · Verifiable sources</p>
          </div>
          <div className="rag-visual" role="img" aria-label="Four stages of RAG: knowledge sources, information retrieval, AI generation, and a cited answer">
            <div className="rag-visual-top"><span>THE RAG WORKFLOW</span><span>KNOWLEDGE / INTELLIGENCE</span></div>
            <div className="rag-visual-grid">
              <div className="rag-visual-node"><span className="rag-visual-icon"><BookOpen className="h-5 w-5" aria-hidden="true" /></span><small>01 / SOURCE</small><strong>Knowledge sources</strong><span>Documents & data</span></div>
              <div className="rag-visual-node"><span className="rag-visual-icon"><Network className="h-5 w-5" aria-hidden="true" /></span><small>02 / SEARCH</small><strong>Relevant context</strong><span>Retrieve & rerank</span></div>
              <div className="rag-visual-node"><span className="rag-visual-icon"><Sparkles className="h-5 w-5" aria-hidden="true" /></span><small>03 / GENERATE</small><strong>AI response</strong><span>Context + language model</span></div>
              <div className="rag-visual-node"><span className="rag-visual-icon"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></span><small>04 / VERIFY</small><strong>Grounded answer</strong><span>Evidence & citations</span></div>
              <div className="rag-visual-core" aria-hidden="true">RAG</div>
            </div>
            <div className="rag-visual-bottom"><span>FROM SOURCES TO SUPPORTED ANSWERS</span><span>EVIDENCE FIRST</span></div>
          </div>
        </div>
      </section>
      <section className="rag-stats" aria-label="Portal statistics">
        <PortalStats stats={stats} />
      </section>

      <section className="rag-pipeline-section py-14">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="// pipeline overview" title="Ten stages, one grounded answer" description="Every verifiable answer travels through these stages, from raw knowledge to cited, evaluatable output." />
          <div className="mt-8">
            <RagPipeline />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {["Ground answers in sources", "Refresh knowledge without retraining", "Expose citations and evidence", "Measure quality over time"].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-md border border-indigo-300/15 bg-blue-900/35 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-300" />
                <span className="text-sm font-semibold text-blue-50">{item}</span>
              </div>
            ))}
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
              <Link key={href as string} href={href as string} className="rag-portal-card group rounded-xl border border-line bg-paper p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-950">
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
            <article key={risk} className="rounded-xl border border-line bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
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
