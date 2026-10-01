export interface CountryRateRange {
  service: string;
  hourlyUsd: string;
  projectAvgUsd: string;
}

export interface CountryInfo {
  id: string;
  country: string;
  code: string;
  flag: string;
  region: 'Asia-Pacific' | 'Europe' | 'North America' | 'Latin America' | 'Middle East & Africa';
  currency: string;
  currencyCode: string;
  currencySymbol: string;
  popularServices: string[];
  typicalClients: string[];
  popularPaymentMethods: string[];
  freelancerTaxes: string;
  taxRegistrationDetail: string;
  businessEnvironment: string;
  popularSkills: string[];
  majorLanguages: string[];
  internetEconomy: string;
  usefulPlatforms: string[];
  legalConsiderations: string;
  averageRates: CountryRateRange[];
  tipsForForeigners: string[];
  englishProficiency: 'Native / Near-Native' | 'Very High' | 'High' | 'Moderate' | 'Varies';
  timezone: string;
  gdpDigitalShare?: string;
  summary: string;
}

export const COUNTRIES_DATA: CountryInfo[] = [
  {
    id: 'india',
    country: 'India',
    code: 'IN',
    flag: '🇮🇳',
    region: 'Asia-Pacific',
    currency: 'Indian Rupee (INR)',
    currencyCode: 'INR',
    currencySymbol: '₹',
    summary: 'The world’s second largest freelance workforce with deep engineering, IT, UI/UX, and digital marketing capabilities at high scale.',
    popularServices: ['Full-Stack Web & Mobile Development', 'UI/UX & Product Design', 'Data Science & AI', 'Technical Writing & SEO', 'Digital Marketing'],
    typicalClients: ['US & European Tech Startups', 'Global Marketing Agencies', 'Enterprise Software Subcontractors', 'Direct eCommerce Brands'],
    popularPaymentMethods: ['Bank Wire (NEFT/RTGS via Wise/Payoneer)', 'Stripe Connect', 'PayPal (Auto-withdrawal to bank)', 'Direct SWIFT wire with FIRC certificate'],
    freelancerTaxes: 'Presumptive taxation under Section 44ADA allows professionals with gross receipts up to ₹75 Lakhs to declare 50% as taxable profit. GST registration is mandatory above ₹20 Lakhs turnover, though export of services is zero-rated under Letter of Undertaking (LUT).',
    taxRegistrationDetail: 'Requires Permanent Account Number (PAN) and Goods and Services Tax Identification Number (GSTIN) if crossing turnover threshold. Foreign remittances require a Foreign Inward Remittance Certificate (FIRC) or FIRP for audit compliance.',
    businessEnvironment: 'Massive technical talent pool, rapid adoption of cutting-edge AI stacks, expanding English-speaking workforce, and strong entrepreneurial remote culture.',
    popularSkills: ['React/Next.js & Node.js', 'Python & Machine Learning', 'Figma & Mobile Design', 'AWS/DevOps Cloud Infrastructure', 'Performance Marketing'],
    majorLanguages: ['English (fluent business lingua franca)', 'Hindi', 'Regional languages (Tamil, Telugu, Bengali)'],
    internetEconomy: 'Over 900M internet users, ultra-low mobile data costs, high-speed fiber penetration in tier 1 & 2 cities (Bangalore, Hyderabad, Pune, Gurgaon, Chennai).',
    usefulPlatforms: ['Upwork', 'Toptal', 'Fiverr Pro', 'Freelancer.com', 'LinkedIn', 'Cutshort'],
    legalConsiderations: 'Service agreements must clarify intellectual property (IP) assignment upon final payment, dispute resolution jurisdictions, and non-disclosure terms. W-8BEN form is standard for US client engagements to prevent 30% US withholding.',
    averageRates: [
      { service: 'Web & Full-Stack Development', hourlyUsd: '$25 - $65 / hr', projectAvgUsd: '$2,500 - $12,000' },
      { service: 'UI/UX Product Design', hourlyUsd: '$20 - $55 / hr', projectAvgUsd: '$1,800 - $8,000' },
      { service: 'Technical Content & Copywriting', hourlyUsd: '$15 - $45 / hr', projectAvgUsd: '$600 - $3,000' },
      { service: 'SEO & Performance Marketing', hourlyUsd: '$20 - $50 / hr', projectAvgUsd: '$1,200 - $5,000' },
      { service: 'Video Editing & Motion Graphics', hourlyUsd: '$18 - $45 / hr', projectAvgUsd: '$800 - $3,500' }
    ],
    tipsForForeigners: [
      'Always request payment receipts and facilitate FIRC/FIRP issuance through your payment rail (e.g. Wise or Payoneer) to keep your contractor tax-compliant.',
      'Schedule overlapping check-in windows (usually mornings in the US or late afternoons in Europe overlap seamlessly with Indian IST).',
      'Provide clear written specs; Indian senior developers excel when user stories and acceptance criteria are explicitly documented.'
    ],
    englishProficiency: 'High',
    timezone: 'UTC+5:30 (IST)'
  },
  {
    id: 'united-states',
    country: 'United States',
    code: 'US',
    flag: '🇺🇸',
    region: 'North America',
    currency: 'United States Dollar (USD)',
    currencyCode: 'USD',
    currencySymbol: '$',
    summary: 'The largest global freelance market by revenue, known for top-tier executive consulting, proprietary architecture, and native brand strategy.',
    popularServices: ['Enterprise Software Architecture', 'Brand Identity & Creative Direction', 'Fractional Executive (CTO/CMO)', 'Product Strategy', 'High-Converting Copywriting'],
    typicalClients: ['Fortune 500 Enterprises', 'VC-Funded Startups (Series A-D)', 'B2B SaaS Companies', 'Mid-market Private Equity Portfolios'],
    popularPaymentMethods: ['Direct ACH Transfer', 'Wire Transfer', 'Stripe Invoicing', 'Wise (cross-border)', 'Bill.com / Ramp'],
    freelancerTaxes: 'Self-employed individuals pay 15.3% Self-Employment Tax (Social Security & Medicare) in addition to federal and state income tax. Estimated quarterly payments are required (Form 1040-ES). Many operate through Single-Member LLCs or S-Corps for liability shield and tax optimization.',
    taxRegistrationDetail: 'Requires Social Security Number (SSN) or Employer Identification Number (EIN). US businesses issue Form 1099-NEC to contractors earning ≥$600/year.',
    businessEnvironment: 'Highest rate ceiling globally, mature legal system for contract enforcement, strict non-solicitation and IP laws, and high client expectations for domain expertise.',
    popularSkills: ['System Design & Scalable Cloud', 'Design Systems & Enterprise UX', 'Growth Strategy & Paid Funnels', 'Cybersecurity Compliance', 'AI Workflow Integration'],
    majorLanguages: ['English (native)', 'Spanish'],
    internetEconomy: 'World-leading broadband and cloud infrastructure, ubiquitous high-speed 5G, and widespread gigabit fiber across metropolitan and suburban zones.',
    usefulPlatforms: ['Toptal', 'Contra', 'Upwork Enterprise', 'MarketerHire', 'A.Team', 'Catalant'],
    legalConsiderations: 'Strict state-level independent contractor tests (e.g., California AB 5 / ABC Test) require contractors to be free from client control and performing work outside the hiring entity’s usual course of business.',
    averageRates: [
      { service: 'Web & Full-Stack Development', hourlyUsd: '$85 - $200+ / hr', projectAvgUsd: '$8,000 - $45,000' },
      { service: 'UI/UX Product Design', hourlyUsd: '$75 - $175 / hr', projectAvgUsd: '$6,000 - $30,000' },
      { service: 'Technical Content & Copywriting', hourlyUsd: '$60 - $150 / hr', projectAvgUsd: '$2,000 - $10,000' },
      { service: 'SEO & Performance Marketing', hourlyUsd: '$70 - $160 / hr', projectAvgUsd: '$3,500 - $15,000' },
      { service: 'Video Editing & Motion Graphics', hourlyUsd: '$65 - $140 / hr', projectAvgUsd: '$2,500 - $12,000' }
    ],
    tipsForForeigners: [
      'Ensure clear Statements of Work (SOW) with milestone triggers; US contractors expect professional written agreements.',
      'Be prepared to handle W-9 forms and state sales tax rules if providing tangible digital goods.',
      'Contractors expect net-15 or net-30 payment terms and prompt ACH or wire settlement.'
    ],
    englishProficiency: 'Native / Near-Native',
    timezone: 'UTC-8 to UTC-5 (PT/ET)'
  },
  {
    id: 'philippines',
    country: 'Philippines',
    code: 'PH',
    flag: '🇵🇭',
    region: 'Asia-Pacific',
    currency: 'Philippine Peso (PHP)',
    currencyCode: 'PHP',
    currencySymbol: '₱',
    summary: 'A powerhouse in remote operations, creative support, social media, customer experience, and web development with near-native cultural alignment.',
    popularServices: ['Virtual Assistance & Operations', 'Customer Experience & CRM Management', 'Graphic Design & Social Content', 'Front-End Development & WordPress', 'Video Editing for Creators'],
    typicalClients: ['North American & Australian SMEs', 'eCommerce & Amazon FBA Sellers', 'Digital Agencies', 'Solo Entrepreneurs & Content Creators'],
    popularPaymentMethods: ['Wise Direct to Bank', 'Payoneer', 'PayPal to GCash / Maya', 'Direct Bank Transfer (BDO, BPI)'],
    freelancerTaxes: 'Registered with the Bureau of Internal Revenue (BIR) as self-employed or professional. Qualified individuals earning under ₱3,000,000/year can opt for a flat 8% income tax rate in lieu of graduated rates and percentage taxes.',
    taxRegistrationDetail: 'Requires Tax Identification Number (TIN), Official Receipts (OR) from BIR, and Certificate of Registration (Form 2303).',
    businessEnvironment: 'Exceptional cultural affinity with Western business standards, polite collaborative work culture, and high service loyalty.',
    popularSkills: ['Shopify/WordPress Management', 'Canva & Adobe Suite Design', 'CapCut & Premiere Pro Editing', 'HubSpot & Zendesk Administration', 'React & Tailwind Front-End'],
    majorLanguages: ['English (official, near-native business fluency)', 'Filipino / Tagalog'],
    internetEconomy: 'Rapidly improving with major fiber rollouts and Starlink satellite redundancy, especially outside metropolitan Manila and Cebu.',
    usefulPlatforms: ['OnlineJobs.ph', 'Upwork', 'FreeUp', 'Fiverr', 'VirtualStaff.ph'],
    legalConsiderations: 'Cross-border independent contractor agreements should specify that no employer-employee relationship is created under the Philippine Labor Code. 13th-month pay is customary in employment but strictly optional for freelance contracts.',
    averageRates: [
      { service: 'Web & Front-End Development', hourlyUsd: '$18 - $45 / hr', projectAvgUsd: '$1,200 - $6,000' },
      { service: 'Graphic & Social Media Design', hourlyUsd: '$12 - $30 / hr', projectAvgUsd: '$500 - $2,500' },
      { service: 'Virtual Operations & CRM', hourlyUsd: '$8 - $20 / hr', projectAvgUsd: '$800 - $2,800 / mo' },
      { service: 'Video Editing for Socials', hourlyUsd: '$12 - $35 / hr', projectAvgUsd: '$600 - $2,500' },
      { service: 'Copywriting & Content Support', hourlyUsd: '$12 - $30 / hr', projectAvgUsd: '$400 - $1,800' }
    ],
    tipsForForeigners: [
      'Respect local cultural nuances: communication is relational and polite. Provide positive reinforcement alongside constructive feedback.',
      'Check if your contractor has backup power (UPS) and secondary mobile internet connections during monsoon season.',
      'Wise or direct bank payouts into BDO/BPI accounts are preferred over PayPal due to better exchange rates.'
    ],
    englishProficiency: 'Very High',
    timezone: 'UTC+8 (PHT)'
  },
  {
    id: 'germany',
    country: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    region: 'Europe',
    currency: 'Euro (EUR)',
    currencyCode: 'EUR',
    currencySymbol: '€',
    summary: 'A premier European hub for enterprise software, automotive engineering, industrial design, and stringent GDPR-compliant infrastructure.',
    popularServices: ['Enterprise Full-Stack & Embedded Software', 'Industrial & UI/UX Design', 'SAP & Cloud Systems Consulting', 'Cybersecurity & GDPR Auditing', 'Technical Documentation'],
    typicalClients: ['German Mittelstand Enterprises', 'European Tech Scale-ups', 'Automotive Tier-1 Suppliers', 'Financial Institutions'],
    popularPaymentMethods: ['SEPA Direct Bank Transfer', 'Wise', 'Invoice via Finway/Holvi', 'Revolut Business'],
    freelancerTaxes: 'Classification distinguishes between Freiberufler (liberal professions like engineers, designers, journalists) who are exempt from trade tax (Gewerbesteuer), and Gewerbetreibende (commercial traders). Standard VAT (19%) applies, though EU cross-border B2B uses the Reverse Charge Mechanism.',
    taxRegistrationDetail: 'Registration with the local Finanzamt grants a Steuernummer and a VAT ID (USt-IdNr.). Annual Kleinunternehmerregelung threshold is €22,000 previous year / €50,000 current year.',
    businessEnvironment: 'Rigorous work ethics, thorough documentation, high precision engineering, punctual milestone execution, and strict privacy adherence.',
    popularSkills: ['TypeScript/Go/Rust Backend', 'Industrial Design & Figma', 'Kubernetes & Infrastructure as Code', 'GDPR/Data Privacy Architecture', 'Automotive Embedded Systems'],
    majorLanguages: ['German (native)', 'English (fluent business professional)'],
    internetEconomy: 'Robust gigabit fiber infrastructure across urban centers; world-leading data privacy and data center sovereignty under EU regulations.',
    usefulPlatforms: ['Freelance.de', 'Malt', 'Gulp', 'Freelancermap', 'Upwork Enterprise', 'LinkedIn'],
    legalConsiderations: 'Scheinselbstständigkeit (pseudo-self-employment) is heavily scrutinized by German pension authorities (DRV). Contractors must maintain multiple clients, independent working hours, and their own equipment.',
    averageRates: [
      { service: 'Web & Systems Development', hourlyUsd: '$75 - $160 / hr', projectAvgUsd: '$7,000 - $35,000' },
      { service: 'UI/UX & Product Design', hourlyUsd: '$70 - $145 / hr', projectAvgUsd: '$5,500 - $25,000' },
      { service: 'Cybersecurity & Cloud Systems', hourlyUsd: '$90 - $180 / hr', projectAvgUsd: '$8,000 - $40,000' },
      { service: 'Technical Content & Documentation', hourlyUsd: '$55 - $110 / hr', projectAvgUsd: '$2,000 - $7,000' },
      { service: 'Industrial 3D & CAD Modeling', hourlyUsd: '$70 - $150 / hr', projectAvgUsd: '$4,000 - $20,000' }
    ],
    tipsForForeigners: [
      'EU B2B clients should always specify their valid EU VAT number on invoices to utilize the zero-rated Reverse Charge Mechanism.',
      'Ensure contracts explicitly grant unrestricted global IP rights with indemnification for third-party copyright claims.',
      'German professionals appreciate direct, factual communication and comprehensive upfront specifications.'
    ],
    englishProficiency: 'Very High',
    timezone: 'UTC+1 / UTC+2 (CET/CEST)'
  },
  {
    id: 'united-kingdom',
    country: 'United Kingdom',
    code: 'GB',
    flag: '🇬🇧',
    region: 'Europe',
    currency: 'British Pound (GBP)',
    currencyCode: 'GBP',
    currencySymbol: '£',
    summary: 'A leading global creative, fintech, and legal consulting capital bridging transatlantic and continental commerce.',
    popularServices: ['Fintech Engineering & Open Banking', 'Brand Identity & Editorial Design', 'Content Strategy & Creative Direction', 'PR & Digital Marketing', 'Legal & Regulatory Consulting'],
    typicalClients: ['London Fintech Scale-ups', 'Global Media & Advertising Agencies', 'US Tech Firms expanding to EMEA', 'UK Retail & E-Commerce Brands'],
    popularPaymentMethods: ['UK Faster Payments', 'BACS', 'Wise Business', 'Stripe Invoicing', 'Revolut'],
    freelancerTaxes: 'Self-employed individuals operate as Sole Traders or through a Personal Service Company (PSC / Limited Company). Standard VAT registration is mandatory once turnover crosses £90,000. Off-payroll working rules (IR35) determine tax status for PSC engagements.',
    taxRegistrationDetail: 'Requires Unique Taxpayer Reference (UTR) from HMRC for self-assessment. Company directors file Corporation Tax and annual accounts with Companies House.',
    businessEnvironment: 'Highly sophisticated financial and legal services infrastructure, top global design aesthetics, and seamless European/US time overlap.',
    popularSkills: ['Next.js/Node/Go Cloud Architecture', 'Fintech Security & Web3', 'Award-winning Brand Typography', 'Growth Marketing & SEO', 'Video Production & Storytelling'],
    majorLanguages: ['English (native)'],
    internetEconomy: 'Extensive full-fiber broadband network, mature digital banking infrastructure, and strong government support for digital innovation.',
    usefulPlatforms: ['YunoJuno', 'Worksome', 'Malt UK', 'Upwork', 'The Dots', 'Contra'],
    legalConsiderations: 'IR35 rules are critical: medium and large UK client businesses must assess whether a contractor falls inside or outside IR35. Non-UK clients hiring UK freelancers are generally exempt from determining IR35 status.',
    averageRates: [
      { service: 'Web & Full-Stack Development', hourlyUsd: '$70 - $160 / hr', projectAvgUsd: '$6,500 - $35,000' },
      { service: 'UI/UX & Brand Design', hourlyUsd: '$65 - $140 / hr', projectAvgUsd: '$5,000 - $24,000' },
      { service: 'Copywriting & Content Strategy', hourlyUsd: '$55 - $125 / hr', projectAvgUsd: '$1,800 - $8,500' },
      { service: 'Digital Marketing & Growth', hourlyUsd: '$60 - $135 / hr', projectAvgUsd: '$3,000 - $12,000' },
      { service: 'Video Production & Motion', hourlyUsd: '$60 - $130 / hr', projectAvgUsd: '$2,200 - $10,000' }
    ],
    tipsForForeigners: [
      'Invoicing can be denominated in GBP, USD, or EUR; Wise multi-currency accounts make international payments friction-free.',
      'Check whether your UK contractor is operating outside IR35 by ensuring contracts lack mutuality of obligation and permit substitution.',
      'UK creative and fintech talent delivers world-class design systems and brand voice.'
    ],
    englishProficiency: 'Native / Near-Native',
    timezone: 'UTC+0 / UTC+1 (GMT/BST)'
  },
  {
    id: 'brazil',
    country: 'Brazil',
    code: 'BR',
    flag: '🇧🇷',
    region: 'Latin America',
    currency: 'Brazilian Real (BRL)',
    currencyCode: 'BRL',
    currencySymbol: 'R$',
    summary: 'Latin America’s largest tech and design workforce, offering nearshore timezone alignment with the United States and high engineering caliber.',
    popularServices: ['Full-Stack Software Engineering', 'Mobile App Development (React Native/Flutter)', 'Product Design & 3D Illustration', 'Data Analytics', 'DevOps & Cloud'],
    typicalClients: ['US Tech Companies (Nearshore Talent)', 'Latin American Scale-ups (Nubank, MercadoLibre ecosystems)', 'Global Digital Agencies', 'European Scale-ups'],
    popularPaymentMethods: ['Wise', 'Payoneer', 'Husky (local Brazilian freelance exchange rail)', 'Remessa Online', 'Direct Wire'],
    freelancerTaxes: 'Most professional contractors establish a PJ (Pessoa Jurídica) under the Simples Nacional tax regime (Annex III or V), paying roughly 6% to 15% effective tax on service exports, which are exempt from municipal ISS and federal PIS/COFINS taxes.',
    taxRegistrationDetail: 'Requires CNPJ (Company registration number) and emits electronic invoices (Nota Fiscal de Serviços - NFS-e). Foreign exchange requires contract closure (fechamento de câmbio).',
    businessEnvironment: 'Dynamic remote work culture, massive university engineering output, US Eastern/Central timezone compatibility, and strong collaborative energy.',
    popularSkills: ['React, Node.js & TypeScript', 'Kotlin & Swift Mobile', 'Go & Python Back-End', 'Figma Design Systems', 'PostgreSQL & AWS Architecture'],
    majorLanguages: ['Portuguese (native)', 'English (strong professional fluency in tech/design)', 'Spanish'],
    internetEconomy: 'Widespread high-speed fiber across São Paulo, Rio, Florianópolis, Belo Horizonte, and Curitiba; PIX instant payment system handles billions of domestic transactions.',
    usefulPlatforms: ['Turing', 'Toptal', 'Workana', 'Upwork', 'Braintrust', 'LinkedIn'],
    legalConsiderations: 'Cross-border B2B service contracts avoid Brazilian domestic labor laws (CLT) when structured as PJ-to-corporate contracts with clear deliverables and no subordinate managerial relationship.',
    averageRates: [
      { service: 'Web & Mobile Development', hourlyUsd: '$35 - $80 / hr', projectAvgUsd: '$3,500 - $16,000' },
      { service: 'UI/UX & Product Design', hourlyUsd: '$30 - $70 / hr', projectAvgUsd: '$2,800 - $12,000' },
      { service: 'Data & Cloud Infrastructure', hourlyUsd: '$40 - $90 / hr', projectAvgUsd: '$4,000 - $18,000' },
      { service: 'Digital Marketing & Growth', hourlyUsd: '$25 - $60 / hr', projectAvgUsd: '$1,500 - $6,000' },
      { service: '3D & Motion Design', hourlyUsd: '$30 - $65 / hr', projectAvgUsd: '$1,800 - $7,500' }
    ],
    tipsForForeigners: [
      'Take advantage of nearshore timezone parity: Brazil is only 1-2 hours ahead of US Eastern Time (ET), allowing full working day synchronization.',
      'Use platforms like Husky or Wise that directly support Brazilian FX regulations and produce compliant câmbio vouchers.',
      'Brazilian developers bring strong agile culture and communicative problem-solving skills.'
    ],
    englishProficiency: 'High',
    timezone: 'UTC-3 (BRT)'
  },
  {
    id: 'ukraine',
    country: 'Ukraine',
    code: 'UA',
    flag: '🇺🇦',
    region: 'Europe',
    currency: 'Ukrainian Hryvnia (UAH)',
    currencyCode: 'UAH',
    currencySymbol: '₴',
    summary: 'Globally renowned for premier computer science talent, deep tech, embedded firmware, 3D graphics, and resilient remote delivery.',
    popularServices: ['Deep Tech & Core Algorithms', 'Full-Stack Web & Mobile Architecture', '3D Modeling, Game Art & Unreal Engine', 'Cybersecurity Engineering', 'Fintech & Blockchain'],
    typicalClients: ['Silicon Valley & Western European Scale-ups', 'Game Studios & VFX Houses', 'Fintech & Crypto Protocols', 'Healthcare & Enterprise SaaS'],
    popularPaymentMethods: ['Payoneer', 'Wise Business', 'SWIFT Direct Bank Transfer', 'Revolut', 'Crypto (USDT/USDC widely accepted)'],
    freelancerTaxes: 'Most tech contractors register as Private Entrepreneurs (FOP - Group 3), paying a low 5% single tax on gross revenue (or 3% + VAT) plus a nominal monthly unified social tax (ECB).',
    taxRegistrationDetail: 'FOP Group 3 registration allows seamless international contract invoicing with simplified accounting and electronic bank statements accepted as proof of service export.',
    businessEnvironment: 'Remarkable resilience with independent Starlink and solar/battery setups, elite STEM education, rigorous mathematical foundations, and proactive engineering culture.',
    popularSkills: ['C++, Rust & Python', 'React, TypeScript & NestJS', 'Unity & Unreal Engine 5', 'Solidity & Cryptography', 'Computer Vision & AI'],
    majorLanguages: ['Ukrainian (native)', 'English (strong technical and business proficiency)'],
    internetEconomy: 'Highly advanced banking apps (Monobank, PrivatBank), extensive fiber networks with backup generators and Starlink integration nationwide.',
    usefulPlatforms: ['DOU.ua', 'Freelancehunt', 'Upwork', 'Toptal', 'Djinni.co'],
    legalConsiderations: 'Service agreements require clear specifications of export of services, foreign currency invoicing (USD/EUR), and electronic signatures (DocuSign is fully recognized).',
    averageRates: [
      { service: 'Full-Stack & Systems Engineering', hourlyUsd: '$35 - $85 / hr', projectAvgUsd: '$3,800 - $18,000' },
      { service: '3D Art, VFX & Game Design', hourlyUsd: '$30 - $75 / hr', projectAvgUsd: '$2,500 - $14,000' },
      { service: 'UI/UX Product Design', hourlyUsd: '$30 - $65 / hr', projectAvgUsd: '$2,400 - $11,000' },
      { service: 'Cybersecurity & Blockchain', hourlyUsd: '$45 - $100 / hr', projectAvgUsd: '$4,500 - $22,000' },
      { service: 'Data Engineering & ML', hourlyUsd: '$40 - $90 / hr', projectAvgUsd: '$4,000 - $20,000' }
    ],
    tipsForForeigners: [
      'Ukrainian contractors maintain exceptional infrastructure autonomy (power stations, cellular failovers) and pride themselves on unbroken SLAs.',
      'FOP Group 3 contractors require dual-language (English/Ukrainian) invoices or explicit acceptance acts for local bank clearance.',
      'Communication is direct, analytical, and focused on optimal architectural solutions over quick hacks.'
    ],
    englishProficiency: 'High',
    timezone: 'UTC+2 / UTC+3 (EET/EEST)'
  },
  {
    id: 'nigeria',
    country: 'Nigeria',
    code: 'NG',
    flag: '🇳🇬',
    region: 'Middle East & Africa',
    currency: 'Nigerian Naira (NGN)',
    currencyCode: 'NGN',
    currencySymbol: '₦',
    summary: 'Africa’s booming tech epicenter, fueled by a young, ambitious developer and creative population driving fintech, design, and content.',
    popularServices: ['Front-End & Mobile Development', 'UI/UX & Product Design', 'Technical Content & Copywriting', 'Virtual Assistance & Operations', 'Community & Social Management'],
    typicalClients: ['African & Global Fintech Startups', 'Remote Web3 & Crypto Protocols', 'US & UK Marketing Agencies', 'eCommerce Brands'],
    popularPaymentMethods: ['Geegpay', 'Grey.co', 'Payoneer', 'Wise (cross-border)', 'Crypto (USDC/USDT on Polygon/TRON)'],
    freelancerTaxes: 'Self-employed individuals file personal income tax with their state Internal Revenue Service (e.g. LIRS in Lagos). Tax rates are graduated from 7% to 24% with statutory allowances.',
    taxRegistrationDetail: 'Requires Taxpayer Identification Number (TIN) and registration with state tax authorities for personal income tax filing.',
    businessEnvironment: 'Rapidly growing tech ecosystem (Yaba/Lagos dubbed "Yabacon Valley"), aggressive self-learning, high adaptability, and native English fluency.',
    popularSkills: ['Flutter & React Native', 'Tailwind CSS & TypeScript', 'Figma & Design Systems', 'Technical Writing & Documentation', 'Solidity & Web3 SDKs'],
    majorLanguages: ['English (official language, native fluency)', 'Yoruba', 'Igbo', 'Hausa'],
    internetEconomy: 'Massive mobile internet penetration, booming digital payment infrastructure (Paystack, Flutterwave), and expanding solar-powered tech hubs.',
    usefulPlatforms: ['Upwork', 'Fiverr', 'Toptal', 'TalentQL', 'LinkedIn', 'Contra'],
    legalConsiderations: 'Foreign currency regulations can fluctuate; freelance contracts must specify payout currency (typically USD or stablecoins) to protect contractors against rapid local currency devaluations.',
    averageRates: [
      { service: 'Web & Mobile Development', hourlyUsd: '$20 - $55 / hr', projectAvgUsd: '$1,800 - $8,000' },
      { service: 'UI/UX Product Design', hourlyUsd: '$18 - $45 / hr', projectAvgUsd: '$1,400 - $6,000' },
      { service: 'Technical Content & Copywriting', hourlyUsd: '$15 - $40 / hr', projectAvgUsd: '$500 - $2,200' },
      { service: 'Social Media & Community', hourlyUsd: '$12 - $30 / hr', projectAvgUsd: '$800 - $2,500 / mo' },
      { service: 'Graphic & Brand Design', hourlyUsd: '$15 - $38 / hr', projectAvgUsd: '$600 - $2,800' }
    ],
    tipsForForeigners: [
      'Use modern international fintech rails like Geegpay, Grey.co, or USDC to ensure contractors receive fair FX rates without traditional bank delays.',
      'Timezone is UTC+1 (WAT), aligning nearly 1:1 with the United Kingdom and Central Europe.',
      'Nigerian talent is energetic, fast-iterating, and deeply collaborative.'
    ],
    englishProficiency: 'Native / Near-Native',
    timezone: 'UTC+1 (WAT)'
  },
  {
    id: 'vietnam',
    country: 'Vietnam',
    code: 'VN',
    flag: '🇻🇳',
    region: 'Asia-Pacific',
    currency: 'Vietnamese Dong (VND)',
    currencyCode: 'VND',
    currencySymbol: '₫',
    summary: 'A premier Southeast Asian engineering destination renowned for cost-efficient software development, mobile games, 2D/3D art, and QA testing.',
    popularServices: ['Mobile Game Development (Unity)', 'Full-Stack Web & Mobile Apps', 'QA & Automated Testing', '3D Asset Creation & Animation', 'Blockchain & Web3 Games'],
    typicalClients: ['Japanese & Korean Tech Firms', 'Singapore & Australian Startups', 'European Game Publishers', 'US eCommerce Brands'],
    popularPaymentMethods: ['Payoneer', 'Wise to Local Bank', 'PayPal', 'Direct SWIFT Transfer to Vietcombank/Techcombank'],
    freelancerTaxes: 'Freelancers earning above 100 million VND per year are subject to Personal Income Tax (PIT) and Value Added Tax (VAT), typically totaling 7% (5% VAT + 2% PIT) for service provision.',
    taxRegistrationDetail: 'Requires Individual Tax Code (Mã số thuế cá nhân) registered through the General Department of Taxation.',
    businessEnvironment: 'Strong government backing for IT, thriving tech hubs in Ho Chi Minh City and Hanoi, high work discipline, and competitive pricing.',
    popularSkills: ['Unity & Unreal Engine', 'Golang, Java & Node.js', 'React & Vue.js', 'Blender & Maya 3D', 'Selenium & Cypress Automation'],
    majorLanguages: ['Vietnamese (native)', 'English (moderate to high in tech hubs)', 'Japanese (growing demand)'],
    internetEconomy: 'High broadband penetration, ultra-fast fiber in cities, expanding digital wallet ecosystem (MoMo, ZaloPay), and strong 5G trials.',
    usefulPlatforms: ['Upwork', 'Freelancer.com', 'ITviec', 'TopCV', 'Fiverr'],
    legalConsiderations: 'Contracts should clarify IP transfer and confidentiality. International wire receipts should document software export to claim tax incentives.',
    averageRates: [
      { service: 'Web & Mobile Development', hourlyUsd: '$20 - $50 / hr', projectAvgUsd: '$1,800 - $7,500' },
      { service: 'Game Development & Unity', hourlyUsd: '$22 - $55 / hr', projectAvgUsd: '$2,000 - $9,000' },
      { service: '3D Art & Character Modeling', hourlyUsd: '$18 - $45 / hr', projectAvgUsd: '$1,200 - $5,500' },
      { service: 'QA & Test Automation', hourlyUsd: '$15 - $38 / hr', projectAvgUsd: '$1,000 - $4,500' },
      { service: 'UI/UX Design', hourlyUsd: '$18 - $42 / hr', projectAvgUsd: '$1,200 - $5,000' }
    ],
    tipsForForeigners: [
      'Document requirements clearly with visual wireframes and architectural diagrams to bridge language nuances.',
      'Timezone (UTC+7) overlaps well with Australia, Japan, Singapore, and European mornings.',
      'Vietnamese developers exhibit strong loyalty and craftsmanship on long-term dedicated projects.'
    ],
    englishProficiency: 'Moderate',
    timezone: 'UTC+7 (ICT)'
  },
  {
    id: 'poland',
    country: 'Poland',
    code: 'PL',
    flag: '🇵🇱',
    region: 'Europe',
    currency: 'Polish Zloty (PLN)',
    currencyCode: 'PLN',
    currencySymbol: 'zł',
    summary: 'A top European software engineering hub known for mathematical prowess, competitive programming champions, and fintech expertise.',
    popularServices: ['Backend & Cloud Architecture', 'Fintech & Algorithmic Trading Systems', 'AI & Machine Learning Engineering', 'Game Development (AAA & Indie)', 'Embedded Systems'],
    typicalClients: ['Western European Scale-ups', 'US Tech Companies', 'Nordic Banking Groups', 'German Automotive Tech'],
    popularPaymentMethods: ['SEPA Transfer', 'Wise', 'Revolut Business', 'Direct Bank Wire (mBank, Santander)'],
    freelancerTaxes: 'Freelancers operate as Sole Proprietors (JDG - Jednoosobowa Działalność Gospodarcza) with flexible tax schemes: Flat 19% tax (podatek liniowy), Lump-sum tax on revenue (Ryczałt) at 12% for IT services, or progressive scale.',
    taxRegistrationDetail: 'Requires NIP (Tax Identification Number) and REGON entry in CEIDG. VAT-EU registration enables reverse charge for European cross-border services.',
    businessEnvironment: 'Ranked among top 3 in global coding competitions (HackerRank, TopCoder), world-class technical universities, transparent EU legal framework.',
    popularSkills: ['Java & Spring Boot', 'Python, PyTorch & AI', 'C++ & Unreal Engine', 'Kubernetes & GCP/AWS', 'React & TypeScript'],
    majorLanguages: ['Polish (native)', 'English (very high business fluency)'],
    internetEconomy: 'High fiber optic availability, leading European fintech adoption (BLIK instant payments), high EU digital connectivity standards.',
    usefulPlatforms: ['No Fluff Jobs', 'Just Join IT', 'Malt', 'Useme', 'Upwork', 'Toptal'],
    legalConsiderations: 'B2B contracts are standard in the Polish tech industry. Invoices must include Polish VAT-EU number and mention "odwrotne obciążenie" (reverse charge) for EU clients.',
    averageRates: [
      { service: 'Software & Backend Architecture', hourlyUsd: '$45 - $110 / hr', projectAvgUsd: '$5,000 - $24,000' },
      { service: 'AI & Data Science', hourlyUsd: '$50 - $125 / hr', projectAvgUsd: '$6,000 - $28,000' },
      { service: 'UI/UX & Product Design', hourlyUsd: '$40 - $90 / hr', projectAvgUsd: '$3,500 - $15,000' },
      { service: 'DevOps & Cloud Engineering', hourlyUsd: '$50 - $120 / hr', projectAvgUsd: '$5,500 - $25,000' },
      { service: 'Game Programming', hourlyUsd: '$40 - $95 / hr', projectAvgUsd: '$4,500 - $20,000' }
    ],
    tipsForForeigners: [
      'Useme.com is a popular local service that allows Polish freelancers to invoice foreign clients without establishing a formal company.',
      'Polish engineers value technical clarity, modular code standards, and well-structured PR reviews.',
      'Timezone (CET/CEST) allows seamless collaboration with all of Europe and 3-4 hours of daily overlap with US East Coast.'
    ],
    englishProficiency: 'Very High',
    timezone: 'UTC+1 / UTC+2 (CET/CEST)'
  },
  {
    id: 'mexico',
    country: 'Mexico',
    code: 'MX',
    flag: '🇲🇽',
    region: 'Latin America',
    currency: 'Mexican Peso (MXN)',
    currencyCode: 'MXN',
    currencySymbol: '$',
    summary: 'The premier nearshore partner for North America, offering full US Central/Mountain timezone overlap and a burgeoning tech corridor in Guadalajara.',
    popularServices: ['Full-Stack Web Development', 'Mobile App Development', 'Bilingual Customer Support & Sales', 'Digital Marketing for Hispanic Markets', 'UI/UX Design'],
    typicalClients: ['US Startups & Enterprises', 'Canadian Digital Agencies', 'Latin American eCommerce', 'Direct-to-Consumer Brands'],
    popularPaymentMethods: ['Wise', 'Payoneer', 'Direct Wire (SPEI routing)', 'Stripe Connect', 'PayPal'],
    freelancerTaxes: 'Under the simplified trust regime (RESICO - Régimen Simplificado de Confianza), qualifying independent professionals with income up to 3.5M MXN pay extremely competitive income tax rates of 1% to 2.5%.',
    taxRegistrationDetail: 'Requires RFC (Registro Federal de Contribuyentes) with SAT and emission of electronic invoices (CFDI 4.0) with digital tax stamp.',
    businessEnvironment: 'Guadalajara ("Silicon Valley of Mexico") and Mexico City host vibrant tech talent communities, deep US trade integration under USMCA.',
    popularSkills: ['React, Node & Python', 'iOS & Android Native/Hybrid', 'Figma & User Research', 'Bilingual Copywriting', 'HubSpot & Salesforce Ops'],
    majorLanguages: ['Spanish (native)', 'English (high fluency in tech hubs)'],
    internetEconomy: 'Rapid 5G rollout, widespread fiber optic network in major cities, SPEI instant interbank payment system operational 24/7.',
    usefulPlatforms: ['Torre', 'Workana', 'Upwork', 'Turing', 'LinkedIn'],
    legalConsiderations: 'Cross-border service contracts with US/Canadian clients are categorized as service exports (Tasa 0% IVA), eliminating local value-added tax when invoiced properly with SAT guidelines.',
    averageRates: [
      { service: 'Web & Mobile Development', hourlyUsd: '$30 - $75 / hr', projectAvgUsd: '$3,000 - $14,000' },
      { service: 'UI/UX Product Design', hourlyUsd: '$28 - $65 / hr', projectAvgUsd: '$2,500 - $10,500' },
      { service: 'Bilingual Support & Sales Ops', hourlyUsd: '$15 - $35 / hr', projectAvgUsd: '$1,800 - $4,500 / mo' },
      { service: 'Digital Marketing & Content', hourlyUsd: '$22 - $55 / hr', projectAvgUsd: '$1,200 - $5,000' },
      { service: 'Video Editing & Motion', hourlyUsd: '$20 - $50 / hr', projectAvgUsd: '$1,000 - $4,200' }
    ],
    tipsForForeigners: [
      'Same-day flight accessibility and zero timezone friction make Mexican freelancers ideal for embedded sprint teams.',
      'Contractors expect payout denominated in USD or converted via Wise at fair interbank rates.',
      'Cultural affinity with North American business culture ensures smooth async and sync team communication.'
    ],
    englishProficiency: 'High',
    timezone: 'UTC-6 to UTC-5 (CST)'
  },
  {
    id: 'canada',
    country: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    region: 'North America',
    currency: 'Canadian Dollar (CAD)',
    currencyCode: 'CAD',
    currencySymbol: 'C$',
    summary: 'A world-class talent pool in machine learning, game development, creative storytelling, and enterprise software.',
    popularServices: ['AI Research & Machine Learning', 'Game Development & VFX', 'Enterprise Full-Stack Software', 'Brand Strategy & Copywriting', 'Product Design'],
    typicalClients: ['US Tech Giants & Startups', 'Canadian Enterprises', 'Global Game Studios', 'Creative Agencies'],
    popularPaymentMethods: ['Interac e-Transfer (domestic)', 'Wise Business', 'ACH / US Bank Wire', 'Stripe Invoicing'],
    freelancerTaxes: 'Sole proprietors report income on Form T2125 as part of personal tax returns. Registration for GST/HST is mandatory when gross worldwide revenue exceeds $30,000 CAD over four consecutive quarters. Services exported to non-residents are zero-rated for GST/HST.',
    taxRegistrationDetail: 'Requires Business Number (BN) from the Canada Revenue Agency (CRA) if registered for GST/HST.',
    businessEnvironment: 'Stable rule of law, identical business customs with the United States, strong tech clusters in Toronto-Waterloo, Vancouver, and Montreal.',
    popularSkills: ['PyTorch/TensorFlow ML', 'TypeScript & Rust', 'Unreal Engine & Houdini', 'Figma & Design Thinking', 'Cloud Governance & AWS'],
    majorLanguages: ['English (native)', 'French (native in Quebec)'],
    internetEconomy: 'Highly advanced telecom networks, high-speed fiber across all metropolitan corridors, robust digital economy.',
    usefulPlatforms: ['Contra', 'Upwork', 'Toptal', 'LinkedIn', 'CharityVillage'],
    legalConsiderations: 'Cross-border contracts between US and Canadian parties are straightforward under USMCA rules; W-8BEN form needed for US client tax withholding exemption.',
    averageRates: [
      { service: 'Software & AI Engineering', hourlyUsd: '$75 - $175 / hr', projectAvgUsd: '$7,500 - $35,000' },
      { service: 'UI/UX & Product Design', hourlyUsd: '$65 - $150 / hr', projectAvgUsd: '$5,500 - $26,000' },
      { service: 'Brand & Creative Copywriting', hourlyUsd: '$55 - $130 / hr', projectAvgUsd: '$1,800 - $9,000' },
      { service: 'VFX & Game Asset Creation', hourlyUsd: '$60 - $140 / hr', projectAvgUsd: '$3,500 - $18,000' },
      { service: 'Digital Marketing & Growth', hourlyUsd: '$60 - $135 / hr', projectAvgUsd: '$2,800 - $12,000' }
    ],
    tipsForForeigners: [
      'US clients benefit from the USD/CAD exchange rate advantage while collaborating across identical timezones with zero cultural friction.',
      'Ensure clear IP assignment and waiver of moral rights (standard in Canadian creative contracts).',
      'Canadian freelancers maintain high professionalism and thorough documentation.'
    ],
    englishProficiency: 'Native / Near-Native',
    timezone: 'UTC-8 to UTC-4 (PT/ET)'
  },
  {
    id: 'argentina',
    country: 'Argentina',
    code: 'AR',
    flag: '🇦🇷',
    region: 'Latin America',
    currency: 'Argentine Peso (ARS)',
    currencyCode: 'ARS',
    currencySymbol: '$',
    summary: 'A celebrated creative and engineering center with top Latin American English proficiency, world-renowned graphic design, and fintech acumen.',
    popularServices: ['Product & Visual Design', 'Full-Stack Web & Mobile Apps', 'Data Science & Python', 'Motion Graphics & Illustration', 'Growth Marketing'],
    typicalClients: ['US Tech Startups (Silicon Valley, NYC)', 'European Design Studios', 'Latin American Scale-ups', 'Global Web3 Communities'],
    popularPaymentMethods: ['Payoneer', 'Wise', 'Bitwage (crypto to bank)', 'Takenos / Ontop', 'USDC on Polygon'],
    freelancerTaxes: 'Freelancers register in the Monotributo simplified tax system or Régimen General. Export of services regulations allow individuals to invoice up to $24,000 USD annually and deposit foreign currency directly into local USD bank accounts without mandatory conversion.',
    taxRegistrationDetail: 'Requires CUIT (Clave Única de Identificación Tributaria) with AFIP/ARCA and issuance of electronic export invoices (Factura E).',
    businessEnvironment: 'Ranked #1 in Latin America for English proficiency (EF EPI), sophisticated European-influenced design culture, exceptional problem-solving ingenuity.',
    popularSkills: ['Figma & Micro-interactions', 'React, Next.js & Node.js', 'After Effects & Blender', 'Python & Pandas', 'Golang & Microservices'],
    majorLanguages: ['Spanish (native)', 'English (highest proficiency in Latin America)'],
    internetEconomy: 'High fiber availability in Buenos Aires, Córdoba, and Rosario; very high cryptocurrency adoption for inflation hedging and global commerce.',
    usefulPlatforms: ['Workana', 'Upwork', 'Toptal', 'Contra', 'LinkedIn'],
    legalConsiderations: 'Must issue Factura E for foreign clients. Contracts should clearly specify payment in US Dollars or stablecoins via international payment rails.',
    averageRates: [
      { service: 'UI/UX & Product Design', hourlyUsd: '$28 - $65 / hr', projectAvgUsd: '$2,500 - $11,000' },
      { service: 'Full-Stack Software Development', hourlyUsd: '$32 - $75 / hr', projectAvgUsd: '$3,200 - $14,000' },
      { service: 'Motion Graphics & 3D Art', hourlyUsd: '$25 - $60 / hr', projectAvgUsd: '$1,500 - $7,000' },
      { service: 'Growth Marketing & SEO', hourlyUsd: '$22 - $50 / hr', projectAvgUsd: '$1,200 - $5,000' },
      { service: 'Data Analytics & ML', hourlyUsd: '$30 - $70 / hr', projectAvgUsd: '$2,800 - $12,500' }
    ],
    tipsForForeigners: [
      'Argentine designers are among the best globally: their aesthetic sensibilities combine European minimalism with energetic Latin American flair.',
      'Always pay via reliable international fintech rails (Payoneer, Takenos, Wise) that respect contractor currency preferences.',
      'Timezone (UTC-3) allows full sync with US East Coast business hours.'
    ],
    englishProficiency: 'Very High',
    timezone: 'UTC-3 (ART)'
  },
  {
    id: 'spain',
    country: 'Spain',
    code: 'ES',
    flag: '🇪🇸',
    region: 'Europe',
    currency: 'Euro (EUR)',
    currencyCode: 'EUR',
    currencySymbol: '€',
    summary: 'A flourishing Mediterranean tech and creative haven, reinforced by the Digital Nomad Visa and burgeoning startup ecosystems in Barcelona and Madrid.',
    popularServices: ['Creative Direction & Visual Design', 'Full-Stack Web Development', 'Video Production & Commercial Editing', 'Multilingual Translation & Localization', 'Digital Marketing'],
    typicalClients: ['European Startups & Corporates', 'US Firms targeting EU/LATAM', 'Tourism & Luxury Hospitality', 'Fashion & Lifestyle Brands'],
    popularPaymentMethods: ['SEPA Direct Bank Transfer', 'Bizum (domestic)', 'Wise Business', 'Revolut', 'Stripe'],
    freelancerTaxes: 'Freelancers register as Autónomos under the RETA social security regime, paying monthly contributions based on real net income (tarifa plana available for first year at €80/mo). Standard VAT (IVA) is 21%, with IRPF personal income tax withholding on domestic invoices.',
    taxRegistrationDetail: 'Requires NIF/NIE and registration on Form 036 or 037 with the Agencia Tributaria (Hacienda) and Social Security.',
    businessEnvironment: 'High quality of life, premier lifestyle hub attracting global remote talent, modern digital infrastructure, and strong EU legal protections.',
    popularSkills: ['React & Vue.js', 'Creative Branding & Art Direction', 'Tailwind & Motion UI', 'Spanish/English Localization', 'Social Video & Reels Editing'],
    majorLanguages: ['Spanish (native)', 'Catalan/Basque/Galician', 'English (fluent in tech and creative hubs)'],
    internetEconomy: 'One of Europe’s most extensive fiber-to-the-home (FTTH) networks, exceeding 85% coverage; leading 5G coverage across urban areas.',
    usefulPlatforms: ['Malt España', 'InfoJobs Freelance', 'Upwork', 'Freelancer.com', 'LinkedIn'],
    legalConsiderations: 'Cross-border EU transactions require VIES registration (ROI - Registro de Operadores Intracomunitarios) to issue zero-VAT invoices under reverse charge.',
    averageRates: [
      { service: 'Web & App Development', hourlyUsd: '$40 - $95 / hr', projectAvgUsd: '$4,000 - $18,000' },
      { service: 'Brand Identity & UI/UX', hourlyUsd: '$38 - $85 / hr', projectAvgUsd: '$3,200 - $15,000' },
      { service: 'Video Production & Editing', hourlyUsd: '$32 - $75 / hr', projectAvgUsd: '$1,800 - $8,000' },
      { service: 'Translation & Localization', hourlyUsd: '$25 - $60 / hr', projectAvgUsd: '$800 - $4,000' },
      { service: 'Performance Marketing', hourlyUsd: '$35 - $80 / hr', projectAvgUsd: '$2,000 - $9,000' }
    ],
    tipsForForeigners: [
      'If you are an EU company, ask for the contractor’s NIF-IVA (Spanish VAT ID) to confirm VIES registration for reverse-charge invoicing.',
      'Spanish creative freelancers produce exceptional visual identities and video content.',
      'Work schedule generally aligns with CET business hours with standard European communication expectations.'
    ],
    englishProficiency: 'High',
    timezone: 'UTC+1 / UTC+2 (CET/CEST)'
  },
  {
    id: 'pakistan',
    country: 'Pakistan',
    code: 'PK',
    flag: '🇵🇰',
    region: 'Asia-Pacific',
    currency: 'Pakistani Rupee (PKR)',
    currencyCode: 'PKR',
    currencySymbol: '₨',
    summary: 'One of the top 5 fastest growing freelance economies in the world, with major strength in web engineering, graphic design, and digital operations.',
    popularServices: ['WordPress & Shopify Custom Development', 'Graphic Design & Vector Art', 'Front-End Development', 'SEO & Content Writing', 'Virtual Assistance & Data Entry'],
    typicalClients: ['Middle Eastern (UAE/Saudi) Businesses', 'US & UK Small Businesses', 'eCommerce Store Owners', 'Digital Marketing Agencies'],
    popularPaymentMethods: ['Payoneer (integrated with JazzCash)', 'Wise', 'Direct Bank Transfer via PR (State Bank of Pakistan)', 'Remitly / SadaPay'],
    freelancerTaxes: 'Freelancers registered with the Pakistan Software Export Board (PSEB) enjoy special tax regimes (concessional tax rates of 0.25% to 1% on export proceeds of IT and IT-enabled services through banking channels).',
    taxRegistrationDetail: 'Requires National Tax Number (NTN) from FBR and PSEB Freelancer Registration to access banking incentives and foreign remittance facilitations.',
    businessEnvironment: 'Massive young youth demographic, rapidly growing network of co-working spaces in Lahore, Karachi, and Islamabad, active government digitization initiatives.',
    popularSkills: ['PHP & Laravel', 'WordPress, Elementor & WooCommerce', 'React & Next.js', 'Adobe Illustrator & Photoshop', 'Amazon FBA Product Research'],
    majorLanguages: ['Urdu (national)', 'English (official business language)', 'Punjabi, Pashto, Sindhi'],
    internetEconomy: 'Rapid growth in broadband users, widespread digital banking through JazzCash, Easypaisa, and SadaPay.',
    usefulPlatforms: ['Fiverr', 'Upwork', 'Freelancer.com', 'Guru', 'LinkedIn'],
    legalConsiderations: 'State Bank of Pakistan mandates PRC (Proceeds Realization Certificate) for foreign exchange banking clearance. Direct foreign remittances should include proper reference codes for IT export.',
    averageRates: [
      { service: 'WordPress & Web Development', hourlyUsd: '$15 - $40 / hr', projectAvgUsd: '$800 - $4,500' },
      { service: 'Graphic & Vector Design', hourlyUsd: '$12 - $32 / hr', projectAvgUsd: '$400 - $1,800' },
      { service: 'SEO & Content Marketing', hourlyUsd: '$12 - $35 / hr', projectAvgUsd: '$600 - $2,500' },
      { service: 'eCommerce & Amazon Operations', hourlyUsd: '$10 - $28 / hr', projectAvgUsd: '$500 - $2,200 / mo' },
      { service: 'Video Editing for YouTube', hourlyUsd: '$12 - $30 / hr', projectAvgUsd: '$400 - $1,800' }
    ],
    tipsForForeigners: [
      'Facilitate payments through Payoneer or bank rails that allow integration with local fintechs like JazzCash or SadaPay.',
      'Pakistani freelancers are known for fast turnaround and responsive communication across client timezones.',
      'Clearly delineate milestones and deliverables to maintain seamless project velocity.'
    ],
    englishProficiency: 'High',
    timezone: 'UTC+5 (PKT)'
  },
  {
    id: 'australia',
    country: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    region: 'Asia-Pacific',
    currency: 'Australian Dollar (AUD)',
    currencyCode: 'AUD',
    currencySymbol: 'A$',
    summary: 'A sophisticated APAC commercial powerhouse with high design standards, mining & environmental tech, and robust freelance compliance.',
    popularServices: ['Product Design (UI/UX)', 'Full-Stack Cloud Engineering', 'Content Strategy & Technical Copywriting', 'Performance Marketing', 'Mining & Agritech Consulting'],
    typicalClients: ['Australian ASX-Listed Companies', 'US Tech Firms in APAC', 'Singapore & SE Asian Scale-ups', 'eCommerce & Direct-to-Consumer Brands'],
    popularPaymentMethods: ['PayID / Osko (Instant bank transfer)', 'Wise Business', 'Stripe Invoicing', 'Direct Bank Wire'],
    freelancerTaxes: 'Sole traders report business income under personal Tax File Number (TFN). GST registration is mandatory when annual turnover reaches $75,000 AUD. Freelancers can claim home office deductions and work-related equipment write-offs.',
    taxRegistrationDetail: 'Requires Australian Business Number (ABN). Invoices must display the ABN, otherwise clients are legally required to withhold 47% tax under "No ABN Withholding" rules.',
    businessEnvironment: 'High wage market with strict fair work standards, transparent corporate governance, high digital adoption, and top tier design sensibilities (home of Canva and Atlassian).',
    popularSkills: ['Figma Design Systems', 'React, TypeScript & Node', 'AWS & Serverless Architecture', 'Brand Voice & Long-form Copy', 'Conversion Rate Optimization (CRO)'],
    majorLanguages: ['English (native)'],
    internetEconomy: 'National Broadband Network (NBN) covers over 90% of premises with gigabit fiber expansion; fast mobile networks across urban corridors.',
    usefulPlatforms: ['Upwork', 'Expert360', 'Freelancer.com (founded in Sydney)', 'Toptal', 'LinkedIn'],
    legalConsiderations: 'Sham contracting provisions under the Fair Work Act penalize misrepresenting an employment relationship as an independent contractor arrangement.',
    averageRates: [
      { service: 'Web & Cloud Development', hourlyUsd: '$75 - $165 / hr', projectAvgUsd: '$7,000 - $35,000' },
      { service: 'UI/UX & Product Design', hourlyUsd: '$70 - $150 / hr', projectAvgUsd: '$6,000 - $28,000' },
      { service: 'Copywriting & Content Strategy', hourlyUsd: '$60 - $135 / hr', projectAvgUsd: '$2,000 - $9,500' },
      { service: 'Digital Marketing & CRO', hourlyUsd: '$65 - $145 / hr', projectAvgUsd: '$3,200 - $14,000' },
      { service: 'Video Production & Motion', hourlyUsd: '$60 - $130 / hr', projectAvgUsd: '$2,500 - $11,000' }
    ],
    tipsForForeigners: [
      'Always request an Australian Business Number (ABN) on contractor invoices to ensure compliance and avoid mandatory tax withholding.',
      'Australian timezone (UTC+10/11) provides complete real-time coverage of East Asia and overlaps with US West Coast late afternoon/evening.',
      'Australians value honest, pragmatic communication with minimal corporate jargon.'
    ],
    englishProficiency: 'Native / Near-Native',
    timezone: 'UTC+8 to UTC+11 (AEST/AEDT)'
  },
  {
    id: 'united-arab-emirates',
    country: 'United Arab Emirates',
    code: 'AE',
    flag: '🇦🇪',
    region: 'Middle East & Africa',
    currency: 'UAE Dirham (AED)',
    currencyCode: 'AED',
    currencySymbol: 'د.إ',
    summary: 'The premier Middle Eastern international crossroad with 0% personal income tax, dedicated freelance visas, and hyper-modern smart governance.',
    popularServices: ['Fintech & Web3 Architecture', 'Luxury Brand & Creative Direction', 'Bilingual (Arabic/English) Marketing', 'Commercial Video & Drone Production', 'Fractional Management Consulting'],
    typicalClients: ['GCC Sovereign & Government Entities', 'Global Multinational Regional HQs', 'Luxury Real Estate & Hospitality', 'Venture-backed MENA Startups'],
    popularPaymentMethods: ['UAE Direct Bank Transfer (IBAN)', 'Wise Business', 'Stripe UAE', 'Cryptocurrency / Stablecoin Rails'],
    freelancerTaxes: '0% personal income tax on freelance earnings. Corporate tax applies at 9% only if individual business revenue exceeds AED 1,000,000/year. Standard VAT is 5%, mandatory for businesses with turnover exceeding AED 375,000.',
    taxRegistrationDetail: 'Requires a freelance permit and residence visa issued through free zones such as Dubai Media City (DMC), twofour54 Abu Dhabi, or Shams.',
    businessEnvironment: 'Unmatched tax efficiency, high safety, central global timezone bridging Europe and Asia, ultra-modern smart city infrastructure.',
    popularSkills: ['Solidity & Web3 Systems', 'Luxury Editorial Art Direction', 'Arabic Copywriting & Translation', 'High-end Motion & VFX', 'Enterprise ERP Systems'],
    majorLanguages: ['Arabic (official)', 'English (universal business lingua franca)'],
    internetEconomy: 'World-leading 5G speed benchmarks, universal fiber optic broadband, completely paperless digital government services.',
    usefulPlatforms: ['Nabbesh', 'Malt UAE', 'Upwork', 'Toptal', 'LinkedIn'],
    legalConsiderations: 'Freelancers must operate under an authorized freelance permit/license to enter legally binding contracts within the UAE mainland and free zones.',
    averageRates: [
      { service: 'Web & Fintech Engineering', hourlyUsd: '$70 - $160 / hr', projectAvgUsd: '$7,000 - $35,000' },
      { service: 'Luxury Brand & Creative Direction', hourlyUsd: '$75 - $170 / hr', projectAvgUsd: '$6,500 - $32,000' },
      { service: 'Bilingual Marketing & PR', hourlyUsd: '$55 - $130 / hr', projectAvgUsd: '$3,000 - $14,000' },
      { service: 'Video & Commercial Production', hourlyUsd: '$65 - $150 / hr', projectAvgUsd: '$3,500 - $18,000' },
      { service: 'Management & Strategy Consulting', hourlyUsd: '$90 - $220 / hr', projectAvgUsd: '$10,000 - $50,000' }
    ],
    tipsForForeigners: [
      'UAE time (UTC+4) allows simultaneous daily collaboration with London, Singapore, Mumbai, and Frankfurt.',
      'Check if the freelancer holds a valid Free Zone Freelance Permit before executing commercial contracts in the UAE.',
      'Contracts in the region frequently include milestone-based advances (e.g. 50% upfront, 50% upon delivery).'
    ],
    englishProficiency: 'Very High',
    timezone: 'UTC+4 (GST)'
  },
  {
    id: 'south-africa',
    country: 'South Africa',
    code: 'ZA',
    flag: '🇿🇦',
    region: 'Middle East & Africa',
    currency: 'South African Rand (ZAR)',
    currencyCode: 'ZAR',
    currencySymbol: 'R',
    summary: 'A premier creative and engineering bridge for European and UK companies, offering native English fluency and identical timezones.',
    popularServices: ['Creative Design & Animation', 'Full-Stack Software Engineering', 'Content Writing & Editorial Copy', 'Customer Support Operations', 'Video Post-Production'],
    typicalClients: ['UK & European Creative Studios', 'Fintech Startups', 'US eCommerce Brands', 'Global Non-Profits'],
    popularPaymentMethods: ['Wise Direct to Bank', 'Payoneer', 'SWIFT Direct Bank Transfer', 'PayPal (via FNB)'],
    freelancerTaxes: 'Sole proprietors pay personal income tax at progressive rates up to 45%. Must register as a provisional taxpayer submitting bi-annual returns (IRP6). Standard VAT (15%) is compulsory if taxable turnover exceeds R1 million.',
    taxRegistrationDetail: 'Requires Tax Reference Number from the South African Revenue Service (SARS) and eFiling registration.',
    businessEnvironment: 'Top creative talent in Cape Town and Johannesburg, deep film and advertising legacy, perfect GMT+2 timezone alignment with Europe.',
    popularSkills: ['Figma & 3D Animation', 'React & Node.js', 'Native English Copywriting', 'Python & Data Engineering', 'Blender & Unreal Engine'],
    majorLanguages: ['English (native business language)', 'Afrikaans', 'Zulu', 'Xhosa'],
    internetEconomy: 'Extensive private fiber network across metro areas, active tech incubators, Starlink rollout expanding coverage.',
    usefulPlatforms: ['Upwork', 'OfferZen', 'NoSweat Work', 'Fiverr', 'LinkedIn'],
    legalConsiderations: 'South African Reserve Bank (SARB) foreign exchange regulations require incoming foreign remittances to be reported via Balance of Payments (BoP) customer declarations.',
    averageRates: [
      { service: 'Full-Stack Web Development', hourlyUsd: '$30 - $70 / hr', projectAvgUsd: '$3,000 - $13,000' },
      { service: 'Creative & UI/UX Design', hourlyUsd: '$28 - $65 / hr', projectAvgUsd: '$2,400 - $10,500' },
      { service: 'Copywriting & Editorial Content', hourlyUsd: '$22 - $55 / hr', projectAvgUsd: '$800 - $3,500' },
      { service: 'Video Editing & 3D Animation', hourlyUsd: '$25 - $60 / hr', projectAvgUsd: '$1,500 - $6,500' },
      { service: 'Customer Operations & Support', hourlyUsd: '$12 - $28 / hr', projectAvgUsd: '$1,200 - $3,200 / mo' }
    ],
    tipsForForeigners: [
      'Zero timezone difference with the UK and Europe makes daily Standups and pairing sessions seamless.',
      'Cape Town is recognized internationally for world-class advertising, video post-production, and graphic arts.',
      'Pay via Wise direct bank transfers to minimize foreign exchange friction.'
    ],
    englishProficiency: 'Native / Near-Native',
    timezone: 'UTC+2 (SAST)'
  }
];
