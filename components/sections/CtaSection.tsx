import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Lead from '@/components/ui/Lead';
import Button from '@/components/ui/Button';
import { contact } from '@/lib/content';

// Closing "Book a demo" block on every page. interest pre-selects the form's dropdown.
export default function CtaSection({ interest }: { interest?: string }) {
  return (
    <section className="on-accent relative overflow-hidden bg-accent text-white" id="demo" aria-labelledby="ctaH">
      <Container className="grid gap-14 py-[clamp(90px,11vw,170px)]">
        <Eyebrow>See your project live</Eyebrow>
        <h2 id="ctaH" className="split text-cta">Ready to build the future?</h2>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-[22px]">
            <Lead>Send us your masterplan. We&apos;ll build one of your buildings inside the platform so you can experience it first.</Lead>
            <div className="flex flex-wrap gap-3">
              <Button magnet variant="white" href={interest ? `/book-a-demo?interest=${interest}` : '/book-a-demo'}>Book a demo</Button>
              <Button magnet variant="ghost" href={contact.whatsapp} target="_blank" rel="noopener">WhatsApp us</Button>
            </div>
          </div>
          <div className="grid gap-4">
            {[['Email', contact.email], ['Phone', contact.phone]].map(([k, v]) => (
              <div key={k} className="grid gap-0.5 border-t border-white/35 pt-3.5">
                <span className="font-mono text-xs uppercase tracking-[.08em] text-[#cdd6ff]">{k}</span>
                <b className="text-xl font-medium select-all">{v}</b>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
