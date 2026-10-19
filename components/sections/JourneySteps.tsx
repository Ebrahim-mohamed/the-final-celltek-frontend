import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import { journeySteps } from '@/content/site';

// Buyer journey: on desktop a sticky picture changes as each step scrolls past; on phones each step shows its own picture.
export default function JourneySteps() {
  const n = String(journeySteps.length).padStart(2, '0');
  return (
    <Section className="story bg-ink-2" id="journey" aria-labelledby="navH">
      <SectionHead eyebrow="User experience" title="Seamless navigation" titleId="navH" />
      <div className="grid grid-cols-1 gap-[clamp(32px,5vw,80px)] lg:grid-cols-[1.4fr_1fr]">
        <div className="stage sticky top-[12vh] hidden h-[76vh] self-start lg:block" aria-hidden="true">
          <div className="absolute inset-0 overflow-hidden rounded-card border border-line bg-ink-3" data-cursor="View">
            <div className="big absolute top-3.5 right-5 z-3 text-[clamp(70px,8vw,130px)] leading-none font-semibold tracking-[-.05em] text-transparent tabular-nums" id="bigN">01</div>
            {journeySteps.map((s, i) => (
              <figure key={s.img + i} className={`absolute inset-0 m-0${i === 0 ? ' on' : ''}`}>
                <img src={`/img/${s.img}.jpg`} alt="" loading="lazy" className="h-full w-full object-cover" />
                <figcaption className="absolute bottom-[18px] left-[18px] rounded-lg bg-ink/72 px-3 py-2 font-mono text-xs uppercase tracking-[.06em] backdrop-blur-[8px]">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="grid">
          {journeySteps.map((s, i) => (
            <div key={s.title} className={`step flex flex-col justify-center gap-3.5 border-t border-line py-[30px] lg:min-h-[80vh] lg:border-0 lg:py-0${i === 0 ? ' on' : ''}`} data-i={i}>
              <div className="mb-2 aspect-[16/10] overflow-hidden rounded-2xl lg:hidden"><img src={`/img/${s.img}.jpg`} alt={s.alt} loading="lazy" className="h-full w-full object-cover" /></div>
              <span className="font-mono text-[13px] tracking-[.08em] text-accent-hi">{String(i + 1).padStart(2, '0')} / {n}</span>
              <h3 className="text-step">{s.title}</h3>
              <p className="max-w-[34ch] text-[19px] text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
