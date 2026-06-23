export function PortalStats({ stats }: { stats: { label: string; value: string; detail: string }[] }) {
  return (
    <div className="grid overflow-hidden rounded-2xl border border-indigo-300/15 bg-indigo-300/10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="border-indigo-300/15 bg-blue-950/45 p-5 text-center text-white backdrop-blur transition hover:bg-blue-900/55 lg:border-r">
          <p className="font-display text-4xl font-black text-indigo-300">{stat.value}</p>
          <p className="mt-1 font-bold">{stat.label}</p>
          <p className="mt-2 text-sm leading-6 text-blue-100/65">{stat.detail}</p>
        </div>
      ))}
    </div>
  );
}
