import { useState } from 'react';
import { Zap, Smartphone, Shield, Globe, Leaf, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import DeviceShowcase from '../components/DeviceShowcase';
import { DemoModal } from '../components/DemoModal';

export function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Zap,
      title: 'Real-Time Detection',
      description: 'Get instant results for heavy metal contamination in water, soil, and food samples.',
    },
    {
      icon: Smartphone,
      title: 'Multi-Contaminant Analysis',
      description: 'Detect arsenic, lead, chromium, mercury, cadmium, and other toxic metals simultaneously.',
    },
    {
      icon: Shield,
      title: 'Field-Ready Design',
      description: 'Rugged, portable device built to withstand harsh environmental conditions.',
    },
    {
      icon: Globe,
      title: 'IoT Connectivity',
      description: 'Cloud-based data management with real-time monitoring and analytics.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable design with minimal waste generation and low environmental impact.',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Affordable testing solution designed for resource-limited settings.',
    },
  ];

  const specifications = [
    { label: 'Detection Range', value: 'ppb to ppm levels' },
    { label: 'Response Time', value: '< 5 minutes' },
    { label: 'Battery Life', value: '8+ hours continuous use' },
    { label: 'Operating Temperature', value: '-10°C to 50°C' },
    { label: 'Connectivity', value: 'WiFi, Bluetooth, 4G' },
    { label: 'Display', value: '4.3" LCD touchscreen' },
    { label: 'Weight', value: '1.2 kg' },
    { label: 'Dimensions', value: '25 x 20 x 15 cm' },
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Envionix III
                <span className="block text-3xl md:text-4xl text-emerald-600 mt-2">
                  Portable Toxicity Detector
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Revolutionary field-deployable device for instant detection of heavy metals and contaminants. 
                No lab required, results in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Request Demo
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300">
                  Download Specs
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <DeviceShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets practical field deployment for reliable environmental monitoring
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <p className="text-xl text-gray-600">
                Detailed specifications for the Envionix III portable detector
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile testing solutions for multiple industries and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Water Quality Testing',
                items: ['Drinking water safety', 'Groundwater monitoring', 'Industrial wastewater', 'Agricultural runoff'],
              },
              {
                title: 'Soil Analysis',
                items: ['Agricultural soil testing', 'Mining site monitoring', 'Remediation verification', 'Construction site safety'],
              },
              {
                title: 'Food Safety',
                items: ['Crop contamination', 'Food processing', 'Supply chain verification', 'Export compliance'],
              },
            ].map((application, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{application.title}</h3>
                <ul className="space-y-3">
                  {application.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Testing Process?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about the Envionix III and request a demonstration
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Request Demo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}