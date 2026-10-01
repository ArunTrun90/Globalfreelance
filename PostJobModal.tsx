import React, { useState } from 'react';
import { X, CheckCircle, PlusCircle, ShieldCheck } from 'lucide-react';
import { JobListing } from '../data/jobsData';

interface PostJobModalProps {
  onClose: () => void;
  onJobCreated?: (newJob: JobListing) => void;
}

export const PostJobModal: React.FC<PostJobModalProps> = ({ onClose, onJobCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    clientCountry: 'United States',
    category: 'Web & Full-Stack Development',
    budgetType: 'Hourly Rate' as 'Fixed Price' | 'Hourly Rate' | 'Monthly Retainer',
    budgetUsd: '$45 - $75 / hr',
    duration: '2 - 3 Months',
    timezoneReq: '4h overlap with US Eastern (UTC-5)',
    experienceLevel: 'Senior' as 'Mid-Level' | 'Senior' | 'Lead / Expert',
    description: '',
    requirement1: '',
    requirement2: '',
    requirement3: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.title.trim()) errs.title = 'Job title is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.description.trim() || formData.description.length < 30) {
      errs.description = 'Please provide a clear description (at least 30 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const newJob: JobListing = {
        id: `job-${Date.now()}`,
        title: formData.title,
        company: formData.company,
        clientCountry: formData.clientCountry,
        clientFlag: formData.clientCountry === 'United States' ? '🇺🇸' : formData.clientCountry === 'Germany' ? '🇩🇪' : '🇬🇧',
        category: formData.category,
        budgetType: formData.budgetType,
        budgetUsd: formData.budgetUsd,
        duration: formData.duration,
        timezoneReq: formData.timezoneReq,
        experienceLevel: formData.experienceLevel,
        description: formData.description,
        keyRequirements: [
          formData.requirement1 || 'Strong portfolio and demonstrated technical proficiency',
          formData.requirement2 || 'Proven asynchronous remote communication skills',
          formData.requirement3 || 'Ability to meet project sprint milestones'
        ],
        postedDate: 'Just now',
        applicantsCount: 0
      };

      if (onJobCreated) onJobCreated(newJob);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white w-full max-w-xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <h2 className="text-base font-bold font-display">Post a Freelance Project Opportunity</h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Connect with vetted cross-border specialists with standardized IP protection
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">Project Published Live</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your freelance listing is now broadcast across the GlobalFreelance index. Candidates can submit verified bids and proposals.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
            >
              View Listings
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization *</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Apex Studio"
                  className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                    errors.company ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.company && <p className="text-[11px] text-red-600 mt-0.5">{errors.company}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Client Country</label>
                <input
                  type="text"
                  value={formData.clientCountry}
                  onChange={(e) => setFormData({ ...formData, clientCountry: e.target.value })}
                  placeholder="e.g. United States, Germany, UK"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Project Headline / Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Senior Next.js Architect for Multi-Tenant SaaS Platform"
                className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                  errors.title ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                }`}
              />
              {errors.title && <p className="text-[11px] text-red-600 mt-0.5">{errors.title}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                >
                  <option value="Web & Full-Stack Development">Web & Full-Stack Development</option>
                  <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                  <option value="AI, Machine Learning & Data Engineering">AI, ML & Data Engineering</option>
                  <option value="Content Writing & Copywriting">Content Writing & Copywriting</option>
                  <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
                  <option value="Video Editing & Motion Graphics">Video Editing & Motion</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Experience Level</label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value as any })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                >
                  <option value="Mid-Level">Mid-Level (3-5 yrs)</option>
                  <option value="Senior">Senior (5-8 yrs)</option>
                  <option value="Lead / Expert">Lead / Expert (8+ yrs)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Compensation / Budget (USD)</label>
                <input
                  type="text"
                  value={formData.budgetUsd}
                  onChange={(e) => setFormData({ ...formData, budgetUsd: e.target.value })}
                  placeholder="e.g. $50 - $80 / hr or $6,000 fixed"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Timezone Overlap Requirement</label>
                <input
                  type="text"
                  value={formData.timezoneReq}
                  onChange={(e) => setFormData({ ...formData, timezoneReq: e.target.value })}
                  placeholder="e.g. 3 hours overlap with London (UTC+0)"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project Scope & Deliverables *
              </label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Outline what needs to be built, the tech stack, acceptance criteria, and project timeline..."
                className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                  errors.description ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                }`}
              />
              {errors.description && <p className="text-[11px] text-red-600 mt-0.5">{errors.description}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Key Requirements (Optional)
              </label>
              <input
                type="text"
                value={formData.requirement1}
                onChange={(e) => setFormData({ ...formData, requirement1: e.target.value })}
                placeholder="Requirement 1: e.g. 4+ years production Next.js experience"
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 mb-2"
              />
              <input
                type="text"
                value={formData.requirement2}
                onChange={(e) => setFormData({ ...formData, requirement2: e.target.value })}
                placeholder="Requirement 2: e.g. Fluent English and async Loom updates"
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Publish Project</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
