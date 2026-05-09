import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { growerTypes } from '@/data/grower-types';
import QuoteForm from '@/components/QuoteForm';

export async function generateStaticParams() {
  return growerTypes.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const grower = growerTypes.find(g => g.slug === slug);
  if (!grower) return {};
  return {
    title: `${grower.name} | Crop Insurance NZ | CropInsurance.co.nz`,
    description: grower.description,
    alternates: { canonical: `https://cropinsurance.co.nz/growers/${grower.slug}/` },
  };
}

export default async function GrowerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const grower = growerTypes.find(g => g.slug === slug);
  if (!grower) notFound();
  const others = growerTypes.filter(g => g.slug !== slug);

  return (
    <>
      <section className="relative min-h-[360px] flex items-end pb-12" style={{ backgroundImage: `url(${grower.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/growers/" className="hover:text-white">Grower Types</Link><span>/</span>
            <span className="text-white">{grower.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{grower.icon}</span>
            <h1 className="text-4xl font-extrabold text-white">{grower.name}</h1>
          </div>
          <p className="text-green-100 text-lg max-w-2xl">{grower.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Insurance for {grower.name}</h2>
                <p className="text-gray-700 leading-relaxed">{grower.longDescription}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">🌾 Typical Crops</h3>
                  <ul className="space-y-1">
                    {grower.typicalCrops.map(c => (
                      <li key={c} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">🛡️ Key Insurance Needs</h3>
                  <ul className="space-y-1">
                    {grower.keyInsuranceNeeds.map(n => (
                      <li key={n} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />{n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">✅ Coverage Highlights</h3>
                <div className="grid grid-cols-2 gap-2">
                  {grower.coverageHighlights.map(c => (
                    <div key={c} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="sticky top-24">
                <QuoteForm variant="sidebar" />
                <div className="mt-5 bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Other Grower Types</h3>
                  <ul className="space-y-2">
                    {others.map(o => (
                      <li key={o.slug}>
                        <Link href={`/growers/${o.slug}/`} className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors">
                          <span>{o.icon}</span>{o.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
