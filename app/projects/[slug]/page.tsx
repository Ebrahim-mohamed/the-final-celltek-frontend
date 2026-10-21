import { notFound } from 'next/navigation';
import { projects, getProject } from '@/lib/content';
import PageHero from '@/components/sections/PageHero';
import LinkCards from '@/components/sections/LinkCards';
import StatsGrid from '@/components/sections/StatsGrid';
import SplitLayout from '@/components/sections/SplitLayout';
import TickList from '@/components/sections/TickList';
import Gallery from '@/components/sections/Gallery';
import CtaSection from '@/components/sections/CtaSection';
import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import Eyebrow from '@/components/ui/Eyebrow';
import ArrowLink from '@/components/ui/ArrowLink';
import Placeholder from '@/components/ui/Placeholder';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  return p ? { title: p.name } : {};
}


export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const next = getProject(p.next)!;
  const gallery: (string | null)[] = [...p.gallery];
  while (gallery.length < 3) gallery.push(null);
  return (
    <main id="page">
      <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: p.name }]}
        eyebrow={`Case study · ${p.location}`} title={p.name} image={{ src: `/img/${p.hero}.jpg`, alt: p.name }}>
        <LinkCards className="mt-2" cards={[
          { tag: 'Client', title: p.client },
          { tag: 'Location', title: p.location },
          { tag: 'What we did', title: p.services },
        ]} />
      </PageHero>

      <Section className="pt-[clamp(30px,5vw,60px)]"><StatsGrid stats={p.stats} /></Section>

      <Section flushTop>
        <SplitLayout>
          <SectionHead className="mb-0" eyebrow="The brief" title="What the developer needed" titleClassName="text-display-sm">
          
          {
            p.slug==="tilal"? <p className="min-h-[140px] rounded-[14px]">Based in Jeddah,  , the developer needed a compelling way to showcase the luxury and sophistication of its real estate project. Beyond presenting property units, the goal was to communicate the project's architectural elegance, premium lifestyle, and distinctive features to potential buyers through a visually engaging experience.</p>
           : <p className="min-h-[140px] rounded-[14px]">ElManara Development needed an effective way to showcase available units to a wider audience while improving coordination between internal departments. Managing unit information and communication across teams made the sales process more challenging.</p>
          }
            
          
          </SectionHead>
          <div>
            <Eyebrow className="mb-[18px]">What we built</Eyebrow>
            <TickList items={p.built} />
          </div>
        </SplitLayout>
      </Section>

      <Section flushTop>
        <SectionHead eyebrow="Gallery" />
        <Gallery items={gallery} alt={`${p.name}, project image`} placeholder="Image" />
      </Section>

      <Section tone="paper">
        <SplitLayout>
          <SectionHead className="mb-0" eyebrow="Results" title="What changed for the sales team" titleClassName="text-display-sm" />
          <div className="grid gap-3.5">

          {
            p.slug==="tilal"?
            <p className="min-h-[120px] rounded-[14px]">Celltek provided a digital solution designed to elevate the project's presentation, allowing Hawadi to showcase its properties and highlight the details that define its luxury positioning. The experience helped bring the project's vision to life, making it easier for potential buyers to explore its appeal and appreciate its value.</p>
            :<p className="min-h-[120px] rounded-[14px]">With faster access to accurate unit information with real time updates, the Sales team experienced smoother follow-ups. It also helped ElManara manage property information and sales activities more effectively.</p>
          }
            
            {
              p.slug==="tilal"?
              <p className="min-h-[120px] rounded-[14px]">Equipped the developer with a refined way to present the project to prospective clients.</p>
              :<p className="min-h-[120px] rounded-[14px]">The sales team found it easier to showcase available units and support potential buyers throughout their journey.</p>
            }
          </div>
        </SplitLayout>
      </Section>

      <Section className="pb-[clamp(60px,8vw,110px)]">
        <a href={`/projects/${next.slug}`} data-cursor="Open" className="group grid gap-3.5 border-t border-line pt-9">
          <Eyebrow as="span">Next case study</Eyebrow>
          <span className="flex flex-wrap items-end justify-between gap-5">
            <span className="split text-[clamp(36px,6vw,96px)] leading-none font-semibold tracking-[-.03em]">{next.name}</span>
            <ArrowLink as="span" className="text-xl">Open</ArrowLink>
          </span>
        </a>
      </Section>
      <CtaSection />
    </main>
  );
}
