import { cn } from '@/lib/cn';

export const inputClass = 'w-full rounded-xl border border-[#cfc9bc] bg-white px-4 py-3.5 font-display text-base text-on-paper focus:border-accent focus:outline-2 focus:outline-offset-1 focus:outline-accent in-[.bad]:border-error';

// Label + control + error message. The "bad" class shows the error (see effects.css).
export default function Field({ id, label, optional, error, bad, children }: {
  id: string; label: string; optional?: boolean; error?: string; bad?: boolean; children: React.ReactNode;
}) {
  return (
    <div className={cn('field grid gap-[7px]', bad && 'bad')}>
      <label htmlFor={id} className="text-[14.5px] font-semibold">
        {label}{optional && <small className="font-normal text-on-paper-muted"> (optional)</small>}
      </label>
      {children}
      {error && <span className="err text-[13.5px] text-error">{error}</span>}
    </div>
  );
}
