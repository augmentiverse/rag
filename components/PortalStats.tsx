export function PortalStats({ stats }: { stats: { label: string; value: string; detail: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-lg border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
          <p className="text-3xl font-black">{stat.value}</p>
          <p className="mt-1 font-bold">{stat.label}</p>
          <p className="mt-2 text-sm leading-6 text-emerald-50/85">{stat.detail}</p>
        </div>
      ))}
    </div>
  );
}
