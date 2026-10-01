import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Mail,
  User,
  Globe2,
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle2,
  Building,
  Briefcase
} from 'lucide-react';
import { COUNTRIES_DATA } from '../../data/countriesData';
import heroImg from '../../assets/images/hero_global_freelance_1790847104550.jpg';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'freelancer' | 'admin';
  country: string;
  countryFlag: string;
  companyOrTitle?: string;
}

interface AuthGateProps {
  onAuthenticated: (user: AuthUser) => void;
}

export const AuthGate: React.FC<AuthGateProps> = ({ onAuthenticated }) => {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetSent, setResetSent] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Sign In Form State
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Sign Up Form State
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpRole, setSignUpRole] = useState<'client' | 'freelancer'>('client');
  const [signUpCountry, setSignUpCountry] = useState('India');
  const [companyOrTitle, setCompanyOrTitle] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Quick Demo Access Handler
  const handleQuickLogin = (role: 'client' | 'freelancer' | 'admin') => {
    setLoading(true);
    setTimeout(() => {
      let demoUser: AuthUser;
      if (role === 'client') {
        demoUser = {
          id: 'user_client_demo',
          name: 'Sarah Jenkins',
          email: 'sarah.jenkins@freightpulse.com',
          role: 'client',
          country: 'United States',
          countryFlag: '🇺🇸',
          companyOrTitle: 'FreightPulse Logistics Inc.'
        };
      } else if (role === 'freelancer') {
        demoUser = {
          id: 'user_freelancer_demo',
          name: 'Aarav Sharma',
          email: 'aarav.sharma@cloudtech.in',
          role: 'freelancer',
          country: 'India',
          countryFlag: '🇮🇳',
          companyOrTitle: 'Senior Full-Stack Architect'
        };
      } else {
        demoUser = {
          id: 'user_admin_demo',
          name: 'Operations Administrator',
          email: 'admin@globalfreelance.org',
          role: 'admin',
          country: 'Global Clearing Hub',
          countryFlag: '🌐',
          companyOrTitle: 'Operations & Settlement Lead'
        };
      }

      if (rememberMe) {
        localStorage.setItem('globalfreelance_auth_user', JSON.stringify(demoUser));
      }
      setLoading(false);
      onAuthenticated(demoUser);
    }, 400);
  };

  // Sign In Submit
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!signInEmail || !signInEmail.includes('@')) {
      setError('Please provide a valid email address');
      return;
    }
    if (!signInPassword || signInPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Create user session
      const user: AuthUser = {
        id: `usr_${Date.now()}`,
        name: signInEmail.split('@')[0].replace(/[._]/g, ' '),
        email: signInEmail,
        role: signInEmail.includes('admin') ? 'admin' : 'client',
        country: 'United States',
        countryFlag: '🇺🇸',
        companyOrTitle: 'Verified Enterprise Client'
      };

      if (rememberMe) {
        localStorage.setItem('globalfreelance_auth_user', JSON.stringify(user));
      }
      setLoading(false);
      onAuthenticated(user);
    }, 500);
  };

  // Sign Up Submit
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!signUpName.trim()) {
      setError('Full legal name is required');
      return;
    }
    if (!signUpEmail || !signUpEmail.includes('@')) {
      setError('Valid email address is required');
      return;
    }
    if (!signUpPassword || signUpPassword.length < 6) {
      setError('Password must contain at least 6 characters');
      return;
    }
    if (!agreeTerms) {
      setError('You must accept the terms and tax compliance declaration');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const selectedC = COUNTRIES_DATA.find((c) => c.country === signUpCountry) || COUNTRIES_DATA[0];
      const newUser: AuthUser = {
        id: `usr_${Date.now()}`,
        name: signUpName.trim(),
        email: signUpEmail.trim(),
        role: signUpRole,
        country: selectedC.country,
        countryFlag: selectedC.flag,
        companyOrTitle: companyOrTitle.trim() || (signUpRole === 'client' ? 'Business Client' : 'Independent Specialist')
      };

      localStorage.setItem('globalfreelance_auth_user', JSON.stringify(newUser));
      setLoading(false);
      onAuthenticated(newUser);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background Ambience with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Global workspace"
          className="w-full h-full object-cover opacity-20 filter grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-900/80" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Brand Lockup */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/80 border border-emerald-800/80 rounded-full text-xs font-semibold text-emerald-400 mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Secure Cross-Border Access Portal</span>
          </div>
          <h1 className="text-3xl font-bold font-display tracking-tight text-white flex items-center justify-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-xs shadow-emerald-500/50" />
            <span>Global<span className="text-emerald-400">Freelance</span></span>
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
            Cross-Border Freelance Intelligence, Tax Frameworks & Global Talent Directory
          </p>
        </div>

        {/* Auth Card Container */}
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8">
          {/* Segmented Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg mb-6 border border-slate-800/80 text-xs">
            <button
              type="button"
              onClick={() => {
                setAuthMode('signin');
                setError(null);
              }}
              className={`flex-1 py-2 rounded-md font-semibold transition-all ${
                authMode === 'signin'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthMode('signup');
                setError(null);
              }}
              className={`flex-1 py-2 rounded-md font-semibold transition-all ${
                authMode === 'signup'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Error Message banner */}
          {error && (
            <div className="mb-4 p-2.5 bg-red-950/80 border border-red-800 text-red-300 rounded-lg text-xs">
              {error}
            </div>
          )}

          {/* SIGN IN FORM */}
          {authMode === 'signin' && (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-300">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-[11px] text-emerald-400 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-9 pr-9 py-2 text-xs bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="accent-emerald-600 rounded"
                  />
                  <span>Keep me signed in</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                {loading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Sign In to GlobalFreelance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* SIGN UP FORM */}
          {authMode === 'signup' && (
            <form onSubmit={handleSignUp} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Legal Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={signUpName}
                    onChange={(e) => setSignUpName(e.target.value)}
                    placeholder="e.g. David Vance"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Account Role
                  </label>
                  <select
                    value={signUpRole}
                    onChange={(e) => setSignUpRole(e.target.value as any)}
                    className="w-full px-2.5 py-2 text-xs bg-slate-950 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="client">Hiring Business / Client</option>
                    <option value="freelancer">Independent Freelancer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Country
                  </label>
                  <select
                    value={signUpCountry}
                    onChange={(e) => setSignUpCountry(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs bg-slate-950 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    {COUNTRIES_DATA.map((c) => (
                      <option key={c.id} value={c.country}>
                        {c.flag} {c.country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {signUpRole === 'client' ? 'Company Name (Optional)' : 'Specialty / Professional Title'}
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={companyOrTitle}
                    onChange={(e) => setCompanyOrTitle(e.target.value)}
                    placeholder={signUpRole === 'client' ? 'Acme Technologies Inc.' : 'e.g. Senior Full-Stack Developer'}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Work / Professional Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    placeholder="david@company.com"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Create Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="w-full pl-9 pr-9 py-2 text-xs bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 pt-1">
                <label className="flex items-start gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="accent-emerald-600 rounded mt-0.5"
                  />
                  <span>
                    I confirm adherence to cross-border contractor guidelines (Form W-8BEN / zero backup withholding) and terms of service.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                {loading ? <span>Creating Account...</span> : <span>Register & Open Platform</span>}
              </button>
            </form>
          )}

          {/* Quick Demo Logins Section */}
          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2.5">
              One-Click Quick Evaluation Access
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleQuickLogin('client')}
                className="py-1.5 px-2 bg-slate-950 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-800 rounded text-[11px] font-medium text-slate-300 transition-colors flex flex-col items-center gap-0.5"
              >
                <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                <span>Client Demo</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin('freelancer')}
                className="py-1.5 px-2 bg-slate-950 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-800 rounded text-[11px] font-medium text-slate-300 transition-colors flex flex-col items-center gap-0.5"
              >
                <User className="w-3.5 h-3.5 text-emerald-400" />
                <span>Talent Demo</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin('admin')}
                className="py-1.5 px-2 bg-slate-950 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-800 rounded text-[11px] font-medium text-slate-300 transition-colors flex flex-col items-center gap-0.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Admin Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Security & Verification Footer */}
        <div className="mt-6 text-center text-[11px] text-slate-500 space-y-1">
          <div>256-bit encrypted credential management & W-8BEN tax verification.</div>
          <div>Compliant with US IRS & European Union cross-border hiring directives.</div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-sm rounded-xl p-6 shadow-2xl text-slate-200 space-y-4">
            <h3 className="text-base font-bold font-display text-white">Reset Account Access</h3>
            {resetSent ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-lg text-xs flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Password reset instructions sent. Please check your inbox and spam folder.</span>
              </div>
            ) : (
              <>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enter your registered business email and we will send you an authorized reset link.
                </p>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-md text-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setResetSent(true)}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold shadow-xs"
                >
                  Send Recovery Link
                </button>
              </>
            )}
            <button
              type="button"
              onClick={() => {
                setShowForgotPassword(false);
                setResetSent(false);
              }}
              className="w-full py-1.5 text-xs text-slate-400 hover:text-white"
            >
              Back to Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
