export function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "green" | "blue" | "clay" }) {
  const tones = {
    neutral: "border-slate-300 bg-white text-slate-700 dark:border-indigo-400/25 dark:bg-blue-900/50 dark:text-blue-100",
    green: "border-blue-200 bg-blue-50 text-blue-800 dark:border-sky-400/30 dark:bg-sky-500/10 dark:text-sky-100",
    blue: "border-indigo-200 bg-indigo-50 text-indigo-800 dark:border-indigo-400/30 dark:bg-indigo-500/15 dark:text-indigo-100",
    clay: "border-orange-200 bg-orange-50 text-orange-900 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-100",
  };

  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${tones[tone]}`}>{children}</span>;
}
