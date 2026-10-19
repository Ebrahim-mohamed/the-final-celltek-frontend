import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';

const items = [
  { title: 'Our vision', text: 'To revolutionize property marketing through cutting-edge real-time technology.' },
  { title: 'Our mission', text: 'Bridging the gap between architectural concept and immersive customer reality.' },
];

// Who we are, with vision and mission.
export default function AboutIntro() {
  return (
    <Section tone="paper" className="about" id="about" aria-labelledby="aboutH">
      <div className="grid grid-cols-1 items-start gap-[clamp(24px,3vw,48px)] lg:grid-cols-[1.1fr_1fr_1fr]">
        <SectionHead className="mb-0" eyebrow="About us" title="Pioneering interactive real estate" titleId="aboutH" titleClassName="text-[clamp(34px,3.8vw,58px)]"
          lead="Celltek Studios crafts immersive experiences and high-fidelity 3D visualizations for developers and investors." />
        {items.map((v) => (
          <div key={v.title} className="vm grid gap-2.5 border-t-2 border-on-paper pt-5">
            <h3>{v.title}</h3>
            <p className="text-on-paper-muted">{v.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
