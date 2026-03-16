import { Header } from './components/header';
import { WhatsAppButton } from './components/whatsapp-bottom';
// import { AboutMeSection } from './sections/about-me-section';
import { HeroSection } from './sections/hero-section';
// import { IdentificationSection } from './sections/identification-section';

export function App() {
  return (
    <div className="bg-background">
      <WhatsAppButton />

      <Header />

      <main className="mx-auto flex max-w-350 flex-col gap-8 pb-8">
        {/* <HeroSection /> */}
        {/* <IdentificationSection /> */}
        {/* <AboutMeSection /> */}
      </main>
    </div>
  );
}
