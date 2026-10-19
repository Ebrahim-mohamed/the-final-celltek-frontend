import { cn } from '@/lib/cn';

// Two equal columns on desktop, stacked on phones.
export default function SplitLayout({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('grid grid-cols-1 items-start gap-grid lg:grid-cols-2', className)}>{children}</div>;
}
