import { cn } from '@/lib/cn';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MobileNav from './MobileNav';
import { solutionLinks, serviceGroups, projectLinks } from '@/content/navigation';

const navItem = 'inline-flex cursor-pointer items-center gap-1.5 rounded-full border-0 bg-transparent px-3.5 py-2.5 text-[#c9cdd6] transition-colors hover:bg-fg/8 hover:text-fg in-[.open]:bg-fg/8 in-[.open]:text-fg';
const menuBox = 'menu absolute top-[calc(100%-4px)] left-1/2 grid gap-[22px] rounded-[20px] border border-line bg-[rgb(18_21_28/.97)] p-[22px] shadow-[0_30px_60px_-20px_rgba(0,0,0,.75)] backdrop-blur-[16px]';
const groupTitle = 'mb-2.5 font-mono text-[11.5px] font-normal uppercase tracking-[.12em] text-accent-hi';

function Chevron() {
  return <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>;
}

function MenuLinks({ links }: { links: { href: string; label: string; note: string }[] }) {
  return (
    <ul className="grid gap-0.5">
      {links.map((l) => (
        <li key={l.href}>
          <a href={l.href} className="-mx-2.5 grid gap-0.5 rounded-[10px] px-2.5 py-[9px] text-fg transition-[background,translate] duration-300 ease-brand hover:translate-x-1 hover:bg-fg/7">
            {l.label}<span className="text-[13.5px] text-muted">{l.note}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

// Dropdown: the motion script opens it on hover or click via the "dd" and "open" classes.
function Dropdown({ label, id, className, children }: { label: string; id: string; className: string; children: React.ReactNode }) {
  return (
    <div className="dd">
      <button type="button" aria-expanded="false" aria-controls={id} className={navItem}>{label} <Chevron /></button>
      <div className={cn(menuBox, className)} id={id}>{children}</div>
    </div>
  );
}

export default function Header() {
  return (
    <>
      <header className="top fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)]" id="top">
        <Container className="relative flex h-16 items-center justify-between gap-6 md:h-[78px]">
          <a className="brand" href="/" aria-label="Celltek Studios home">
            <img src="/img/celltek-logo.png" alt="Celltek Studios" width="480" height="77" className="h-auto w-32 md:w-[168px]" />
          </a>
          <nav aria-label="Main" className="hidden items-center gap-1 text-[15.5px] lg:flex">
            <Dropdown label="Solution" id="m-sol" className="w-[min(640px,92vw)] grid-cols-[250px_1fr]">
              <a className="feature zoom-img relative isolate flex min-h-[230px] items-end overflow-hidden rounded-[14px] text-white" href="/solution">
                <img src="/img/etala-platform.jpg" alt="" className="absolute inset-0 -z-2 h-full w-full object-cover" />
                <div className="grid gap-0.5 p-4"><b>Real Estate Interactive Solution</b><span className="text-[13px] text-[#d9dce3]">Masterplan to unit, in one platform.</span></div>
              </a>
              <div><h5 className={groupTitle}>The platform</h5><MenuLinks links={solutionLinks} /></div>
            </Dropdown>
            <Dropdown label="Services" id="m-svc" className="w-[min(880px,92vw)] grid-cols-[repeat(3,minmax(190px,1fr))]">
              {serviceGroups.map((g) => (
                <div key={g.title}>
                  <h5 className={groupTitle}>{g.title}<small className="mt-[3px] block text-xs normal-case tracking-[.04em] text-muted">{g.audience}</small></h5>
                  <MenuLinks links={g.links} />
                </div>
              ))}
            </Dropdown>
            <Dropdown label="Projects" id="m-prj" className="w-[300px]">
              <div><h5 className={groupTitle}>Case studies</h5><MenuLinks links={projectLinks} /></div>
            </Dropdown>
            <a href="/about" className={navItem}>About</a>
            <a href="/contact" className={navItem}>Contact</a>
          </nav>
          <div className="flex items-center gap-3.5">
            <a className="hidden text-[15px] text-muted md:inline" href="#" lang="ar" title="Arabic version coming">عربي</a>
            <Button magnet size="sm" href="/book-a-demo" data-cta="header">Book a demo</Button>
            <button className="burger grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-fg/30 bg-ink/35 text-fg lg:hidden" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mnav">
              <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true"><path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.6" /></svg>
            </button>
          </div>
        </Container>
      </header>
      <MobileNav />
    </>
  );
}
