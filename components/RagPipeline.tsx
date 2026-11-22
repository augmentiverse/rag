import { BadgeCheck, Brain, Database, FileText, ListFilter, MessageSquareText, Orbit, Search, Scissors, UploadCloud } from "lucide-react";

const stages = [
  { label: "Documents", group: "Knowledge", icon: FileText },
  { label: "Ingestion", group: "Prepare", icon: UploadCloud },
  { label: "Chunking", group: "Prepare", icon: Scissors },
  { label: "Embeddings", group: "Index", icon: Orbit },
  { label: "Vector DB", group: "Index", icon: Database },
  { label: "Retrieval", group: "Find", icon: Search },
  { label: "Reranking", group: "Refine", icon: ListFilter },
  { label: "Context", group: "Assemble", icon: MessageSquareText },
  { label: "Generation", group: "Answer", icon: Brain },
  { label: "Citations", group: "Trust", icon: BadgeCheck },
];

export function RagPipeline() {
  return (
    <div className="rag-pipeline">
      <ol className="rag-pipeline-grid" aria-label="Ten stages of the RAG workflow">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return <li key={stage.label} className="rag-pipeline-step">
            <span className="rag-pipeline-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="rag-pipeline-step-icon"><Icon className="h-5 w-5" aria-hidden="true" /></span>
            <span className="rag-pipeline-step-group">{stage.group}</span>
            <strong>{stage.label}</strong>
          </li>;
        })}
      </ol>
      <p className="rag-pipeline-note"><strong>From knowledge to evidence.</strong> RAG transforms documents into searchable knowledge, retrieves context, and produces answers that can be checked against sources.</p>
    </div>
  );
}
