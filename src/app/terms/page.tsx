import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | CropInsurance.co.nz',
  description: 'Terms of use for CropInsurance.co.nz — please read before using this website.',
  alternates: { canonical: 'https://cropinsurance.co.nz/terms/' },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-green-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Terms of Use</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-white mb-2">Terms of Use</h1>
          <p className="text-green-300 text-sm">Last updated: May 2026</p>
          <p className="text-green-200 text-sm mt-3 max-w-2xl">By using cropinsurance.co.nz ("this website"), you agree to these Terms of Use. Please read them carefully before using the website.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-sm text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Nature of Service</h2>
              <p>This website is operated as an insurance referral service by Cover4You. We are not an insurer, underwriter, or licensed Financial Advice Provider. We do not provide insurance advice, issue quotes, or arrange insurance policies. We connect growers, orchardists, and farming businesses with licensed NZ insurance advisers and brokers who provide those services. The advisers and brokers we refer you to are independently licensed under the Financial Markets Conduct Act 2013.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">General Information Only</h2>
              <p>The content on this website — including all articles, crop guides, provider comparisons, FAQs and pricing information — is provided for general informational purposes only and does not constitute financial advice. Insurance premiums, coverage terms, exclusions and availability vary by insurer, policy, crop type, region and individual risk profile. Always obtain personalised advice from a licensed NZ rural insurance adviser before making insurance decisions.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Accuracy of Information</h2>
              <p>We make reasonable efforts to ensure the information on this website is accurate and up to date. However, we make no warranty — express or implied — that the information is accurate, complete, or current. Insurance markets, provider offerings, regulatory requirements and pricing change regularly. Always verify information with a licensed adviser before relying on it for any insurance decision.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Provider Information</h2>
              <p>References to insurance providers (including FMG, Gallagher, Aon, Farmcover, Howden and others) are for general informational and comparison purposes only. CropInsurance.co.nz is not affiliated with, endorsed by, or acting as an agent for any specific insurer. Our partner brokers work across multiple insurers and act in your interest to find appropriate coverage.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">No Warranty</h2>
              <p>This website and all content are provided "as is" without any warranty of any kind. We do not warrant that the website will be available at all times, error-free, or free from viruses or other harmful components. We reserve the right to modify, suspend or discontinue any part of this website at any time without notice.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Cover4You and its operators exclude all liability for any direct, indirect, incidental, or consequential loss or damage arising from your use of or reliance on this website, its content, or the referral services it provides. This includes but is not limited to loss arising from reliance on pricing information, coverage descriptions, or provider comparisons on this website.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Intellectual Property</h2>
              <p>All content on this website, including text, graphics, data, and the website's overall look and feel, is owned by or licensed to Cover4You. You may not reproduce, distribute, or use any content from this website for commercial purposes without our written permission. Personal, non-commercial use is permitted.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Third-Party Links</h2>
              <p>This website may contain links to third-party websites, including insurer websites, regulatory bodies, and industry resources. We are not responsible for the content, accuracy or practices of any linked external website. The inclusion of any link does not imply our endorsement of that site.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Governing Law</h2>
              <p>These Terms of Use are governed by the laws of New Zealand. Any disputes arising in connection with this website or these terms are subject to the exclusive jurisdiction of the New Zealand courts.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Changes to These Terms</h2>
              <p>We may update these Terms of Use at any time. The date at the top of this page indicates when the terms were last updated. Continued use of this website after any update constitutes your acceptance of the revised terms.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Contact</h2>
              <p>For questions about these Terms of Use, contact: <a href="mailto:hello@cover4you.co.nz" className="text-green-700 underline hover:text-green-800">hello@cover4you.co.nz</a></p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
