import type { Comparison } from "@/data/types";

export function ToolComparisonTable({ comparison }: { comparison: Comparison }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-white dark:border-slate-800 dark:bg-slate-950">
      <table className="min-w-full text-left text-sm">
        <caption className="sr-only">{comparison.title}</caption>
        <thead className="bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
          <tr>
            <th scope="col" className="w-56 px-4 py-3 font-bold">Criterion</th>
            {comparison.items.map((item) => <th scope="col" className="px-4 py-3 font-bold" key={item}>{item}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-line dark:divide-slate-800">
          {comparison.rows.map((row) => (
            <tr key={row.criterion}>
              <th scope="row" className="px-4 py-3 align-top font-semibold capitalize text-slate-900 dark:text-white">{row.criterion}</th>
              {row.values.map((value, index) => <td className="px-4 py-3 align-top leading-6 text-slate-700 dark:text-slate-300" key={`${row.criterion}-${index}`}>{value}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
