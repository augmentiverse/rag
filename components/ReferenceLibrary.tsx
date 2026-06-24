"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import type { ResearchReference } from "@/data/types";
import { Badge } from "./Badge";

const verificationLabels = {
  "verified primary": "Primary source checked",
  "verified publisher": "Publisher record checked",
  "reader supplied": "Details to verify",
};

export function ReferenceLibrary({ references }: { references: ResearchReference[] }) {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("all");
  const [verification, setVerification] = useState("all");

  const kinds = useMemo(() => [...new Set(references.map((item) => item.kind))].sort(), [references]);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return references.filter((item) => {
      const searchable = [item.title, item.authors, item.publisher, item.note, ...item.topics].join(" ").toLowerCase();
      return (!normalized || searchable.includes(normalized))
        && (kind === "all" || item.kind === kind)
        && (verification === "all" || item.verification === verification);
    });
  }, [kind, query, references, verification]);

  return (
    <section>
      <div className="grid gap-3 rounded-lg border border-line bg-white p-4 dark:border-slate-800 dark:bg-slate-950 lg:grid-cols-[1fr_230px_230px]">
        <label className="relative">
          <span className="sr-only">Search references</span>
          <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title, author, publisher, or topic"
            className="h-11 w-full rounded-md border border-line bg-paper pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-blue-900"
          />
        </label>
        <label>
          <span className="sr-only">Filter by source type</span>
          <select value={kind} onChange={(event) => setKind(event.target.value)} className="h-11 w-full rounded-md border border-line bg-paper px-3 text-sm dark:border-slate-700 dark:bg-slate-900">
            <option value="all">All source types</option>
            {kinds.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span className="sr-only">Filter by verification</span>
          <select value={verification} onChange={(event) => setVerification(event.target.value)} className="h-11 w-full rounded-md border border-line bg-paper px-3 text-sm dark:border-slate-700 dark:bg-slate-900">
            <option value="all">All verification states</option>
            <option value="verified primary">Primary source checked</option>
            <option value="verified publisher">Publisher record checked</option>
            <option value="reader supplied">Details to verify</option>
          </select>
        </label>
      </div>

      <p className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-300" aria-live="polite">
        {filtered.length} reference{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {filtered.map((reference) => (
          <article key={`${reference.title}-${reference.published}`} className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-wrap gap-2">
              <Badge tone="blue">{reference.kind}</Badge>
              <Badge tone={reference.verification === "reader supplied" ? "clay" : "green"}>
                {verificationLabels[reference.verification]}
              </Badge>
            </div>
            <h3 className="mt-4 text-lg font-bold leading-7">
              {reference.url ? (
                <a href={reference.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 hover:text-blue-700 dark:hover:text-blue-200">
                  <span>{reference.title}</span>
                  <ExternalLink aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                </a>
              ) : reference.title}
            </h3>
            <dl className="mt-4 grid gap-2 text-sm">
              <div><dt className="inline font-bold">Author(s): </dt><dd className="inline text-slate-700 dark:text-slate-300">{reference.authors}</dd></div>
              <div><dt className="inline font-bold">Published: </dt><dd className="inline text-slate-700 dark:text-slate-300">{reference.published}</dd></div>
              <div><dt className="inline font-bold">Source: </dt><dd className="inline text-slate-700 dark:text-slate-300">{reference.publisher}</dd></div>
            </dl>
            {reference.versionNote ? <p className="mt-3 text-xs font-semibold text-blue-700 dark:text-blue-200">{reference.versionNote}</p> : null}
            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{reference.note}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {reference.topics.map((topic) => <span key={topic} className="rounded border border-line bg-paper px-2 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">{topic}</span>)}
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-6 rounded-lg border border-line bg-white p-6 text-center text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          No references match these filters.
        </p>
      ) : null}
    </section>
  );
}
