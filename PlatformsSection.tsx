import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { PLATFORMS_DATA } from '../data/platformsData';

export const PlatformsSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Marketplace & Network Landscape
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            Freelancing Platforms & Professional Networks
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Compare commission take rates, client fees, technical screening standards, and regional dominance across the primary global and regional platforms.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORMS_DATA.map((platform) => (
            <div
              key={platform.id}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">
                      {platform.scope}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                      {platform.name}
                    </h3>
                  </div>
                  <Layers className="w-5 h-5 text-slate-400 shrink-0" />
                </div>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {platform.bestFor}
                </p>

                {/* Rates & Vetting */}
                <div className="mt-4 p-3 bg-slate-50 border border-slate-200/80 rounded-lg space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Freelancer Cut:</span>
                    <span className="font-semibold text-slate-900">{platform.takeRateFee}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Client Fee:</span>
                    <span className="text-slate-700">{platform.clientFee}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Vetting Rigor:</span>
                    <span className="font-medium text-blue-800">{platform.vettedTier}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mt-4">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Platform Capabilities
                  </div>
                  <ul className="space-y-1.5">
                    {platform.keyFeatures.map((feat, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Supported Payout Rails */}
              <div className="mt-5 pt-3 border-t border-slate-100">
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Supported Payout Rails
                </div>
                <div className="text-xs text-slate-600">
                  {platform.payoutMethods.join(' · ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
