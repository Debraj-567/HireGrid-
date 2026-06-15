import { HeroSection } from '@/features/landing/HeroSection';
import { TrustedCompanies } from '@/features/landing/TrustedCompanies';
import { FeaturesSection } from '@/features/landing/FeaturesSection';
import { StatisticsSection } from '@/features/landing/StatisticsSection';
import { TestimonialsSection } from '@/features/landing/TestimonialsSection';
import { CallToAction } from '@/features/landing/CallToAction';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TrustedCompanies />
      <FeaturesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
}
