"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  ["Home", "/"],
  ["Learn RAG", "/learn"],
  ["Tools", "/tools"],
  ["Dify", "/dify"],
  ["Architectures", "/architectures"],
  ["Tutorials", "/tutorials"],
  ["Use Cases", "/use-cases"],
  ["Comparisons", "/comparisons"],
  ["Glossary", "/glossary"],
  ["Resources", "/resources"],
  ["Implementation", "/implementation"],
  ["Evaluation", "/evaluation"],
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"clear" | "blue">("clear");
  const pathname = usePathname();

  useEffect(() => {
    const stored = window.localStorage.getItem("rag-theme");
    if (stored === "blue" || stored === "clear") setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "blue");
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("rag-theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/88 backdrop-blur-xl dark:border-indigo-400/15 dark:bg-blue-950/88">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link href="/" className="flex shrink-0 items-center gap-3 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-indigo-500 to-sky-500 font-mono text-xs text-white shadow-[0_10px_30px_rgba(59,130,246,0.28)]">RAG</span>
          <span className="tracking-tight">Reference Hub</span>
        </Link>
        <div className="hidden min-w-0 flex-1 items-center gap-1 overflow-x-auto lg:flex">
          {nav.slice(1).map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition ${pathname === href ? "bg-white text-spruce shadow-sm dark:bg-indigo-500/15 dark:text-white" : "text-slate-700 hover:bg-white hover:text-spruce dark:text-blue-100/80 dark:hover:bg-blue-900/70 dark:hover:text-white"}`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden rounded-md border border-line bg-white p-1 shadow-sm dark:border-indigo-400/20 dark:bg-blue-900/60 sm:flex" aria-label="Interface theme">
            {(["clear", "blue"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTheme(option)}
                aria-pressed={theme === option}
                className={`rounded px-3 py-1.5 text-xs font-bold transition ${theme === option ? "bg-spruce text-white dark:bg-indigo-500" : "text-slate-600 hover:bg-slate-50 dark:text-blue-100/80 dark:hover:bg-blue-800/70"}`}
              >
                {option === "clear" ? "Clear" : "Blue dark"}
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-md border border-line bg-white lg:hidden dark:border-slate-700 dark:bg-slate-900" aria-label="Open navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-line bg-paper px-4 py-3 dark:border-indigo-400/15 dark:bg-blue-950 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            <div className="mb-2 grid grid-cols-2 gap-2 rounded-md border border-line bg-white p-1 dark:border-indigo-400/20 dark:bg-blue-900/60">
              <button type="button" onClick={() => setTheme("clear")} className={`rounded px-3 py-2 text-sm font-bold ${theme === "clear" ? "bg-spruce text-white dark:bg-indigo-500" : "text-slate-700 dark:text-blue-100"}`}>Clear</button>
              <button type="button" onClick={() => setTheme("blue")} className={`rounded px-3 py-2 text-sm font-bold ${theme === "blue" ? "bg-spruce text-white dark:bg-indigo-500" : "text-slate-700 dark:text-blue-100"}`}>Blue dark</button>
            </div>
            {nav.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className={`rounded-md px-3 py-2 text-sm font-semibold hover:bg-white dark:hover:bg-blue-900 ${pathname === href ? "bg-white text-spruce dark:bg-indigo-500/15 dark:text-white" : ""}`}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
