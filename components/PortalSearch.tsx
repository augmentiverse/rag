"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SearchBox } from "./SearchBox";
import { Badge } from "./Badge";

type Item = {
  title: string;
  href: string;
  type: string;
  summary: string;
  tags: string[];
};

export function PortalSearch({ items }: { items: Item[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => !q || [item.title, item.type, item.summary, ...item.tags].join(" ").toLowerCase().includes(q)).slice(0, 8);
  }, [items, query]);

  return (
    <section className="rounded-xl border border-slate-200 bg-white/95 p-5 shadow-soft backdrop-blur dark:border-indigo-400/20 dark:bg-blue-950/70">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-moss dark:text-sky-300">Portal finder</p>
          <h2 className="mt-2 font-display text-2xl font-black">Find the right RAG topic fast</h2>
        </div>
        <div className="w-full lg:max-w-md">
          <SearchBox value={query} onChange={setQuery} placeholder="Search concepts, tools, evaluation, Dify..." />
        </div>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {results.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-lg border border-line bg-paper p-4 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-400">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-bold">{item.title}</h3>
              <Badge tone="blue">{item.type}</Badge>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
