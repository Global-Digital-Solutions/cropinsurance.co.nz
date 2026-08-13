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
          <p className="text-green-200 text-lg max-w-2xl">We do the hard work comparing crop insurance across New Zealand's leading insurers — so NZ growers can focus on what they do best.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2 space-y-10">

              {/* Mission */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CropInsurance.co.nz was built to level the playing field for New Zealand growers. Crop insurance is complex — policy wordings differ, insurers specialise in different crops, and premiums can vary significantly between providers. Most growers simply don't have the time to navigate it all.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We take on that work for you. Our specialist broker network approaches the full NZ crop insurance market and international underwriters simultaneously — comparing coverage, pricing and terms so you receive the best fit for your operation, not just the easiest option to sell.
                </p>
              </div>

              {/* How We Work */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Work</h2>
                <div className="space-y-5">
                  {[
                    { step: '01', title: 'You Tell Us About Your Crop', desc: 'Fill in a quick form — crop type, region, approximate value, and the coverage you need. No lengthy paperwork.' },
                    { step: '02', title: 'We Compare the Market', desc: 'Our broker network approaches all relevant insurers simultaneously. We do the hard work so you don\'t have to.' },
                    { step: '03', title: 'You Receive Options', desc: 'We present you with a clear comparison of the best options — coverage, price, and what each policy actually covers.' },
                    { step: '04', title: 'Cover Arranged', desc: 'Once you\'ve chosen, your broker handles all the paperwork. You\'re covered, and we remain your point of contact for claims support.' },
                  ].map(item => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
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

              {/* The Market We Access */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Market We Access</h2>
                <p className="text-gray-600 leading-relaxed mb-5">Our broker network has access to the full NZ crop insurance market and specialist international underwriters.</p>
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
