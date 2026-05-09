import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Terms of Use | CropInsurance.co.nz', description: 'Terms of use for CropInsurance.co.nz.', alternates: { canonical: 'https://cropinsurance.co.nz/terms/' } };
export default function TermsPage() {
  return (
    <>
      <section className="bg-green-900 py-12"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><nav className="flex items-center gap-2 text-xs text-green-300 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Terms of Use</span></nav><h1 className="text-3xl font-extrabold text-white">Terms of Use</h1></div></section>
      <section className="py-14 bg-white"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose max-w-none text-sm text-gray-700 space-y-4">
        <p>By using CropInsurance.co.nz you agree to these terms. This website is operated by Cover4You as a referral service connecting growers with licensed insurance advisers.</p>
        <h2 className="text-lg font-bold text-gray-900">General Information Only</h2><p>The content on this site is general information only and does not constitute financial or insurance advice. Always read the relevant Product Disclosure Statement before taking out insurance.</p>
        <h2 className="text-lg font-bold text-gray-900">No Liability</h2><p>Cover4You accepts no liability for decisions made based on information provided on this website. Insurance products and pricing are subject to change without notice.</p>
        <h2 className="text-lg font-bold text-gray-900">Contact</h2><p><a href="mailto:hello@cover4you.co.nz" className="text-green-700">hello@cover4you.co.nz</a></p>
      </div></section>
    </>
  );
}
