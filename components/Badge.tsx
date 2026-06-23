export function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "green" | "blue" | "clay" }) {
  const tones = {
    neutral: "border-slate-300 bg-white text-slate-700 dark:border-indigo-400/25 dark:bg-blue-900/50 dark:text-blue-100",
    green: "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-300/45 dark:bg-emerald-300/14 dark:text-emerald-50",
    blue: "border-indigo-200 bg-indigo-50 text-indigo-900 dark:border-violet-300/45 dark:bg-violet-400/16 dark:text-violet-50",
    clay: "border-orange-200 bg-orange-50 text-orange-950 dark:border-amber-300/45 dark:bg-amber-400/14 dark:text-amber-50",
  };

  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${tones[tone]}`}>{children}</span>;
}
