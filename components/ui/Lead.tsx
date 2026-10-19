import { cn } from '@/lib/cn';

// Intro paragraph under a heading. Keeps the "lead" class: the motion script fades these in.
export default function Lead({ className, children, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('lead max-w-[52ch] text-lead text-muted paper:text-on-paper-muted on-accent:text-[#e6eaff]', className)} {...rest}>
      {children}
    </p>
  );
}
