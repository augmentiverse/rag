import Link from "next/link";
import type { Tool } from "@/data/types";
import { Badge } from "./Badge";
import { LastVerified } from "./LastVerified";

const openSourceStatus = {
  yes: { label: "Open source", tone: "green" },
  partial: { label: "Partly open source", tone: "blue" },
  no: { label: "Proprietary", tone: "clay" },
  verify: { label: "Check official source", tone: "neutral" },
} as const;

export function ToolCard({ tool }: { tool: Tool }) {
  const status = openSourceStatus[tool.openSource];

  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">
            <Link href={`/tools/${tool.slug}`} className="hover:text-spruce dark:hover:text-emerald-200">
              {tool.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{tool.category}</p>
        </div>
        <Badge tone={status.tone}>{status.label}</Badge>
      </div>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-700 dark:text-slate-300">{tool.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tool.tags.slice(0, 4).map((tag) => <Badge key={tag}>{tag}</Badge>)}
      </div>
      <div className="mt-5 border-t border-line pt-4 dark:border-slate-800">
        <LastVerified date={tool.lastVerified} />
      </div>
    </article>
  );
}
