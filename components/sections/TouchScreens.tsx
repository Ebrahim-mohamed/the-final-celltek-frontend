import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Lead from '@/components/ui/Lead';
import { touchScreenPoints } from '@/content/site';

// Solution page: the platform on sales-centre touch screens.
export default function TouchScreens() {
  return (
    <Section flushTop id="screens" aria-labelledby="scrH" containerClassName="grid grid-cols-1 items-center gap-grid lg:grid-cols-[1.35fr_1fr]">
      <div className="aspect-[4/3] overflow-hidden rounded-card" data-cursor="360°">
        <img src="/img/etala-360-street.jpg" alt="Street-level 360 tour running on a sales-centre touch screen" loading="lazy" data-par className="h-[118%] w-full object-cover" />
      </div>
      <div className="grid gap-[22px]">
        <Eyebrow>In your sales centre</Eyebrow>
        <h2 id="scrH" className="split text-display-sm">Touch screens that close the sale</h2>
        <Lead>The same platform runs on large touch screens in your sales centre, so buyers explore and your team closes on one screen.</Lead>
        <ul className="mt-2 grid gap-3.5">
          {touchScreenPoints.map((p) => (
            <li key={p.title} className="border-t border-line pt-3.5 text-muted"><b className="block font-semibold text-fg">{p.title}</b>{p.text}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
