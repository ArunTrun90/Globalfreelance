import React, { useState } from 'react';
import { Search, ArrowRight, ArrowRightLeft, Globe, Filter, ExternalLink, Heart } from 'lucide-react';
import { CountryInfo, COUNTRIES_DATA } from '../data/countriesData';

interface CountriesSectionProps {
  onSelectCountry: (country: CountryInfo) => void;
  onCompareCountry: (country: CountryInfo) => void;
  searchFilter?: string;
  favoriteCountryIds?: string[];
  onToggleFavoriteCountry?: (countryId: string) => void;
}

export const CountriesSection: React.FC<CountriesSectionProps> = ({
  onSelectCountry,
  onCompareCountry,
  searchFilter = '',
  favoriteCountryIds = [],
  onToggleFavoriteCountry
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState<string>(searchFilter);

  const regions = [
    'All',
    'Asia-Pacific',
    'Europe',
    'North America',
    'Latin America',
    'Middle East & Africa'
  ];

  const filteredCountries = COUNTRIES_DATA.filter((country) => {
    const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
    const query = (localSearch || searchFilter).toLowerCase().trim();
    if (!query) return matchesRegion;

    const matchesName = country.country.toLowerCase().includes(query);
    const matchesCode = country.code.toLowerCase().includes(query);
    const matchesCurrency = country.currency.toLowerCase().includes(query) || country.currencyCode.toLowerCase().includes(query);
    const matchesServices = country.popularServices.some((s) => s.toLowerCase().includes(query));
    const matchesSkills = country.popularSkills.some((s) => s.toLowerCase().includes(query));

    return matchesRegion && (matchesName || matchesCode || matchesCurrency || matchesServices || matchesSkills);
  });

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Global Country Directory
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            Freelancing Ecosystems Across 20+ Key Economies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Detailed dossiers on typical client demographics, popular services, tax obligations, compliant payment rails, and average market rates.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Region Tabs (Functional Buttons) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedRegion === region
                    ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] max-w-sm">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Filter country, skill, or currency..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
            {localSearch && (
              <button
                onClick={() => setLocalSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Country Grid */}
        {filteredCountries.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            <Globe className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h3 className="text-sm font-semibold text-slate-800">No countries found</h3>
            <p className="text-xs text-slate-500 mt-1">Try modifying your search or switching regional filter.</p>
            <button
              onClick={() => {
                setLocalSearch('');
                setSelectedRegion('All');
              }}
              className="mt-3 text-xs font-medium text-blue-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((c) => (
              <div
                key={c.id}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-3xl leading-none" role="img" aria-label={c.country}>
                        {c.flag}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-emerald-700 transition-colors">
                          {c.country}
                        </h3>
                        <div className="text-xs text-slate-500">
                          {c.currency} · {c.region}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {c.code}
                      </span>
                      {onToggleFavoriteCountry && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavoriteCountry(c.id);
                          }}
                          className="p-1 rounded-md hover:bg-slate-100 transition-colors"
                          title={favoriteCountryIds.includes(c.id) ? 'Remove from favorites' : 'Save to favorites'}
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors ${
                              favoriteCountryIds.includes(c.id)
                                ? 'fill-rose-500 text-rose-500'
                                : 'text-slate-400 hover:text-rose-500'
                            }`}
                          />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {c.summary}
                  </p>

                  {/* Key Metrics */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Dev Average:</span>
                      <span className="font-mono font-semibold text-slate-900 tabular-nums">
                        {c.averageRates[0]?.hourlyUsd || 'Varies'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">English Fluency:</span>
                      <span className="font-medium text-slate-800">{c.englishProficiency}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Timezone:</span>
                      <span className="font-mono text-slate-700">{c.timezone}</span>
                    </div>
                  </div>

                  {/* Popular Services preview */}
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Top Services
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {c.popularServices.slice(0, 3).map((svc, i) => (
                        <span key={i} className="text-[11px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectCountry(c)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                  >
                    <span>Full Country Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onCompareCountry(c)}
                    className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                    title={`Compare ${c.country} with another country`}
                  >
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
