import { Smartphone, Leaf, DollarSign, Globe, Shield, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Features() {
  const { ref, isInView } = useInView();

  const features = [
    {
      icon: Zap,
      title: 'Real-Time Results',
      description: 'Get instant detection results on-site without waiting for lab processing.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Smartphone,
      title: 'Multi-Contaminant Detection',
      description: 'Detect arsenic, lead, chromium, mercury, and other heavy metals in a single test.',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Affordable testing solution designed for resource-limited and rural settings.',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      icon: Globe,
      title: 'IoT-Enabled',
      description: 'Cloud connectivity for data tracking, analytics, and remote monitoring.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: Leaf,
      title: 'Sustainable Design',
      description: 'Eco-friendly with minimal waste generation and low environmental impact.',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Portable & Rugged',
      description: 'Field-deployable device built to withstand harsh environmental conditions.',
      gradient: 'from-red-400 to-orange-500',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Powerful Capabilities
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Advanced technology meets practical field deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
