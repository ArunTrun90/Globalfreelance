export interface JobListing {
  id: string;
  title: string;
  company: string;
  clientCountry: string;
  clientFlag: string;
  category: string;
  budgetType: 'Fixed Price' | 'Hourly Rate' | 'Monthly Retainer';
  budgetUsd: string;
  duration: string;
  timezoneReq: string;
  experienceLevel: 'Mid-Level' | 'Senior' | 'Lead / Expert';
  description: string;
  keyRequirements: string[];
  postedDate: string;
  applicantsCount: number;
}

export const JOBS_DATA: JobListing[] = [
  {
    id: 'job-1',
    title: 'Senior Next.js & Supabase Architect for B2B Logistics SaaS',
    company: 'FreightPulse Logistics',
    clientCountry: 'United States',
    clientFlag: '🇺🇸',
    category: 'Web & Full-Stack Development',
    budgetType: 'Hourly Rate',
    budgetUsd: '$50 - $80 / hr',
    duration: '3 - 6 Months (30 hrs/wk)',
    timezoneReq: '4 hours overlap with US Central (UTC-5)',
    experienceLevel: 'Senior',
    description: 'We are revamping our core dispatch portal. Looking for a senior full-stack engineer with deep Next.js App Router, Tailwind CSS, PostgreSQL, and Supabase real-time experience.',
    keyRequirements: [
      'Proven production Next.js 14+ experience with Server Actions',
      'PostgreSQL query optimization and Row-Level Security (RLS) policies',
      'Experience with map routing APIs (Google Maps Platform or Mapbox)',
      'Fluent written and verbal technical English'
    ],
    postedDate: 'Yesterday',
    applicantsCount: 14
  },
  {
    id: 'job-2',
    title: 'Product Designer (Figma Systems) for European HealthTech Scale-up',
    company: 'Aura Medical AG',
    clientCountry: 'Germany',
    clientFlag: '🇩🇪',
    category: 'UI/UX & Product Design',
    budgetType: 'Fixed Price',
    budgetUsd: '$8,500 - $14,000',
    duration: '6 Weeks Sprint',
    timezoneReq: 'CET / European hours (UTC+1/UTC+2)',
    experienceLevel: 'Senior',
    description: 'Designing end-to-end patient onboarding and clinician dashboard in Figma. Deliverables include component library, responsive prototypes, and developer tokens.',
    keyRequirements: [
      'Portfolio showcasing complex data-heavy B2B or medical web applications',
      'Advanced Figma component variants, autolayout, and design tokens',
      'Understanding of WCAG 2.1 AA accessibility guidelines',
      'Availability for weekly asynchronous design critiques via Loom'
    ],
    postedDate: '2 days ago',
    applicantsCount: 9
  },
  {
    id: 'job-3',
    title: 'Technical B2B Copywriter for AI Infrastructure Platform',
    company: 'HyperScale Engine',
    clientCountry: 'United Kingdom',
    clientFlag: '🇬🇧',
    category: 'Content Writing & Copywriting',
    budgetType: 'Monthly Retainer',
    budgetUsd: '$3,200 - $4,800 / mo',
    duration: 'Ongoing Retainer (6+ Months)',
    timezoneReq: 'Any timezone with 2h daily overlap with London',
    experienceLevel: 'Senior',
    description: 'Looking for a dedicated technical writer to produce 4 in-depth pillar articles and 2 customer case studies per month covering GPU orchestration, vector search, and model serving.',
    keyRequirements: [
      'Ability to read Python and understand modern ML infra stacks',
      'Flawless technical editorial standards and search intent optimization',
      'Samples of published developer-facing guides or whitepapers'
    ],
    postedDate: '3 days ago',
    applicantsCount: 21
  },
  {
    id: 'job-4',
    title: 'Performance Marketing Lead (Google Search & Meta CRO)',
    company: 'Nordic Sleep Co.',
    clientCountry: 'Canada',
    clientFlag: '🇨🇦',
    category: 'Digital Marketing & Growth',
    budgetType: 'Monthly Retainer',
    budgetUsd: '$3,500 - $6,000 / mo',
    duration: 'Ongoing (Quarterly review)',
    timezoneReq: 'US/Canada Eastern (UTC-5)',
    experienceLevel: 'Lead / Expert',
    description: 'Scale our direct-to-consumer bedding brand across North America. Manage $60k/month in ad spend across Google Ads and Meta with strict ROAS targets.',
    keyRequirements: [
      'Demonstrated track record scaling 7-figure DTC brands',
      'Server-side tracking (CAPI) and GA4 funnel modeling expertise',
      'Deep landing page conversion optimization (Unbounce / Shopify)'
    ],
    postedDate: '4 days ago',
    applicantsCount: 17
  },
  {
    id: 'job-5',
    title: 'Short-Form Video Editor & Motion Designer for Tech Creators',
    company: 'Founders Studio',
    clientCountry: 'Australia',
    clientFlag: '🇦🇺',
    category: 'Video Editing & Motion Graphics',
    budgetType: 'Fixed Price',
    budgetUsd: '$2,400 / batch of 12 reels',
    duration: 'Recurring Monthly Batches',
    timezoneReq: 'Flexible asynchronous workflow',
    experienceLevel: 'Mid-Level',
    description: 'Transform podcast episodes and technical screen shares into viral TikToks, YouTube Shorts, and Instagram Reels with kinetic typography, sound effects, and clean motion graphics.',
    keyRequirements: [
      'Mastery in Adobe Premiere Pro and After Effects',
      'High sense of narrative pacing, sound design, and retention hooks',
      'Quick 48-hour turnaround on first drafts'
    ],
    postedDate: '5 days ago',
    applicantsCount: 32
  },
  {
    id: 'job-6',
    title: 'Machine Learning Pipeline Engineer for Document Processing',
    company: 'LexiDoc AI',
    clientCountry: 'United States',
    clientFlag: '🇺🇸',
    category: 'AI, Machine Learning & Data Engineering',
    budgetType: 'Hourly Rate',
    budgetUsd: '$65 - $110 / hr',
    duration: '2 - 4 Months',
    timezoneReq: 'US East or West Coast',
    experienceLevel: 'Lead / Expert',
    description: 'Building custom multi-modal document extraction pipeline parsing PDFs and financial statements into structured JSON using open-source vision-language models.',
    keyRequirements: [
      'Experience with Hugging Face transformers, vLLM, and LangChain',
      'Python, FastAPI, and Dockerized cloud deployment on AWS ECS/EKS',
      'Strong background in optical character recognition (OCR) and layout parsing'
    ],
    postedDate: 'Just now',
    applicantsCount: 7
  }
];
