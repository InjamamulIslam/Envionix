import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

export function Impact() {
  const { ref, isInView } = useInView();

  const stats = [
    { value: 2000000000, suffix: '+', label: 'People at Risk from Contaminated Water', prefix: '' },
    { value: 38, suffix: '%', label: 'Agricultural Land Affected by Pollution', prefix: '' },
    { value: 500000, suffix: '+', label: 'Deaths Annually from Unsafe Water', prefix: '' },
    { value: 95, suffix: '%', label: 'Faster Results than Traditional Labs', prefix: '' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            The Impact We're Making
          </h2>
          <p className={`text-xl text-emerald-100 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Transforming environmental testing to protect communities and ecosystems worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              {...stat}
              delay={index * 100}
              isInView={isInView}
            />
          ))}
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-800 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Detect</div>
                <p className="text-emerald-100 text-sm">Identify contaminants rapidly and accurately in the field</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Protect</div>
                <p className="text-emerald-100 text-sm">Safeguard public health and environmental ecosystems</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Sustain</div>
                <p className="text-emerald-100 text-sm">Enable sustainable practices and informed decision-making</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  prefix: string;
  delay: number;
  isInView: boolean;
}

function StatCounter({ value, suffix, label, prefix, delay, isInView }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <div
      className={`text-center transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl font-bold text-white mb-3">
        {prefix}{formatNumber(count)}{suffix}
      </div>
      <div className="text-emerald-100 leading-relaxed">{label}</div>
    </div>
  );
}
