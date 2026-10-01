import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck, DollarSign, Building, Globe2, FileText, CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { CountryInfo } from '../data/countriesData';

interface CountryDetailModalProps {
  country: CountryInfo | null;
  onClose: () => void;
  onOpenCalculatorForCountry?: (country: CountryInfo) => void;
  onCompareWith?: (country: CountryInfo) => void;
  isFavorited?: boolean;
  onToggleFavorite?: () => void;
}

export const CountryDetailModal: React.FC<CountryDetailModalProps> = ({
  country,
  onClose,
  onOpenCalculatorForCountry,
  onCompareWith,
  isFavorited = false,
  onToggleFavorite
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'taxes' | 'rates' | 'payments' | 'tips'>('overview');

  if (!country) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-3xl leading-none" role="img" aria-label={country.country}>{country.flag}</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold font-display">{country.country}</h2>
                <span className="text-xs text-slate-300 font-mono">[{country.code}]</span>
                <span className="text-xs text-slate-400">· {country.region}</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Currency: <span className="font-semibold text-white">{country.currency}</span> ({country.currencySymbol}) · Timezone: {country.timezone}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {onToggleFavorite && (
              <button
                onClick={onToggleFavorite}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title={isFavorited ? 'Remove from favorites' : 'Save to favorites'}
              >
                <Heart
                  className={`w-3.5 h-3.5 transition-colors ${
                    isFavorited ? 'fill-rose-500 text-rose-500' : 'text-slate-300'
                  }`}
                />
                <span>{isFavorited ? 'Saved' : 'Save'}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center gap-1 px-6 border-b border-slate-200 bg-slate-50/80 overflow-x-auto shrink-0 py-2">
          {[
            { id: 'overview', label: 'Country Profile' },
            { id: 'taxes', label: 'Taxes & Legal' },
            { id: 'rates', label: 'Average Rates' },
            { id: 'payments', label: 'Payment Rails' },
            { id: 'tips', label: 'Tips for Foreigners' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-emerald-50 text-emerald-900 shadow-xs border border-emerald-200 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Executive Summary */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Executive Summary</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{country.summary}</p>
              </div>

              {/* Template Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase mb-2">
                    <Globe2 className="w-4 h-4 text-slate-600" />
                    <span>Popular Freelance Services</span>
                  </div>
                  <ul className="space-y-1.5">
                    {country.popularServices.map((svc, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="text-slate-400">·</span>
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase mb-2">
                    <Building className="w-4 h-4 text-slate-600" />
                    <span>Typical Clients</span>
                  </div>
                  <ul className="space-y-1.5">
                    {country.typicalClients.map((client, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="text-slate-400">·</span>
                        <span>{client}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Popular Skills & Languages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Top Technical Skills</div>
                  <div className="flex flex-wrap gap-1.5">
                    {country.popularSkills.map((sk, idx) => (
                      <span key={idx} className="text-xs text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Major Languages & English Proficiency</div>
                  <div className="text-xs text-slate-800 font-medium mb-1">
                    English Level: <span className="font-semibold text-blue-700">{country.englishProficiency}</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    Spoken: {country.majorLanguages.join(', ')}
                  </div>
                </div>
              </div>

              {/* Business environment & Internet */}
              <div className="space-y-4">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Business Environment</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">{country.businessEnvironment}</p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Internet & Digital Infrastructure</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">{country.internetEconomy}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'taxes' && (
            <div className="space-y-6">
              <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase mb-1">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  <span>Freelancer Taxes Overview</span>
                </div>
                <p className="text-xs text-blue-950 leading-relaxed">{country.freelancerTaxes}</p>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Tax Registration & Filing Details</h4>
                <p className="text-xs text-slate-700 leading-relaxed">{country.taxRegistrationDetail}</p>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Legal Considerations & Contracts</h4>
                <p className="text-xs text-slate-700 leading-relaxed">{country.legalConsiderations}</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-2">
                <div className="font-semibold text-slate-800">Compliance Checklist for Foreign Employers:</div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Obtain completed Form W-8BEN (for US entities) or European VAT reverse-charge verification.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Include explicit intellectual property assignment upon milestone payment.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ensure Statement of Work avoids language denoting managerial control or employee benefits.</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rates' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Average Rates by Freelance Service</h3>
                  <p className="text-xs text-slate-500">Benchmark rates in USD for senior and experienced independent contractors</p>
                </div>
                {onOpenCalculatorForCountry && (
                  <button
                    onClick={() => {
                      onOpenCalculatorForCountry(country);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Calculate Project Cost</span>
                  </button>
                )}
              </div>

              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-600 font-semibold">
                      <th className="py-2.5 px-4">Service Domain</th>
                      <th className="py-2.5 px-4">Typical Hourly Range (USD)</th>
                      <th className="py-2.5 px-4">Typical Project Scope (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {country.averageRates.map((rate, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 font-medium text-slate-900">{rate.service}</td>
                        <td className="py-3 px-4 font-mono font-semibold text-slate-700 tabular-nums">{rate.hourlyUsd}</td>
                        <td className="py-3 px-4 font-mono text-slate-600 tabular-nums">{rate.projectAvgUsd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-md text-xs text-amber-900">
                <span className="font-semibold">Note on Currency Conversion:</span> While client billing is typically quoted in USD or EUR, contractor take-home is converted to {country.currency} ({country.currencySymbol}) via international fintech rails.
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-6">
              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">Popular Cross-Border Payment Methods</h4>
                <ul className="space-y-2">
                  {country.popularPaymentMethods.map((method, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">Recommended Platforms for Hiring in {country.country}</h4>
                <div className="flex flex-wrap gap-2">
                  {country.usefulPlatforms.map((plat, idx) => (
                    <span key={idx} className="text-xs text-slate-800 bg-slate-100 px-3 py-1 rounded-md border border-slate-200 font-medium">
                      {plat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Strategic Advice for Foreign Hiring Clients & Businesses
                </h4>
                <ul className="space-y-3">
                  {country.tipsForForeigners.map((tip, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2.5 leading-relaxed">
                      <span className="font-bold text-slate-900 mt-0.5">{idx + 1}.</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {onCompareWith && (
              <button
                onClick={() => {
                  onCompareWith(country);
                  onClose();
                }}
                className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md transition-colors"
              >
                Compare with Another Country
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors shadow-xs"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
