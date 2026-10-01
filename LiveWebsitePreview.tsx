import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Mail, MapPin, Send, Star, ArrowRight, CreditCard } from 'lucide-react';
import { BusinessWebsiteConfig, ServicePackage } from '../data/websiteTemplates';

interface LiveWebsitePreviewProps {
  config: BusinessWebsiteConfig;
  previewMode?: 'desktop' | 'tablet' | 'mobile';
  onContactSuccess?: (inquiry: any) => void;
}

export const LiveWebsitePreview: React.FC<LiveWebsitePreviewProps> = ({
  config,
  previewMode = 'desktop',
  onContactSuccess
}) => {
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(config.services[0] || null);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  // Theme color maps
  const themeStyles = {
    slate: {
      heroBg: 'bg-slate-900 text-white',
      accentColor: 'text-slate-900',
      accentBg: 'bg-slate-900 text-white hover:bg-slate-800',
      pillBg: 'bg-slate-100 text-slate-800 border-slate-200',
      cardHover: 'hover:border-slate-400'
    },
    cobalt: {
      heroBg: 'bg-blue-950 text-white',
      accentColor: 'text-blue-700',
      accentBg: 'bg-blue-600 text-white hover:bg-blue-700',
      pillBg: 'bg-blue-50 text-blue-800 border-blue-200',
      cardHover: 'hover:border-blue-300'
    },
    travertine: {
      heroBg: 'bg-stone-900 text-stone-100',
      accentColor: 'text-stone-800',
      accentBg: 'bg-stone-800 text-stone-100 hover:bg-stone-700',
      pillBg: 'bg-stone-100 text-stone-800 border-stone-200',
      cardHover: 'hover:border-stone-400'
    },
    emerald: {
      heroBg: 'bg-emerald-950 text-white',
      accentColor: 'text-emerald-700',
      accentBg: 'bg-emerald-700 text-white hover:bg-emerald-800',
      pillBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      cardHover: 'hover:border-emerald-300'
    },
    obsidian: {
      heroBg: 'bg-neutral-950 text-white',
      accentColor: 'text-neutral-900',
      accentBg: 'bg-neutral-900 text-white hover:bg-neutral-800',
      pillBg: 'bg-neutral-100 text-neutral-800 border-neutral-200',
      cardHover: 'hover:border-neutral-400'
    }
  }[config.theme] || {
    heroBg: 'bg-slate-900 text-white',
    accentColor: 'text-slate-900',
    accentBg: 'bg-slate-900 text-white hover:bg-slate-800',
    pillBg: 'bg-slate-100 text-slate-800 border-slate-200',
    cardHover: 'hover:border-slate-400'
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactSuccess(true);
    if (onContactSuccess) {
      onContactSuccess({
        name: contactName,
        email: contactEmail,
        message: contactMessage,
        service: selectedService?.name
      });
    }
  };

  const containerWidthClass = {
    desktop: 'w-full',
    tablet: 'max-w-2xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-slate-300 my-4',
    mobile: 'max-w-sm mx-auto shadow-2xl rounded-3xl overflow-hidden border-4 border-slate-800 my-4'
  }[previewMode];

  return (
    <div className={`bg-white text-slate-900 transition-all font-sans ${containerWidthClass}`}>
      {/* Business Top Bar */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-xs border-b border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">{config.countryFlag}</span>
          <span className="font-bold text-base tracking-tight font-display text-slate-950 truncate max-w-[200px] sm:max-w-none">
            {config.businessName}
          </span>
        </div>

        <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-slate-600">
          <a href="#services-section" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#portfolio-section" className="hover:text-slate-900 transition-colors">Case Studies</a>
          <a href="#compliance-section" className="hover:text-slate-900 transition-colors">Compliance</a>
          <a href="#contact-section" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        <a
          href="#contact-section"
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${themeStyles.accentBg}`}
        >
          {config.primaryCtaText || 'Get Started'}
        </a>
      </header>

      {/* Hero Section */}
      <section className={`px-4 sm:px-8 py-12 sm:py-16 ${themeStyles.heroBg}`}>
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-medium opacity-80 mb-3 uppercase tracking-wider">
            <span>{config.category}</span>
            <span aria-hidden="true">·</span>
            <span>{config.locationCity}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold font-display tracking-tight leading-tight text-white">
            {config.tagline}
          </h1>

          <p className="mt-4 text-xs sm:text-sm opacity-90 leading-relaxed max-w-2xl">
            {config.aboutText}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#services-section"
              className="px-4 py-2 text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 rounded-md transition-colors"
            >
              Explore Services & Rates
            </a>
            <a
              href="#contact-section"
              className="px-4 py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-md border border-white/20 transition-colors"
            >
              Request Proposal
            </a>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services-section" className="px-4 sm:px-8 py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Transparent Pricing Packages
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Services & Engagement Models
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Standardized Statements of Work with milestones and clear deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {config.services.map((svc) => (
              <div
                key={svc.id}
                onClick={() => setSelectedService(svc)}
                className={`bg-white border rounded-xl p-5 cursor-pointer transition-all flex flex-col justify-between ${
                  selectedService?.id === svc.id
                    ? 'border-slate-900 ring-2 ring-slate-900/10 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300'
                } ${svc.popular ? 'relative' : ''}`}
              >
                <div>
                  {svc.popular && (
                    <div className="text-[10px] font-semibold text-white bg-slate-900 uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-2">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-sm font-bold font-display text-slate-900">{svc.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-xl font-bold font-mono text-slate-900 tabular-nums">
                      {svc.price}
                    </span>
                    <span className="text-[11px] text-slate-500">{svc.unit}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {svc.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <a
                    href="#contact-section"
                    className={`block w-full py-1.5 text-center text-xs font-semibold rounded-md transition-colors ${
                      selectedService?.id === svc.id
                        ? themeStyles.accentBg
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Select {svc.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio & Case Studies */}
      {config.portfolio.length > 0 && (
        <section id="portfolio-section" className="px-4 sm:px-8 py-12 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-xl mb-8">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Verified Deliverables
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                Recent Projects & Measurable Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {config.portfolio.map((proj) => (
                <div key={proj.id} className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700 uppercase tracking-wide">{proj.category}</span>
                    <span>Client: {proj.clientLocation}</span>
                  </div>

                  <h3 className="text-sm font-bold font-display text-slate-900 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Business Outcome: </span>
                      {proj.outcome}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compliance & Trust Bar */}
      <section id="compliance-section" className="px-4 sm:px-8 py-10 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>International Tax & Compliance Certified</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {config.taxComplianceNotes}
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Accepted Settlement Rails
            </div>
            <div className="flex flex-wrap gap-1.5">
              {config.paymentMethodsAccepted.map((pm, i) => (
                <span
                  key={i}
                  className="text-xs text-slate-700 bg-slate-50 px-2.5 py-1 rounded border border-slate-200 font-medium"
                >
                  {pm}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {config.testimonials.length > 0 && (
        <section className="px-4 sm:px-8 py-12 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Client Trust
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                What International Leaders Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {config.testimonials.map((test) => (
                <div key={test.id} className="p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      "{test.comment}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs">
                    <div className="font-semibold text-slate-900">{test.clientName}</div>
                    <div className="text-slate-500 text-[11px]">
                      {test.clientRole}, {test.company} · {test.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact-section" className="px-4 sm:px-8 py-12 bg-slate-50">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Work With Us
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Send your project specifications or schedule a consultation call.
            </p>
          </div>

          {contactSuccess ? (
            <div className="p-6 bg-white border border-emerald-200 rounded-xl text-center space-y-3 shadow-xs">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-display">Inquiry Sent to {config.businessName}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thank you, {contactName}! Your message regarding{' '}
                <span className="font-semibold text-slate-800">{selectedService?.name || 'General Inquiry'}</span>{' '}
                has been received. We will respond to <span className="font-semibold">{contactEmail}</span> within 24 hours.
              </p>
              <button
                onClick={() => setContactSuccess(false)}
                className="text-xs text-blue-600 font-medium hover:underline pt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-3.5">
              {selectedService && (
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs flex items-center justify-between">
                  <span className="text-slate-600">Selected Package:</span>
                  <span className="font-bold text-slate-900">{selectedService.name} ({selectedService.price})</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Project Scope & Timeline *</label>
                <textarea
                  rows={3}
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Describe your goals, tech stack, and expected start date..."
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-2 text-xs font-semibold rounded-md transition-colors ${themeStyles.accentBg}`}
              >
                Send Direct Inquiry
              </button>
            </form>
          )}

          <div className="mt-6 text-center text-xs text-slate-500 space-y-1">
            <div>Email: <a href={`mailto:${config.email}`} className="text-slate-800 underline">{config.email}</a></div>
            {config.phone && <div>Phone: {config.phone}</div>}
            <div>Location: {config.locationCity}</div>
          </div>
        </div>
      </section>

      {/* Website Footer */}
      <footer className="bg-slate-900 text-slate-400 px-4 sm:px-8 py-6 text-center text-xs border-t border-slate-800">
        <div>© 2026 {config.businessName}. All rights reserved.</div>
        <div className="text-[11px] text-slate-500 mt-1">
          International Independent Contractor & Cross-Border Services
        </div>
      </footer>
    </div>
  );
};
