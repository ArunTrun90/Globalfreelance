import React, { useState } from 'react';
import { X, Calculator, TrendingDown, ShieldCheck, DollarSign, ArrowRight } from 'lucide-react';
import { COUNTRIES_DATA, CountryInfo } from '../data/countriesData';

interface RateCalculatorModalProps {
  initialCountry?: CountryInfo | null;
  onClose: () => void;
  onPostProject?: () => void;
}

export const RateCalculatorModal: React.FC<RateCalculatorModalProps> = ({
  initialCountry,
  onClose,
  onPostProject
}) => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>(initialCountry?.id || 'india');
  const [role, setRole] = useState<string>('Web & Full-Stack Development');
  const [hoursPerMonth, setHoursPerMonth] = useState<number>(160);
  const [hourlyRateOverride, setHourlyRateOverride] = useState<number>(45);

  const country = COUNTRIES_DATA.find((c) => c.id === selectedCountryId) || COUNTRIES_DATA[0];

  // Domestic US benchmark rates for comparison
  const domesticUsRates: Record<string, number> = {
    'Web & Full-Stack Development': 130,
    'UI/UX & Product Design': 115,
    'AI, Machine Learning & Data Engineering': 150,
    'Technical Content & Copywriting': 95,
    'SEO & Performance Marketing': 110,
    'Video Editing & Motion Graphics': 85
  };

  const usDomesticHourly = domesticUsRates[role] || 120;
  const domesticMonthlyTotal = usDomesticHourly * hoursPerMonth;
  const internationalMonthlyTotal = hourlyRateOverride * hoursPerMonth;
  const monthlySavings = domesticMonthlyTotal - internationalMonthlyTotal;
  const savingsPercent = Math.round((monthlySavings / domesticMonthlyTotal) * 100);

  // Approximate FX conversion multipliers for display
  const fxRates: Record<string, number> = {
    INR: 87.2,
    USD: 1.0,
    PHP: 57.5,
    EUR: 0.92,
    GBP: 0.79,
    BRL: 5.4,
    UAH: 41.5,
    NGN: 1520,
    VND: 25400,
    PLN: 3.95,
    MXN: 19.5,
    CAD: 1.37,
    ARS: 1250,
    PKR: 278,
    AUD: 1.52,
    AED: 3.67,
    ZAR: 18.2
  };

  const currentFx = fxRates[country.currencyCode] || 1;
  const localCurrencyTotal = Math.round(internationalMonthlyTotal * currentFx).toLocaleString();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-400" />
            <h2 className="text-base sm:text-lg font-bold font-display">
              Cross-Border Rate & Cost Savings Calculator
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Target Talent Country
              </label>
              <select
                value={selectedCountryId}
                onChange={(e) => {
                  setSelectedCountryId(e.target.value);
                  const selectedC = COUNTRIES_DATA.find((c) => c.id === e.target.value);
                  if (selectedC && selectedC.averageRates[0]) {
                    // Update default hourly rate based on country's average
                    const match = selectedC.averageRates[0].hourlyUsd.match(/\$(\d+)/);
                    if (match && match[1]) setHourlyRateOverride(parseInt(match[1], 10));
                  }
                }}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
              >
                {COUNTRIES_DATA.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.flag} {c.country} ({c.currencyCode})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Role / Specialty
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
              >
                <option value="Web & Full-Stack Development">Web & Full-Stack Development</option>
                <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                <option value="AI, Machine Learning & Data Engineering">AI, Machine Learning & Data</option>
                <option value="Technical Content & Copywriting">Technical Content & Copywriting</option>
                <option value="SEO & Performance Marketing">SEO & Performance Marketing</option>
                <option value="Video Editing & Motion Graphics">Video Editing & Motion Graphics</option>
              </select>
            </div>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-700">Contractor Hourly Rate (USD)</span>
                <span className="font-mono font-bold text-slate-900 text-sm tabular-nums">
                  ${hourlyRateOverride} / hr
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="180"
                step="5"
                value={hourlyRateOverride}
                onChange={(e) => setHourlyRateOverride(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>$10/hr</span>
                <span>$95/hr</span>
                <span>$180/hr</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-700">Monthly Hours</span>
                <span className="font-mono font-bold text-slate-900 text-sm tabular-nums">
                  {hoursPerMonth} hrs ({Math.round(hoursPerMonth / 4)}h/wk)
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="200"
                step="10"
                value={hoursPerMonth}
                onChange={(e) => setHoursPerMonth(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>20h (Sprint)</span>
                <span>80h (Half-time)</span>
                <span>160h (Full-time)</span>
              </div>
            </div>
          </div>

          {/* Results Comparison Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* International Cost */}
            <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl">
              <div className="text-[11px] font-semibold text-blue-800 uppercase tracking-wider">
                {country.country} Contractor Cost
              </div>
              <div className="mt-2 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                ${internationalMonthlyTotal.toLocaleString()}
                <span className="text-xs font-sans font-normal text-slate-500"> / month</span>
              </div>
              <div className="text-xs text-blue-900 mt-1 font-medium">
                ≈ {country.currencySymbol} {localCurrencyTotal} {country.currencyCode}
              </div>
              <div className="mt-3 pt-2 border-t border-blue-200/80 text-[11px] text-blue-800 space-y-0.5">
                <div>Preferred Rail: <span className="font-semibold">{country.popularPaymentMethods[0]}</span></div>
                <div>Tax Document: <span className="font-semibold">Form W-8BEN</span> (0% US withholding)</div>
              </div>
            </div>

            {/* US Domestic Cost & Savings */}
            <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl">
              <div className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider flex items-center justify-between">
                <span>US Domestic Baseline</span>
                <span className="font-mono font-bold text-emerald-700">~{savingsPercent}% Savings</span>
              </div>
              <div className="mt-2 text-2xl font-bold font-mono text-slate-700 line-through decoration-slate-400 tabular-nums">
                ${domesticMonthlyTotal.toLocaleString()}
              </div>
              <div className="text-xs font-semibold text-emerald-700 mt-1 flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                <span>Save ${monthlySavings.toLocaleString()} / month</span>
              </div>
              <div className="mt-3 pt-2 border-t border-emerald-200/80 text-[11px] text-emerald-800">
                Annual budget freed: <span className="font-bold font-mono tabular-nums">${(monthlySavings * 12).toLocaleString()} / year</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md transition-colors"
          >
            Close
          </button>
          {onPostProject && (
            <button
              onClick={() => {
                onClose();
                onPostProject();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
            >
              <span>Post Project with this Budget</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
