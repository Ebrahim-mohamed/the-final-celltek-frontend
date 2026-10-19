import { cn } from '@/lib/cn';

// Centred page width with side gutters.
export default function Container({ className, children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-site px-gutter', className)} {...rest}>{children}</div>;
}
