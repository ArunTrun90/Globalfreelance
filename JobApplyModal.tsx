import React, { useState } from 'react';
import { X, Send, CheckCircle, FileText } from 'lucide-react';
import { JobListing } from '../data/jobsData';

interface JobApplyModalProps {
  job: JobListing | null;
  onClose: () => void;
}

export const JobApplyModal: React.FC<JobApplyModalProps> = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'India',
    portfolioUrl: '',
    hourlyRate: '',
    coverNote: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!job) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email is required';
    }
    if (!formData.coverNote.trim() || formData.coverNote.length < 30) {
      errs.coverNote = 'Please include a brief proposal (at least 30 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <h2 className="text-base font-bold font-display">Apply for Project</h2>
            <p className="text-xs text-slate-300 mt-0.5 truncate max-w-sm">
              {job.title} · {job.company}
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
            <h3 className="text-lg font-bold text-slate-900 font-display">Proposal Submitted Successfully</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your application has been logged for {job.company}. If selected for an interview, the hiring team will reach out via your provided email.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Budget:</span>
                <span className="font-semibold text-slate-900 font-mono tabular-nums">{job.budgetUsd}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Duration:</span>
                <span className="text-slate-700">{job.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Timezone Req:</span>
                <span className="text-slate-700">{job.timezoneReq}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                  errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                }`}
              />
              {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@domain.com"
                  className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                    errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Country</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. India, Brazil, Poland"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Portfolio / GitHub / Live Link</label>
                <input
                  type="url"
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Proposed Rate / Bid (USD)</label>
                <input
                  type="text"
                  value={formData.hourlyRate}
                  onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
                  placeholder="e.g. $55/hr or $5,000 fixed"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Proposal Note & Relevant Technical Experience *
              </label>
              <textarea
                rows={4}
                value={formData.coverNote}
                onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                placeholder="Detail how you meet the requirements, similar projects you have built, and your timezone availability..."
                className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                  errors.coverNote ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                }`}
              />
              {errors.coverNote && <p className="text-[11px] text-red-600 mt-0.5">{errors.coverNote}</p>}
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
                <Send className="w-3.5 h-3.5" />
                <span>Submit Proposal</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
