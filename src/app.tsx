import { Header } from './components/header';
import { WhatsAppLink } from './components/whatsapp-link';
import { FAQSection } from './sections/faq-section';
import { AboutMeSection } from './sections/about-me-section';
import { HeroSection } from './sections/hero-section';
import { IdentificationSection } from './sections/identification-section';
import { InktensitySection } from './sections/inktensity-section';
import { OfferSection } from './sections/offer-section';
import { TestimonialsSection } from './sections/testimonials-section';
import { Footer } from './components/footer';

export function App() {
  return (
    <div className="bg-background">
      <WhatsAppLink />

      <Header />

      <main className="mx-auto flex max-w-350 flex-col gap-8">
        <HeroSection />
        <IdentificationSection />
        <InktensitySection />
        <OfferSection />
        <AboutMeSection />
        <TestimonialsSection />
        <FAQSection />

        <div className="bg-primary/40 my-8 h-[0.6px] w-full mask-x-from-90%" />
      </main>

      <Footer />
    </div>
  );
}
