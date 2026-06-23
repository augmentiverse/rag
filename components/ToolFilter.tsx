"use client";

import { useMemo, useState } from "react";
import type { Tool } from "@/data/types";
import { toolCategories } from "@/data/tools";
import { SearchBox } from "./SearchBox";
import { ToolCard } from "./ToolCard";

const openSourceOptions = ["all", "yes", "partial", "no", "verify"] as const;
const hostingOptions = ["all", "self-hosted", "cloud"] as const;
const audienceOptions = ["all", "education", "enterprise", "research", "prototyping", "production"] as const;

const optionLabels: Record<string, string> = {
  all: "All",
  yes: "Open source",
  partial: "Partly open source",
  no: "Proprietary",
  verify: "Check official source",
  "self-hosted": "Self-hosted",
  cloud: "Cloud",
  education: "Education",
  enterprise: "Enterprise",
  research: "Research",
  prototyping: "Prototyping",
  production: "Production",
};

export function ToolFilter({ tools }: { tools: Tool[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [openSource, setOpenSource] = useState<(typeof openSourceOptions)[number]>("all");
  const [hosting, setHosting] = useState<(typeof hostingOptions)[number]>("all");
  const [audience, setAudience] = useState<(typeof audienceOptions)[number]>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const haystack = [tool.name, tool.category, tool.description, tool.mainUseCase, ...tool.tags, ...tool.targetUsers, ...tool.suitability].join(" ").toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      const matchesCategory = category === "all" || tool.category === category;
      const matchesOpen = openSource === "all" || tool.openSource === openSource;
      const matchesHosting = hosting === "all" || (hosting === "self-hosted" ? tool.selfHosting === "yes" || tool.selfHosting === "partial" : tool.cloud === "yes" || tool.cloud === "partial");
      const matchesAudience = audience === "all" || tool.suitability.includes(audience);
      return matchesQuery && matchesCategory && matchesOpen && matchesHosting && matchesAudience;
    });
  }, [audience, category, hosting, openSource, query, tools]);

  return (
    <section className="space-y-6" aria-label="Tool directory">
      <div className="rounded-lg border border-line bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
        <div className="grid gap-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <SearchBox value={query} onChange={setQuery} placeholder="Search tools, tags, use cases..." />
          <Select label="Category" value={category} onChange={setCategory} options={["all", ...toolCategories]} />
          <Select label="Open-source status" value={openSource} onChange={(value) => setOpenSource(value as typeof openSource)} options={openSourceOptions} />
          <Select label="Hosting" value={hosting} onChange={(value) => setHosting(value as typeof hosting)} options={hostingOptions} />
          <Select label="Best for" value={audience} onChange={(value) => setAudience(value as typeof audience)} options={audienceOptions} />
        </div>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">{filtered.length} tools shown</p>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
      </div>
    </section>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: readonly string[] }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="h-11 w-full rounded-md border border-line bg-white px-3 text-sm outline-none focus:border-spruce focus:ring-2 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-950 dark:focus:ring-emerald-900">
        {options.map((option) => <option key={option} value={option}>{optionLabels[option] ?? option}</option>)}
      </select>
    </label>
  );
}
