import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';

// Questions and answers on a light background. The first one starts open.
export default function Faq({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <Section tone="paper" id="faq" aria-labelledby="faqH">
      <SectionHead eyebrow="Questions" title={title} titleId="faqH" />
      <div className="faq max-w-[900px]">
        {items.map((f, i) => (
          <details key={f.q} open={i === 0} className="overflow-hidden border-t border-paper-2 last:border-b">
            <summary className="flex cursor-pointer list-none justify-between gap-5 py-6 text-[clamp(18px,1.6vw,22px)] font-semibold">{f.q}</summary>
            <p className="mb-6 max-w-[62ch] text-on-paper-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
