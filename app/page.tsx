import Preloader from '@/components/layout/Preloader';
import HomeHero from '@/components/sections/HomeHero';
import ClientLogos from '@/components/sections/ClientLogos';
import ModelReveal from '@/components/sections/ModelReveal';
import Marquee from '@/components/sections/Marquee';
import SolutionZoom from '@/components/sections/SolutionZoom';
import JourneySteps from '@/components/sections/JourneySteps';
import VisualizationRail from '@/components/sections/VisualizationRail';
import DashboardShowcase from '@/components/sections/DashboardShowcase';
import CaseStudies from '@/components/sections/CaseStudies';
import BrandServices from '@/components/sections/BrandServices';
import AboutIntro from '@/components/sections/AboutIntro';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import CtaSection from '@/components/sections/CtaSection';

export default function HomePage() {
  return (
    <>
      <Preloader />
      <main id="home">
        <HomeHero />
        <ClientLogos />
        <ModelReveal />
        <Marquee />
        <SolutionZoom eyebrow="The solution" title="Interactive Real Estate Solution" />
        <JourneySteps />
        <VisualizationRail />
        <DashboardShowcase />
        <CaseStudies />
        <BrandServices />
        <AboutIntro />
        <ProcessTimeline />
        <CtaSection />
      </main>
    </>
  );
}
