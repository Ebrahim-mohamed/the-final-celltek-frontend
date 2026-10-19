import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import { processSteps } from '@/content/site';

// "How we work": five steps on a line that fills as you scroll (vertical on phones).
export default function ProcessTimeline() {
  return (
    <Section aria-labelledby="procH">
      <SectionHead eyebrow="Engagement" title="How we work" titleId="procH" />
      <div className="proc relative grid grid-cols-1 gap-7 pl-[34px] lg:grid-cols-5 lg:gap-6 lg:pt-[34px] lg:pl-0" id="proc">
        <div className="rail absolute top-0 bottom-0 left-1.5 w-0.5 bg-line lg:top-2 lg:right-0 lg:bottom-auto lg:left-0 lg:h-0.5 lg:w-auto">
          <i className="block h-full bg-accent-hi" id="procR" />
        </div>
        {processSteps.map((s, i) => (
          <div key={s.title} className="s relative grid gap-2">
            <em className="font-mono text-xs not-italic tracking-[.06em] text-accent-hi">Step {i + 1}</em>
            <b className="text-xl font-semibold">{s.title}</b>
            <span className="text-[15px] text-muted">{s.text}</span>
          </div>
        ))}
      </div>
      <p className="mt-10 font-mono text-[13px] text-muted">Typical timeline: 2 to 3 months from inputs to launch.</p>
    </Section>
  );
}
