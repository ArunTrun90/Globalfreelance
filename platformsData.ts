export interface PlatformInfo {
  id: string;
  name: string;
  scope: 'Global Marketplace' | 'Curated Elite Network' | 'Regional Specialist' | 'Direct Commission-Free';
  primaryRegions: string[];
  takeRateFee: string;
  clientFee: string;
  vettedTier: 'Open / Profile Review' | 'Strict Top 1-3% Technical Screening' | 'Direct Portfolio / Unvetted';
  bestFor: string;
  keyFeatures: string[];
  payoutMethods: string[];
}

export const PLATFORMS_DATA: PlatformInfo[] = [
  {
    id: 'upwork',
    name: 'Upwork',
    scope: 'Global Marketplace',
    primaryRegions: ['Worldwide (180+ countries)'],
    takeRateFee: 'Flat 10% on all freelancer earnings',
    clientFee: '5% client marketplace fee on payments (Enterprise custom)',
    vettedTier: 'Open / Profile Review',
    bestFor: 'Broadest volume of projects across all skill levels, from junior support to enterprise contracts.',
    keyFeatures: [
      'Work Diary with time-tracking and automated keystroke/screenshot escrow protection',
      'Fixed-price milestone escrow accounts with dispute mediation',
      'Upwork Enterprise tier providing Fortune 500 compliance and classification guarantee'
    ],
    payoutMethods: ['Direct to Local Bank', 'Wise', 'Payoneer', 'PayPal', 'US Bank Wire']
  },
  {
    id: 'toptal',
    name: 'Toptal',
    scope: 'Curated Elite Network',
    primaryRegions: ['Global (Emphasis on North America & Europe)'],
    takeRateFee: 'Built into client quote (Freelancer keeps 100% of agreed rate)',
    clientFee: 'Premium hourly markup included in rate ($80 - $250+/hr)',
    vettedTier: 'Strict Top 1-3% Technical Screening',
    bestFor: 'Enterprises and funded startups seeking battle-tested senior engineers, designers, and financial directors.',
    keyFeatures: [
      'Multi-stage technical screening: language fluency, coding challenges, live architecture test',
      'No-risk trial period: up to 2 weeks to evaluate contractor compatibility',
      'Dedicated talent matchmaker matches candidates within 48 hours'
    ],
    payoutMethods: ['Payoneer', 'Bank Wire', 'PayPal', 'Direct Deposit']
  },
  {
    id: 'fiverr-pro',
    name: 'Fiverr Pro',
    scope: 'Global Marketplace',
    primaryRegions: ['Worldwide'],
    takeRateFee: '20% commission on seller revenue',
    clientFee: '5.5% service fee + $2.50 small order charge',
    vettedTier: 'Open / Profile Review',
    bestFor: 'Productized freelance services (video edits, voiceovers, logo animations, fast turnarounds).',
    keyFeatures: [
      'Clear catalog-style gig packages (Basic, Standard, Premium) with defined turnaround',
      'Fiverr Pro vetted badge reserved for proven agency-grade professionals',
      'Milestone orders for projects exceeding $1,000'
    ],
    payoutMethods: ['Payoneer Bank Transfer', 'PayPal', 'Fiverr Revenue Card']
  },
  {
    id: 'malt',
    name: 'Malt',
    scope: 'Regional Specialist',
    primaryRegions: ['Western & Southern Europe (France, Germany, Spain, UK, Benelux)'],
    takeRateFee: '5% to 10% decreasing with client longevity',
    clientFee: '0% - 3% depending on enterprise tier',
    vettedTier: 'Open / Profile Review',
    bestFor: 'Hiring verified European freelancers with full EU labor compliance and localized invoicing.',
    keyFeatures: [
      'Integrated professional indemnity insurance for all contracts via AXA',
      'Localized invoicing with automated EU VAT reverse charge handling',
      'Strong local reputation in Paris, Berlin, Madrid, and London'
    ],
    payoutMethods: ['SEPA Direct Bank Transfer', 'European IBAN']
  },
  {
    id: 'workana',
    name: 'Workana',
    scope: 'Regional Specialist',
    primaryRegions: ['Latin America (Brazil, Argentina, Mexico, Colombia)'],
    takeRateFee: '10% to 20% on freelancer billings',
    clientFee: 'Variable platform fee',
    vettedTier: 'Open / Profile Review',
    bestFor: 'Hiring Spanish and Portuguese-speaking talent across Latin America with localized payment methods.',
    keyFeatures: [
      'Local currency deposits across Latin American payment rails (PIX, Boleto, Mercado Pago)',
      'Time-tracker software for hourly verification',
      'Strong nearshore community for US and LATAM companies'
    ],
    payoutMethods: ['Local Bank Transfer (PIX, SPEI)', 'Payoneer', 'PayPal']
  },
  {
    id: 'contra',
    name: 'Contra',
    scope: 'Direct Commission-Free',
    primaryRegions: ['Worldwide (Strong US, UK, Canada, Australia)'],
    takeRateFee: '0% commission for freelancers (platform monetizes via Pro subscription)',
    clientFee: 'Zero or low payment processing fee',
    vettedTier: 'Direct Portfolio / Unvetted',
    bestFor: 'Independent creators, designers, and developers seeking direct contracts without middleman cut.',
    keyFeatures: [
      'Visual portfolio-first profile showcasing real deliverables and verified client recommendations',
      'Built-in contract builder with customizable milestones and automated invoices',
      'Direct payouts via Stripe and crypto rails'
    ],
    payoutMethods: ['Stripe Direct Deposit', 'Wise', 'Crypto (USDC)']
  }
];
