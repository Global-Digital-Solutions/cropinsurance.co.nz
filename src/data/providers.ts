export interface Provider {
  slug: string;
  name: string;
  shortName: string;
  rating: number | null;
  reviewCount: number | null;
  ratingSource: string | null;
  placeId: string | null;
  googleMapsUri: string | null;
  ratingAsAt: string | null;
  lastVerified: string;
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
    slug: 'gallagher',
    name: 'Gallagher NZ',
    shortName: 'Gallagher',
    rating: 4.1,
    reviewCount: 27,
    ratingSource: 'Google',
    placeId: 'ChIJkX5U5_pHDW0RKm5TlpiW53g',
    googleMapsUri: 'https://maps.google.com/?cid=8712097586272759338',
    ratingAsAt: '13 Aug 2026',
    lastVerified: 'August 2026',
    description: 'Gallagher (formerly Crombie Lockwood in New Zealand) operates across 30+ offices nationwide — from Invercargill to Kaitaia — with around 160,000 NZ clients and approximately 1,000 insurance professionals. Their dedicated Agriculture and Rural divisions provide specialist crop and agribusiness cover for NZ growers. Source: ajg.co.nz/about/, 13 August 2026.',
    speciality: 'Specialist agribusiness broker — Agriculture & Rural divisions',
    cropProducts: ['Named Perils Crop', 'Revenue Protection', 'Multi-Peril Crop', 'Parametric Insurance', 'Specialty Horticulture'],
    strengths: ['~160,000 NZ clients across business, rural and personal', '~1,000 NZ insurance professionals', '30+ offices from Invercargill to Kaitaia', 'Dedicated Agriculture and Rural insurance divisions', 'NZ heritage as Crombie Lockwood'],
    website: 'https://www.ajg.co.nz/business/rural-insurance/',
    coverageScore: 93,
    valueScore: 82,
    serviceScore: 88,
  },
  {
    slug: 'aon',
    name: 'Aon New Zealand',
    shortName: 'Aon',
    rating: 4.2,
    reviewCount: 25,
    ratingSource: 'Google',
    placeId: 'ChIJtTDcmvlHDW0RdNpNgVuU46o',
    googleMapsUri: 'https://maps.google.com/?cid=12313848926893365876',
    ratingAsAt: '13 Aug 2026',
    lastVerified: 'August 2026',
    description: 'One of the world\'s largest insurance brokers with a dedicated NZ Food, Agribusiness & Beverage practice. Aon combines global risk analytics with local expertise, attending National Fieldays annually and providing comprehensive crop and rural insurance programmes.',
    speciality: 'Global broker with NZ agribusiness team',
    cropProducts: ['Named Perils Crop', 'Revenue Protection', 'Vineyard Cover', 'Horticultural Cover', 'Arable Risk', 'Business Interruption'],
    strengths: ['Global risk analytics capability', 'Strong vineyard & viticulture expertise', 'Risk management consulting', 'Multi-country grower programmes', 'Data-driven risk assessment'],
    website: 'https://www.aon.co.nz',
    coverageScore: 91,
    valueScore: 80,
    serviceScore: 87,
  },
  {
    slug: 'howden',
    name: 'Howden Group NZ',
    shortName: 'Howden',
    rating: null,
    reviewCount: null,
    ratingSource: null,
    placeId: null,
    googleMapsUri: null,
    ratingAsAt: null,
    lastVerified: 'August 2026',
    description: 'Part of the global Howden Group operating in 122 countries with $51bn+ USD in premium under management. The NZ operation was built through multiple local acquisitions (formerly Apex, Wallace McLean, Omni, Sherpa, Bridges) and maintains offices across Auckland, Wellington, and Christchurch. Places business with top-rated insurers including AIG, Allianz, Chubb, NZI/IAG, Lloyd\'s, QBE, Vero, and Zurich.',
    speciality: 'Global rural insurance — large-scale operations',
    cropProducts: ['Named Perils Crop', 'Farm Package', 'Horticultural Cover', 'Rural Business Pack', 'Machinery Breakdown'],
    strengths: ['Global insurer network access', 'Suitable for large operations', 'Rural business package deals', 'International expertise', 'Strong reinsurance backing'],
    website: 'https://www.howdengroup.com/nz-en',
    coverageScore: 88,
    valueScore: 81,
    serviceScore: 84,
  },
];
