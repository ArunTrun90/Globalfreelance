import React, { useState, useEffect } from 'react';
import {
  Laptop,
  Smartphone,
  Tablet,
  Download,
  Share2,
  Sparkles,
  Plus,
  Trash2,
  Check,
  Eye,
  Edit3,
  Globe2,
  DollarSign,
  Palette,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Layers
} from 'lucide-react';
import { BusinessWebsiteConfig, PRESET_TEMPLATES, ServicePackage, PortfolioItem, ClientReview } from '../data/websiteTemplates';
import { COUNTRIES_DATA } from '../data/countriesData';
import { LiveWebsitePreview } from './LiveWebsitePreview';

export const WebsiteCreatorSection: React.FC = () => {
  // Current config in editor
  const [config, setConfig] = useState<BusinessWebsiteConfig>(PRESET_TEMPLATES.apex_india);
  const [activeStep, setActiveStep] = useState<'basics' | 'services' | 'portfolio' | 'compliance' | 'theme'>('basics');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showFullscreenPreview, setShowFullscreenPreview] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [savedSites, setSavedSites] = useState<BusinessWebsiteConfig[]>([]);

  // Load saved sites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('globalfreelance_created_websites');
      if (stored) {
        setSavedSites(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleCountryChange = (countryName: string) => {
    const found = COUNTRIES_DATA.find((c) => c.country === countryName);
    if (found) {
      setConfig({
        ...config,
        country: found.country,
        countryCode: found.code,
        countryFlag: found.flag,
        currency: found.currencyCode,
        currencySymbol: found.currencySymbol,
        locationCity: `${found.country} (${found.timezone})`
      });
    }
  };

  const handleLoadTemplate = (templateKey: string) => {
    if (PRESET_TEMPLATES[templateKey]) {
      setConfig({ ...PRESET_TEMPLATES[templateKey], id: `site_${Date.now()}` });
    }
  };

  // Service package management
  const handleAddService = () => {
    const newSvc: ServicePackage = {
      id: `svc_${Date.now()}`,
      name: 'Custom Service Package',
      price: '$2,500',
      unit: 'per milestone',
      description: 'Clear statement of work, milestone deliverables, and technical handoff.',
      features: ['Core deliverable execution', 'Weekly sync and demo', '2 review revisions included']
    };
    setConfig({ ...config, services: [...config.services, newSvc] });
  };

  const handleUpdateService = (index: number, updated: Partial<ServicePackage>) => {
    const newServices = [...config.services];
    newServices[index] = { ...newServices[index], ...updated };
    setConfig({ ...config, services: newServices });
  };

  const handleDeleteService = (index: number) => {
    if (config.services.length <= 1) return;
    const newServices = config.services.filter((_, i) => i !== index);
    setConfig({ ...config, services: newServices });
  };

  // Portfolio management
  const handleAddPortfolio = () => {
    const newProj: PortfolioItem = {
      id: `proj_${Date.now()}`,
      title: 'Global Client Project',
      category: 'Web Architecture',
      description: 'Production-ready execution with modern tech stack and measurable performance.',
      outcome: 'Improved user engagement by 45% and reduced operating latency',
      clientLocation: 'United States'
    };
    setConfig({ ...config, portfolio: [...config.portfolio, newProj] });
  };

  const handleUpdatePortfolio = (index: number, updated: Partial<PortfolioItem>) => {
    const newPort = [...config.portfolio];
    newPort[index] = { ...newPort[index], ...updated };
    setConfig({ ...config, portfolio: newPort });
  };

  const handleDeletePortfolio = (index: number) => {
    const newPort = config.portfolio.filter((_, i) => i !== index);
    setConfig({ ...config, portfolio: newPort });
  };

  // Save to local storage
  const handleSaveWebsite = () => {
    try {
      const updatedList = [config, ...savedSites.filter((s) => s.id !== config.id)].slice(0, 10);
      setSavedSites(updatedList);
      localStorage.setItem('globalfreelance_created_websites', JSON.stringify(updatedList));
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  // Copy shareable link
  const handleCopyShareLink = () => {
    const simulatedUrl = `${window.location.origin}/#site-${config.id || 'my-business'}`;
    navigator.clipboard.writeText(simulatedUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Export clean standalone HTML file
  const handleExportHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.businessName} - ${config.tagline}</title>
  <meta name="description" content="${config.aboutText}">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    h1, h2, h3 { font-family: 'Syne', sans-serif; }
  </style>
</head>
<body class="bg-slate-50 text-slate-900 antialiased">
  <header class="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-20">
    <div class="flex items-center gap-2">
      <span class="text-xl">${config.countryFlag}</span>
      <span class="font-bold text-lg text-slate-900">${config.businessName}</span>
    </div>
    <a href="#contact" class="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800">${config.primaryCtaText}</a>
  </header>

  <main>
    <section class="bg-slate-900 text-white px-6 py-20 text-center">
      <div class="max-w-3xl mx-auto">
        <div class="text-xs uppercase tracking-wider text-slate-400 mb-2">${config.category} · ${config.locationCity}</div>
        <h1 class="text-3xl sm:text-5xl font-bold leading-tight">${config.tagline}</h1>
        <p class="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">${config.aboutText}</p>
        <div class="mt-8 flex justify-center gap-4">
          <a href="#services" class="px-5 py-2.5 bg-white text-slate-950 font-semibold text-xs rounded-md">View Pricing & Packages</a>
          <a href="#contact" class="px-5 py-2.5 bg-slate-800 text-white border border-slate-700 font-semibold text-xs rounded-md">Contact Us</a>
        </div>
      </div>
    </section>

    <section id="services" class="py-16 px-6 max-w-5xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-10">Services & Engagement Models</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${config.services.map((s) => `
        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 class="font-bold text-base text-slate-900">${s.name}</h3>
            <div class="text-2xl font-bold font-mono my-2">${s.price} <span class="text-xs text-slate-500 font-sans font-normal">${s.unit}</span></div>
            <p class="text-xs text-slate-600 mb-4">${s.description}</p>
            <ul class="text-xs text-slate-700 space-y-1.5 border-t pt-3">
              ${s.features.map((f) => `<li>✓ ${f}</li>`).join('')}
            </ul>
          </div>
          <a href="#contact" class="mt-6 block text-center py-2 bg-slate-900 text-white text-xs font-semibold rounded-md">Inquire Package</a>
        </div>
        `).join('')}
      </div>
    </section>

    ${config.portfolio.length > 0 ? `
    <section class="py-16 px-6 bg-slate-100 border-t border-slate-200">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-center mb-10">Case Studies & Outcomes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${config.portfolio.map((p) => `
          <div class="bg-white p-6 rounded-xl border border-slate-200">
            <div class="text-xs text-slate-500 uppercase">${p.category} · Client: ${p.clientLocation}</div>
            <h3 class="font-bold text-base text-slate-900 my-1">${p.title}</h3>
            <p class="text-xs text-slate-600 mb-3">${p.description}</p>
            <div class="p-2.5 bg-emerald-50 text-emerald-900 text-xs rounded border border-emerald-200 font-medium">Outcome: ${p.outcome}</div>
          </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <section id="contact" class="py-16 px-6 max-w-xl mx-auto text-center">
      <h2 class="text-2xl font-bold mb-2">Work With ${config.businessName}</h2>
      <p class="text-xs text-slate-600 mb-6">Send an email directly to <a href="mailto:${config.email}" class="text-blue-600 underline">${config.email}</a></p>
      <div class="p-6 bg-white border border-slate-200 rounded-xl text-left text-xs space-y-2">
        <div><strong>Location:</strong> ${config.locationCity}</div>
        <div><strong>Tax & Compliance:</strong> ${config.taxComplianceNotes}</div>
        <div><strong>Accepted Rails:</strong> ${config.paymentMethodsAccepted.join(', ')}</div>
      </div>
    </section>
  </main>

  <footer class="bg-slate-950 text-slate-400 py-8 text-center text-xs border-t border-slate-900">
    <div>© 2026 ${config.businessName}. All rights reserved. Generated via GlobalFreelance Business Creator.</div>
  </footer>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.businessName.toLowerCase().replace(/[^a-z0-9]/g, '_')}_website.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-10 lg:py-14 bg-slate-100/70 border-b border-slate-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Creator Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Business Website Creator Studio</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
              Build & Launch Your Professional Business Website
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Create a high-converting, country-specific freelance agency or professional services website. Complete with pricing packages, verified case studies, international tax notes, and exportable standalone code.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={handleSaveWebsite}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md transition-colors shadow-xs"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Website Saved!</span>
                </>
              ) : (
                <>
                  <Layers className="w-3.5 h-3.5" />
                  <span>Save Website</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyShareLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md transition-colors shadow-xs"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              onClick={handleExportHTML}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Standalone HTML</span>
            </button>
          </div>
        </div>

        {/* Preset Template Switcher Bar */}
        <div className="mb-6 p-3 bg-white border border-slate-200 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Quick Template Presets:</span>
            <button
              onClick={() => handleLoadTemplate('apex_india')}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md font-medium transition-colors"
            >
              🇮🇳 Cloud Engineering (India)
            </button>
            <button
              onClick={() => handleLoadTemplate('vanguard_germany')}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md font-medium transition-colors"
            >
              🇩🇪 UX Design Systems (Germany)
            </button>
            <button
              onClick={() => handleLoadTemplate('pacific_philippines')}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md font-medium transition-colors"
            >
              🇵🇭 Remote Operations (Philippines)
            </button>
          </div>

          <div className="flex items-center gap-1 text-slate-500">
            <span>Editing:</span>
            <span className="font-bold text-slate-900">{config.businessName}</span>
          </div>
        </div>

        {/* Main Work Area: Dual Pane (Editor on Left, Live Responsive Viewport on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Form Controls */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
            {/* Step navigation tabs */}
            <div className="flex items-center gap-1 p-2 bg-slate-50 border-b border-slate-200 overflow-x-auto text-xs">
              {[
                { id: 'basics', label: '1. Brand & Location' },
                { id: 'services', label: '2. Pricing Packages' },
                { id: 'portfolio', label: '3. Case Studies' },
                { id: 'compliance', label: '4. Trust & Rails' },
                { id: 'theme', label: '5. Styling' }
              ].map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id as any)}
                  className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
                    activeStep === step.id
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>

            {/* Step 1: Basics & Location */}
            {activeStep === 'basics' && (
              <div className="p-5 space-y-4 max-h-[700px] overflow-y-auto">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Business / Studio Name *
                  </label>
                  <input
                    type="text"
                    value={config.businessName}
                    onChange={(e) => setConfig({ ...config, businessName: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Hero Headline / Tagline *
                  </label>
                  <input
                    type="text"
                    value={config.tagline}
                    onChange={(e) => setConfig({ ...config, tagline: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Country Ecosystem
                    </label>
                    <select
                      value={config.country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                    >
                      {COUNTRIES_DATA.map((c) => (
                        <option key={c.id} value={c.country}>
                          {c.flag} {c.country} ({c.currencyCode})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Domain
                    </label>
                    <select
                      value={config.category}
                      onChange={(e) => setConfig({ ...config, category: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                    >
                      <option value="Engineering & Software">Engineering & Software</option>
                      <option value="Design & Creative">Design & Creative</option>
                      <option value="Content & Marketing">Content & Marketing</option>
                      <option value="Virtual Assistance & Operations">Virtual Assistance & Operations</option>
                      <option value="AI & Data Science">AI & Data Science</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    About / Executive Pitch *
                  </label>
                  <textarea
                    rows={4}
                    value={config.aboutText}
                    onChange={(e) => setConfig({ ...config, aboutText: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      value={config.email}
                      onChange={(e) => setConfig({ ...config, email: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary CTA Button Text
                    </label>
                    <input
                      type="text"
                      value={config.primaryCtaText}
                      onChange={(e) => setConfig({ ...config, primaryCtaText: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Location & Timezone Indicator
                  </label>
                  <input
                    type="text"
                    value={config.locationCity}
                    onChange={(e) => setConfig({ ...config, locationCity: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Services & Pricing */}
            {activeStep === 'services' && (
              <div className="p-5 space-y-4 max-h-[700px] overflow-y-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-700">
                    Pricing Tiers ({config.services.length})
                  </span>
                  <button
                    onClick={handleAddService}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Package</span>
                  </button>
                </div>

                {config.services.map((svc, idx) => (
                  <div key={svc.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 font-display">
                        Tier {idx + 1}
                      </span>
                      {config.services.length > 1 && (
                        <button
                          onClick={() => handleDeleteService(idx)}
                          className="text-slate-400 hover:text-red-600 transition-colors p-1"
                          title="Delete package"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-slate-600 mb-0.5">Package Title</label>
                        <input
                          type="text"
                          value={svc.name}
                          onChange={(e) => handleUpdateService(idx, { name: e.target.value })}
                          className="w-full px-2.5 py-1 text-xs bg-white border border-slate-300 rounded focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-600 mb-0.5">Price & Unit</label>
                        <div className="flex gap-1">
                          <input
                            type="text"
                            value={svc.price}
                            onChange={(e) => handleUpdateService(idx, { price: e.target.value })}
                            className="w-1/2 px-2.5 py-1 text-xs bg-white border border-slate-300 rounded focus:outline-none font-mono font-bold"
                          />
                          <input
                            type="text"
                            value={svc.unit}
                            onChange={(e) => handleUpdateService(idx, { unit: e.target.value })}
                            className="w-1/2 px-2.5 py-1 text-xs bg-white border border-slate-300 rounded focus:outline-none text-[11px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-600 mb-0.5">Short Description</label>
                      <input
                        type="text"
                        value={svc.description}
                        onChange={(e) => handleUpdateService(idx, { description: e.target.value })}
                        className="w-full px-2.5 py-1 text-xs bg-white border border-slate-300 rounded focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-600 mb-0.5">Deliverables (comma separated)</label>
                      <input
                        type="text"
                        value={svc.features.join(', ')}
                        onChange={(e) =>
                          handleUpdateService(idx, {
                            features: e.target.value.split(',').map((f) => f.trim()).filter(Boolean)
                          })
                        }
                        className="w-full px-2.5 py-1 text-xs bg-white border border-slate-300 rounded focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 3: Portfolio & Case Studies */}
            {activeStep === 'portfolio' && (
              <div className="p-5 space-y-4 max-h-[700px] overflow-y-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-700">
                    Case Studies ({config.portfolio.length})
                  </span>
                  <button
                    onClick={handleAddPortfolio}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Project</span>
                  </button>
                </div>

                {config.portfolio.map((proj, idx) => (
                  <div key={proj.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 font-display">
                        Project #{idx + 1}
                      </span>
                      <button
                        onClick={() => handleDeletePortfolio(idx)}
                        className="text-slate-400 hover:text-red-600 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-600 mb-0.5">Project Title</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => handleUpdatePortfolio(idx, { title: e.target.value })}
                        className="w-full px-2.5 py-1 text-xs bg-white border border-slate-300 rounded focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-slate-600 mb-0.5">Category</label>
                        <input
                          type="text"
                          value={proj.category}
                          onChange={(e) => handleUpdatePortfolio(idx, { category: e.target.value })}
                          className="w-full px-2.5 py-1 text-xs bg-white border border-slate-300 rounded focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-600 mb-0.5">Client Location</label>
                        <input
                          type="text"
                          value={proj.clientLocation}
                          onChange={(e) => handleUpdatePortfolio(idx, { clientLocation: e.target.value })}
                          className="w-full px-2.5 py-1 text-xs bg-white border border-slate-300 rounded focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-600 mb-0.5">Deliverable Description</label>
                      <textarea
                        rows={2}
                        value={proj.description}
                        onChange={(e) => handleUpdatePortfolio(idx, { description: e.target.value })}
                        className="w-full px-2.5 py-1 text-xs bg-white border border-slate-300 rounded focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-600 mb-0.5">Quantified Business Result</label>
                      <input
                        type="text"
                        value={proj.outcome}
                        onChange={(e) => handleUpdatePortfolio(idx, { outcome: e.target.value })}
                        className="w-full px-2.5 py-1 text-xs bg-white border border-slate-300 rounded focus:outline-none font-medium text-emerald-800"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: Compliance & Rails */}
            {activeStep === 'compliance' && (
              <div className="p-5 space-y-4 max-h-[700px] overflow-y-auto">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tax Compliance & Regulatory Stance
                  </label>
                  <textarea
                    rows={3}
                    value={config.taxComplianceNotes}
                    onChange={(e) => setConfig({ ...config, taxComplianceNotes: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 leading-relaxed"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    e.g. Form W-8BEN provided for US clients; VAT Reverse Charge compliant for EU B2B.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Accepted Payment Rails (comma separated)
                  </label>
                  <input
                    type="text"
                    value={config.paymentMethodsAccepted.join(', ')}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        paymentMethodsAccepted: e.target.value.split(',').map((p) => p.trim()).filter(Boolean)
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                  <div className="flex flex-wrap gap-1 mt-2">
                    {['Wise', 'Stripe Invoicing', 'SWIFT Bank Wire', 'Payoneer', 'USDC Crypto', 'SEPA Transfer'].map((rail) => (
                      <button
                        key={rail}
                        type="button"
                        onClick={() => {
                          if (!config.paymentMethodsAccepted.includes(rail)) {
                            setConfig({
                              ...config,
                              paymentMethodsAccepted: [...config.paymentMethodsAccepted, rail]
                            });
                          }
                        }}
                        className="text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded cursor-pointer"
                      >
                        + {rail}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Theme & Styling */}
            {activeStep === 'theme' && (
              <div className="p-5 space-y-4 max-h-[700px] overflow-y-auto">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Visual Palette & Typography Mood
                  </label>
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      { id: 'slate', name: 'Executive Slate', desc: 'Authoritative, corporate engineering & finance' },
                      { id: 'cobalt', name: 'Cobalt Tech', desc: 'Vibrant modern SaaS, cloud & full-stack software' },
                      { id: 'travertine', name: 'Editorial Travertine', desc: 'High-end design studios, architecture & luxury' },
                      { id: 'emerald', name: 'Emerald Growth', desc: 'Operations, sustainability, fintech & growth marketing' },
                      { id: 'obsidian', name: 'Obsidian Minimal', desc: 'Brutalist, monochrome product studio' }
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setConfig({ ...config, theme: t.id as any })}
                        className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between ${
                          config.theme === t.id
                            ? 'border-slate-900 bg-slate-50 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900">{t.name}</div>
                          <div className="text-[11px] text-slate-500">{t.desc}</div>
                        </div>
                        {config.theme === t.id && <Check className="w-4 h-4 text-slate-900" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live Viewport Preview */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
            {/* Viewport Control Bar */}
            <div className="px-4 py-2.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="font-semibold text-slate-200 font-display">Live Interactive Preview</span>
                <span className="text-slate-400">· Real-time sync</span>
              </div>

              <div className="flex items-center gap-2">
                {/* Device switchers */}
                <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-md">
                  <button
                    onClick={() => setPreviewDevice('desktop')}
                    className={`p-1.5 rounded transition-colors ${
                      previewDevice === 'desktop' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Desktop 1440px"
                  >
                    <Laptop className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice('tablet')}
                    className={`p-1.5 rounded transition-colors ${
                      previewDevice === 'tablet' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Tablet 768px"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice('mobile')}
                    className={`p-1.5 rounded transition-colors ${
                      previewDevice === 'mobile' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Mobile 390px"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => setShowFullscreenPreview(true)}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors"
                >
                  <Eye className="w-3 h-3" />
                  <span>Fullscreen</span>
                </button>
              </div>
            </div>

            {/* Scrollable Preview Canvas */}
            <div className="p-4 bg-slate-100 max-h-[720px] overflow-y-auto">
              <LiveWebsitePreview config={config} previewMode={previewDevice} />
            </div>
          </div>
        </div>

        {/* Saved Websites Gallery (if any) */}
        {savedSites.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-base font-bold text-slate-900 font-display mb-4">
              Your Saved Business Websites ({savedSites.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {savedSites.map((site) => (
                <div
                  key={site.id}
                  className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span>{site.countryFlag}</span>
                      <span className="font-bold text-xs text-slate-900">{site.businessName}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{site.category} · {site.country}</div>
                  </div>
                  <button
                    onClick={() => setConfig(site)}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Load in Editor
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Preview Modal */}
      {showFullscreenPreview && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs p-2 sm:p-6 flex flex-col items-center">
          <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[96vh]">
            <div className="px-6 py-3 bg-slate-900 text-white flex items-center justify-between shrink-0">
              <div className="text-xs font-medium text-slate-300">
                Fullscreen View · {config.businessName}
              </div>
              <button
                onClick={() => setShowFullscreenPreview(false)}
                className="px-3 py-1 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded"
              >
                Exit Fullscreen
              </button>
            </div>
            <div className="overflow-y-auto flex-1">
              <LiveWebsitePreview config={config} previewMode="desktop" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
