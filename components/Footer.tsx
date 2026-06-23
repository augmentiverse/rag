import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-white/92 dark:border-indigo-400/15 dark:bg-blue-950/92">
      <div className="mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-bold">RAG Reference Hub</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
              Educational reference material for grounded AI systems. Compare tools, study architectures, and keep claims tied to verifiable sources.
            </p>
          </div>
          <div>
            <p className="font-semibold">Explore</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
              <Link href="/tools">Tools directory</Link>
              <Link href="/dify">Dify guide</Link>
              <Link href="/comparisons">Comparisons</Link>
              <Link href="/editorial-principles">Editorial principles</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold">Maintain</p>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Tool details include verification notes and should be checked against official documentation before publication decisions.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-line pt-5 text-sm text-slate-500 dark:border-indigo-400/15 dark:text-slate-300">
          Copyright {new Date().getFullYear()} NE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
