import React, { useState } from 'react';
import { CreditCard, CheckCircle2, Clock, Globe, ArrowRight, XCircle } from 'lucide-react';
import { PAYMENT_METHODS_DATA, PaymentMethodDetail } from '../data/paymentMethodsData';

export const PaymentsSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');

  const types = ['All', 'Fintech Rail', 'Merchant Gateway', 'Traditional Banking', 'Digital Asset'];

  const filteredMethods = PAYMENT_METHODS_DATA.filter(
    (m) => selectedType === 'All' || m.type === selectedType
  );

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Global Settlement Rails
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            Cross-Border Payment Methods & FX Margins
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Eliminate hidden 3-5% retail bank foreign exchange markups and settlement delays by selecting the optimal payment rail for each country.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto mb-8 max-w-fit">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedType === t
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Payment Rails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Method Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">
                      {method.type}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 font-display mt-0.5">
                      {method.name}
                    </h3>
                  </div>
                  <CreditCard className="w-5 h-5 text-slate-400 shrink-0" />
                </div>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {method.bestFor}
                </p>

                {/* Key Metrics */}
                <div className="mt-4 p-3 bg-slate-50 border border-slate-200/80 rounded-lg space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Typical Fee:</span>
                    <span className="font-mono font-medium text-slate-900 text-right max-w-[65%]">
                      {method.typicalFees}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Settlement Speed:</span>
                    <span className="font-medium text-slate-800">{method.transferSpeed}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">FX Markup:</span>
                    <span className="font-medium text-emerald-700">{method.foreignExchangeMargin}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Coverage:</span>
                    <span className="text-slate-700">{method.coverageCountries}</span>
                  </div>
                </div>

                {/* Compliance Document */}
                <div className="mt-3 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Audit Documentation: </span>
                  {method.complianceDoc}
                </div>

                {/* Pros and Cons */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                  <div className="space-y-1">
                    {method.pros.slice(0, 2).map((pro, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{pro}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {method.cons.slice(0, 1).map((con, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-slate-500">
                        <XCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Currencies supported pills */}
              <div className="mt-5 pt-3 border-t border-slate-100">
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  Supported Currencies
                </div>
                <div className="flex flex-wrap gap-1">
                  {method.supportedCurrencies.map((curr, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded"
                    >
                      {curr}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
