export interface CropType {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  longFormContent: string;
  heroImage: string;
  icon: string;
  keyRisks: string[];
  coverageHighlights: string[];
  typicalPremiumRange: string;
  mainRegions: string[];
  faqs: { q: string; a: string }[];
}

export const cropTypes: CropType[] = [
  {
    slug: 'kiwifruit-insurance',
    name: 'Kiwifruit Insurance',
    shortName: 'Kiwifruit',
    description: 'Protect your kiwifruit orchard from PSA, adverse weather, hail, frost, and post-harvest losses. Specialist crop insurance information for NZ orchardists.',
    longDescription: `New Zealand is the world's third-largest kiwifruit producer, with the Bay of Plenty region at the heart of a $3+ billion export industry. Kiwifruit growers face unique and evolving risks — from PSA disease and late frosts to hailstorms during flowering and post-harvest quality failures. A well-structured kiwifruit insurance policy protects your orchard investment, crop revenue, and business continuity against these threats, giving you the financial security to operate with confidence each season.`,
    longFormContent: `
<h2>Kiwifruit Insurance in New Zealand: A Complete Guide</h2>

<p>New Zealand kiwifruit is among the country's most valuable horticultural exports, generating over $3 billion in export revenue annually. The Bay of Plenty is the heartland of production, with Northland, Waikato, and Gisborne also contributing significantly. Zespri — the world's largest marketer of kiwifruit — coordinates supply from around 2,800 licensed NZ growers, making kiwifruit a cornerstone of regional economies in the upper North Island.</p>

<p>With such significant capital tied up in orchard infrastructure, vines, and growing crops, insurance is not a luxury for kiwifruit growers — it is a fundamental risk management tool. A single hailstorm during flowering, a late frost event, or a PSA outbreak can eliminate an entire season's revenue and set back a business by years.</p>

<h3>Key Risks Facing Kiwifruit Growers</h3>

<p><strong>PSA (Pseudomonas syringae pv. actinidiae)</strong> devastated the New Zealand kiwifruit industry between 2010 and 2013, causing an estimated $885 million in losses. While the industry has largely recovered through the adoption of PSA-tolerant Gold3 (SunGold) varieties and improved canopy management, PSA remains an ongoing biosecurity threat. New strain variants are possible, and growers in regions with high PSA pressure still face vine losses in severe seasons.</p>

<p><strong>Hailstorms</strong> are the most frequent and costly weather event affecting kiwifruit growers. The key vulnerability window is during flowering (typically September–October) and the early fruitlet stage. Hail at flowering damages the emerging flowers, reducing fruit set and ultimately crop volume. Hail during fruitlet development can cause surface scarring that renders the fruit unacceptable to export markets, resulting in downgrading to juice processing at a significantly lower price per tray.</p>

<p><strong>Late frosts</strong> in the Bay of Plenty are uncommon but catastrophic when they occur. A frost event during budbreak or flowering can destroy 60–100% of a season's crop. Spring frosts are more frequent in Northland and Gisborne growing districts. Cover must be in place before frost events occur — insurers will not accept new applications once a frost warning has been issued.</p>

<p><strong>Cyclones and windstorms</strong> pose an increasing threat as climate patterns shift. Cyclone Gabrielle (2023) caused significant damage across Hawke's Bay and Northland, affecting a wide range of horticultural operations. Wind damage to kiwifruit can include vine defoliation, bruising of developing fruit, and structural damage to trellises and hail netting systems.</p>

<p><strong>Post-harvest quality failures</strong> — where fruit fails export quality standards after picking — are an insurable risk under some specialist policies. This typically covers scenarios where the grower has met production targets but the crop fails fruit quality assessments, resulting in a lower return than anticipated.</p>

<h3>Types of Kiwifruit Insurance Available in NZ</h3>

<p><strong>Named Perils Crop Cover</strong> is the most widely used form of kiwifruit insurance. Under this policy type, your crop is insured against a specific list of named events — typically hail, frost, fire, lightning, windstorm, and flooding. You know exactly what is and isn't covered. Premiums are generally lower than multi-peril cover. Named perils cover is available from specialist crop insurance brokers with access to domestic and international markets.</p>

<p><strong>Multi-Peril Crop Insurance (MPCI)</strong> provides broader protection, guaranteeing a minimum yield or revenue regardless of the cause of loss — including events not listed in a named perils policy. MPCI is more complex to structure and underwrite, and is typically accessed through international insurance markets via specialist brokers with access to international insurance markets rather than domestic NZ insurers. For large orchards with significant revenue exposure, MPCI can provide comprehensive protection that named perils alone cannot match.</p>

<p><strong>Hail Netting Infrastructure Cover</strong> is a separate but critical consideration. Modern kiwifruit orchards often invest $30,000–$80,000 per hectare in overhead hail netting systems. These nets protect the crop from hailstorms but can themselves be damaged or destroyed by severe hail, windstorm, or snow loading. The netting infrastructure should be insured as rural property, alongside any packhouse, coolstore, or irrigation infrastructure on the orchard.</p>

<p><strong>Business Interruption Cover</strong> protects your gross profit during a period when the orchard's productive capacity is significantly reduced — for example, following a PSA outbreak that requires vine removal and replanting, or following major structural damage from a cyclone. Business interruption can cover the income shortfall during the recovery period, which for PSA-affected replanting can span 3–5 years before vines return to full production.</p>

<h3>PSA Disease Coverage: What's Actually Available</h3>

<p>PSA is explicitly excluded from most standard named perils crop insurance policies because it is a biological disease rather than a weather event. However, several partial solutions exist. Business interruption cover can compensate for income lost during a PSA-forced replanting programme, even if the initial disease outbreak itself is not a covered event. Some specialist international markets accessed through brokers can include limited disease cover or re-establishment cost cover following a notifiable disease event, though these typically carry significant sub-limits and strict notification requirements. If PSA risk is a primary concern for your orchard, discuss disease-specific options explicitly with our broker network — the right solution may require accessing non-standard market capacity.</p>

<h3>Premium Costs and What Influences Them</h3>

<p>Kiwifruit insurance premiums typically range from 1% to 3.5% of the insured crop value, depending on a range of factors. Orchards with overhead hail netting receive significant premium discounts on hail cover — a netted orchard may pay 60–70% less for hail cover than an unnetted orchard. Regional risk also affects premiums: Northland and coastal Bay of Plenty orchards face higher cyclone and wind risk, which is reflected in pricing. Claims history is a factor for larger policies. Variety also matters — Gold3 (SunGold) orchards face different risk profiles from Green orchards, and insurers price accordingly.</p>

<p>As a rough guide, a 5-hectare kiwifruit orchard with an insured crop value of $300,000 might expect to pay $4,500–$10,500 per year for named perils cover including hail and frost. A 20-hectare SunGold operation with $1.2M in crop value would typically pay $15,000–$42,000 depending on coverage structure and excess level. These are indicative figures only — contact our broker network for an accurate quote specific to your operation.</p>

<h3>When to Arrange Kiwifruit Insurance</h3>

<p>The critical window for placing kiwifruit insurance is before the start of the growing season — ideally in June or July before flowering commences. Most insurers require a minimum 14-day waiting period from policy inception before cover is active, and they will not accept new applications once a known weather event or disease outbreak is pending. Trying to arrange cover in September when flowering has already started, or during an active frost warning, will typically be declined. Annual policy reviews should be conducted each June, before the new season's growing cycle begins.</p>

<h3>Making a Claim on Your Kiwifruit Policy</h3>

<p>Following a hailstorm, frost, or other covered event, notify your insurer or broker as soon as practicable — ideally within 24–48 hours. Most specialist rural insurers will deploy a crop loss assessor quickly following a weather event. The assessor will inspect the orchard, document the damage, and estimate the likely yield impact. For hail damage, this process often occurs both immediately after the event (to document the damage) and again at harvest (to assess the final yield reduction). Keeping detailed crop records — historical yield data, spray records, and growing management records — significantly speeds up the claims process and supports the assessment of your actual loss.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=1200&q=80',
    icon: '🥝',
    keyRisks: ['PSA & disease outbreaks', 'Hailstorm during flowering', 'Late frost damage', 'Cyclone & windstorm', 'Post-harvest quality failure', 'Drought & water stress', 'Biosecurity incursion'],
    coverageHighlights: ['Named perils crop cover', 'Multi-peril yield guarantee', 'Revenue protection', 'Post-harvest cover', 'Business interruption', 'Hail netting infrastructure', 'PSA business interruption'],
    typicalPremiumRange: '$4,500 – $42,000/year',
    mainRegions: ['Bay of Plenty', 'Northland', 'Waikato', 'Gisborne', 'Coromandel'],
    faqs: [
      { q: 'Does kiwifruit insurance cover PSA disease?', a: 'PSA (Pseudomonas syringae pv. actinidiae) is typically excluded from standard named perils crop insurance because it is a biological disease rather than a weather event. However, business interruption cover can compensate for income lost during a PSA-forced replanting programme, and some specialist international market policies offer limited disease or re-establishment cover. Speak with our broker network specifically about PSA risk and they will identify what coverage options are available for your orchard.' },
      { q: 'What is the typical kiwifruit insurance premium in NZ?', a: 'Premiums typically range from 1% to 3.5% of the insured crop value. A 5-hectare orchard with $300,000 insured crop value might pay $4,500–$10,500 per year for named perils cover including hail and frost. Orchards with overhead hail netting receive substantial discounts on hail cover. Contact our broker network for an accurate quote specific to your operation, variety, and region.' },
      { q: 'When should I arrange kiwifruit insurance?', a: 'The critical window is June–July, before flowering commences in September–October. Most insurers require a minimum 14-day waiting period from policy inception, and will decline new applications once a known weather event or disease outbreak is pending. Annual policy reviews should be conducted each June before the new season begins.' },
      { q: 'Is hail netting infrastructure covered by crop insurance?', a: 'Hail netting systems — which typically cost $30,000–$80,000 per hectare to install — should be insured as rural property under a farm buildings and infrastructure policy, separate from your crop insurance. Our brokers can arrange a combined package covering both the crop and the netting infrastructure, often at a better total premium than insuring each separately. Having hail netting in place will also reduce your crop insurance premium significantly.' },
      { q: 'Can I get kiwifruit insurance mid-season?', a: 'Cover can be arranged mid-season in some circumstances, but insurers will not accept applications once a known risk event is pending (e.g., during a frost warning or an announced PSA outbreak). There is typically a 14-day waiting period from policy inception. For the best coverage and most competitive pricing, arrange cover before the season starts in June–July.' },
      { q: 'Does crop insurance cover cyclone damage to kiwifruit?', a: 'Yes. Windstorm and cyclone damage is typically a covered peril under named perils kiwifruit insurance. Following Cyclone Gabrielle in 2023, many Northland and Bay of Plenty growers successfully claimed for both crop damage and orchard infrastructure losses. Ensure your policy includes windstorm as a named peril and that your infrastructure (trellises, netting, packhouse) is separately covered under a rural property policy.' },
      { q: 'What is the difference between Gold and Green kiwifruit insurance rates?', a: 'Gold3 (SunGold) kiwifruit typically commands higher per-tray prices than Green, resulting in a higher insured value per hectare and therefore higher absolute premiums. However, the premium rate (as a percentage of insured value) may be similar between varieties. Gold3 orchards in PSA-risk areas may face loading due to biosecurity exposure. Our brokers can provide variety-specific quotes reflecting the current market value of your crop.' },
    ],
  },
  {
    slug: 'apple-pear-insurance',
    name: 'Apple & Pear Insurance',
    shortName: 'Apples & Pears',
    description: 'Specialist hail, frost and weather cover for apple and pear orchards across Hawke\'s Bay, Nelson and Central Otago — protecting your pip fruit investment.',
    longDescription: `New Zealand's apple and pear industry is centred in Hawke's Bay, Nelson/Tasman, and Central Otago, generating over $800 million in exports annually. Hail is the single biggest insured peril for pip fruit growers — a single storm can mark the surface of fruit, rendering an entire season's crop unmarketable. Comprehensive orchard insurance protects your crop revenue, infrastructure investment, and business income against hail, frost, windstorm, and other adverse weather events.`,
    longFormContent: `
<h2>Apple and Pear Insurance in New Zealand: A Complete Guide</h2>

<p>New Zealand's pip fruit industry is world-renowned for quality, exporting over $800 million in apples and pears annually to markets across Asia, Europe, and the UK. The industry is concentrated in three main regions: Hawke's Bay (the largest production area), Nelson/Tasman, and Central Otago. Varieties range from Gala, Braeburn, and Fuji to premium export lines like Jazz, Envy, and Pacific Rose, with pear varieties including Taylor's Gold and Bosc commanding strong market premiums.</p>

<p>For orchardists, the financial exposure is substantial. A commercial apple orchard represents a capital investment of $100,000 to $300,000 per hectare in establishment costs, tree systems, and infrastructure, with a typical production period of 15–25 years. The annual crop value per hectare can range from $30,000 to over $80,000 for premium varieties under contract supply arrangements. Without insurance, a single adverse weather event can eliminate an entire year's revenue while fixed costs — debt servicing, labour, and inputs — continue regardless.</p>

<h3>Hail: The Primary Risk for NZ Pip Fruit Growers</h3>

<p>Hail is the most frequent and costly insured risk for apple and pear growers in New Zealand. Unlike livestock or grain crops where hail must cause total destruction to result in a claim, apple and pear crops can be rendered entirely unmarketable by surface marking alone. A hailstone the size of a pea striking developing fruit leaves a scar that prevents the fruit from meeting the visual standards required for fresh export or retail sale. Fruit that cannot be exported or sold as Class 1 fresh may be downgraded to processing use (juice, sauce) at a price reduction of 70–90% below export value.</p>

<p>Hail cover for pip fruit is typically structured on a "crop damage" basis, where the insurer pays the difference between the expected crop value and the actual return achieved — accounting for any downgrading from export to processing. Loss assessors are deployed immediately following a hail event to document the damage, with a final assessment conducted at or after harvest to determine the actual yield and quality outcome.</p>

<p>Hail nets — overhead netting systems that intercept hailstones before they reach the canopy — have become increasingly common in New Zealand pip fruit orchards. A netted block typically costs $40,000–$120,000 per hectare to establish and install. The nets dramatically reduce crop losses from hail, but the netting infrastructure itself can be damaged or destroyed by severe hail, windstorm, or snow loading and should be insured as rural property. Orchards with overhead hail netting pay significantly reduced premiums for hail cover compared to unnetted blocks — the insurance saving often helps justify the capital expenditure on netting over time.</p>

<h3>Frost Risk at Blossom and Fruitlet Stage</h3>

<p>Spring frost is the second major weather risk for pip fruit growers. NZ apple and pear orchards bloom in September–October, when late cold snaps can cause blossom and fruitlet damage across large areas. A frost event during full bloom can destroy 80–100% of the season's potential crop. Even a partial frost that kills 30–40% of blossoms has a severe impact on final yield.</p>

<p>Frost cover is available as an optional addition to named perils policies. Most policies cover frost damage to growing crops from October onwards in the main growing regions. Growers with orchards in frost-prone locations — valley floors, low-lying blocks — should pay particular attention to frost cover terms, including any restrictions on coverage period or measurement thresholds.</p>

<p>Risk mitigation measures such as wind machines, helicopter frost protection, and over-tree irrigation (ice-forming systems) can reduce both the incidence and severity of frost damage and may influence insurance premiums. Growers using wind machines should document their operation as some policies require active frost protection measures to be deployed during frost events.</p>

<h3>Cyclone Gabrielle: A Watershed Moment for Hawke's Bay Orchardists</h3>

<p>Cyclone Gabrielle in February 2023 caused catastrophic damage across Hawke's Bay — New Zealand's most important apple growing region. The cyclone brought unprecedented rainfall and flooding that destroyed orchards, infrastructure, and entire properties. It was a stark reminder that even well-insured operations can face losses beyond the scope of standard crop cover when infrastructure damage, land contamination, and prolonged recovery timelines combine. Growers who had comprehensive rural property cover alongside their crop policies were far better placed to recover than those who had crop-only coverage. If your orchard is in a flood-prone area, ensure your property cover includes flood and landslip alongside your crop policy.</p>

<h3>Coverage Options for Apple and Pear Growers</h3>

<p><strong>Hail-only cover</strong> is the most popular and cost-effective entry point for many pip fruit growers. It provides targeted protection for the most likely and costly risk. Premiums for hail-only cover on unnetted orchards typically range from 2.0% to 4.5% of the insured crop value, varying by region and claims history.</p>

<p><strong>Named perils cover</strong> adds frost, windstorm, fire, flooding, and other specified events to the hail base. This broader coverage suits orchards in areas with multiple weather risk exposures — Hawke's Bay growers now commonly include windstorm and flood cover following Cyclone Gabrielle.</p>

<p><strong>Multi-peril revenue protection</strong> guarantees a minimum income regardless of the cause of crop loss. This is most appropriate for large orchards with significant debt servicing obligations or contract supply commitments where any revenue shortfall creates financial hardship.</p>

<p><strong>Infrastructure cover</strong> for hail netting, bins, coolstore, packhouse, and irrigation systems should complement crop cover. Our brokers can combine crop and property cover into a single coordinated rural package.</p>

<h3>Premium Costs for Apple and Pear Insurance</h3>

<p>Premium rates for NZ pip fruit insurance vary significantly based on the orchard's region, hail history, coverage structure, and whether hail nets are installed. As a rough guide, hail-only cover for an unnetted Hawke's Bay apple orchard with $400,000 in insured crop value might cost $8,000–$18,000 per year. A netted Nelson orchard with the same crop value might pay $2,500–$6,000 for equivalent hail cover. Named perils cover adding frost and windstorm typically costs 20–40% more than hail-only cover. Contact our broker network for a personalised quote.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=1200&q=80',
    icon: '🍎',
    keyRisks: ['Hailstorm surface marking', 'Spring frost at blossom', 'Windstorm & flood (Gabrielle risk)', 'Hail netting damage', 'Post-harvest price collapse', 'Biosecurity incursion', 'Drought & water shortage'],
    coverageHighlights: ['Hail-only cover (most popular)', 'Named perils crop cover', 'Multi-peril revenue protection', 'Infrastructure cover (hail nets, bins)', 'Post-harvest storage cover', 'Business interruption', 'Flood & windstorm'],
    typicalPremiumRange: '$2,500 – $18,000/year',
    mainRegions: ["Hawke's Bay", 'Nelson/Tasman', 'Central Otago', 'Canterbury', 'Marlborough'],
    faqs: [
      { q: 'Is hail the main risk for apple growers?', a: 'Yes — hail is the most common and costly insured risk for pip fruit growers in NZ. A single hailstorm can cause surface marking on fruit that renders it unacceptable for export, forcing downgrading to processing use at 70–90% lower prices. Hail cover, whether on its own or as part of a named perils policy, is the most important insurance for most apple and pear growers.' },
      { q: 'Can I insure my apple crop against frost?', a: 'Yes. Frost cover at blossom and fruitlet stage is available from specialist rural insurers as an optional addition to named perils policies. Spring frosts in October–November can destroy a significant proportion of a season\'s crop. Early policy placement (before August) is essential as insurers may close off cover once frost warnings are issued for your region.' },
      { q: 'Do hail nets reduce my insurance premium?', a: 'Yes, significantly. Orchards with overhead hail netting receive major discounts on hail cover premiums — often 50–75% lower than unnetted orchards with equivalent crop values. The netting infrastructure itself (typically $40,000–$120,000 per hectare) should be separately insured as rural property. Many growers find that insurance savings help justify the capital investment in hail netting over time.' },
      { q: 'What did Cyclone Gabrielle teach NZ orchardists about insurance?', a: 'Cyclone Gabrielle (2023) demonstrated the importance of having comprehensive rural property cover alongside crop insurance. Many Hawke\'s Bay orchardists found their crop policies covered fruit losses, but additional covers were needed for orchard infrastructure damage, flooding, land contamination, and business interruption during the extended recovery period. If your orchard is in a flood or cyclone-risk area, speak with our brokers about ensuring your full coverage package addresses these scenarios.' },
      { q: 'How quickly will an assessor attend after a hail event?', a: 'Specialist rural insurers typically deploy crop loss assessors promptly following a notified weather event. You should notify your insurer or broker within 24–48 hours of a hail event. The assessor will inspect the orchard to document damage, with a follow-up assessment at harvest to determine the final yield and quality outcome. Keeping photographic records immediately after the event is always helpful.' },
      { q: 'Can I insure my coolstore and packhouse alongside my crop?', a: 'Yes. A comprehensive rural package for an apple orchard should include the growing crop, hail netting infrastructure, coolstore, packhouse, bins, irrigation systems, farm buildings, and vehicles — all structured as a coordinated package. Our broker network can arrange all of these covers, often achieving a better total premium than insuring each component separately through different insurers.' },
    ],
  },
  {
    slug: 'grape-vineyard-insurance',
    name: 'Grape & Vineyard Insurance',
    shortName: 'Grapes & Vineyards',
    description: 'Frost, hail, and revenue protection for NZ\'s world-class wine grape growers in Marlborough, Hawke\'s Bay, Central Otago and beyond.',
    longDescription: `New Zealand wine exports exceed $2 billion annually, with Marlborough Sauvignon Blanc commanding a global premium. Vineyard growers face devastating frost risk during budburst and flowering, hail during berry development, disease pressure (botrytis, powdery mildew), and increasingly, smoke taint risk from Australian wildfires. Specialist viticulture insurance protects your growing crop, vine infrastructure, and winery assets against these threats, providing financial certainty for NZ's most prestigious agricultural sector.`,
    longFormContent: `
<h2>Vineyard and Grape Crop Insurance in New Zealand: A Complete Guide</h2>

<p>New Zealand's wine industry is globally celebrated, generating over $2 billion in annual export revenue and underpinning the economies of Marlborough, Central Otago, Hawke's Bay, and other wine regions. Marlborough alone accounts for approximately 75% of total NZ wine production, with its Sauvignon Blanc recognised as one of the world's iconic wine styles. Central Otago's Pinot Noir, Hawke's Bay's Bordeaux-style reds, and Martinborough's Pinot Gris complete a diverse national wine offering that commands premium prices in international markets.</p>

<p>For viticulture growers, vineyard establishment costs are substantial: typically $50,000–$150,000 per hectare including land preparation, trellis infrastructure, vine planting, and the three-to-four-year establishment period before commercial production commences. Annual production costs — canopy management, harvesting, and disease spraying — add $10,000–$30,000 per hectare per year. With this level of capital and operating cost exposure, comprehensive vineyard insurance is an essential business tool rather than an optional expense.</p>

<h3>Frost: The Most Feared Risk in NZ Viticulture</h3>

<p>Frost is the single greatest fear of NZ vine growers, and for good reason. A frost event during budburst (typically August–September) or flowering (October–November) can destroy 60–100% of a season's crop in a single night. Unlike other crops where the loss is more gradual, vineyard frost events are sudden and absolute — temperature drops below -2°C during budburst will kill developing shoots, and there is no recovery for that season's grape production from the affected vines.</p>

<p>Marlborough experiences significant spring frost risk, particularly in the Wairau Valley and the lower Waihopai Valley. Hawke's Bay growers face frost exposure during October and November. Central Otago's high-altitude, continental climate makes frost risk a constant concern from budburst through to late spring. Even Nelson and Martinborough experience frost events that can damage emerging growth.</p>

<p>Frost cover for vineyards is available as a named peril, typically applying from budburst through to fruit set. Most insurers specify a temperature threshold (e.g., air temperature below -2°C at the weather station or vineyard monitoring point) and require damage to be directly attributable to the frost event. Active frost protection measures — wind machines, over-vine irrigation, helicopter passes — are commonly required under policy terms, and proof of operation during a frost event may be required for claims. Our brokers can ensure your policy terms align with your frost protection systems and practices.</p>

<h3>Hail Damage During Vine Growth and Harvest</h3>

<p>Hail represents the second major weather risk for NZ vineyard operations. Hail can damage vines and grape clusters at any stage from budbreak through to harvest. The most critical vulnerability window is during berry development (December–February) when hail can bruise, split, or puncture grape berries, introducing infection pathways for botrytis and other diseases that further reduce both yield and wine quality.</p>

<p>Hail events during harvest (March–April in Marlborough; later for Hawke's Bay reds) can be particularly damaging, combining physical berry damage with accelerated disease development under harvest conditions. Marlborough has experienced several significant hail events in recent years that resulted in major regional crop losses across multiple vineyards simultaneously.</p>

<h3>Botrytis, Disease, and Smoke Taint</h3>

<p>Disease risk is generally excluded from standard named perils vineyard insurance because biological diseases are considered a management risk rather than an insurable weather event. Botrytis cinerea (grey mould) and powdery mildew can dramatically reduce both yield and wine quality in wet or humid seasons, but these risks are managed through spray programmes rather than insurance. However, where disease pressure follows a covered weather event (e.g., hail damage provides the entry point for botrytis), the consequential disease loss may be covered as part of the hail claim.</p>

<p>Smoke taint has become a growing concern for NZ vineyard operators following unprecedented Australian wildfire seasons. Smoke-derived volatile phenols can penetrate grape skins and impart unpleasant "ash" or "medicinal" flavours to wine, rendering affected wine unsaleable at normal prices. Smoke taint cover is available from select specialist insurers — typically as a separate endorsement rather than a standard named peril — and carries sub-limits given the novel and potentially widespread nature of the risk. If your vineyard is located where Australian smoke events have historically caused impacts, ask our brokers specifically about smoke taint endorsements.</p>

<h3>Stored Wine and Winery Assets</h3>

<p>Viticulture insurance for estate wineries should extend beyond the growing crop to include stored wine in tanks and barrels, winery equipment (fermentation tanks, barrel handling equipment, bottling lines), buildings, and refrigeration systems. Stored wine can represent significant value — a premium Central Otago Pinot Noir in barrel may be worth $50–$200 per litre, with a single vintage holding millions of dollars in barrel inventory. Contamination, refrigeration failure, or property damage to the winery can result in catastrophic losses beyond crop value alone.</p>

<h3>Revenue Protection and Business Interruption</h3>

<p>For larger vineyard operations and estate wineries, revenue protection policies can guarantee a minimum income even in a catastrophic season. Business interruption cover is particularly valuable where a major weather event or vine disease requires an extended recovery period — for example, a frost event that destroys an entire vintage's income while debt servicing and operational costs continue. Our broker network can structure layered coverage that combines named perils crop cover, stored wine cover, and business interruption into a coherent protection programme.</p>

<h3>Premium Guidance for NZ Vineyard Insurance</h3>

<p>Viticulture insurance premiums vary significantly based on region, coverage structure, and vineyard-specific risk factors. As an indicative guide, frost cover for a Marlborough Sauvignon Blanc vineyard (without active frost protection) might cost 1.5%–3.5% of insured crop value per year. A 10-hectare vineyard with $400,000 in insured crop value might pay $6,000–$14,000 annually for named perils cover including frost and hail. Vineyards with active frost protection systems (wind machines, over-vine irrigation) typically receive premium discounts of 20–40%. Speak with our brokers for a quote specific to your region, variety, and risk profile.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=1200&q=80',
    icon: '🍇',
    keyRisks: ['Frost at budburst', 'Hailstorm during berry development', 'Botrytis following hail', 'Smoke taint from wildfires', 'Windstorm', 'Drought & water stress', 'Flooding'],
    coverageHighlights: ['Frost cover (budburst to harvest)', 'Hail damage cover', 'Named weather perils', 'Revenue protection', 'Stored wine cover', 'Winery & equipment cover', 'Smoke taint endorsement'],
    typicalPremiumRange: '$3,000 – $20,000/year',
    mainRegions: ['Marlborough', "Hawke's Bay", 'Central Otago', 'Martinborough/Wairarapa', 'Gisborne', 'Nelson'],
    faqs: [
      { q: 'Is frost cover available for NZ vineyards?', a: 'Yes. Frost is the most significant insured peril for vine growers and cover is available as a named peril under specialist viticulture insurance. Cover typically applies from budburst through fruit set. Early placement — before August — is essential as insurers will not accept new applications once frost warnings are issued. Active frost protection measures (wind machines, over-vine irrigation) may be required under policy terms.' },
      { q: 'Can I get smoke taint cover for my vineyard?', a: 'Smoke taint coverage has become increasingly important given Australian wildfire seasons and their impact on NZ-grown grapes. Cover is available from select specialist insurers as a separate endorsement to your named perils policy, though it typically carries a sub-limit. This is a specialist cover — contact our broker network to identify which insurers can provide smoke taint protection for your vineyard.' },
      { q: 'Does vineyard insurance cover hail damage to grapes?', a: 'Yes. Hail is a standard covered peril under named perils viticulture insurance. Hail damage to developing berries can cause both direct losses (splitting, bruising) and secondary losses through accelerated botrytis development. Your claims assessment will consider both the immediate mechanical damage and any consequential quality reduction at harvest. Notify your insurer or broker within 24–48 hours of a hail event.' },
      { q: 'Can I insure my stored wine and winery equipment?', a: 'Yes. A comprehensive vineyard insurance programme should cover the growing crop, stored wine in tanks and barrels, winery buildings and equipment, refrigeration systems, and business interruption. Stored wine can represent substantial value — premium barrel wine may be worth $50–$200 per litre. Our brokers can arrange a coordinated package covering all vineyard and winery assets.' },
      { q: 'Does botrytis disease get covered by vineyard insurance?', a: 'Botrytis is generally excluded as a standalone claim because it is considered a management risk. However, where botrytis develops as a direct consequence of a covered hail event — hail punctures berry skins, creating entry points for infection — the consequential disease loss may be covered as part of the hail claim. Discuss this with your broker when arranging cover to ensure the policy wording is clear on consequential disease losses.' },
      { q: 'What is the typical vineyard insurance cost in Marlborough?', a: 'Frost and hail cover for a Marlborough Sauvignon Blanc vineyard typically costs 1.5%–3.5% of the insured crop value per year, depending on frost protection systems in place and coverage breadth. A 10-hectare vineyard with $400,000 insured crop value might pay $6,000–$14,000 per year for named perils cover. Vineyards with wind machines or over-vine frost protection systems receive meaningful premium discounts.' },
    ],
  },
  {
    slug: 'wheat-grain-insurance',
    name: 'Wheat & Grain Insurance',
    shortName: 'Wheat & Grain',
    description: 'Named perils and multi-peril crop cover for NZ wheat, barley, oats and grain growers in Canterbury, Southland and Marlborough.',
    longDescription: `Canterbury and Southland are the heartland of New Zealand's arable grain industry, growing wheat, barley, oats, peas, and other cereals for milling, malting, and stockfeed. Arable growers commit significant input costs — seed, fertiliser, crop protection, cultivation — months before harvest, creating substantial financial exposure if weather events damage or destroy the growing crop. Crop insurance protects yield and revenue, providing the financial certainty that enables confident annual investment in inputs and equipment.`,
    longFormContent: `
<h2>Wheat and Grain Crop Insurance in New Zealand: A Complete Guide</h2>

<p>New Zealand's arable grain industry is centred on the Canterbury Plains and Southland, with significant production also in Marlborough, Manawatu, and Hawke's Bay. Canterbury's fertile soils and reliable sunshine hours produce some of the Southern Hemisphere's highest wheat and barley yields. The industry supplies domestic flour milling (Foodstuffs, Allied Mills), malting (Lion, DB, Boundary Road Brewery), and stockfeed sectors, with export of specialist seed crops also significant.</p>

<p>Arable farming is capital-intensive. By the time a Canterbury wheat crop is ready for harvest in January–February, the grower has invested $800–$1,500 per hectare in inputs — seed, fertiliser, fungicides, herbicides, and fuel — and months of management time. A weather event at any stage from sowing to harvest can jeopardise that investment. Hail at grain fill, waterlogging at sowing, late frosts, or a wet harvest that prevents timely harvesting are all scenarios that can convert a profitable season into a loss.</p>

<h3>How NZ Arable Crop Insurance Works</h3>

<p>The standard NZ arable crop insurance framework is built around named perils cover. Policies typically cover growing and harvested crops against fire and lightning as the base, with optional extensions for hail, frost (from 15 November), windstorm, and vehicle or aircraft impact. Harvested crop can be covered for up to 12 months from the date of harvest or until sold, providing protection for grain in on-farm storage before it is delivered to the buyer.</p>

<p>A particularly valuable provision in many arable policies is the replanting benefit: if a covered loss occurs within 40 days of planting, the insurer will pay 80% of the reasonable cost of replanting the damaged area in the same crop. This is especially relevant for early-sown winter wheat or barley that suffers waterlogging or flooding shortly after establishment, allowing growers to replant without bearing the full input cost again.</p>

<p>For growers with significant scale and financial exposure, multi-peril crop insurance (MPCI) provides broader protection. MPCI guarantees a minimum yield or revenue regardless of the cause of loss — including drought, which is excluded from named perils policies. MPCI is typically accessed through international markets via specialist brokers with access to international insurance markets.</p>

<h3>Key Weather Risks for Arable Growers</h3>

<p><strong>Hail at grain fill</strong> (November–January) is the most costly insured peril for Canterbury and Southland grain growers. Hail at this stage can physically damage developing grain, causing shrivelling, splitting, and contamination that reduces both yield and grain quality. Milling wheat and malting barley that fails quality parameters must be sold as stockfeed at a significant price discount — often $50–$100 per tonne less than the malting or milling premium.</p>

<p><strong>Waterlogging and flooding</strong> at sowing or during establishment can destroy early crop establishment, particularly in poorly drained paddocks or years with high autumn rainfall. Canterbury has experienced unprecedented flooding events in recent years that inundated paddocks during critical planting windows, forcing growers into late or failed sowings.</p>

<p><strong>Late frosts</strong> after sowing can damage young crop plants, particularly winter barley sown in May–June that is vulnerable to hard frost before it develops frost hardiness. Frost cover under most arable policies applies from 15 November, protecting crops during their most vulnerable spring growth stages.</p>

<p><strong>Wet harvest conditions</strong> — sustained rainfall during the harvest window (January–March) — can prevent timely harvesting, allowing standing crops to deteriorate, develop pre-germination (particularly in barley), and lose quality. Pre-harvest germination in barley renders the grain unfit for malting and forces downgrading to feed. While wet harvest is a named peril under some policies, growers should check their policy wording carefully to understand what is and isn't covered in harvest delay scenarios.</p>

<p><strong>Wind lodging</strong> — where tall cereal crops are flattened by wind, making harvesting difficult or impossible — is a growing concern as high-yield varieties are pushed to produce maximum biomass. Lodged crops often suffer significant yield and quality losses even after harvest, as the grain quality deteriorates in the flattened, humid canopy environment.</p>

<h3>Malting Barley Quality Protection</h3>

<p>Malting barley is one of the most financially significant crops in Canterbury and Southland, contracted at premium prices to Lion, DB, and craft brewing industries. However, the malting premium depends on the grain meeting specific quality parameters — protein content, germination percentage, screenings, and freedom from disease. Any weather event that causes pre-harvest germination, contamination, or excessive protein will result in the grain being rejected from malting contracts and sold as stockfeed at a substantial price discount. Specialist quality protection policies that cover the price difference between malting and stockfeed grain are available through our broker network — a critical cover for Canterbury malting barley growers.</p>

<h3>Typical Premium Costs for Arable Crop Insurance</h3>

<p>Named perils premiums for NZ arable crops are among the most competitive in the agricultural insurance market, reflecting the relatively favourable risk profile of Canterbury and Southland growing conditions when compared to tropical or subtropical agricultural regions. As a guide, a Canterbury wheat grower with 100 hectares and an insured crop value of $150,000 might pay $1,500–$4,500 per year for named perils cover including hail, frost, and windstorm. Malting barley quality protection is typically priced as a separate endorsement. For accurate quotes specific to your crop mix, region, and coverage requirements, speak with our broker network.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    icon: '🌾',
    keyRisks: ['Hailstorm at grain fill', 'Waterlogging & flooding', 'Late frost (post-establishment)', 'Wet harvest & pre-germination', 'Wind lodging', 'Malting quality downgrade', 'Drought'],
    coverageHighlights: ['Named perils cover', 'Fire & lightning base cover', 'Optional hail & frost cover', 'Harvested crop in storage', '80% replanting cost (within 40 days)', 'Malting quality protection', 'Multi-peril yield guarantee'],
    typicalPremiumRange: '$800 – $8,000/year',
    mainRegions: ['Canterbury', 'Southland', 'Marlborough', 'Manawatu', "Hawke's Bay"],
    faqs: [
      { q: 'What does a standard arable crop insurance policy cover?', a: 'A standard arable crop policy covers growing and harvested crops for fire and lightning as standard, with optional extensions for hail, frost (from 15 November), windstorm, and vehicle or aircraft impact. Harvested crop is typically covered for up to 12 months from harvest or until sold. A replanting benefit may pay 80% of reasonable replanting costs if a loss occurs within 40 days of planting. Our brokers can source cover from specialist crop insurance markets.' },
      { q: 'Is multi-peril crop insurance available for NZ grain growers?', a: 'Yes, though it is less commonly taken than named perils cover. Multi-peril crop insurance (MPCI) guarantees a minimum yield or revenue regardless of the cause of loss, including drought — which named perils policies typically exclude. MPCI is accessed through specialist international markets via specialist brokers with access to international markets. It is most appropriate for large arable operations with significant input costs and financial exposure.' },
      { q: 'Does grain crop insurance cover drought?', a: 'Standard named perils policies do not cover drought. Drought cover requires either a multi-peril crop insurance (MPCI) policy or a parametric drought product (which pays out based on rainfall deficits measured at a local weather station). Both options are available through specialist brokers. If drought is a key risk for your region and crop mix, ask our brokers specifically about drought cover options.' },
      { q: 'Can I insure malting barley for quality downgrade?', a: 'Yes. Specialist quality protection policies that cover the price difference between malting and feed barley are available for Canterbury and Southland malting barley growers. If weather events cause pre-harvest germination, protein elevation, or other quality failures that result in your crop being rejected from malting contracts, a quality protection policy compensates for the price differential. This is a critical cover for growers with contracted malting barley supply agreements.' },
      { q: 'What is the replanting benefit in an arable crop policy?', a: 'If a covered loss occurs within 40 days of planting, many arable policies will pay 80% of the reasonable cost of replanting the same crop in the damaged area. This provision is particularly valuable for winter wheat and barley that suffers waterlogging or flooding shortly after establishment, allowing growers to replant without bearing the full input cost again.' },
      { q: 'When should I arrange grain crop insurance?', a: 'Cover should be in place before sowing. For winter crops (barley, oats, wheat), this typically means cover arranged in April–May. For spring crops (spring wheat, maize, peas), cover should be in place before September sowings. Waiting until after sowing — or after a weather event has been forecast — will typically result in insurers declining to provide cover. Our brokers can arrange cover quickly to meet pre-sowing deadlines.' },
    ],
  },
  {
    slug: 'maize-insurance',
    name: 'Maize & Corn Insurance',
    shortName: 'Maize',
    description: 'Protect your maize silage and grain crop from drought, hail, wind and flooding in New Zealand\'s key maize growing regions.',
    longDescription: `New Zealand grows approximately 100,000 hectares of maize annually, primarily for silage in the Waikato, Northland, Bay of Plenty, and Hawke's Bay regions, with grain maize production in Northland and the Bay of Plenty. Maize is the dominant forage crop for dairy farms across the upper North Island, and many growers supply under contract to dairy farmers who depend on consistent silage deliveries. Summer drought is the dominant risk for maize growers, while hailstorms, wind lodging, and late spring frosts can also cause significant losses.`,
    longFormContent: `
<h2>Maize Insurance in New Zealand: A Complete Guide</h2>

<p>Maize is one of New Zealand's most important arable crops, grown across approximately 100,000 hectares annually, predominantly in the North Island. The Waikato, Northland, Bay of Plenty, and Hawke's Bay are the main growing regions. The vast majority of NZ maize production is for silage — harvested whole-plant and ensiled for use as dairy cattle forage. A smaller proportion is grown for grain maize, primarily for stockfeed and starch production in northern regions.</p>

<p>The relationship between maize silage growers and dairy farmers is a critical economic link in the NZ agricultural value chain. Many maize growers are contracted to supply specific volumes of silage to dairy farms, often under multi-season agreements. Crop failure — whether from summer drought, hail, or other weather events — can jeopardise both the grower's income and the dairy farmer's forage supply, particularly when the failure occurs in late summer when alternative silage sources are difficult to secure.</p>

<h3>Summer Drought: The Dominant Risk</h3>

<p>Summer drought is by far the most significant production risk for NZ maize growers, particularly in Northland and the Bay of Plenty where maize depends on summer rainfall or irrigation during the critical grain fill period (January–March). In drought years, yield reductions of 30–70% are not uncommon, and in severe droughts, entire crops may fail to reach commercial silage or grain yields. The 2020-21 summer drought across Northland and the Waikato caused widespread maize yield failures, with some growers losing more than 50% of contracted silage volumes.</p>

<p>Unlike hail or frost, which can be covered under standard named perils policies, drought cover requires a specific drought endorsement, a multi-peril crop insurance (MPCI) product, or a parametric drought product. Parametric drought insurance pays out when rainfall at a nominated weather station falls below a defined threshold over a specified period, regardless of the actual yield impact at the individual farm level. This simplifies claims assessment but may not perfectly match on-farm yield losses. Our brokers can source both traditional drought cover and parametric products for maize growers.</p>

<h3>Hail and Wind Risks in Maize</h3>

<p>Hailstorms pose a significant risk to maize during the growing season, particularly during pollination (tasselling, December–January in most NZ regions). Hail at tasselling can damage or destroy pollen, severely reducing fertilisation and grain fill. Physical hail damage to maize plants — stripped leaves, stem bruising, broken stalks — can set back canopy development and reduce the final silage or grain yield substantially. In silage maize, aesthetic damage is less of a problem than in horticulture, but structural plant damage can reduce both yield and feed quality.</p>

<p>Wind lodging — where maize plants are flattened by strong winds — is a growing concern with the trend towards taller, higher-yielding varieties. Lodged maize is difficult to harvest efficiently, and the fallen canopy environment accelerates disease development and quality deterioration. Severe wind events can cause near-total harvesting losses in affected paddocks. Wind cover is available under named perils policies.</p>

<h3>Late Spring Frost</h3>

<p>Maize is frost-sensitive, particularly at emergence and during the early vegetative stages. A late frost event in October or November — when recently emerged maize seedlings are just above the ground — can kill the growing points of young plants, requiring replanting or resulting in a significantly delayed crop. Frost at emergence is most relevant for early-planted maize in cooler areas of the Waikato and South Auckland. Many arable policies include a replanting provision (up to 80% of replanting costs within 40 days) that is directly applicable to frost-killed maize establishment.</p>

<h3>Contract Fulfilment Protection</h3>

<p>For contract maize silage growers, the financial consequences of crop failure extend beyond lost crop revenue to include potential contract penalties or loss of future supply agreements. Some specialist policies can be structured to include contract fulfilment protection — covering the additional cost of sourcing alternative silage to meet contracted deliveries following an insured crop failure. This is a niche but important cover for larger contract growers with significant dairy farm supply commitments.</p>

<h3>Premium Guidance for Maize Insurance</h3>

<p>Named perils premiums for maize depend on region and coverage structure. Northland maize growers face higher drought and wind risk than Canterbury arable crops, reflected in higher premium rates. As an indicative guide, a Waikato silage maize grower with 50 hectares and $120,000 in insured crop value might pay $1,800–$4,800 per year for named perils cover including hail and windstorm. Drought cover will add significantly to this cost. For accurate quotes, contact our broker network.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=1200&q=80',
    icon: '🌽',
    keyRisks: ['Summer drought', 'Hailstorm at tasselling', 'Wind lodging', 'Late spring frost at emergence', 'Flooding & waterlogging', 'Contract non-delivery', 'Silage quality loss'],
    coverageHighlights: ['Named perils cover', 'Drought protection (MPCI or parametric)', 'Yield guarantee', 'Contract fulfilment protection', 'Replanting cost (80% within 40 days)', 'Wind & hail cover', 'Input cost protection'],
    typicalPremiumRange: '$600 – $6,000/year',
    mainRegions: ['Waikato', 'Northland', "Hawke's Bay", 'Bay of Plenty', 'Manawatu'],
    faqs: [
      { q: 'Does maize insurance cover drought losses?', a: 'Standard named perils policies do not cover drought. Drought cover requires either a multi-peril crop insurance (MPCI) product, a parametric drought product (which pays out based on rainfall deficits at a weather station), or a specific drought endorsement. Given that summer drought is the most significant risk for NZ maize growers, we strongly recommend discussing drought cover options with our broker network when arranging your policy.' },
      { q: 'Can I insure a silage maize contract?', a: 'Yes. Contract fulfilment protection can be arranged for silage maize growers who supply dairy farms under contracted volume agreements. This cover can include the cost of sourcing alternative silage to meet contracted deliveries following an insured crop failure. This is a specialist cover — ask our brokers specifically about contract fulfilment options for your supply agreements.' },
      { q: 'Is late frost covered by maize insurance?', a: 'Frost cover can be included in named perils maize policies, typically applying from emergence through early vegetative stages. A frost event that kills young maize plants may trigger the replanting provision — many policies pay 80% of reasonable replanting costs if a covered loss occurs within 40 days of planting. This provision directly applies to frost-killed maize establishment in affected paddocks.' },
      { q: 'What is parametric drought insurance for maize?', a: 'Parametric drought insurance pays out when rainfall at a nominated weather station falls below a defined threshold over a specified measurement period — for example, less than 150mm over the December–February quarter. Payment is automatic when the threshold is met, without requiring an on-farm crop assessment. This simplifies claims but may not perfectly match your individual farm\'s yield impact. Our brokers can help you evaluate whether parametric or traditional drought cover is better suited to your operation.' },
      { q: 'When should I arrange maize crop insurance?', a: 'Cover should be in place before sowing in October–November. Most insurers will not accept applications once a known weather event (severe drought forecast, frost warning) is pending. For drought cover, policy inception before the start of the summer is essential, as drought events develop progressively and insurers will not accept new drought cover once a regional drought is already underway.' },
    ],
  },
  {
    slug: 'hops-insurance',
    name: 'Hops Insurance',
    shortName: 'Hops',
    description: 'Specialist crop and infrastructure cover for NZ hop growers in Nelson, Tasman and Marlborough — protecting your trellis investment and annual crop.',
    longDescription: `New Zealand hops are celebrated globally for their distinctive tropical, citrus, and passionfruit aromas — varieties like Nelson Sauvin, Motueka, and Wakatu command premium prices from craft breweries worldwide. The Nelson and Tasman regions grow the vast majority of NZ's hop crop, which is supplied predominantly to international export markets and domestic craft breweries. Hops are a capital-intensive perennial crop with a 15–20 year productive life and significant infrastructure investment — making comprehensive insurance essential for any commercial hop producer.`,
    longFormContent: `
<h2>Hops Insurance in New Zealand: A Complete Guide</h2>

<p>New Zealand hops occupy a unique and enviable position in the global craft brewing revolution. NZ hop varieties — particularly Nelson Sauvin, Motueka, Wakatu, Wai-iti, and Southern Cross — are sought after by craft brewers from the United States, United Kingdom, Europe, and Australia for their distinctive Southern Hemisphere flavour profiles. The NZ hop industry, centred on the Nelson and Tasman regions with some production in Marlborough, generates significant export revenue and supports a specialised grower community of around 80 established producers.</p>

<p>What distinguishes hop production from other NZ crops is the combination of a long establishment period, substantial infrastructure investment, and a perennial growing cycle. A newly established hop yard will not produce a commercial crop for 2–3 years after planting. The trellis and training wire infrastructure — typically costing $25,000–$45,000 per hectare to install — must be maintained for the productive life of the yard. The bines (hop climbing stems) that grow each year from the permanent rootstock are vulnerable to weather damage throughout their April–September growing season. All of these factors create a distinctive and substantial insurance need.</p>

<h3>Trellis and Infrastructure: The Critical First Insurance Question</h3>

<p>Before addressing crop insurance, every hop grower should ensure their trellis infrastructure is comprehensively covered as rural property. The trellis system — anchor poles, high wire (typically at 6–7 metres), training wire, and ground anchors — represents a major capital asset that can be damaged or destroyed by severe hail, windstorm, or snow loading. A regional hailstorm can collapse trellis sections across multiple yards simultaneously, with replacement costs running to hundreds of thousands of dollars.</p>

<p>Trellis infrastructure should be insured as rural property (farm buildings and structures) on a replacement cost basis, separately from the standing crop. Our broker network regularly helps Nelson and Tasman hop growers structure combined policies that cover both the trellis infrastructure and the annual crop in a single package, often achieving better total coverage than insuring each element through different insurers.</p>

<h3>Weather Risks During the Growing Season</h3>

<p><strong>Late frost at emergence</strong> (typically April–May) is one of the most damaging events for hop bines. Hops emerge from the crown in early spring and grow rapidly upwards along the training strings. A late frost during emergence can kill the growing tips, forcing the plant to regenerate secondary shoots. While hops are resilient and can often produce a secondary crop, the delay and reduced vigour typically reduce the season's yield by 20–50%.</p>

<p><strong>Hailstorms during the growing season</strong> (June–August) damage hop bines and developing cones. The long, exposed bines are particularly vulnerable — a severe hailstorm can strip leaves from bines, damage the fragile hop cones, and reduce the harvestable quantity significantly. In Nelson and Tasman, summer hailstorms occur with enough frequency that hail cover is considered essential by most commercial producers.</p>

<p><strong>Windstorms</strong> can cause severe structural damage to hop yards — collapsing trellis sections, uprooting training strings, and physically damaging bines. Nelson, despite its reputation for sunshine, experiences regular strong winds from the north and northwest that can cause localised trellis failures. The 2021 and 2022 seasons saw several significant wind damage events in the region affecting multiple hop properties.</p>

<p><strong>Downy mildew</strong> (Pseudoperonospora humuli) is the most serious disease affecting NZ hops. Like PSA in kiwifruit, downy mildew is typically excluded from standard named perils insurance. However, business interruption cover can compensate for the reduced income during a severe disease-affected season, and some specialty market policies offer limited disease cover.</p>

<p><strong>Harvest weather</strong> is a final critical risk period. Hops must be harvested within a narrow window in September, when cone maturity and alpha acid content are optimal. Adverse weather — particularly wet conditions that promote disease development or prevent machinery access — can reduce the harvestable period and force compromises on harvest quality or timing.</p>

<h3>Perennial Crop Considerations</h3>

<p>Hop roots (crowns) that are killed or severely damaged by an insured event must be replanted — a multi-year commitment before the replacement crop returns to full production. Re-establishment costs, including vine removal, soil preparation, new crown planting, and trellis repair, can be significant. Some specialist policies include perennial crop re-establishment cover, providing funding to restore the productive yard following a catastrophic event. This type of cover is worth discussing explicitly with our brokers when arranging hop insurance.</p>

<h3>The NZ Hop Contracting System</h3>

<p>Most commercial NZ hop production is contracted to the NZ Hop company or directly to domestic and international craft brewing clients before the season begins. Contract prices are typically locked in at planting, and growers face volume commitment obligations. A crop failure can result in the grower failing to deliver contracted volumes, potentially triggering penalty clauses or affecting future contract allocation. Some policies can be structured to address contract delivery shortfall scenarios. Discuss your contracting arrangements with our broker network to ensure your policy aligns with your supply obligations.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1531422888678-b0ad41dc18cf?w=1200&q=80',
    icon: '🌿',
    keyRisks: ['Late frost at emergence', 'Hailstorm during growing season', 'Windstorm & trellis collapse', 'Downy mildew disease', 'Drought', 'Flood & waterlogging', 'Harvest weather'],
    coverageHighlights: ['Standing crop (named perils)', 'Trellis & wire infrastructure', 'Hail-specific cover', 'Business interruption', 'Perennial crop re-establishment', 'Machinery & drying equipment', 'Contract delivery protection'],
    typicalPremiumRange: '$1,500 – $12,000/year',
    mainRegions: ['Nelson', 'Tasman', 'Marlborough'],
    faqs: [
      { q: 'Can I insure my hop trellis infrastructure?', a: 'Yes. Trellis and training wire infrastructure — typically costing $25,000–$45,000 per hectare — should be insured as rural property on a replacement cost basis, separate from the standing crop. Our brokers can combine crop and trellis infrastructure cover into a coordinated package. The trellis is often the single most valuable asset on a hop property and must be fully covered.' },
      { q: 'Is frost at emergence covered by hops insurance?', a: 'Yes. Frost at emergence (April–May) is a significant risk for hop growers and can be covered as a named peril. Late frost events that kill emerging bine tips can reduce season yields by 20–50% as the plant regenerates secondary growth. Ensure your policy is in place before emergence begins each April.' },
      { q: 'What happens if downy mildew destroys my hop crop?', a: 'Downy mildew is generally excluded from standard named perils insurance as it is a biological disease rather than a weather event. However, business interruption cover can compensate for reduced income during a severely disease-affected season. Some specialist market policies offer limited disease cover. If disease risk is a primary concern, discuss specific options with our broker network.' },
      { q: 'Does hop insurance cover perennial crop re-establishment costs?', a: 'Specialist policies can include perennial crop re-establishment cover, which provides funding to restore a destroyed or severely damaged hop yard — including vine removal, soil preparation, new crown planting, and trellis repair. Given the 2–3 year re-establishment period before full production resumes, this cover is highly valuable following a catastrophic event. Ask our brokers specifically about re-establishment cover when arranging your policy.' },
      { q: 'When should I arrange hops insurance each year?', a: 'Cover should be in place before emergence in April. Waiting until after emergence begins or once a frost warning is issued will typically result in insurers declining to add frost cover for the current season. Annual policy reviews should be conducted in March each year. If you are establishing a new hop yard, speak with our brokers about covering the establishment period and infrastructure from the outset.' },
    ],
  },
  {
    slug: 'stone-fruit-insurance',
    name: 'Stone Fruit Insurance',
    shortName: 'Stone Fruit',
    description: 'Specialist cover for cherries, peaches, nectarines, apricots and plums against frost, hail, rain cracking and adverse weather in Central Otago and Hawke\'s Bay.',
    longDescription: `Stone fruit — cherries, peaches, nectarines, apricots, and plums — are among the most weather-sensitive crops in New Zealand horticulture, and among the highest-value per hectare. Central Otago's cherry industry alone exports over $250 million annually. These crops face devastating risks from spring frost at flowering (near-total crop loss is possible), hail at any stage, and the unique cherry risk of rain cracking — where rainfall in the days before harvest causes ripe cherries to split, rendering them unmarketable. Specialist stone fruit insurance is essential for any commercial grower.`,
    longFormContent: `
<h2>Stone Fruit Insurance in New Zealand: A Complete Guide</h2>

<p>New Zealand's stone fruit industry is concentrated in three main regions: Central Otago (the primary growing area, famous for cherries), Hawke's Bay (peaches, nectarines, apricots, and plums), and Nelson/Marlborough (mixed stone fruit). The industry generates significant export revenue — Central Otago cherries alone are exported to markets across Asia and Europe, with the Cromwell and Alexandra basins at the heart of production. Stone fruit orchards represent a major capital investment and face some of the most severe weather risks in NZ horticulture.</p>

<p>Stone fruit insurance is inherently more complex than many other crop types, because each fruit — cherries, peaches, nectarines, apricots, plums — has its own specific risk profile, vulnerability windows, and insurance product requirements. A cherry grower in Cromwell faces different risks than an apricot orchardist in Hawke's Bay, and policy terms should reflect this. Our broker network works with specialist horticulture insurers to structure policies that match the specific risks facing each grower.</p>

<h3>Cherries: The Flagship NZ Stone Fruit</h3>

<p>Central Otago cherries have become one of New Zealand's premium export commodities. The region's extreme continental climate — hot, dry summers; cold winters with reliable chilling hours — produces large, sweet cherries that command exceptional prices in Asian markets. The export cherry harvest window is extremely tight — typically 4–6 weeks from late November to late January — and the crop must be harvested, packaged, and airfreighted to export markets within days of picking.</p>

<p><strong>Rain cracking</strong> is the most feared and most distinctive risk in cherry growing. When ripe cherries absorb water through their skin during rainfall, internal pressure builds and the skin splits. Even a few hours of rainfall during the harvest period can crack 60–90% of ripe cherries across an entire orchard, rendering them unsaleable at fresh export prices. Rain cracking cover is a specialist product available from select NZ insurers — it is not included in standard named perils policies and must be specifically requested. Given that rain cracking is the most significant financial risk facing many cherry growers, it deserves priority attention in any insurance discussion.</p>

<p><strong>Spring frost at flowering</strong> is the second major risk. Cherries flower in September–October in Central Otago, and frost events during flowering can destroy the entire season's crop. A hard frost (-3°C or below) for even a few hours can kill open blossoms and emerging fruitlets, resulting in near-zero fruit set. Central Otago's altitude and inland position mean spring frosts are a recurring risk, particularly in low-lying valley floor blocks.</p>

<p><strong>Hailstorms</strong> damage cherry fruit at any stage of development. Pre-harvest hail can bruise, split, or scar cherry skin; post-harvest hail can damage fruit on trees awaiting picking. Hail at harvest is particularly devastating — the physical damage to ripe fruit is severe, and the resulting wounds make the fruit unmarketable even if they don't split. Central Otago experiences localised summer hailstorms that can affect individual valley systems while leaving adjacent areas untouched.</p>

<h3>Peaches, Nectarines, Apricots and Plums</h3>

<p>Hawke's Bay and Nelson grow the majority of NZ's peaches, nectarines, apricots, and plums. These crops share many of the same risks as cherries — spring frost at flowering, hail — but the rain cracking risk specific to cherries does not apply. Apricots are particularly frost-sensitive, often flowering earlier than other stone fruit (as early as August), making them among the most vulnerable of all NZ horticultural crops to spring frost. A single night of -2°C frost in August can eliminate 80–100% of the apricot crop in affected orchards.</p>

<p>Peaches and nectarines can suffer significant crop losses from powdery mildew and brown rot in wet seasons — disease risks that are typically excluded from standard named perils policies but may cause consequential losses following an insured weather event that damages fruit surfaces.</p>

<h3>Infrastructure Cover for Stone Fruit Orchards</h3>

<p>Stone fruit orchards in Central Otago increasingly deploy overhead covers — plastic or hail net systems — to protect the crop from rain and hail events. These systems can cost $80,000–$150,000 per hectare for permanent covered structures, representing a major capital investment. As with kiwifruit and apple hail netting, the infrastructure must be insured as rural property alongside the crop. Orchards with covered systems receive reduced crop insurance premiums reflecting the lower weather risk to the crop itself.</p>

<h3>Premium Guidance for Stone Fruit Insurance</h3>

<p>Stone fruit insurance premiums reflect the high per-hectare crop values and the concentration of weather risk in specific windows. Cherry insurance — particularly including rain cracking cover — is typically priced at 2%–5% of insured crop value, with the rain cracking component carrying a separate premium rate. A 5-hectare uncovered cherry orchard with $500,000 insured crop value might pay $10,000–$25,000 per year for comprehensive cover including frost, hail, and rain cracking. Covered orchards pay significantly less. Contact our broker network for a personalised quote.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=1200&q=80',
    icon: '🍑',
    keyRisks: ['Rain cracking at harvest (cherries)', 'Spring frost at flowering', 'Hailstorm at any stage', 'Sunburn & heat stress', 'Powdery mildew / brown rot', 'Wind damage', 'Biosecurity incursion'],
    coverageHighlights: ['Rain cracking cover (cherries)', 'Named perils crop cover', 'Frost at flowering', 'Hail cover at all stages', 'Revenue protection', 'Covered structure cover', 'Business interruption'],
    typicalPremiumRange: '$2,000 – $25,000/year',
    mainRegions: ['Central Otago', "Hawke's Bay", 'Nelson', 'Marlborough', 'Cromwell/Alexandra'],
    faqs: [
      { q: 'Does cherry insurance cover rain cracking at harvest?', a: 'Rain cracking cover is a specialist product available from select NZ insurers and must be specifically requested — it is not included in standard named perils policies. Rain cracking is one of the most significant risks for Central Otago cherry growers, as even a few hours of rainfall during harvest can crack 60–90% of ripe fruit. Ask our brokers specifically about rain cracking cover when arranging your cherry insurance.' },
      { q: 'Is frost cover available for Central Otago cherry orchards?', a: 'Yes. Spring frost cover at flowering (September–October) is available as a named peril for cherry orchards in Central Otago. A frost event during full bloom can destroy the entire season\'s crop. Cover must be in place well before flowering — arrange your policy in July at the latest. Low-lying valley floor blocks face the highest frost risk and may pay higher premium rates.' },
      { q: 'Are covered cherry orchards cheaper to insure?', a: 'Yes. Orchards with permanent overhead covers (plastic or hail net systems) pay significantly reduced crop insurance premiums compared to uncovered orchards, as the covers protect against both rain cracking and hail. The covers themselves — costing $80,000–$150,000 per hectare — must be insured separately as rural property. The insurance savings over time contribute to the financial justification for installing covers.' },
      { q: 'What is the most important stone fruit insurance cover?', a: 'For Central Otago cherry growers: rain cracking cover, followed by frost at flowering. For Hawke\'s Bay apricot growers: frost at flowering (apricots flower early, often in August, making them extremely frost-vulnerable). For all stone fruit growers: hail cover is a standard necessity. The priority order differs by crop, region, and individual risk profile — our brokers can help you identify which covers are most critical for your operation.' },
      { q: 'Does stone fruit insurance cover apricot frost in August?', a: 'Yes. Apricots typically flower in August — earlier than most other stone fruit — making them among the most frost-vulnerable crops in NZ horticulture. Frost cover can be arranged specifically for early-flowering apricot orchards. Given the early flowering window, apricot crop insurance should be in place by June each year.' },
    ],
  },
  {
    slug: 'avocado-insurance',
    name: 'Avocado Insurance',
    shortName: 'Avocados',
    description: 'Protect your avocado orchard from wind, hail, frost and biosecurity risks in Northland, the Bay of Plenty and Coromandel.',
    longDescription: `New Zealand's avocado industry has grown rapidly over the past two decades, with Northland and the Bay of Plenty now producing significant volumes for both domestic and export markets. Avocados are highly susceptible to wind damage — their shallow root systems and large canopies make them vulnerable to fruit drop and tree damage from strong winds. Hail, frost in cooler growing areas, and drought are additional risks that make specialist orchard insurance an important tool for any commercial avocado producer.`,
    longFormContent: `
<h2>Avocado Insurance in New Zealand: A Complete Guide</h2>

<p>New Zealand avocados are a growth story in NZ horticulture. The industry has expanded significantly since the 2000s, driven by strong domestic consumer demand and growing export opportunities, particularly to Australia and Asia. Northland is the primary growing region, with the Bay of Plenty, Coromandel, and parts of the Waikato also producing commercial volumes. NZ avocados are predominantly Hass variety — the globally dominant commercial avocado cultivar — with the NZ season running primarily from September to March.</p>

<p>Avocado orchards are long-term investments. Trees typically take 5–7 years to reach commercial production from planting, and a well-managed orchard will produce commercially for 30+ years. The establishment cost for a commercial avocado block — land preparation, tree planting, staking, irrigation, and early management — typically runs to $30,000–$60,000 per hectare. Annual production costs at maturity (fertiliser, crop protection, harvesting, coolstore) add a further $10,000–$20,000 per hectare. The combination of high establishment costs, long establishment periods, and significant operating costs makes insurance an important financial risk management tool from the outset.</p>

<h3>Wind: The Primary Risk for NZ Avocado Growers</h3>

<p>Avocado trees have a relatively shallow, spreading root system combined with a large, open canopy — a combination that makes them particularly susceptible to wind damage. Strong winds cause three types of damage in avocado orchards: fruit drop (where wind dislodges maturing fruit before it can be harvested), physical damage to fruit on the tree (bruising and grazing caused by fruit banging against branches), and tree structure damage (broken branches, leaning trees, and in extreme cases, whole-tree toppling).</p>

<p>Northland is regularly exposed to tropical cyclone remnants and strong northeasterly winds that cause fruit drop events across the region. The 2018 cyclone season caused significant losses across Northland avocado orchards. Ex-tropical cyclone Gabrielle (2023), while primarily devastating for Hawke's Bay, also affected parts of the Northern growing regions. Wind events during the fruit maturation period (October–February) are the most financially damaging, as mature fruit on the ground cannot be salvaged for commercial sale.</p>

<p>Wind cover is the most important named peril for avocado growers. Some orchards establish windbreaks (shelter belts) or physical barriers to reduce wind exposure. Windbreak establishment can also reduce insurance premiums over time.</p>

<h3>Hail and Frost</h3>

<p>Hail events damage avocado fruit physically, causing surface marks and scars that make fruit unmarketable at premium prices. While avocados have a thicker skin than many soft fruits, significant hail can cause bruising, cracking, and surface damage that results in downgrading or total loss of affected fruit.</p>

<p>Frost is a risk for avocado orchards in marginal growing areas — particularly in parts of the Waikato and Coromandel where late spring frosts can damage flowering trees in October. Young avocado trees are particularly frost-sensitive; established mature trees can tolerate brief frosts better, but sustained temperatures below -2°C will cause significant damage. Frost cover is available as a named peril for avocado orchards in frost-risk areas.</p>

<h3>Phytophthora Root Rot</h3>

<p>Phytophthora cinnamomi — root rot — is the most significant disease threat to NZ avocado orchards, causing progressive tree decline and death. Like PSA in kiwifruit and downy mildew in hops, Phytophthora is a biological disease that is typically excluded from standard named perils crop insurance. However, business interruption cover can compensate for income losses during the period of orchard replanting and recovery following a significant root rot outbreak. Soil drainage improvement to reduce Phytophthora risk also influences insurer risk assessment.</p>

<h3>Biosecurity: The Emerging Threat</h3>

<p>New Zealand's avocado industry has benefited historically from freedom from several exotic pests present in major avocado producing countries (California, Mexico, Australia). Exotic fruit flies — particularly Queensland Fruit Fly and Mediterranean Fruit Fly — represent a growing biosecurity threat that could devastate NZ avocado production if they established. While insuring against a biosecurity incursion directly is extremely difficult (losses would be industry-wide and systemic), business interruption cover can provide some protection during market access restrictions following a biosecurity event.</p>

<h3>Premium Guidance for Avocado Insurance</h3>

<p>Named perils premiums for avocado orchards vary based on region (Northland coastal areas have higher wind risk than Bay of Plenty inland blocks), crop value, and coverage structure. As a guide, a 5-hectare Northland avocado orchard with $150,000 in insured crop value might pay $2,500–$7,500 per year for named perils cover including wind and hail. Contact our broker network for a personalised assessment.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=1200&q=80',
    icon: '🥑',
    keyRisks: ['Wind damage & fruit drop', 'Hailstorm', 'Frost in cooler areas', 'Drought & water stress', 'Phytophthora root rot', 'Biosecurity incursion (fruit fly)', 'Post-harvest quality loss'],
    coverageHighlights: ['Wind & fruit drop cover', 'Named perils crop cover', 'Frost cover', 'Hail cover', 'Business interruption', 'Orchard infrastructure cover', 'Revenue protection'],
    typicalPremiumRange: '$1,200 – $10,000/year',
    mainRegions: ['Northland', 'Bay of Plenty', 'Waikato', 'Coromandel', 'Far North'],
    faqs: [
      { q: 'Is wind damage the main risk for avocado growers?', a: 'Yes. Avocado trees\' shallow root systems and large canopies make them particularly vulnerable to wind. Strong winds cause fruit drop (mature fruit dislodged before harvest), physical fruit damage (bruising from contact with branches), and tree structure damage. Wind cover is the most important named peril for Northland and Bay of Plenty avocado growers. Cyclone remnants and strong northeasterlies are the primary wind threats.' },
      { q: 'Can I insure against avocado fruit drop from wind?', a: 'Yes. Wind-caused fruit drop is an insurable event under named perils cover that includes windstorm as a covered peril. When a covered wind event causes significant fruit drop, the insurer will assess the volume of fruit that fell prematurely and compensate for the resulting revenue loss. Notify your insurer or broker as soon as possible after a significant wind event — ideally within 24–48 hours.' },
      { q: 'Does avocado insurance cover Phytophthora root rot?', a: 'Phytophthora root rot is a biological disease and is typically excluded from standard named perils crop insurance. However, business interruption cover can compensate for income losses during an orchard recovery or replanting programme following a severe Phytophthora outbreak. Improving soil drainage and using Phytophthora-resistant rootstocks reduces disease risk and may influence insurer risk assessment.' },
      { q: 'Are young avocado trees (establishment years) insurable?', a: 'Yes. Young avocado trees can be insured during the establishment period, though the coverage structure and sum insured basis may differ from mature production orchards. Establishment period cover typically includes the replacement value of young trees rather than crop revenue, as there is little or no commercial production in the first 3–5 years. Our brokers can structure appropriate cover for orchards at all stages of development.' },
      { q: 'How do windbreaks affect avocado insurance premiums?', a: 'Established windbreaks (shelter belts) that demonstrably reduce wind exposure can reduce insurance premiums for wind and fruit drop cover over time. Insurers assess site-specific wind risk when pricing policies, and a well-sheltered block will typically receive a better rate than an exposed coastal block. If you are planning a new avocado development, factoring in windbreak establishment from the outset will benefit both crop protection and insurance costs.' },
    ],
  },
  {
    slug: 'berry-insurance',
    name: 'Berry Crop Insurance',
    shortName: 'Berries',
    description: 'Insurance for strawberries, blueberries, raspberries and boysenberries against hail, frost, botrytis and other weather and production risks across NZ.',
    longDescription: `Berry production is a significant and growing sector in New Zealand horticulture, with strawberries, blueberries, raspberries, and boysenberries grown across the country for fresh market, PYO (pick-your-own), export, and processing. Berry crops are high-value, weather-sensitive crops grown in both outdoor and tunnel environments. Hail damage, excess rain (triggering botrytis), frost at flowering, and drought stress are the key weather risks. Comprehensive crop insurance provides the financial safety net that enables berry growers to invest confidently in productive systems.`,
    longFormContent: `
<h2>Berry Crop Insurance in New Zealand: A Complete Guide</h2>

<p>Berry fruit production in New Zealand spans a wide range of species and production systems. Strawberries are the most widely grown, produced across the country from Northland to Southland in outdoor beds, raised beds, and tabletop polytunnel systems. Blueberries are concentrated in the Waikato, Bay of Plenty, and Hawke's Bay, with both highbush and rabbiteye varieties grown for fresh export to Asia. Raspberries and boysenberries are produced predominantly in Nelson and Marlborough for fresh and processing markets, while blackcurrants (primarily for juicing) are grown at scale in Canterbury and Marlborough.</p>

<p>Berry crops share a common characteristic: they are high-value per hectare but extremely sensitive to weather events, particularly during flowering, ripening, and harvest. A single hailstorm or sustained period of rain during harvest can destroy a season's income across an entire property, with limited opportunity to recover within that season.</p>

<h3>Hail: The Primary Weather Risk</h3>

<p>Hail is the most significant insurable risk for outdoor berry production. Unlike tree fruits where the tree itself continues to a future season, berry plants — particularly annual strawberries — provide only one or two harvest opportunities per season. Hail damage to ripe or near-ripe strawberries is essentially a total loss of the affected fruit. For blueberries and raspberries, hail can damage developing fruit, bruising and splitting berries and creating entry points for disease.</p>

<p>Tunnel-grown berry crops have significantly lower hail risk, as the polytunnel structure intercepts the hail before it reaches the crop. However, the tunnel structure itself can be damaged by large hail or strong winds, and infrastructure cover for the polytunnel system should be arranged alongside any crop cover. Our brokers regularly assist berry growers in structuring combined crop and infrastructure policies that address both the growing crop and the tunnel investment.</p>

<h3>Botrytis and Rain Events at Harvest</h3>

<p>Botrytis cinerea (grey mould) is the most significant disease threat to berry crops, and it is directly stimulated by wet weather during flowering and harvest. While botrytis itself is typically a management risk excluded from insurance, the underlying weather conditions that trigger severe botrytis — sustained rainfall during the harvest period — can interact with insurance claims in important ways. Where a hail event physically damages berry skins, creating entry points for botrytis infection, the consequential disease loss may be covered as part of the hail claim. Review your policy wording carefully to understand how consequential disease is treated.</p>

<h3>Frost at Flowering</h3>

<p>Frost during the berry flowering period can destroy developing fruit before it forms. Strawberries flower progressively over a long period (making them somewhat resilient to individual frost events if planted in multiple batches), but early-season flowers on blueberries, raspberries, and other perennial berries are highly frost-sensitive. Frost cover is available as a named peril for berry crops, applying from flowering through fruit development.</p>

<h3>Polytunnel Berry Production: Insurance Considerations</h3>

<p>An increasing proportion of NZ strawberry production has moved into tabletop polytunnel systems — high-cost, high-productivity production systems that command premium prices and extended harvest windows. Polytunnel structures — including the tunnel frames, plastic covers, irrigation drip tape, and growing substrate systems — represent a major capital investment (typically $150,000–$400,000 per hectare for a complete tabletop system). These infrastructure costs should be insured as rural property or commercial assets, with the growing crop insured separately under a crop policy. Our brokers can coordinate both covers into a single programme.</p>

<h3>Blueberry Export Market Considerations</h3>

<p>Premium NZ blueberries grown for export to Japan, China, and South Korea command exceptional prices — up to $30–$50 per kilogram at the grower level in peak supply windows. However, export quality requirements are exacting, and a weather event that causes surface blemishing, sizing failures, or bruising can result in export-grade fruit being downgraded to local market or processing use at a fraction of the export price. Revenue protection policies that account for the difference between export and domestic pricing are available for commercial blueberry operations with established export contracts.</p>

<h3>Premium Guidance for Berry Crop Insurance</h3>

<p>Berry crop insurance premiums reflect the high per-hectare value of the crop and the weather sensitivity of the production system. As a guide, outdoor strawberry insurance might cost 2%–5% of insured crop value per year; tunnel-grown strawberries with lower weather exposure may pay 0.5%–2%. Blueberry insurance for export operations is typically priced at 1.5%–4% of insured revenue. Contact our broker network for personalised quotes reflecting your production system, region, and coverage needs.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=1200&q=80',
    icon: '🍓',
    keyRisks: ['Hailstorm', 'Rain & botrytis at harvest', 'Frost at flowering', 'Drought', 'Tunnel structure damage', 'Excessive heat at ripening', 'Post-harvest quality loss'],
    coverageHighlights: ['Named perils crop cover', 'Hail cover', 'Frost at flowering', 'Revenue protection', 'Polytunnel infrastructure cover', 'Export quality downgrade protection', 'Business interruption'],
    typicalPremiumRange: '$800 – $8,000/year',
    mainRegions: ["Hawke's Bay", 'Nelson', 'Canterbury', 'Waikato', 'Bay of Plenty', 'Northland'],
    faqs: [
      { q: 'Do polytunnel berry crops need insurance?', a: 'Yes. While polytunnels significantly reduce weather risk to the crop, they introduce infrastructure risk (tunnel frame and cover damage from wind, hail, or snow) and there is still crop exposure during establishment, planting, and at tunnel ends. The polytunnel structure itself — costing $150,000–$400,000 per hectare for tabletop systems — must be insured as rural property or commercial assets. Our brokers can coordinate crop and infrastructure cover into a single programme.' },
      { q: 'Does berry insurance cover botrytis losses?', a: 'Botrytis is generally excluded as a standalone claim because it is a management risk. However, where botrytis develops as a direct consequence of a covered weather event (e.g., hail damage to berry skins creates infection entry points), the consequential disease loss may be covered as part of the weather event claim. Review policy wording carefully on this point, and discuss it explicitly with our brokers when arranging cover.' },
      { q: 'Can I get frost cover for my blueberry operation?', a: 'Yes. Frost at flowering is a covered named peril for blueberry insurance. Blueberry flowers are vulnerable in spring, and a frost event can significantly reduce fruit set across an entire block. Cover should be in place before flowering commences — typically in August–September depending on your region and variety.' },
      { q: 'Is export quality downgrade cover available for blueberries?', a: 'Revenue protection policies that account for the difference between export and domestic pricing are available for commercial blueberry operations with established export contracts. If weather damage forces downgrading of export-quality fruit to domestic market prices, a revenue protection policy can compensate for the difference. This is a valuable cover for growers supplying premium Asian export markets.' },
      { q: 'When should berry crop insurance be arranged?', a: 'Annual strawberry cover should be in place before transplanting (typically May–July for winter-planted crops). Perennial berry crops (blueberries, raspberries, boysenberries) should have continuous annual cover. Cover should be renewed before each growing season begins, and definitely before any frost risk period.' },
    ],
  },
  {
    slug: 'flower-ornamental-insurance',
    name: 'Flower & Ornamental Crop Insurance',
    shortName: 'Flowers & Ornamentals',
    description: 'Insurance for cut flowers, bulbs, nursery stock and ornamental crops against hail, frost, flooding and weather events across New Zealand.',
    longDescription: `New Zealand's flower, bulb, and ornamental plant industry generates significant revenue, with daffodil and tulip bulbs exported from Canterbury and Southland, and cut flowers grown across the country for domestic and international markets. These crops are grown in some of the most weather-exposed situations in NZ horticulture — open fields in Canterbury, coastal Southland, and Waikato. Specialist floriculture insurance protects growers against the financial consequences of hail, frost, flooding, and other weather events that can destroy high-value flower and bulb crops.`,
    longFormContent: `
<h2>Flower and Ornamental Crop Insurance in New Zealand: A Complete Guide</h2>

<p>New Zealand's floriculture and ornamental plant sector is diverse, ranging from large-scale commercial daffodil and tulip bulb production in Canterbury and Southland to nursery stock operations in the Waikato and Auckland, cut flower growing in Hawke's Bay, and specialist native plant production for landscape and revegetation markets. The sector collectively generates substantial revenue and employs significant numbers of horticultural workers.</p>

<p>Floriculture crops share important characteristics with high-value horticultural crops: they are weather-sensitive, require significant investment in inputs and management, and can face rapid value destruction from a single adverse weather event. A hailstorm across a daffodil bulb field in Methven during bulb development can damage the developing bulbs and foliage enough to reduce the harvestable, exportable bulb yield substantially. Frost during a cut flower operation's peak production window can destroy a crop intended for Valentine's Day or Mother's Day supply.</p>

<h3>Key Risks by Crop Type</h3>

<p><strong>Cut flowers</strong> (roses, lilies, gerberas, alstroemeria, chrysanthemums) face hail as the primary weather risk — hail can physically damage flower petals and buds, rendering them unmarketable. Cold snap events during winter or early spring production can damage developing buds or freeze open flowers. Many commercial cut flower operations use protected production (glasshouses, polytunnels) which significantly reduces weather risk but introduces infrastructure exposure.</p>

<p><strong>Bulb crops</strong> (daffodils, tulips, iris, freesia) grown in Canterbury, Southland, and Waikato for export face their primary risks during above-ground growth and bloom periods. Hail can damage foliage and developing flower structures, which affects bulb development and quality. Late frost damage to emerging foliage can set back the crop and reduce bulb sizing. Flooding in Canterbury's lower-lying bulb growing areas can damage both the developing crop and bulb quality in storage.</p>

<p><strong>Nursery stock</strong> (trees, shrubs, ground covers, natives) faces different risk profiles depending on the growing system — container production in nurseries faces wind damage (container tip-over, structure damage), while field-grown stock faces frost, flooding, and hail. Cold stores and refrigerated truck systems for transporting nursery stock can also be insured as business assets.</p>

<p><strong>Native plant production</strong> for ecological restoration and landscaping markets has grown significantly in NZ. Production often occurs on exposed sites in challenging conditions. Wind damage to shade structures and irrigation systems, hail damage to young propagated plants, and flooding are the primary risks for native plant producers.</p>

<h3>Protected Production: Infrastructure Cover</h3>

<p>A growing proportion of NZ floriculture production occurs in protected structures — glasshouses, glass venlo structures, and polytunnels. These infrastructure assets represent major investments: a glass venlo glasshouse can cost $500,000–$1,500,000 per hectare; polytunnel systems $50,000–$150,000 per hectare. These structures must be insured as commercial property on a full replacement cost basis. Weather events — severe hail, wind, or snow loading — can catastrophically damage glasshouse structures, and the replacement cost must be accurately reflected in the sum insured to avoid underinsurance penalties at claim time.</p>

<h3>Cold Storage and Post-Harvest Risks</h3>

<p>Floriculture crops are often stored in refrigerated coolstores before dispatch. Refrigeration failure — whether from mechanical breakdown or power failure — can destroy the entire stored inventory of cut flowers or bulbs in a matter of hours. Cold storage and refrigeration breakdown cover is typically arranged as a separate insurance product, but our broker network can include it in a coordinated package alongside crop and infrastructure cover.</p>

<h3>Getting the Right Cover</h3>

<p>Floriculture insurance is a specialist area that requires brokers with genuine understanding of each crop type's specific risks, vulnerability windows, and post-harvest value chain. Our broker network includes advisers with horticultural insurance experience who can structure appropriate cover for any NZ floriculture or ornamental plant operation. Contact us to discuss your specific growing system, crop mix, and coverage needs.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1490750967868-88df5691cc78?w=1200&q=80',
    icon: '🌸',
    keyRisks: ['Hailstorm during growing season', 'Late frost', 'Flooding & waterlogging', 'Wind damage to structures', 'Disease outbreak', 'Refrigeration failure', 'Cold storage loss'],
    coverageHighlights: ['Named perils crop cover', 'Hail cover', 'Frost cover', 'Flood cover', 'Glasshouse & polytunnel cover', 'Cold storage & refrigeration breakdown', 'Business interruption'],
    typicalPremiumRange: '$600 – $8,000/year',
    mainRegions: ['Canterbury', 'Southland', 'Waikato', 'Bay of Plenty', "Hawke's Bay", 'Auckland'],
    faqs: [
      { q: 'Can I insure bulb crops like daffodils and tulips?', a: 'Yes. Bulb crops can be insured against named weather perils including hail, frost, flooding, and windstorm. Canterbury and Southland bulb growers face particular exposure to hail during bulb development and to flooding in low-lying growing areas. Given the multi-year nature of bulb crop establishment and management, growers should also consider business interruption cover alongside basic crop cover.' },
      { q: 'Do glasshouse flower crops need different insurance than outdoor crops?', a: 'Yes. Glasshouse crops have reduced weather risk (the structure protects the crop) but introduce significant infrastructure risk. The glasshouse structure itself — which can cost $500,000–$1.5M per hectare for glass venlo structures — must be insured as commercial property on a full replacement cost basis. Weather events that damage or destroy glasshouse structures are the primary financial risk for protected-environment flower growers.' },
      { q: 'Is refrigeration failure covered by floriculture insurance?', a: 'Refrigeration failure or breakdown is not typically included in standard crop insurance policies, but can be arranged as a separate cold storage and refrigeration breakdown cover. Given that stored cut flowers or bulbs can be destroyed within hours of refrigeration failure, this cover is highly valuable for operations with significant inventory held in cold storage. Our brokers can include it in a coordinated coverage package.' },
      { q: 'What floriculture crops are hardest to insure?', a: 'Annual cut flower crops with very short market windows (e.g., roses for Valentine\'s Day) are challenging to insure because the entire season\'s value may need to be realised within a few weeks. Specialist policies can address these tight marketing windows, but cover must be in place well before the production season. Native plant production for restoration markets can also be more complex to insure due to the multi-year establishment period. Our brokers can work through these scenarios with you.' },
    ],
  },
  {
    slug: 'vegetable-crop-insurance',
    name: 'Vegetable Crop Insurance',
    shortName: 'Vegetables',
    description: 'Cover for outdoor and greenhouse vegetable growers including potatoes, onions, brassicas, squash and salad crops across NZ.',
    longDescription: `New Zealand's vegetable industry includes a diverse range of outdoor and protected crops supplying supermarkets, food processors, and fresh markets. Potatoes, onions, brassicas, squash, leeks, kumara, and salad greens are grown across Pukekohe, Canterbury, Hawke's Bay, and Southland. Contract growers supplying supermarkets and processors face significant financial exposure if weather events prevent them from meeting supply obligations. Crop insurance provides the safety net that enables confident contracting and investment.`,
    longFormContent: `
<h2>Vegetable Crop Insurance in New Zealand: A Complete Guide</h2>

<p>New Zealand's vegetable industry is one of the most economically diverse sectors in NZ horticulture, ranging from large-scale outdoor potato and onion production in Pukekohe and Canterbury to protected environment salad green growing in Auckland's greenhouses and specialist kumara production in Northland. The industry supplies major supermarket chains (Foodstuffs, Woolworths NZ), food service companies, and processing plants with an enormous range of products year-round.</p>

<p>The industry's economic structure — particularly the prevalence of contract growing arrangements — creates specific insurance needs. Many vegetable growers operate under annual contracts with supermarkets, processors, or packhouses that specify required volumes and quality. A crop failure due to weather means not only losing the crop revenue, but potentially failing to meet the contracted supply obligation. This can result in financial penalties, loss of preferred supplier status, or difficulty securing future contracts. Insurance that protects contract delivery is therefore a critical risk management tool for NZ vegetable growers.</p>

<h3>Regional Risk Profiles</h3>

<p><strong>Pukekohe (South Auckland)</strong> is NZ's most intensive vegetable growing area, producing brassicas, leeks, onions, lettuce, and a wide range of vegetables year-round. The region has experienced significant weather volatility in recent years — heavy rainfall events have caused repeated flooding of paddocks during critical planting and growing windows, damaging crops and preventing field operations. Climate change projections suggest increasing rainfall intensity in this region, making flood and excess moisture cover increasingly relevant for Pukekohe growers.</p>

<p><strong>Canterbury</strong> is NZ's primary potato growing region, with significant production of onions, peas, beans, and other processing vegetables. The flat, well-drained Canterbury Plains provide excellent growing conditions, but arable crop risks — hail, late frost, and dry conditions in summer — apply to vegetable production as well. Canterbury has experienced several significant hailstorms in recent years that damaged crops across multiple farms simultaneously.</p>

<p><strong>Hawke's Bay</strong> was devastated by Cyclone Gabrielle in February 2023, which caused catastrophic flooding across the entire vegetable, onion, and pip fruit growing area. Many growers lost entire crops, infrastructure, and in some cases their orchard or garden property itself. The event highlighted the importance of flood cover, business interruption, and comprehensive rural property insurance for vegetable growers in flood-prone areas.</p>

<p><strong>Southland</strong> grows vegetables — particularly carrots, parsnips, and brassicas — in one of NZ's most challenging weather environments. Cold temperatures, wind, and snowfall create risks that are less relevant in northern regions. Southland growers face a distinctive risk profile requiring specific policy design.</p>

<h3>Potato and Onion Production: Specific Risks</h3>

<p>Potatoes face flooding and waterlogging as their primary risk — tubers in waterlogged soil are vulnerable to rotting, and excess moisture during harvest prevents machinery access, causing crop degradation and significant yield losses. Hail can damage potato foliage, reducing photosynthetic capacity and final yield, and can physically damage harvested potatoes in windrows. Late blight (Phytophthora infestans) is a major disease risk that requires intensive spray management — it is excluded from crop insurance but may be exacerbated by wet weather conditions.</p>

<p>Onions face hail damage to emerging crops (the thin onion leaf is particularly vulnerable to mechanical damage), flooding during bulb development, and wet harvest conditions that delay or prevent timely harvesting and curing. Inadequately cured onions have reduced storage life and are prone to disease, causing post-harvest losses in storage.</p>

<h3>Contract Fulfilment and Supply Chain Protection</h3>

<p>For contract vegetable growers, the most financially significant consequence of crop failure may not be the lost crop itself, but the implications of failing to meet contracted supply volumes. Specialist crop insurance policies can be structured to include contract fulfilment protection — covering the cost of sourcing alternative supply from other growers, paying contract penalties, or compensating for lost premium pricing on unfilled volumes. This type of cover is particularly relevant for growers who have exclusive or preferred supplier relationships with major retail chains or food processors.</p>

<h3>Greenhouse and Tunnel House Vegetable Production</h3>

<p>Protected environment vegetable production — glasshouse tomatoes, peppers, cucumbers, and salad greens — has a different risk profile from outdoor crops. The protected structure reduces weather risk to the crop, but the structure itself must be insured as commercial property. Mechanical systems — heating, ventilation, CO2 injection, hydroponic nutrient systems — represent additional insurable assets that are critical to continuous production. Business interruption cover is particularly important for glasshouse operators, as the cost of maintaining a glasshouse structure and crew continues even if the crop is lost or production is disrupted.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
    icon: '🥦',
    keyRisks: ['Flooding & waterlogging', 'Drought & water shortage', 'Hailstorm', 'Frost', 'Contract non-delivery', 'Cyclone & severe wind', 'Storage loss'],
    coverageHighlights: ['Named perils crop cover', 'Flood & excess moisture cover', 'Frost cover', 'Hail cover', 'Contract fulfilment protection', 'Revenue protection', 'Business interruption'],
    typicalPremiumRange: '$700 – $9,000/year',
    mainRegions: ['Pukekohe / South Auckland', 'Canterbury', "Hawke's Bay", 'Northland', 'Southland', 'Horowhenua'],
    faqs: [
      { q: 'Does vegetable crop insurance cover flooding?', a: 'Yes. Flooding and excess moisture is one of the most common causes of crop insurance claims for NZ vegetable growers. Named perils policies that include flood cover are available from specialist rural insurers. Pukekohe and parts of Canterbury and Hawke\'s Bay have experienced significant flood events in recent years — if your growing area is flood-prone, ensure flood is explicitly included in your policy.' },
      { q: 'What did Cyclone Gabrielle mean for Hawke\'s Bay vegetable growers?', a: 'Cyclone Gabrielle (2023) caused catastrophic losses across Hawke\'s Bay\'s vegetable, onion, and pip fruit sectors. Growers who had comprehensive crop and rural property policies were significantly better placed to recover. The event highlighted the need for: flood cover in crop policies, rural property cover for packhouses and irrigation infrastructure, and business interruption cover for the extended recovery period. If you grow in a cyclone or flood-risk area, speak with our brokers about your full risk picture.' },
      { q: 'Can contract vegetable growers insure against supply failure?', a: 'Yes. Contract fulfilment protection is available for vegetable growers who supply supermarkets, processors, or packhouses under contracted volume agreements. This cover can include compensation for contract penalties, the cost of sourcing alternative supply, or revenue loss from unfilled premium-priced contracts. If you grow under contract, discuss this specific cover with our brokers.' },
      { q: 'Is potato crop insurance available in NZ?', a: 'Yes. Potato crops can be insured under named perils policies that include flooding, hail, frost, and other specified events. Flooding is the primary risk for potato growers, particularly in areas with heavy clay soils or high water tables. Hail damage to potato foliage can also affect yield. Our broker network can source potato-specific policies from specialist rural insurers.' },
      { q: 'Does glasshouse vegetable insurance work differently from outdoor crops?', a: 'Yes. Glasshouse vegetable crops have lower weather risk due to the protective structure, but the glasshouse itself must be insured as commercial property on a replacement cost basis. Business interruption cover is particularly important for glasshouse operators, as fixed costs continue even if production is disrupted. Mechanical breakdown of heating, ventilation, or hydroponic systems can also cause significant crop losses and should be covered.' },
    ],
  },
  {
    slug: 'barley-insurance',
    name: 'Barley Insurance',
    shortName: 'Barley',
    description: 'Named perils and revenue protection for NZ malting and feed barley growers in Canterbury, Southland and Marlborough.',
    longDescription: `Barley is New Zealand's second most important cereal crop after wheat, grown primarily in Canterbury and Southland for malting and stockfeed. Malting barley is one of the highest-value arable crops in Canterbury, supplied under contract to Lion, DB Breweries, and the craft brewing sector. However, the malting premium depends entirely on meeting strict quality parameters — a single weather event causing pre-harvest germination or quality failure can force an entire crop to be sold as stockfeed at a substantial price discount. Specialist barley insurance protects both yield and quality outcomes.`,
    longFormContent: `
<h2>Barley Insurance in New Zealand: A Complete Guide</h2>

<p>New Zealand barley production is concentrated on the Canterbury Plains and in Southland, with significant growing also in Marlborough and Hawke's Bay. The crop is grown for two distinct markets: malting barley (sold at a significant premium to beer brewers and whisky distillers) and feed barley (sold as stockfeed at a lower commodity price). The Canterbury and Southland regions produce some of the Southern Hemisphere's highest-quality malting barley, with varieties like Laureate, Compass, and Odyssey achieving world-class germination percentages and low protein contents that command premium prices from Lion, DB Breweries, and the rapidly expanding NZ craft brewing sector.</p>

<p>The distinction between malting and feed barley has critical insurance implications. A barley crop that meets malting specifications at harvest may return $350–$450 per tonne to the grower. The same crop, if quality failures force downgrading to feed barley, returns $200–$280 per tonne — a difference of $100–$200 per tonne across potentially hundreds of hectares. For a Canterbury malting barley grower with 100 hectares under crop, a quality downgrade event can cost $100,000–$200,000 in a single season. This financial exposure is the primary driver of specialist malting barley quality insurance in NZ.</p>

<h3>Weather Risks Affecting Barley Quality and Yield</h3>

<p><strong>Pre-harvest germination (sprouting in the head)</strong> is the most financially damaging event for malting barley growers. When sustained rainfall occurs in the 2–3 weeks before harvest, ripe barley heads can absorb moisture and begin germinating while still on the plant. Pre-germinated barley fails malting quality tests — the starch that should ferment in the brewery has already begun converting — and must be sold as feed grain. In wet Canterbury or Marlborough harvests, pre-germination can affect entire districts simultaneously, causing major financial losses across the malting barley sector.</p>

<p><strong>Hail at grain fill</strong> (November–January) physically damages developing barley heads, causing kernel shrivelling, splitting, and loss of grain from heads. The damaged kernels may not fill properly, reducing yield and potentially creating a mix of normal and damaged grain that complicates marketing. Hail damage to malting barley may not itself cause pre-germination, but it creates physical defects that can result in malting rejection on screenings or visual assessment.</p>

<p><strong>Wet harvest conditions</strong> — sustained rainfall during the harvest window (January–March) — prevent timely harvesting of mature barley. Standing barley that remains un-harvested during prolonged wet periods will deteriorate in quality, with protein and moisture content increasing and germination percentage decreasing as the crop is exposed to repeated wetting and drying cycles. Delayed harvest also increases the risk of head diseases and quality failures.</p>

<p><strong>Late frosts</strong> after emergence (winter barley sown in May–June) can kill young barley plants before they have developed adequate frost hardiness. Spring frosts after growth resumption can damage developing tillers and growing points. Frost damage to early growth stages can result in uneven stands, delayed maturity, and reduced yields — though well-established barley is relatively frost-tolerant compared to more frost-sensitive crops.</p>

<p><strong>Waterlogging and flooding</strong> during establishment or at any growth stage can kill young barley plants, particularly in paddocks with heavy clay soils or impeded drainage. Canterbury experienced significant flooding events in 2021 and 2022 that inundated barley paddocks during critical spring growth periods.</p>

<h3>Malting Barley Quality Insurance: How It Works</h3>

<p>Specialist malting barley quality insurance compensates growers for the difference between the contracted malting price and the actual return received when a crop fails to meet malting specifications due to a covered weather event. The policy requires clear documentation of the contracted malting price, the actual quality test results, and evidence that the quality failure was caused by a covered weather event (typically pre-harvest rainfall, hail, or frost) rather than agronomic factors under the grower's control.</p>

<p>Quality insurance is typically offered as an endorsement to a standard named perils crop policy, rather than as a standalone product. When arranging barley insurance, explicitly ask our brokers about quality protection endorsements if you have malting barley under contract.</p>

<h3>Harvested Barley in Storage</h3>

<p>Some arable crop policies cover harvested barley for up to 12 months from the date of harvest or until sold. This provides valuable protection for barley held in on-farm silos or bunkers awaiting sale — a common situation as growers manage their marketing strategy throughout the season. Fire, storm damage to storage structures, and contamination events affecting stored grain are the primary risks covered by harvested crop cover.</p>

<h3>Premium Guidance for Barley Insurance</h3>

<p>Named perils barley insurance premiums in Canterbury and Southland are competitive, reflecting the generally favourable growing conditions in these regions. As an indicative guide, a Canterbury malting barley grower with 150 hectares and $250,000 in insured crop value (combining crop yield and quality protection) might pay $2,500–$7,500 per year for comprehensive cover. Malting quality protection endorsements add to this cost depending on the contracted price and quality premium being protected. Contact our broker network for accurate quotes.</p>
    `,
    heroImage: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&q=80',
    icon: '🌾',
    keyRisks: ['Pre-harvest germination (malting rejection)', 'Hailstorm at grain fill', 'Wet harvest / harvest delay', 'Waterlogging', 'Late frost', 'Wind lodging', 'Quality downgrade (malting → feed)'],
    coverageHighlights: ['Named perils cover', 'Malting quality protection', 'Pre-harvest germination cover', 'Yield guarantee', 'Harvested crop in storage (12 months)', 'Replanting cost (80% within 40 days)', 'Input cost protection'],
    typicalPremiumRange: '$700 – $7,000/year',
    mainRegions: ['Canterbury', 'Southland', 'Marlborough', "Hawke's Bay"],
    faqs: [
      { q: 'Can I insure malting barley for quality downgrade to feed?', a: 'Yes. Specialist malting barley quality protection is available as a policy endorsement, compensating growers for the price difference between contracted malting barley prices and feed barley prices when a covered weather event (typically pre-harvest rain or hail) causes quality failure. With a potential price gap of $100–$200 per tonne between malting and feed, quality insurance is critical for Canterbury and Southland malting barley growers with contracted supply agreements.' },
      { q: 'What is pre-harvest germination and why is it covered?', a: 'Pre-harvest germination occurs when sustained rainfall on mature barley causes grain to begin sprouting in the head while still in the field. Germinated grain fails malting quality tests as the starch needed for brewing fermentation has already begun converting. Pre-harvest germination is caused by weather (an insurable event) and can be covered under specialist barley quality protection policies. It is distinct from agronomic causes of quality failure which are typically excluded.' },
      { q: 'Does harvested barley in my silo get covered?', a: 'Yes. Many arable crop policies cover harvested barley for up to 12 months from harvest or until sold. This protects barley held in on-farm silos, bunkers, or other storage against fire, storm damage to the storage structure, and other covered events. Given that many Canterbury growers store barley on-farm and sell progressively throughout the season, this harvested crop cover is an important part of the total policy.' },
      { q: 'Is specialist malting barley insurance available?', a: 'Yes. For specialist malting barley quality protection, our broker network can access additional endorsements or products from specialist markets that specifically address the malting quality downgrade scenario. We recommend discussing your contracting arrangements explicitly with our brokers to ensure the most appropriate coverage structure.' },
      { q: 'When should I arrange barley insurance?', a: 'Cover should be in place before sowing. Winter barley (sown May–June) should have insurance arranged in April. Spring barley (sown August–September) should be covered before sowing commences. Do not wait until after sowing — insurers may decline new applications for established crops, and coverage commenced post-sowing may have reduced benefits for early-season events. Annual policy reviews should be conducted in April.' },
    ],
  },
];
