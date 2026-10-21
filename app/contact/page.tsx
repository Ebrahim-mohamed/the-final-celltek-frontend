import PageHero from '@/components/sections/PageHero';
import LinkCards from '@/components/sections/LinkCards';
import SplitLayout from '@/components/sections/SplitLayout';
import TickList from '@/components/sections/TickList';
import CtaSection from '@/components/sections/CtaSection';
import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import Placeholder from '@/components/ui/Placeholder';
import { contact } from '@/lib/content';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <main id="page">
      <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} eyebrow="Contact" title="Talk to our team"
        lead="Questions about a project, a quote or a partnership. We reply within 1 working day.">
        <LinkCards className="mt-5" cards={[
          { tag: 'WhatsApp and phone', title: contact.phone, href: contact.whatsapp, cta: 'Message us' },
          { tag: 'Email', title: contact.email, href: `mailto:${contact.email}`, cta: 'Send an email', breakTitle: true },
          { tag: 'Developers', title: 'Book a platform demo', href: '/book-a-demo', cta: 'Book a demo' },
        ]} />
      </PageHero>
      <Section flushTop>
        <SplitLayout>
          <SectionHead className="mb-0" eyebrow="Offices" title="Egypt  " titleClassName="text-display-sm">
            <TickList items={[
              { title: 'Egypt', text: 'Villa 11, 53th street off 9th street, شارع المقطم، محافظة القاهرة' },
              
            ]} />
          </SectionHead>
  

<div className="min-h-[360px] overflow-hidden rounded-card">
  <iframe
    title="CELLTEK Location - Al Mokattam, Cairo"
    src="https://maps.google.com/maps?q=30.0132708,31.292276&z=17&output=embed"
    className="h-[360px] w-full border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


        </SplitLayout>
      </Section>
      <CtaSection />
    </main>
  );
}
