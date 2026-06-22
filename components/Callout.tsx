export function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside className="rounded-lg border border-emerald-200 bg-emerald-50 p-5 text-sm leading-7 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-50">
      <p className="mb-2 font-bold">{title}</p>
      <div>{children}</div>
    </aside>
  );
}
