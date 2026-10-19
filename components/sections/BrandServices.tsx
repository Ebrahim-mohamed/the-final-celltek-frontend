import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import ArrowLink from '@/components/ui/ArrowLink';
import { brandPanels } from '@/content/site';

// "For any brand" services: two panels with a glow that follows the pointer.
export default function BrandServices() {
  return (
    <Section className="brands" flushTop aria-labelledby="brandH">
      <SectionHead eyebrow="For any brand" title="Creative, AI and marketing" titleId="brandH" />
      <div className="grid grid-cols-1 gap-cards md:grid-cols-2">
        {brandPanels.map((p) => (
          <div key={p.title} className="panel relative grid min-h-[320px] content-start gap-[18px] overflow-hidden rounded-card border border-line bg-ink-2 p-[clamp(28px,3vw,44px)] transition-colors duration-400 hover:border-line-hi">
            <div className="glow pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(52,80,200,.35),transparent_65%)]" />
            <span className="relative justify-self-start rounded-full border border-dashed border-line px-[11px] py-[7px] font-mono text-[11.5px] uppercase tracking-[.06em] text-muted">Samples to come from your Drive</span>
            <h3 className="relative text-h3-lg">{p.title}</h3>
            <ul className="relative grid gap-2.5">
              {p.items.map((it) => (
                <li key={it.name} className="flex justify-between gap-4 border-t border-line py-3 text-lg">{it.name}<span className="text-right text-sm text-muted">{it.note}</span></li>
              ))}
            </ul>
            <ArrowLink className="relative" href={p.href}>Explore</ArrowLink>
          </div>
        ))}
      </div>
    </Section>
  );
}
