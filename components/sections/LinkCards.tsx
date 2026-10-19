import { cn } from '@/lib/cn';
import ArrowLink from '@/components/ui/ArrowLink';

type Card = { tag: string; title: string; text?: string; href?: string; cta?: string; breakTitle?: boolean };

// Row of three cards. variant="related" adds a hover lift and accent border (service and about pages).
export default function LinkCards({ cards, variant = 'info', className }: { cards: Card[]; variant?: 'info' | 'related'; className?: string }) {
  const related = variant === 'related';
  return (
    <div className={cn('grid grid-cols-1 gap-4 lg:grid-cols-3', className)}>
      {cards.map((c) => {
        const inner = (
          <>
            <i className={cn('font-mono text-xs not-italic uppercase', related ? 'tracking-[.08em] text-accent-hi' : 'tracking-[.1em] text-muted')}>{c.tag}</i>
            <b className={cn('font-semibold', !related && 'text-xl', c.breakTitle && 'break-all')}>{c.title}</b>
            {c.text && <span className="text-[14.5px] text-muted">{c.text}</span>}
            {c.cta && <ArrowLink as="span">{c.cta}</ArrowLink>}
          </>
        );
        const cls = cn('grid content-start gap-2 border border-line bg-ink-2 text-fg',
          related ? 'gap-1.5 rounded-2xl p-6 transition-[border-color,translate] duration-400 ease-brand hover:-translate-y-1 hover:border-accent-hi' : 'rounded-[18px] p-[26px]');
        if (!c.href) return <div key={c.title} className={cls}>{inner}</div>;
        const external = c.href.startsWith('http');
        return <a key={c.title} className={cn(cls, 'group')} href={c.href} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>{inner}</a>;
      })}
    </div>
  );
}
