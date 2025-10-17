import { AlertTriangle, Clock, TrendingUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Problem() {
  const { ref, isInView } = useInView();

  const problems = [
    {
      icon: AlertTriangle,
      title: 'Hidden Contamination',
      description: 'Heavy metals and toxins remain undetected in water, soil, and food, threatening public health and ecosystems.',
      stat: '2 billion',
      statLabel: 'People lack access to safe drinking water',
    },
    {
      icon: Clock,
      title: 'Slow Lab Testing',
      description: 'Traditional testing requires expensive lab equipment, trained personnel, and days or weeks for results.',
      stat: '7-14 days',
      statLabel: 'Average turnaround time for lab results',
    },
    {
      icon: TrendingUp,
      title: 'Growing Crisis',
      description: 'Environmental contamination continues to rise, affecting crop yields, export quality, and community health.',
      stat: '38%',
      statLabel: 'Of agricultural land affected by pollution',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            The Challenge We Face
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Environmental contamination poses a critical threat to health, agriculture, and sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{problem.description}</p>
                <div className="pt-6 border-t border-gray-100">
                  <div className="text-3xl font-bold text-red-600 mb-1">{problem.stat}</div>
                  <div className="text-sm text-gray-500">{problem.statLabel}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
