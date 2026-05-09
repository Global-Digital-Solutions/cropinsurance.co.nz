import type { Metadata } from 'next';
import Link from 'next/link';
import { growerTypes } from '@/data/grower-types';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Crop Insurance by Grower Type NZ | Orchardists, Viticulture, Arable & More | CropInsurance.co.nz',
  description: 'Find specialist crop insurance for orchardists, viticulture growers, arable farmers, hop growers, vegetable growers and contract growers in New Zealand. Compare FMG, Gallagher, Aon and more.',
  alternates: { canonical: 'https://cropinsurance.co.nz/growers/' },
};

const growerStats = [
  { value: '6', label: 'Grower types covered' },
  { value: '5+', label: 'Insurers compared' },
  { value: '1 day', label: 'Quote turnaround' },
  { value: 'Free', label: 'Broker service' },
];

const whyMatters = [
  { icon: '🌦️', title: 'NZ Weather is Unpredictable', body: 'Cyclones, late frosts, hailstorms and drought can strike without warning. A single weather event can eliminate an entire season\'s income for an uninsured grower. Cyclone Gabrielle alone caused over $800 million in agricultural damage in Hawke\'s Bay.' },
  { icon: '📈', title: 'Input Costs Are Rising', body: 'Labour, fertiliser, freight and irrigation costs have all increased sharply. Without crop insurance, a weather event doesn\'t just cost you the harvest — it can leave you unable to meet the seasonal input debt you\'ve already committed to.' },
  { icon: '🏦', title: 'Banks May Require It', body: 'Rural lenders including Rabobank, BNZ Agri and ANZ increasingly require growers with large seasonal finance facilities to hold crop insurance. Having cover can also support better lending terms and interest rates.' },
  { icon: '🌍', title: 'Export Markets Demand Reliability', body: 'NZ export crops like kiwifruit, wine grapes and apples carry contractual volume obligations. Failing to meet supply commitments due to weather can damage long-term market relationships. Revenue protection helps ensure continuity.' },
];

const coverTypes = [
  { name: 'Named Perils', desc: 'Covers specific events: hail, frost, fire, wind. Most affordable and the most widely used structure in NZ.', best: 'Orchardists, arable farmers', popular: true },
  { name: 'Multi-Peril (MPCI)', desc: 'Covers yield shortfalls from a broad range of causes including weather, disease and pest incursion.', best: 'Large commercial operations', popular: false },
  { name: 'Revenue Protection', desc: 'Guarantees a minimum income level regardless of cause of loss. Best when input costs are high.', best: 'Export crop growers', popular: false },
  { name: 'Parametric Cover', desc: 'Triggers automatically based on a measured index (e.g. rainfall below threshold). No loss assessment needed.', best: 'Arable, drought-prone regions', popular: false },
];

