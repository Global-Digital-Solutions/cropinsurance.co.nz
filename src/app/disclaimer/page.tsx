import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | CropInsurance.co.nz',
  description: 'Important disclaimer about the nature of CropInsurance.co.nz as an insurance referral service. We are not an insurer or financial adviser.',
  alternates: { canonical: 'https://cropinsurance.co.nz/disclaimer/' },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-green-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Disclaimer</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-white mb-2">Disclaimer</h1>
          <p className="text-green-300 text-sm">Last updated: May 2026</p>
          <p className="text-green-200 text-sm mt-3 max-w-2xl font-medium">Important: This website is an insurance referral service, not an insurer or financial adviser.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-sm text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Referral Service Only</h2>
              <p>CropInsurance.co.nz is operated as an insurance referral service by Cover4You. We connect NZ growers, orchardists, and farming businesses with licensed New Zealand insurance advisers and brokers who specialise in crop and rural insurance. We are not an insurer, underwriter, or Financial Advice Provider (FAP) and we do not provide regulated financial advice.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Licensed Advisers</h2>
              <p>The insurance advisers and brokers we refer you to are independently licensed Financial Advice Providers (FAPs) under the Financial Markets Conduct Act 2013. They are regulated by the Financial Markets Authority (FMA). Before providing insurance advice, they will give you a disclosure statement as required by law, setting out their licence details, how they are remunerated, and any conflicts of interest.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">General Information Only</h2>
              <p>All content on this website — including coverage descriptions, crop type guides, provider comparisons, pricing guides, blog articles and FAQs — is provided as general information only. It does not constitute financial advice and should not be relied upon as such. Coverage terms, conditions, exclusions and pricing vary significantly by insurer, policy, crop type, region and individual circumstances. Always obtain personalised advice from a licensed rural insurance adviser before making any insurance decision.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Pricing Information</h2>
              <p>Any pricing information on this website — such as premium percentage ranges or indicative annual costs — represents illustrative information only, based on general market knowledge. Actual premiums will depend on your specific crop type, growing region, sum insured, coverage level, claims history, and other risk factors assessed by the insurer. Only a licensed adviser following a full needs assessment can provide an accurate premium indication.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Provider Information</h2>
              <p>Information about insurance providers (FMG, Gallagher, Aon, Farmcover, Howden and others) is provided for general comparison purposes only. Provider offerings, coverage terms, appetite and availability change regularly. CropInsurance.co.nz does not represent or act on behalf of any specific insurer. Our broker partners work with multiple insurers and will recommend options suited to your individual circumstances.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">No Guarantee of Cover</h2>
              <p>Connecting with an adviser through our service does not guarantee that insurance cover will be offered or arranged. Cover is subject to each insurer's underwriting criteria, risk appetite and acceptance. Some crop types, regions or risk profiles may have limited or no market availability.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">External Links</h2>
              <p>This website may contain links to third-party websites including insurer websites and regulatory bodies. We are not responsible for the content, accuracy or privacy practices of any external site. Links are provided for convenience only.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Contact</h2>
              <p>For questions about this disclaimer, contact: <a href="mailto:hello@cover4you.co.nz" className="text-green-700 underline hover:text-green-800">hello@cover4you.co.nz</a></p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
