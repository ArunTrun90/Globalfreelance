import React, { useState } from 'react';
import { X, CheckCircle, Send, ShieldAlert, DollarSign } from 'lucide-react';
import { FreelancerProfile } from '../data/freelancersData';

interface HireModalProps {
  freelancer: FreelancerProfile | null;
  onClose: () => void;
}

export const HireModal: React.FC<HireModalProps> = ({ freelancer, onClose }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    company: '',
    projectTitle: '',
    projectScope: 'Fixed Price Milestone',
    estimatedBudget: '$2,500 - $5,000',
    timeline: '1-2 Months',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!freelancer) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.clientName.trim()) errs.clientName = 'Name is required';
    if (!formData.clientEmail.trim() || !formData.clientEmail.includes('@')) {
      errs.clientEmail = 'Valid business email is required';
    }
    if (!formData.projectTitle.trim()) errs.projectTitle = 'Project title is required';
    if (!formData.message.trim() || formData.message.length < 20) {
      errs.message = 'Please provide at least 20 characters describing your project';
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
        className="relative bg-white w-full max-w-xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <h2 className="text-base font-bold font-display">
              Request Proposal from {freelancer.name}
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              {freelancer.title} · {freelancer.flag} {freelancer.country} · ${freelancer.hourlyRateUsd}/hr
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
            <h3 className="text-lg font-bold text-slate-900 font-display">Proposal Request Dispatched</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Your inquiry has been encrypted and routed directly to {freelancer.name}. Based on timezone ({freelancer.country}), typical response turnaround is within 4 to 8 business hours.
            </p>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500 max-w-sm mx-auto text-left space-y-1">
              <div><span className="font-semibold text-slate-700">Project:</span> {formData.projectTitle}</div>
              <div><span className="font-semibold text-slate-700">Budget Range:</span> {formData.estimatedBudget}</div>
              <div><span className="font-semibold text-slate-700">Contractor Rail:</span> {freelancer.preferredPayment}</div>
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                    errors.clientName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.clientName && <p className="text-[11px] text-red-600 mt-0.5">{errors.clientName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                <input
                  type="email"
                  value={formData.clientEmail}
                  onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  placeholder="sarah@company.com"
                  className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                    errors.clientEmail ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.clientEmail && <p className="text-[11px] text-red-600 mt-0.5">{errors.clientEmail}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corp"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Contract Structure</label>
                <select
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                >
                  <option value="Fixed Price Milestone">Fixed Price Milestones</option>
                  <option value="Hourly Dedicated (20-40h/wk)">Hourly Dedicated Contract</option>
                  <option value="Monthly Retainer">Monthly Retainer</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Project Name / Brief Headline *</label>
              <input
                type="text"
                value={formData.projectTitle}
                onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                placeholder="e.g. Next.js SaaS Web App Refactor & Stripe Billing"
                className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                  errors.projectTitle ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                }`}
              />
              {errors.projectTitle && <p className="text-[11px] text-red-600 mt-0.5">{errors.projectTitle}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Budget (USD)</label>
                <select
                  value={formData.estimatedBudget}
                  onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                >
                  <option value="Under $1,500">Under $1,500</option>
                  <option value="$1,500 - $3,500">$1,500 - $3,500</option>
                  <option value="$3,500 - $8,000">$3,500 - $8,000</option>
                  <option value="$8,000 - $20,000">$8,000 - $20,000</option>
                  <option value="$20,000+">$20,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Target Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                >
                  <option value="Immediate (< 2 weeks)">Immediate (&lt; 2 weeks)</option>
                  <option value="1 - 2 Months">1 - 2 Months</option>
                  <option value="3 - 6 Months">3 - 6 Months</option>
                  <option value="Ongoing Long-Term">Ongoing Long-Term</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project Scope, Requirements & Acceptance Criteria *
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe deliverables, tech stack, desired start date, and any specific timezone requirements..."
                className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                  errors.message ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                }`}
              />
              {errors.message && <p className="text-[11px] text-red-600 mt-0.5">{errors.message}</p>}
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-md text-[11px] text-slate-500 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Standard international independent contractor protection applied. W-8BEN and IP assignment templates will be supplied upon contract initiation.
              </span>
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
                <span>Send Proposal Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
