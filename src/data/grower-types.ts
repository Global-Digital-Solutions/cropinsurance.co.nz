export interface GrowerType {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  longFormContent: string;
  heroImage: string;
  icon: string;
  typicalCrops: string[];
  keyInsuranceNeeds: string[];
  coverageHighlights: string[];
  faqs: { q: string; a: string }[];
}

export const growerTypes: GrowerType[] = [
  {
    slug: 'orchardists',
    name: 'Orchardists',
    shortName: 'Orchardists',
    description: 'Specialist insurance for kiwifruit, apple, pear, avocado and stone fruit orchardists across New Zealand.',
    longDescription: `New Zealand orchardists operate high-value horticultural businesses that are highly exposed to weather events and biological risks. Whether you grow kiwifruit in the Bay of Plenty, apples in Hawke's Bay, or cherries in Central Otago, our broker network can arrange specialist crop insurance that covers your standing crop, orchard infrastructure, and business income.`,
    heroImage: 'https://images.unsplash.com/photo-1727120279660-5c28b8461609?w=1200&q=80',
    icon: '🌳',
    typicalCrops: ['Kiwifruit', 'Apples & Pears', 'Cherries', 'Avocados', 'Peaches & Nectarines', 'Apricots & Plums'],
    keyInsuranceNeeds: ['Standing crop cover', 'Hail protection', 'Frost cover', 'Orchard infrastructure', 'Business interruption', 'Post-harvest cover'],
    coverageHighlights: ['Named perils crop cover', 'Multi-peril revenue protection', 'Hail netting infrastructure', 'Coolstore & packing shed cover', 'Liability cover', 'Vehicle & machinery'],
    longFormContent: `
<h2>Understanding Crop Insurance for NZ Orchardists</h2>
<p>New Zealand's orchard sector is one of the most productive — and exposed — agricultural industries in the Southern Hemisphere. Kiwifruit orchards in the Bay of Plenty, apple and pear orchards in Hawke's Bay and Nelson, avocado groves in Northland, and cherry and stone fruit operations in Central Otago all carry significant per-hectare values that can be devastated by a single weather event. Crop insurance for orchardists in New Zealand is not a commodity product: the right policy requires specialist knowledge of growing conditions, market pricing, and the particular risk profile of each crop type and region.</p>

<h2>What Weather Risks Do NZ Orchardists Face?</h2>
<p>The primary weather perils that drive orchard crop insurance claims in New Zealand include:</p>
<ul>
<li><strong>Hailstorms</strong> — The most frequent and financially significant peril for orchardists. Hail at flowering or during fruit development can cause total crop loss or significant downgrading. High-country locations in Hawke's Bay and Central Otago are particularly vulnerable. Hail nets provide physical protection but are expensive ($25,000–$80,000/ha installed) and themselves subject to wind and snow loading damage.</li>
<li><strong>Late frost</strong> — Frost at budburst or flowering can destroy 80–100% of a season's crop. Kiwifruit in the Bay of Plenty, apricots in Central Otago, and pip fruit in Hawke's Bay have all suffered significant frost events in recent years. Cyclone Gabrielle's aftermath in 2023 also demonstrated that storm-related temperature inversions can create unexpected late-frost conditions.</li>
<li><strong>Wind and cyclone damage</strong> — Cyclone Gabrielle (2023) caused hundreds of millions of dollars in orchard damage across Hawke's Bay and Gisborne, removing crop from trees, destroying infrastructure, and flooding orchards. Wind events can strip fruit from trees at critical pre-harvest periods, when per-kilogram values are at their highest.</li>
<li><strong>Flooding and waterlogging</strong> — Prolonged wet conditions can cause root damage in stone fruit and avocados, reduce brix levels in grapes, and prevent harvest machinery from entering orchards. River flooding can bury orchards under silt, as happened across significant areas of Hawke's Bay in 2023.</li>
<li><strong>Disease and biological events</strong> — PSA (Pseudomonas syringae pv. actinidiae) devastated NZ kiwifruit orchards between 2010 and 2013. While standard named perils policies typically exclude plant disease, specialist policies can include business interruption cover for disease-forced production losses.</li>
</ul>

<h2>Types of Orchard Insurance Available in NZ</h2>
<p>Orchardists in New Zealand can access several policy structures through specialist rural brokers:</p>
<h3>Named Perils Crop Cover</h3>
<p>The most common and affordable structure. Covers specific, listed perils such as hail, frost, wind, fire, and flooding. The policy clearly defines the trigger event, the assessment methodology, and the basis of settlement. Named perils cover is available from Gallagher Agriculture, Aon NZ, and a number of specialist markets. Premiums typically range from 0.8% to 3.5% of the sum insured, depending on region, crop type, cover level, and claims history.</p>
<h3>Multi-Peril Crop Insurance (MPCI)</h3>
<p>Provides broader protection, guaranteeing a minimum yield or revenue regardless of the cause of loss. MPCI is particularly well-suited to large commercial orchardists with diverse risk profiles. It is accessed through specialist brokers who can place cover in international markets including Lloyd's of London. MPCI premiums are higher than named perils cover but provide more comprehensive protection against systemic risk years.</p>
<h3>Business Interruption Cover</h3>
<p>Compensates for the loss of gross profit or net income when an insured event forces a reduction in production. For orchardists, this is particularly relevant in seasons where damage is partial — a frost-affected orchard may continue to produce but at significantly reduced volume for two to three seasons while new growth matures.</p>
<h3>Infrastructure Cover</h3>
<p>Covers orchard infrastructure including hail net systems, irrigation infrastructure (drippers, mainlines, pumps), coolstores, packing sheds, and workers' accommodation. Infrastructure losses are often as significant as crop losses in major weather events.</p>

<h2>Key Policy Considerations for Orchardists</h2>
<p>When comparing orchard insurance policies, the following factors significantly affect the value of cover:</p>
<ul>
<li><strong>Sum insured basis</strong> — Is the policy based on expected yield at market value, expected revenue, or actual production value? Market value policies can leave significant gaps when market prices fall. Revenue-based policies tend to provide more predictable settlement amounts.</li>
<li><strong>Assessment methodology</strong> — How is damage assessed? Who are the loss adjusters? How quickly will they attend after a weather event? Delays in assessment can result in fruit loss before the claim is properly documented.</li>
<li><strong>Sub-limits and sublimits</strong> — Many policies include sub-limits for specific perils (especially frost) that are significantly lower than the overall sum insured. These sub-limits can leave orchardists significantly underinsured in a major frost event.</li>
<li><strong>Policy commencement dates</strong> — Frost cover for kiwifruit typically needs to be in place before budburst (August/September in the Bay of Plenty). Cover taken out after budburst may exclude the current season's frost risk. Speak to a broker well before the growing season begins.</li>
<li><strong>Post-harvest cover</strong> — Standing crop cover typically ceases at harvest. Post-harvest quality cover protects against losses from coolstore failures, handling damage, or post-harvest disease discovery.</li>
</ul>

<h2>How the Claims Process Works</h2>
<p>When a weather event damages your orchard, the claims process typically follows these steps: notify your broker as soon as possible after the event; a specialist horticultural loss adjuster is appointed; the adjuster attends the orchard to assess damage (typically within 48–72 hours of notification for urgent situations); an assessment report is prepared quantifying the loss; the insurer reviews and accepts or negotiates the claim; payment is made. Our partner broker network maintains relationships with experienced horticultural loss adjusters nationwide and will manage the claims process on your behalf.</p>

<h2>Regions and Specialist Coverage</h2>
<p>Orchard insurance requirements vary significantly by region. Bay of Plenty kiwifruit orchardists face different primary risks (wind, cyclone, occasional frost) to Central Otago cherry growers (frost, hail) or Hawke's Bay apple growers (hail, drought). Our broker network includes advisers with specific expertise in each major growing region who can tailor cover to your actual risk profile rather than offering a generic national product.</p>
    `,
    faqs: [
      { q: 'Is hail net insurance separate from crop insurance?', a: 'Hail net systems can be insured either as part of a comprehensive orchard policy (under infrastructure cover) or as a standalone asset. Many orchardists insure their nets separately to ensure the full replacement value is covered, as the cost of net replacement can easily exceed $1 million on a large property.' },
      { q: 'Can I get orchard insurance mid-season?', a: 'Yes, but with restrictions. Most insurers will add cover mid-season, but risk events that have already occurred or are clearly developing at the time of application will be excluded. For frost cover in particular, it is essential to have the policy in place before budburst.' },
      { q: 'Does orchard insurance cover PSA disease?', a: 'Standard named perils policies do not cover PSA disease, as plant disease is typically excluded. However, business interruption cover can compensate for income losses caused by a PSA outbreak, and some specialist policies accessed through Lloyd\'s markets include limited disease cover. Ask your broker about options.' },
      { q: 'What is the typical sum insured for a kiwifruit orchard?', a: 'This depends on the orchard size, variety (green vs. gold kiwifruit), and current market prices. Gold kiwifruit (Zespri SunGold) typically achieves $12–$20 per kilo at grower level, meaning a 10-hectare orchard producing 25,000 trays could have a standing crop value of $1.5–$3 million. Your broker can help you calculate an accurate sum insured.' },
      { q: 'Do I need a broker to access orchard crop insurance?', a: 'All crop insurance in NZ is placed through brokers — there is no direct market for growers. Using an independent broker ensures you receive competitive pricing from multiple insurers, rather than being limited to a single company\'s products.' },
      { q: 'How quickly are orchard claims paid after a weather event?', a: 'Payment timelines vary by insurer and the complexity of the claim. Simple named perils claims (e.g., hail with clear, documented damage) can be settled within 4–8 weeks. More complex claims involving disputed assessments or multiple perils can take 3–6 months.' },
    ],
  },
  {
    slug: 'viticulture-growers',
    name: 'Viticulture & Wine Growers',
    shortName: 'Viticulture',
    description: 'Vineyard and wine grape crop insurance for NZ\'s world-class wine growing regions.',
    longDescription: `New Zealand's wine industry is globally recognised for quality, particularly Marlborough Sauvignon Blanc and Pinot Noir from Central Otago. Viticulture insurance protects vine growers against the significant weather risks faced during the growing season — frost at budburst, hail at berry development, and wind damage — as well as protecting winery infrastructure and stored wine.`,
    heroImage: 'https://images.unsplash.com/photo-1745670922388-cc34082bb8cb?w=1200&q=80',
    icon: '🍷',
    typicalCrops: ['Sauvignon Blanc', 'Pinot Noir', 'Chardonnay', 'Pinot Gris', 'Riesling', 'Merlot & Cabernet'],
    keyInsuranceNeeds: ['Frost at budburst', 'Hail damage', 'Business interruption', 'Winery infrastructure', 'Stored wine cover', 'Machinery breakdown'],
    coverageHighlights: ['Named perils crop cover', 'Frost protection', 'Hail cover', 'Stored wine cover', 'Winery & equipment cover', 'Public liability'],
    longFormContent: `
<h2>Viticulture Insurance for New Zealand Wine Growers</h2>
<p>New Zealand's wine industry has become one of the country's most valuable export sectors, generating over NZ$2 billion annually and building a global reputation for exceptional quality. Marlborough dominates with its iconic Sauvignon Blanc — the Wairau and Awatere Valleys together produce around 80% of all NZ wine. Central Otago Pinot Noir commands premium prices internationally. Hawke's Bay red wines and Gisborne Chardonnay complete the major growing regions. Behind this success lies significant financial exposure: viticulture is a high-value, weather-sensitive industry where a single frost event at budburst or a hailstorm at berry fill can erase an entire season's revenue.</p>

<h2>Viticulture's Primary Weather Risks</h2>
<h3>Frost at Budburst and Flowering</h3>
<p>Frost is the single most feared peril in NZ viticulture. Vines are extremely vulnerable at budburst (typically September in Marlborough, October in Central Otago) when tender new growth emerges. A frost event of -2°C or lower lasting 2–3 hours at budburst can destroy 100% of primary buds. Secondary buds may re-shoot but produce 30–60% of normal yield and typically at lower quality — meaning frost damage in early spring has effects that extend through the harvest, the winery production, and the following year's revenues. Frost protection methods (helicopters, wind machines, frost pots) add cost but cannot provide complete protection in severe events. Insurance backstops the remaining risk.</p>
<h3>Hail During Berry Development</h3>
<p>Hail events between flowering (November–December) and véraison (January–February) can cause catastrophic crop losses. Hail damage to berries at this stage promotes botrytis (grey mould) infection — damage that would be minor in isolation becomes a secondary disease problem that spreads through an entire block. Marlborough, which sits in a natural corridor for convective storm activity, is particularly susceptible. The Wairau Valley has experienced multiple significant hail events in the past decade, with some blocks experiencing total loss.</p>
<h3>Wind Damage</h3>
<p>Marlborough is synonymous with wind, and the Wairau and Awatere Valleys experience consistent strong north-westerlies. Sustained high winds during flowering reduce fruit set. Storm winds can cause physical damage to vines, trellising, and netting. Vineyard infrastructure — including wire trellis systems that may represent $10,000–$20,000 per hectare — is vulnerable to major wind events.</p>
<h3>Drought and Heat Stress</h3>
<p>Hawke's Bay in particular is prone to summer drought conditions. While irrigation is widely used, restrictions on water consents mean some vineyards cannot fully irrigate during dry periods. Heat stress events at critical growth stages can affect berry quality and reduce yields. Some specialist policies include drought cover for irrigated vineyards with consent limitations.</p>

<h2>Insurance Products Available to NZ Viticulture Growers</h2>
<h3>Standing Crop — Named Perils Cover</h3>
<p>The standard approach for NZ viticulture: a policy covering the standing crop against listed perils (frost, hail, wind, fire). The sum insured is based on expected yield at expected market price for your varieties and marketing channel. Premiums typically range from 1.5% to 4% of sum insured for Marlborough Sauvignon Blanc blocks, with higher rates for frost-prone sites or historically hail-affected areas.</p>
<h3>Winery and Equipment Cover</h3>
<p>Wineries are high-value assets with complex, specialised equipment including stainless steel tanks, bottling lines, oak barrels, refrigeration systems, and laboratory equipment. Winery insurance is typically placed separately from vineyard crop cover, as the risk profiles and underwriting considerations differ significantly. Many wineries also carry business interruption cover to protect against income loss during a rebuild following fire or major equipment failure.</p>
<h3>Stored Wine Cover</h3>
<p>Wine in barrel, tank, or bottle — whether at the winery or at an off-site bonded warehouse — represents a significant and sometimes overlooked asset. Stored wine can be insured against fire, theft, accidental damage, and contamination. Premium wine aged in barrel can take 12–18 months to reach the market; the loss of a barrel room to fire or flood represents not just the immediate loss but the vintages that will never be released.</p>
<h3>Business Interruption</h3>
<p>A frost event that destroys 80% of a season's crop doesn't just affect this year's revenue — it affects cash flow for the next 12–18 months as the winery has insufficient fruit to process, bottle, and sell. Business interruption cover bridges the gap, compensating for lost gross profit over the indemnity period agreed in the policy (typically 12–24 months).</p>

<h2>Viticulture Insurance by Region</h2>
<p>Marlborough growers face hail risk from December through February and frost risk in September–October. The Awatere Valley generally has lower frost risk than the Wairau but higher wind exposure. Central Otago growers face the most significant frost risk of any NZ wine region — Cromwell and Alexandra can experience autumn frosts as late as April and spring frosts into October, bracketing the growing season with risk at both ends. Hawke's Bay growers face a different profile: hail risk is present but less severe than Marlborough, while drought and heat are more significant concerns. Wairarapa and Martinborough face spring frost risk and occasional hail.</p>

<h2>What to Look For in a Viticulture Policy</h2>
<p>Key considerations when comparing viticulture insurance options include the frost cover trigger temperature (some policies trigger at -2°C air temp, others require confirmed vine damage); the assessment methodology after a frost event (who attends, when, and how is the proportion of lost buds quantified?); sub-limits for frost (a common catch — your policy may have a $500,000 frost sub-limit even if your total sum insured is $2 million); whether frost cover applies to primary buds only or also secondary bud losses; the treatment of partially damaged crops (is there cover for quality downgrade in addition to yield loss?); and whether post-harvest quality cover is available for table grapes or cellar door wine.</p>
    `,
    faqs: [
      { q: 'At what temperature does frost cover trigger for vineyards?', a: 'This varies by policy. Most standard policies use an air temperature of -2°C measured at vine height for 2 or more hours as the trigger. Some specialist policies use a vine tissue temperature reading, which more accurately reflects actual crop damage. Discuss the trigger with your broker before purchasing to ensure the policy reflects your actual risk.' },
      { q: 'Does vineyard insurance cover frost machines and helicopter costs?', a: 'Some policies include protection cost cover, which reimburses the cost of frost protection measures (helicopter hire, frost pot fuel, wind machine running costs) taken to mitigate an impending insured loss. This is a valuable add-on for Marlborough and Central Otago growers who actively manage frost events.' },
      { q: 'Can I insure for both crop loss and quality downgrade?', a: 'Yes. Some specialist viticulture policies include quality downgrade cover, which compensates for the reduction in price received when damaged grapes are sold at a lower grade or as bulk wine rather than premium bottled product. This is particularly relevant for branded premium wine producers.' },
      { q: 'Is there insurance for wine grapes sold under long-term supply contracts?', a: 'Yes. If you have a grape supply contract with a winery that specifies volume and price, your policy can be structured to protect the contracted revenue rather than a market price estimate. This is advantageous for growers with stable, premium-priced contract arrangements.' },
      { q: 'How far in advance do I need to arrange viticulture insurance?', a: 'Ideally, contact your broker 6–8 weeks before the growing season begins (budburst is the key risk window opener). Frost cover commencement dates are critical — policies are not typically backdated, and insurers may decline to add frost cover once budburst has already occurred.' },
    ],
  },
  {
    slug: 'arable-farmers',
    name: 'Arable Farmers',
    shortName: 'Arable Farmers',
    description: 'Crop insurance for Canterbury, Southland and Marlborough arable farmers growing wheat, barley, oats, and maize.',
    longDescription: `Arable farming is the backbone of New Zealand's South Island agricultural economy. Canterbury and Southland arable farmers grow wheat, barley, oats, peas, and specialist seed crops under some of the most productive growing conditions in the Southern Hemisphere. Crop insurance helps arable farmers manage the financial risk of yield shortfalls due to adverse weather, enabling confident investment in inputs and equipment.`,
    heroImage: 'https://images.unsplash.com/photo-1501610071220-94a1f7d1ea68?w=1200&q=80',
    icon: '🚜',
    typicalCrops: ['Wheat', 'Barley', 'Oats', 'Peas & Beans', 'Maize (grain)', 'Oilseed Rape', 'Ryegrass Seed'],
    keyInsuranceNeeds: ['Yield guarantee', 'Revenue protection', 'Named perils cover', 'Input cost protection', 'Machinery breakdown', 'Farm vehicle cover'],
    coverageHighlights: ['Named perils crop cover', 'Multi-peril yield insurance', 'Standing crop fire cover', 'Farm machinery & vehicles', 'Rural property cover', 'Public liability'],
    longFormContent: `
<h2>Crop Insurance for NZ Arable Farmers</h2>
<p>New Zealand's arable sector is concentrated in the South Island — Canterbury, Marlborough, and Southland — where flat or gently rolling irrigated land produces world-class yields of wheat, barley, oats, peas, and specialist seed crops including ryegrass and clover seed. The Canterbury Plains in particular is regarded as one of the most productive arable regions in the Southern Hemisphere, with long growing seasons, reliable irrigation from alpine rivers, and deep, fertile soils. Despite these advantages, arable farmers face significant weather-related risks that can turn a profitable season into a loss-making one in a matter of hours.</p>

<h2>The Financial Risk Profile of Arable Farming</h2>
<p>Arable farming is a high-input, high-output business model. Before a crop is harvested, an arable farmer has committed significant capital in seed, fertiliser, crop protection chemicals, cultivation, planting, and irrigation. A Canterbury wheat crop might carry $800–$1,400 per hectare in direct input costs before harvest. A specialist seed crop such as fine fescue or browntop might carry $1,200–$2,000 per hectare. If that crop is damaged or destroyed by hail, drought, flooding, or disease, the farmer loses not just the potential revenue but the entire input cost invested in the crop.</p>
<p>Crop insurance for arable farmers addresses this risk in two main ways: by recovering input costs in a complete crop failure, and by providing revenue protection in partial loss years where yields are below the economically viable threshold. The ability to write off a failed crop as an insured loss — rather than absorbing the entire input cost — enables arable farmers to invest confidently in the following season rather than carrying a crippling accumulated loss.</p>

<h2>Key Weather Risks for Canterbury and Southland Arable Farmers</h2>
<h3>Hailstorm Damage</h3>
<p>Canterbury's nor'wester conditions create ideal convective storm conditions in spring and early summer. Hailstorms can devastate standing crops at critical growth stages: hail at wheat flowering (September–October) can destroy most of the primary panicles; hail in early January on ryegrass seed crops can strip seed heads just weeks before harvest. The damage from a single 30-minute hailstorm can range from a 10% reduction to total loss depending on the intensity and timing.</p>
<h3>Spring and Autumn Flooding</h3>
<p>Canterbury rivers fed by alpine snowmelt can flood unexpectedly in spring, waterlogging emerging crops. Autumn flooding — increasingly common with climate change — can prevent harvest of mature crops, leaving them to deteriorate in the paddock. Southland is particularly prone to autumn waterlogging from persistent rainfall, which can delay or prevent the harvest of peas and oilseed rape.</p>
<h3>Drought</h3>
<p>Droughts in Canterbury are increasingly frequent and severe. While irrigation reduces risk for farms with water rights, restrictions on consent volumes mean some farmers cannot fully irrigate during drought periods. Dryland arable farming in areas without irrigation access carries significant drought risk in warm, dry years.</p>
<h3>Fire</h3>
<p>Stubble fires and harvesting machinery fires are perennial risks for Canterbury arable farmers. Canterbury's hot, dry nor'west conditions in January–February create extreme fire risk during the grain harvest period. A standing crop fire can destroy an entire paddock within minutes.</p>

<h2>Types of Arable Crop Insurance Available in NZ</h2>
<h3>Named Perils — Standing Crop Cover</h3>
<p>The most common policy structure for NZ arable farmers. Covers the standing crop against named perils including hail, fire, flooding, and (in some policies) drought. The sum insured is typically set at the expected value of the crop at harvest — based on expected yield times the current or forward-contracted price. Replanting costs are often covered up to 80% of the sum insured if the crop needs to be resown within 40 days of planting.</p>
<h3>Multi-Peril Crop Insurance (MPCI)</h3>
<p>MPCI provides yield guarantee coverage regardless of the cause of loss. Rather than requiring a specific named peril to have caused the damage, MPCI pays when actual yield falls below a guaranteed percentage (typically 65–80%) of the historical average for that paddock and crop. MPCI is more expensive than named perils cover but is better suited to arable farmers in drought-prone areas or those who want comprehensive protection without needing to identify the specific cause of a yield shortfall.</p>
<h3>Revenue Protection</h3>
<p>Revenue protection policies guarantee a minimum revenue level (yield × price) rather than a minimum yield level. This is advantageous when both yield shortfalls and price declines are risks — as can happen when poor growing seasons across multiple regions depress market prices. Revenue protection is accessed through specialist brokers placing cover in international markets.</p>
<h3>Input Cost Protection</h3>
<p>A more affordable option for arable farmers on tight margins. Input cost protection covers only the direct input costs (seed, fertiliser, chemicals, fuel) in the event of a total crop failure. While it does not compensate for lost revenue, it prevents the accumulated debt trap of a bad season compounding into the following year.</p>

<h2>Harvested Crop Cover</h2>
<p>After harvest, grain in on-farm storage faces different risks — fire, contamination, building collapse. Harvested crop in an on-farm grain silo or shed can be insured against these risks, typically as an extension to the farm property policy rather than the standing crop policy. Some arable policies include harvested crop cover for 12 months after harvest, protecting grain in storage until it is sold or moved off-farm.</p>

<h2>Irrigation Infrastructure and Machinery</h2>
<p>Canterbury's pivot irrigators and centre-pivot systems represent significant capital investment — often $200,000–$600,000 per unit. Machinery breakdown cover is essential for irrigated arable operations, where an irrigation failure during a dry February can result in crop losses many times the cost of the breakdown. Arable farm machinery cover should also include combine harvesters, grain carting vehicles, and cultivation equipment.</p>
    `,
    faqs: [
      { q: 'Does arable crop insurance cover drought losses?', a: 'It depends on the policy. Named perils policies only cover drought if drought is explicitly listed as a covered peril — and most NZ named perils policies do not include drought as standard. Multi-peril crop insurance (MPCI) will cover yield losses due to drought as part of its broad yield guarantee. Revenue protection policies may also cover drought-related losses. Ask your broker which approach suits your operation.' },
{ q: 'Can I insure specialist seed crops?', a: 'Yes. Ryegrass seed, clover seed, fescue seed, and other specialist seed crops can be insured under tailored policies through specialist brokers. The sum insured is set at the certified seed price rather than the commodity price, reflecting the premium value of seed crops. Not all insurers write specialist seed crops — your broker will identify which markets are available.' },
      { q: 'What happens if the crop is partially damaged — do I still receive a payout?', a: 'Yes. Named perils policies pay for the proportion of the crop that is damaged or destroyed. An assessor attends the farm to quantify the loss. If 40% of a wheat crop is hail-damaged, the policy pays 40% of the sum insured (less any excess). Partial payments are common and are the most frequent type of claim in NZ arable insurance.' },
      { q: 'When should I arrange arable crop insurance each season?', a: 'For winter-sown crops (wheat, barley, oats), cover should be arranged at planting (May–July). For spring-sown crops (peas, maize, ryegrass seed), cover should be arranged at planting (September–November). It is essential to have cover in place before the crop emerges, as some insurers will not add cover to an emerged crop.' },
    ],
  },
  {
    slug: 'hop-growers',
    name: 'Hop Growers',
    shortName: 'Hop Growers',
    description: 'Specialist insurance for NZ hop growers in Nelson, Tasman and Marlborough.',
    longDescription: `New Zealand hops are celebrated worldwide for their unique aromatic profiles. The Nelson and Tasman regions are the heartland of NZ hop production, supplying craft breweries globally with varieties like Nelson Sauvin, Motueka, and Wakatu. Hops are a perennial crop with significant infrastructure investment in trellis systems. Insurance can protect both the standing crop and the trellis investment.`,
    heroImage: 'https://images.unsplash.com/photo-1662395896320-e51946c733af?w=1200&q=80',
    icon: '🍺',
    typicalCrops: ['Nelson Sauvin', 'Motueka', 'Wakatu', 'Green Bullet', 'Dr. Rudi', 'Wai-iti'],
    keyInsuranceNeeds: ['Hail cover', 'Trellis infrastructure', 'Frost at emergence', 'Wind damage', 'Disease cover', 'Business interruption'],
    coverageHighlights: ['Standing crop cover', 'Trellis & wire infrastructure', 'Named perils cover', 'Hail-specific cover', 'Machinery & drying equipment', 'Public & product liability'],
    longFormContent: `
<h2>Hop Crop Insurance in New Zealand</h2>
<p>New Zealand is a small but globally significant hop producer, with the Nelson-Tasman region responsible for virtually all domestic production. NZ hops are prized internationally for their unique aromatic qualities — particularly the tropical, passionfruit-forward character of Nelson Sauvin — and are exported to craft breweries in the United States, Europe, Japan, and Australia. The global craft brewing movement has significantly increased demand for premium NZ hop varieties, pushing per-kilogram prices to levels that make quality commercial hop growing highly profitable — but also highly exposed to weather risk.</p>

<h2>The Economics of Hop Farming</h2>
<p>Hops are a perennial crop with a unique financial profile. The initial establishment cost of a commercial hop garden — including the permanent trellis system (typically 6–7 metres tall wire and pole infrastructure), plant establishment, irrigation, and mechanised harvesting equipment — can easily exceed $100,000 per hectare. Established hop gardens take 3–5 years to reach full production. The trellis infrastructure alone represents a capital asset of $40,000–$80,000 per hectare that is entirely at risk from wind, snow loading, and other physical events. This makes infrastructure insurance as important as standing crop cover for hop growers.</p>
<p>At full production, commercial hop gardens can produce 1,500–2,500 kg/ha of dried hops, with premium NZ varieties commanding $15–$30/kg or more on export markets. A 20-hectare hop garden in full production could carry a standing crop value of $600,000–$1,500,000 in a single season — making crop insurance essential for any commercial operation.</p>

<h2>Key Weather Risks for NZ Hop Growers</h2>
<h3>Hailstorms</h3>
<p>Hail is the primary weather peril for hop growers. The Nelson-Tasman region experiences convective storm activity through the growing season (October–March), and hail events at critical growth stages can cause severe crop damage. Hail at late bine emergence (October–November) can strip emerging lateral shoots from the training wires, significantly reducing yield potential. Hail at cone formation (December–February) can damage developing cones, causing premature drying, shattering, and quality downgrade. Hail damage to hops is particularly problematic because it often creates conditions for downy mildew and botrytis infection in damaged tissue.</p>
<h3>Frost at Emergence</h3>
<p>Early spring frosts after bine emergence (typically September in the Nelson region) can cause significant damage to the first flush of growth. Unlike annual crops where frost damage is simply replaced by a new sowing, hop bines that are frost-damaged in spring may produce reduced yields for the current season and can suffer permanent crown damage that affects production in subsequent years.</p>
<h3>Wind and Storm Damage</h3>
<p>The Nelson-Tasman region experiences regular nor'wester conditions that can cause physical damage to hop bines on the trellis. More seriously, extreme storm events (including the Nelson floods of 2022) can cause structural damage to trellis systems, washing out poles, breaking wires, and collapsing entire rows. Storm damage to a trellis system may render the entire garden non-operational for one to two seasons while repairs are completed — making business interruption cover as important as property damage cover.</p>
<h3>Powdery and Downy Mildew</h3>
<p>Hop disease is not typically covered by standard named perils policies. However, seasons with warm, humid conditions promote mildew outbreaks that can significantly reduce yield and quality. Some specialist policies include limited disease cover, and business interruption cover can compensate for income loss in seasons where disease forces significant replanting or abandonment of crops.</p>

<h2>Hop Insurance Products Available in NZ</h2>
<h3>Standing Crop — Named Perils</h3>
<p>The core of any hop insurance programme. Covers the standing crop against hail, wind, frost, fire, and other named perils. The sum insured should reflect the expected value of the crop at the gate price — ideally using contracted prices if a forward supply contract is in place. For premium variety export contracts, this can be significantly higher than generic market prices.</p>
<h3>Trellis and Wire Infrastructure Cover</h3>
<p>Trellis infrastructure should be insured separately at full replacement cost. Standard farm property policies often undervalue trellis systems, particularly when they have been in place for many years and their current replacement cost exceeds the original installation cost. Have your trellis system valued by a specialist assessor and ensure your sum insured reflects current replacement costs, not historical installation costs.</p>
<h3>Drying and Processing Equipment</h3>
<p>Hop kilns and drying equipment are critical to the post-harvest process. A kiln breakdown during harvest can result in the entire season's hop crop being lost to spoilage. Machinery breakdown cover for hop processing equipment should form part of any comprehensive hop insurance programme.</p>
<h3>Business Interruption</h3>
<p>Given the long establishment period for hops and the potential for multi-season production losses following trellis damage or crown damage, business interruption cover is particularly valuable for hop growers. Indemnity periods of 2–3 years are appropriate for operations where storm damage might take multiple seasons to fully recover from.</p>

<h2>Working with a Specialist Broker</h2>
<p>Hop insurance is a specialist product. Not all NZ agricultural insurers have underwriting expertise in hop production, and policies from general rural insurers may not adequately reflect the specific risk profile of hop growing. Our broker network includes advisers with specific expertise in the Nelson-Tasman hop growing region who can access specialist markets and tailor coverage to the unique requirements of your operation.</p>
    `,
    faqs: [
      { q: 'Is trellis insurance included in a standard farm policy?', a: 'Sometimes, but often at inadequate levels. Standard farm property policies may include trellis as part of a general "farm improvements" category with a blanket limit that is insufficient to cover full replacement. We recommend having your trellis system assessed for replacement value and ensuring it is specifically scheduled in your policy at the correct value.' },
      { q: 'Can I insure hops under a supply contract at the contracted price?', a: 'Yes. If you have a forward supply contract specifying a price per kilogram, the policy can be structured to protect the contracted revenue rather than a generic market price. This is particularly advantageous for growers supplying premium craft breweries at above-market prices.' },
      { q: 'Does hop insurance cover downy mildew losses?', a: 'Standard named perils policies do not cover crop disease. Some specialist policies include limited disease cover with sub-limits, and business interruption cover can compensate for income losses in severe disease seasons. Discuss disease cover options with your broker.' },
      { q: 'What happens to my hop insurance if my trellis is damaged and the garden needs to be replanted?', a: 'If trellis damage forces replanting, the crop insurance pays for the standing crop loss, the property insurance covers trellis replacement, and business interruption cover compensates for the income lost during the 3–5 year re-establishment period. This is why having all three elements of cover in place is critical for hop growers.' },
      { q: 'Are there minimum garden sizes for hop insurance?', a: 'Most insurers prefer a minimum of 5–10 hectares for commercial hop insurance. Smaller hobby or trial plantings may need to be insured as part of a broader farm policy rather than a standalone crop policy. Contact your broker to discuss options for smaller operations.' },
    ],
  },
  {
    slug: 'vegetable-growers',
    name: 'Vegetable Growers',
    shortName: 'Vegetable Growers',
    description: 'Crop insurance for outdoor and covered vegetable growers supplying supermarkets, processors and fresh markets.',
    longDescription: `New Zealand vegetable growers supply supermarkets, food processors, and fresh markets with an enormous range of products from potatoes and onions to broccoli, squash, and salad greens. Contract growers face particular financial exposure if they fail to meet supply obligations due to weather events. Crop insurance provides the safety net that enables growers to confidently enter into supply contracts.`,
    heroImage: 'https://images.unsplash.com/photo-1746014929708-fcb859fd3185?w=1200&q=80',
    icon: '🌱',
    typicalCrops: ['Potatoes', 'Onions', 'Broccoli & Cauliflower', 'Squash', 'Leeks & Carrots', 'Lettuce & Salad Greens', 'Kumara'],
    keyInsuranceNeeds: ['Flood & excess moisture', 'Frost cover', 'Contract fulfillment', 'Irrigation failure', 'Storage loss', 'Machinery breakdown'],
    coverageHighlights: ['Named perils crop cover', 'Flood & drainage failure', 'Frost cover', 'Irrigation infrastructure', 'Packhouse & coolstore', 'Contract growing protection'],
    longFormContent: `
<h2>Crop Insurance for NZ Vegetable Growers</h2>
<p>New Zealand's vegetable growing sector is a diverse and economically significant industry, producing fresh and processed vegetables for domestic supermarkets, food processors, and export markets. Pukekohe (south Auckland) is the heartland of NZ vegetable growing, producing a year-round supply of potatoes, onions, kumara, brassicas, and salad crops. Hawke's Bay, Canterbury, and Southland are major regions for squash, processing peas and beans, and export onions. The sector faces a range of weather-related risks that vary significantly by crop type, growing region, and market channel.</p>

<h2>The Unique Risk Profile of Vegetable Growing</h2>
<p>Unlike many other crop types, vegetable growing carries a distinctive combination of risks that makes insurance planning complex. First, the crop cycle is typically short — most vegetable crops have a growing period of 60–150 days — meaning growers cycle through multiple crops per year, each with its own insurance requirement. Second, many vegetable growers operate under supply contracts with supermarket chains or food processors, creating an additional liability risk if they fail to deliver contracted volumes. Third, the fresh produce market is highly perishable — damage that reduces a crop from supermarket grade to processing grade may halve the per-kilogram return, creating a quality downgrade loss that is not always captured by traditional crop loss policies.</p>

<h2>Key Weather Risks for NZ Vegetable Growers</h2>
<h3>Flooding and Excess Moisture</h3>
<p>Flooding is the most frequently claimed weather peril for NZ vegetable growers. The Pukekohe area, despite its productive soils, is susceptible to flash flooding from Waikato tributary streams. Repeated cycles of wet weather in autumn and winter can make it impossible to get harvest machinery onto paddocks, leaving mature crops to deteriorate in the ground. Southland pea and bean growers face the same challenge in wet autumns. Flooding can also cause direct soil compaction damage that affects the following season's plantings.</p>
<h3>Frost Damage to Emerging Crops</h3>
<p>Spring frosts are a consistent risk for early-planted brassicas, salad crops, and potato crops. A frost event at crop emergence can require complete replanting — adding 3–6 weeks to the growing cycle and potentially causing the grower to miss a contracted harvest window. Late autumn frosts can damage mature crops in the paddock before harvest, reducing quality and marketability.</p>
<h3>Drought and Irrigation Failure</h3>
<p>Many vegetable crops have critical water requirements during specific growth stages — bulking, head formation, or tuber development. Insufficient irrigation at these stages can significantly reduce yield and quality. Irrigation infrastructure failures (pump breakdowns, mainline damage) can cause the same result as drought. Machinery breakdown cover for irrigation systems is an important component of any vegetable grower's insurance programme.</p>
<h3>Hailstorm Damage</h3>
<p>Hail events cause direct physical damage to leafy vegetables (brassicas, salad greens) and potatoes. Unlike orchards where hail nets are common, outdoor vegetable crops generally have no physical protection. A single hailstorm can render an entire paddock of broccoli or cauliflower unmarketable for supermarket channels, reducing it to processing grade at significantly lower prices.</p>

<h2>Types of Vegetable Crop Insurance</h2>
<h3>Named Perils Crop Cover</h3>
<p>The most common approach: covers the standing crop against listed perils including hail, frost, flood, and fire. The sum insured is set at the expected value of the harvested crop at the applicable market price (supermarket grade, processing grade, or export grade depending on your marketing channel). Premiums for most NZ vegetable crops range from 0.7% to 2.5% of sum insured, depending on region and crop type.</p>
<h3>Contract Supply Protection</h3>
<p>A specialist extension that covers the grower's liability to a supply contract purchaser if weather damage causes non-delivery. Rather than simply compensating for crop value, this cover also protects against penalties or additional costs incurred by the contract purchaser as a result of the shortfall. Contract supply protection is particularly valuable for growers supplying supermarket chains under fixed-volume contracts.</p>
<h3>Quality Downgrade Cover</h3>
<p>Covers the loss in value when crop damage reduces a product from premium grade to processing grade or below. This is relevant for brassicas, potatoes, and onions where the price difference between grades can be substantial. Quality downgrade cover is typically accessed through specialist brokers rather than standard agricultural policies.</p>
<h3>Packhouse and Coolstore Cover</h3>
<p>Processing and storage infrastructure — grading lines, washing equipment, coolstores, and packhouses — represents significant capital investment. These assets require specialist cover that reflects their replacement cost and the specific risks of their operation (refrigerant leakage, electrical failure, fire in a cold storage facility).</p>

<h2>Vegetable Growing Regions and Insurance Considerations</h2>
<p>Pukekohe growers face the highest flood risk of any NZ vegetable growing region, due to the combination of clay soils with limited drainage and the proximity of the Waikato River catchment. The Hawke's Bay growing regions face hail risk from November through February and drought risk in summer. Canterbury vegetable growers — particularly squash and processing vegetable producers — face flood risk in spring and drought risk in summer. Northland kumara growers face cyclone risk from December through March, including wind and flooding damage.</p>
    `,
    faqs: [
      { q: 'Can vegetable crop insurance cover multiple crops through the year?', a: 'Yes. Annual vegetable crop policies can cover a succession of crops through the year, rather than requiring separate policies for each planting. The policy is typically structured on a "season" basis, covering all crops grown on the specified property during the policy year, up to the maximum sum insured.' },
      { q: 'Does crop insurance cover the cost of replanting after a weather event?', a: 'Some policies include replanting cost cover, which compensates for the cost of seeds, establishment, and labour for replanting a destroyed crop. This is separate from the compensation for the lost standing crop and reflects the additional cost of setting up the next planting cycle after a weather event.' },
      { q: 'What is the excess on vegetable crop policies?', a: 'Excesses vary by insurer and policy type. Most standard named perils policies have a flat dollar excess (typically $1,000–$5,000) per event. Some policies use a percentage excess (e.g., 10% of the sum insured) for specific perils. Your broker can help you select an excess level that balances premium affordability with financial protection.' },
      { q: 'Does crop insurance cover losses from market price drops?', a: 'No. Standard crop insurance covers physical losses from weather events, not market price fluctuations. If you harvest a full crop but the market price has fallen significantly, that is not an insured event under any standard NZ crop policy. Revenue protection policies (available through specialist brokers) may provide some protection against combined yield-price risk.' },
      { q: 'Can I get crop insurance for covered (tunnel house) vegetable production?', a: 'Yes, but it is treated differently. Covered crops (grown under tunnels or glasshouses) have a different risk profile to outdoor crops — reduced weather exposure but additional risks from structure failure, wind, and snow loading. Structure insurance and crop insurance may need to be combined in a specialist policy for covered vegetable operations.' },
    ],
  },
  {
    slug: 'contract-growers',
    name: 'Contract & Seed Growers',
    shortName: 'Contract Growers',
    description: 'Insurance for NZ seed and contract growers protecting against crop failure and contract non-delivery penalties.',
    longDescription: `Contract and seed growers have a unique risk profile — they are often locked into supply contracts with processors, seed companies, or merchants that require delivery of specific volumes and quality. Failure to meet these contracts due to weather events can result in significant penalties or loss of future contracts. Specialist crop insurance can protect contract growers against these financial consequences.`,
    heroImage: 'https://images.unsplash.com/photo-1721026093614-1566b053cc6b?w=1200&q=80',
    icon: '📋',
    typicalCrops: ['Ryegrass & Fescue Seed', 'Clover Seed', 'Vegetable Seed', 'Cereal Seed', 'Peas & Beans', 'Brassica Seed'],
    keyInsuranceNeeds: ['Contract non-delivery', 'Yield shortfall', 'Quality downgrade', 'Named perils cover', 'Revenue protection', 'Input cost protection'],
    coverageHighlights: ['Contract fulfillment protection', 'Yield guarantee', 'Quality cover', 'Named perils crop cover', 'Revenue protection', 'Business interruption'],
    longFormContent: `
<h2>Insurance for NZ Contract and Seed Growers</h2>
<p>Contract growing and seed production occupy a specialist niche within New Zealand's agricultural sector. Canterbury is the world's foremost producer of certified grass and legume seed — ryegrass, fescue, bluegrass, clover, and lucerne seed — and the sector supplies seed to farmers across the globe. Additionally, many Canterbury, Southland, and Manawatū arable farmers grow crops under contract to food processors, maltsters, or merchant buyers who specify volumes, grades, and delivery schedules. For these growers, the financial risks of crop failure extend beyond the value of the lost crop to include contractual penalties, replacement cost obligations, and the potential loss of long-term supply relationships.</p>

<h2>What Makes Contract Growing Different from Standard Arable Farming?</h2>
<p>A conventional arable farmer who suffers a crop failure due to hail loses the value of that crop and the input costs invested in it. A contract grower who suffers the same hail event faces all of that, plus:</p>
<ul>
<li><strong>Contractual shortfall obligations</strong> — many supply contracts require the grower to source replacement product from the open market if they cannot deliver their contracted volume. If wheat prices have risen since the contract was signed, sourcing replacement at market price can create a significant financial liability.</li>
<li><strong>Penalty clauses</strong> — some contracts include financial penalties for non-delivery or late delivery. These penalties can equal 10–20% of the contract value or more.</li>
<li><strong>Quality downgrade clauses</strong> — delivery of product at a lower quality than contracted may result in price deductions or contract cancellation.</li>
<li><strong>Relationship risk</strong> — for growers who depend on long-term relationships with seed companies or processors, a failure to deliver can result in loss of future contracts, which may represent the majority of the farm's annual income.</li>
</ul>

<h2>Seed Crop Production: A Specialist Insurance Requirement</h2>
<p>Certified seed production is arguably the most exacting form of arable farming. Seed crops must meet strict purity standards (freedom from off-types, weeds, and other grass species), germination requirements, and moisture specifications. A seed crop that fails to achieve certification — due to contamination from adjacent paddocks, disease, or weather-related quality issues — cannot be sold as seed and reverts to commodity grain value, which may be 3–10 times lower than the certified seed price. Specialist seed crop insurance must therefore cover not just yield loss but also quality and certification failure.</p>
<p>Key seed crops grown in Canterbury under contract include: perennial ryegrass, Italian ryegrass, fescues (tall, hard, red, and chewings), bluegrass, cocksfoot, browntop bentgrass, white clover, red clover, subterranean clover, lucerne, and brassica seeds. Each of these crops has a distinct risk profile, growing season, and value — and insurance should be tailored accordingly.</p>

<h2>Types of Insurance for Contract and Seed Growers</h2>
<h3>Named Perils with Contract Protection Extension</h3>
<p>The most common approach: a standard named perils crop policy with an added contract protection extension. The named perils section covers the physical loss of crop from specified events. The contract protection extension covers the additional financial consequences of non-delivery — including the cost of replacement product purchase and any contractual penalty clauses. This is a specialist product not available from all insurers; your broker will need to identify which markets can provide this coverage.</p>
<h3>Revenue Protection Policies</h3>
<p>Revenue protection guarantees a minimum income from a contracted crop, regardless of whether yield failure, quality downgrade, or price movement is the cause. For seed growers, revenue protection can be structured around the certified seed price rather than the commodity grain fallback, providing more accurate protection for the premium price received for seed crops.</p>
<h3>Quality and Certification Failure Cover</h3>
<p>Specialist cover for the loss in value when a seed crop fails to achieve certification. This is a niche product accessed through Lloyd's of London or specialist Australian agricultural underwriters. It covers the difference between the certified seed price and the commodity price when certification is refused due to weather-related quality issues.</p>
<h3>Multi-Year Contract Insurance</h3>
<p>For growers with multi-year supply contracts, some policies can be structured to provide cover across multiple seasons — recognising that a weather event in one season may affect the grower's ability to maintain the long-term relationship with a seed company or processor.</p>

<h2>The Canterbury Seed Industry: Specific Considerations</h2>
<p>Canterbury's seed industry is a highly coordinated supply chain. Most seed growers work directly with Barenbrug, PGG Wrightson Seeds, DLF Seeds, or one of several other international seed companies that specify the variety, paddock, agronomic programme, and harvest window. The contract typically specifies a minimum yield and certification standard, with the seed company providing technical support and monitoring. Insurance that protects both the grower's investment and the contractual relationship with the seed company is essential for maintaining long-term participation in this industry.</p>
<p>Insurance policies for seed growers should consider the specific certification requirements of the seed company, the typical premium prices received (which can vary significantly year to year based on global seed market conditions), and the specific weather risks of the paddock and region. A specialist broker with knowledge of the Canterbury seed industry can structure coverage that genuinely reflects the economics of your operation.</p>

<h2>Claims Process for Contract Growers</h2>
<p>Contract growing insurance claims involve additional documentation compared to standard crop insurance. In addition to the weather event records, paddock assessment, and yield estimates required for any crop claim, contract growing claims typically require: a copy of the supply contract; evidence of the shortfall volume and grade; documentation of any penalty clauses triggered; invoices or evidence of the cost of replacement product sourcing (if applicable). Our broker network includes advisers experienced in contract growing claims who can guide you through this more complex process.</p>
    `,
    faqs: [
      { q: 'What happens if my seed crop fails certification — is this covered?', a: 'Standard named perils policies do not automatically cover certification failure. Quality and certification failure cover is a specialist extension that must be specifically included in the policy. It covers the difference between the certified seed price and the commodity fallback price when certification is refused. Not all insurers offer this cover — ask your broker about specialist markets that can provide it.' },
      { q: 'Can I insure my contractual penalty clause?', a: 'Yes. Contract protection extensions can cover contractual penalties for non-delivery, provided the non-delivery was caused by an insured event (such as hail, flood, or frost). Penalties caused by the grower\'s own negligence or failure to follow agronomic recommendations are generally not covered.' },
      { q: 'I grow several different seed varieties for different seed companies. Can I cover them all under one policy?', a: 'Yes. A single policy can cover multiple seed crops, paddocks, and contract arrangements, with each crop scheduled separately with its own sum insured reflecting the contracted price and expected yield. This is more efficient than maintaining separate policies for each contract.' },
      { q: 'What is the difference between revenue protection and named perils crop cover for seed growers?', a: 'Named perils cover pays when a specific listed event (hail, frost, etc.) causes crop damage. Revenue protection pays when actual revenue (yield × price) falls below a guaranteed percentage of historical average revenue, regardless of the cause. For seed growers, revenue protection provides broader protection against quality-related income loss, not just physical crop damage.' },
      { q: 'My seed contract has a market price clause — the contract price adjusts to market. Can I still insure it?', a: 'Yes. Policies can be structured to use the actual contracted price at the time of harvest rather than a fixed price agreed at planting. Discuss the pricing mechanism in your contract with your broker when setting up the policy so that the sum insured accurately reflects your expected revenue.' },
    ],
  },
];
