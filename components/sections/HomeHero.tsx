import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';

// Home hero: the live 3D compound (drawn on #twin by the motion script) with the headline over it.
export default function HomeHero() {
  return (
    <section className="hero relative isolate h-svh max-h-[1100px] min-h-[640px] overflow-hidden" id="hero" aria-label="Introduction">
      <div className="absolute inset-0 -z-3 bg-[url(/img/hero.jpg)] bg-cover bg-center" aria-hidden="true" />
      <canvas id="twin" className="absolute inset-0 -z-2 block h-full w-full" aria-label="Interactive 3D model of a residential compound. Buildings light up green when units are available." />
      <div className="tip pointer-events-none absolute z-3 rounded-lg bg-fg px-2.5 py-2 font-mono text-xs tracking-[.06em] whitespace-nowrap text-ink opacity-0" id="tip" />
      <div className="hud pointer-events-none absolute top-[110px] right-gutter hidden min-w-[230px] gap-2 rounded-[14px] border border-line bg-ink/55 px-4 py-3.5 font-mono text-[11.5px] uppercase tracking-[.1em] text-[#c8ccd5] backdrop-blur-[10px] lg:grid" aria-hidden="true">
        <div>Live compound · <b className="font-medium text-fg">Demo</b></div>
        <div>Buildings <b className="font-medium text-fg" id="hb">0</b> · Units available <b className="font-medium text-fg" id="hu">0</b></div>
        <div className="flex gap-3.5">
          {[['bg-ok', 'Available'], ['bg-sold', 'Sold'], ['bg-accent-hi', 'Selected']].map(([c, l]) => (
            <span key={l} className="flex items-center gap-1.5"><i className={`inline-block h-2 w-2 rounded-full ${c}`} />{l}</span>
          ))}
        </div>
      </div>
      <Container className="wrap pointer-events-none relative flex h-full flex-col justify-end pb-[clamp(40px,6vw,80px)] [&_a]:pointer-events-auto">
        <Eyebrow className="mb-[26px]" data-fade>Interactive sales platforms · 3D visualization</Eyebrow>
        <h1 className="split max-w-[12ch] text-[clamp(46px,13vw,64px)] leading-[.9] tracking-[-.045em] md:text-hero" id="h1">Immersive property experiences.</h1>
        <div className="mt-[30px] flex flex-wrap items-end justify-between gap-x-12 gap-y-7">
          <p className="max-w-[40ch] text-[clamp(17px,1.5vw,21px)] text-fg-soft" data-fade>Transforming development sales and investor journeys, from the masterplan down to every unit. Move your mouse over the compound.</p>
          <div className="flex flex-wrap gap-3" data-fade>
            <Button magnet href="/book-a-demo">Book a demo</Button>
            <Button magnet variant="ghost" href="/solution">► See how it works</Button>
          </div>
        </div>
      </Container>
      <div className="scrollcue absolute bottom-[22px] left-1/2 h-[46px] w-px -translate-x-1/2 overflow-hidden bg-fg/18" aria-hidden="true" />
    </section>
  );
}
