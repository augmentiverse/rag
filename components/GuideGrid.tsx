export function GuideGrid({ guides }: { guides: { title: string; items: string[] }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {guides.map((guide) => (
        <article className="rounded-xl border border-line bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950" key={guide.title}>
          <h3 className="text-lg font-bold">{guide.title}</h3>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {guide.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
