export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    category: 'Getting Started',
    question: 'What is crop insurance and do I need it?',
    answer: 'Crop insurance protects growers against financial loss when crops are damaged or destroyed by weather events, disease, or other covered perils. If a crop failure would cause significant financial hardship to your farming business — particularly if you have supply contracts, significant input costs, or rely on crop income — then crop insurance is worth serious consideration.',
  },
  {
    category: 'Getting Started',
    question: 'How do I get a crop insurance quote in New Zealand?',
    answer: 'Fill in our online quote form with details about your farm, crop type, region, and the coverage you\'re looking for. Our specialist broker network will assess your requirements and come back with tailored options from FMG, Gallagher, Aon, Farmcover, and other specialist markets — at no cost to you.',
  },
  {
    category: 'Getting Started',
    question: 'Is crop insurance expensive?',
    answer: 'Premium costs depend on crop type, region, sum insured, and coverage level. As a guide, premiums typically range from 1–3% of the insured crop value. A $300,000 kiwifruit crop might cost $3,000–$9,000 to insure annually. Request a quote through our broker network to get an accurate figure for your operation.',
  },
  {
    category: 'Coverage',
    question: 'What perils does crop insurance cover?',
    answer: 'Named perils policies cover specific events: typically hail, frost, fire, wind, and flooding. Multi-peril policies cover virtually all natural causes of crop loss, including drought. The specific perils covered depend on the policy and insurer — our brokers will walk you through the options.',
  },
  {
    category: 'Coverage',
    question: 'Does crop insurance cover drought?',
    answer: 'Standard named perils policies typically do not cover drought. Drought cover requires either a multi-peril crop insurance (MPCI) policy or a specific parametric drought product. MPCI is available in NZ through specialist international markets accessed via brokers like Gallagher and Aon. Ask our advisers specifically about drought cover if this is a key risk for your region.',
  },
  {
    category: 'Coverage',
    question: 'Is disease covered by crop insurance?',
    answer: 'Disease coverage is generally excluded from standard named perils crop insurance. However, some policies include limited disease cover or business interruption following a disease event (e.g., PSA in kiwifruit). Specialist disease covers may be available through international markets. Discuss your specific crop and disease risks with our broker network.',
  },
  {
    category: 'Coverage',
    question: 'Can I insure my orchard infrastructure (hail nets, irrigation)?',
    answer: 'Yes. Orchard infrastructure including hail nets, irrigation systems, packhouses, and coolstores can be insured under rural property cover alongside your crop insurance. We recommend combining crop and infrastructure cover into a single package — our brokers can arrange both.',
  },
  {
    category: 'Coverage',
    question: 'Does crop insurance cover post-harvest losses?',
    answer: 'Post-harvest cover for quality losses occurring in storage or transit is available from select insurers. This is particularly relevant for kiwifruit and apple growers who store produce in coolstores before export. Ask our advisers about post-harvest cover options.',
  },
  {
    category: 'Claims',
    question: 'How do I make a crop insurance claim?',
    answer: 'Contact your broker or insurer immediately after a weather event damages your crop — most policies require notification within 24–48 hours. Document all damage thoroughly with photos before harvesting or remediating. A loss adjuster will be appointed to assess the damage. Do not harvest damaged crops without insurer approval as this can affect your claim.',
  },
  {
    category: 'Claims',
    question: 'How long does a crop insurance claim take to settle?',
    answer: 'Simple, clear-cut claims (e.g., a hailstorm with obvious damage) can settle within 4–8 weeks. More complex claims involving quality assessment, yield estimation, or disputed facts can take 3–6 months. Post-harvest claims may take longer as final quality losses are assessed after storage.',
  },
  {
    category: 'Claims',
    question: 'What if I disagree with the loss adjuster\'s assessment?',
    answer: 'You have the right to dispute a claims settlement if you believe the assessment is inaccurate. You can request a review by the insurer, appoint your own independent assessor, or refer the matter to the Insurance & Financial Services Ombudsman (IFSO). Your broker should advocate for a fair outcome on your behalf throughout the process.',
  },
  {
    category: 'Policy Details',
    question: 'When should I take out crop insurance?',
    answer: 'Crop insurance must be arranged before the risk event occurs — you cannot insure a crop after frost or hail is forecast. For seasonal crops, most insurers require cover in place before sowing or before the first frost-risk period. For perennial crops (orchards, vineyards), cover should be arranged well before the growing season starts. We recommend reviewing your insurance every year in June/July before the NZ growing season.',
  },
  {
    category: 'Policy Details',
    question: 'What is an excess and how does it apply to crop insurance?',
    answer: 'An excess (or deductible) is the amount you pay toward a claim before the insurer pays the rest. In crop insurance, excesses may be expressed as a dollar amount or a percentage of the claim. A higher excess typically reduces your premium. For example, a 10% excess on a $200,000 hail claim means you pay the first $20,000.',
  },
  {
    category: 'Policy Details',
    question: 'Can I insure multiple crops under one policy?',
    answer: 'Yes. Many rural insurers — particularly FMG — offer farm package policies that cover multiple crops, farm buildings, livestock, and vehicles under a single policy. This simplifies administration and can reduce overall premium costs. Our brokers can arrange comprehensive multi-crop farm packages.',
  },
  {
    category: 'Specific Crops',
    question: 'What insurance is available for kiwifruit growers?',
    answer: 'Kiwifruit growers can access: named perils crop cover (hail, frost, fire, wind), orchard infrastructure cover (hail nets, irrigation), business interruption cover, and post-harvest cover. PSA disease is generally excluded but business interruption following PSA can be arranged. FMG is the dominant provider, with Gallagher and Aon offering specialist options for larger orchards.',
  },
  {
    category: 'Specific Crops',
    question: 'What insurance do Marlborough vineyard owners need?',
    answer: 'Marlborough vine growers should prioritise: frost cover (budburst to harvest), hail cover, and business interruption. Given the significant capital in Marlborough vineyards, revenue protection policies are increasingly popular. Smoke taint cover has also become available from select markets. Our brokers with viticulture specialisation can structure a comprehensive programme.',
  },
  {
    category: 'Specific Crops',
    question: 'Is there crop insurance for arable farmers in Canterbury?',
    answer: 'Yes. Canterbury arable farmers can access named perils crop insurance from FMG and other rural insurers, covering hail, fire, wind, and waterlogging. Multi-peril cover including drought protection is available through specialist brokers. Cereal, oilseed, and seed crop growers are all eligible.',
  },
];
