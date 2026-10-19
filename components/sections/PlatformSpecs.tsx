import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import { platformSpecs } from '@/content/site';

// Solution page: the eight things inside the platform, as a tiled grid.
export default function PlatformSpecs() {
  return (
    <Section id="features" aria-labelledby="featH">
      <SectionHead eyebrow="What's inside" title="Everything a buyer needs to decide" titleId="featH"
        lead="One platform from the masterplan down to the payment plan, branded as your project." />
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4" id="specs">
        {platformSpecs.map((s, i) => (
          <div key={s.title} className="relative grid content-start gap-2.5 bg-ink p-[clamp(22px,2.4vw,34px)] transition-colors duration-400 hover:bg-[#121621] sm:min-h-[220px]">
            <i className="font-mono text-xs not-italic text-accent-hi">{String(i + 1).padStart(2, '0')}</i>
            <b className="text-[21px] font-semibold tracking-[-.01em]">{s.title}</b>
            <span className="text-[15px] leading-normal text-muted">{s.text}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
