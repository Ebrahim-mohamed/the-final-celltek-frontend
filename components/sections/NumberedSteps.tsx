import { cn } from '@/lib/cn';

// Ordered steps numbered 01, 02, 03.
export default function NumberedSteps({ items, className }: { items: { title: string; text: string }[]; className?: string }) {
  return (
    <ol className={cn('steps3 grid', className)}>
      {items.map((i) => (
        <li key={i.title} className="relative grid gap-1 border-t border-line py-5 pl-14">
          <b className="text-[19px] font-semibold">{i.title}</b>
          <span className="text-muted">{i.text}</span>
        </li>
      ))}
    </ol>
  );
}
