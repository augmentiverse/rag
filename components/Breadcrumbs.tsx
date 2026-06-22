import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 text-sm text-slate-600 dark:text-slate-400 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap gap-2">
        <li><Link className="hover:text-spruce dark:hover:text-white" href="/">Home</Link></li>
        {items.map((item) => (
          <li className="flex gap-2" key={item.label}>
            <span aria-hidden="true">/</span>
            {item.href ? <Link className="hover:text-spruce dark:hover:text-white" href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
