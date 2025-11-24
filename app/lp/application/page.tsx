import HeroSection from '@/components/lp/HeroSection';
import PainSection from '@/components/lp/PainSection';
import SolutionSection from '@/components/lp/SolutionSection';
import FeaturesSection from '@/components/lp/FeaturesSection';
import ProcessSection from '@/components/lp/ProcessSection';
import TrustSection from '@/components/lp/TrustSection';
import CTASection from '@/components/lp/CTASection';
import LPFooter from '@/components/lp/LPFooter';

export default function ApplicationLP() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <FeaturesSection />
      <ProcessSection />
      <TrustSection />
      <CTASection />
      <LPFooter />
    </main>
  );
}
