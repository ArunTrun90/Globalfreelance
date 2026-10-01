import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, DollarSign, Globe2, ArrowRight } from 'lucide-react';
import hiringOfficeImg from '../assets/images/business_hiring_office_1790847118005.jpg';

interface BusinessHiringSectionProps {
  onOpenCalculator: () => void;
  onOpenPostJob: () => void;
  onExploreTaxes: () => void;
}

export const BusinessHiringSection: React.FC<BusinessHiringSectionProps> = ({
  onOpenCalculator,
  onOpenPostJob,
  onExploreTaxes
}) => {
  const steps = [
    {
      num: '01',
      title: 'Define Deliverables & Timezone Overlap',
      desc: 'Shift from hourly supervision to deliverable-based Statements of Work (SOW). Establish required daily synchronous overlap (typically 2-4 hours for standups and PR reviews), leaving the remainder for focused asynchronous execution.'
    },
    {
      num: '02',
      title: 'Execute International Contractor Agreement',
      desc: 'Sign a legally binding cross-border contract containing explicit intellectual property (IP) assignment upon final payment, confidentiality non-disclosure (NDA), and mutual indemnification against copyright infringement.'
    },
    {
      num: '03',
      title: 'Collect Tax Documentation (Form W-8BEN / VAT ID)',
      desc: 'US businesses must collect IRS Form W-8BEN (or W-8BEN-E for foreign entities) prior to first payout to lawfully eliminate 30% statutory withholding. EU clients verify VIES VAT numbers for reverse-charge exemption.'
    },
    {
      num: '04',
      title: 'Establish Low-Margin Payment Rails',
      desc: 'Avoid retail bank international wire fees ($40+ wire charges and 4% retail FX spreads). Use modern enterprise rails like Wise Business, Payoneer, or direct local currency clearing to settle funds within 24 hours.'
    },
    {
      num: '05',
      title: 'Asynchronous Onboarding & Zero-Trust Access',
      desc: 'Provision role-based least-privilege repository access (GitHub, GitLab), project management boards (Linear, Jira), and delegate credentials. Never share raw production database keys or master logins.'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Global Hiring Playbook
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            How Businesses Hire Global Freelancers Compliantly
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            A battle-tested operational roadmap for founders, hiring managers, and enterprise procurement teams scaling cross-border remote teams.
          </p>
        </div>

        {/* Feature Hero Card with Architectural Image */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs mb-12 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Misclassification Architecture</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display leading-tight">
                Hire Top-Decile International Talent Without Opening Foreign Subsidiaries
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                By contracting with genuine independent contractors who operate under established local business entities (e.g., FOP in Ukraine, PJ in Brazil, Section 44ADA in India, Sole Trader in the UK), your company accesses global elite specialists while remaining completely compliant with local and domestic labor laws.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero US Tax Withholding:</strong> Compliant Form W-8BEN workflow archives keep audits clean.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Direct IP Assignment:</strong> Full economic rights assignment triggered automatically upon milestone payment.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Cost Efficiency:</strong> Reallocate 40% - 65% of domestic salary overhead toward high-caliber velocity.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPostJob}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
              >
                <span>Post a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-md transition-colors"
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Estimate Savings</span>
              </button>
              <button
                onClick={onExploreTaxes}
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Review Tax & Legal Rules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-slate-900">
            <img
              src={hiringOfficeImg}
              alt="Executive hiring team reviewing global workforce data"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        {/* 5-Step Pipeline Grid */}
        <div>
          <h3 className="text-base font-bold text-slate-900 font-display mb-6">
            The 5-Phase Compliant Cross-Border Engagement Pipeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-slate-200 rounded-xl relative hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl font-bold font-mono text-slate-300 mb-2">
                    {step.num}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick Consultation Callout */}
            <div className="p-6 bg-slate-900 text-white rounded-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Need Custom Structuring?
                </div>
                <h4 className="text-base font-bold font-display text-white mb-2">
                  Multi-Country SOW & IP Framework Review
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Generate vetted international contractor agreements customized for your jurisdiction and the freelancer's country.
                </p>
              </div>
              <button
                onClick={onExploreTaxes}
                className="mt-6 w-full py-2 text-center text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors"
              >
                View Contract Clauses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
