import PageHero from '@/components/sections/PageHero';
import Button from '@/components/ui/Button';
import { contact } from '@/lib/content';

export const metadata = { title: 'Thank you' };

export default function ThankYouPage() {
  return (
    <main id="page">
      <PageHero className="min-h-[80vh]" containerClassName="max-w-[900px]" eyebrow="Request received" title="Thank you. We'll be in touch."
        titleClassName="text-title-sm" lead="Our team will confirm your demo within 1 working day by phone or WhatsApp."
        before={
          <div className="grid h-[72px] w-[72px] place-items-center rounded-full bg-ok text-ink" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.4" /></svg>
          </div>
        }>
        <div className="flex flex-wrap gap-3">
          <Button href={contact.whatsapp} target="_blank" rel="noopener">Message us on WhatsApp</Button>
          <Button variant="ghost" href="/projects">See our projects</Button>
        </div>
      </PageHero>
    </main>
  );
}
