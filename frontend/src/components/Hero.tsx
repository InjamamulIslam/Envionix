import { ChevronDown, Leaf } from 'lucide-react';
import { useEffect, useState } from 'react';
import DeviceShowcase from './DeviceShowcase';

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-new.png"
          alt="Clean water and nature background"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure text readability without hiding the beautiful image */}
        {/* Subtle overlay to ensure text readability without hiding the beautiful image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-32 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className={`mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl shadow-emerald-500/10 border border-emerald-500/20">
                <Leaf className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                <span className="text-xs md:text-sm font-bold text-emerald-800 tracking-wide uppercase">Innovating Environmental Intelligence</span>
              </div>
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Instant Toxicity Insights,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 drop-shadow-sm">
                Anywhere
              </span>
            </h1>

            {/* Mobile-Only Device Showcase Image (Interleaved) */}
            <div className="block md:hidden w-full mb-8">
              <DeviceShowcase />
            </div>

            <p className={`text-lg md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Detect heavy metals and contaminants in water, soil, and food on-site with real-time results. No lab required.
            </p>

            <div className={`flex flex-col w-full sm:w-auto sm:flex-row gap-4 mb-10 md:mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button
                onClick={onOpenModal}
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Request Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg shadow-md hover:shadow-lg border-2 border-emerald-200 hover:border-emerald-300 transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </button>
            </div>

            <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'} hidden sm:block`}>
              <div className="inline-flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>Real-Time Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>Multi-Contaminant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  <span>Field-Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Desktop Device Showcase (Hidden on Mobile) */}
          <div className="hidden md:flex items-center justify-center mt-4 md:mt-0">
            <DeviceShowcase />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-emerald-600" />
      </div>
    </section>
  );
}
