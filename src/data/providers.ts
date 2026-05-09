export interface Provider {
  slug: string;
  name: string;
  shortName: string;
  logo: string;
  rating: number;
  reviewCount: number;
  description: string;
  speciality: string;
  cropProducts: string[];
  strengths: string[];
  website: string;
  coverageScore: number;
  valueScore: number;
  serviceScore: number;
}

export const providers: Provider[] = [
  {
    slug: 'fmg',
    name: 'FMG – Farmers Mutual Group',
    shortName: 'FMG',
    logo: '',
    rating: 4.7,
    reviewCount: 412,
    description: 'New Zealand\'s leading rural insurer, providing specialist crop and farm insurance to NZ growers for over 100 years. FMG is farmer-owned and provides dedicated rural advisers throughout the country.',
    speciality: 'NZ\'s #1 rural insurer — farmer-owned',
    cropProducts: ['Named Perils Crop', 'Multi-Peril Crop', 'Horticulture Cover', 'Arable Cover', 'Orchard Cover', 'Vineyard Cover'],
    strengths: ['Farmer-owned mutual', 'Nationwide rural adviser network', 'NZ-focused crop expertise', 'Strong claims reputation', 'Tailored horticulture policies'],
    website: 'https://www.fmg.co.nz',
    coverageScore: 95,
    valueScore: 88,
    serviceScore: 94,
  },
  {
    slug: 'gallagher',
    name: 'Gallagher NZ',
    shortName: 'Gallagher',
    logo: '',
    rating: 4.5,
    reviewCount: 187,
    description: 'A global insurance broker with a strong New Zealand rural and agribusiness practice. Gallagher (formerly AJG) can access specialist international crop insurance markets alongside domestic insurers, providing broader coverage options for large-scale growers.',
    speciality: 'Global broker — specialist agribusiness division',
    cropProducts: ['Named Perils Crop', 'Revenue Protection', 'Multi-Peril Crop', 'Parametric Insurance', 'Specialty Horticulture'],
    strengths: ['Access to London & global insurance markets', 'Specialist agribusiness brokers', 'Parametric weather solutions', 'Large-scale orchard expertise', 'Complex risk structuring'],
    website: 'https://www.gallagher.co.nz',
    coverageScore: 93,
    valueScore: 82,
    serviceScore: 88,
  },
  {
    slug: 'aon',
    name: 'Aon New Zealand',
    shortName: 'Aon',
    logo: '',
    rating: 4.4,
    reviewCount: 156,
    description: 'One of the world\'s largest insurance brokers with a dedicated NZ agribusiness practice. Aon combines global reach and risk analytics with local expertise to arrange comprehensive crop and rural insurance programmes.',
    speciality: 'Global broker with NZ agribusiness team',
    cropProducts: ['Named Perils Crop', 'Revenue Protection', 'Vineyard Cover', 'Horticultural Cover', 'Arable Risk', 'Business Interruption'],
    strengths: ['Global risk analytics capability', 'Strong vineyard & viticulture expertise', 'Risk management consulting', 'Multi-country grower programmes', 'Data-driven risk assessment'],
    website: 'https://www.aon.co.nz',
    coverageScore: 91,
    valueScore: 80,
    serviceScore: 87,
  },
  {
    slug: 'farmcover',
    name: 'Farmcover New Zealand',
    shortName: 'Farmcover',
    logo: '',
    rating: 4.3,
    reviewCount: 98,
    description: 'A specialist NZ farm and rural insurance provider offering straightforward, competitive crop and property cover for farms of all sizes. Farmcover focuses on delivering simple, transparent policies with competitive premiums.',
    speciality: 'Specialist NZ farm insurance — competitive premiums',
    cropProducts: ['Named Perils Crop', 'Farm Property', 'Horticultural Cover', 'Arable Cover', 'Rural Liability'],
    strengths: ['Competitive premiums', 'Simple policy wording', 'NZ-focused products', 'Fast online quotes', 'Good for smaller operations'],
    website: 'https://www.farmcover.co.nz',
    coverageScore: 82,
    valueScore: 92,
    serviceScore: 83,
  },
  {
    slug: 'howden',
    name: 'Howden Group NZ',
    shortName: 'Howden',
    logo: '',
    rating: 4.3,
    reviewCount: 74,
    description: 'Part of the global Howden Group, the NZ operation provides rural and farm insurance including crop cover, particularly for larger farming operations. Howden\'s global reach enables access to specialist reinsurance markets for high-value crop programmes.',
    speciality: 'Global rural insurance — large-scale operations',
    cropProducts: ['Named Perils Crop', 'Farm Package', 'Horticultural Cover', 'Rural Business Pack', 'Machinery Breakdown'],
    strengths: ['Global insurer network access', 'Suitable for large operations', 'Rural business package deals', 'International expertise', 'Strong reinsurance backing'],
    website: 'https://www.howdengroup.com/nz',
    coverageScore: 88,
    valueScore: 81,
    serviceScore: 84,
  },
];
