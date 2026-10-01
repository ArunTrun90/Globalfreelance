export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  outcome: string;
  clientLocation: string;
}

export interface ClientReview {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  location: string;
  comment: string;
  rating: number;
}

export interface BusinessWebsiteConfig {
  id: string;
  businessName: string;
  tagline: string;
  aboutText: string;
  category: string;
  country: string;
  countryCode: string;
  countryFlag: string;
  currency: string;
  currencySymbol: string;
  email: string;
  phone?: string;
  locationCity: string;
  primaryCtaText: string;
  theme: 'slate' | 'cobalt' | 'travertine' | 'emerald' | 'obsidian';
  paymentMethodsAccepted: string[];
  taxComplianceNotes: string;
  services: ServicePackage[];
  portfolio: PortfolioItem[];
  testimonials: ClientReview[];
}

export const PRESET_TEMPLATES: Record<string, BusinessWebsiteConfig> = {
  apex_india: {
    id: 'apex_india',
    businessName: 'Apex Cloud & Full-Stack Systems',
    tagline: 'High-Throughput Web Architecture & Cloud Engineering for US & EU Tech Startups',
    aboutText: 'We are an agile engineering studio based in Bengaluru, India. We partner with fast-growing venture-backed startups to architect, build, and scale resilient cloud platforms, modern Next.js frontends, and high-performance microservices. 100% tax compliant with automated Form W-8BEN and FIRC clearance.',
    category: 'Engineering & Software',
    country: 'India',
    countryCode: 'IN',
    countryFlag: '🇮🇳',
    currency: 'USD',
    currencySymbol: '$',
    email: 'contact@apexcloud-systems.io',
    phone: '+91 80 4910 8200',
    locationCity: 'Bengaluru, India (UTC+5:30)',
    primaryCtaText: 'Schedule Engineering Discovery',
    theme: 'cobalt',
    paymentMethodsAccepted: ['Wise Direct to Bank (NEFT)', 'Stripe Invoicing', 'SWIFT Wire with FIRC', 'Payoneer'],
    taxComplianceNotes: 'Operating under Section 44ADA & zero-rated GST export of services under Letter of Undertaking (LUT). Pre-certified Form W-8BEN provided upfront.',
    services: [
      {
        id: 's1',
        name: 'MVP Architecture & Build',
        price: '$4,500',
        unit: 'per 3-week sprint',
        description: 'Rapid production-ready launch of your core application with modern React/Next.js, database schema modeling, and CI/CD pipelines.',
        features: [
          'Full Next.js App Router codebase with TypeScript',
          'PostgreSQL schema & Prisma ORM migrations',
          'Authentication (Supabase/Clerk) & Stripe checkout',
          'Full-test suite (Playwright & Jest)',
          'Automated Vercel / AWS deployment pipeline'
        ],
        popular: false
      },
      {
        id: 's2',
        name: 'Dedicated Senior Engineering Pod',
        price: '$5,800',
        unit: 'per month / developer',
        description: 'Embedded senior full-stack engineer operating 40 hours/week with 4 hours guaranteed daily synchronous overlap with your timezone.',
        features: [
          'Daily asynchronous standups via Slack & Loom',
          'Direct PR reviews in your GitHub repository',
          'System design, API optimization & bug resolution',
          'Bi-weekly milestone sprint planning',
          'Zero recruitment overhead or local payroll friction'
        ],
        popular: true
      },
      {
        id: 's3',
        name: 'Cloud Performance & Security Audit',
        price: '$2,200',
        unit: 'one-time engagement',
        description: 'Comprehensive inspection of database bottlenecks, AWS infrastructure costs, Core Web Vitals, and API response latencies.',
        features: [
          'Deep database index & query profiling',
          'AWS cost-reduction analysis (average 30% savings)',
          'Lighthouse 95+ Core Web Vitals remediation',
          'Executive remediation roadmap with actionable PRs'
        ],
        popular: false
      }
    ],
    portfolio: [
      {
        id: 'p1',
        title: 'B2B Logistics Freight Management Platform',
        category: 'Full-Stack Web App',
        description: 'Architected real-time dispatch dashboard processing 25,000+ daily truck routes across North America.',
        outcome: 'Reduced dispatch latency by 68% and handled $14M in monthly shipment value',
        clientLocation: 'San Francisco, USA'
      },
      {
        id: 'p2',
        title: 'Fintech Cross-Border Payments Portal',
        category: 'Microservices & API',
        description: 'Implemented compliant KYC onboarding and payment rails handling multi-currency settlements.',
        outcome: '99.99% uptime through 18 consecutive months of 4x transaction growth',
        clientLocation: 'London, UK'
      }
    ],
    testimonials: [
      {
        id: 't1',
        clientName: 'Marcus Vance',
        clientRole: 'VP of Engineering',
        company: 'LogixPulse Inc.',
        location: 'California, USA',
        comment: 'Apex delivered code of the highest caliber. Their async communication was crisp, pull requests were impeccably tested, and their timezone overlap was flawless.',
        rating: 5
      },
      {
        id: 't2',
        clientName: 'Dr. Helene Bauer',
        clientRole: 'Founder & CEO',
        company: 'MediTrack GmbH',
        location: 'Berlin, Germany',
        comment: 'The team handled our strict GDPR requirements and data residency with complete professionalism. True engineering partners.',
        rating: 5
      }
    ]
  },
  vanguard_germany: {
    id: 'vanguard_germany',
    businessName: 'Vanguard Design Systems & Product UX',
    tagline: 'Precision UI/UX Design & Enterprise Design Systems for European & Global Scale-ups',
    aboutText: 'Independent digital product studio based in Munich, Germany. We specialize in transforming complex workflows into intuitive, conversion-focused software interfaces. Strict WCAG 2.1 AA accessibility and European design rigor.',
    category: 'Design & Creative',
    country: 'Germany',
    countryCode: 'DE',
    countryFlag: '🇩🇪',
    currency: 'EUR',
    currencySymbol: '€',
    email: 'studio@vanguard-ux.de',
    phone: '+49 89 2154 3900',
    locationCity: 'Munich, Germany (UTC+1)',
    primaryCtaText: 'Request Design Consultation',
    theme: 'slate',
    paymentMethodsAccepted: ['SEPA Direct Bank Transfer (B2B Reverse Charge)', 'Wise Business', 'Revolut Business'],
    taxComplianceNotes: 'Registered Freiberufler with valid EU VAT ID (USt-IdNr.). Zero-rated Reverse Charge invoices issued for all cross-border EU and global business clients.',
    services: [
      {
        id: 'vs1',
        name: 'Product UX Audit & Redesign',
        price: '€3,800',
        unit: 'per 2-week sprint',
        description: 'Thorough heuristic evaluation of your existing application, user drop-off points, and full interactive Figma redesign.',
        features: [
          'Detailed UX friction report with video walkthrough',
          'Complete responsive screen redesigns (Desktop & Mobile)',
          'Interactive clickable prototype for investor / user testing',
          'Developer handoff tokens and typography scale'
        ],
        popular: false
      },
      {
        id: 'vs2',
        name: 'Enterprise Figma Design System',
        price: '€6,500',
        unit: 'comprehensive system',
        description: 'Scalable multi-brand component library built with autolayout, dark mode support, and design token architecture.',
        features: [
          '200+ accessible components with states & variants',
          'Tokenized color palettes and typographic rhythm',
          'Comprehensive guidelines & component documentation',
          'Sync with React / Tailwind CSS theme config'
        ],
        popular: true
      }
    ],
    portfolio: [
      {
        id: 'vp1',
        title: 'MedTech Clinical Analytics Platform',
        category: 'SaaS Product Design',
        description: 'Redesigned radiological imaging dashboard and patient diagnostics interface for specialized hospital workflows.',
        outcome: '+42% user task completion speed and 98% positive clinician feedback',
        clientLocation: 'Zurich, Switzerland'
      }
    ],
    testimonials: [
      {
        id: 'vt1',
        clientName: 'Stefan Lindemann',
        clientRole: 'Chief Product Officer',
        company: 'Novus Mobility',
        location: 'Stockholm, Sweden',
        comment: 'Vanguard brought clarity and elegance to what was previously a convoluted technical tool. Exceptional craftsmanship.',
        rating: 5
      }
    ]
  },
  pacific_philippines: {
    id: 'pacific_philippines',
    businessName: 'Pacific Operations & CX Partner',
    tagline: 'High-Touch 24/7 Customer Experience, Logistics & E-Commerce Operations',
    aboutText: 'Premium remote operations agency based in Manila, Philippines. We provide dedicated, college-educated customer success specialists and operations managers for leading DTC brands and SaaS companies worldwide.',
    category: 'Virtual Assistance & Operations',
    country: 'Philippines',
    countryCode: 'PH',
    countryFlag: '🇵🇭',
    currency: 'USD',
    currencySymbol: '$',
    email: 'hello@pacific-ops.com',
    locationCity: 'Manila, Philippines (UTC+8)',
    primaryCtaText: 'Discuss Your Support Needs',
    theme: 'emerald',
    paymentMethodsAccepted: ['Wise Direct to Bank', 'Payoneer', 'Stripe Invoicing'],
    taxComplianceNotes: 'BIR registered professional partnership. Formal commercial service agreements with international IP and confidentiality safeguards.',
    services: [
      {
        id: 'ps1',
        name: 'Dedicated 24/7 Support Tier',
        price: '$1,850',
        unit: 'per full-time agent / month',
        description: 'Native English-speaking customer support professional dedicated exclusively to your Zendesk, Gorgias, or Intercom queues.',
        features: [
          'Under 10-minute first response time SLA',
          'Email, live chat, and social comment triage',
          'Continuous QA scoring and weekly management reports',
          'Redundant high-speed fiber + UPS power backup'
        ],
        popular: true
      }
    ],
    portfolio: [
      {
        id: 'pp1',
        title: '7-Figure DTC Apparel CX Automation',
        category: 'Customer Operations',
        description: 'Scaled customer service team from 2 to 14 agents during Black Friday / Cyber Monday surge.',
        outcome: 'Achieved 98.7% CSAT rating across 62,000 inquiries with 4-minute average resolution',
        clientLocation: 'Sydney, Australia'
      }
    ],
    testimonials: [
      {
        id: 'pt1',
        clientName: 'Chloe Bennett',
        clientRole: 'Director of Customer Experience',
        company: 'Lumi Goods',
        location: 'Melbourne, Australia',
        comment: 'The team feels like a direct extension of our in-house staff. Diligent, proactive, and exceptionally polite with our customers.',
        rating: 5
      }
    ]
  }
};
