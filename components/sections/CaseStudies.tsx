import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import CaseCard from './CaseCard';
import { caseHighlights } from '@/content/site';

// Two featured case studies with numbers that count up.
export default function CaseStudies() {
  return (
    <Section className="cases" id="projects" aria-labelledby="caseH">
      <SectionHead eyebrow="Proof" title="Delivered in Egypt and Saudi Arabia" titleId="caseH" />
      <div className="grid grid-cols-1 gap-cards md:grid-cols-2">
        {caseHighlights.map((c) => (
          <CaseCard key={c.href} href={c.href} img={c.img} alt={c.alt} eyebrow={c.eyebrow} title={c.title}>
            <div className="flex flex-wrap gap-[clamp(20px,3vw,44px)]">
              {c.stats.map((s) => (
                <div key={s.label} className="grid">
                  <b className="text-stat font-semibold tracking-[-.03em] tabular-nums" data-count={s.count}>{s.value}</b>
                  <span className="mt-1.5 text-sm text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </CaseCard>
        ))}
      </div>
    </Section>
  );
}