export default function GrowersIndexPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[520px] flex items-end"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 via-green-950/70 to-green-950/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-24 w-full">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Grower Types</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-green-400/20 border border-green-400/30 text-green-200 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Specialist Cover for Every NZ Grower
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight max-w-3xl">
            Crop Insurance by<br /><span className="text-green-400">Grower Type</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Whether you&apos;re an orchardist in Hawke&apos;s Bay, a vine grower in Marlborough, an arable farmer in Canterbury or a contract grower — your risks are different and your insurance should reflect that.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact/" className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors text-sm shadow-lg">
              Get My Free Quote →
            </Link>
            <Link href="/compare/" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20 text-sm backdrop-blur-sm">
              Compare Insurers
            </Link>
          </div>
        </div>
        <div className="relative w-full bg-black/50 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {growerStats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-extrabold text-green-400">{s.value}</div>
                <div className="text-xs text-white/70 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grower Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Find Insurance for Your Operation</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">Select your grower type to see specific risks, cover options and what to look for in a policy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {growerTypes.map((grower, i) => (
              <Link
                key={grower.slug}
                href={`/growers/${grower.slug}/`}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-green-400"
                style={{ minHeight: '380px' }}
              >
                <div className="absolute inset-0">
                  <img src={grower.heroImage} alt={grower.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-gray-900/20 group-hover:via-green-950/75 transition-colors duration-300" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-6" style={{ minHeight: '380px' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl drop-shadow-lg">{grower.icon}</span>
                    <span className="px-2 py-0.5 bg-green-500/90 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                      {i === 0 ? 'Most Popular' : 'Specialist Cover'}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-white mb-2 group-hover:text-green-300 transition-colors leading-tight">{grower.name}</h2>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-2">{grower.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {grower.typicalCrops.slice(0, 3).map(crop => (
                      <span key={crop} className="px-2 py-0.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs rounded-full">{crop}</span>
                    ))}
                    {grower.typicalCrops.length > 3 && (
                      <span className="px-2 py-0.5 bg-white/10 border border-white/15 text-green-300 text-xs rounded-full">+{grower.typicalCrops.length - 3} more</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <span className="text-xs font-bold text-green-300 uppercase tracking-wider">View insurance options</span>
                    <span className="w-8 h-8 bg-green-500 group-hover:bg-green-400 rounded-full flex items-center justify-center text-white font-bold transition-colors">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Crop Insurance Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Why it matters</span>
            <h2 className="text-3xl font-bold text-gray-900">Why NZ Growers Need Crop Insurance</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm">New Zealand&apos;s climate and export-dependent economy make crop insurance more than a nice-to-have for many operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyMatters.map(item => (
              <div key={item.title} className="flex gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm border border-gray-200">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cover Types Explained */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Types of Crop Cover Available in NZ</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">Not all crop insurance is the same. Understanding the structure helps you choose the right policy for your risk profile.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coverTypes.map(ct => (
              <div key={ct.name} className={`rounded-2xl p-6 border-2 ${ct.popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}>
                <div className={`inline-block px-2 py-0.5 text-xs font-bold rounded-full mb-3 ${ct.popular ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {ct.popular ? 'Most Common' : 'Available'}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{ct.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{ct.desc}</p>
                <div className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Best for:</span> {ct.best}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-green-900 rounded-2xl p-6 text-center text-white">
            <h3 className="font-bold text-lg mb-2">Not sure which cover type is right for you?</h3>
            <p className="text-green-200 text-sm mb-4 max-w-xl mx-auto">Our specialist brokers will assess your operation, identify your key risks, and recommend the most appropriate cover — at no cost to you.</p>
            <Link href="/contact/" className="inline-block px-8 py-3 bg-green-400 hover:bg-green-300 text-green-900 font-bold rounded-xl text-sm transition-colors">
              Talk to a Crop Insurance Specialist →
            </Link>
          </div>
        </div>
      </section>

      {/* How the Process Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">How Getting Covered Works</h2>
            <p className="text-gray-500 mt-2 text-sm">From first enquiry to cover in place — typically within one business day.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: '01', icon: '📋', title: 'Tell Us About Your Operation', desc: 'Complete a short enquiry form with your crop type, region, and approximate insured value.' },
              { step: '02', icon: '🔍', title: 'We Compare the Market', desc: 'Your specialist broker approaches FMG, Gallagher, Aon, Farmcover, Howden and relevant markets simultaneously.' },
              { step: '03', icon: '📊', title: 'Receive Your Options', desc: 'We present a clear comparison of quotes, coverage terms, and what each policy actually covers.' },
              { step: '04', icon: '✅', title: 'Cover Arranged', desc: 'You choose, your broker arranges the policy, and we remain your contact for renewals and claims support.' },
            ].map((s, i) => (
              <div key={s.step} className="relative bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                {i < 3 && <div className="hidden sm:block absolute top-10 -right-3 w-6 h-0.5 bg-green-300 z-10" />}
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-sm">{s.step}</div>
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us + Form */}
      <section className="py-16 bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block px-3 py-1 bg-green-400/20 border border-green-400/30 text-green-200 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Why CropInsurance.co.nz
              </span>
              <h2 className="text-3xl font-extrabold mb-6">We Understand Your Growing Operation</h2>
              <div className="space-y-4">
                {[
                  { icon: '🔍', title: 'We Compare Multiple Providers', desc: 'One enquiry reaches FMG, Gallagher, Aon, Farmcover, Howden and specialist international markets simultaneously.' },
                  { icon: '🌾', title: 'Deep Crop Expertise', desc: 'Our broker network understands NZ growing conditions, regional risks and specific insurance needs for each crop and grower type.' },
                  { icon: '💰', title: 'Free to Growers', desc: 'Our service is completely free to you. Brokers are paid by insurers — expert advice at no direct cost.' },
                  { icon: '⚡', title: 'Fast Turnaround', desc: 'From enquiry to cover options in as little as one business day.' },
                  { icon: '📋', title: 'Claims Support', desc: 'We advocate for you at claim time — not just at the point of sale.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center text-xl">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-white text-sm">{item.title}</h3>
                      <p className="text-sm text-green-200 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-2xl p-1.5 bg-gradient-to-br from-green-400 to-green-500 shadow-2xl">
                <QuoteForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurer trust strip */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Insurers Our Broker Network Works With</p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {['FMG', 'Gallagher', 'Aon', 'Farmcover', 'Howden'].map(name => (
              <div key={name} className="bg-gray-50 rounded-xl py-4 px-3 text-center border border-gray-200">
                <p className="text-sm font-bold text-gray-700">{name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">Plus specialist international underwriters for large or complex risks.</p>
        </div>
      </section>

      {/* Crop types link strip */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900">Looking for a specific crop type?</h3>
              <p className="text-sm text-gray-500 mt-1">Browse insurance by crop — kiwifruit, grapes, apples, wheat, hops and more.</p>
            </div>
            <Link href="/crops/" className="flex-shrink-0 px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-sm shadow">
              Browse by Crop Type →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
