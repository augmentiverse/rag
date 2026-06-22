"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PlayCircle, SlidersHorizontal } from "lucide-react";
import type { Tutorial, TutorialLevel } from "@/data/tutorials";
import { Badge } from "./Badge";
import { SearchBox } from "./SearchBox";

const levels: Array<"All" | TutorialLevel> = ["All", "Beginner", "Intermediate", "Advanced"];

export function TutorialExplorer({ tutorials }: { tutorials: Tutorial[] }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<"All" | TutorialLevel>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tutorials.filter((tutorial) => {
      const haystack = [
        tutorial.title,
        tutorial.subtitle,
        tutorial.level,
        tutorial.outcome,
        ...tutorial.audience,
        ...tutorial.tools,
        ...tutorial.steps.map((step) => `${step.title} ${step.body}`),
      ].join(" ").toLowerCase();
      return (level === "All" || tutorial.level === level) && (!q || haystack.includes(q));
    });
  }, [level, query, tutorials]);

  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-line bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
        <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
          <SearchBox value={query} onChange={setQuery} placeholder="Search tutorials by tool, skill, audience, or topic..." />
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-slate-500" />
            {levels.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLevel(item)}
                className={`rounded-md px-3 py-2 text-sm font-bold ${level === item ? "bg-spruce text-white" : "border border-line bg-paper text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {filtered.map((tutorial) => (
          <article key={tutorial.slug} className="rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={tutorial.level === "Beginner" ? "green" : tutorial.level === "Intermediate" ? "blue" : "clay"}>{tutorial.level}</Badge>
              <Badge>{tutorial.duration}</Badge>
              {tutorial.officialResources.some((resource) => resource.type === "official video channel") ? (
                <Badge tone="clay"><PlayCircle className="mr-1 h-3.5 w-3.5" /> video sources</Badge>
              ) : null}
            </div>
            <h2 className="mt-4 text-2xl font-black">
              <Link href={`/tutorials/${tutorial.slug}`} className="hover:text-spruce dark:hover:text-emerald-200">{tutorial.title}</Link>
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{tutorial.subtitle}</p>
            <p className="mt-4 text-sm font-semibold text-spruce dark:text-emerald-200">Outcome: {tutorial.outcome}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tutorial.tools.slice(0, 5).map((tool) => <Badge key={tool}>{tool}</Badge>)}
            </div>
            <Link href={`/tutorials/${tutorial.slug}`} className="mt-5 inline-flex items-center rounded-md bg-spruce px-4 py-2 text-sm font-bold text-white hover:bg-[#165557]">
              Open tutorial
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
