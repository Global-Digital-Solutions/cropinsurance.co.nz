import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { cropTypes } from '@/data/crop-types';
import { growerTypes } from '@/data/grower-types';
import { blogPosts } from '@/data/blog-posts';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Crop Insurance NZ | Compare Quotes for Every Crop | CropInsurance.co.nz',
  description: 'Crop insurance information for kiwifruit, grapes, apples, wheat, hops and all NZ crops. Compare specialist providers and access NZ and international underwriters.',
  alternates: { canonical: 'https://www.cropinsurance.co.nz/' },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'InsuranceAgency'],
      '@id': 'https://www.cropinsurance.co.nz/#organization',
      name: 'CropInsurance.co.nz',
      url: 'https://www.cropinsurance.co.nz',
      description: 'Crop insurance information and broker referral for New Zealand orchardists, viticulturists, arable farmers and horticulture producers.',
      areaServed: 'NZ',
      email: 'hello@cover4you.co.nz',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.cropinsurance.co.nz/#website',
      url: 'https://www.cropinsurance.co.nz',
      name: 'CropInsurance.co.nz',
      publisher: { '@id': 'https://www.cropinsurance.co.nz/#organization' },
      potentialAction: { '@type': 'SearchAction', target: 'https://www.cropinsurance.co.nz/blog/?q={search_term_string}', 'query-input': 'required name=search_term_string' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.cropinsurance.co.nz/#webpage',
      url: 'https://www.cropinsurance.co.nz/',
      name: 'Crop Insurance NZ | Compare Quotes for Every Crop',
      isPartOf: { '@id': 'https://www.cropinsurance.co.nz/#website' },
      about: { '@id': 'https://www.cropinsurance.co.nz/#organization' },
    },
  ],
};

export default function HomePage() {
  const homeFaqs = faqs.slice(0, 6);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero: photo washed back to white so the copy reads, quote form alongside */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-green-50/40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80)' }}
          />
          <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-white/60 via-white/95 to-white" />
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white via-white/90 to-white/20" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-700">
                Free crop insurance quotes
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900">
                Crop insurance covers the perils it names.
                <br />
                <span className="text-green-700">Everything else is yours.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                Hail, frost, wind and fire are the usual named perils, but which ones a policy lists,
                and how it values a lost crop, varies by insurer and by crop. That is the part worth
                understanding before you buy.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
                We explain how crop cover works for each kind of grower, then put you in touch with a
                registered rural insurance broker if you want someone to look at your operation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#crops" className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800">
                  Find your crop
                </a>
                <Link href="/growers/" className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:border-green-700">
                  Find your type of operation
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <QuoteForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* One thing worth knowing */}
      <section className="max-w-6xl mx-auto px-5 py-14">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7 sm:p-9">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">The one thing worth knowing before anything else</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
            Most crop policies are <strong className="text-gray-900">named-peril</strong> policies. If the
            event that damaged your crop is not on the list, the policy does not respond, however bad the
            loss. Multi-peril and revenue cover go wider, but they are rarer, priced differently and not
            available for every crop.
          </p>
          <p className="mt-3 max-w-3xl leading-relaxed text-gray-600">
            Policies also set a deadline for telling the insurer about damage, and many need the crop
            assessed before harvest or clean-up. Read those two clauses first.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/claims/" className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800">
              How a crop claim works
            </Link>
            <Link href="/faqs/" className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:border-green-700">
              Common questions
            </Link>
          </div>
        </div>
      </section>

      {/* By crop */}
      <section id="crops" className="max-w-6xl mx-auto px-5 pb-6 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">By crop</h2>
        <p className="mt-2 text-sm text-gray-500">The main risks, the regions that grow it, and what cover usually looks like.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cropTypes.map(crop => (
            <Link
              key={crop.slug}
              href={`/crops/${crop.slug}/`}
              className="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-green-700 hover:shadow-md"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-green-800">{crop.shortName}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500 line-clamp-2">{crop.description}</p>
              {crop.mainRegions?.length > 0 && (
                <p className="mt-3 text-xs text-gray-400">{crop.mainRegions.slice(0, 3).join(' · ')}</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* By operation */}
      <section className="max-w-6xl mx-auto px-5 py-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">By type of operation</h2>
        <p className="mt-2 text-sm text-gray-500">Written for the way each kind of grower actually runs.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {growerTypes.map(g => (
            <Link
              key={g.slug}
              href={`/growers/${g.slug}/`}
              className="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-green-700 hover:shadow-md"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-green-800">{g.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500 line-clamp-2">{g.description}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-green-700 group-hover:underline">Read more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Guides</h2>
            <Link href="/blog/" className="text-sm font-semibold text-green-700 hover:underline">All guides →</Link>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {recentPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="group rounded-xl border border-gray-200 overflow-hidden bg-white hover:shadow-md transition-all">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img src={post.heroImage} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-green-800 line-clamp-2">{post.title}</h3>
                  <p className="mt-2 text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
                  <p className="mt-3 text-xs text-gray-400">{post.readTime} min read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto px-5 py-14">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Common questions</h2>
          <div className="mt-6 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
            {homeFaqs.map(faq => (
              <details key={faq.question} className="group">
                <summary className="flex justify-between items-center cursor-pointer p-5 list-none">
                  <span className="font-medium text-gray-900 text-sm pr-4">{faq.question}</span>
                  <svg className="flex-shrink-0 w-5 h-5 text-green-700 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
          <Link href="/faqs/" className="mt-5 inline-block text-sm font-semibold text-green-700 hover:underline">All questions →</Link>
        </div>
      </section>

      {/* How this site works */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-base font-semibold text-gray-900">We do not sell insurance</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                We are not an insurer and we do not give advice. We explain how crop cover works and,
                if you ask, introduce you to a registered rural insurance broker.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">Provider facts are sourced</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                What we say about a named insurer or broker comes from their own published material and
                is dated. If something is out of date, email{' '}
                <a href="mailto:hello@cover4you.co.nz" className="text-green-700 underline underline-offset-2">hello@cover4you.co.nz</a>.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">Read the wording</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                General information here never replaces the policy wording. A good broker will walk you
                through the perils, exclusions and claim deadlines before you commit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
