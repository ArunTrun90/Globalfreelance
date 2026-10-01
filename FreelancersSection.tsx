import React, { useState } from 'react';
import { Star, ShieldCheck, Clock, CheckCircle2, ArrowRight, MapPin, Send, Heart } from 'lucide-react';
import { FreelancerProfile, FREELANCERS_DATA } from '../data/freelancersData';
import { HireModal } from './HireModal';

interface FreelancersSectionProps {
  initialServiceFilter?: string;
  onSelectCountryCode?: (countryCode: string) => void;
  favoriteFreelancerIds?: string[];
  onToggleFavoriteFreelancer?: (freelancerId: string) => void;
}

export const FreelancersSection: React.FC<FreelancersSectionProps> = ({
  initialServiceFilter = '',
  favoriteFreelancerIds = [],
  onToggleFavoriteFreelancer
}) => {
  const [selectedService, setSelectedService] = useState<string>(initialServiceFilter || 'All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [activeFreelancerForHire, setActiveFreelancerForHire] = useState<FreelancerProfile | null>(null);

  const services = [
    'All',
    'Web & Full-Stack Development',
    'UI/UX & Product Design',
    'AI, Machine Learning & Data Engineering',
    'Content Writing & Copywriting',
    'Digital Marketing & Growth',
    'Virtual Assistance & Operations'
  ];

  const countries = ['All', 'India', 'Ukraine', 'Brazil', 'Philippines', 'Poland', 'Argentina', 'Nigeria', 'United Kingdom'];

  const filteredFreelancers = FREELANCERS_DATA.filter((f) => {
    const matchesService = selectedService === 'All' || f.primaryService === selectedService;
    const matchesCountry = selectedCountry === 'All' || f.country === selectedCountry;
    return matchesService && matchesCountry;
  });

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Verified Global Talent Pool
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            Senior Independent Contractors Ready for Cross-Border Work
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Vetted for domain craftsmanship, English fluency, asynchronous accountability, and cross-border tax compliance readiness.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Service Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto">
            {services.map((svc) => (
              <button
                key={svc}
                onClick={() => setSelectedService(svc)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  selectedService === svc
                    ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {svc === 'All' ? 'All Roles' : svc.split('&')[0].trim()}
              </button>
            ))}
          </div>

          {/* Country Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 whitespace-nowrap">Country:</span>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-slate-900"
            >
              {countries.map((c) => (
                <option key={c} value={c}>{c === 'All' ? 'All Countries' : c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Freelancers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFreelancers.map((f) => (
            <div
              key={f.id}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Name, Country, Rate */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-900 text-emerald-100 font-display font-bold text-base flex items-center justify-center shrink-0 border border-emerald-700/50">
                      {f.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900 font-display">{f.name}</h3>
                        <span title="Tax & Identity Verified">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
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

                  <div className="text-right shrink-0 flex flex-col items-end">
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-bold font-mono text-slate-900 tabular-nums">
                        ${f.hourlyRateUsd}
                        <span className="text-xs text-slate-500 font-sans font-normal"> / hr</span>
                      </div>
                      {onToggleFavoriteFreelancer && (
                        <button
                          type="button"
                          onClick={() => onToggleFavoriteFreelancer(f.id)}
                          className="p-1 rounded-md hover:bg-slate-100 transition-colors"
                          title={favoriteFreelancerIds.includes(f.id) ? 'Remove from favorites' : 'Save freelancer profile'}
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors ${
                              favoriteFreelancerIds.includes(f.id)
                                ? 'fill-rose-500 text-rose-500'
                                : 'text-slate-400 hover:text-rose-500'
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center justify-end gap-1 text-xs text-amber-600 mt-1 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="tabular-nums">{f.rating}</span>
                      <span className="text-slate-400 font-normal">({f.reviewsCount})</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="mt-3.5 text-xs text-slate-600 leading-relaxed">
                  {f.bio}
                </p>

                {/* Skills */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {f.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Portfolio Showcase Card */}
                <div className="mt-4 p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-xs">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Featured Project Proof
                  </div>
                  <div className="font-semibold text-slate-900">{f.portfolio.projectTitle}</div>
                  <p className="text-slate-600 mt-0.5 text-[11px] leading-relaxed">
                    {f.portfolio.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-200/60 text-emerald-700 font-medium">
                    <span>Outcome: {f.portfolio.metrics}</span>
                    <span className="text-slate-400">Client in {f.portfolio.clientCountry}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Availability & Action */}
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
