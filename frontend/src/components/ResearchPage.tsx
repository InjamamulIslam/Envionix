import { useEffect } from 'react';
import { Microscope, CheckCircle, BarChart, Beaker } from 'lucide-react';
import { SEO } from './SEO';
import { CTA } from './CTA';

interface ResearchPageProps {
  onOpenModal: () => void;
}

export function ResearchPage({ onOpenModal }: ResearchPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const studies = [
    {
      title: "Groundwater Arsenic Mapping",
      location: "Active Field Trial",
      description: "Over 500 samples tested on-site with 98% correlation to traditional ICP-MS lab results, saving 4 weeks of processing time.",
      metric: "98%",
      metricLabel: "Lab Correlation"
    },
    {
      title: "Agricultural Runoff Analysis",
      location: "Partnered Ag-Tech Farm",
      description: "Continuous monitoring of Cadmium and Lead levels in irrigation waters. Early detection prevented widespread soil contamination.",
      metric: "<5 min",
      metricLabel: "Time to Result"
    },
    {
      title: "Industrial Effluent Testing",
      location: "Manufacturing Zone",
      description: "Deployed to monitor compliance at discharge points, proving ToxiSense can operate in highly complex sample matrices.",
      metric: "1 ppb",
      metricLabel: "Detection Limit"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEO
        title="Research & Validation | Envionix"
        description="Explore the scientific validation, field trials, and accuracy benchmarks of Envionix's portable heavy metal detection technology."
      />
      
      {/* Research Hero */}
      <section className="bg-emerald-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 filter grayscale blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/80 to-transparent z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-800/50 border border-emerald-400/30 text-emerald-200 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-md">
            <Microscope className="w-4 h-4" /> Scientifically Validated
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Laboratory Performance.<br/>Verified in the <span className="text-teal-400">Field</span>.
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto leading-relaxed">
            Our technology isn't just theory. Envionix has been rigorously tested against industry gold-standards to ensure every reading is accurate, repeatable, and fully actionable.
          </p>
        </div>
      </section>

      {/* Accuracy Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Uncompromising Accuracy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ToxiSense provides results equivalent to traditional Inductively Coupled Plasma Mass Spectrometry (ICP-MS), but at a fraction of the time and cost.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <BarChart className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Accuracy</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <Beaker className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Targets</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">+/- 5%</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Margin of Error</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <Microscope className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">EPA</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Standard Aligned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Field Validation Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {studies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 flex flex-col h-full border border-gray-100">
                <div className="text-sm font-semibold text-emerald-600 mb-2 uppercase tracking-wide">{study.location}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{study.description}</p>
                <div className="pt-6 border-t border-gray-100">
                  <div className="text-4xl font-black text-emerald-500 mb-1">{study.metric}</div>
                  <div className="text-sm text-gray-500 font-medium">{study.metricLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA onOpenModal={onOpenModal} />
    </div>
  );
}
