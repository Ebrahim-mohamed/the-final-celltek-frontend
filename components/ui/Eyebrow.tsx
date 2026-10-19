import { cn } from '@/lib/cn';

// Small mono label above a heading. Keeps the "eyebrow" class: the motion script fades these in.
export default function Eyebrow({ className, children, as: Tag = 'p', ...rest }: React.HTMLAttributes<HTMLElement> & { as?: 'p' | 'span' }) {
  return (
    <Tag
      className={cn(
        'eyebrow m-0 flex items-center gap-2.5 font-mono text-eyebrow uppercase tracking-[.16em] text-accent-hi paper:text-accent on-accent:text-[#dfe5ff]',
        'before:h-px before:w-[22px] before:bg-current before:content-[""]',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
