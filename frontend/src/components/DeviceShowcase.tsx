import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Wifi, Shield } from 'lucide-react';

const slides = [
  {
    src: '/parts/toxisense_new_angle.png',
    title: 'Compact & Field-Ready',
    specs: ['Rugged Design', 'IP54 Rated', 'Lightweight'],
    icon: Shield
  },
  {
    src: '/parts/toxisense_new_side.png',
    title: 'Versatile Connectivity',
    specs: ['USB-C Charging', 'Data Export', 'Secure Ports'],
    icon: Wifi
  },
  {
    src: '/parts/toxisense_new_top.png',
    title: 'Rapid Testing Interface',
    specs: ['Sample Chamber', 'One-Touch Test', 'Status LED'],
    icon: Zap
  }
];

export default function DeviceShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (isOpen) return; // Pause slider when modal is open
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isOpen]);

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-[440px] md:max-w-[560px] w-full relative group">

        {/* Main Card */}
        <div
          onClick={() => setIsOpen(true)}
          className="relative w-full aspect-square bg-transparent rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
        >
          {/* Image */}
          {!imgError ? (
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover transition-opacity duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
              Image not found
            </div>
          )}

          {/* Feature Highlight Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-500/20 rounded-lg backdrop-blur-sm">
                {(() => {
                  const Icon = slides[currentSlide].icon;
                  return <Icon className="w-5 h-5 text-emerald-300" />;
                })()}
              </div>
              <h3 className="text-xl font-bold">{slides[currentSlide].title}</h3>
            </div>
            <div className="flex gap-3 text-sm text-gray-300 pl-11">
              {slides[currentSlide].specs.map((spec, i) => (
                <span key={i} className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-emerald-500' : 'bg-gray-300 hover:bg-emerald-300'
                }`}
            />
          ))}
        </div>

        {/* Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={slides[currentSlide].src}
                alt={slides[currentSlide].title}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center group"
                aria-label="Close"
              >
                <span className="text-gray-700 text-2xl font-bold group-hover:text-emerald-600">×</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
