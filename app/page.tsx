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
      <section className="relative overflow-hidden border-b border-line bg-slate-50 dark:border-indigo-400/15 dark:bg-[#070c1b]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.055)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(96,165,250,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.06)_1px,transparent_1px)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-indigo-100/65 to-transparent dark:from-indigo-500/8" />
        <div className="relative mx-auto max-w-[1440px] px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/70 bg-white/80 px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-700 shadow-sm dark:border-indigo-400/25 dark:bg-indigo-500/10 dark:text-indigo-300">
              <span aria-hidden="true" className="text-indigo-500">&gt;</span>
              Educational Reference Hub
            </div>
            <h1 className="mx-auto mt-10 max-w-7xl overflow-visible font-display text-[clamp(3rem,7vw,6.6rem)] font-black leading-[1.03] tracking-normal">
              <span className="block text-slate-950 dark:text-white">The practical portal for</span>
              <span className="block bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-400 bg-clip-text pb-3 text-transparent">
                Retrieval-Augmented Generation
              </span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-slate-600 dark:text-blue-100/78">
              Learn what RAG is, compare tools, design architectures, evaluate quality, and build grounded AI systems that users can trust.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-blue-100/64">
              RAG connects language models with external knowledge sources to improve grounding, accuracy, traceability, and domain relevance.
            </p>
            <div className="mx-auto mt-11 grid max-w-5xl gap-4 md:grid-cols-3">
              <Link href="/learn" className="group inline-flex min-h-20 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-4 text-lg font-bold text-white shadow-[0_16px_44px_rgba(99,102,241,0.35)] hover:-translate-y-0.5">
                <BookOpen className="h-5 w-5" />
                New to RAG
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link href="/architectures" className="group inline-flex min-h-20 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/75 px-5 py-4 text-lg font-bold text-slate-700 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-indigo-300 dark:border-indigo-400/18 dark:bg-blue-950/45 dark:text-blue-100/72 dark:hover:bg-blue-900/50 dark:hover:text-white">
                <Network className="h-5 w-5" />
                Go deep
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link href="/implementation" className="group inline-flex min-h-20 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/75 px-5 py-4 text-lg font-bold text-slate-700 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-indigo-300 dark:border-indigo-400/18 dark:bg-blue-950/45 dark:text-blue-100/72 dark:hover:bg-blue-900/50 dark:hover:text-white">
                <Workflow className="h-5 w-5" />
                Build efficiently
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mx-auto mt-14 max-w-5xl">
              <PortalStats stats={stats} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-indigo-400/15 bg-blue-950/95 py-16">
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
              <Link key={href as string} href={href as string} className="group rounded-xl border border-line bg-paper p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-950">
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
