import PageHero from '@/components/sections/PageHero';
import ProjectFilters from '@/components/sections/ProjectFilters';
import CaseCard from '@/components/sections/CaseCard';
import CtaSection from '@/components/sections/CtaSection';
import Section from '@/components/ui/Section';

export const metadata = { title: 'Projects' };

const others = [
  { name: 'Sun Capital', img: 'sun-capital-plan', logo: 'logo-suncapital' },
  // { name: 'Hwadi Real Estate', logo: 'logo-hwadi' },
  // { name: 'Arabia Developments', logo: 'logo-arabia' },
];

export default function ProjectsPage() {
  return (
    <main id="page">
      <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]} eyebrow="Projects" title="Delivered in Egypt  "
        lead="Interactive sales platforms, renders and plans for residential compounds." />
      <Section flushTop className="cases" id="projects">
        <ProjectFilters />
        <div className="grid grid-cols-1 gap-cards md:grid-cols-2" id="project-grid">
          <CaseCard href="/projects/etala" loc="eg" img="etala-aerial" alt="Etala by El Manara" eyebrow="Case study · Egypt" title="Etala by El Manara">
            <p className="text-muted">Interactive solution · 77 units</p>
          </CaseCard>
          <CaseCard href="/projects/tilal" loc="sa" img="tilal-platform" alt="Tilal, Jeddah Heights" eyebrow="Case study ·  " title="Tilal, Jeddah Heights">
            <p className="text-muted">Interactive solution · 4 villa models</p>
          </CaseCard>
          {others.map((o) => (
            <CaseCard key={o.name} loc="eg" img={o.img} alt={o.name} logo={{ src: o.logo, alt: `${o.name} logo` }} title={o.name}>
              <p className="text-muted">Case study coming soon</p>
            </CaseCard>
          ))}
        </div>
      </Section>
      <CtaSection />
    </main>
  );
}
