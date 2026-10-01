export interface FreelancerProfile {
  id: string;
  name: string;
  title: string;
  country: string;
  countryCode: string;
  flag: string;
  city: string;
  hourlyRateUsd: number;
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  primaryService: string;
  skills: string[];
  bio: string;
  portfolio: {
    projectTitle: string;
    description: string;
    metrics: string;
    clientCountry: string;
  };
  preferredPayment: string;
  availability: 'Available immediately' | 'Part-time (20h/wk)' | 'Booking 2 weeks out';
  verifiedCompliance: boolean;
}

export const FREELANCERS_DATA: FreelancerProfile[] = [
  {
    id: 'fl-1',
    name: 'Aarav Sharma',
    title: 'Senior Full-Stack & Cloud Architect',
    country: 'India',
    countryCode: 'IN',
    flag: '🇮🇳',
    city: 'Bengaluru',
    hourlyRateUsd: 55,
    rating: 4.98,
    reviewsCount: 42,
    experienceYears: 8,
    primaryService: 'Web & Full-Stack Development',
    skills: ['Next.js', 'TypeScript', 'Node.js', 'AWS Serverless', 'PostgreSQL', 'Docker'],
    bio: '8+ years engineering distributed web applications and high-throughput microservices. Built scalable backend systems for US and UK seed-to-series-B startups.',
    portfolio: {
      projectTitle: 'Enterprise FinTech Core Portal',
      description: 'Architected high-concurrency payment orchestration microservices processing $4M+ monthly volume with 99.99% uptime.',
      metrics: '40% reduction in API latency, 100% test coverage',
      clientCountry: 'United States'
    },
    preferredPayment: 'Wise Direct to Bank (NEFT)',
    availability: 'Available immediately',
    verifiedCompliance: true
  },
  {
    id: 'fl-2',
    name: 'Elena Rostova',
    title: 'Principal UI/UX & Design Systems Lead',
    country: 'Ukraine',
    countryCode: 'UA',
    flag: '🇺🇦',
    city: 'Kyiv',
    hourlyRateUsd: 65,
    rating: 5.0,
    reviewsCount: 38,
    experienceYears: 7,
    primaryService: 'UI/UX & Product Design',
    skills: ['Figma', 'Design Systems', 'Micro-interactions', 'Prototyping', 'Mobile App UX', 'WCAG AA'],
    bio: 'Specialized in transforming complex B2B SaaS workflows into elegant, intuitive interfaces. Creator of component libraries used by over 30 global engineering teams.',
    portfolio: {
      projectTitle: 'Cybersecurity Threat Intelligence Dashboard',
      description: 'Redesigned entire desktop analytical suite for enterprise security analysts, streamlining alert triage workflows.',
      metrics: '+34% user task completion speed, 4.9/5 user satisfaction',
      clientCountry: 'Germany'
    },
    preferredPayment: 'Payoneer / Wise Business',
    availability: 'Part-time (20h/wk)',
    verifiedCompliance: true
  },
  {
    id: 'fl-3',
    name: 'Mateo Silva',
    title: 'Mobile Engineer & React Native Specialist',
    country: 'Brazil',
    countryCode: 'BR',
    flag: '🇧🇷',
    city: 'Florianópolis',
    hourlyRateUsd: 58,
    rating: 4.95,
    reviewsCount: 29,
    experienceYears: 6,
    primaryService: 'Web & Full-Stack Development',
    skills: ['React Native', 'TypeScript', 'iOS / Swift', 'Android / Kotlin', 'GraphQL', 'Firebase'],
    bio: 'Nearshore mobile developer operating on US Eastern Time. Focused on fluid 60fps mobile experiences, offline-first sync architecture, and App Store compliance.',
    portfolio: {
      projectTitle: 'Telehealth Cross-Platform Native App',
      description: 'Engineered cross-platform consultation app with HIPAA-compliant encrypted video streaming and offline prescription caching.',
      metrics: '4.8 App Store rating across 12,000+ active monthly users',
      clientCountry: 'United States'
    },
    preferredPayment: 'Wise / Husky (CNPJ PJ Invoicing)',
    availability: 'Available immediately',
    verifiedCompliance: true
  },
  {
    id: 'fl-4',
    name: 'Camille Del Rosario',
    title: 'Customer Operations & Executive Virtual Director',
    country: 'Philippines',
    countryCode: 'PH',
    flag: '🇵🇭',
    city: 'Manila',
    hourlyRateUsd: 22,
    rating: 4.99,
    reviewsCount: 64,
    experienceYears: 9,
    primaryService: 'Virtual Assistance & Operations',
    skills: ['Zendesk', 'HubSpot CRM', 'Shopify Plus', 'Team Management', 'SOP Documentation', 'Asana'],
    bio: 'Proven operations leader managing 24/7 customer support, logistics, and CRM funnels for seven-figure DTC brands and international remote founders.',
    portfolio: {
      projectTitle: 'Global eCommerce CX Automation System',
      description: 'Streamlined returns processing and ticket resolution macros, reducing first response time from 4 hours to 8 minutes.',
      metrics: '98.4% CSAT score across 45,000+ annual support conversations',
      clientCountry: 'Australia'
    },
    preferredPayment: 'Wise Direct to BDO Bank',
    availability: 'Available immediately',
    verifiedCompliance: true
  },
  {
    id: 'fl-5',
    name: 'Piotr Wisniewski',
    title: 'AI & Data Infrastructure Engineer',
    country: 'Poland',
    countryCode: 'PL',
    flag: '🇵🇱',
    city: 'Kraków',
    hourlyRateUsd: 85,
    rating: 4.97,
    reviewsCount: 31,
    experienceYears: 10,
    primaryService: 'AI, Machine Learning & Data Engineering',
    skills: ['Python', 'PyTorch', 'FastAPI', 'LangChain', 'Snowflake', 'dbt', 'Kubernetes'],
    bio: 'Former senior data architect building custom enterprise RAG pipelines, model fine-tuning, and high-volume data warehouses with European GDPR compliance.',
    portfolio: {
      projectTitle: 'Enterprise Knowledge Graph & Semantic RAG',
      description: 'Constructed automated compliance document extraction system for a multi-national legal advisory firm.',
      metrics: 'Saved 1,200 hours of manual legal research monthly, 94% retrieval accuracy',
      clientCountry: 'United Kingdom'
    },
    preferredPayment: 'SEPA Direct Wire (B2B Reverse Charge)',
    availability: 'Booking 2 weeks out',
    verifiedCompliance: true
  },
  {
    id: 'fl-6',
    name: 'Sofia Albarracín',
    title: 'Brand Strategist & Visual Designer',
    country: 'Argentina',
    countryCode: 'AR',
    flag: '🇦🇷',
    city: 'Buenos Aires',
    hourlyRateUsd: 48,
    rating: 5.0,
    reviewsCount: 27,
    experienceYears: 7,
    primaryService: 'UI/UX & Product Design',
    skills: ['Brand Identity', 'Typography', 'Figma', 'Illustrator', 'Packaging', 'Art Direction'],
    bio: 'Creating distinctive visual identities and editorial systems for tech innovators, luxury consumer brands, and cultural institutions worldwide.',
    portfolio: {
      projectTitle: 'Zero-Emission Mobility Brand Overhaul',
      description: 'Conducted holistic rebranding including visual identity, custom typography guidelines, marketing website, and vehicle livery.',
      metrics: 'Featured in Brand New and Awwwards; brand closed $12M Series A',
      clientCountry: 'Canada'
    },
    preferredPayment: 'Payoneer / Takenos (Factura E)',
    availability: 'Part-time (20h/wk)',
    verifiedCompliance: true
  },
  {
    id: 'fl-7',
    name: 'Kweku Mensah',
    title: 'B2B Technical Copywriter & Content Strategist',
    country: 'Nigeria',
    countryCode: 'NG',
    flag: '🇳🇬',
    city: 'Lagos',
    hourlyRateUsd: 38,
    rating: 4.96,
    reviewsCount: 35,
    experienceYears: 5,
    primaryService: 'Content Writing & Copywriting',
    skills: ['Technical Writing', 'B2B SaaS Content', 'SEO Research', 'Developer Docs', 'Whitepapers'],
    bio: 'Translates deeply technical concepts (API architecture, cloud security, Web3) into engaging, conversion-focused editorial articles and documentation.',
    portfolio: {
      projectTitle: 'Developer Experience Documentation & Blog Hub',
      description: 'Authored complete 40-page API documentation suite and 12 pillar search articles for an infrastructure monitoring platform.',
      metrics: '+210% organic search traffic growth in 6 months',
      clientCountry: 'United States'
    },
    preferredPayment: 'Geegpay / Wise / Grey.co',
    availability: 'Available immediately',
    verifiedCompliance: true
  },
  {
    id: 'fl-8',
    name: 'Liam Henderson',
    title: 'Performance Marketing & Growth Lead',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    city: 'Edinburgh',
    hourlyRateUsd: 95,
    rating: 4.94,
    reviewsCount: 45,
    experienceYears: 9,
    primaryService: 'Digital Marketing & Growth',
    skills: ['Google Ads', 'Meta Ads', 'GA4 Attribution', 'Conversion Rate Optimization', 'Klaviyo'],
    bio: 'Growth consultant managing over £8M in profitable ad spend across UK, European, and North American B2B SaaS and high-ticket eCommerce clients.',
    portfolio: {
      projectTitle: 'B2B SaaS Customer Acquisition Scale',
      description: 'Restructured fragmented search campaigns into intent-driven cluster groups and implemented server-side conversion tracking.',
      metrics: 'Decreased customer acquisition cost by 38% while scaling monthly revenue by 2.4x',
      clientCountry: 'United States'
    },
    preferredPayment: 'UK Faster Payments / Wise Business',
    availability: 'Booking 2 weeks out',
    verifiedCompliance: true
  }
];
