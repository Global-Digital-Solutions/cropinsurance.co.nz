import type { Metadata } from 'next';
import Link from 'next/link';
import HoldingPanel from '@/components/HoldingPanel';

export const metadata: Metadata = {
  title: 'About CropInsurance.co.nz | Independent Crop Insurance Information NZ',
  description: 'About CropInsurance.co.nz — independent crop insurance information for NZ orchardists, viticulturists, arable farmers and horticulture producers. Operated by Cover4You.',
  alternates: { canonical: 'https://www.cropinsurance.co.nz/about/' },
  openGraph: {
    title: 'About CropInsurance.co.nz | Independent Crop Insurance Information NZ',
    description: 'Independent crop insurance information for NZ orchardists, viticulturists, arable farmers and horticulture producers.',
    url: 'https://www.cropinsurance.co.nz/about/',
    siteName: 'CropInsurance.co.nz',
    images: [{ url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80', width: 1200, height: 630, alt: 'About CropInsurance.co.nz' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CropInsurance.co.nz | Independent Crop Insurance Information NZ',
    description: 'Independent crop insurance information for NZ orchardists, viticulturists, arable farmers and horticulture producers.',
    images: ['https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80'],
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About CropInsurance.co.nz',
  url: 'https://www.cropinsurance.co.nz/about/',
  description: 'CropInsurance.co.nz is an independent crop insurance information resource for NZ orchardists, viticulturists, arable farmers and horticulture producers.',
  isPartOf: { '@type': 'WebSite', url: 'https://www.cropinsurance.co.nz' },
  about: {
    '@type': 'Organization',
    name: 'CropInsurance.co.nz',
    url: 'https://www.cropinsurance.co.nz',
    description: 'Independent NZ crop insurance information resource operated by Cover4You.',
    email: 'hello@cover4you.co.nz',
    areaServed: { '@type': 'Country', name: 'New Zealand' },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cropinsurance.co.nz/' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.cropinsurance.co.nz/about/' },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section
        className="relative py-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-green-950/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">About CropInsurance.co.nz</h1>
          <p className="text-green-200 text-lg max-w-2xl">Independent crop insurance information for NZ orchardists, viticulturists, arable farmers and horticulture producers.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2 space-y-10">

              {/* About */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Site Is</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CropInsurance.co.nz publishes independent information about crop and horticultural insurance in New Zealand. Crop insurance is a specialist field — policy wordings differ, insurers specialise in different crop types, and premiums can vary considerably by region and peril.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This site helps growers understand what cover is available, which insurers and brokers operate in the NZ market, and what to look for before arranging a policy. It does not sell insurance and does not provide insurance advice.
                </p>
              </div>

              {/* How to Get Covered */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Get Covered</h2>
                <div className="space-y-5 text-gray-600">
                  <p><strong>Go direct.</strong> Several NZ insurers deal directly with growers. You can find them on our <a href="/compare/" className="text-green-700 font-medium hover:text-green-800">compare page</a>.</p>
                  <p><strong>Use a specialist broker.</strong> For multi-peril cover or international markets, a rural broker can reach underwriters that are not available direct. The IBANZ directory lists licensed NZ brokers.</p>
                  <p><strong>Check they are licensed.</strong> Anyone giving you insurance advice must hold a licence under the Financial Markets Conduct Act 2013 (FMCA). You can verify this on the <a href="https://fsp-register.companiesoffice.govt.nz/" target="_blank" rel="noopener noreferrer" className="text-green-700 font-medium hover:text-green-800">Financial Service Providers Register</a>.</p>
                </div>
              </div>

              {/* Regulatory */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Operate</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CropInsurance.co.nz is a trading style of Cover4You — an independent insurance information service. The information on this site is general in nature and does not constitute insurance advice. If you choose to use a broker or adviser found through the IBANZ directory or FSP register, they will hold their own licences and operate under the Financial Markets Conduct Act 2013 (FMCA).
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are committed to transparency, fairness and clear disclosure. We may receive a referral fee from broker partners when we connect you with their services.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { label: 'Dispute Resolution', body: 'If you have a complaint about our service, contact us first at hello@cover4you.co.nz. Unresolved complaints can be escalated to FSCL (0800 347 257) or IFSO (0800 888 202).' },
                    { label: 'Our Commitment', body: 'We are committed to transparent referral disclosures and providing clear, unbiased information so you can make an informed decision about your crop insurance cover.' },
                  ].map(item => (
                    <div key={item.label} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-2">{item.label}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* The NZ Crop Insurance Market */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The NZ Crop Insurance Market</h2>
                <p className="text-gray-600 leading-relaxed mb-5">Crop cover in New Zealand is written by a small number of specialist providers. Depending on your crop type and risk profile, cover may be arranged directly with an insurer or through a broker who can access specialist international markets.</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { name: 'NZ rural insurers', tag: 'Domestic cover' },
                    { name: 'Agribusiness brokers', tag: 'Local expertise' },
                    { name: 'International markets', tag: "Lloyd's access" },
                    { name: 'Specialty underwriters', tag: 'Complex risks' },
                  ].map(item => (
                    <div key={item.name} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                      <p className="text-sm font-bold text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.tag}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-5">
                <HoldingPanel />
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Quick Links</h3>
                  <ul className="space-y-2">
                    {[
                      ['Compare Providers', '/compare/'],
                      ['How Claims Work', '/claims/'],
                      ['FAQs', '/faqs/'],
                      ['Contact Us', '/contact/'],
                      ['Privacy Policy', '/privacy/'],
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
    </>
  );
}
