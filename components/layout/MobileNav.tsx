import { buttonClass } from '@/components/ui/Button';
import { solutionLinks, serviceGroups, projectLinks } from '@/content/navigation';

const summary = 'flex cursor-pointer list-none items-center justify-between py-[18px] text-[26px] font-medium';
const subLink = 'block py-[7px] text-[17px] text-[#d9dce3]';
const item = 'border-b border-line py-[18px] text-[26px] font-medium';

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="border-b border-line">
      <summary className={summary}>{title}</summary>
      <div className="grid gap-3.5 pb-[18px]">{children}</div>
    </details>
  );
}

// Full-screen phone menu. The motion script opens and closes it with the "open" class.
export default function MobileNav() {
  return (
    <div className="mnav fixed inset-0 z-60 flex flex-col gap-2 overflow-y-auto bg-ink px-5 pt-[calc(env(safe-area-inset-top,0px)+14px)] pb-[calc(env(safe-area-inset-bottom,0px)+24px)]" id="mnav" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="mb-3 flex h-[50px] items-center justify-between">
        <img src="/img/celltek-logo.png" alt="Celltek Studios" width="480" height="77" className="h-auto w-[132px]" />
        <button className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-fg/30 bg-ink/35 text-fg" type="button" aria-label="Close menu" data-close>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" /></svg>
        </button>
      </div>
      <Group title="Solution">
        {solutionLinks.map((l) => <a key={l.href} className={subLink} href={l.href}>{l.mobile ?? l.label}</a>)}
      </Group>
      <Group title="Services">
        {serviceGroups.map((g) => (
          <div key={g.title}>
            <h5 className="font-mono text-[11.5px] font-normal uppercase tracking-[.12em] text-accent-hi">{g.title} · {g.audience.toLowerCase()}</h5>
            {g.links.map((l) => <a key={l.href} className={subLink} href={l.href}>{l.label}</a>)}
          </div>
        ))}
      </Group>
      <Group title="Projects">
        {projectLinks.map((l) => <a key={l.href} className={subLink} href={l.href}>{l.label}</a>)}
      </Group>
      <a className={item} href="/about">About</a>
      <a className={item} href="/contact">Contact</a>
      <div className="mt-auto grid gap-3 pt-7">
        <a className={buttonClass('primary', 'md', 'justify-center')} href="/book-a-demo">Book a demo</a>
      </div>
    </div>
  );
}
