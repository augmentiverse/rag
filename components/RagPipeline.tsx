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
    <div className="overflow-hidden rounded-xl border border-white/15 bg-blue-950/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
      <div className="grid gap-3 sm:grid-cols-2">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <div key={stage.label} className="group relative rounded-lg border border-white/15 bg-white/[0.08] p-3 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.13]">
              <div className="flex items-center gap-3">
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${stage.tone} shadow-[0_10px_28px_rgba(59,130,246,0.28)]`}>
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-sky-100/70">
                    {String(index + 1).padStart(2, "0")} · {stage.group}
                  </p>
                  <p className="truncate font-display text-base font-bold text-white">{stage.label}</p>
                </div>
              </div>
              {index < stages.length - 1 ? (
                <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 bg-sky-200/40 sm:block" aria-hidden="true" />
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded-lg border border-white/15 bg-white/[0.08] p-3">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-sky-100/80">Flow logic</p>
        <p className="mt-2 text-sm leading-6 text-blue-50/85">
          RAG turns raw knowledge into searchable evidence, selects the most relevant context, then generates an answer that users can verify through citations and evaluation.
        </p>
      </div>
    </div>
  );
}
