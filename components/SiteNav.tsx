"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primary = [["Learn", "/learn"], ["Tools", "/tools"], ["Architectures", "/architectures"], ["Implementation", "/implementation"], ["Resources", "/resources"]];
const more = [["Dify", "/dify"], ["Tutorials", "/tutorials"], ["Use Cases", "/use-cases"], ["Comparisons", "/comparisons"], ["Evaluation", "/evaluation"], ["Glossary", "/glossary"]];
const all = [["Home", "/"], ...primary, ...more];

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const saved = window.localStorage.getItem("rag-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("rag-theme", theme);
  }, [theme]);
  useEffect(() => { setMobileOpen(false); setMoreOpen(false); }, [pathname]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileOpen(false); setMoreOpen(false); }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  const active = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
  return (
    <header className="rag-header">
      <nav className="rag-header-inner" aria-label="Primary navigation">
        <Link href="/" className="rag-brand" aria-label="AI-RAG home">
          <span className="rag-brand-icon" aria-hidden="true">✦</span>
          <span className="rag-brand-type">AI<b>·</b>RAG<small>REFERENCE HUB</small></span>
        </Link>
        <div className="rag-nav">
          {primary.map(([label, href]) => <Link key={href} href={href} className={`rag-nav-link ${active(href) ? "active" : ""}`} aria-current={active(href) ? "page" : undefined}>{label}</Link>)}
          <div className="rag-nav-dropdown">
            <button type="button" className={`rag-nav-link ${more.some(([, href]) => active(href)) ? "active" : ""}`} aria-expanded={moreOpen} aria-controls="rag-more-menu" onClick={() => setMoreOpen(!moreOpen)}>More <ChevronDown className="h-4 w-4" aria-hidden="true" /></button>
            {moreOpen && <div id="rag-more-menu" className="rag-dropdown-panel">
              {more.map(([label, href]) => <Link key={href} href={href} className={active(href) ? "active" : ""} onClick={() => setMoreOpen(false)}>{label}</Link>)}
            </div>}
          </div>
        </div>
        <div className="rag-header-actions">
          <button type="button" className="rag-theme-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Light mode" : "Dark mode"}>
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link href="/learn" className="rag-header-cta">Get started <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          <button type="button" className="rag-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="rag-mobile-nav" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {mobileOpen && <div id="rag-mobile-nav" className="rag-mobile-nav">
        {all.map(([label, href]) => <Link key={href} href={href} className={active(href) ? "active" : ""} onClick={() => setMobileOpen(false)} aria-current={active(href) ? "page" : undefined}>{label}</Link>)}
      </div>}
    </header>
  );
}
