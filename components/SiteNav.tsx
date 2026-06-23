"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const primaryNav = [
  ["Learn", "/learn"],
  ["Tools", "/tools"],
  ["Dify", "/dify"],
  ["Architectures", "/architectures"],
  ["Tutorials", "/tutorials"],
];

const secondaryNav = [
  ["Use Cases", "/use-cases"],
  ["Comparisons", "/comparisons"],
  ["Implementation", "/implementation"],
  ["Evaluation", "/evaluation"],
  ["Glossary", "/glossary"],
  ["Resources", "/resources"],
];

const mobileNav = [["Home", "/"], ...primaryNav, ...secondaryNav];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const moreActive = secondaryNav.some(([, href]) => pathname === href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/88 backdrop-blur-xl dark:border-indigo-400/15 dark:bg-blue-950/88">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link href="/" className="flex shrink-0 items-center gap-3 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-indigo-500 to-sky-500 font-mono text-xs text-white shadow-[0_10px_30px_rgba(59,130,246,0.28)]">RAG</span>
          <span className="tracking-tight">Reference Hub</span>
        </Link>
        <div className="hidden min-w-0 flex-1 items-center gap-1 lg:flex">
          {primaryNav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition ${pathname === href ? "bg-white text-spruce shadow-sm dark:bg-indigo-500/15 dark:text-white" : "text-slate-700 hover:bg-white hover:text-spruce dark:text-blue-100/80 dark:hover:bg-blue-900/70 dark:hover:text-white"}`}
            >
              {label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((value) => !value)}
              className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition ${moreActive ? "bg-white text-spruce shadow-sm dark:bg-indigo-500/15 dark:text-white" : "text-slate-700 hover:bg-white hover:text-spruce dark:text-blue-100/80 dark:hover:bg-blue-900/70 dark:hover:text-white"}`}
              aria-expanded={moreOpen}
              aria-haspopup="menu"
            >
              More <ChevronDown className="h-4 w-4" />
            </button>
            {moreOpen ? (
              <div className="absolute right-0 mt-2 w-56 rounded-lg border border-line bg-white p-2 shadow-soft dark:border-indigo-400/20 dark:bg-blue-950" role="menu">
                {secondaryNav.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMoreOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-semibold ${pathname === href ? "bg-blue-50 text-spruce dark:bg-indigo-500/15 dark:text-white" : "text-slate-700 hover:bg-blue-50 dark:text-blue-100/85 dark:hover:bg-blue-900/70"}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-md border border-line bg-white lg:hidden dark:border-slate-700 dark:bg-slate-900" aria-label="Open navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-line bg-paper px-4 py-3 dark:border-indigo-400/15 dark:bg-blue-950 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {mobileNav.map(([label, href]) => (
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
