import React, { useState } from 'react';
import { X, ArrowRightLeft } from 'lucide-react';
import { CountryInfo, COUNTRIES_DATA } from '../data/countriesData';

interface CountryCompareModalProps {
  initialCountryA?: CountryInfo | null;
  onClose: () => void;
}

export const CountryCompareModal: React.FC<CountryCompareModalProps> = ({
  initialCountryA,
  onClose
}) => {
  const [countryAId, setCountryAId] = useState<string>(initialCountryA?.id || 'india');
  const [countryBId, setCountryBId] = useState<string>(
    initialCountryA?.id === 'philippines' ? 'india' : 'philippines'
  );

  const countryA = COUNTRIES_DATA.find((c) => c.id === countryAId) || COUNTRIES_DATA[0];
  const countryB = COUNTRIES_DATA.find((c) => c.id === countryBId) || COUNTRIES_DATA[2];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white w-full max-w-5xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-bold font-display">Cross-Country Freelance Comparison</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selection Bar */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 grid grid-cols-2 gap-4 shrink-0">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Country 1</label>
            <select
              value={countryAId}
              onChange={(e) => setCountryAId(e.target.value)}
              className="w-full text-xs font-medium p-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
            >
              {COUNTRIES_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.flag} {c.country} ({c.currencyCode})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Country 2</label>
            <select
              value={countryBId}
              onChange={(e) => setCountryBId(e.target.value)}
              className="w-full text-xs font-medium p-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
            >
              {COUNTRIES_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.flag} {c.country} ({c.currencyCode})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Country A Header */}
            <div className="text-center pb-3 border-b border-slate-200">
              <span className="text-4xl">{countryA.flag}</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">{countryA.country}</h3>
              <p className="text-xs text-slate-500">{countryA.currency} · {countryA.timezone}</p>
            </div>
            {/* Country B Header */}
            <div className="text-center pb-3 border-b border-slate-200">
              <span className="text-4xl">{countryB.flag}</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">{countryB.country}</h3>
              <p className="text-xs text-slate-500">{countryB.currency} · {countryB.timezone}</p>
            </div>
          </div>

          {/* Section: English Proficiency & Timezone */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Communication & Timezone</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                <div className="font-semibold text-slate-900">English: {countryA.englishProficiency}</div>
                <div className="text-slate-600 mt-1">Timezone: {countryA.timezone}</div>
                <div className="text-slate-600 mt-1">Languages: {countryA.majorLanguages.join(', ')}</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                <div className="font-semibold text-slate-900">English: {countryB.englishProficiency}</div>
                <div className="text-slate-600 mt-1">Timezone: {countryB.timezone}</div>
                <div className="text-slate-600 mt-1">Languages: {countryB.majorLanguages.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* Section: Software Development Rates */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Web & Software Dev Rate Comparison</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-slate-200 rounded-lg text-xs">
                <div className="text-base font-bold font-mono text-slate-900">
                  {countryA.averageRates[0]?.hourlyUsd || 'Varies'}
                </div>
                <div className="text-slate-500 mt-1">Project avg: {countryA.averageRates[0]?.projectAvgUsd || 'Varies'}</div>
              </div>
              <div className="p-3 border border-slate-200 rounded-lg text-xs">
                <div className="text-base font-bold font-mono text-slate-900">
                  {countryB.averageRates[0]?.hourlyUsd || 'Varies'}
                </div>
                <div className="text-slate-500 mt-1">Project avg: {countryB.averageRates[0]?.projectAvgUsd || 'Varies'}</div>
              </div>
            </div>
          </div>

          {/* Section: UI/UX Design Rates */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">UI/UX Design Rate Comparison</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-slate-200 rounded-lg text-xs">
                <div className="text-base font-bold font-mono text-slate-900">
                  {countryA.averageRates[1]?.hourlyUsd || 'Varies'}
                </div>
                <div className="text-slate-500 mt-1">Project avg: {countryA.averageRates[1]?.projectAvgUsd || 'Varies'}</div>
              </div>
              <div className="p-3 border border-slate-200 rounded-lg text-xs">
                <div className="text-base font-bold font-mono text-slate-900">
                  {countryB.averageRates[1]?.hourlyUsd || 'Varies'}
                </div>
                <div className="text-slate-500 mt-1">Project avg: {countryB.averageRates[1]?.projectAvgUsd || 'Varies'}</div>
              </div>
            </div>
          </div>

          {/* Section: Freelancer Taxes */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Tax & Regulatory Framework</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                {countryA.freelancerTaxes}
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                {countryB.freelancerTaxes}
              </div>
            </div>
          </div>

          {/* Section: Payment Rails */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Primary Payment Rails</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-slate-200 rounded-lg text-xs space-y-1">
                {countryA.popularPaymentMethods.map((m, idx) => (
                  <div key={idx} className="text-slate-700">· {m}</div>
                ))}
              </div>
              <div className="p-3 border border-slate-200 rounded-lg text-xs space-y-1">
                {countryB.popularPaymentMethods.map((m, idx) => (
                  <div key={idx} className="text-slate-700">· {m}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
