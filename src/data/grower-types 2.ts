export interface GrowerType {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  heroImage: string;
  icon: string;
  typicalCrops: string[];
  keyInsuranceNeeds: string[];
  coverageHighlights: string[];
}

export const growerTypes: GrowerType[] = [
  {
    slug: 'orchardists',
    name: 'Orchardists',
    shortName: 'Orchardists',
    description: 'Specialist insurance for kiwifruit, apple, pear, avocado and stone fruit orchardists across New Zealand.',
    longDescription: `New Zealand orchardists operate high-value horticultural businesses that are highly exposed to weather events and biological risks. Whether you grow kiwifruit in the Bay of Plenty, apples in Hawke's Bay, or cherries in Central Otago, our broker network can arrange specialist crop insurance that covers your standing crop, orchard infrastructure, and business income.`,
    heroImage: 'https://images.unsplash.com/photo-1564513895801-dc5a2a6c5fb2?w=1200&q=80',
    icon: '🌳',
    typicalCrops: ['Kiwifruit', 'Apples & Pears', 'Cherries', 'Avocados', 'Peaches & Nectarines', 'Apricots & Plums'],
    keyInsuranceNeeds: ['Standing crop cover', 'Hail protection', 'Frost cover', 'Orchard infrastructure', 'Business interruption', 'Post-harvest cover'],
    coverageHighlights: ['Named perils crop cover', 'Multi-peril revenue protection', 'Hail netting infrastructure', 'Coolstore & packing shed cover', 'Liability cover', 'Vehicle & machinery'],
  },
  {
    slug: 'viticulture-growers',
    name: 'Viticulture & Wine Growers',
    shortName: 'Viticulture',
    description: 'Vineyard and wine grape crop insurance for NZ\'s world-class wine growing regions.',
    longDescription: `New Zealand's wine industry is globally recognised for quality, particularly Marlborough Sauvignon Blanc and Pinot Noir from Central Otago. Viticulture insurance protects vine growers against the significant weather risks faced during the growing season — frost at budburst, hail at berry development, and wind damage — as well as protecting winery infrastructure and stored wine.`,
    heroImage: 'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=1200&q=80',
    icon: '🍷',
    typicalCrops: ['Sauvignon Blanc', 'Pinot Noir', 'Chardonnay', 'Pinot Gris', 'Riesling', 'Merlot & Cabernet'],
    keyInsuranceNeeds: ['Frost at budburst', 'Hail damage', 'Business interruption', 'Winery infrastructure', 'Stored wine cover', 'Machinery breakdown'],
    coverageHighlights: ['Named perils crop cover', 'Frost protection', 'Hail cover', 'Stored wine cover', 'Winery & equipment cover', 'Public liability'],
  },
  {
    slug: 'arable-farmers',
    name: 'Arable Farmers',
    shortName: 'Arable Farmers',
    description: 'Crop insurance for Canterbury, Southland and Marlborough arable farmers growing wheat, barley, oats, and maize.',
    longDescription: `Arable farming is the backbone of New Zealand's South Island agricultural economy. Canterbury and Southland arable farmers grow wheat, barley, oats, peas, and specialist seed crops under some of the most productive growing conditions in the Southern Hemisphere. Crop insurance helps arable farmers manage the financial risk of yield shortfalls due to adverse weather, enabling confident investment in inputs and equipment.`,
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    icon: '🚜',
    typicalCrops: ['Wheat', 'Barley', 'Oats', 'Peas & Beans', 'Maize (grain)', 'Oilseed Rape', 'Ryegrass Seed'],
    keyInsuranceNeeds: ['Yield guarantee', 'Revenue protection', 'Named perils cover', 'Input cost protection', 'Machinery breakdown', 'Farm vehicle cover'],
    coverageHighlights: ['Named perils crop cover', 'Multi-peril yield insurance', 'Standing crop fire cover', 'Farm machinery & vehicles', 'Rural property cover', 'Public liability'],
  },
  {
    slug: 'hop-growers',
    name: 'Hop Growers',
    shortName: 'Hop Growers',
    description: 'Specialist insurance for NZ hop growers in Nelson, Tasman and Marlborough.',
    longDescription: `New Zealand hops are celebrated worldwide for their unique aromatic profiles. The Nelson and Tasman regions are the heartland of NZ hop production, supplying craft breweries globally with varieties like Nelson Sauvin, Motueka, and Wakatu. Hops are a perennial crop with significant infrastructure investment in trellis systems. Insurance can protect both the standing crop and the trellis investment.`,
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    icon: '🍺',
    typicalCrops: ['Nelson Sauvin', 'Motueka', 'Wakatu', 'Green Bullet', 'Dr. Rudi', 'Wai-iti'],
    keyInsuranceNeeds: ['Hail cover', 'Trellis infrastructure', 'Frost at emergence', 'Wind damage', 'Disease cover', 'Business interruption'],
    coverageHighlights: ['Standing crop cover', 'Trellis & wire infrastructure', 'Named perils cover', 'Hail-specific cover', 'Machinery & drying equipment', 'Public & product liability'],
  },
  {
    slug: 'vegetable-growers',
    name: 'Vegetable Growers',
    shortName: 'Vegetable Growers',
    description: 'Crop insurance for outdoor and covered vegetable growers supplying supermarkets, processors and fresh markets.',
    longDescription: `New Zealand vegetable growers supply supermarkets, food processors, and fresh markets with an enormous range of products from potatoes and onions to broccoli, squash, and salad greens. Contract growers face particular financial exposure if they fail to meet supply obligations due to weather events. Crop insurance provides the safety net that enables growers to confidently enter into supply contracts.`,
    heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
    icon: '🌱',
    typicalCrops: ['Potatoes', 'Onions', 'Broccoli & Cauliflower', 'Squash', 'Leeks & Carrots', 'Lettuce & Salad Greens', 'Kumara'],
    keyInsuranceNeeds: ['Flood & excess moisture', 'Frost cover', 'Contract fulfillment', 'Irrigation failure', 'Storage loss', 'Machinery breakdown'],
    coverageHighlights: ['Named perils crop cover', 'Flood & drainage failure', 'Frost cover', 'Irrigation infrastructure', 'Packhouse & coolstore', 'Contract growing protection'],
  },
  {
    slug: 'contract-growers',
    name: 'Contract & Seed Growers',
    shortName: 'Contract Growers',
    description: 'Insurance for NZ seed and contract growers protecting against crop failure and contract non-delivery penalties.',
    longDescription: `Contract and seed growers have a unique risk profile — they are often locked into supply contracts with processors, seed companies, or merchants that require delivery of specific volumes and quality. Failure to meet these contracts due to weather events can result in significant penalties or loss of future contracts. Specialist crop insurance can protect contract growers against these financial consequences.`,
    heroImage: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&q=80',
    icon: '📋',
    typicalCrops: ['Ryegrass & Fescue Seed', 'Clover Seed', 'Vegetable Seed', 'Cereal Seed', 'Peas & Beans', 'Brassica Seed'],
    keyInsuranceNeeds: ['Contract non-delivery', 'Yield shortfall', 'Quality downgrade', 'Named perils cover', 'Revenue protection', 'Input cost protection'],
    coverageHighlights: ['Contract fulfillment protection', 'Yield guarantee', 'Quality cover', 'Named perils crop cover', 'Revenue protection', 'Business interruption'],
  },
];
