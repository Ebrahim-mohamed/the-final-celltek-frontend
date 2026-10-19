import SolutionZoom from '@/components/sections/SolutionZoom';
import JourneySteps from '@/components/sections/JourneySteps';
import PlatformSpecs from '@/components/sections/PlatformSpecs';
import TouchScreens from '@/components/sections/TouchScreens';
import DashboardShowcase from '@/components/sections/DashboardShowcase';
import CaseStudies from '@/components/sections/CaseStudies';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Faq from '@/components/sections/Faq';
import CtaSection from '@/components/sections/CtaSection';
import { solutionFaq } from '@/content/site';

export const metadata = { title: 'Real Estate Interactive Solution' };

export default function SolutionPage() {
  return (
    <main id="page">
      <SolutionZoom as="h1" eyebrow="Real Estate Interactive Solution" title="Your whole compound, live in one platform." />
      <JourneySteps />
      <PlatformSpecs />
      <TouchScreens />
      <DashboardShowcase />
      <CaseStudies />
      <ProcessTimeline />
      <Faq title="Before you book a demo" items={solutionFaq} />
      <CtaSection interest="solution" />
    </main>
  );
}
