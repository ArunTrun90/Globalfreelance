import React, { useState } from 'react';
import {
  Heart,
  Globe2,
  Users,
  ArrowRight,
  Trash2,
  Star,
  ShieldCheck,
  Send,
  ArrowRightLeft,
  DollarSign,
  Clock,
  Sparkles
} from 'lucide-react';
import { CountryInfo, COUNTRIES_DATA } from '../data/countriesData';
import { FreelancerProfile, FREELANCERS_DATA } from '../data/freelancersData';
import { HireModal } from './HireModal';

interface FavoritesSectionProps {
  favoriteCountryIds: string[];
  favoriteFreelancerIds: string[];
  onToggleFavoriteCountry: (countryId: string) => void;
  onToggleFavoriteFreelancer: (freelancerId: string) => void;
  onSelectCountry: (country: CountryInfo) => void;
  onCompareCountry: (country: CountryInfo) => void;
  onOpenCalculatorForCountry?: (country: CountryInfo) => void;
  onExploreCountries: () => void;
  onExploreTalent: () => void;
}

export const FavoritesSection: React.FC<FavoritesSectionProps> = ({
  favoriteCountryIds,
  favoriteFreelancerIds,
  onToggleFavoriteCountry,
  onToggleFavoriteFreelancer,
  onSelectCountry,
  onCompareCountry,
  onOpenCalculatorForCountry,
  onExploreCountries,
  onExploreTalent
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'countries' | 'freelancers'>('all');
  const [activeFreelancerForHire, setActiveFreelancerForHire] = useState<FreelancerProfile | null>(null);

  // Resolve objects
  const savedCountries = COUNTRIES_DATA.filter((c) => favoriteCountryIds.includes(c.id));
  const savedFreelancers = FREELANCERS_DATA.filter((f) => favoriteFreelancerIds.includes(f.id));

  const totalSavedCount = savedCountries.length + savedFreelancers.length;

  const handleAddSampleFavorites = () => {
    if (!favoriteCountryIds.includes('india')) onToggleFavoriteCountry('india');
    if (!favoriteCountryIds.includes('germany')) onToggleFavoriteCountry('germany');
    if (savedFreelancers.length === 0 && FREELANCERS_DATA[0]) {
      onToggleFavoriteFreelancer(FREELANCERS_DATA[0].id);
    }
  };

  return (
    <section className="py-10 lg:py-16 bg-slate-50 border-b border-slate-200 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-md text-xs font-semibold text-emerald-800 mb-2">
              <Heart className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              <span>Personal Saved Watchlist</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
              My Favorites & Bookmarked Profiles
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Quickly monitor saved hiring jurisdictions, benchmark tax frameworks, and evaluate pinned international freelancers.
            </p>
          </div>

          {/* Quick Counter Badges */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 shadow-xs">
              Countries: <strong className="font-mono text-emerald-800">{savedCountries.length}</strong>
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 shadow-xs">
              Talent: <strong className="font-mono text-emerald-800">{savedFreelancers.length}</strong>
            </span>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg mb-8 max-w-fit">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'all'
                ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Favorites ({totalSavedCount})
          </button>
          <button
            onClick={() => setActiveTab('countries')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'countries'
                ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Countries ({savedCountries.length})
          </button>
          <button
            onClick={() => setActiveTab('freelancers')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'freelancers'
                ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Freelance Profiles ({savedFreelancers.length})
          </button>
        </div>

        {/* Empty State */}
        {totalSavedCount === 0 && (
          <div className="p-12 bg-white border border-dashed border-slate-300 rounded-2xl text-center max-w-2xl mx-auto space-y-4 shadow-xs">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-7 h-7 fill-emerald-600 text-emerald-600" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 font-display">No Favorites Saved Yet</h2>
            <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
              You haven't bookmarked any countries or freelance talent profiles yet. Click the heart icon on any country card or freelancer profile across the platform to save them here.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onExploreCountries}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors shadow-xs"
              >
                Browse Countries
              </button>
              <button
                onClick={onExploreTalent}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                Browse Talent
              </button>
              <button
                onClick={handleAddSampleFavorites}
                className="px-4 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Load Sample Favorites</span>
              </button>
            </div>
          </div>
        )}

        {/* Display Content when not empty */}
        {totalSavedCount > 0 && (
          <div className="space-y-12">
            {/* SAVED COUNTRIES SECTION */}
            {(activeTab === 'all' || activeTab === 'countries') && (
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-blue-600" />
                    <h2 className="text-base font-bold text-slate-900 font-display">
                      Bookmarked Countries ({savedCountries.length})
                    </h2>
                  </div>
                  {savedCountries.length === 0 && (
                    <button
                      onClick={onExploreCountries}
                      className="text-xs text-blue-600 hover:underline font-medium"
                    >
                      Browse Countries Directory →
                    </button>
                  )}
                </div>

                {savedCountries.length === 0 ? (
                  <p className="text-xs text-slate-500 py-6 text-center bg-white rounded-xl border border-slate-200">
                    No countries currently in your favorites list.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedCountries.map((c) => (
                      <div
                        key={c.id}
                        className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          {/* Card Header with Unfavorite Button */}
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2.5">
                              <span className="text-3xl leading-none" role="img" aria-label={c.country}>
                                {c.flag}
                              </span>
                              <div>
                                <h3 className="text-base font-bold text-slate-900 font-display">
                                  {c.country}
                                </h3>
                                <div className="text-xs text-slate-500">
                                  {c.currency} · {c.region}
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => onToggleFavoriteCountry(c.id)}
                              className="p-1.5 text-rose-500 hover:text-slate-400 rounded-md hover:bg-slate-50 transition-colors"
                              title="Remove from favorites"
                            >
                              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                            </button>
                          </div>

                          {/* Rates & Tax */}
                          <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="text-slate-500">Dev Rate:</span>
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

                          <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {c.freelancerTaxes}
                          </p>
                        </div>

                        {/* Card Actions */}
                        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <button
                            onClick={() => onSelectCountry(c)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                          >
                            <span>Full Dossier</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center gap-1">
                            {onOpenCalculatorForCountry && (
                              <button
                                onClick={() => onOpenCalculatorForCountry(c)}
                                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded"
                                title="Calculate Rates"
                              >
                                <DollarSign className="w-3.5 h-3.5" />
                              </button>
                            )}
                            <button
                              onClick={() => onCompareCountry(c)}
                              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded"
                              title="Compare"
                            >
                              <ArrowRightLeft className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SAVED FREELANCERS SECTION */}
            {(activeTab === 'all' || activeTab === 'freelancers') && (
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <h2 className="text-base font-bold text-slate-900 font-display">
                      Bookmarked Freelance Talent ({savedFreelancers.length})
                    </h2>
                  </div>
                  {savedFreelancers.length === 0 && (
                    <button
                      onClick={onExploreTalent}
                      className="text-xs text-blue-600 hover:underline font-medium"
                    >
                      Browse Talent Pool →
                    </button>
                  )}
                </div>

                {savedFreelancers.length === 0 ? (
                  <p className="text-xs text-slate-500 py-6 text-center bg-white rounded-xl border border-slate-200">
                    No freelance profiles currently in your favorites list.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedFreelancers.map((f) => (
                      <div
                        key={f.id}
                        className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          {/* Header with Unfavorite */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-display font-bold text-base flex items-center justify-center shrink-0">
                                {f.name.split(' ').map((n) => n[0]).join('')}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="text-base font-bold text-slate-900 font-display">{f.name}</h3>
                                  <span title="Tax & Identity Verified">
                                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                                  </span>
                                </div>
                                <p className="text-xs text-slate-700 font-medium mt-0.5">{f.title}</p>
                                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                                  <span>{f.flag}</span>
                                  <span>{f.city}, {f.country}</span>
                                  <span aria-hidden="true">·</span>
                                  <span>{f.experienceYears}y exp</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col items-end gap-1">
                              <button
                                onClick={() => onToggleFavoriteFreelancer(f.id)}
                                className="p-1 text-rose-500 hover:text-slate-400 rounded-md transition-colors"
                                title="Remove from favorites"
                              >
                                <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                              </button>
                              <div className="text-base font-bold font-mono text-slate-900 tabular-nums">
                                ${f.hourlyRateUsd}/hr
                              </div>
                              <div className="flex items-center gap-1 text-xs text-amber-600 font-semibold">
                                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                <span>{f.rating}</span>
                              </div>
                            </div>
                          </div>

                          <p className="mt-3.5 text-xs text-slate-600 leading-relaxed">
                            {f.bio}
                          </p>

                          {/* Skills */}
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {f.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Featured project highlight */}
                          <div className="mt-4 p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-xs">
                            <div className="font-semibold text-slate-900">{f.portfolio.projectTitle}</div>
                            <div className="text-emerald-700 font-medium text-[11px] mt-1">
                              Outcome: {f.portfolio.metrics}
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-1.5 text-xs text-slate-600">
                            <Clock className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{f.availability}</span>
                          </div>

                          <button
                            onClick={() => setActiveFreelancerForHire(f)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors shadow-xs"
                          >
                            <Send className="w-3 h-3" />
                            <span>Request Proposal</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hire Modal */}
      {activeFreelancerForHire && (
        <HireModal
          freelancer={activeFreelancerForHire}
          onClose={() => setActiveFreelancerForHire(null)}
        />
      )}
    </section>
  );
};
