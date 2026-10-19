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
          <SectionHead className="mb-0" eyebrow="Offices" title="Egypt and Saudi Arabia" titleClassName="text-display-sm">
            <TickList items={[
              { title: 'Egypt', text: 'Office address to come from Celltek' },
              { title: 'Saudi Arabia', text: 'Office address to come from Celltek' },
            ]} />
          </SectionHead>
          <Placeholder className="min-h-[360px] rounded-card">Map to come once addresses are confirmed</Placeholder>
        </SplitLayout>
      </Section>
      <CtaSection />
    </main>
  );
}
