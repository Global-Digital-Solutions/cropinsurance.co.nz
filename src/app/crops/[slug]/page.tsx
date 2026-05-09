import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cropTypes } from '@/data/crop-types';
import { blogPosts } from '@/data/blog-posts';
import QuoteForm from '@/components/QuoteForm';

export async function generateStaticParams() {
  return cropTypes.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const crop = cropTypes.find(c => c.slug === slug);
  if (!crop) return {};
  return {
    title: `${crop.name} NZ | Compare Quotes | CropInsurance.co.nz`,
    description: crop.description,
    alternates: { canonical: `https://cropinsurance.co.nz/crops/${crop.slug}/` },
  };
}

export default async function CropPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const crop = cropTypes.find(c => c.slug === slug);
  if (!crop) notFound();

  const related = cropTypes.filter(c => c.slug !== slug).slice(0, 4);
  const guidePosts = blogPosts.slice(0, 3);

  const faqSchema = crop.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: crop.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cropinsurance.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'Crop Insurance', item: 'https://cropinsurance.co.nz/crops/' },
      { '@type': 'ListItem', position: 3, name: crop.name, item: `https://cropinsurance.co.nz/crops/${crop.slug}/` },
    ],
  };

  return (
    <>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Full-bleed Hero */}
      <section
        className="relative min-h-[600px] sm:min-h-[680px] flex flex-col justify-end"
        style={{ backgroundImage: `url(${crop.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/65 to-gray-900/15" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/crops/" className="hover:text-white transition-colors">Crop Insurance</Link><span>/</span>
            <span className="text-white">{crop.shortName}</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-5xl drop-shadow-lg">{crop.icon}</span>
            <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">NZ Specialist Cover</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight max-w-3xl">{crop.name} in New Zealand</h1>
          <p className="mt-4 text-lg text-green-200 max-w-2xl leading-relaxed">{crop.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact/" className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors text-sm shadow-lg">
              Get a Free Quote →
            </Link>
            <Link href="/compare/" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20 text-sm backdrop-blur-sm">
              Compare Insurers
            </Link>
          </div>
        </div>
        <div className="relative w-full bg-black/50 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-4 items-center">
            {['✅ ICNZ Fair Code', '🔒 Licensed NZ Brokers', '💰 Free to Growers', '⚡ 1-Day Turnaround', '🔍 Multi-Provider Comparison'].map(b => (
              <span key={b} className="text-xs text-white/80 font-medium">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left — Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* About */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {crop.name}</h2>
                <p className="text-gray-600 leading-relaxed">{crop.longDescription}</p>
              </div>

              {/* Coverage Highlights — FIRST, high-contrast standout */}
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-green-500">
                <div className="bg-green-600 px-6 py-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white text-sm font-bold">✓</span>
                  <h2 className="text-lg font-bold text-white">What Can Be Covered</h2>
                  <span className="ml-auto text-xs bg-white/20 text-white px-3 py-1 rounded-full font-semibold">{crop.coverageHighlights.length} options</span>
                </div>
                <div className="bg-green-50 p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {crop.coverageHighlights.map(item => (
                      <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-3.5 border border-green-200 shadow-sm">
                        <span className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm font-semibold text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-xs text-green-700 font-medium">Coverage options vary by insurer and policy. Our brokers match the right cover to your operation.</p>
                    <Link href="/contact/" className="flex-shrink-0 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap">
                      Get Covered →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Key Risks — SECOND */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">!</span>
                  Key Risks for {crop.shortName} Growers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {crop.keyRisks.map(risk => (
                    <div key={risk} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-amber-100">
                      <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regions + Pricing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">📍 Main Growing Regions</h3>
                  <ul className="space-y-2">
                    {crop.mainRegions.map(r => (
                      <li key={r} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />{r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-700 rounded-2xl p-6 text-white shadow-sm">
                  <h3 className="font-bold mb-2">💰 Typical Premium Range</h3>
                  <p className="text-3xl font-extrabold text-green-300 mb-2">{crop.typicalPremiumRange}</p>
                  <p className="text-green-200 text-xs leading-relaxed">Premiums vary by size, region, coverage level and claims history. Our brokers compare multiple insurers to find the best deal.</p>
                  <Link href="/contact/" className="mt-4 block text-center py-2.5 bg-white text-green-800 font-bold text-sm rounded-xl hover:bg-green-50 transition-colors">
                    Get My Quote →
                  </Link>
                </div>
              </div>

              {/* Authority: How crop insurance works */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">How {crop.shortName} Insurance Works in NZ</h2>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>Crop insurance in New Zealand operates through specialist rural brokers who place cover with admitted insurers including FMG (Farmers Mutual Group), Gallagher, Aon, Farmcover, and Howden. Unlike some markets, NZ does not have a government-backed crop insurance scheme — all cover is placed privately, which means the quality and breadth of policy can vary significantly between insurers.</p>
                  <p>For {crop.shortName.toLowerCase()} growers, cover is typically structured as either <strong className="text-gray-800">named perils</strong> (covering specific events like hail, frost, or fire) or <strong className="text-gray-800">multi-peril crop insurance (MPCI)</strong>, which provides broader protection including yield shortfalls from a wide range of causes. Named perils cover is more affordable and suits growers whose primary risk is a defined weather event. MPCI is better suited to larger operations or those with complex, varied risk profiles.</p>
                  <p>Policies are generally annual and must be placed before key risk windows open — frost cover for orchards typically needs to be in place before budburst, for example. Claims are assessed by specialist loss adjusters, and pay-outs are based on either agreed value or actual yield versus a historical benchmark.</p>
                  <p>Using an independent broker gives you access to multiple markets simultaneously — meaning you receive competitive pricing and the policy most closely matched to your specific operation, rather than a generic product from a single insurer.</p>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: '📋', title: 'Named Perils', desc: 'Covers specific listed events (hail, frost, wind, fire). More affordable, with clear trigger events.' },
                    { icon: '🛡️', title: 'Multi-Peril (MPCI)', desc: 'Broader cover including yield shortfalls from multiple causes. Better for complex or large operations.' },
                    { icon: '💵', title: 'Revenue Protection', desc: 'Guarantees a minimum income level. Ideal for commercial growers managing significant seasonal input costs.' },
                  ].map(t => (
                    <div key={t.title} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="text-2xl mb-2">{t.icon}</div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{t.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insurer Comparison Strip */}
              <div className="bg-gray-900 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-2">Which Insurer is Right for Your {crop.shortName} Operation?</h2>
                <p className="text-gray-400 text-sm mb-5">Each insurer has different strengths. Our brokers approach all relevant markets simultaneously — one enquiry, multiple quotes.</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-5">
                  {[
                    { name: 'FMG', note: 'NZ farms & orchards' },
                    { name: 'Gallagher', note: 'Large horticulture' },
                    { name: 'Aon', note: 'Vineyards & vines' },
                    { name: 'Farmcover', note: 'Smaller operations' },
                    { name: 'Howden', note: 'Export-focused' },
                  ].map(p => (
                    <div key={p.name} className="bg-gray-800 rounded-xl p-3 text-center border border-gray-700">
                      <div className="font-bold text-white text-sm">{p.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{p.note}</div>
                    </div>
                  ))}
                </div>
                <Link href="/compare/" className="inline-block px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold text-sm rounded-xl transition-colors">
                  Compare All Providers →
                </Link>
              </div>

              {/* Guides & Articles */}
              {guidePosts.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-white">Guides &amp; Articles</h2>
                    <Link href="/blog/" className="text-xs text-green-400 hover:text-green-300 font-semibold transition-colors">View all →</Link>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {guidePosts.map(post => (
                      <Link key={post.slug} href={`/blog/${post.slug}/`} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group">
                        <img src={post.heroImage} alt={post.title} className="w-16 h-16 object-cover rounded-xl flex-shrink-0" />
                        <div>
                          <span className="text-xs text-green-700 font-semibold uppercase tracking-wide">{post.category}</span>
                          <h3 className="text-sm font-bold text-gray-900 mt-0.5 group-hover:text-green-700 transition-colors line-clamp-2">{post.title}</h3>
                          <span className="text-xs text-gray-400 mt-1 inline-block">{post.readTime} min read</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {crop.faqs.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {crop.faqs.map((faq, i) => (
                      <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                        <summary className="flex justify-between items-center px-5 py-4 cursor-pointer bg-gray-50 hover:bg-green-50 transition-colors list-none">
                          <h3 className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</h3>
                          <svg className="w-4 h-4 text-gray-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-5 py-4 border-t border-gray-100">
                          <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Crops */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Other Crop Types</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {related.map(c => (
                    <Link key={c.slug} href={`/crops/${c.slug}/`}
                      className="group relative rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-green-400 transition-all flex items-end"
                      style={{ backgroundImage: `url(${c.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '160px' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                      <div className="relative p-3 w-full">
                        <span className="text-xl">{c.icon}</span>
                        <h3 className="font-bold text-white text-xs mt-1 group-hover:text-green-300 transition-colors">{c.shortName}</h3>
                        <span className="text-xs text-green-300 inline-block">Learn more →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Right — Sticky Sidebar */}
            <div>
              <div className="sticky top-24 space-y-5">
                <div className="bg-green-900 rounded-2xl p-5 text-white">
                  <h3 className="font-bold text-sm mb-3 text-green-200 uppercase tracking-wider">Why Choose Us</h3>
                  <div className="space-y-2.5">
                    {[
                      { icon: '✅', text: 'ICNZ Fair Insurance Code' },
                      { icon: '🔍', text: 'Compare FMG, Gallagher, Aon & more' },
                      { icon: '💰', text: 'Free to growers — no fees' },
                      { icon: '⚡', text: 'Quotes within 1 business day' },
                      { icon: '🌿', text: 'Crop specialist brokers' },
                    ].map(b => (
                      <div key={b.text} className="flex items-center gap-2 text-sm text-green-100">
                        <span>{b.icon}</span>
                        <span>{b.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <QuoteForm variant="sidebar" cropType={crop.shortName} />

                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Quick Links</h3>
                  <ul className="space-y-2">
                    {[
                      ['Compare Providers', '/compare/'],
                      ['How Claims Work', '/claims/'],
                      ['All Crop Types', '/crops/'],
                      ['Grower Types', '/growers/'],
                      ['FAQs', '/faqs/'],
                    ].map(([label, href]) => (
                      <li key={href}>
                        <Link href={href} className="text-sm text-green-700 hover:text-green-800 font-medium">{label} →</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-14 bg-green-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Protect Your {crop.shortName} Crop?</h2>
          <p className="text-green-200 mb-6">Our specialist brokers compare FMG, Gallagher, Aon, Farmcover and Howden — one enquiry, multiple quotes, expert advice within one business day.</p>
          <Link href="/contact/" className="inline-block px-8 py-3 bg-green-400 hover:bg-green-300 text-green-900 font-bold rounded-xl transition-colors text-sm shadow-lg">
            Get My Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
