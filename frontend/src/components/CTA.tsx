import { ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface CTAProps {
  onOpenModal: () => void;
}

export function CTA({ onOpenModal }: CTAProps) {
  const { ref, isInView } = useInView();

  const benefits = [
    'Rapid deployment and training',
    'Flexible pilot program options',
    'Technical support and consultation',
    'Custom testing solutions',
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-emerald-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-teal-100/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16">
                <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Ready to Transform Your Testing?
                </h2>
                <p className={`text-xl text-emerald-50 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Join forward-thinking organizations using TOXISENSE to protect health and environment.
                </p>
                <div className={`space-y-4 mb-10 transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-200 flex-shrink-0" />
                      <span className="text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <button
                    onClick={onOpenModal}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Request Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={onOpenModal}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-700/50 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300"
                  >
                    Get Early Access
                  </button>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-emerald-700 to-teal-700 p-12 lg:p-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTRjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yem0wIDAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                <div className={`relative text-center transition-all duration-1000 delay-800 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="text-7xl font-bold text-white mb-4">100+</div>
                  <p className="text-emerald-100 text-xl mb-8">Organizations Ready to Deploy</p>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-semibold">Limited Pilot Slots Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
