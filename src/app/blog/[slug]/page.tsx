import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import QuoteForm from '@/components/QuoteForm';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | CropInsurance.co.nz`,
    description: post.excerpt,
    alternates: { canonical: `https://cropinsurance.co.nz/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.heroImage }],
      type: 'article',
    },
  };
}

function formatAuthorName(fullName: string): string {
  const parts = fullName.trim().split(' ');
  if (parts.length < 2) return fullName;
  return `${parts[0]} ${parts[parts.length - 1][0]}.`;
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-lg font-bold text-gray-900 mt-6 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={i} className="font-bold text-gray-900 mt-4 mb-2">{line.slice(2, -2)}</p>);
    } else if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(<li key={i} className="text-gray-700">{lines[i].slice(2)}</li>);
        i++;
      }
      elements.push(<ul key={`ul-${i}`} className="list-disc list-inside space-y-1.5 my-4 text-gray-700 pl-2">{items}</ul>);
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
        <div key={`table-${i}`} className="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-green-800 text-white">
                {rows[0]?.map((c, j) => <th key={j} className="px-4 py-3 text-left font-semibold border-b border-green-700">{c.trim()}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((c, j) => <td key={j} className="border-b border-gray-100 px-4 py-2.5 text-gray-700">{c.trim()}</td>)}
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
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      elements.push(<p key={i} className="text-gray-700 leading-relaxed mb-4">{rendered}</p>);
    }
    i++;
  }
  return elements;
}

const relatedCropLinks = [
  { href: '/crops/kiwifruit-insurance/', label: 'Kiwifruit Insurance' },
  { href: '/crops/grape-vineyard-insurance/', label: 'Vineyard Insurance' },
  { href: '/crops/apple-pear-insurance/', label: 'Apple & Pear Insurance' },
  { href: '/crops/wheat-grain-insurance/', label: 'Grain Insurance' },
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();
  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3);
  const wordCount = post.content.split(/\s+/).length;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    wordCount,
    articleSection: post.category,
    keywords: post.tags.join(', '),
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: { '@type': 'Organization', name: 'CropInsurance.co.nz' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'CropInsurance.co.nz',
      url: 'https://cropinsurance.co.nz',
      logo: { '@type': 'ImageObject', url: 'https://cropinsurance.co.nz/favicon.svg' },
    },
    image: { '@type': 'ImageObject', url: post.heroImage },
    url: `https://cropinsurance.co.nz/blog/${post.slug}/`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://cropinsurance.co.nz/blog/${post.slug}/` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cropinsurance.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cropinsurance.co.nz/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://cropinsurance.co.nz/blog/${post.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section
        className="relative min-h-[500px] sm:min-h-[600px] flex items-end"
        style={{ backgroundImage: `url(${post.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/75 to-gray-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{post.title}</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full uppercase tracking-wide mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white max-w-4xl leading-tight mb-6">{post.title}</h1>

          {/* Author + meta row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {post.author.name.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div>
                <div className="text-white text-sm font-semibold">{formatAuthorName(post.author.name)}</div>
                <div className="text-green-300 text-xs">{post.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-green-200">
              <span>📅 {new Date(post.publishDate).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>·</span>
              <span>⏱ {post.readTime} min read</span>
              <span>·</span>
              <span>📝 {wordCount.toLocaleString()} words</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mt-5">
            {['✅ ICNZ Licensed Adviser', '🔒 NZ Qualified Broker', '🌿 Specialist Crop Expertise'].map(b => (
              <span key={b} className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Article */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                {/* Lead paragraph */}
                <p className="text-lg text-gray-700 mb-8 leading-relaxed border-l-4 border-green-500 pl-5 bg-green-50 py-4 pr-4 rounded-r-xl font-medium">
                  {post.excerpt}
                </p>

                {/* Article body */}
                <div className="article-body">{renderContent(post.content)}</div>

                {/* Related crops amber block */}
                <div className="mt-10 bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
                  <h3 className="font-bold text-amber-900 text-sm uppercase tracking-wider mb-3">🌾 Related Crop Insurance Pages</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {relatedCropLinks.map(l => (
                      <Link key={l.href} href={l.href} className="text-sm text-amber-800 hover:text-green-700 font-medium hover:underline transition-colors">
                        → {l.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Further reading */}
                {related.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">Further Reading</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {related.map(r => (
                        <Link key={r.slug} href={`/blog/${r.slug}/`} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-green-400 hover:shadow-md transition-all">
                          <img src={r.heroImage} alt={r.title} className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="p-3">
                            <span className="text-xs text-green-700 font-semibold uppercase tracking-wide">{r.category}</span>
                            <h4 className="text-sm font-bold text-gray-900 mt-1 line-clamp-2 group-hover:text-green-700 transition-colors">{r.title}</h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-3">Tags:</span>
                    {post.tags.map(tag => (
                      <span key={tag} className="inline-block mr-2 mb-2 px-3 py-1 bg-gray-100 border border-gray-200 text-xs text-gray-600 rounded-full">{tag}</span>
                    ))}
                  </div>
                )}

                {/* Author card */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
                      {post.author.name.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="font-bold text-gray-900">{formatAuthorName(post.author.name)}</div>
                        <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-bold rounded-full">Verified Expert</span>
                      </div>
                      <div className="text-sm text-green-700 font-medium mb-2">{post.author.role} — CropInsurance.co.nz</div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-white border border-green-200 text-green-800 px-2 py-0.5 rounded-full">ICNZ Fair Code Compliant</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Specialist crop insurance adviser with deep expertise in NZ horticultural and arable risk. Helps growers across the Bay of Plenty, Hawke&apos;s Bay, Marlborough and Canterbury find the right cover for their operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-5">
                {/* Trust badges */}
                <div className="bg-green-900 rounded-2xl p-5 text-white">
                  <h3 className="font-bold text-sm mb-3 text-green-200 uppercase tracking-wider">Why Trust Our Advice</h3>
                  <div className="space-y-2.5">
                    {[
                      { icon: '✅', text: 'ICNZ Fair Insurance Code' },
                      { icon: '🏆', text: 'NZ Licensed Broker Network' },
                      { icon: '🌿', text: 'Specialist Crop Expertise' },
                      { icon: '💰', text: 'Free — No Obligation' },
                      { icon: '⚡', text: 'Fast Turnaround' },
                    ].map(b => (
                      <div key={b.text} className="flex items-center gap-2 text-sm text-green-100">
                        <span>{b.icon}</span>
                        <span>{b.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote form */}
                <QuoteForm variant="sidebar" />

                {/* Explore links */}
                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Explore Insurance By Crop</h3>
                  <div className="space-y-1.5">
                    {relatedCropLinks.map(l => (
                      <Link key={l.href} href={l.href} className="block text-sm text-green-700 hover:text-green-900 hover:underline transition-colors">
                        → {l.label}
                      </Link>
                    ))}
                    <Link href="/crops/" className="block text-sm font-semibold text-green-700 hover:text-green-900 mt-2 transition-colors">
                      View all crops →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
