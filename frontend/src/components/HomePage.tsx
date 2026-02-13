import { Hero } from './Hero';
import { Problem } from './Problem';
import { Solution } from './Solution';
import { Features } from './Features';
import { UseCases } from './UseCases';
import { Impact } from './Impact';
import { ProductSection } from './ProductSection';
import { ContactSection } from './ContactSection';
import { CTA } from './CTA';
import { SEO } from './SEO';

interface HomePageProps {
  onOpenModal: () => void;
}

export function HomePage({ onOpenModal }: HomePageProps) {
  return (
    <>
      <SEO
        description="Empowering farmers with real-time environmental testing. Instant soil and water analysis for precision agriculture, crop safety, and sustainable farming."
        keywords="Smart Farming, Precision Agriculture, Soil Testing, Water Quality for Farming, Crop Safety, Agricultural IoT, Digital Farming"
      />
      <div id="home">
        <Hero onOpenModal={onOpenModal} />
      </div>
      <Solution />
      <Problem />

      <Features />
      <UseCases />
      <Impact />
      <ProductSection />
      <ContactSection />
      <CTA onOpenModal={onOpenModal} />
    </>
  );
}