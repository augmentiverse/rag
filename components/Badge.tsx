export function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "green" | "blue" | "clay" }) {
  const tones = {
    neutral: "border-slate-300 bg-white text-slate-800 dark:border-slate-400/60 dark:bg-slate-700 dark:text-white",
    green: "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-300/70 dark:bg-emerald-700 dark:text-white",
    blue: "border-indigo-200 bg-indigo-50 text-indigo-950 dark:border-violet-300/70 dark:bg-violet-700 dark:text-white",
    clay: "border-orange-200 bg-orange-50 text-orange-950 dark:border-amber-300/70 dark:bg-amber-700 dark:text-white",
  };

  return <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-black shadow-sm ${tones[tone]}`}>{children}</span>;
}
