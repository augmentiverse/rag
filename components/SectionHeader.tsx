export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-moss dark:text-sky-300">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-bold tracking-normal text-ink dark:text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}
