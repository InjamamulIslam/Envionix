import { useState } from 'react';
import { Zap, Shield, Globe, Leaf, CheckCircle, Download, Play, BarChart3, Settings, Wifi, Battery } from 'lucide-react';
import DeviceShowcase from './DeviceShowcase';
import { DemoModal } from './DemoModal';

export function ProductSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const keySpecs = [
    { icon: Zap, label: 'Detection Time', value: '< 5 minutes', color: 'text-yellow-600' },
    { icon: BarChart3, label: 'Accuracy', value: 'ppb levels', color: 'text-blue-600' },
    { icon: Battery, label: 'Battery Life', value: '8+ hours', color: 'text-green-600' },
    { icon: Wifi, label: 'Connectivity', value: 'WiFi, 4G, BT', color: 'text-purple-600' },
  ];

  const technicalSpecs = [
    {
      category: 'Performance', specs: [
        { label: 'Detection Range', value: 'ppb to ppm levels' },
        { label: 'Response Time', value: '< 5 minutes' },
        { label: 'Accuracy', value: '±5% at detection limit' },
        { label: 'Repeatability', value: 'CV < 10%' },
      ]
    },
    {
      category: 'Hardware', specs: [
        { label: 'Display', value: '4.3" LCD touchscreen' },
        { label: 'Storage', value: '32GB internal + SD card' },
        { label: 'Weight', value: '1.2 kg' },
        { label: 'Dimensions', value: '25 x 20 x 15 cm' },
      ]
    },
    {
      category: 'Environmental', specs: [
        { label: 'Operating Temperature', value: '-10°C to 50°C' },
        { label: 'Humidity', value: '10-90% RH' },
        { label: 'IP Rating', value: 'IP65 (dust/water resistant)' },
        { label: 'Certifications', value: 'CE, FCC, ISO 9001' },
      ]
    },
    {
      category: 'Connectivity', specs: [
        { label: 'WiFi', value: '802.11 b/g/n/ac' },
        { label: 'Cellular', value: '4G LTE Cat-1' },
        { label: 'Bluetooth', value: 'v5.0' },
        { label: 'GPS', value: 'Built-in GNSS' },
      ]
    },
  ];

  const contaminants = [
    'Arsenic (As)', 'Lead (Pb)', 'Mercury (Hg)', 'Chromium (Cr)',
    'Cadmium (Cd)', 'Copper (Cu)', 'Zinc (Zn)', 'Nickel (Ni)',
    'Iron (Fe)', 'Manganese (Mn)', 'Aluminum (Al)', 'Selenium (Se)'
  ];

  return (
    <section id="product" className="py-20 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Product Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full text-emerald-700 font-medium mb-6">
            <Settings className="w-4 h-4" />
            Technical Specifications
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Envionix Product Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical information and specifications for our flagship portable detection device
          </p>
        </div>

        {/* Key Specifications Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {keySpecs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6 text-center hover:shadow-md transition-shadow">
                <Icon className={`w-8 h-8 ${spec.color} mx-auto mb-3`} />
                <p className="text-xs md:text-sm text-gray-600 mb-1">{spec.label}</p>
                <p className="text-lg md:text-xl font-bold text-gray-900">{spec.value}</p>
              </div>
            );
          })}
        </div>

        {/* Product Overview with Device */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Device Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="max-w-[300px] w-full">
              <DeviceShowcase />
              <div className="mt-12 flex gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Demo
                </button>
                <button className="flex-1 bg-white border-2 border-emerald-100 text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:border-emerald-200 hover:bg-emerald-50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Datasheet
                </button>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Advanced Multi-Contaminant Detection
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Detectable Contaminants</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {contaminants.map((contaminant, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {contaminant}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Capabilities</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Simultaneous detection of multiple heavy metals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Real-time data logging with GPS coordinates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cloud connectivity for remote monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Calibration-free operation with self-diagnostics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Complete Technical Specifications</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technicalSpecs.map((section, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900">{section.category}</h4>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {section.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex justify-between items-start">
                        <span className="text-gray-600 text-sm">{spec.label}</span>
                        <span className="text-gray-900 font-medium text-sm text-right ml-4">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry Applications</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Environmental Monitoring',
                icon: Globe,
                applications: [
                  'Groundwater assessment',
                  'Surface water monitoring',
                  'Soil contamination surveys',
                  'Mining site evaluation',
                  'Remediation verification'
                ]
              },
              {
                title: 'Food & Agriculture',
                icon: Leaf,
                applications: [
                  'Crop safety testing',
                  'Irrigation water quality',
                  'Food processing QC',
                  'Supply chain verification',
                  'Export compliance testing'
                ]
              },
              {
                title: 'Industrial & Municipal',
                icon: Shield,
                applications: [
                  'Drinking water testing',
                  'Wastewater monitoring',
                  'Industrial discharge',
                  'Construction site safety',
                  'Regulatory compliance'
                ]
              }
            ].map((application, index) => {
              const Icon = application.icon;
              return (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{application.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {application.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get detailed specifications, pricing information, or schedule a demonstration of the Envionix
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Request Demo
            </button>
            {/* <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Download Full Specifications
            </button> */}
          </div>
        </div>
      </div>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}