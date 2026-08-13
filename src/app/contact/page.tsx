import type { Metadata } from 'next';
import Link from 'next/link';
import HoldingPanel from '@/components/HoldingPanel';

export const metadata: Metadata = {
  title: 'Contact | CropInsurance.co.nz',
  description: 'Find a crop insurance specialist. Information on licensed brokers, the FSP register, and going direct to insurers.',
  alternates: { canonical: 'https://www.cropinsurance.co.nz/contact/' },
  openGraph: {
    title: 'Contact | CropInsurance.co.nz',
    description: 'Find a crop insurance specialist for your NZ growing operation.',
    url: 'https://www.cropinsurance.co.nz/contact/',
    siteName: 'CropInsurance.co.nz',
    type: 'website',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact CropInsurance.co.nz',
  url: 'https://www.cropinsurance.co.nz/contact/',
  description: 'Find a crop insurance specialist.',
  isPartOf: { '@type': 'WebSite', url: 'https://www.cropinsurance.co.nz' },
  mainEntity: {
    '@type': 'Organization',
    name: 'CropInsurance.co.nz',
    email: 'hello@cover4you.co.nz',
    url: 'https://www.cropinsurance.co.nz',
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero */}
      <section
        className="relative py-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-green-950/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Find a Crop Insurance Specialist</h1>
          <p className="text-green-200 text-lg max-w-xl">Crop and horticultural cover is a specialist area. Use the options below to find the right adviser or insurer for your operation.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: HoldingPanel */}
            <div>
              <HoldingPanel />
            </div>

            {/* Right: About this site */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About this site</h2>
              <div className="space-y-5">
                {[
                  { icon: '🌾', title: 'Crop insurance information', desc: 'CropInsurance.co.nz provides independent information on crop and horticultural insurance options in New Zealand. We are not an insurer and do not arrange cover directly.' },
                  { icon: '🔍', title: 'Independent', desc: 'We are not owned by or affiliated with any insurer or broker. The information on this site is a starting point for your research.' },
                  { icon: '🇳🇿', title: 'NZ owned and operated', desc: 'This site is operated by Cover4You, a New Zealand business.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">General enquiries</p>
                <a href="mailto:hello@cover4you.co.nz" className="text-sm font-medium text-green-700 hover:underline">hello@cover4you.co.nz</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
