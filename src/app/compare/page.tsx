import type { Metadata } from 'next';
import Link from 'next/link';
import { providers } from '@/data/providers';
import HoldingPanel from '@/components/HoldingPanel';

export const metadata: Metadata = {
  title: 'NZ Crop Insurance Providers — Gallagher, Aon, Howden | CropInsurance.co.nz',
  description: 'Independent comparison of NZ crop insurance providers — Gallagher, Aon and Howden. Coverage types, strengths, and how to find the right specialist for your operation.',
  alternates: { canonical: 'https://www.cropinsurance.co.nz/compare/' },
};

function ScoreBar({ score, color = 'green' }: { score: number; color?: string }) {
  const barColor = color === 'amber' ? 'bg-amber-500' : color === 'blue' ? 'bg-blue-500' : 'bg-green-600';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-200 rounded-full h-2.5">
        <div className={`${barColor} h-2.5 rounded-full transition-all`} style={{ width: `${score}%` }} />
      </div>
      <span className="text-xs font-bold text-gray-700 w-8">{score}</span>
    </div>
  );
}

const tableRows = [
  { label: 'Named Perils Cover', values: ['✅', '✅', '✅'] },
  { label: 'Multi-Peril (MPCI)', values: ['✅', '✅', '❌'] },
  { label: 'Revenue Protection', values: ['✅', '✅', '❌'] },
  { label: 'Drought Cover', values: ['✅', '✅', '❌'] },
  { label: 'Parametric Products', values: ['✅', '✅', '❌'] },
  { label: 'NZ Adviser Network', values: ['✅✅', '✅✅', '✅'] },
  { label: 'International Capacity', values: ['✅', '✅', '✅'] },
  { label: 'Horticulture Specialist', values: ['✅', '✅', '❌'] },
  { label: 'Arable / Grain', values: ['✅', '✅', '✅'] },
  { label: 'Farm Package Cover', values: ['✅', '✅', '✅'] },
  { label: 'Best For', values: ['Large orchards', 'Vineyards', 'Large operations'] },
];

// Minimum review count to display a rating — suppress thin listings (e.g. one office of 30+)
const MIN_REVIEWS = 50

