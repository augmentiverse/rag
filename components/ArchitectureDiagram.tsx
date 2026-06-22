import { ArrowRight } from "lucide-react";

export function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div className="flex items-center gap-2" key={step}>
            <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">{step}</span>
            {index < steps.length - 1 ? <ArrowRight aria-hidden="true" className="h-4 w-4 text-moss dark:text-emerald-300" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
