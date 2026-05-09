import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Disclaimer | CropInsurance.co.nz', description: 'Disclaimer for CropInsurance.co.nz crop insurance comparison service.' };
export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-green-900 py-12"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 className="text-3xl font-extrabold text-white">Disclaimer</h1></div></section>
      <section className="py-14 bg-white"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose max-w-none text-sm text-gray-700 space-y-4">
        <p>CropInsurance.co.nz is a referral and comparison service operated by Cover4You. We are not an insurer, underwriter, or insurance adviser. Our partner advisers are licensed under the Financial Markets Conduct Act 2013.</p>
        <p>Premium ranges shown are indicative only and are not quotes. Actual premiums depend on individual risk assessment by the insurer. Coverage terms vary between insurers and policies.</p>
        <p>Past claims experience does not guarantee future policy terms. Insurance products may be withdrawn or amended by insurers without notice.</p>
      </div></section>
    </>
  );
}
