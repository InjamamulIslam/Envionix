import { useEffect } from 'react';
import { Cpu, Cloud, Smartphone, Zap, CheckCircle } from 'lucide-react';
import { SEO } from './SEO';
import { CTA } from './CTA';

interface TechnologyPageProps {
  onOpenModal: () => void;
}

export function TechnologyPage({ onOpenModal }: TechnologyPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    {
      title: "Anodic Stripping Voltammetry (ASV)",
      description: "Our core sensing technology uses advanced electrochemical techniques to detect heavy metals at the parts-per-billion (ppb) level without laboratory equipment.",
      icon: Zap,
      features: ["Highly sensitive detection", "Calibration-free sensors", "No reagent preparation required"]
    },
    {
      title: "IoT & Cloud Architecture",
      description: "Every reading is instantly digitized, encrypted, and synced to our secure cloud infrastructure for real-time monitoring and historical analysis.",
      icon: Cloud,
      features: ["GPS-tagged data points", "Over-the-air (OTA) updates", "Secure end-to-end encryption"]
    },
    {
      title: "Edge Computing Electronics",
      description: "The device features a powerful onboard processor capable of running complex peak-analysis algorithms directly in the field.",
      icon: Cpu,
      features: ["Sub-5 minute analysis", "Low power consumption", "Self-diagnostic capabilities"]
    },
    {
      title: "Mobile Integration",
      description: "A seamless Bluetooth and WiFi connection allows you to control the device directly from your smartphone, ensuring an intuitive user experience.",
      icon: Smartphone,
      features: ["Real-time alerts via app", "Easy data export to CSV/PDF", "Custom threshold configurations"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEO
        title="Our Technology - Smart Sensors | Envionix"
        description="Learn about the advanced Anodic Stripping Voltammetry and IoT architecture powering Envionix's portable heavy metal detectors."
      />
      
      {/* Tech Page Hero */}
      <section className="bg-gray-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-gray-900/95 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-md">
            <Cpu className="w-4 h-4" /> Underlying Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Science of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Precision</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            By combining laboratory-grade electrochemistry with modern IoT edge computing, we've miniaturized a multi-million dollar lab into a portable, rugged device.
          </p>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  <ul className="space-y-3">
                    {tech.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-gray-700 font-medium">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA onOpenModal={onOpenModal} />
    </div>
  );
}
