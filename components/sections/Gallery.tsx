import { cn } from '@/lib/cn';
import Placeholder from '@/components/ui/Placeholder';

// Image grid: a wide first (and last) tile keeps every row full. Null items are placeholders for content to come.
export default function Gallery({ items, alt, placeholder }: { items: (string | null)[]; alt: string; placeholder?: string }) {
  const n = items.length;
  const wide = new Set<number>((n + 1) % 3 === 0 ? [0] : n % 3 === 1 && n > 1 ? [0, n - 1] : []);
  const tile = (i: number) => cn('relative m-0 aspect-[4/3] overflow-hidden rounded-2xl bg-ink-3', wide.has(i) && 'sm:col-span-2 sm:aspect-auto');
  return (
    <div className="grid grid-cols-1 gap-[clamp(12px,1.4vw,20px)] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((src, i) =>
        src ? (
          <figure key={i} className={cn(tile(i), 'zoom-img')}>
            <img src={`/img/${src}.jpg`} alt={alt} loading="lazy" className="h-full w-full object-cover" />
          </figure>
        ) : (
          <Placeholder key={i} className={tile(i)}>{placeholder ? `${placeholder} ${i + 1} to come` : alt}</Placeholder>
        )
      )}
    </div>
  );
}
