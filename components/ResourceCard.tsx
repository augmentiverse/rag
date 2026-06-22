import type { Resource } from "@/data/types";
import { Badge } from "./Badge";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
      <Badge tone="blue">{resource.type}</Badge>
      <h3 className="mt-4 text-lg font-bold">
        <a href={resource.url} target="_blank" rel="noreferrer" className="hover:text-spruce dark:hover:text-emerald-200">{resource.title}</a>
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{resource.description}</p>
    </article>
  );
}
