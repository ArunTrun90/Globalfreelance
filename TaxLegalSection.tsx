import React, { useState } from 'react';
import { ShieldCheck, FileText, AlertTriangle, Check, Copy, CheckCircle2 } from 'lucide-react';
import { TAX_FORMS, COMPLIANCE_TOPICS } from '../data/taxLegalData';

export const TaxLegalSection: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(COMPLIANCE_TOPICS[0].id);
  const [copiedClause, setCopiedClause] = useState<string | null>(null);

  const activeTopic = COMPLIANCE_TOPICS.find((t) => t.id === selectedTopicId) || COMPLIANCE_TOPICS[0];

  const standardContractClauses = [
    {
      id: 'ip-clause',
      title: 'Global IP Assignment Clause',
      text: `1. Intellectual Property Assignment. Contractor hereby assigns, transfers, and conveys to Client, upon receipt of final payment for the applicable Deliverable, all worldwide right, title, and interest in and to all intellectual property rights, copyrights, patents, and trade secrets created, conceived, or authored by Contractor in the performance of the Services. To the extent any moral rights cannot be assigned under applicable local laws, Contractor hereby unconditionally and irrevocably waives the enforcement of such moral rights against Client and its successors.`
    },
    {
      id: 'status-clause',
      title: 'Independent Contractor Status & Taxes Clause',
      text: `2. Independent Contractor Status. Contractor is an independent contractor and not an employee, agent, or joint venturer of Client. Contractor shall retain sole control over the manner, means, and timing of performing the Services. Contractor is solely responsible for paying all national, state, and local income taxes, self-employment taxes, social security contributions, and statutory insurance obligations arising from any compensation received under this Agreement.`
    },
    {
      id: 'non-solicitation-clause',
      title: 'Confidentiality & Non-Disclosure Clause',
      text: `3. Confidentiality. Contractor agrees to hold in strict confidence all proprietary technical, business, financial, and strategic information disclosed by Client. Contractor shall not disclose such Confidential Information to any third party without Client’s prior written consent, and shall use such information solely for the purpose of delivering the contracted Services.`
    }
  ];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedClause(id);
    setTimeout(() => setCopiedClause(null), 2500);
  };

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Regulatory Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            Tax & Legal Frameworks for Cross-Border Freelancing
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Protect your organization and independent contractors from misclassification liabilities, double taxation traps, and IP ownership ambiguities.
          </p>
        </div>

        {/* Essential Tax Forms Matrix */}
        <div className="mb-12">
          <h3 className="text-base font-bold text-slate-900 font-display mb-4">
            Critical Tax Forms & Cross-Border Exemptions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TAX_FORMS.map((form, idx) => (
              <div
                key={idx}
                className="p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                    <h4 className="text-sm font-bold text-slate-900 font-display">{form.name}</h4>
                  </div>
                  <p className="text-xs text-slate-700 font-medium mt-2">{form.purpose}</p>

                  <div className="mt-3 space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-slate-600">Who signs: </span>
                      <span className="text-slate-800">{form.whoSigns}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-600">Core Rule: </span>
                      <span className="text-slate-700">{form.keyRule}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] text-amber-800 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/60">
                  <span className="font-semibold">Common Pitfall: </span>
                  {form.commonMistakes}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Worker Classification & In-depth Topics */}
        <div className="mb-12">
          <h3 className="text-base font-bold text-slate-900 font-display mb-4">
            Legal Deep-Dives: Worker Classification & IP Rights
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Topic selector list */}
            <div className="lg:col-span-4 space-y-2">
              {COMPLIANCE_TOPICS.map((topic) => {
                const isSelected = selectedTopicId === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopicId(topic.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-wider opacity-70">
                      {topic.category}
                    </div>
                    <div className="text-xs sm:text-sm font-bold mt-1 font-display">
                      {topic.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active topic display */}
            <div className="lg:col-span-8 p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-5">
              <div>
                <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">
                  {activeTopic.category}
                </span>
                <h4 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                  {activeTopic.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {activeTopic.summary}
                </p>
              </div>

              {/* Detail points */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Core Legal Mechanics
                </div>
                <ul className="space-y-2">
                  {activeTopic.detail.map((pt, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                      <span className="text-slate-400 font-bold">·</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best practices */}
              <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-2">
                <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  Compliance Best Practices
                </div>
                <ul className="space-y-1.5">
                  {activeTopic.bestPractices.map((bp, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning box */}
              <div className="p-3 bg-red-50/70 border border-red-200 rounded-lg text-xs text-red-900 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Liability Note: </span>
                  {activeTopic.riskWarning}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyable Standard Contract Clauses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Standard Cross-Border Agreement Clauses
              </h3>
              <p className="text-xs text-slate-500">
                Ready-to-use clauses drafted for international Statements of Work (SOW)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {standardContractClauses.map((clause) => {
              const isCopied = copiedClause === clause.id;
              return (
                <div
                  key={clause.id}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display mb-2">
                      {clause.title}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-600 bg-white p-3 rounded border border-slate-200 leading-relaxed max-h-48 overflow-y-auto">
                      {clause.text}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(clause.id, clause.text)}
                    className="mt-3 w-full py-1.5 px-3 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors flex items-center justify-center gap-1.5"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Clause Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Clause</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
