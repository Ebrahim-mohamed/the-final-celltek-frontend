import Eyebrow from '@/components/ui/Eyebrow';
import Lead from '@/components/ui/Lead';

// Pinned scroll scene: a wireframe aerial wipes into the photoreal render.
export default function ModelReveal() {
  return (
    <section className="reveal relative h-[280vh]" id="reveal" aria-labelledby="revH">
      <div className="pin sticky top-0 h-screen overflow-hidden">
        <div className="layer wire absolute inset-0 bg-ink">
          <img src="/img/etala-aerial.jpg" alt="" loading="lazy" className="h-full w-full object-cover" />
          <div className="grid-ov absolute inset-0" />
        </div>
        <div className="layer real absolute inset-0" id="real">
          <img src="/img/etala-aerial.jpg" alt="Photoreal aerial render of Etala, Hadayek October" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="seam absolute top-0 bottom-0 z-2 w-0.5 bg-accent-hi" id="seam" />
        <div className="absolute bottom-[clamp(36px,6vw,80px)] left-gutter z-2 grid max-w-[620px] gap-4">
          <Eyebrow>From model to reality</Eyebrow>
          <h2 id="revH" className="split text-[clamp(36px,5vw,80px)]">Every building, rendered before it&apos;s built.</h2>
          <Lead className="text-fg-soft">Our 3D team turns drawings into a photoreal twin of your compound. Scroll to render it.</Lead>
        </div>
        <div className="absolute right-gutter bottom-[clamp(36px,6vw,80px)] z-2 hidden gap-2.5 font-mono text-xs uppercase tracking-[.1em] md:flex">
          {['CGI', 'Masterplan', '4K'].map((t) => <span key={t} className="rounded-full border border-fg/35 bg-ink/45 px-3 py-[9px] backdrop-blur-[8px]">{t}</span>)}
        </div>
      </div>
    </section>
  );
}
