// Big numbers in a tiled row (case study pages).
export default function StatsGrid({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="grid gap-1.5 bg-ink p-[clamp(22px,2.6vw,36px)]">
          <b className="text-[clamp(36px,4vw,60px)] leading-none font-semibold tracking-[-.03em]">{s.value}</b>
          <span className="text-[14.5px] text-muted">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
