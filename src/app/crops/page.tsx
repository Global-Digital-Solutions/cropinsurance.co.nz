import type { Metadata } from 'next';
import Link from 'next/link';
import { cropTypes } from '@/data/crop-types';

export const metadata: Metadata = {
  title: 'Crop Insurance Types NZ | All Crops Covered | CropInsurance.co.nz',
  description: 'Specialist crop insurance for kiwifruit, apples, grapes, wheat, hops, stone fruit, avocados, berries and more. Compare NZ crop insurance by crop type.',
  alternates: { canonical: 'https://cropinsurance.co.nz/crops/' },
};

export default function CropsIndexPage() {
  return (
    <>
      <section className="bg-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Crop Types</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Crop Insurance by Crop Type</h1>
          <p className="text-green-200 text-lg max-w-2xl">Find specialist insurance information and free quotes for every major NZ crop — from kiwifruit and grapes to wheat and vegetables.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {cropTypes.map(crop => (
              <Link key={crop.slug} href={`/crops/${crop.slug}/`} className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-green-400 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{crop.icon}</div>
                <h2 className="font-bold text-gray-900 text-sm group-hover:text-green-700 transition-colors mb-1">{crop.name}</h2>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">{crop.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-700 font-semibold">From {crop.typicalPremiumRange.split('–')[0].trim()}/yr</span>
                  <span className="text-xs text-green-700 font-semibold">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
