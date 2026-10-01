import React, { useState } from 'react';
import { Search, Globe, ShieldCheck, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/hero_global_freelance_1790847104550.jpg';

interface HeroProps {
  onSearch: (query: string) => void;
  onExploreCountries: () => void;
  onExploreHiring: () => void;
  onOpenCalculator: () => void;
  onOpenCreator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearch,
  onExploreCountries,
  onExploreHiring,
  onOpenCalculator,
  onOpenCreator
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
    }
  };

  const quickPicks = ['India', 'Philippines', 'Germany', 'Brazil', 'Web Development', 'UI/UX Design'];

  return (
    <div className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="International professionals collaborating across global workspaces"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          {/* Subtle editorial kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/80 border border-emerald-800/80 rounded-full text-xs font-semibold text-emerald-400 mb-4 tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Global Workforce Intelligence</span>
            <span aria-hidden="true">·</span>
            <span>2026 Edition</span>
            <span aria-hidden="true">·</span>
            <span>20+ Country Dossiers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance leading-tight">
            Cross-Border Freelance Intelligence & Talent Directory
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Navigate country-specific legal frameworks, tax obligations, average market rates, popular payment rails, and connect with top-tier international freelancers with compliance certainty.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSubmit} className="mt-8 max-w-xl">
            <div className="flex items-center bg-white rounded-lg shadow-xl p-1.5 focus-within:ring-2 focus-within:ring-emerald-500">
              <Search className="w-5 h-5 text-slate-400 ml-2.5 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search by country, currency, or skill (e.g., India, EUR, React)..."
                className="w-full px-3 py-2 text-sm text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors shrink-0 shadow-xs"
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick filter chips */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="font-medium text-emerald-300">Quick explore:</span>
            {quickPicks.map((pick) => (
              <button
                key={pick}
                onClick={() => {
                  setSearchInput(pick);
                  onSearch(pick);
                }}
                className="text-slate-300 hover:text-emerald-400 underline underline-offset-2 transition-colors cursor-pointer"
              >
                {pick}
              </button>
            ))}
          </div>

          {/* Action links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenCreator}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-white hover:bg-emerald-50 rounded-md transition-colors shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Launch Website Creator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onExploreCountries}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/80 rounded-md transition-colors"
            >
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>Browse Countries</span>
            </button>
            <button
              onClick={onExploreHiring}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Hiring Playbook</span>
            </button>
          </div>
        </div>

        {/* Quantified Proof Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-2xl font-bold font-display text-white tabular-nums">20+</div>
            <div className="text-xs text-slate-400 mt-1">Country Legal & Rate Dossiers</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-display text-white tabular-nums">100%</div>
            <div className="text-xs text-slate-400 mt-1">W-8BEN & Tax Treaty Coverage</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-display text-white tabular-nums">6 Rails</div>
            <div className="text-xs text-slate-400 mt-1">FX & Fee Speed Benchmarks</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-display text-white tabular-nums">Zero</div>
            <div className="text-xs text-slate-400 mt-1">Misclassification Blindspots</div>
          </div>
        </div>
      </div>
    </div>
  );
};
