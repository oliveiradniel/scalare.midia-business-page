import { createFileRoute } from '@tanstack/react-router';

import { Footer } from '#/components/footer';
import { Header } from '#/components/header';
import { useRevealObserver } from '#/components/reveal';
import { About } from '#/components/sections/about';
import { Faq } from '#/components/sections/faq';
import { FinalCta } from '#/components/sections/final-cta';
import { Hero, HERO_IMAGE_SIZES } from '#/components/sections/hero';
import { Identification } from '#/components/sections/identification';
import { Method } from '#/components/sections/method';
import { Modules } from '#/components/sections/modules';
import { Offer } from '#/components/sections/offer';
import { Testimonials } from '#/components/sections/testimonials';
import { Marquee } from '#/components/ui';
import { WhatsAppFloat } from '#/components/whatsapp-float';
import { imagePreload } from '#/lib/images';
import { pageHead, pageJsonLd } from '#/lib/seo';

export const Route = createFileRoute('/')({
  head: () => {
    const { meta, links } = pageHead();
    return {
      meta,
      links: [...links, imagePreload('hero-tatuador-scalare', HERO_IMAGE_SIZES)],
      scripts: [
        { type: 'application/ld+json', children: JSON.stringify(pageJsonLd()) },
      ],
    };
  },
  component: Home,
});

function Home() {
  useRevealObserver();

  return (
    <>
      <WhatsAppFloat />
      <Header />

      <main id="conteudo" className="overflow-x-clip">
        <Hero />
        <Marquee />
        <Identification />
        <Method />
        <Modules />
        <Offer />
        <About />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
