import { HeroSection } from '../components/HeroSection';
import { BackgroundSection } from '../components/BackgroundSection';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { AgentSection } from '../components/AgentSection';
import { ScenariosSection } from '../components/ScenariosSection';
import { PracticesSection } from '../components/PracticesSection';
import { TrustSection } from '../components/TrustSection';
import { ExploreSection } from '../components/ExploreSection';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <BackgroundSection />
      <CapabilitiesSection />
      <AgentSection />
      <ScenariosSection />
      <PracticesSection />
      <TrustSection />
      <ExploreSection />
      <Footer />
    </>
  );
}