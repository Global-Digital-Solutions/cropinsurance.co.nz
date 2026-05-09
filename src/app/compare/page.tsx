import type { Metadata } from 'next';
import Link from 'next/link';
import { providers } from '@/data/providers';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Compare Crop Insurance Providers NZ | FMG vs Gallagher vs Aon | CropInsurance.co.nz',
  description: 'Compare NZ crop insurance providers side by side — FMG, Gallagher, Aon, Farmcover and Howden. Coverage, ratings, and what each insurer does best.',
  alternates: { canonical: 'https://cropinsurance.co.nz/compare/' },
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
  { label: 'Named Perils Cover', values: ['✅', '✅', '✅', '✅', '✅'] },
  { label: 'Multi-Peril (MPCI)', values: ['✅', '✅', '✅', '❌', '❌'] },
  { label: 'Revenue Protection', values: ['✅', '✅', '✅', '❌', '❌'] },
  { label: 'Drought Cover', values: ['Limited', '✅', '✅', '❌', '❌'] },
  { label: 'Parametric Products', values: ['❌', '✅', '✅', '❌', '❌'] },
  { label: 'NZ Adviser Network', values: ['✅✅✅', '✅✅', '✅✅', '✅', '✅'] },
  { label: 'International Capacity', values: ['Limited', '✅', '✅', '❌', '✅'] },
  { label: 'Horticulture Specialist', values: ['✅', '✅', '✅', '✅', '❌'] },
  { label: 'Arable / Grain', values: ['✅', '✅', '✅', '✅', '✅'] },
  { label: 'Farm Package Cover', values: ['✅', '✅', '✅', '✅', '✅'] },
  { label: 'Best For', values: ['All NZ farms', 'Large orchards', 'Vineyards', 'Small farms', 'Large operations'] },
];

const compareSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Compare Crop Insurance Providers NZ',
  description: 'Compare NZ crop insurance providers side by side — FMG, Gallagher, Aon, Farmcover and Howden. Coverage, ratings, and what each insurer does best.',
  url: 'https://cropinsurance.co.nz/compare/',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cropinsurance.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'Compare Providers', item: 'https://cropinsurance.co.nz/compare/' },
    ],
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'NZ Crop Insurance Providers',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'FMG – Farmers Mutual Group', url: 'https://www.fmg.co.nz' },
    { '@type': 'ListItem', position: 2, name: 'Gallagher NZ', url: 'https://www.gallagher.co.nz' },
    { '@type': 'ListItem', position: 3, name: 'Aon New Zealand', url: 'https://www.aon.co.nz' },
    { '@type': 'ListItem', position: 4, name: 'Farmcover NZ', url: 'https://www.farmcover.co.nz' },
    { '@type': 'ListItem', position: 5, name: 'Howden Group NZ', url: 'https://www.howdengroup.com/nz' },
  ],
};

export default function ComparePage() {
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
            Independent · Free · No Obligation
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight max-w-3xl">
            Compare NZ Crop Insurance<br /><span className="text-green-400">Providers Side by Side</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-8">
            We do the hard work — comparing FMG, Gallagher, Aon, Farmcover and Howden so you get the right cover at the right price.
          </p>
          <Link href="/contact/" className="inline-block px-8 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors text-sm shadow-lg">
            Get My Free Comparison →
          </Link>
          <div className="flex flex-wrap gap-3 mt-8">
            {['✅ ICNZ Fair Insurance Code', '🔒 Licensed NZ Brokers', '💰 Free to Growers', '⚡ Compare in 1 Day', '🔍 5+ Insurers Compared'].map(b => (
              <span key={b} className="inline-flex items-center px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold rounded-full shadow-sm">
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
            <p className="text-gray-500 text-sm mb-6">Our specialist brokers work with all five major providers — this table shows you what each can offer NZ crop growers.</p>
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
            Whilst every effort is made to present the above information correctly, CropInsurance.co.nz cannot be held responsible for errors or omissions. Information is based on publicly available data and our brokers&apos; market experience and is subject to change. If you are an insurer and would like to discuss any information displayed, please contact us at <a href="mailto:hello@cover4you.co.nz" className="underline hover:text-gray-600 transition-colors">hello@cover4you.co.nz</a>.
          </p>

          {/* Post-table CTA */}
          <div className="mb-14 bg-green-50 border-2 border-green-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900">Not sure which provider suits your operation?</h3>
              <p className="text-sm text-gray-600 mt-1">Our brokers approach all relevant insurers simultaneously — one enquiry, multiple real quotes.</p>
            </div>
            <Link href="/contact/" className="flex-shrink-0 px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-sm shadow whitespace-nowrap">
              Get Free Comparison →
            </Link>
          </div>

          {/* Provider Cards */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Each Provider</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
            {providers.map(p => (
              <div key={p.slug} className="bg-white border-2 border-gray-200 hover:border-green-400 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
                      <span className="inline-block px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full mt-0.5">{p.speciality}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(p.rating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{p.rating}/5 · {p.reviewCount} reviews</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">{p.description}</p>

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

                <div className="space-y-2.5 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 w-20 flex-shrink-0">Coverage</span>
                    <ScoreBar score={p.coverageScore} color="green" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 w-20 flex-shrink-0">Value</span>
                    <ScoreBar score={p.valueScore} color="blue" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 w-20 flex-shrink-0">Service</span>
                    <ScoreBar score={p.serviceScore} color="amber" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* USP block */}
          <div className="bg-gray-900 rounded-3xl p-10 mb-14">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-white mb-2">Why Use a Specialist Broker?</h2>
              <p className="text-gray-400 max-w-xl mx-auto text-sm">Going direct means talking to one insurer. Through us, one enquiry reaches the whole market simultaneously.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                { icon: '🔍', title: 'Market Access', desc: 'We approach FMG, Gallagher, Aon, Farmcover, Howden and international markets in one enquiry.' },
                { icon: '💰', title: 'Free to You', desc: 'Brokers are remunerated by insurers. You get expert advice at no direct cost.' },
                { icon: '🌾', title: 'Crop Expertise', desc: 'Deep understanding of NZ growing conditions, regional risks and crop-specific exposures.' },
                { icon: '⚡', title: 'Fast Turnaround', desc: 'From enquiry to cover options in as little as one business day.' },
                { icon: '🔒', title: 'ICNZ Code', desc: 'All advisers operate under the Insurance Council NZ Fair Insurance Code.' },
                { icon: '📋', title: 'Claims Support', desc: 'We advocate for you at claim time — not just at point of sale.' },
              ].map(f => (
                <div key={f.title} className="bg-gray-800 rounded-2xl p-5">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote form section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Get a Free Quote Comparison</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Fill in the form and our specialist brokers will approach the right insurers for your crop type and region. No obligation, no pitch — just expert advice.</p>
              <ul className="space-y-3">
                {[
                  'One enquiry reaches 5+ insurers simultaneously',
                  'Compare real quotes, not just estimates',
                  'Specialist advice on coverage gaps',
                  'Free — brokers are paid by insurers',
                  'Response within 1 business day',
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
                <QuoteForm variant="hero" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
