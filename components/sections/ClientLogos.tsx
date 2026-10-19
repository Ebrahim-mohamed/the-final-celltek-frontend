import Container from '@/components/ui/Container';
import { clientLogos } from '@/content/site';

// Client logo strip. Each logo links to its case study. On phones the row scrolls sideways.
export default function ClientLogos() {
  return (
    <section className="logos py-14" aria-label="Clients">
      <p className="mb-[30px] text-center text-sm text-muted">Trusted by developers in Egypt and Saudi Arabia</p>
      <Container className="overflow-hidden">
        <div className="logo-row flex items-center justify-between gap-11 md:gap-10" id="logoRow">
          {clientLogos.map((l) => (
            <a key={l.src} href={l.href} aria-label={l.label} className="flex opacity-55 transition-[opacity,translate] duration-400 ease-brand hover:-translate-y-[3px] hover:opacity-100">
              <img src={`/img/${l.src}.png`} alt={l.alt} width={l.w} height="120" className={l.tall ? 'h-[42px] w-auto md:h-[54px]' : 'h-[34px] w-auto md:h-11'} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
