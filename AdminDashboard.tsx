import React, { useState } from 'react';
import {
  LayoutDashboard,
  Globe2,
  Users,
  FileCheck2,
  CreditCard,
  Building2,
  Settings,
  ShieldAlert,
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  Download,
  Filter,
  DollarSign,
  Clock,
  ArrowLeft,
  Plus,
  Edit,
  Eye,
  RefreshCw,
  Heart,
  Star,
  ArrowRight,
  Send
} from 'lucide-react';
import { COUNTRIES_DATA, CountryInfo } from '../../data/countriesData';
import { FREELANCERS_DATA, FreelancerProfile } from '../../data/freelancersData';
import { JOBS_DATA, JobListing } from '../../data/jobsData';

interface AdminDashboardProps {
  onExitAdmin: () => void;
  onOpenPublicTab: (tab: string) => void;
  favoriteCountryIds?: string[];
  favoriteFreelancerIds?: string[];
  onToggleFavoriteCountry?: (countryId: string) => void;
  onToggleFavoriteFreelancer?: (freelancerId: string) => void;
  onSelectCountry?: (country: CountryInfo) => void;
  onCompareCountry?: (country: CountryInfo) => void;
}

interface ContractMilestone {
  id: string;
  contractTitle: string;
  clientName: string;
  clientCountry: string;
  freelancerName: string;
  freelancerCountry: string;
  amountUsd: number;
  rail: string;
  status: 'In Escrow' | 'Released' | 'Pending Audit' | 'Disputed';
  date: string;
  w8benStatus: 'Verified' | 'Pending' | 'Exempt';
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onExitAdmin,
  onOpenPublicTab,
  favoriteCountryIds = [],
  favoriteFreelancerIds = [],
  onToggleFavoriteCountry,
  onToggleFavoriteFreelancer,
  onSelectCountry,
  onCompareCountry
}) => {
  const [activeAdminTab, setActiveAdminTab] = useState<
    'overview' | 'countries' | 'freelancers' | 'contracts' | 'compliance' | 'settings' | 'favorites'
  >('overview');

  // Search & filter states
  const [countrySearch, setCountrySearch] = useState('');
  const [freelancerFilter, setFreelancerFilter] = useState<'All' | 'Verified' | 'Pending Review'>('All');
  const [freelancerSearch, setFreelancerSearch] = useState('');
  const [contractStatusFilter, setContractStatusFilter] = useState<string>('All');

  // Interactive mock state for contracts & escrow
  const [contracts, setContracts] = useState<ContractMilestone[]>([
    {
      id: 'CNT-9041',
      contractTitle: 'Next.js SaaS Enterprise Refactor',
      clientName: 'FreightPulse Logistics',
      clientCountry: 'United States',
      freelancerName: 'Aarav Sharma',
      freelancerCountry: 'India',
      amountUsd: 4800,
      rail: 'Wise (NEFT)',
      status: 'In Escrow',
      date: '2026-09-28',
      w8benStatus: 'Verified'
    },
    {
      id: 'CNT-9042',
      contractTitle: 'MedTech Clinical Analytics Design System',
      clientName: 'Aura Medical AG',
      clientCountry: 'Germany',
      freelancerName: 'Elena Rostova',
      freelancerCountry: 'Ukraine',
      amountUsd: 6500,
      rail: 'SEPA Reverse Charge',
      status: 'In Escrow',
      date: '2026-09-29',
      w8benStatus: 'Exempt'
    },
    {
      id: 'CNT-9043',
      contractTitle: '24/7 E-Commerce Operations Setup',
      clientName: 'Lumi Goods Corp',
      clientCountry: 'Australia',
      freelancerName: 'Camille Del Rosario',
      freelancerCountry: 'Philippines',
      amountUsd: 2200,
      rail: 'Wise Direct to BDO',
      status: 'Released',
      date: '2026-09-25',
      w8benStatus: 'Verified'
    },
    {
      id: 'CNT-9044',
      contractTitle: 'Algorithmic Financial Data Pipeline',
      clientName: 'Vanguard Alpha Fund',
      clientCountry: 'United Kingdom',
      freelancerName: 'Piotr Wisniewski',
      freelancerCountry: 'Poland',
      amountUsd: 8500,
      rail: 'SWIFT Institutional Wire',
      status: 'Pending Audit',
      date: '2026-09-30',
      w8benStatus: 'Pending'
    },
    {
      id: 'CNT-9045',
      contractTitle: 'Consumer Mobility Brand Overhaul',
      clientName: 'Arcadia Green Tech',
      clientCountry: 'Canada',
      freelancerName: 'Sofia Albarracín',
      freelancerCountry: 'Argentina',
      amountUsd: 3400,
      rail: 'Payoneer (Factura E)',
      status: 'In Escrow',
      date: '2026-09-27',
      w8benStatus: 'Verified'
    }
  ]);

  // Dynamic Country Dossiers state
  const [countriesList, setCountriesList] = useState<CountryInfo[]>(COUNTRIES_DATA);
  const [editingCountry, setEditingCountry] = useState<CountryInfo | null>(null);

  // Freelancer approvals state
  const [talentList, setTalentList] = useState<FreelancerProfile[]>(FREELANCERS_DATA);
  const [selectedTalentModal, setSelectedTalentModal] = useState<FreelancerProfile | null>(null);

  // Platform settings state
  const [platformSettings, setPlatformSettings] = useState({
    defaultPlatformFeePercent: 5.0,
    fxMarginBufferPercent: 0.5,
    autoApproveW8BEN: true,
    requireFIRCForIndia: true,
    payoutHoldingDays: 3,
    maintenanceMode: false
  });
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Handlers for contracts
  const handleReleaseEscrow = (id: string) => {
    setContracts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'Released' } : c))
    );
  };

  const handleHoldEscrow = (id: string) => {
    setContracts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'Pending Audit' } : c))
    );
  };

  const handleToggleTalentVerification = (id: string) => {
    setTalentList((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, verifiedCompliance: !t.verifiedCompliance } : t
      )
    );
  };

  const handleSaveCountryEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCountry) return;
    setCountriesList((prev) =>
      prev.map((c) => (c.id === editingCountry.id ? editingCountry : c))
    );
    setEditingCountry(null);
  };

  // Filtered queries
  const filteredCountries = countriesList.filter((c) =>
    c.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.code.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.region.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const filteredTalent = talentList.filter((t) => {
    const matchesQuery =
      t.name.toLowerCase().includes(freelancerSearch.toLowerCase()) ||
      t.country.toLowerCase().includes(freelancerSearch.toLowerCase()) ||
      t.title.toLowerCase().includes(freelancerSearch.toLowerCase());
    const matchesFilter =
      freelancerFilter === 'All' ||
      (freelancerFilter === 'Verified' && t.verifiedCompliance) ||
      (freelancerFilter === 'Pending Review' && !t.verifiedCompliance);
    return matchesQuery && matchesFilter;
  });

  const filteredContracts = contracts.filter((c) => {
    if (contractStatusFilter === 'All') return true;
    return c.status === contractStatusFilter;
  });

  // Calculate high-level financial KPIs
  const totalVolumeInEscrow = contracts
    .filter((c) => c.status === 'In Escrow')
    .reduce((acc, curr) => acc + curr.amountUsd, 0);

  const totalVolumeReleased = contracts
    .filter((c) => c.status === 'Released')
    .reduce((acc, curr) => acc + curr.amountUsd, 0);

  const verifiedTalentCount = talentList.filter((t) => t.verifiedCompliance).length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Admin Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onExitAdmin}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded border border-slate-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Public Site</span>
          </button>
          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-sm tracking-tight text-white font-display">
              GlobalFreelance Admin Console
            </span>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
              v2026.4
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="hidden md:flex items-center gap-4 text-slate-400">
            <span>Escrow Protected: <strong className="text-emerald-400 font-mono tabular-nums">${totalVolumeInEscrow.toLocaleString()}</strong></span>
            <span>Verified Talent: <strong className="text-white font-mono tabular-nums">{verifiedTalentCount}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[11px] font-bold text-slate-200">
              AD
            </div>
            <span className="hidden sm:inline font-medium text-slate-300">Operations Admin</span>
          </div>
        </div>
      </header>

      {/* Main Layout: Sidebar + Canvas */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Admin Sidebar Navigation */}
        <aside className="w-full md:w-60 bg-slate-950 border-r border-slate-800/80 p-3 shrink-0 flex md:flex-col justify-between overflow-x-auto">
          <div className="space-y-1 w-full flex md:flex-col gap-1 md:gap-0">
            {[
              { id: 'overview', label: 'Executive Metrics', icon: <LayoutDashboard className="w-4 h-4" /> },
              { id: 'countries', label: 'Country Dossiers', icon: <Globe2 className="w-4 h-4" /> },
              { id: 'freelancers', label: 'Talent & Verification', icon: <Users className="w-4 h-4" /> },
              { id: 'contracts', label: 'Contracts & Escrow', icon: <CreditCard className="w-4 h-4" /> },
              { id: 'compliance', label: 'Tax & W-8BEN Audits', icon: <FileCheck2 className="w-4 h-4" /> },
              { id: 'favorites', label: `My Favorites (${favoriteCountryIds.length + favoriteFreelancerIds.length})`, icon: <Heart className="w-4 h-4 text-rose-400" /> },
              { id: 'settings', label: 'System Settings', icon: <Settings className="w-4 h-4" /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveAdminTab(item.id as any)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                  activeAdminTab === item.id
                    ? 'bg-slate-800 text-white font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden md:block pt-4 border-t border-slate-900 mt-6 text-[11px] text-slate-500">
            <div>Global Freelance Operations</div>
            <div className="text-slate-600 mt-0.5">Enterprise Multi-Currency Clearing</div>
          </div>
        </aside>

        {/* Content Viewport */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-7xl">
          {/* TAB 1: EXECUTIVE OVERVIEW */}
          {activeAdminTab === 'overview' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Operations & Clearing Overview
                  </h1>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Real-time transaction settlement, worker verification status, and country regulatory health.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const csvContent =
                        'data:text/csv;charset=utf-8,ContractID,Client,Freelancer,Amount,Status\n' +
                        contracts.map((c) => `${c.id},${c.clientName},${c.freelancerName},${c.amountUsd},${c.status}`).join('\n');
                      const encodedUri = encodeURI(csvContent);
                      const link = document.createElement('a');
                      link.setAttribute('href', encodedUri);
                      link.setAttribute('download', 'operations_audit_report.csv');
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              {/* KPI Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Active Escrow Value</span>
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="mt-2 text-2xl font-bold font-mono text-white tabular-nums">
                    ${totalVolumeInEscrow.toLocaleString()}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-400">
                    <TrendingUp className="w-3 h-3" />
                    <span>+18.4% vs last month</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Settled Payouts</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="mt-2 text-2xl font-bold font-mono text-white tabular-nums">
                    ${totalVolumeReleased.toLocaleString()}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    34 transactions completed
                  </div>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Active Country Dossiers</span>
                    <Globe2 className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="mt-2 text-2xl font-bold font-mono text-white tabular-nums">
                    {countriesList.length}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    100% Tax Treaty coverage
                  </div>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Verified Talent Pool</span>
                    <ShieldAlert className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="mt-2 text-2xl font-bold font-mono text-white tabular-nums">
                    {verifiedTalentCount} / {talentList.length}
                  </div>
                  <div className="mt-1 text-[11px] text-emerald-400">
                    All Form W-8BEN signed
                  </div>
                </div>
              </div>

              {/* Two Column Layout: Recent Contracts & Regional Volume */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Recent Escrow Activity */}
                <div className="lg:col-span-8 p-5 bg-slate-950 border border-slate-800 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold font-display text-white">
                      Live Contracts & Escrow State
                    </h2>
                    <button
                      onClick={() => setActiveAdminTab('contracts')}
                      className="text-xs text-emerald-400 hover:text-emerald-300 hover:underline"
                    >
                      View All Contracts
                    </button>
                  </div>

                  <div className="border border-slate-800 rounded-lg overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                        <tr>
                          <th className="py-2.5 px-3">Contract</th>
                          <th className="py-2.5 px-3">Hiring Client</th>
                          <th className="py-2.5 px-3">Freelancer</th>
                          <th className="py-2.5 px-3">Amount</th>
                          <th className="py-2.5 px-3">Status</th>
                          <th className="py-2.5 px-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80">
                        {contracts.slice(0, 4).map((c) => (
                          <tr key={c.id} className="hover:bg-slate-900/50">
                            <td className="py-2.5 px-3 font-medium text-white max-w-[180px] truncate">
                              {c.contractTitle}
                            </td>
                            <td className="py-2.5 px-3 text-slate-400">
                              {c.clientName} ({c.clientCountry})
                            </td>
                            <td className="py-2.5 px-3 text-slate-300">
                              {c.freelancerName} ({c.freelancerCountry})
                            </td>
                            <td className="py-2.5 px-3 font-mono text-emerald-400 tabular-nums">
                              ${c.amountUsd.toLocaleString()}
                            </td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                  c.status === 'In Escrow'
                                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                                    : c.status === 'Released'
                                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                                    : 'bg-amber-950 text-amber-300 border border-amber-800'
                                }`}
                              >
                                {c.status}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-right">
                              {c.status === 'In Escrow' ? (
                                <button
                                  onClick={() => handleReleaseEscrow(c.id)}
                                  className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 underline"
                                >
                                  Release
                                </button>
                              ) : (
                                <span className="text-[11px] text-slate-500">Done</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Regional Settlement Breakdown */}
                <div className="lg:col-span-4 p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
                  <h2 className="text-sm font-bold font-display text-white">
                    Regional Volume Share
                  </h2>
                  <div className="space-y-3 text-xs">
                    {[
                      { region: 'Asia-Pacific (India, PH, VN)', share: 42, color: 'bg-blue-500' },
                      { region: 'Europe (Germany, UK, PL, UA)', share: 31, color: 'bg-emerald-500' },
                      { region: 'Latin America (Brazil, AR, MX)', share: 18, color: 'bg-amber-500' },
                      { region: 'Middle East & Africa (NG, UAE, ZA)', share: 9, color: 'bg-purple-500' }
                    ].map((reg, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-slate-300">
                          <span>{reg.region}</span>
                          <span className="font-mono font-semibold tabular-nums">{reg.share}%</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className={`h-full ${reg.color}`} style={{ width: `${reg.share}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                    Most popular settlement rails this month: <strong>Wise (64%)</strong>, <strong>Stripe Invoicing (22%)</strong>, <strong>Payoneer (14%)</strong>.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COUNTRY DOSSIERS MANAGER */}
          {activeAdminTab === 'countries' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Country Dossiers & Tax Framework Manager
                  </h1>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Maintain legal considerations, tax rates, standard local currencies, and average rate matrices.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      placeholder="Search countries..."
                      className="pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-md text-slate-200 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Countries Table */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="py-3 px-4">Country & Code</th>
                      <th className="py-3 px-4">Region</th>
                      <th className="py-3 px-4">Currency</th>
                      <th className="py-3 px-4">Dev Rate Range</th>
                      <th className="py-3 px-4">Tax Framework Summary</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredCountries.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-900/40">
                        <td className="py-3 px-4 font-semibold text-white flex items-center gap-2">
                          <span className="text-xl">{c.flag}</span>
                          <span>{c.country}</span>
                          <span className="text-[10px] font-mono text-slate-500">[{c.code}]</span>
                        </td>
                        <td className="py-3 px-4 text-slate-400">{c.region}</td>
                        <td className="py-3 px-4 text-slate-300 font-mono">
                          {c.currencyCode} ({c.currencySymbol})
                        </td>
                        <td className="py-3 px-4 font-mono font-medium text-emerald-400 tabular-nums">
                          {c.averageRates[0]?.hourlyUsd || 'Varies'}
                        </td>
                        <td className="py-3 px-4 text-slate-400 max-w-xs truncate" title={c.freelancerTaxes}>
                          {c.freelancerTaxes}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => setEditingCountry(c)}
                            className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold"
                          >
                            <Edit className="w-3.5 h-3.5" />
                            <span>Edit Rules</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Edit Country Modal */}
              {editingCountry && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-xl p-6 shadow-2xl text-slate-200 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{editingCountry.flag}</span>
                        <h3 className="text-base font-bold font-display text-white">
                          Edit {editingCountry.country} Regulations & Rates
                        </h3>
                      </div>
                      <button
                        onClick={() => setEditingCountry(null)}
                        className="text-slate-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>

                    <form onSubmit={handleSaveCountryEdit} className="space-y-4 text-xs">
                      <div>
                        <label className="block text-slate-400 mb-1">Freelancer Tax Overview</label>
                        <textarea
                          rows={3}
                          value={editingCountry.freelancerTaxes}
                          onChange={(e) =>
                            setEditingCountry({ ...editingCountry, freelancerTaxes: e.target.value })
                          }
                          className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded text-slate-200 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 mb-1">Legal Considerations</label>
                        <textarea
                          rows={3}
                          value={editingCountry.legalConsiderations}
                          onChange={(e) =>
                            setEditingCountry({ ...editingCountry, legalConsiderations: e.target.value })
                          }
                          className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded text-slate-200 focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-400 mb-1">Currency Code</label>
                          <input
                            type="text"
                            value={editingCountry.currencyCode}
                            onChange={(e) =>
                              setEditingCountry({ ...editingCountry, currencyCode: e.target.value })
                            }
                            className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">Timezone</label>
                          <input
                            type="text"
                            value={editingCountry.timezone}
                            onChange={(e) =>
                              setEditingCountry({ ...editingCountry, timezone: e.target.value })
                            }
                            className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                        <button
                          type="button"
                          onClick={() => setEditingCountry(null)}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 rounded text-white font-semibold"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TALENT & VERIFICATION */}
          {activeAdminTab === 'freelancers' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Talent & Worker Verification Queue
                  </h1>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Audit freelancer certifications, Form W-8BEN filings, portfolio claims, and active status.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-slate-950 p-1 border border-slate-800 rounded-lg text-xs">
                    {(['All', 'Verified', 'Pending Review'] as const).map((status) => (
                      <button
                        key={status}
                        onClick={() => setFreelancerFilter(status)}
                        className={`px-2.5 py-1 rounded transition-colors ${
                          freelancerFilter === status
                            ? 'bg-slate-800 text-white font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    value={freelancerSearch}
                    onChange={(e) => setFreelancerSearch(e.target.value)}
                    placeholder="Search talent..."
                    className="px-3 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-md text-slate-200 focus:outline-none"
                  />
                </div>
              </div>

              {/* Talent Table */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="py-3 px-4">Freelancer Name</th>
                      <th className="py-3 px-4">Primary Specialty</th>
                      <th className="py-3 px-4">Location</th>
                      <th className="py-3 px-4">Rate (USD)</th>
                      <th className="py-3 px-4">Compliance Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredTalent.map((t) => (
                      <tr key={t.id} className="hover:bg-slate-900/40">
                        <td className="py-3 px-4">
                          <div className="font-semibold text-white">{t.name}</div>
                          <div className="text-[11px] text-slate-500">{t.experienceYears}y experience · {t.rating}★</div>
                        </td>
                        <td className="py-3 px-4 text-slate-300 font-medium">{t.primaryService}</td>
                        <td className="py-3 px-4 text-slate-400">
                          {t.flag} {t.city}, {t.country}
                        </td>
                        <td className="py-3 px-4 font-mono text-emerald-400 tabular-nums">
                          ${t.hourlyRateUsd}/hr
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${
                              t.verifiedCompliance
                                ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                                : 'bg-amber-950/80 text-amber-300 border border-amber-800'
                            }`}
                          >
                            {t.verifiedCompliance ? (
                              <>
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                <span>Verified & W-8BEN Active</span>
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="w-3 h-3 text-amber-400" />
                                <span>Pending Documents</span>
                              </>
                            )}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => handleToggleTalentVerification(t.id)}
                            className={`text-xs font-semibold px-2.5 py-1 rounded transition-colors ${
                              t.verifiedCompliance
                                ? 'text-amber-400 hover:text-amber-300 hover:bg-slate-900'
                                : 'text-emerald-400 hover:text-emerald-300 hover:bg-slate-900'
                            }`}
                          >
                            {t.verifiedCompliance ? 'Revoke / Audit' : 'Approve Verification'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: CONTRACTS & ESCROW */}
          {activeAdminTab === 'contracts' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Active Contracts & Escrow Settlements
                  </h1>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Monitor multi-currency milestone holds, dispute locks, and international payout execution.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Filter status:</span>
                  <select
                    value={contractStatusFilter}
                    onChange={(e) => setContractStatusFilter(e.target.value)}
                    className="p-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-slate-200 focus:outline-none"
                  >
                    <option value="All">All Statuses</option>
                    <option value="In Escrow">In Escrow</option>
                    <option value="Released">Released</option>
                    <option value="Pending Audit">Pending Audit</option>
                  </select>
                </div>
              </div>

              {/* Full Contracts Table */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="py-3 px-4">Contract ID & Scope</th>
                      <th className="py-3 px-4">Hiring Entity</th>
                      <th className="py-3 px-4">Independent Contractor</th>
                      <th className="py-3 px-4">Milestone (USD)</th>
                      <th className="py-3 px-4">Clearing Rail</th>
                      <th className="py-3 px-4">Escrow Status</th>
                      <th className="py-3 px-4 text-right">Audit Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredContracts.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-900/40">
                        <td className="py-3 px-4">
                          <div className="font-bold text-white font-mono text-[11px]">{c.id}</div>
                          <div className="text-slate-300 font-medium mt-0.5">{c.contractTitle}</div>
                        </td>
                        <td className="py-3 px-4 text-slate-400">
                          {c.clientName}
                          <div className="text-[10px] text-slate-500">{c.clientCountry}</div>
                        </td>
                        <td className="py-3 px-4 text-slate-300">
                          {c.freelancerName}
                          <div className="text-[10px] text-slate-500">{c.freelancerCountry}</div>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-emerald-400 text-sm tabular-nums">
                          ${c.amountUsd.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-slate-400">{c.rail}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                              c.status === 'In Escrow'
                                ? 'bg-blue-950 text-blue-300 border border-blue-800'
                                : c.status === 'Released'
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                                : 'bg-amber-950 text-amber-300 border border-amber-800'
                            }`}
                          >
                            {c.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          {c.status === 'In Escrow' && (
                            <>
                              <button
                                onClick={() => handleReleaseEscrow(c.id)}
                                className="px-2 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[11px] font-semibold transition-colors"
                              >
                                Release Escrow
                              </button>
                              <button
                                onClick={() => handleHoldEscrow(c.id)}
                                className="px-2 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded text-[11px] font-semibold transition-colors"
                              >
                                Hold
                              </button>
                            </>
                          )}
                          {c.status === 'Pending Audit' && (
                            <button
                              onClick={() => handleReleaseEscrow(c.id)}
                              className="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[11px] font-semibold transition-colors"
                            >
                              Clear Audit
                            </button>
                          )}
                          {c.status === 'Released' && (
                            <span className="text-slate-500 text-[11px]">Settled</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: TAX & W-8BEN COMPLIANCE AUDITS */}
          {activeAdminTab === 'compliance' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Cross-Border Tax & Legal Compliance Audit
                  </h1>
                  <p className="text-xs text-slate-400 mt-0.5">
                    IRS Form W-8BEN retention vault, EU VAT Reverse Charge verification logs, and contractor misclassification scans.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>W-8BEN Vault Status</span>
                    <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-white tabular-nums">98.2%</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Foreign non-resident declarations valid through December 31, 2029. Zero 30% IRS backup withholding exposure.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>VIES EU VAT Invoicing</span>
                    <ShieldAlert className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-white tabular-nums">100% Valid</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    All cross-border EU service invoices validated against European Commission VIES database for reverse charge.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Misclassification Risk Index</span>
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">0 High Risk</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    All contracts evaluated against Right to Control tests; deliverable-based SOW structures enforced.
                  </p>
                </div>
              </div>

              {/* Compliance Table */}
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                <h3 className="text-sm font-bold font-display text-white">
                  Compliance Document Archive (Audit-Ready)
                </h3>
                <div className="border border-slate-800 rounded-lg overflow-x-auto text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                      <tr>
                        <th className="py-2.5 px-3">Contractor</th>
                        <th className="py-2.5 px-3">Jurisdiction</th>
                        <th className="py-2.5 px-3">Document Type</th>
                        <th className="py-2.5 px-3">Filing Date</th>
                        <th className="py-2.5 px-3">Expiry Date</th>
                        <th className="py-2.5 px-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {[
                        { name: 'Aarav Sharma', country: 'India', doc: 'Form W-8BEN + LUT 0% GST', filed: '2026-01-14', expires: '2029-12-31', status: 'Active & Verified' },
                        { name: 'Elena Rostova', country: 'Ukraine', doc: 'FOP Group 3 Registration Vouch', filed: '2026-02-10', expires: 'Ongoing', status: 'Active & Verified' },
                        { name: 'Mateo Silva', country: 'Brazil', doc: 'Nota Fiscal NFS-e + Form W-8BEN-E', filed: '2026-03-01', expires: '2029-12-31', status: 'Active & Verified' },
                        { name: 'Camille Del Rosario', country: 'Philippines', doc: 'Form W-8BEN (BIR Form 2303)', filed: '2026-02-18', expires: '2029-12-31', status: 'Active & Verified' }
                      ].map((doc, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/40">
                          <td className="py-2.5 px-3 font-medium text-white">{doc.name}</td>
                          <td className="py-2.5 px-3 text-slate-400">{doc.country}</td>
                          <td className="py-2.5 px-3 text-slate-300 font-mono text-[11px]">{doc.doc}</td>
                          <td className="py-2.5 px-3 text-slate-400">{doc.filed}</td>
                          <td className="py-2.5 px-3 text-slate-400">{doc.expires}</td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="text-emerald-400 font-semibold">{doc.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SETTINGS */}
          {activeAdminTab === 'settings' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Platform Operations & Clearing Configuration
                </h1>
                <p className="text-xs text-slate-400 mt-0.5">
                  Set default marketplace take rates, currency spread buffers, and automated compliance triggers.
                </p>
              </div>

              {settingsSaved && (
                <div className="p-3 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-lg text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Platform configuration updated successfully. Applied to all incoming contract runs.</span>
                </div>
              )}

              <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">
                      Client Marketplace Fee (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={platformSettings.defaultPlatformFeePercent}
                      onChange={(e) =>
                        setPlatformSettings({
                          ...platformSettings,
                          defaultPlatformFeePercent: parseFloat(e.target.value) || 0
                        })
                      }
                      className="w-full p-2 bg-slate-900 border border-slate-700 rounded text-white font-mono"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Standard fee billed to clients on funded contracts.
                    </p>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">
                      FX Margin Spread Buffer (%)
                    </label>
                    <input
                      type="number"
                      step="0.05"
                      value={platformSettings.fxMarginBufferPercent}
                      onChange={(e) =>
                        setPlatformSettings({
                          ...platformSettings,
                          fxMarginBufferPercent: parseFloat(e.target.value) || 0
                        })
                      }
                      className="w-full p-2 bg-slate-900 border border-slate-700 rounded text-white font-mono"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Buffer absorbed to guarantee mid-market Reuters rates.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Auto-Verify Standard Form W-8BEN</div>
                      <div className="text-slate-500 text-[11px]">
                        Automatically approve valid W-8BEN submissions with matching passport/TIN names.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={platformSettings.autoApproveW8BEN}
                      onChange={(e) =>
                        setPlatformSettings({ ...platformSettings, autoApproveW8BEN: e.target.checked })
                      }
                      className="accent-blue-600 w-4 h-4 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Enforce Mandatory FIRC Certificate for India Remittances</div>
                      <div className="text-slate-500 text-[11px]">
                        Hold automated clearing until bank purpose code and FIRC certificate is generated.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={platformSettings.requireFIRCForIndia}
                      onChange={(e) =>
                        setPlatformSettings({ ...platformSettings, requireFIRCForIndia: e.target.checked })
                      }
                      className="accent-blue-600 w-4 h-4 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      setSettingsSaved(true);
                      setTimeout(() => setSettingsSaved(false), 3000);
                    }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white font-semibold transition-colors"
                  >
                    Save Operational Settings
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: MY FAVORITES WATCHLIST */}
          {activeAdminTab === 'favorites' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold font-display text-white">
                    My Favorites & Saved Watchlist
                  </h1>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Saved countries and freelance profiles pinned for quick access, rate calculation, and contract initiation.
                  </p>
                </div>
              </div>

              {/* Saved Countries Section */}
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-blue-400" />
                    <h2 className="text-sm font-bold font-display text-white">
                      Saved Countries ({COUNTRIES_DATA.filter((c) => favoriteCountryIds.includes(c.id)).length})
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveAdminTab('countries')}
                    className="text-xs text-blue-400 hover:underline"
                  >
                    Browse All Countries →
                  </button>
                </div>

                {COUNTRIES_DATA.filter((c) => favoriteCountryIds.includes(c.id)).length === 0 ? (
                  <p className="text-xs text-slate-500 py-4 text-center">
                    No saved countries in your watchlist. Bookmark countries from the Country Dossiers tab or public directory.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {COUNTRIES_DATA.filter((c) => favoriteCountryIds.includes(c.id)).map((c) => (
                      <div
                        key={c.id}
                        className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{c.flag}</span>
                              <div>
                                <h3 className="text-sm font-bold text-white">{c.country}</h3>
                                <div className="text-[11px] text-slate-400">{c.currency} · {c.region}</div>
                              </div>
                            </div>
                            {onToggleFavoriteCountry && (
                              <button
                                onClick={() => onToggleFavoriteCountry(c.id)}
                                className="p-1 text-rose-500 hover:text-slate-400"
                                title="Remove from favorites"
                              >
                                <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                              </button>
                            )}
                          </div>
                          <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-800 text-slate-300">
                            <span>Dev Average: <strong className="font-mono text-emerald-400">{c.averageRates[0]?.hourlyUsd || 'Varies'}</strong></span>
                            <span>Timezone: {c.timezone}</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-2 border-t border-slate-800 flex justify-end gap-2">
                          {onSelectCountry && (
                            <button
                              onClick={() => {
                                onExitAdmin();
                                onSelectCountry(c);
                              }}
                              className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                            >
                              View Full Dossier
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Saved Freelancers Section */}
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <h2 className="text-sm font-bold font-display text-white">
                      Saved Freelance Profiles ({FREELANCERS_DATA.filter((f) => favoriteFreelancerIds.includes(f.id)).length})
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveAdminTab('freelancers')}
                    className="text-xs text-blue-400 hover:underline"
                  >
                    Browse Verification Queue →
                  </button>
                </div>

                {FREELANCERS_DATA.filter((f) => favoriteFreelancerIds.includes(f.id)).length === 0 ? (
                  <p className="text-xs text-slate-500 py-4 text-center">
                    No freelance profiles bookmarked. Bookmark talent from the Talent tab or public directory.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {FREELANCERS_DATA.filter((f) => favoriteFreelancerIds.includes(f.id)).map((f) => (
                      <div
                        key={f.id}
                        className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-2.5">
                              <div className="w-9 h-9 rounded-full bg-slate-800 font-bold text-xs flex items-center justify-center text-white">
                                {f.name.split(' ').map((n) => n[0]).join('')}
                              </div>
                              <div>
                                <h3 className="text-sm font-bold text-white">{f.name}</h3>
                                <div className="text-[11px] text-slate-400">{f.title} · {f.flag} {f.country}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {onToggleFavoriteFreelancer && (
                                <button
                                  onClick={() => onToggleFavoriteFreelancer(f.id)}
                                  className="p-1 text-rose-500 hover:text-slate-400"
                                  title="Remove from favorites"
                                >
                                  <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                                </button>
                              )}
                              <span className="font-mono font-bold text-emerald-400 text-xs">${f.hourlyRateUsd}/hr</span>
                            </div>
                          </div>
                          <p className="mt-2.5 text-xs text-slate-400 line-clamp-2">{f.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
