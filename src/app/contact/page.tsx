import type { Metadata } from 'next';
import Link from 'next/link';
import HoldingPanel from '@/components/HoldingPanel';

export const metadata: Metadata = {
  title: 'Get a Free Crop Insurance Quote | Contact Us | CropInsurance.co.nz',
  description: 'Contact our specialist crop insurance brokers for a no-obligation quote. We access the NZ crop insurance market and specialist international underwriters for NZ growers.',
  alternates: { canonical: 'https://www.cropinsurance.co.nz/contact/' },
  openGraph: {
    title: 'Get a Crop Insurance Quote | CropInsurance.co.nz',
    description: 'Contact our specialist crop insurance brokers for a no-obligation quote. We access the NZ crop insurance market and specialist international underwriters for NZ growers.',
    url: 'https://www.cropinsurance.co.nz/contact/',
    siteName: 'CropInsurance.co.nz',
    images: [{ url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80', width: 1200, height: 630, alt: 'Get a Crop Insurance Quote' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Crop Insurance Quote | CropInsurance.co.nz',
    description: 'Specialist broker referral — access to the NZ crop insurance market and international underwriters.',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80'],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Get a Free Crop Insurance Quote',
  url: 'https://www.cropinsurance.co.nz/contact/',
  description: 'Request a free, no-obligation crop insurance quote from NZ specialist brokers.',
  isPartOf: { '@type': 'WebSite', url: 'https://www.cropinsurance.co.nz' },
  mainEntity: {
    '@type': 'Organization',
    name: 'CropInsurance.co.nz',
    email: 'hello@cover4you.co.nz',
    url: 'https://www.cropinsurance.co.nz',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cropinsurance.co.nz/' },
    { '@type': 'ListItem', position: 2, name: 'Get a Quote', item: 'https://www.cropinsurance.co.nz/contact/' },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section
        className="relative py-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-green-950/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Get Your Crop Insurance Quote</h1>
          <p className="text-green-200 text-lg max-w-xl">We do the hard work — accessing the specialist crop insurance market so you get the right cover at the right price. No obligation, fast turnaround.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — Value Props */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Use Our Broker Service?</h2>
              <div className="space-y-5">
                {[
                  { icon: '🌾', title: 'NZ Crop Specialists', desc: 'Our brokers work specifically in the NZ agricultural sector and understand the unique risks facing orchardists, viticulturists, and arable farmers.' },
                  { icon: '🔍', title: 'We Compare the Market', desc: 'One enquiry reaches the full NZ crop insurance market and specialist international underwriters — giving you genuine choice and competitive pricing.' },
                  { icon: '🤝', title: 'Independent Advice', desc: 'We are not tied to any single insurer. We do the hard work comparing options so the advice is always in your best interests.' },
                  { icon: '⚡', title: 'Fast Turnaround', desc: 'We commit to responding to all enquiries quickly — saving you time when you need to focus on your operation.' },
                  { icon: '💰', title: 'Free Service', desc: 'Our broker service is completely free to you as a grower. Brokers are remunerated by insurers — you get expert advice at no direct cost.' },
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
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[['📧', 'Email', 'hello@cover4you.co.nz'], ['⚡', 'Response', 'Fast Turnaround'], ['🔒', 'Service', 'Free & No Obligation']].map(([icon, label, value]) => (
                  <div key={label} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <div className="text-xl mb-1">{icon}</div>
                    <div className="text-xs font-bold text-gray-700 uppercase tracking-wide">{label}</div>
                    <div className="text-xs text-gray-600 mt-0.5">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Holding Panel */}
            <div className="rounded-2xl p-1 bg-gradient-to-br from-green-500 to-green-700 shadow-2xl">
              <HoldingPanel />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
