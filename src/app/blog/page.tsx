import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Crop Insurance Blog & Guides NZ | CropInsurance.co.nz',
  description: 'Expert guides on crop insurance for NZ growers. Kiwifruit, vineyard, arable, and horticulture insurance explained by specialist advisers.',
  alternates: { canonical: 'https://cropinsurance.co.nz/blog/' },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <section className="bg-green-900 py-16" style={{ backgroundImage: `url(${featured.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-green-950/80" style={{ position: 'relative' }}>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-green-300 mb-6">
              <Link href="/" className="hover:text-white">Home</Link><span>/</span>
              <span className="text-white">Blog</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-white mb-2">Crop Insurance Guides & Insights</h1>
            <p className="text-green-200 text-lg max-w-2xl">Expert advice for NZ growers from specialist rural insurance advisers.</p>
            <div className="mt-8">
              <Link href={`/blog/${featured.slug}/`} className="group block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all max-w-3xl">
                <img src={featured.heroImage} alt={featured.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-xs font-medium text-green-300 uppercase tracking-wide">{featured.category} · {featured.readTime} min read</span>
                  <h2 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-green-300 transition-colors">{featured.title}</h2>
                  <p className="text-sm text-green-200 line-clamp-2">{featured.excerpt}</p>
                  <span className="mt-3 inline-flex text-sm font-semibold text-green-300">Read article →</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-green-700 uppercase tracking-wide">{post.category}</span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-2 text-sm leading-snug group-hover:text-green-700 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.author.name}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
