// List of bold titles with a line of text, separated by rules.
export default function TickList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="grid">
      {items.map((i) => (
        <li key={i.title} className="grid gap-1 border-t border-line py-[18px] paper:border-paper-2">
          <b className="text-[19px] font-semibold">{i.title}</b>
          <span className="text-[15.5px] text-muted paper:text-on-paper-muted">{i.text}</span>
        </li>
      ))}
    </ul>
  );
}
