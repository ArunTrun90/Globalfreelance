import React, { useState } from 'react';
import { Menu, X, Calculator, PlusCircle, Shield, LogOut, User, Heart } from 'lucide-react';
import { AuthUser } from './auth/AuthGate';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCalculator: () => void;
  onOpenPostJob: () => void;
  onOpenAdmin: () => void;
  currentUser: AuthUser | null;
  onSignOut: () => void;
  favoritesCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenCalculator,
  onOpenPostJob,
  onOpenAdmin,
  currentUser,
  onSignOut,
  favoritesCount = 0
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'countries', label: 'Countries' },
    { id: 'favorites', label: `My Favorites${favoritesCount > 0 ? ` (${favoritesCount})` : ''}` },
    { id: 'creator', label: 'Website Creator' },
    { id: 'services', label: 'Services' },
    { id: 'freelancers', label: 'Talent' },
    { id: 'hiring', label: 'Business Hiring' },
    { id: 'taxes', label: 'Tax & Legal' },
    { id: 'payments', label: 'Payments' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'resources', label: 'Resources' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl font-bold tracking-tight text-slate-900 font-display hover:text-emerald-700 transition-colors text-left flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-xs shadow-emerald-500/50" />
            <span>Global<span className="text-emerald-600">Freelance</span></span>
          </button>

          {/* Zone 2: Clean navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-1 relative whitespace-nowrap ${
                  activeTab === item.id
                    ? 'text-emerald-800 font-semibold'
                    : 'text-slate-600 hover:text-emerald-700'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions + user profile & logout */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => handleNavClick('favorites')}
              className={`inline-flex items-center gap-1 px-2 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap border ${
                activeTab === 'favorites'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-slate-100 hover:bg-slate-200/80 border-slate-200/80 text-slate-700 hover:text-slate-950'
              }`}
              title="My Favorites & Watchlist"
            >
              <Heart className={`w-3.5 h-3.5 ${favoritesCount > 0 ? 'fill-emerald-600 text-emerald-600' : 'text-slate-400'}`} />
              <span>Favorites{favoritesCount > 0 ? ` (${favoritesCount})` : ''}</span>
            </button>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-800 bg-slate-100 hover:bg-emerald-50 rounded-md transition-colors whitespace-nowrap border border-slate-200/80"
              title="Open Operations Admin Console"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Admin</span>
            </button>
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-md transition-colors whitespace-nowrap"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Calculator</span>
            </button>
            <button
              onClick={onOpenPostJob}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors whitespace-nowrap shadow-xs"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Post Project</span>
            </button>

            {currentUser && (
              <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200">
                <div className="text-right leading-tight hidden xl:block">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1 justify-end">
                    <span>{currentUser.countryFlag}</span>
                    <span className="truncate max-w-[110px]">{currentUser.name}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                    {currentUser.role}
                  </div>
                </div>
                <button
                  onClick={onSignOut}
                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAdmin}
              className="p-1.5 text-slate-700 hover:text-emerald-700 rounded-md bg-slate-100 border border-slate-200"
              title="Admin Console"
            >
              <Shield className="w-4 h-4 text-emerald-600" />
            </button>
            <button
              onClick={onOpenCalculator}
              className="p-1.5 text-slate-600 hover:text-slate-900 rounded-md bg-slate-100"
              title="Rate Calculator"
            >
              <Calculator className="w-4 h-4" />
            </button>
            {currentUser && (
              <button
                onClick={onSignOut}
                className="p-1.5 text-slate-500 hover:text-red-600 rounded-md bg-slate-100"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-950 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {currentUser && (
            <div className="p-3 mb-2 bg-emerald-50/60 rounded-lg flex items-center justify-between border border-emerald-100 text-xs">
              <div>
                <div className="font-bold text-slate-900 flex items-center gap-1">
                  <span>{currentUser.countryFlag}</span>
                  <span>{currentUser.name}</span>
                </div>
                <div className="text-[11px] text-slate-500">{currentUser.email} · {currentUser.role}</div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSignOut();
                }}
                className="text-xs text-red-600 font-semibold hover:underline"
              >
                Sign Out
              </button>
            </div>
          )}

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                activeTab === item.id
                  ? 'bg-emerald-50 font-semibold text-emerald-900'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full py-2 text-center text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md border border-slate-200"
            >
              Admin Operations Console
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPostJob();
              }}
              className="w-full py-2 text-center text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md shadow-xs"
            >
              Post a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
