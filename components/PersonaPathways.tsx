"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Persona = {
  persona: string;
  promise: string;
  start: string[];
  needs: string[];
  recommendedSections: string[];
};

export function PersonaPathways({ personas }: { personas: Persona[] }) {
  const [active, setActive] = useState(personas[0]?.persona ?? "");
  const persona = personas.find((item) => item.persona === active) ?? personas[0];

  return (
    <section className="rounded-lg border border-line bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Audience pathways">
        {personas.map((item) => (
          <button
            key={item.persona}
            type="button"
            onClick={() => setActive(item.persona)}
            className={`rounded-md px-3 py-2 text-sm font-bold transition ${active === item.persona ? "bg-spruce text-white" : "border border-line bg-paper text-slate-700 hover:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"}`}
          >
            {item.persona}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h3 className="text-2xl font-black">{persona.persona}</h3>
          <p className="mt-3 text-lg leading-8 text-slate-700 dark:text-slate-300">{persona.promise}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {persona.start.map((href, index) => (
              <Link key={href} href={href} className="inline-flex items-center gap-2 rounded-md bg-spruce px-4 py-2 text-sm font-bold text-white hover:bg-[#165557]">
                Start {index + 1} <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-md border border-line bg-paper p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="font-bold">Needs</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-300">
              {persona.needs.map((need) => <li key={need}>{need}</li>)}
            </ul>
          </div>
          <div className="rounded-md border border-line bg-paper p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="font-bold">Best sections</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-300">
              {persona.recommendedSections.map((section) => <li key={section}>{section}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
