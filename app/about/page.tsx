import PageHero from '@/components/sections/PageHero';
import AboutIntro from '@/components/sections/AboutIntro';
import LinkCards from '@/components/sections/LinkCards';
import Gallery from '@/components/sections/Gallery';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import CtaSection from '@/components/sections/CtaSection';
import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';

export const metadata = { title: 'About' };

const offer = [
  { tag: 'Platform', title: 'Real Estate Interactive Solution', text: 'Masterplan to unit, with live availability.', href: '/solution' },
  { tag: '3D Visualization', title: 'Renders, plans, reels and tours', text: 'Photoreal visuals for every launch.', href: '/services/cgi' },
  { tag: 'Marketing', title: 'Campaigns and telesales', text: 'Leads found, answered and followed up.', href: '/services/social' },
];

export default function AboutPage() {
  return (
    <main id="page">
      <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]} eyebrow="About Celltek Studios"
        title="We build the sales experience before the building."
        lead="A team of 3D artists, developers and marketers working with property developers in Egypt  ."
        image={{ src: '/img/hero.jpg', alt: 'Celltek render of a residential compound' }} />
      <AboutIntro />
      <Section>
        <SectionHead eyebrow="Under one roof" title="From the first render to the last sale" titleClassName="text-display-sm" />
        <LinkCards variant="related" cards={offer} />
      </Section>
      {/* <Section flushTop>
        <SectionHead eyebrow="Team" title="The people behind the work" titleClassName="text-display-sm" />
        <Gallery items={[null, null, null]} alt="Team photo to come" />
      </Section> */}
      <ProcessTimeline />
      <CtaSection />
    </main>
  );
}
