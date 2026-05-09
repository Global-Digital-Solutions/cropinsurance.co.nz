import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import TrustBar from '@/components/TrustBar';
import HowItWorks from '@/components/HowItWorks';
import AnimatedStats from '@/components/AnimatedStats';
import { cropTypes } from '@/data/crop-types';
import { providers } from '@/data/providers';
import { blogPosts } from '@/data/blog-posts';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Crop Insurance NZ | Compare Quotes for Every Crop | CropInsurance.co.nz',
  description: 'Compare crop insurance for kiwifruit, grapes, apples, wheat, hops and all NZ crops. Free quotes from FMG, Gallagher, Aon and more. Specialist broker advice — no obligation.',
  alternates: { canonical: 'https://cropinsurance.co.nz/' },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'InsuranceAgency'],
      '@id': 'https://cropinsurance.co.nz/#organization',
      name: 'CropInsurance.co.nz',
      url: 'https://cropinsurance.co.nz',
      description: 'NZ specialist crop insurance comparison and broker referral service',
      areaServed: 'NZ',
      email: 'hello@cover4you.co.nz',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://cropinsurance.co.nz/#website',
      url: 'https://cropinsurance.co.nz',
      name: 'CropInsurance.co.nz',
      publisher: { '@id': 'https://cropinsurance.co.nz/#organization' },
      potentialAction: { '@type': 'SearchAction', target: 'https://cropinsurance.co.nz/blog/?q={search_term_string}', 'query-input': 'required name=search_term_string' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://cropinsurance.co.nz/#webpage',
      url: 'https://cropinsurance.co.nz/',
      name: 'Crop Insurance NZ | Compare Quotes for Every Crop',
      isPartOf: { '@id': 'https://cropinsurance.co.nz/#website' },
      about: { '@id': 'https://cropinsurance.co.nz/#organization' },
    },
  ],
};

