import { BadgeCheck, Brain, Database, FileText, ListFilter, MessageSquareText, Orbit, Search, Scissors, UploadCloud } from "lucide-react";

const stages = [
  { label: "Documents", group: "Knowledge", icon: FileText, tone: "from-sky-400 to-blue-500" },
  { label: "Ingestion", group: "Prepare", icon: UploadCloud, tone: "from-blue-400 to-indigo-500" },
  { label: "Chunking", group: "Prepare", icon: Scissors, tone: "from-indigo-400 to-violet-500" },
  { label: "Embeddings", group: "Index", icon: Orbit, tone: "from-cyan-400 to-sky-500" },
  { label: "Vector DB", group: "Index", icon: Database, tone: "from-blue-500 to-cyan-500" },
  { label: "Retrieval", group: "Find", icon: Search, tone: "from-indigo-500 to-blue-500" },
  { label: "Reranking", group: "Refine", icon: ListFilter, tone: "from-violet-500 to-indigo-500" },
  { label: "Context", group: "Assemble", icon: MessageSquareText, tone: "from-sky-500 to-indigo-500" },
  { label: "Generation", group: "Answer", icon: Brain, tone: "from-blue-500 to-violet-500" },
  { label: "Citations", group: "Trust", icon: BadgeCheck, tone: "from-emerald-400 to-sky-500" },
];

export function RagPipeline() {
  return (
    <div className="overflow-hidden rounded-2xl border border-indigo-300/15 bg-blue-900/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-[980px] items-stretch gap-2">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <div key={stage.label} className="group relative flex-1 rounded-xl border border-indigo-300/15 bg-blue-950/55 p-3 text-center backdrop-blur transition hover:-translate-y-1 hover:border-indigo-300/40 hover:bg-blue-900/70">
              <div className="flex flex-col items-center gap-2">
                <p className="rounded bg-indigo-400/10 px-2 py-0.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.16em] text-indigo-200">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${stage.tone} shadow-[0_10px_28px_rgba(59,130,246,0.28)]`}>
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-blue-200/55">{stage.group}</p>
                <p className="font-display text-sm font-bold text-white">{stage.label}</p>
              </div>
              {index < stages.length - 1 ? (
                <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-4 bg-gradient-to-r from-indigo-300 to-violet-300 sm:block" aria-hidden="true" />
              ) : null}
            </div>
          );
        })}
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-indigo-300/15 bg-indigo-400/[0.06] p-4">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-indigo-200">Flow logic</p>
        <p className="mt-2 text-sm leading-6 text-blue-50/80">
          RAG turns raw knowledge into searchable evidence, selects the most relevant context, then generates an answer that users can verify through citations and evaluation.
        </p>
      </div>
    </div>
  );
}
