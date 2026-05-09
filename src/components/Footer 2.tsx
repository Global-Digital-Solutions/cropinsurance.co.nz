import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              We do the hard work comparing crop insurance across New Zealand's leading insurers — so you can focus on growing. Free, independent broker advice for orchardists, viticulturists, arable farmers and horticulture producers.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300 border border-green-800">🌿 NZ Crop Specialists</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">🤝 Free Advice</span>
            </div>
          </div>

          {/* Crops */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Crop Insurance</h3>
            <ul className="space-y-2">
              {[
                ['Kiwifruit Insurance', '/crops/kiwifruit-insurance/'],
                ['Apple & Pear Insurance', '/crops/apple-pear-insurance/'],
                ['Grape & Vineyard Insurance', '/crops/grape-vineyard-insurance/'],
                ['Stone Fruit Insurance', '/crops/stone-fruit-insurance/'],
                ['Avocado Insurance', '/crops/avocado-insurance/'],
                ['Hops Insurance', '/crops/hops-insurance/'],
                ['Wheat & Grain Insurance', '/crops/wheat-grain-insurance/'],
                ['Vegetable Crop Insurance', '/crops/vegetable-crop-insurance/'],
                ['Berry Crop Insurance', '/crops/berry-insurance/'],
                ['Compare Providers', '/compare/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Industry Bodies */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['Grower Types', '/growers/'],
                ['Blog & Guides', '/blog/'],
                ['Making a Claim', '/claims/'],
                ['FAQs', '/faqs/'],
                ['About Us', '/about/'],
                ['Contact Us', '/contact/'],
                ['Privacy Policy', '/privacy/'],
                ['Terms of Use', '/terms/'],
                ['Disclaimer', '/disclaimer/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
              ))}
            </ul>

            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 mt-6">NZ Grower Bodies</h3>
            <ul className="space-y-2">
              {[
                ['NZ Apple & Pears', 'https://www.applesandpears.nz/'],
                ['NZ Winegrowers', 'https://www.nzwine.com/'],
                ['Horticulture NZ', 'https://www.hortnz.co.nz/'],
                ['Zespri (Kiwifruit)', 'https://www.zespri.com/'],
                ['Federated Farmers NZ', 'https://www.fedfarm.org.nz/'],
                ['Grains Industry NZ', 'https://www.grainsnz.co.nz/'],
              ].map(([label, href]) => (
                <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-green-400 transition-colors">{label} ↗</a></li>
              ))}
            </ul>
          </div>

          {/* How This Site Works */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">How This Site Works</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              CropInsurance.co.nz is a free broker referral and comparison service. We do the hard work — comparing crop insurance products from FMG, AJG Gallagher, Aon, Farmcover, Howden and other specialist insurers — saving NZ growers time and money.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              We may receive referral fees from insurers or brokers when we connect you with their services. This does not affect the independence of our comparison or the advice provided by our broker network.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Information on this site is general in nature and does not constitute financial or insurance advice. Always read the relevant Product Disclosure Statement (PDS) before making a decision. Our partner advisers operate under the Financial Markets Conduct Act 2013.
            </p>

            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3 mt-6">Insurance Regulators</h3>
            <ul className="space-y-2">
              {[
                ['Insurance Council of NZ (ICNZ)', 'https://www.icnz.org.nz/'],
                ['Financial Markets Authority (FMA)', 'https://www.fma.govt.nz/'],
                ['FSCL Dispute Resolution', 'https://www.fscl.org.nz/'],
                ['IFSO Scheme', 'https://www.ifso.nz/'],
              ].map(([label, href]) => (
                <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-green-400 transition-colors">{label} ↗</a></li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">© {currentYear} CropInsurance.co.nz is a trading style of Cover4You. All rights reserved.</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
