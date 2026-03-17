import { Header } from './components/header';
import { WhatsAppLink } from './components/whatsapp-link';
import { FAQSection } from './sections/faq-section';
import { AboutMeSection } from './sections/about-me-section';
import { HeroSection } from './sections/hero-section';
import { IdentificationSection } from './sections/identification-section';
import { InktensitySection } from './sections/inktensity-section';
import { OfferSection } from './sections/offer-section';

export function App() {
  return (
    <div className="bg-background">
      <WhatsAppLink />

      <Header />

      <main className="mx-auto flex max-w-350 flex-col gap-8 pb-8">
        <HeroSection />
        <IdentificationSection />
        <InktensitySection />
        <OfferSection />
        <FAQSection />
        <AboutMeSection />
      </main>
    </div>
  );
}
