import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Lead from '@/components/ui/Lead';
import { visualizationCards } from '@/content/site';

// Horizontal gallery: pinned on desktop and moved sideways by scroll; swipeable on phones.
export default function VisualizationRail() {
  return (
    <section className="hz on-paper relative overflow-hidden bg-paper text-on-paper" id="visualization" aria-labelledby="vizH">
      <div className="pin flex h-screen flex-col justify-center gap-[clamp(24px,3vw,40px)] pt-[90px] pb-10" id="hzpin">
        <Container className="flex flex-wrap items-end justify-between gap-6">
          <div className="grid gap-[18px]">
            <Eyebrow>For developers</Eyebrow>
            <h2 id="vizH" className="split">3D Visualization</h2>
          </div>
          <Lead>Photorealistic assets for every stage of your launch, produced in-house. Keep scrolling.</Lead>
        </Container>
        <div className="rail flex w-max gap-[clamp(14px,1.6vw,24px)] px-gutter will-change-transform" id="rail">
          {visualizationCards.map((c) => (
            <a key={c.tag} href={c.href} data-cursor={c.cursor}
              className={`card relative isolate h-[46vh] flex-none overflow-hidden rounded-card text-white md:h-[min(58vh,560px)] ${c.wide ? 'aspect-[4/5] md:aspect-[16/10]' : 'aspect-[4/5]'}`}>
              <img src={`/img/${c.img}.jpg`} alt={c.alt} loading="lazy" className="absolute inset-0 -z-2 h-full w-full object-cover" />
              <div className="absolute right-[22px] bottom-5 left-[22px] grid gap-1">
                <i className="font-mono text-xs not-italic tracking-[.08em] text-[#cfd6ff]">{c.tag}</i>
                <b className="text-[clamp(22px,2vw,30px)] font-semibold tracking-[-.02em]">{c.title}</b>
                <span className="text-[14.5px] text-[#e3e5ea]">{c.text}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="prog mx-gutter h-0.5 overflow-hidden bg-paper-2"><i className="block h-full bg-accent" id="hzp" /></div>
      </div>
    </section>
  );
}
