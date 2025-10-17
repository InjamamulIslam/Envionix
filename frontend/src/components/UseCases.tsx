import { Building2, Sprout, Users, FlaskConical } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function UseCases() {
  const { ref, isInView } = useInView();

  const cases = [
    {
      icon: Building2,
      title: 'Industry & Export',
      description: 'Quality control for food processing, water treatment facilities, and export compliance testing.',
      applications: ['Food safety testing', 'Water quality monitoring', 'Export certification'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: FlaskConical,
      title: 'Regulatory Bodies',
      description: 'Field testing for environmental agencies, health departments, and compliance monitoring.',
      applications: ['Environmental monitoring', 'Compliance verification', 'Rapid screening'],
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50',
    },
    {
      icon: Sprout,
      title: 'Agriculture',
      description: 'Soil and water testing for farmers, cooperatives, and agricultural organizations.',
      applications: ['Soil contamination', 'Irrigation water safety', 'Crop health monitoring'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
    },
    {
      icon: Users,
      title: 'Communities & NGOs',
      description: 'Empowering rural communities and NGOs with accessible environmental testing.',
      applications: ['Drinking water safety', 'Community health', 'Environmental advocacy'],
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-50 to-cyan-50',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Who We Serve
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Tailored solutions for diverse environmental testing needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${useCase.bgColor} rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Applications</div>
                  {useCase.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${useCase.color}`}></div>
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
