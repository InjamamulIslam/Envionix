import { useState } from 'react';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { Solution } from '../components/Solution';
import { Features } from '../components/Features';
import { UseCases } from '../components/UseCases';
import { Impact } from '../components/Impact';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { StickyBar } from '../components/StickyBar';
import { DemoModal } from '../components/DemoModal';

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Problem />
      <Solution />
      <Features />
      <UseCases />
      <Impact />
      <CTA onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      <StickyBar show={false} onOpenModal={() => setIsModalOpen(true)} onClose={() => {}} />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}