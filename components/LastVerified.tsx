export function LastVerified({ date }: { date: string }) {
  return <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Last verified: {date}</p>;
}