// ── Live Google rating fetch (ISR 30-day cache) ───────────────────────────
async function fetchGoogleRating(placeId: string | null): Promise<{ rating: number | null; reviewCount: number | null } | null> {
  if (!placeId) return null;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=rating,user_ratings_total&key=${apiKey}`,
      { next: { revalidate: 30 * 24 * 60 * 60 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status !== 'OK') return null;
    return {
      rating: (data.result?.rating as number) ?? null,
      reviewCount: (data.result?.user_ratings_total as number) ?? null,
    };
  } catch {
    return null;
  }
}

const compareSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Compare Crop Insurance Providers NZ',
  description: 'Compare NZ crop insurance providers side by side — Gallagher, Aon and Howden. Coverage, ratings, and what each insurer does best.',
  url: 'https://www.cropinsurance.co.nz/compare/',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cropinsurance.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'Compare Providers', item: 'https://www.cropinsurance.co.nz/compare/' },
    ],
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'NZ Crop Insurance Providers',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Gallagher NZ', url: 'https://www.ajg.co.nz' },
    { '@type': 'ListItem', position: 2, name: 'Aon New Zealand', url: 'https://www.aon.co.nz' },
    { '@type': 'ListItem', position: 3, name: 'Howden Group NZ', url: 'https://www.howdengroup.com/nz-en' },
  ],
};

export default async function ComparePage() {
  // Fetch live Google ratings (30-day ISR cache); falls back to providers.ts static values if no API key
  const liveRatings = await Promise.all(
    providers.map(async (p) => ({
      slug: p.slug,
      live: await fetchGoogleRating(p.placeId ?? null),
    }))
  );
  const ratingMap = Object.fromEntries(liveRatings.map((r) => [r.slug, r.live]));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(compareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {/* Hero */}
      <section
        className="relative min-h-[480px] flex items-end"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501610071220-94a1f7d1ea68?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 via-green-950/75 to-green-950/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32 w-full">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Compare Providers</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-green-400/20 border border-green-400/30 text-green-200 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Independent · Not insurer-owned
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight max-w-3xl">
            NZ Crop Insurance<br /><span className="text-green-400">Providers Compared</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-8">
            Independent information on Gallagher, Aon, and Howden — the main agribusiness brokers active in the NZ crop insurance market.
          </p>
          <Link href="/contact/" className="inline-block px-8 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors text-sm shadow-lg">
            Find a Specialist →
          </Link>
          <div className="flex flex-wrap gap-2 mt-8">
            {['NZ owned & operated', 'Independent, not owned by an insurer'].map(b => (
              <span key={b} className="inline-flex items-center px-4 py-2 bg-black/40 border border-white/40 text-white text-xs font-semibold rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Comparison Table — FIRST */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Side-by-Side Provider Comparison</h2>
            <p className="text-gray-500 text-sm mb-6">Specialist brokers work with all major providers — this table shows you what each can offer NZ crop growers.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="bg-gray-900 text-white px-5 py-4 text-left font-bold w-44">Feature</th>
                    {providers.map((p, i) => (
                      <th key={p.slug} className={`${i === 0 ? 'bg-green-800' : 'bg-green-700'} text-white px-4 py-4 text-center font-bold`}>
                        <div>{p.shortName}</div>
                        {i === 0 && <div className="text-xs font-normal text-green-200 mt-0.5">Most Popular</div>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, ri) => (
                    <tr key={row.label} className={`${ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-green-50 transition-colors`}>
                      <td className="px-5 py-3.5 font-semibold text-gray-700 border-r border-gray-200">{row.label}</td>
                      {row.values.map((v, vi) => (
                        <td key={vi} className="px-4 py-3.5 text-center">
                          {v === '✅' || v.startsWith('✅') ? (
                            <span className="text-green-600 font-bold">{v}</span>
                          ) : v === '❌' ? (
                            <span className="text-red-400 font-bold">❌</span>
                          ) : v === 'Limited' ? (
                            <span className="text-amber-600 font-medium text-xs">Limited</span>
                          ) : (
                            <span className="text-gray-600 text-xs">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table disclaimer */}
          <p className="text-xs text-gray-400 mt-3 mb-8 leading-relaxed">
            Whilst every effort is made to present the above information correctly, CropInsurance.co.nz cannot be held responsible for errors or omissions. Information is based on publicly available data and general market knowledge and is subject to change. If you are an insurer and would like to discuss any information displayed, please contact us at <a href="mailto:hello@cover4you.co.nz" className="underline hover:text-gray-600 transition-colors">hello@cover4you.co.nz</a>.
          </p>

          {/* Post-table CTA */}
          <div className="mb-14 bg-green-50 border-2 border-green-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900">Not sure which provider suits your operation?</h3>
              <p className="text-sm text-gray-600 mt-1">Use the IBANZ directory to find a licensed NZ agribusiness broker who can advise on your specific crop and risk profile.</p>
            </div>
            <a href="https://www.ibanz.co.nz/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-sm shadow whitespace-nowrap">
              Find a Broker (IBANZ) →
            </a>
          </div>

          {/* Provider Cards */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Each Provider</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
            {providers.map(p => {
              const live = ratingMap[p.slug];
              const displayRating = live?.rating ?? p.rating;
              const displayReviewCount = live?.reviewCount ?? p.reviewCount;
              const ratingAsAtDisplay = p.ratingAsAt ?? 'Aug 2026';
              const showRating = displayRating !== null && (displayReviewCount ?? 0) >= MIN_REVIEWS;
              return (
              <div key={p.slug} className="bg-white border-2 border-gray-200 hover:border-green-400 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
                      <span className="inline-block px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full mt-0.5">{p.speciality}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <a href={p.website} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-green-700 hover:underline">Visit site →</a>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.description}</p>

                {/* Google rating */}
                {showRating ? (
                  <div className="flex items-center gap-1.5 flex-wrap mb-4 pb-4 border-b border-gray-100">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(displayRating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <span className="text-xs text-gray-600">
                      {displayRating} · {displayReviewCount?.toLocaleString()} Google reviews · as at {ratingAsAtDisplay}
                    </span>
                    {p.googleMapsUri && (
                      <a href={p.googleMapsUri} target="_blank" rel="noopener noreferrer" className="text-xs text-[#4285F4] hover:underline">
                        Powered by Google
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <span className="text-xs text-gray-400 italic">No Google rating available</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Crop Products</h4>
                    <ul className="space-y-1.5">
                      {p.cropProducts.slice(0, 4).map(prod => (
                        <li key={prod} className="text-xs text-gray-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />{prod}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Key Strengths</h4>
                    <ul className="space-y-1.5">
                      {p.strengths.slice(0, 4).map(s => (
                        <li key={s} className="text-xs text-gray-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
              );
            })}
          </div>

          <p className="text-xs text-slate-400 text-center max-w-3xl mx-auto mb-14 leading-relaxed">
            Provider information is based on publicly available data and is provided for general reference only. CropInsurance.co.nz is not affiliated with any provider listed. Contact us at <a href="mailto:hello@cover4you.co.nz" className="underline hover:text-gray-600 transition-colors">hello@cover4you.co.nz</a> if you believe any information requires correction.
            {' '}★ Google ratings sourced live from Google Places API and refreshed monthly. Ratings are shown only where a substantive NZ Google listing exists with 50 or more reviews.{' '}
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#4285F4] hover:underline">Powered by Google</a>
          </p>

          {/* Market access block */}
          <div className="bg-gray-900 rounded-3xl p-10 mb-14">
            <h2 className="text-3xl font-extrabold text-white mb-4">Market access</h2>
            <p className="text-gray-300 max-w-3xl leading-relaxed mb-8">
              Crop cover in New Zealand is written by a small number of domestic insurers, agribusiness brokers holding rural agencies, and specialist international underwriters including Lloyd&apos;s syndicates. Which markets are open to you depends on crop type, scale and loss history.
            </p>
            <p className="text-gray-300 max-w-3xl leading-relaxed mb-8">
              A broker with horticultural experience can reach markets you can&apos;t approach directly. Some insurers also deal with growers direct — their sites are listed in the table above.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '🏦', title: 'Domestic insurers', desc: 'NZ-based rural and farm insurers writing named perils policies.' },
                { icon: '🤝', title: 'Agribusiness brokers', desc: 'Hold direct agency relationships with rural insurers and access specialist markets.' },
                { icon: '🌐', title: "Lloyd's & international", desc: 'International capacity for MPCI, parametric, and large complex risks.' },
              ].map(f => (
                <div key={f.title} className="bg-gray-800 rounded-2xl p-5">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Find a specialist section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Find a Crop Insurance Specialist</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Crop insurance is a specialist area. Use the options on the right to find a licensed broker via IBANZ, check the FSP register, or go direct to an insurer.</p>
              <ul className="space-y-3">
                {[
                  'IBANZ lists licensed NZ insurance brokers',
                  'FSP register shows authorised advisers and their scope',
                  'Some insurers can be contacted directly for rural cover',
                  'This site is NZ owned and independent',
                ].map(b => (
                  <li key={b} className="flex items-center gap-3 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="rounded-2xl p-1.5 bg-gradient-to-br from-green-400 to-green-600 shadow-2xl">
                <HoldingPanel />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
