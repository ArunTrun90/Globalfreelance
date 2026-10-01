import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CountriesSection } from './components/CountriesSection';
import { CountryDetailModal } from './components/CountryDetailModal';
import { CountryCompareModal } from './components/CountryCompareModal';
import { ServicesSection } from './components/ServicesSection';
import { FreelancersSection } from './components/FreelancersSection';
import { BusinessHiringSection } from './components/BusinessHiringSection';
import { TaxLegalSection } from './components/TaxLegalSection';
import { PaymentsSection } from './components/PaymentsSection';
import { PlatformsSection } from './components/PlatformsSection';
import { JobsSection } from './components/JobsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { RateCalculatorModal } from './components/RateCalculatorModal';
import { PostJobModal } from './components/PostJobModal';
import { WebsiteCreatorSection } from './components/WebsiteCreatorSection';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { FavoritesSection } from './components/FavoritesSection';
import { AuthGate, AuthUser } from './components/auth/AuthGate';
import { Footer } from './components/Footer';
import { CountryInfo } from './data/countriesData';
import { JobListing } from './data/jobsData';

export default function App() {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    try {
      const stored = localStorage.getItem('globalfreelance_auth_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Favorite countries and freelancers state
  const [favoriteCountryIds, setFavoriteCountryIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('globalfreelance_favorite_countries');
      return stored ? JSON.parse(stored) : ['india', 'germany'];
    } catch {
      return ['india', 'germany'];
    }
  });

  const [favoriteFreelancerIds, setFavoriteFreelancerIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('globalfreelance_favorite_freelancers');
      return stored ? JSON.parse(stored) : ['fl-1', 'fl-2'];
    } catch {
      return ['fl-1', 'fl-2'];
    }
  });

  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(null);
  const [compareCountry, setCompareCountry] = useState<CountryInfo | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [calculatorCountry, setCalculatorCountry] = useState<CountryInfo | null>(null);
  const [isPostJobOpen, setIsPostJobOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [customJobs, setCustomJobs] = useState<JobListing[]>([]);

  const handleToggleFavoriteCountry = (countryId: string) => {
    setFavoriteCountryIds((prev) => {
      const updated = prev.includes(countryId)
        ? prev.filter((id) => id !== countryId)
        : [...prev, countryId];
      try {
        localStorage.setItem('globalfreelance_favorite_countries', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleToggleFavoriteFreelancer = (freelancerId: string) => {
    setFavoriteFreelancerIds((prev) => {
      const updated = prev.includes(freelancerId)
        ? prev.filter((id) => id !== freelancerId)
        : [...prev, freelancerId];
      try {
        localStorage.setItem('globalfreelance_favorite_freelancers', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleSignOut = () => {
    localStorage.removeItem('globalfreelance_auth_user');
    setCurrentUser(null);
  };

  // Sign In / Sign Up Gate before opening website
  if (!currentUser) {
    return <AuthGate onAuthenticated={(user) => setCurrentUser(user)} />;
  }

  // Search handler from Hero
  const handleHeroSearch = (query: string) => {
    setSearchQuery(query);
    setActiveTab('countries');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleOpenCalculatorWithCountry = (country: CountryInfo) => {
    setCalculatorCountry(country);
    setIsCalculatorOpen(true);
  };

  const handleCompareCountry = (country: CountryInfo) => {
    setCompareCountry(country);
  };

  const handleJobCreated = (newJob: JobListing) => {
    setCustomJobs((prev) => [newJob, ...prev]);
    setActiveTab('jobs');
  };

  if (activeTab === 'admin') {
    return (
      <AdminDashboard
        onExitAdmin={() => {
          setActiveTab('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPublicTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        favoriteCountryIds={favoriteCountryIds}
        favoriteFreelancerIds={favoriteFreelancerIds}
        onToggleFavoriteCountry={handleToggleFavoriteCountry}
        onToggleFavoriteFreelancer={handleToggleFavoriteFreelancer}
        onSelectCountry={setSelectedCountry}
        onCompareCountry={handleCompareCountry}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased">
      {/* Top Bar Contract (3 zones) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCalculator={() => {
          setCalculatorCountry(null);
          setIsCalculatorOpen(true);
        }}
        onOpenPostJob={() => setIsPostJobOpen(true)}
        onOpenAdmin={() => {
          setActiveTab('admin');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentUser={currentUser}
        onSignOut={handleSignOut}
        favoritesCount={favoriteCountryIds.length + favoriteFreelancerIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              onSearch={handleHeroSearch}
              onExploreCountries={() => {
                setActiveTab('countries');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreHiring={() => {
                setActiveTab('hiring');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenCalculator={() => {
                setCalculatorCountry(null);
                setIsCalculatorOpen(true);
              }}
              onOpenCreator={() => {
                setActiveTab('creator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Business Website Creator Studio Showcase */}
            <WebsiteCreatorSection />

            {/* Countries preview */}
            <CountriesSection
              onSelectCountry={setSelectedCountry}
              onCompareCountry={handleCompareCountry}
              searchFilter={searchQuery}
              favoriteCountryIds={favoriteCountryIds}
              onToggleFavoriteCountry={handleToggleFavoriteCountry}
            />

            {/* Services showcase */}
            <ServicesSection
              onExploreTalent={() => {
                setActiveTab('freelancers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Business Hiring Playbook */}
            <BusinessHiringSection
              onOpenCalculator={() => {
                setCalculatorCountry(null);
                setIsCalculatorOpen(true);
              }}
              onOpenPostJob={() => setIsPostJobOpen(true)}
              onExploreTaxes={() => {
                setActiveTab('taxes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Verified Freelancers */}
            <FreelancersSection
              favoriteFreelancerIds={favoriteFreelancerIds}
              onToggleFavoriteFreelancer={handleToggleFavoriteFreelancer}
            />

            {/* Payment Rails */}
            <PaymentsSection />

            {/* Legal & Taxes */}
            <TaxLegalSection />

            {/* Platforms */}
            <PlatformsSection />

            {/* Open Jobs */}
            <JobsSection
              onOpenPostJob={() => setIsPostJobOpen(true)}
              customJobs={customJobs}
            />

            {/* Knowledge Resources */}
            <ResourcesSection />
          </>
        )}

        {activeTab === 'countries' && (
          <div className="pt-4">
            <CountriesSection
              onSelectCountry={setSelectedCountry}
              onCompareCountry={handleCompareCountry}
              searchFilter={searchQuery}
              favoriteCountryIds={favoriteCountryIds}
              onToggleFavoriteCountry={handleToggleFavoriteCountry}
            />
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className="pt-4">
            <FavoritesSection
              favoriteCountryIds={favoriteCountryIds}
              favoriteFreelancerIds={favoriteFreelancerIds}
              onToggleFavoriteCountry={handleToggleFavoriteCountry}
              onToggleFavoriteFreelancer={handleToggleFavoriteFreelancer}
              onSelectCountry={setSelectedCountry}
              onCompareCountry={handleCompareCountry}
              onOpenCalculatorForCountry={handleOpenCalculatorWithCountry}
              onExploreCountries={() => {
                setActiveTab('countries');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreTalent={() => {
                setActiveTab('freelancers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'creator' && (
          <div className="pt-4">
            <WebsiteCreatorSection />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-4">
            <ServicesSection
              onExploreTalent={() => {
                setActiveTab('freelancers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'freelancers' && (
          <div className="pt-4">
            <FreelancersSection
              favoriteFreelancerIds={favoriteFreelancerIds}
              onToggleFavoriteFreelancer={handleToggleFavoriteFreelancer}
            />
          </div>
        )}

        {activeTab === 'hiring' && (
          <div className="pt-4">
            <BusinessHiringSection
              onOpenCalculator={() => {
                setCalculatorCountry(null);
                setIsCalculatorOpen(true);
              }}
              onOpenPostJob={() => setIsPostJobOpen(true)}
              onExploreTaxes={() => {
                setActiveTab('taxes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'taxes' && (
          <div className="pt-4">
            <TaxLegalSection />
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="pt-4">
            <PaymentsSection />
          </div>
        )}

        {activeTab === 'platforms' && (
          <div className="pt-4">
            <PlatformsSection />
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="pt-4">
            <JobsSection
              onOpenPostJob={() => setIsPostJobOpen(true)}
              customJobs={customJobs}
            />
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="pt-4">
            <ResourcesSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={(tabId) => {
          setActiveTab(tabId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCalculator={() => {
          setCalculatorCountry(null);
          setIsCalculatorOpen(true);
        }}
        onOpenPostJob={() => setIsPostJobOpen(true)}
      />

      {/* Global Modals */}
      {selectedCountry && (
        <CountryDetailModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
          onOpenCalculatorForCountry={handleOpenCalculatorWithCountry}
          onCompareWith={handleCompareCountry}
          isFavorited={favoriteCountryIds.includes(selectedCountry.id)}
          onToggleFavorite={() => handleToggleFavoriteCountry(selectedCountry.id)}
        />
      )}

      {compareCountry && (
        <CountryCompareModal
          initialCountryA={compareCountry}
          onClose={() => setCompareCountry(null)}
        />
      )}

      {isCalculatorOpen && (
        <RateCalculatorModal
          initialCountry={calculatorCountry}
          onClose={() => {
            setIsCalculatorOpen(false);
            setCalculatorCountry(null);
          }}
          onPostProject={() => setIsPostJobOpen(true)}
        />
      )}

      {isPostJobOpen && (
        <PostJobModal
          onClose={() => setIsPostJobOpen(false)}
          onJobCreated={handleJobCreated}
        />
      )}
    </div>
  );
}
