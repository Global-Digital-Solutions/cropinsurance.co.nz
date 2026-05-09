import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cropSeoPages } from '@/data/crop-pages';
import QuoteForm from '@/components/QuoteForm';
import { cropTypes } from '@/data/crop-types';

export async function generateStaticParams() {
  return cropSeoPages.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = cropSeoPages.find(p => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://cropinsurance.co.nz/crop-insurance/${page.slug}/` },
  };
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-base font-bold text-gray-900 mt-4 mb-2">{line.slice(4)}</h3>);
    } else if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(<li key={i} className="text-gray-700">{lines[i].slice(2)}</li>);
        i++;
      }
      elements.push(<ul key={`ul-${i}`} className="list-disc list-inside space-y-1 my-3 text-sm text-gray-700">{items}</ul>);
      continue;
    } else if (line.startsWith('| ')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!lines[i].includes('---')) {
          const cells = lines[i].split('|').filter(c => c.trim());
          rows.push(cells);
        }
        i++;
      }
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-4">
          <table className="w-full border-collapse border border-gray-200 text-xs">
            <thead>
              <tr className="bg-green-700 text-white">
                {rows[0]?.map((c, j) => <th key={j} className="border border-green-600 px-3 py-2 text-left font-semibold">{c.trim()}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((c, j) => <td key={j} className="border border-gray-200 px-3 py-2 text-gray-700">{c.trim()}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.trim()) {
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) return <strong key={j}>{part.slice(2, -2)}</strong>;
        return part;
      });
      elements.push(<p key={i} className="text-gray-700 leading-relaxed mb-3 text-sm">{rendered}</p>);
    }
    i++;
  }
  return elements;
}

export default async function CropSeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = cropSeoPages.find(p => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <section className="bg-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">{page.title}</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">{page.heroHeading}</h1>
          <p className="text-green-200 text-lg max-w-2xl">{page.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="prose-sm max-w-none">{renderContent(page.content)}</div>
              <div className="mt-10 border-t border-gray-200 pt-8">
                <h3 className="font-bold text-gray-900 mb-4">Browse Crop Types</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {cropTypes.slice(0, 8).map(c => (
                    <Link key={c.slug} href={`/crops/${c.slug}/`} className="group flex flex-col items-center p-3 border border-gray-200 rounded-xl hover:border-green-400 hover:bg-green-50 transition-all text-center">
                      <span className="text-xl mb-1">{c.icon}</span>
                      <span className="text-xs font-medium text-gray-700 group-hover:text-green-700 transition-colors">{c.shortName}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="sticky top-24 space-y-5">
                <QuoteForm variant="sidebar" />
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Quick Links</h3>
                  <ul className="space-y-2">
                    {[
                      ['Compare Providers', '/compare/'],
                      ['Crop Insurance Guide', '/blog/nz-crop-insurance-guide-2026/'],
                      ['About Our Service', '/about/'],
                      ['Making a Claim', '/claims/'],
                    ].map(([label, href]) => (
                      <li key={href}>
                        <Link href={href} className="text-sm text-green-700 hover:text-green-800 font-medium">{label} →</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
