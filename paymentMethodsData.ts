export interface PaymentMethodDetail {
  id: string;
  name: string;
  type: 'Fintech Rail' | 'Traditional Banking' | 'Merchant Gateway' | 'Digital Asset';
  typicalFees: string;
  transferSpeed: string;
  coverageCountries: string;
  supportedCurrencies: string[];
  bestFor: string;
  foreignExchangeMargin: string;
  complianceDoc: string;
  pros: string[];
  cons: string[];
}

export const PAYMENT_METHODS_DATA: PaymentMethodDetail[] = [
  {
    id: 'wise',
    name: 'Wise Business (formerly TransferWise)',
    type: 'Fintech Rail',
    typicalFees: '0.4% - 0.9% variable FX fee + ~$0.50 fixed per transfer',
    transferSpeed: 'Instant to 24 hours (80% instant to supported countries)',
    coverageCountries: '160+ countries and 50+ currencies',
    supportedCurrencies: ['USD', 'EUR', 'GBP', 'INR', 'PHP', 'BRL', 'CAD', 'AUD', 'PLN', 'MXN', 'SGD', 'AED'],
    bestFor: 'Transparent real mid-market exchange rates and multi-currency virtual receiving accounts.',
    foreignExchangeMargin: 'Zero markup (uses real mid-market Reuters exchange rate)',
    complianceDoc: 'FIRC (Foreign Inward Remittance Certificate) available for India; official payment confirmations for accounting.',
    pros: [
      'Guaranteed real mid-market exchange rates without hidden banking spreads',
      'Provides local account details in USD, EUR, GBP, CAD, AUD, and SGD',
      'Direct payout to local bank accounts, PIX (Brazil), and digital wallets'
    ],
    cons: [
      'Requires identity verification and compliance documentation',
      'Not available for domestic business transfers in a few restricted jurisdictions'
    ]
  },
  {
    id: 'payoneer',
    name: 'Payoneer',
    type: 'Fintech Rail',
    typicalFees: '$0 - 3% depending on transaction type; 2% currency conversion fee',
    transferSpeed: '1 to 2 business days to local bank accounts',
    coverageCountries: '190+ countries worldwide',
    supportedCurrencies: ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CNH'],
    bestFor: 'Marketplace payouts (Upwork, Fiverr) and freelancers in developing economies with restricted banking.',
    foreignExchangeMargin: 'Up to 2% - 2.75% above mid-market rate',
    complianceDoc: 'Generates automated payment slips, electronic FIRC requests, and tax documentation.',
    pros: [
      'Universal acceptance across almost all global freelance platforms',
      'Prepaid Mastercard option allows direct ATM withdrawals and online spending',
      'Deep integration with local payment networks like JazzCash (Pakistan) and GCash (Philippines)'
    ],
    cons: [
      'Higher currency conversion markup compared to Wise',
      'Annual maintenance fee ($29.95) if account is inactive for 12 months'
    ]
  },
  {
    id: 'stripe-invoicing',
    name: 'Stripe Invoicing & Connect',
    type: 'Merchant Gateway',
    typicalFees: '2.9% + $0.30 per successful card charge + 1% for international cards',
    transferSpeed: '2 business days rolling payout schedule',
    coverageCountries: '46+ merchant countries; accepts customer payments from 195+ countries',
    supportedCurrencies: ['135+ currencies worldwide'],
    bestFor: 'Direct client credit card billing, recurring retainers, and professional white-label invoicing.',
    foreignExchangeMargin: '1% - 2% currency conversion fee if invoiced in non-settlement currency',
    complianceDoc: 'Compliant automated PDF VAT/GST invoices with full tax breakdown and digital payment receipts.',
    pros: [
      'Frictionless client experience: clients pay via Apple Pay, Google Pay, or Credit Card in one click',
      'Automated recurring subscriptions and retainer billing',
      'Enterprise-grade fraud protection via Stripe Radar'
    ],
    cons: [
      'Higher aggregate fee (3% - 4.5% total cost for international credit cards)',
      'Merchant accounts are primarily available in high-income and OECD nations'
    ]
  },
  {
    id: 'swift-wire',
    name: 'SWIFT International Bank Wire',
    type: 'Traditional Banking',
    typicalFees: '$20 - $50 outgoing fee + $15 - $25 intermediary correspondent bank deduction',
    transferSpeed: '2 to 5 business days',
    coverageCountries: 'Universal global reach across 200+ countries and territories',
    supportedCurrencies: ['All globally traded fiat currencies'],
    bestFor: 'High-value enterprise contracts ($10,000+ USD) where percentage fintech fees would be excessive.',
    foreignExchangeMargin: '3% - 6% spread charged by receiving or correspondent retail banks',
    complianceDoc: 'Formal SWIFT MT103 confirmation message, MT940 bank statement, and official bank audit trail.',
    pros: [
      'No intermediary wallet limits; ideal for six-figure milestone payouts',
      'Direct institution-to-institution legal settlement favored by corporate legal teams',
      'Clear audit documentation for corporate tax deduction'
    ],
    cons: [
      'Slowest settlement speed with unpredictable intermediary bank charges',
      'Retail banks impose unfavorable currency exchange rates on conversion'
    ]
  },
  {
    id: 'paypal',
    name: 'PayPal',
    type: 'Fintech Rail',
    typicalFees: '3.49% + $0.49 fixed fee + 1.5% international transaction fee',
    transferSpeed: 'Instant to PayPal balance; 1-3 business days to local bank',
    coverageCountries: '200+ countries and regions',
    supportedCurrencies: ['25 currencies'],
    bestFor: 'Broad consumer recognition and low-friction initial payments from clients without onboarding.',
    foreignExchangeMargin: '3% - 4% spread above wholesale exchange rate',
    complianceDoc: 'Invoices and transaction history available inside dashboard.',
    pros: [
      'Highest brand awareness globally among non-technical clients',
      'Buyer and seller dispute protection programs',
      'Supports auto-withdrawal to local banks in India, Philippines, and Vietnam'
    ],
    cons: [
      'Among the most expensive options globally (fees can exceed 6% - 8% with FX)',
      'Risk of account holds and 180-day reserves on sudden revenue spikes'
    ]
  },
  {
    id: 'stablecoins-crypto',
    name: 'Cryptocurrency & Stablecoins (USDC / USDT)',
    type: 'Digital Asset',
    typicalFees: '< $0.05 on L2 networks (Polygon, Arbitrum, Base, Solana)',
    transferSpeed: 'Under 10 seconds (settlement finality)',
    coverageCountries: 'Border-agnostic (available anywhere with internet access)',
    supportedCurrencies: ['USDC', 'USDT', 'DAI', 'EURC'],
    bestFor: 'Freelancers in countries with severe currency inflation or capital controls (Argentina, Nigeria, Lebanon).',
    foreignExchangeMargin: 'Near zero (<0.1% on decentralized/centralized order books)',
    complianceDoc: 'Public cryptographic on-chain hash (tx hash); smart contract escrow receipts.',
    pros: [
      'Sub-minute global settlement with negligible network fees',
      'Protects contractors against rapid local currency depreciation',
      'No bank holidays, geographic restrictions, or payment processor freezes'
    ],
    cons: [
      'Requires client and freelancer Web3 operational literacy (wallets, chains)',
      'Freelancer is responsible for local off-ramping to fiat and local tax declarations'
    ]
  }
];
