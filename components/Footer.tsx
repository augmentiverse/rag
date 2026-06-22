import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-bold">RAG Reference Hub</p>
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
    </footer>
  );
}
