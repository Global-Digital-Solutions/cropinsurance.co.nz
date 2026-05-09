export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: number;
  category: string;
  heroImage: string;
  author: { name: string; role: string; avatar: string };
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'nz-crop-insurance-guide-2026',
    title: 'NZ Crop Insurance Guide 2026: What Every Grower Needs to Know',
    excerpt: 'A comprehensive overview of crop insurance options in New Zealand — from named perils cover to multi-peril revenue protection — and how to choose the right policy for your operation.',
    publishDate: '2026-04-10',
    readTime: 9,
    category: 'Insurance Guides',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    author: { name: 'James Harrington', role: 'Agricultural Insurance Adviser', avatar: '' },
    tags: ['crop insurance', 'NZ growers', 'guide', 'named perils', 'multi-peril'],
    content: `## What Is Crop Insurance?

Crop insurance protects growers against financial loss from crop damage or failure due to specified events. In New Zealand, two main types are available:

**Named Perils Insurance** covers specific, listed events such as hail, frost, fire, and wind. This is the most common form of crop insurance in NZ and is available from FMG, AJG, Aon, and specialist brokers. Premiums are generally lower than multi-peril cover, and the policy clearly defines what is and isn't covered.

**Multi-Peril Crop Insurance (MPCI)** provides broader protection, guaranteeing a minimum yield or revenue regardless of the cause of loss. MPCI is more common in the United States and Australia but is increasingly available in NZ through specialist brokers accessing international markets.

## Who Needs Crop Insurance in NZ?

Any grower who would suffer significant financial hardship from a crop failure should consider crop insurance. This particularly includes:

- **Orchardists** with large capital investments in orchard infrastructure and perennial crops
- **Viticulture growers** exposed to frost and hail during the growing season
- **Arable farmers** with significant input costs who need income certainty
- **Contract growers** who face penalty clauses if they fail to deliver contracted volumes
- **Horticulture growers** with high-value per-hectare crops

## Key Things to Look For in a Policy

When comparing crop insurance policies, pay attention to:

1. **Sum insured basis** — is the policy based on expected yield value, market value, or input costs?
2. **Exclusions** — what perils are excluded? Pre-existing disease? Gradual deterioration?
3. **Waiting periods** — is there a waiting period before cover commences after taking out a new policy?
4. **Claims process** — how quickly will an assessor attend after a weather event?
5. **Sub-limits** — are there caps on individual peril claims?

## How Much Does Crop Insurance Cost in NZ?

Premiums vary significantly based on crop type, region, coverage level, and claims history. As a rough guide:

| Crop Type | Typical Annual Premium |
|-----------|----------------------|
| Kiwifruit (commercial orchard) | $2,500 – $18,000 |
| Apples / Pears | $1,800 – $14,000 |
| Grapes / Vineyard | $2,000 – $20,000 |
| Wheat / Barley | $800 – $8,000 |
| Stone Fruit | $1,500 – $12,000 |
| Vegetables | $700 – $9,000 |

The best way to get an accurate premium is to request quotes through a specialist crop insurance broker who can approach multiple insurers on your behalf.

## Getting Started

Using a broker like our partner network at CropInsurance.co.nz gives you access to multiple insurers — including FMG, AJG, Aon, and specialist markets — through a single conversation. Our advisers understand NZ growing conditions and can recommend the right coverage level for your operation.`,
  },
  {
    slug: 'kiwifruit-insurance-psa-weather',
    title: 'Kiwifruit Insurance: Protecting Your Orchard from PSA and Weather Events',
    excerpt: 'PSA devastated NZ kiwifruit orchards a decade ago. Here\'s how insurance can protect against disease, hail, frost, and weather events for today\'s kiwifruit growers.',
    publishDate: '2026-03-28',
    readTime: 7,
    category: 'Crop Guides',
    heroImage: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=1200&q=80',
    author: { name: 'Sarah Tainui', role: 'Horticulture Insurance Specialist', avatar: '' },
    tags: ['kiwifruit', 'PSA', 'Bay of Plenty', 'horticulture insurance', 'orchard insurance'],
    content: `## The Kiwifruit Industry and Its Risks

New Zealand is the world's third-largest kiwifruit producer, with the Bay of Plenty region at the heart of a $3+ billion export industry. The industry has come a long way since PSA (Pseudomonas syringae pv. actinidiae) devastated orchards in 2010–2013, but growers today face an evolving range of risks.

## PSA Disease Coverage

PSA cover is one of the most frequently asked-about topics in kiwifruit insurance. The challenge is that PSA is a biological disease, and most standard named perils policies exclude disease. However, several options exist:

- **Business interruption cover** — if a PSA outbreak forces a significant reduction in your orchard's productivity, business interruption cover can compensate for lost revenue during the recovery period
- **Re-establishment costs** — some policies will cover the cost of vine removal, soil treatment, and replanting following a PSA-forced removal
- **Specialist disease cover** — available from select international markets accessed through brokers like AJG and Aon, though typically with significant sub-limits

## Weather Events: The Bigger Annual Risk

While PSA grabs headlines, weather remains the most consistent threat to kiwifruit orchards:

**Hailstorms** at flowering (typically September–October) or during vine growth can damage emerging shoots and fruit. Hail nets provide physical protection, but the nets themselves can be damaged and the installation cost (typically $30,000–$80,000/ha) should also be insured.

**Late frosts** in the Bay of Plenty are infrequent but catastrophic when they occur. Frost at flowering can destroy 80–100% of a crop.

**Cyclone & wind events** — Cyclone Gabrielle in 2023 caused significant damage to Bay of Plenty orchards, highlighting the importance of storm cover.

## What a Good Kiwifruit Policy Looks Like

A comprehensive kiwifruit orchard insurance programme typically includes:

1. **Standing crop cover** — hail, frost, wind, fire
2. **Orchard infrastructure** — hail nets, irrigation, packing shed
3. **Business interruption** — loss of income during recovery
4. **Post-harvest quality cover** — losses from storage or handling failures
5. **Liability** — public and product liability

## Getting a Quote

Given the complexity of kiwifruit insurance, we strongly recommend working with a specialist broker. Use our enquiry form to connect with an adviser who works specifically in the Bay of Plenty and horticulture sector.`,
  },
  {
    slug: 'vineyard-frost-insurance-nz',
    title: 'Vineyard Insurance: What\'s Covered When Frost Hits Your Grapes?',
    excerpt: 'Frost at budburst can destroy an entire vintage in a single night. Here\'s how NZ viticulture insurance protects Marlborough and Hawke\'s Bay vine growers.',
    publishDate: '2026-03-15',
    readTime: 6,
    category: 'Crop Guides',
    heroImage: 'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=1200&q=80',
    author: { name: 'James Harrington', role: 'Agricultural Insurance Adviser', avatar: '' },
    tags: ['vineyard insurance', 'frost', 'Marlborough', "Hawke's Bay", 'viticulture'],
    content: `## Why Frost Is the Biggest Single Risk for NZ Vine Growers

A severe frost event during budburst — typically August to October in NZ — can destroy 90%+ of a vineyard's annual crop in a single night. Marlborough, Hawke's Bay, and Martinborough all experience frost events capable of causing millions of dollars in crop losses across a region in a single event.

## How Vineyard Frost Insurance Works

Vineyard frost insurance operates on a named perils basis: the policy pays out when frost (defined as temperatures below a specified threshold, typically 0°C or -2°C at canopy level) occurs during the defined frost risk period and causes measurable crop loss.

Key features to look for:

- **Temperature threshold** — at what temperature does the policy trigger? Lower thresholds (e.g., -2°C) mean fewer triggers but more severe events are covered
- **Measurement methodology** — how is temperature measured? Grower's own on-site sensor, regional weather station, or independent assessment?
- **Loss assessment** — who assesses the crop loss? An independent loss adjuster's prompt attendance is critical
- **Season-end clause** — does the policy pay on the total seasonal shortfall or event-by-event?

## Parametric Vineyard Insurance

An emerging alternative to traditional indemnity insurance is parametric cover, available through specialist brokers like AJG. Parametric frost cover pays a predetermined amount when temperatures fall below a trigger threshold — no loss assessment needed. This provides faster claims payment and reduces the cost of loss adjustment.

## Other Key Vineyard Perils

Beyond frost, a comprehensive vineyard policy should cover:

- **Hail** at berry development (typically November–February)
- **Wind** damage to trellis wires and canopy
- **Smoke taint** from wildfire events
- **Disease** (some specialist covers available)
- **Winery infrastructure** — tanks, barrels, equipment

## Cost of Vineyard Insurance in NZ

Vineyard insurance premiums vary significantly based on variety, region, and frost risk. A Marlborough Sauvignon Blanc vineyard in a known frost hollow will pay a higher premium than a sheltered Hawke's Bay site. Expect annual premiums of $2,000–$20,000 depending on the size and risk profile of your operation.`,
  },
  {
    slug: 'named-perils-vs-multi-peril-crop-insurance',
    title: 'Named Perils vs. Multi-Peril Crop Insurance: Which Is Right for You?',
    excerpt: 'The two main types of crop insurance in NZ explained — and a framework to help you decide which gives you the best protection for your operation.',
    publishDate: '2026-03-01',
    readTime: 8,
    category: 'Insurance Guides',
    heroImage: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&q=80',
    author: { name: 'Rachel Whitmore', role: 'Rural Insurance Broker', avatar: '' },
    tags: ['named perils', 'multi-peril', 'MPCI', 'crop insurance comparison', 'NZ farming'],
    content: `## The Two Main Types of Crop Insurance

New Zealand growers have access to two fundamentally different types of crop insurance, and choosing between them is one of the most important decisions in structuring your risk management programme.

## Named Perils Insurance

Named perils insurance covers specific events that are explicitly listed in the policy. Common named perils for NZ crops include:

- Hail
- Frost
- Fire
- Wind / Windstorm
- Flood / Excess Moisture
- Lightning
- Snow/Ice

**Advantages:** Lower premiums. Clear, easy-to-understand coverage. Widely available from NZ insurers including FMG.

**Disadvantages:** If your crop fails for a reason not on the list — drought, pest, disease — you're not covered. Can feel inadequate after a "grey area" event.

## Multi-Peril Crop Insurance (MPCI)

MPCI provides an all-risks guarantee: you are covered for crop loss from any natural cause, subject to defined exclusions. The policy typically guarantees a minimum yield or revenue (e.g., 70% of your historic average yield).

**Advantages:** Comprehensive protection. Covers drought, which is excluded from most named perils policies. Provides income certainty for planning.

**Disadvantages:** Higher premiums. Less widely available in NZ — typically requires access to international markets via specialist brokers. More complex claims process.

## How to Choose

Consider MPCI if:
- You grow high-value crops with large input costs
- Drought is a significant risk in your region (Hawke's Bay, Canterbury)
- You have supply contracts with significant penalty clauses
- Your operation is large enough to justify the higher premium

Consider Named Perils if:
- Your main risk is a specific weather event (e.g., hail for orchards)
- Premium cost is a primary consideration
- You want a simple, straightforward policy

## Getting the Right Advice

The best approach is to have a frank conversation with a specialist crop insurance broker who can present both options with comparative pricing. Our broker network can access both named perils policies from NZ insurers and MPCI products from specialist international markets.`,
  },
  {
    slug: 'hailstorm-insurance-nz-orchards',
    title: 'Hailstorm Insurance for NZ Orchards: The Complete Guide',
    excerpt: 'Hail is the single biggest insured risk for NZ orchardists. Here\'s everything you need to know about hail cover for kiwifruit, apples, cherries and other horticultural crops.',
    publishDate: '2026-02-20',
    readTime: 7,
    category: 'Weather & Risk',
    heroImage: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=1200&q=80',
    author: { name: 'Sarah Tainui', role: 'Horticulture Insurance Specialist', avatar: '' },
    tags: ['hail insurance', 'orchard', 'kiwifruit', 'apples', 'horticulture'],
    content: `## Why Hail Is the #1 Insured Risk for NZ Orchardists

Hailstorm damage is the single most commonly claimed weather event across NZ's horticultural insurance sector. A hailstone the size of a marble can leave permanent surface scarring on kiwifruit, apples, or stone fruit that renders the crop unfit for premium fresh market export — even if the fruit itself is otherwise healthy.

## How Hail Damage Affects Different Crops

**Kiwifruit:** Hail scars on the skin affect export grade. Hail at flowering can shred petals and prevent fruit set. Major hail events can cause 40–80% crop loss.

**Apples & Pears:** Surface scarring from hail stones is the primary damage mechanism. Class 1 export-grade fruit must be essentially blemish-free. Hail-damaged fruit is downgraded to juice or processing grade at a significant price discount.

**Grapes:** Hail at berry development can puncture skins, leading to botrytis infection and complete loss of affected bunches. A single hail event can destroy an entire vintage.

**Stone Fruit:** Cherries are particularly vulnerable — hail scarring and subsequent infection can render an entire harvest unmarketable.

## Hail Cover vs. Hail Nets: Do You Need Both?

Hail netting systems are now standard in many of NZ's premium apple and kiwifruit orchards. However, hail nets and hail insurance are complementary — not alternative — risk management tools:

- Hail nets protect the fruit but can be damaged themselves (and are extremely expensive to repair/replace)
- Hail nets don't protect flowering crops, understorey, or infrastructure
- Insurance covers what nets can't — including net replacement costs

## What to Look For in a Hail Policy

1. **Assessment methodology** — how quickly will a loss adjuster attend? Look for 48-hour response commitments
2. **Grading standards** — does the policy pay based on your specific export market grading standards?
3. **Partial loss provisions** — how are partial crop losses assessed and settled?
4. **Net coverage** — is your hail netting infrastructure included in the sum insured?

## Timing Your Cover

Hail insurance must be in place before a hail event occurs — this seems obvious, but many growers leave renewal too late. Most insurers want policies in place by late July/August for the coming NZ growing season.`,
  },
  {
    slug: 'climate-change-nz-crop-insurance-premiums',
    title: 'How Climate Change Is Affecting NZ Crop Insurance Premiums',
    excerpt: 'Cyclone Gabrielle, unprecedented frosts, and shifting rainfall patterns — how climate change is reshaping the NZ crop insurance landscape and what growers can expect to pay.',
    publishDate: '2026-02-05',
    readTime: 6,
    category: 'Industry Insights',
    heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    author: { name: 'Rachel Whitmore', role: 'Rural Insurance Broker', avatar: '' },
    tags: ['climate change', 'premiums', 'weather risk', 'NZ agriculture', 'Cyclone Gabrielle'],
    content: `## The Changing Face of Weather Risk in NZ Agriculture

New Zealand's agricultural sector is experiencing an intensification of weather-related risks that is directly impacting crop insurance markets. Cyclone Gabrielle in February 2023 caused an estimated $14 billion in damage across Hawke's Bay and Tairāwhiti, including catastrophic losses for horticultural growers. This single event was a watershed moment for NZ crop insurers.

## Premium Trends for NZ Crop Growers

Following Cyclone Gabrielle and a string of significant weather events, NZ crop insurance premiums have increased materially in affected regions:

- Hawke's Bay horticultural premiums increased 20–40% for the 2023–24 season
- Flood-exposed areas in Tairāwhiti saw some cover withdrawn temporarily
- Kiwifruit growers in low-lying Bay of Plenty orchards faced tighter terms

However, the picture is not uniformly negative. Insurers are investing in better risk modelling, and growers who invest in risk mitigation (drainage improvement, windbreaks, frost protection systems) can negotiate better terms.

## What Growers Can Do

1. **Invest in risk mitigation** — insurers reward demonstrable risk reduction (drainage, hail nets, frost protection) with better terms
2. **Shop the market** — not all insurers are repricing the same crops equally. Use a broker to access multiple markets
3. **Consider parametric products** — parametric weather insurance is less affected by claims history and can offer more stable pricing
4. **Review your sum insured** — rising input costs and land values may mean your sum insured is inadequate even if premium rates hold steady

## The Broker Advantage

In a hardening insurance market, an experienced rural insurance broker becomes even more valuable. Brokers with strong insurer relationships can advocate on your behalf, access markets not available direct, and structure covers that balance protection and cost.`,
  },
  {
    slug: 'crop-insurance-small-scale-growers-nz',
    title: 'Crop Insurance for Small-Scale Growers: Is It Worth It?',
    excerpt: 'You don\'t need to be running a commercial orchard to benefit from crop insurance. Here\'s how smaller NZ growers can get cost-effective cover.',
    publishDate: '2026-01-22',
    readTime: 5,
    category: 'Insurance Guides',
    heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
    author: { name: 'James Harrington', role: 'Agricultural Insurance Adviser', avatar: '' },
    tags: ['small growers', 'lifestyle block', 'market garden', 'affordable crop insurance'],
    content: `## Do Small Growers Need Crop Insurance?

The short answer: it depends on how much financial impact a crop failure would have on you. A lifestyle block grower selling at a farmers' market might absorb a bad season. A small commercial vegetable grower with a supermarket contract cannot.

## When It Makes Financial Sense

Crop insurance makes sense for smaller operations when:

- You have supply contracts with minimum delivery obligations
- Your crop income represents a significant portion of your household income
- Your growing season input costs are substantial
- You're in a high-risk area for hail or frost

## Options for Smaller Operations

**FMG** will consider smaller horticultural operations and offers competitive terms for lifestyle blocks and small orchards with commercial intent.

**Farmcover** specialises in competitive premiums for smaller farms and can arrange basic named perils cover for market gardens and small orchards.

**Package policies** — rural property and contents policies from rural insurers sometimes include limited crop cover as part of a broader farm package, which can be cost-effective for smaller operations.

## The Minimum Worth Insuring

As a rule of thumb, crop insurance becomes cost-effective when your annual crop revenue exceeds $30,000–$50,000 or when you have contractual obligations that would create losses if you fail to deliver.

## Getting the Right Advice

Our broker network works with growers at all scales. Use our quote form to describe your operation and get tailored advice on whether crop insurance is right for you — and what it would cost.`,
  },
  {
    slug: 'how-to-make-crop-insurance-claim-nz',
    title: 'How to Make a Crop Insurance Claim After a Weather Event',
    excerpt: 'Step-by-step guide to making a crop insurance claim in New Zealand — from initial notification to settlement.',
    publishDate: '2026-01-10',
    readTime: 6,
    category: 'Claims & Advice',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    author: { name: 'Rachel Whitmore', role: 'Rural Insurance Broker', avatar: '' },
    tags: ['claims', 'claim process', 'crop insurance', 'weather event', 'NZ'],
    content: `## Acting Quickly Is Critical

After a hailstorm, frost, or other weather event damages your crop, time is of the essence. Insurers typically require notification within 24–48 hours, and prompt action helps ensure an accurate assessment before evidence deteriorates.

## Step 1: Notify Your Broker or Insurer Immediately

As soon as you identify crop damage that may be covered by your policy, call your broker or insurer. Don't wait to assess the full extent of damage — early notification protects your claim rights.

## Step 2: Document Everything

Before touching or harvesting the damaged crop:

- Photograph damage thoroughly (close-up and wide-angle)
- Record date, time, and weather conditions
- Note the estimated area affected
- Keep any weather bureau or news reports of the event

## Step 3: Do Not Harvest or Remediate Without Permission

Insurers require the opportunity to inspect the damage before harvest or remediation. Harvesting damaged fruit early or applying remedial treatments without insurer approval can jeopardise your claim.

## Step 4: Loss Adjuster Assessment

A loss adjuster (usually an independent specialist) will be assigned to assess your claim. For horticultural crops, this typically involves:

- Physical inspection of affected areas
- Comparison with reference samples
- Review of historical yield records
- Assessment against policy triggers and thresholds

## Step 5: Settlement

Once assessment is complete, the insurer will provide a settlement offer. Review this carefully — if you disagree with the assessment, you have the right to request a review or appoint your own independent assessor.

## Tips for a Smooth Claim

1. Keep detailed crop records (yield history, spray diaries, harvest records)
2. Know your policy excess and how it applies
3. Understand your policy basis (first loss, proportional, etc.)
4. Your broker should advocate for you throughout the process — if they're not, find a better broker`,
  },
  {
    slug: 'comparing-nz-crop-insurance-providers',
    title: 'FMG vs. Aon vs. AJG: Comparing NZ Crop Insurance Providers',
    excerpt: 'An independent comparison of the main crop insurance providers in New Zealand — coverage, service, and value for NZ growers.',
    publishDate: '2025-12-20',
    readTime: 8,
    category: 'Provider Reviews',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    author: { name: 'James Harrington', role: 'Agricultural Insurance Adviser', avatar: '' },
    tags: ['FMG', 'Aon', 'AJG', 'Gallagher', 'compare', 'crop insurance review'],
    content: `## Overview

New Zealand growers have access to several specialist crop insurance providers. The three dominant players are FMG (Farmers Mutual Group), Aon NZ, and AJG (Arthur J. Gallagher), each with distinct strengths and target markets.

## FMG – Farmers Mutual Group

**Best for:** NZ farmers wanting a farmer-owned insurer with nationwide rural adviser support

FMG is New Zealand's largest rural insurer and has been supporting NZ farmers for over 100 years. As a mutual, FMG's profits are retained to benefit policyholders rather than paid to external shareholders. FMG employs over 100 rural advisers throughout New Zealand, providing genuine face-to-face service in farming communities.

**Strengths:** Unmatched NZ rural expertise, nationwide adviser network, strong claims reputation, farmer-owned ethos
**Potential limitations:** Primarily NZ market capacity (no London/international market access for complex risks)

## AJG – Arthur J. Gallagher

**Best for:** Larger commercial growers needing international market capacity or complex risk structures

AJG is a global insurance broker with specialist agribusiness teams. For large-scale NZ operations — major kiwifruit orchards, large vineyards, contract vegetable growers — AJG can access London and international insurance markets that NZ domestic insurers cannot. This means broader coverage, higher limits, and access to parametric products.

**Strengths:** Global market access, specialist agribusiness brokers, parametric products, large risk capacity
**Potential limitations:** Less grassroots NZ farming focus, better suited to larger operations

## Aon NZ

**Best for:** Growers who value data-driven risk analytics and global broker expertise

Aon combines global risk analytics capability with a dedicated NZ agribusiness practice. Aon is particularly strong in vineyard and viticulture insurance and brings sophisticated risk modelling tools to help growers understand and quantify their exposure.

**Strengths:** Risk analytics, viticulture expertise, global capacity
**Potential limitations:** Premium pricing reflects global broker overhead

## Farmcover

**Best for:** Smaller farms and lifestyle blocks wanting competitive premiums

Farmcover offers straightforward, competitive crop and farm insurance with a focus on smaller NZ farming operations. Less complexity means lower overhead and competitive pricing.

## Our Recommendation

There is no single "best" crop insurer — the right choice depends on your scale, crop type, and risk appetite. Our broker network can approach multiple insurers simultaneously and present you with comparative quotes. Use our quote form to get started.`,
  },
];
