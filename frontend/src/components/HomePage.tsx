import { Hero } from './Hero';
import { Problem } from './Problem';
import { Solution } from './Solution';
import { Features } from './Features';
import { UseCases } from './UseCases';
import { Impact } from './Impact';
import { ProductSection } from './ProductSection';
import { ContactSection } from './ContactSection';
import { CTA } from './CTA';

interface HomePageProps {
  onOpenModal: () => void;
}

export function HomePage({ onOpenModal }: HomePageProps) {
  return (
    <>
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