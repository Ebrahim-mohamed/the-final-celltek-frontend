import { cn } from '@/lib/cn';

// Striped box marking content still to come. Each one matches a row in the content sheet.
export default function Placeholder({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('ph grid place-items-center border border-dashed border-line-hi p-5 text-center font-mono text-xs uppercase tracking-[.08em] text-muted paper:border-[#c9c3b5] paper:text-on-paper-muted', className)}>
      {children}
    </div>
  );
}
