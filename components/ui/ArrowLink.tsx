import { cn } from '@/lib/cn';

const base = 'group/arrow inline-flex items-center gap-2 font-medium text-accent-hi paper:text-accent';
const arrow = <span className="transition-transform duration-300 ease-brand group-hover/arrow:translate-x-[5px] group-hover:translate-x-[5px]">→</span>;

// "Text →" link. Use as="span" inside a card that is already a link.
export default function ArrowLink({ as = 'a', className, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' | 'span' }) {
  if (as === 'span') return <span className={cn(base, className)}>{children} {arrow}</span>;
  return <a className={cn(base, className)} {...rest}>{children} {arrow}</a>;
}
