"use client";
import { useState } from 'react';
import { cn } from '@/lib/cn';

const options = [['all', 'All'], ['eg', 'Egypt'], ['sa', ' ']] as const;

// Shows or hides project cards (inside #project-grid) by their data-loc attribute.
export default function ProjectFilters() {
  const [active, setActive] = useState('all');
  function pick(f: string) {
    setActive(f);
    document.querySelectorAll<HTMLElement>('#project-grid > *').forEach((c) => {
      c.style.display = f === 'all' || c.dataset.loc === f ? '' : 'none';
    });
    (window as unknown as { ScrollTrigger?: { refresh: () => void } }).ScrollTrigger?.refresh();
  }
  return (
    <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter by country">
      {options.map(([f, label]) => (
        <button key={f} type="button" aria-pressed={active === f} onClick={() => pick(f)}
          className={cn('cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium',
            active === f ? 'border-fg bg-fg text-ink' : 'border-line bg-transparent text-muted hover:text-fg')}>
          {label}
        </button>
      ))}
    </div>
  );
}
