import React, { useState } from 'react';
import { Code, Palette, PenTool, TrendingUp, Video, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, ServiceDetail } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectCountryCode?: (countryCode: string) => void;
  onExploreTalent?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectCountryCode,
  onExploreTalent
}) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail>(SERVICES_DATA[0]);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Code className="w-5 h-5 text-blue-600" />;
      case 'ui-ux-design':
        return <Palette className="w-5 h-5 text-indigo-600" />;
      case 'content-writing':
        return <PenTool className="w-5 h-5 text-emerald-600" />;
      case 'digital-marketing':
        return <TrendingUp className="w-5 h-5 text-amber-600" />;
      case 'video-editing':
        return <Video className="w-5 h-5 text-rose-600" />;
      case 'ai-data-science':
        return <Cpu className="w-5 h-5 text-purple-600" />;
      default:
        return <Code className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Global Skill Taxonomy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            Freelance Services & Global Benchmark Rates
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Examine key deliverables, global rate ranges, prime sourcing geographies, and essential onboarding checklists for each major service vertical.
          </p>
        </div>

        {/* Layout: Sidebar service selector + detailed view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service list selector */}
          <div className="lg:col-span-4 space-y-2">
            {SERVICES_DATA.map((svc) => {
              const isSelected = selectedService.id === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-white border-slate-900 shadow-sm'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 shrink-0">
                    {getServiceIcon(svc.id)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm font-bold font-display truncate ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                        {svc.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{svc.category}</p>
                    <div className="text-xs font-mono font-medium text-slate-900 mt-1 tabular-nums">
                      {svc.globalRateRange}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Panel */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  <span>{selectedService.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 font-mono">{selectedService.globalRateRange}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  {selectedService.title}
                </h3>
              </div>

              {onExploreTalent && (
                <button
                  onClick={() => onExploreTalent(selectedService.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shrink-0"
                >
                  <span>View Verified Talent</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <p className="mt-4 text-sm text-slate-700 leading-relaxed">
              {selectedService.description}
            </p>

            {/* Top Sourcing Countries */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Prime Sourcing Geographies & Local Rates
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {selectedService.topSourcingCountries.map((src, i) => (
                  <div
                    key={i}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                  >
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <span>{src.flag}</span>
                      <span>{src.country}</span>
                    </div>
                    <div className="font-mono text-slate-600 mt-1 tabular-nums">
                      {src.avgRate}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Deliverables */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Standard Scope & Deliverables
              </h4>
              <ul className="space-y-2">
                {selectedService.popularDeliverables.map((del, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Skillsets */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Core Tech Stacks & Tooling
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedService.keySkillsets.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Checklist */}
            <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                Hiring Client SOW Checklist
              </h4>
              <ul className="space-y-1.5">
                {selectedService.clientChecklist.map((item, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-slate-400 font-bold">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
