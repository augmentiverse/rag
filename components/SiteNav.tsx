"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
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
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur dark:border-slate-800 dark:bg-[#101413]/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-spruce text-white">R</span>
          <span>RAG Reference Hub</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {nav.slice(1).map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-white hover:text-spruce dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setDark((value) => !value)} className="grid h-10 w-10 place-items-center rounded-md border border-line bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" aria-label="Toggle dark mode">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-md border border-line bg-white lg:hidden dark:border-slate-700 dark:bg-slate-900" aria-label="Open navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-line bg-paper px-4 py-3 dark:border-slate-800 dark:bg-[#101413] lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-white dark:hover:bg-slate-900">
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
