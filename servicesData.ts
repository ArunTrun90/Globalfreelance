export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  globalRateRange: string;
  popularDeliverables: string[];
  topSourcingCountries: { country: string; code: string; flag: string; avgRate: string }[];
  keySkillsets: string[];
  clientChecklist: string[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'web-dev',
    title: 'Web & Full-Stack Development',
    category: 'Engineering & Software',
    description: 'Custom web applications, responsive frontend architecture, scalable APIs, microservices, and database performance optimization.',
    globalRateRange: '$25 - $160 / hr',
    popularDeliverables: [
      'Production React / Next.js web applications',
      'Node.js, Go, or Python REST & GraphQL microservices',
      'Database schema modeling & migration (PostgreSQL, MongoDB)',
      'Third-party API integrations, Webhooks & Stripe checkout flows',
      'Performance audit, Core Web Vitals optimization & SEO indexing'
    ],
    topSourcingCountries: [
      { country: 'India', code: 'IN', flag: '🇮🇳', avgRate: '$25 - $65 / hr' },
      { country: 'Poland', code: 'PL', flag: '🇵🇱', avgRate: '$45 - $110 / hr' },
      { country: 'Brazil', code: 'BR', flag: '🇧🇷', avgRate: '$35 - $80 / hr' },
      { country: 'Ukraine', code: 'UA', flag: '🇺🇦', avgRate: '$35 - $85 / hr' },
      { country: 'United States', code: 'US', flag: '🇺🇸', avgRate: '$85 - $200 / hr' }
    ],
    keySkillsets: ['React / Next.js', 'TypeScript', 'Node.js / Express', 'Python / Django', 'Tailwind CSS', 'Docker & AWS', 'PostgreSQL / Prisma'],
    clientChecklist: [
      'Provide clear user stories, Figma wireframes, and API specifications',
      'Confirm Git workflow (PR reviews, CI/CD pipeline, staging environment)',
      'Specify test coverage requirements (Jest, Playwright, Cypress)',
      'Ensure IP assignment and repository access agreements are signed upfront'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    category: 'Design & Creative',
    description: 'Human-centered digital interfaces, design systems, interactive prototypes, user journey mapping, and conversion-optimized UX.',
    globalRateRange: '$20 - $150 / hr',
    popularDeliverables: [
      'Comprehensive Figma design systems with auto-layout and component variants',
      'Interactive high-fidelity clickable prototypes for desktop & mobile',
      'User journey maps, information architecture & wireframing',
      'SaaS dashboard and B2B workflow UX audits',
      'Developer handoff tokens and documentation'
    ],
    topSourcingCountries: [
      { country: 'Argentina', code: 'AR', flag: '🇦🇷', avgRate: '$28 - $65 / hr' },
      { country: 'United Kingdom', code: 'GB', flag: '🇬🇧', avgRate: '$65 - $140 / hr' },
      { country: 'India', code: 'IN', flag: '🇮🇳', avgRate: '$20 - $55 / hr' },
      { country: 'Spain', code: 'ES', flag: '🇪🇸', avgRate: '$38 - $85 / hr' },
      { country: 'United States', code: 'US', flag: '🇺🇸', avgRate: '$75 - $175 / hr' }
    ],
    keySkillsets: ['Figma Mastery', 'Design Systems (Tokens)', 'User Research & Testing', 'Micro-interactions', 'Responsive Layouts', 'WCAG Accessibility'],
    clientChecklist: [
      'Share brand guidelines, typography preferences, and mood boards',
      'Outline target persona personas and core user success metrics',
      'Define expected breakpoint support (Mobile 390px, Tablet 768px, Desktop 1440px)',
      'Set cadence for asynchronous video walk-throughs (Loom/Figma comments)'
    ]
  },
  {
    id: 'content-writing',
    title: 'Content Writing & Copywriting',
    category: 'Content & Strategy',
    description: 'High-converting sales copy, technical documentation, B2B SaaS thought leadership articles, SEO content clusters, and brand messaging.',
    globalRateRange: '$15 - $140 / hr',
    popularDeliverables: [
      'SEO-driven long-form articles (2,000 - 3,500 words)',
      'Product launch landing page copy and headline testing',
      'Developer documentation, API guides, and release notes',
      'B2B email nurture sequences and cold outreach campaigns',
      'Executive ghostwriting for LinkedIn and industry journals'
    ],
    topSourcingCountries: [
      { country: 'United States', code: 'US', flag: '🇺🇸', avgRate: '$60 - $150 / hr' },
      { country: 'United Kingdom', code: 'GB', flag: '🇬🇧', avgRate: '$55 - $125 / hr' },
      { country: 'South Africa', code: 'ZA', flag: '🇿🇦', avgRate: '$22 - $55 / hr' },
      { country: 'Nigeria', code: 'NG', flag: '🇳🇬', avgRate: '$15 - $40 / hr' },
      { country: 'Canada', code: 'CA', flag: '🇨🇦', avgRate: '$55 - $130 / hr' }
    ],
    keySkillsets: ['Search Engine Optimization (SEO)', 'Technical Storytelling', 'Direct-Response Copywriting', 'Editorial Research', 'Information Synthesis'],
    clientChecklist: [
      'Supply a detailed content brief with target audience, tone of voice, and keywords',
      'Clarify internal review cycles and revision policy (typically 2 included rounds)',
      'Establish brand editorial style guide (AP Style, Chicago, or proprietary rules)'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    category: 'Marketing & Sales',
    description: 'Paid acquisition (Google, Meta, LinkedIn), conversion rate optimization (CRO), marketing analytics, funnel engineering, and organic search.',
    globalRateRange: '$20 - $160 / hr',
    popularDeliverables: [
      'Multi-channel paid media campaigns (Meta, Google Search & PMax, LinkedIn)',
      'Full-funnel attribution and tracking setup (GA4, GTM, Server-side CAPI)',
      'A/B testing roadmap for conversion rate lift',
      'B2B account-based marketing (ABM) pipelines',
      'Comprehensive technical & programmatic SEO audits'
    ],
    topSourcingCountries: [
      { country: 'India', code: 'IN', flag: '🇮🇳', avgRate: '$20 - $50 / hr' },
      { country: 'United Kingdom', code: 'GB', flag: '🇬🇧', avgRate: '$60 - $135 / hr' },
      { country: 'United States', code: 'US', flag: '🇺🇸', avgRate: '$70 - $160 / hr' },
      { country: 'Australia', code: 'AU', flag: '🇦🇺', avgRate: '$65 - $145 / hr' },
      { country: 'Spain', code: 'ES', flag: '🇪🇸', avgRate: '$35 - $80 / hr' }
    ],
    keySkillsets: ['Google Ads & Meta Ads Manager', 'GA4 & BigQuery Analytics', 'HubSpot & Marketo CRM', 'CRO & Landing Page Design', 'Retention Marketing (Klaviyo)'],
    clientChecklist: [
      'Grant delegate access via Business Managers (never share raw passwords)',
      'Agree on target North Star KPIs (ROAS, CPA, CAC:LTV, MQL-to-SQL rates)',
      'Determine explicit ad spend budgets separate from contractor management fees'
    ]
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Motion Graphics',
    category: 'Design & Creative',
    description: 'Commercial video post-production, 2D/3D motion graphics, short-form viral editing (TikTok, Reels, Shorts), and corporate explainer reels.',
    globalRateRange: '$18 - $140 / hr',
    popularDeliverables: [
      'Commercial brand spots and product reveal videos',
      'Batch production of vertical social reels with captions and sound design',
      '2D vector character animation and UI micro-interaction demos',
      'Podcast multi-camera editing with audio leveling and color grade',
      'YouTube long-form documentary edits with dynamic B-roll and pacing'
    ],
    topSourcingCountries: [
      { country: 'Ukraine', code: 'UA', flag: '🇺🇦', avgRate: '$30 - $75 / hr' },
      { country: 'Philippines', code: 'PH', flag: '🇵🇭', avgRate: '$12 - $35 / hr' },
      { country: 'South Africa', code: 'ZA', flag: '🇿🇦', avgRate: '$25 - $60 / hr' },
      { country: 'India', code: 'IN', flag: '🇮🇳', avgRate: '$18 - $45 / hr' },
      { country: 'United States', code: 'US', flag: '🇺🇸', avgRate: '$65 - $140 / hr' }
    ],
    keySkillsets: ['Adobe Premiere Pro', 'After Effects & Expressions', 'DaVinci Resolve Color Grading', 'Blender / Cinema 4D', 'Sound Design & Mastering'],
    clientChecklist: [
      'Provide organized raw footage via high-speed cloud drive (Frame.io, Google Drive)',
      'Include time-stamped script or reference videos for tone and pacing',
      'Specify exact delivery aspect ratios (16:9, 9:16, 1:1, 4:5) and codecs (ProRes, H.265)'
    ]
  },
  {
    id: 'ai-data-science',
    title: 'AI, Machine Learning & Data Engineering',
    category: 'Engineering & Software',
    description: 'Fine-tuning LLMs, building Retrieval-Augmented Generation (RAG) pipelines, computer vision models, ETL pipelines, and predictive analytics.',
    globalRateRange: '$35 - $180 / hr',
    popularDeliverables: [
      'Custom LLM agent pipelines using LangChain / LlamaIndex and vector stores',
      'Production ETL pipelines via Airflow, dbt, and Snowflake/BigQuery',
      'Predictive churn and recommendation engine models',
      'Computer vision inspection algorithms (YOLO, OpenCV)',
      'Interactive analytics dashboards with Streamlit and Tableau'
    ],
    topSourcingCountries: [
      { country: 'Poland', code: 'PL', flag: '🇵🇱', avgRate: '$50 - $125 / hr' },
      { country: 'Canada', code: 'CA', flag: '🇨🇦', avgRate: '$75 - $175 / hr' },
      { country: 'India', code: 'IN', flag: '🇮🇳', avgRate: '$30 - $70 / hr' },
      { country: 'Ukraine', code: 'UA', flag: '🇺🇦', avgRate: '$40 - $90 / hr' },
      { country: 'Germany', code: 'DE', flag: '🇩🇪', avgRate: '$80 - $170 / hr' }
    ],
    keySkillsets: ['Python & PyTorch', 'Vector Databases (Pinecone, Qdrant)', 'dbt & SQL Data Modeling', 'AWS SageMaker & Modal', 'Model Evaluation & Benchmarking'],
    clientChecklist: [
      'Ensure training data is cleansed, anonymized, and compliant with data privacy laws',
      'Define quantitative accuracy/latency benchmarks before project kick-off',
      'Set up secure sandbox compute environments for model training'
    ]
  }
];
