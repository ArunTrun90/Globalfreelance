import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { ResourceArticle, RESOURCES_DATA } from '../data/resourcesData';
import workspaceImg from '../assets/images/workspace_creative_designer_1790847129822.jpg';
import remoteCollabImg from '../assets/images/remote_collaboration_culture_1790847148841.jpg';

export const ResourcesSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);

  const images = [workspaceImg, remoteCollabImg, workspaceImg];

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Knowledge & Field Guides
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            Guides for Beginners, Independent Creators & Global Businesses
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Practical tutorials on international tax filings, currency risk management, rate benchmarking, and cross-border team velocity.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCES_DATA.map((article, idx) => (
            <div
              key={article.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 overflow-hidden relative bg-slate-900">
                  <img
                    src={images[idx % images.length]}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-semibold text-white bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                    {article.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-display leading-snug group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div 
            className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
            role="dialog"
            aria-modal="true"
          >
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
              <div>
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                  {activeArticle.category}
                </span>
                <h2 className="text-lg font-bold font-display mt-0.5 max-w-lg">
                  {activeArticle.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800">
              <p className="text-sm font-medium text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200 leading-relaxed">
                {activeArticle.summary}
              </p>

              {activeArticle.contentSections.map((sec, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    {sec.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sec.body}
                  </p>
                  {sec.keyTakeaway && (
                    <div className="mt-2 p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-blue-900 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Core Takeaway: </span>
                        {sec.keyTakeaway}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
