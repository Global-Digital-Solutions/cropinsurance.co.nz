import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Thank You | CropInsurance.co.nz', description: 'Thank you for your enquiry. A specialist crop insurance adviser will be in touch within one business day.' };
export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Quote Request Received!</h1>
        <p className="text-lg text-gray-600 mb-6">A specialist crop insurance adviser from our broker network will be in touch within one business day to discuss your requirements and provide comparative quotes.</p>
        <p className="text-sm text-gray-500 mb-8">In the meantime, explore our crop insurance guides and comparison tools.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-6 py-3 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-colors">Back to Home</Link>
          <Link href="/blog/" className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">Read Our Guides</Link>
        </div>
      </div>
    </section>
  );
}
