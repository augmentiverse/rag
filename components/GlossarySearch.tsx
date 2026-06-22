"use client";

import { useMemo, useState } from "react";
import type { GlossaryTerm } from "@/data/types";
import { SearchBox } from "./SearchBox";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return terms.filter((item) => !q || [item.term, item.definition, ...item.related].join(" ").toLowerCase().includes(q));
  }, [query, terms]);

  return (
    <section className="space-y-6">
      <SearchBox value={query} onChange={setQuery} placeholder="Search glossary terms..." />
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((item) => (
          <article className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950" key={item.term}>
            <h3 className="text-xl font-bold">{item.term}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.definition}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Related: {item.related.join(", ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
