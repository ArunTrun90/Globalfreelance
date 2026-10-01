import React from 'react';
import { Globe } from 'lucide-react';

interface FooterProps {
  onNavClick: (tabId: string) => void;
  onOpenCalculator: () => void;
  onOpenPostJob: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenCalculator,
  onOpenPostJob
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Wordmark & Statement */}
          <div className="space-y-3">
            <div className="text-base font-bold font-display text-white tracking-tight">
              GlobalFreelance
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The international cross-border freelance intelligence index and directory. Benchmark rates, country tax frameworks, compliant payment rails, and global hiring playbooks.
            </p>
            <div className="pt-2 border-t border-slate-900 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500">Platform Owner:</span>
                <span className="font-semibold text-white">Arun Singh Bhadauriya</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500">Contact Email:</span>
                <a
                  href="mailto:ausa9025@gmail.com"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2 font-mono text-[11px]"
                >
                  ausa9025@gmail.com
                </a>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 pt-1">
              © 2026 GlobalFreelance Intelligence · Owned by Arun Singh Bhadauriya. All rights reserved.
            </div>
          </div>

          {/* Col 2: Directory & Services */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Explore Intelligence
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavClick('countries')}
                  className="hover:text-white transition-colors"
                >
                  20+ Country Dossiers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-white transition-colors"
                >
                  Freelance Service Taxonomy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('freelancers')}
                  className="hover:text-white transition-colors"
                >
                  Verified Global Talent
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('jobs')}
                  className="hover:text-white transition-colors"
                >
                  Open Contract Board
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Rails */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Compliance & Rails
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavClick('taxes')}
                  className="hover:text-white transition-colors"
                >
                  W-8BEN & 1099-NEC Rules
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('taxes')}
                  className="hover:text-white transition-colors"
                >
                  Worker Classification Safeguards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('payments')}
                  className="hover:text-white transition-colors"
                >
                  FX Margins & Payment Rails
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('platforms')}
                  className="hover:text-white transition-colors"
                >
                  Freelance Marketplace Directory
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Tools & Contact */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Interactive Tools
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavClick('creator')}
                  className="hover:text-white transition-colors font-medium text-emerald-400"
                >
                  Business Website Creator Studio
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="hover:text-white transition-colors"
                >
                  Cross-Border Rate Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPostJob}
                  className="hover:text-white transition-colors"
                >
                  Post a Freelance Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('hiring')}
                  className="hover:text-white transition-colors"
                >
                  Business Hiring Playbook
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('admin')}
                  className="hover:text-white transition-colors text-slate-300"
                >
                  Admin Operations Console
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('resources')}
                  className="hover:text-white transition-colors"
                >
                  Field Guides & Articles
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-4">
          <div className="text-[11px]">
            Owner: <strong className="text-slate-300">Arun Singh Bhadauriya</strong> (<a href="mailto:ausa9025@gmail.com" className="text-emerald-400 hover:text-emerald-300 underline font-mono">ausa9025@gmail.com</a>) · GlobalFreelance Cross-Border Intelligence Platform.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Service</span>
            <span aria-hidden="true">·</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