export default function HomePage() {
  const featuredCrops = cropTypes.slice(0, 8);
  const homeFaqs = faqs.slice(0, 6);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section
        className="relative min-h-[640px] flex items-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/85 via-green-900/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-green-400/20 border border-green-400/30 text-green-200 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">NZ Specialist Crop Brokers</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Crop Insurance<br />
                <span className="text-green-400">for Every NZ Grower</span>
              </h1>
              <p className="mt-5 text-lg text-green-100 leading-relaxed max-w-xl">
                From kiwifruit orchards in the Bay of Plenty to vineyards in Marlborough and grain farms in Canterbury — our specialist brokers compare multiple insurers to save you time and normally money.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact/" className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors shadow-lg text-sm">
                  Get a Free Quote →
                </Link>
                <Link href="/compare/" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20 text-sm backdrop-blur-sm">
                  Compare Providers
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {['✅ ICNZ Fair Code', '🔒 Licensed NZ Brokers', '💰 Free to Growers', '⚡ 1-Day Quotes'].map(b => (
                  <span key={b} className="text-xs text-green-200 font-medium bg-white/10 px-3 py-1 rounded-full border border-white/20">{b}</span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <QuoteForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Form */}
      <section className="lg:hidden bg-green-900 py-8 px-4">
        <QuoteForm variant="hero" />
      </section>

      <TrustBar />

      {/* Crop Types Grid */}
      <section
        className="relative py-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-green-950/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green-400/20 border border-green-400/30 text-green-200 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">All NZ Crops Covered</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Specialist Insurance for Every Crop Type</h2>
            <p className="mt-4 text-lg text-green-200 max-w-2xl mx-auto">From kiwifruit and grapes to wheat and vegetables — we compare the right cover for your specific crop and region.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cropTypes.map(crop => (
              <Link
                key={crop.slug}
                href={`/crops/${crop.slug}/`}
                className="group bg-green-900/70 backdrop-blur-sm border border-green-700/50 rounded-2xl p-5 hover:bg-green-800/80 hover:border-green-400 hover:shadow-xl transition-all"
              >
                <div className="text-3xl mb-3">{crop.icon}</div>
                <h3 className="font-bold text-white text-sm group-hover:text-green-300 transition-colors">{crop.shortName}</h3>
                <p className="text-xs text-green-300 mt-1 line-clamp-2">{crop.description.substring(0, 80)}...</p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-green-400 group-hover:gap-1.5 gap-1 transition-all">
                  Learn more <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AnimatedStats />

      {/* Why Use Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Why CropInsurance.co.nz</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">NZ's Specialist Crop Insurance Brokers</h2>
              <div className="space-y-5">
                {[
                  { icon: '🌾', title: 'Deep NZ Crop Expertise', desc: 'Our broker network understands NZ growing conditions, regional risks, and the specific insurance needs of orchardists, vine growers, and arable farmers.' },
                  { icon: '🔍', title: 'Access to All Major Insurers', desc: 'We approach FMG, Gallagher, Aon, Farmcover, Howden and specialist international markets — giving you genuine choice and competitive pricing.' },
                  { icon: '💬', title: 'Independent Advice', desc: 'We are not tied to any single insurer. Our advice is based on what\'s best for your operation, not on commission targets.' },
                  { icon: '⚡', title: 'Fast, Efficient Service', desc: 'Quotes within one business day. Claims support when you need it most — right after a weather event.' },
                  { icon: '🤝', title: 'Free to Growers', desc: 'Our broker service is completely free to you. Brokers are paid by insurers — you get expert advice at no direct cost.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-green-900 rounded-2xl p-8 text-white mb-6">
                <h3 className="text-xl font-bold mb-4">Ready to protect your crop?</h3>
                <p className="text-green-200 text-sm mb-6">Get a free, no-obligation quote from our specialist broker network. We compare the market so you don't have to.</p>
                <Link href="/contact/" className="block w-full text-center py-3 bg-green-400 hover:bg-green-300 text-green-900 font-bold rounded-xl transition-colors text-sm">
                  Get Your Free Quote →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {providers.slice(0, 3).map(p => (
                  <div key={p.slug} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img src={p.logo} alt={p.shortName} className="w-8 h-8 object-contain" />
                    </div>
                    <p className="text-xs font-semibold text-gray-700">{p.shortName}</p>
                    <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-3 h-3 ${i < Math.floor(p.rating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Expert Guides</span>
              <h2 className="text-3xl font-bold text-gray-900">Crop Insurance Guides & Insights</h2>
            </div>
            <Link href="/blog/" className="hidden sm:inline-flex items-center text-sm font-semibold text-green-700 hover:text-green-800 gap-1">All Articles →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recentPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-green-700 uppercase tracking-wide">{post.category}</span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-2 text-sm leading-snug group-hover:text-green-700 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.readTime} min read</span>
                    <span className="text-xs font-semibold text-green-700">Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 sm:hidden text-center">
            <Link href="/blog/" className="text-sm font-semibold text-green-700">All Articles →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-green-900 text-green-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Common Questions</span>
            <h2 className="text-3xl font-bold text-white">Crop Insurance FAQs</h2>
          </div>
          <div className="space-y-4">
            {homeFaqs.map(faq => (
              <details key={faq.question} className="group bg-gray-800 rounded-xl border border-gray-700">
                <summary className="flex justify-between items-center cursor-pointer p-5 list-none">
                  <span className="font-semibold text-white text-sm pr-4">{faq.question}</span>
                  <svg className="flex-shrink-0 w-5 h-5 text-green-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-gray-700 pt-4">{faq.answer}</div>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faqs/" className="text-sm font-semibold text-green-400 hover:text-green-300">View all FAQs →</Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Protect Your Crop This Season</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">Don't wait until after a hailstorm or frost to think about cover. Get a free quote from our specialist broker network today.</p>
          <Link href="/contact/" className="inline-block px-8 py-4 bg-white text-green-800 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg text-base">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
