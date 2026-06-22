import Link from "next/link";

export function RelatedContent({ links }: { links: { href: string; label: string }[] }) {
  return (
    <aside className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
      <p className="font-bold">Related content</p>
      <div className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-300">
        {links.map((link) => <Link className="hover:text-spruce dark:hover:text-emerald-200" href={link.href} key={link.href}>{link.label}</Link>)}
      </div>
    </aside>
  );
}
