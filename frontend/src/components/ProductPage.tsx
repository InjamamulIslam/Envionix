import { useEffect } from 'react';
import { ProductSection } from './ProductSection';
import { Solution } from './Solution';
import { CTA } from './CTA';
import { SEO } from './SEO';

interface ProductPageProps {
  onOpenModal: () => void;
}

export function ProductPage({ onOpenModal }: ProductPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEO
        title="ToxiSense - Portable Heavy Metal Detector | Envionix"
        description="Discover ToxiSense, our flagship portable detection device delivering lab-quality heavy metal analysis on-site in under 5 minutes."
      />
      
      {/* Product Page Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-gray-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('/assets/hero-new.png')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-0"></div>
        
        {/* Floating animated blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            ToxiSense Series 1
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-teal-100">
            Laboratory Precision.
            <br className="hidden md:block" /> Field Mobility.
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            The world's most advanced portable anodic stripping voltammetry device, engineered specifically to detect heavy metals instantly in water, soil, and food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transform hover:-translate-y-1 transition-all duration-300"
            >
              Request a Demo
            </button>
            <a
              href="/ENVIONIX-TOXISENSE-BROCHURE.pdf"
              download="ENVIONIX-TOXISENSE-BROCHURE.pdf"
              className="px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold rounded-lg hover:bg-white/20 backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="-mt-8 relative z-20">
        <Solution />
      </div>
      <ProductSection />
      <CTA onOpenModal={onOpenModal} />
    </div>
  );
}
