import Link from "next/link";
import type { UseCase } from "@/data/types";

export function UseCaseCard({ item }: { item: UseCase }) {
  return (
    <article className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
      <h3 className="text-lg font-bold">
        <Link href={`/use-cases/${item.slug}`} className="hover:text-spruce dark:hover:text-emerald-200">{item.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.problem}</p>
    </article>
  );
}
