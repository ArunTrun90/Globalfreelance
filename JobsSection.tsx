import React, { useState } from 'react';
import { Briefcase, Clock, MapPin, PlusCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { JobListing, JOBS_DATA } from '../data/jobsData';
import { JobApplyModal } from './JobApplyModal';

interface JobsSectionProps {
  onOpenPostJob: () => void;
  customJobs?: JobListing[];
}

export const JobsSection: React.FC<JobsSectionProps> = ({ onOpenPostJob, customJobs = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeJobForApply, setActiveJobForApply] = useState<JobListing | null>(null);

  const allJobs = [...customJobs, ...JOBS_DATA];

  const categories = [
    'All',
    'Web & Full-Stack Development',
    'UI/UX & Product Design',
    'AI, Machine Learning & Data Engineering',
    'Content Writing & Copywriting',
    'Digital Marketing & Growth',
    'Video Editing & Motion Graphics'
  ];

  const filteredJobs = allJobs.filter(
    (j) => selectedCategory === 'All' || j.category === selectedCategory
  );

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Global Project Board
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
              Active Freelance Contracts & Opportunities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Cross-border contracts posted by verified international companies. Fair compensation, explicit statements of work, and standardized IP terms.
            </p>
          </div>

          <button
            onClick={onOpenPostJob}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shrink-0 shadow-xs"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Post a Project</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto mb-8 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat === 'All' ? 'All Contracts' : cat.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-xs transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-1">
                    <span className="font-semibold text-slate-900">{job.company}</span>
                    <span aria-hidden="true">·</span>
                    <span>{job.clientFlag} {job.clientCountry}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">Posted {job.postedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">{job.applicantsCount} applicants</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {job.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {job.description}
                </p>

                {/* Requirements Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.keyRequirements.slice(0, 3).map((req, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded border border-slate-200/80"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right column: Budget, Timezone & Apply */}
              <div className="lg:w-64 shrink-0 flex flex-col justify-between pt-4 lg:pt-0 lg:border-l lg:border-slate-100 lg:pl-6 border-t border-slate-100 space-y-4">
                <div>
                  <div className="text-base sm:text-lg font-bold font-mono text-slate-900 tabular-nums">
                    {job.budgetUsd}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {job.budgetType} · {job.duration}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-2 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{job.timezoneReq}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveJobForApply(job)}
                  className="w-full py-2 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors text-center"
                >
                  Apply for Contract
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Modal */}
      {activeJobForApply && (
        <JobApplyModal
          job={activeJobForApply}
          onClose={() => setActiveJobForApply(null)}
        />
      )}
    </section>
  );
};
