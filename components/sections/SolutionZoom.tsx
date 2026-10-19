import Eyebrow from '@/components/ui/Eyebrow';
import { solutionPills } from '@/content/site';

// Pinned scroll scene: the platform screenshot grows to full screen, then three benefit cards rise in.
export default function SolutionZoom({ eyebrow, title, as: H = 'h2' }: { eyebrow: string; title: string; as?: 'h1' | 'h2' }) {
  return (
    <section className="zoom relative h-[260vh]" id="solution" aria-labelledby="solH">
      <div className="pin sticky top-0 grid h-screen place-items-center overflow-hidden">
        <div className="card relative aspect-video w-[84vw] overflow-hidden rounded-3xl md:w-[46vw]" id="zcard">
          <img src="/img/tilal-platform.jpg" alt="Tilal interactive masterplan with four villa models" className="h-full w-full object-cover" />
        </div>
        <div className="intro pointer-events-none absolute inset-0 grid content-between px-gutter pt-24 pb-12 md:pt-[120px]">
          <div className="grid gap-5">
            <Eyebrow>{eyebrow}</Eyebrow>
            <H id="solH" className={H === 'h1' ? 'split max-w-[18ch] text-[clamp(40px,5vw,80px)] leading-[.98]' : 'split max-w-[14ch]'}>{title}</H>
          </div>
        </div>
        <div className="pills absolute inset-x-gutter bottom-7 z-2  grid grid-cols-1 gap-2.5 lg:bottom-12 lg:grid-cols-3 lg:gap-4" id="pills">
          {solutionPills.map((p, i) => (
            <div key={i} className="grid gap-1.5 rounded-[18px] border border-fg/16 bg-ink/62 p-4 backdrop-blur-[14px] lg:p-[22px]">
              <i className="font-mono text-xs not-italic text-accent-hi">{String(i + 1).padStart(2, '0')}</i>
              <h3>{p.title}</h3>
              <p className="text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
