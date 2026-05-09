import type { Metadata } from 'next';
import Link from 'next/link';
import { faqs } from '@/data/faqs';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Crop Insurance FAQs NZ | Common Questions Answered | CropInsurance.co.nz',
  description: 'Answers to the most common crop insurance questions for NZ growers. Coverage, claims, costs, and more explained by specialist advisers.',
  alternates: { canonical: 'https://cropinsurance.co.nz/faqs/' },
};

const categories = [...new Set(faqs.map(f => f.category))];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cropinsurance.co.nz/' },
    { '@type': 'ListItem', position: 2, name: 'FAQs', item: 'https://cropinsurance.co.nz/faqs/' },
  ],
};

export default function FAQsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">FAQs</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Crop Insurance FAQs</h1>
          <p className="text-green-200 text-lg max-w-2xl">Everything you need to know about crop insurance in New Zealand, answered by our specialist advisers.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {categories.map(cat => (
                <div key={cat}>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{cat}</h2>
                  <div className="space-y-3">
                    {faqs.filter(f => f.category === cat).map(faq => (
                      <details key={faq.question} className="group bg-gray-50 rounded-xl border border-gray-200">
                        <summary className="flex justify-between items-center cursor-pointer p-4 list-none">
                          <span className="font-semibold text-gray-900 text-sm pr-4">{faq.question}</span>
                          <svg className="flex-shrink-0 w-5 h-5 text-green-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-3">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="sticky top-24 space-y-5">
                <QuoteForm variant="sidebar" />
                <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">Can't find your answer?</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">Our specialist advisers can answer any crop insurance question. Get in touch — it's free.</p>
                  <Link href="/contact/" className="block text-center py-2 bg-green-700 text-white text-sm font-bold rounded-lg hover:bg-green-800 transition-colors">Ask an Adviser →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
