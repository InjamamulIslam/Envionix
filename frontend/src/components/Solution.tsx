import { Droplet, Zap, Database, Wifi } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Solution() {
  const { ref, isInView } = useInView();

  const steps = [
    { icon: Droplet, label: 'Sample Collection', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, label: 'Instant Detection', color: 'from-emerald-500 to-teal-500' },
    { icon: Database, label: 'Real-Time Results', color: 'from-teal-500 to-green-500' },
    { icon: Wifi, label: 'Cloud Data Sync', color: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Introducing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              TOXISENSE
            </span>
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            A portable IoT POCT device revolutionizing environmental testing with instant, on-site contaminant detection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-16">
          <div className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 rounded-3xl p-12 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 rounded-3xl"></div>
              <div className="relative">
                <div className="bg-gray-900 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-8 bg-gray-800 rounded-t-lg mb-4 flex items-center px-3 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-emerald-500/30">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-emerald-400 text-sm font-mono">TOXISENSE</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Arsenic (As)</span>
                        <span className="text-red-400 font-mono">12.4 ppb</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Lead (Pb)</span>
                        <span className="text-yellow-400 font-mono">8.7 ppb</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Chromium (Cr)</span>
                        <span className="text-green-400 font-mono">2.1 ppb</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                    <Wifi className="w-4 h-4" />
                    <span>Syncing to cloud...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h3>
              <div className="space-y-6">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-gray-400">STEP {index + 1}</span>
                          {index < steps.length - 1 && (
                            <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">{step.label}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-4 gap-6 max-w-7xl mx-auto transition-all duration-1000 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: '<5 min', label: 'Testing Time' },
            { value: '10+', label: 'Contaminants Detected' },
            { value: 'ppb', label: 'Detection Sensitivity' },
            { value: '100%', label: 'Field-Ready' },
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 text-center border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
