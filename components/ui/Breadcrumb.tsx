// "Home / Section / Page" trail. Items with an href are links.
export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <p className="font-mono text-eyebrow tracking-[.08em] text-muted">
      {items.map((it, i) => (
        <span key={i}>
          {i > 0 && ' / '}
          {it.href ? <a className="text-muted hover:text-fg" href={it.href}>{it.label}</a> : it.label}
        </span>
      ))}
    </p>
  );
}
