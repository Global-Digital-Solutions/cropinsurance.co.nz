import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-3 text-xs text-gray-400 leading-relaxed">
              Free, independent broker advice for NZ orchardists, viticulturists, arable farmers and horticulture producers. We compare the market so you don&apos;t have to.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300 border border-green-800">🌿 NZ Crop Specialists</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">🤝 Free Advice</span>
            </div>
          </div>

          {/* Crop Insurance */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Crop Insurance</h3>
            <ul className="space-y-1.5">
              {[
                ['Kiwifruit', '/crops/kiwifruit-insurance/'],
                ['Apples & Pears', '/crops/apple-pear-insurance/'],
                ['Grapes & Vineyards', '/crops/grape-vineyard-insurance/'],
                ['Stone Fruit', '/crops/stone-fruit-insurance/'],
                ['Avocado', '/crops/avocado-insurance/'],
                ['Hops', '/crops/hops-insurance/'],
                ['Wheat & Grain', '/crops/wheat-grain-insurance/'],
                ['Vegetables', '/crops/vegetable-crop-insurance/'],
                ['Berries', '/crops/berry-insurance/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Growers & Tools */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Growers</h3>
            <ul className="space-y-1.5">
              {[
                ['Orchardists', '/growers/orchardists/'],
                ['Viticulture Growers', '/growers/viticulture-growers/'],
                ['Arable Farmers', '/growers/arable-farmers/'],
                ['Hop Growers', '/growers/hop-growers/'],
                ['Vegetable Growers', '/growers/vegetable-growers/'],
                ['Contract Growers', '/growers/contract-growers/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 mt-5">Compare & Guides</h3>
            <ul className="space-y-1.5">
              {[
                ['Compare Providers', '/compare/'],
                ['Blog & Guides', '/blog/'],
                ['Making a Claim', '/claims/'],
                ['FAQs', '/faqs/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Grower Bodies */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">NZ Grower Bodies</h3>
            <ul className="space-y-1.5">
              {[
                ['NZ Apple & Pears', 'https://www.applesandpears.nz/'],
                ['NZ Winegrowers', 'https://www.nzwine.com/'],
                ['Horticulture NZ', 'https://www.hortnz.co.nz/'],
                ['Zespri (Kiwifruit)', 'https://www.zespri.com/'],
                ['Federated Farmers NZ', 'https://www.fedfarm.org.nz/'],
                ['Grains Industry NZ', 'https://www.grainsnz.co.nz/'],
              ].map(([label, href]) => (
                <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label} ↗</a></li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 mt-5">Regulators</h3>
            <ul className="space-y-1.5">
              {[
                ['ICNZ', 'https://www.icnz.org.nz/'],
                ['FMA', 'https://www.fma.govt.nz/'],
                ['FSCL', 'https://www.fscl.org.nz/'],
                ['IFSO Scheme', 'https://www.ifso.nz/'],
              ].map(([label, href]) => (
                <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label} ↗</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Company</h3>
            <ul className="space-y-1.5">
              {[
                ['About Us', '/about/'],
                ['Contact Us', '/contact/'],
                ['Privacy Policy', '/privacy/'],
                ['Terms of Use', '/terms/'],
                ['Disclaimer', '/disclaimer/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
            <div className="mt-5 p-3 bg-gray-800 rounded-xl border border-gray-700">
              <p className="text-xs text-gray-400 leading-relaxed">
                CropInsurance.co.nz is a free broker referral service. We may receive referral fees from insurers. Information is general in nature and does not constitute insurance advice. Read the PDS before deciding.
              </p>
            </div>
          </div>

        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">© {currentYear} CropInsurance.co.nz is a trading style of Cover4You. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
