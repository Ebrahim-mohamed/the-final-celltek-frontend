import { Suspense } from 'react';
import DemoForm from '@/components/forms/DemoForm';
import PageHero from '@/components/sections/PageHero';
import NumberedSteps from '@/components/sections/NumberedSteps';

export const metadata = { title: 'Book a demo' };

const next = [
  { title: 'We confirm within 1 working day', text: 'By phone or WhatsApp, at a time that suits you.' },
  { title: 'A 30-minute walkthrough', text: 'Online or at your office, with your sales lead.' },
  { title: 'A proposal for your project', text: 'Scope, timeline and price.' },
];

export default function BookDemoPage() {
  return (
    <main id="page">
      <section className="relative pt-[clamp(130px,16vw,200px)] pb-[clamp(80px,10vw,140px)]">
        <div className="mx-auto grid w-full max-w-site grid-cols-1 items-start gap-grid px-gutter lg:grid-cols-2">
          {/* left column reuses the page hero layout without its own section */}
          <PageHero bare crumbs={[{ label: 'Home', href: '/' }, { label: 'Book a demo' }]} eyebrow="Book a demo" title="See your project live."
            titleClassName="text-title-sm" lead="Tell us about your project. We'll walk you through the platform and show how it works for your compound.">
            <NumberedSteps className="mt-3" items={next} />
          </PageHero>
          <Suspense><DemoForm /></Suspense>
        </div>
      </section>
    </main>
  );
}
