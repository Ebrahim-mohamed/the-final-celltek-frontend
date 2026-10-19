import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import { dashboardFeatures } from '@/content/site';

// Developer dashboard: feature list beside a browser frame that tilts upright as you scroll.
export default function DashboardShowcase() {
  return (
    <Section tone="paper" className="dash" id="dash" aria-labelledby="dashH">
      <div className="grid grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1fr_1.5fr]">
        <div>
          <SectionHead className="mb-7" eyebrow="Platform control" title="Developer Dashboard" titleId="dashH" titleClassName="text-display-md"
            lead="Centralized operations and prospect tracking for your sales team." />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2" id="feat">
            {dashboardFeatures.map((f) => (
              <div key={f.title} className="grid gap-1.5 rounded-[14px] border border-paper-2 bg-[#fbfaf7] p-[18px] transition-[translate,box-shadow] duration-400 ease-brand hover:-translate-y-[5px] hover:shadow-[0_18px_40px_-22px_rgba(20,22,27,.35)]">
                <b className="text-[17px] font-semibold">{f.title}</b>
                <span className="text-[14.5px] leading-[1.45] text-on-paper-muted">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="perspective-[1400px]">
          <div className="browser overflow-hidden rounded-[14px] border border-paper-2 bg-white shadow-[0_60px_100px_-50px_rgba(20,22,27,.5)]" id="browser">
            <div className="flex gap-1.5 bg-[#ece9e2] px-3.5 py-3">{[0, 1, 2].map((i) => <i key={i} className="h-2.5 w-2.5 rounded-full bg-[#cfc9bd]" />)}</div>
            <img src="/img/dashboard.jpg" alt="Tilal admin dashboard, unit allocation table" loading="lazy" width="1600" height="861" />
          </div>
        </div>
      </div>
    </Section>
  );
}
