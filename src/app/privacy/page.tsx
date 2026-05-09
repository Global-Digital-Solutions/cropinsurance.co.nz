import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | CropInsurance.co.nz',
  description: 'Privacy policy for CropInsurance.co.nz — how we collect, use and protect your personal information in accordance with the Privacy Act 2020 (NZ).',
  alternates: { canonical: 'https://cropinsurance.co.nz/privacy/' },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-green-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-green-300 text-sm">Last updated: May 2026</p>
          <p className="text-green-200 text-sm mt-3 max-w-2xl">CropInsurance.co.nz (a trading style of Cover4You) is committed to protecting your privacy in accordance with the Privacy Act 2020 (New Zealand).</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-sm text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Information We Collect</h2>
              <p>We collect personal information you provide directly via our quote request and contact forms. This may include your name, email address, phone number, crop type, growing region, estimated crop value, and any additional information you choose to share about your farming operation. We also collect standard website analytics data (page views, referrer sources, device type) through privacy-respecting analytics tools to improve the website experience.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">How We Use Your Information</h2>
              <p>We use your contact information solely to forward your enquiry to a licensed NZ insurance adviser or broker who specialises in crop and rural insurance. This allows them to contact you, understand your requirements, and provide appropriate insurance advice and quotes. We do not use your information for marketing purposes without your explicit consent, and we do not sell or share your information with third parties other than the licensed advisers we refer you to.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Adviser Referrals</h2>
              <p>When we forward your enquiry to a licensed broker or adviser, that adviser will receive your contact details and the information you provided in the quote form. From that point, your information is also subject to the adviser's own privacy policy. Licensed advisers are required to comply with the Privacy Act 2020 and their obligations under the Financial Markets Conduct Act 2013.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Data Retention</h2>
              <p>We retain enquiry data for a limited period for the purposes of following up on referred enquiries and improving our service. Enquiry data is not retained indefinitely. You may request deletion of your information at any time by contacting us at <a href="mailto:hello@cover4you.co.nz" className="text-green-700 underline hover:text-green-800">hello@cover4you.co.nz</a>.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Cookies and Analytics</h2>
              <p>Our website may use cookies and similar technologies to collect analytics data about how visitors use the site. This data is aggregated and anonymised — it does not identify individual visitors. You can control cookie settings through your browser. We do not use cookies to track your activity across other websites.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Security</h2>
              <p>We take reasonable steps to protect the personal information we hold from loss, unauthorised access, disclosure or modification. Quote form submissions are transmitted securely. However, no method of internet transmission is completely secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Your Rights</h2>
              <p>Under the Privacy Act 2020, you have the right to access personal information we hold about you, to request correction of that information if it is inaccurate, and to request deletion where appropriate. To exercise any of these rights, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-green-700 underline hover:text-green-800">hello@cover4you.co.nz</a>. We will respond to your request within a reasonable timeframe.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. The date at the top of this page indicates when the policy was last updated. Continued use of this website after any update constitutes your acceptance of the revised policy.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Contact</h2>
              <p>For privacy enquiries or to exercise your rights under the Privacy Act 2020, contact: <a href="mailto:hello@cover4you.co.nz" className="text-green-700 underline hover:text-green-800">hello@cover4you.co.nz</a></p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
