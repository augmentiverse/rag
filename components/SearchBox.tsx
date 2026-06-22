"use client";

import { Search } from "lucide-react";

export function SearchBox({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) {
  return (
    <label className="relative block">
      <span className="sr-only">{placeholder}</span>
      <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-md border border-line bg-white pl-10 pr-3 text-sm outline-none transition focus:border-spruce focus:ring-2 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-950 dark:focus:ring-emerald-900"
      />
    </label>
  );
}
