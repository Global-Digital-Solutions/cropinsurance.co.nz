import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Privacy Policy | CropInsurance.co.nz', description: 'Privacy policy for CropInsurance.co.nz. How we collect, use and protect your information.', alternates: { canonical: 'https://cropinsurance.co.nz/privacy/' } };
export default function PrivacyPage() {
  return (
    <>
      <section className="bg-green-900 py-12"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><nav className="flex items-center gap-2 text-xs text-green-300 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Privacy Policy</span></nav><h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1><p className="text-green-300 text-sm mt-2">Last updated: April 2026</p></div></section>
      <section className="py-14 bg-white"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose max-w-none text-sm text-gray-700 space-y-4">
        <p>CropInsurance.co.nz (a trading style of Cover4You) is committed to protecting your privacy in accordance with the Privacy Act 2020 (New Zealand).</p>
        <h2 className="text-lg font-bold text-gray-900">Information We Collect</h2><p>We collect personal information you provide via our quote request form: name, email address, crop type, region, and any additional details you choose to share.</p>
        <h2 className="text-lg font-bold text-gray-900">How We Use Your Information</h2><p>We use your information to connect you with specialist crop insurance advisers and to respond to your enquiries. We do not sell your information to third parties.</p>
        <h2 className="text-lg font-bold text-gray-900">Contact</h2><p>Privacy enquiries: <a href="mailto:hello@cover4you.co.nz" className="text-green-700">hello@cover4you.co.nz</a></p>
      </div></section>
    </>
  );
}
