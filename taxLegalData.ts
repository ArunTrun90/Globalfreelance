export interface TaxFormGuide {
  name: string;
  purpose: string;
  whoSigns: string;
  keyRule: string;
  commonMistakes: string;
}

export interface ComplianceTopic {
  id: string;
  title: string;
  category: 'Tax Framework' | 'Contractual Compliance' | 'Invoicing & VAT' | 'Worker Classification';
  summary: string;
  detail: string[];
  bestPractices: string[];
  riskWarning: string;
}

export const TAX_FORMS: TaxFormGuide[] = [
  {
    name: 'Form W-8BEN / W-8BEN-E',
    purpose: 'Certificate of Foreign Status of Beneficial Owner for United States Tax Withholding.',
    whoSigns: 'Foreign individual freelancers (W-8BEN) or foreign entities (W-8BEN-E) hired by US clients.',
    keyRule: 'Exempts foreign contractors performing work entirely outside the United States from mandatory 30% IRS backup tax withholding. Valid for 3 consecutive calendar years.',
    commonMistakes: 'US clients mistakenly issuing Form 1099-NEC to foreign non-residents who worked overseas. If the foreign contractor performed services outside the US, no 1099 is filed; Form W-8BEN is kept securely on company record.'
  },
  {
    name: 'Form 1099-NEC (US Domestic Only)',
    purpose: 'Report Nonemployee Compensation paid to US resident contractors earning $600 or more in a tax year.',
    whoSigns: 'Issued by the US hiring client to the US resident independent contractor and the IRS.',
    keyRule: 'Strictly applies to US citizens, permanent green card holders, and US tax residents. Requires a Form W-9 on file before first payout.',
    commonMistakes: 'Filing 1099-NEC for overseas foreign contractors. Foreign nationals living abroad do not get 1099s; their foreign earnings are reported in their home tax jurisdictions.'
  },
  {
    name: 'EU Reverse Charge Invoicing (Article 196 EU VAT Directive)',
    purpose: 'Allows cross-border B2B digital services within the EU (or from non-EU clients) to be billed without local VAT.',
    whoSigns: 'European freelancers invoicing B2B clients in other EU member states or outside the European Union.',
    keyRule: 'Both client and freelancer must hold active VAT IDs verified in the EU VIES database. The invoice must explicitly include the phrase "VAT reverse charge applied / Autoliquidation / Odwrotne obciążenie".',
    commonMistakes: 'Failing to include the client’s valid VAT number or neglecting the mandatory reverse charge citation, which can trigger local tax audit penalties.'
  },
  {
    name: 'Letter of Undertaking (LUT) & FIRC (India)',
    purpose: 'Allows Indian IT and creative professionals to export digital services with 0% GST and clear foreign currency remittance audits.',
    whoSigns: 'Indian freelancers registered under GST exporting services to overseas clients.',
    keyRule: 'Filing an annual LUT on the GST portal permits exporting services without upfront payment of IGST. The foreign payment receipt requires an electronic FIRC (Foreign Inward Remittance Certificate).',
    commonMistakes: 'Failing to renew the annual LUT at the beginning of each financial year, or receiving funds into personal accounts without obtaining purpose code receipts.'
  }
];

export const COMPLIANCE_TOPICS: ComplianceTopic[] = [
  {
    id: 'misclassification-risk',
    title: 'Independent Contractor vs Employee Misclassification',
    category: 'Worker Classification',
    summary: 'Misclassifying a worker as an independent contractor when they function as a subordinate employee is the #1 legal risk in global hiring.',
    detail: [
      'The "Right to Control" Test: If the client dictates fixed daily working hours, demands exclusive dedication, provides all work hardware, or controls minute operational methods, courts may reclassify the worker as an employee.',
      'Equipment & Tools: Independent contractors must generally use their own computers, software licenses, and home office facilities.',
      'Integration & Core Business: If the worker is performing core operational line tasks indistinguishable from full-time staff and cannot hire substitutes, risk escalates significantly.',
      'Financial Independence: Genuine contractors have the legal freedom to market their services to multiple clients simultaneously and bear profit-or-loss business risk.'
    ],
    bestPractices: [
      'Structure agreements with clear Milestone / Deliverable-based language rather than hourly timesheet micromanagement.',
      'Never include employment benefits (paid vacation, severance, health insurance) directly in a freelance contract—increase the contractor rate to allow them to self-insure.',
      'Include a right of substitution clause permitting the contractor to delegate work to qualified colleagues if necessary.'
    ],
    riskWarning: 'Misclassification penalties can include retroactive payroll taxes, mandatory statutory pension contributions, backdated holiday pay, and legal fines.'
  },
  {
    id: 'ip-assignment',
    title: 'Intellectual Property (IP) Assignment & Work-for-Hire',
    category: 'Contractual Compliance',
    summary: 'Under the laws of many countries, copyright and patent rights automatically remain with the individual creator unless explicitly assigned in writing.',
    detail: [
      'The "Work-for-Hire" Doctrine is primarily a US legal concept. In many civil law countries (France, Germany, Spain), moral rights (droit moral) cannot be alienated or assigned, though economic exploitation rights can be licensed exclusively.',
      'Payment Trigger: Best-practice international contracts specify that IP ownership formally transfers to the client upon full payment of the agreed invoice amount.',
      'Open-Source Disclosure: Contracts must require contractors to warrant that no copyleft open-source code (e.g. GPL v3) is blended into proprietary commercial deliverables without prior written consent.'
    ],
    bestPractices: [
      'Use a comprehensive International Contractor IP Assignment clause covering worldwide, perpetual, royalty-free, and exclusive economic rights.',
      'Include an explicit waiver of moral rights to the fullest extent permitted by the contractor’s local jurisdiction.',
      'Mandate that the contractor warrants all deliverables are original and do not infringe on any third-party copyrights or trade secrets.'
    ],
    riskWarning: 'Without written IP assignment triggered on final payment, a disgruntled contractor can legally prevent the client from patenting or commercializing the codebase or designs.'
  },
  {
    id: 'international-contract-clauses',
    title: 'Essential Clauses in Cross-Border Freelance Agreements',
    category: 'Contractual Compliance',
    summary: 'Cross-border contracts bridge differing legal frameworks and must provide unmistakable clarity on performance, currency, and dispute resolution.',
    detail: [
      'Statement of Work (SOW): Detailed acceptance criteria, milestone deliverables, and definition of "Done".',
      'Currency & FX Volatility: Explicit stipulation of payment currency (typically USD or EUR) and which party absorbs payment rail processing fees.',
      'Termination for Convenience & Cause: Clear notice periods (typically 7 to 14 days) and payment for completed deliverables up to the termination date.',
      'Governing Law & Jurisdiction: Specifying neutral arbitration (e.g., ICC, LCIA) or the client’s local court system, with electronic signature validity affirmed.'
    ],
    bestPractices: [
      'Always execute agreements using legally binding e-signatures (DocuSign, PandaDoc, HelloSign).',
      'Keep signed contracts, W-8BEN forms, and all payment receipts archived in a dedicated compliance folder for at least 7 years.',
      'Define a clear 7-day review and revision window for deliverables to prevent indefinite project scope creep.'
    ],
    riskWarning: 'Vague statements of work without measurable milestones lead to payment disputes where international cross-border enforcement is economically unfeasible.'
  }
];
