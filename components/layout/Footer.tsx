import Container from '@/components/ui/Container';
import { footerColumns } from '@/content/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-line pt-14 pb-10">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="grid content-start gap-4">
            <img src="/img/celltek-logo.png" alt="Celltek Studios" width="190" height="30" className="h-auto w-[190px]" />
            <p className="max-w-[34ch] text-muted">Interactive sales platforms and 3D visualization for developers in Egypt  .</p>
          </div>
          {footerColumns.map((c) => (
            <div key={c.title}>
              <h4 className="mb-3 font-mono text-xs font-normal uppercase tracking-[.1em] text-muted">{c.title}</h4>
              <ul className="grid gap-2">
                {c.links.map((l) => <li key={l.href}><a className="text-fg-soft hover:text-white" href={l.href}>{l.label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 text-sm text-muted"><span>© 2026 Celltek Studios</span></div>
      </Container>
    </footer>
  );
}
