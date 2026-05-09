'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const cropLinks = [
  { href: '/crops/kiwifruit-insurance/', label: 'Kiwifruit' },
  { href: '/crops/apple-pear-insurance/', label: 'Apples & Pears' },
  { href: '/crops/grape-vineyard-insurance/', label: 'Grapes & Vineyards' },
  { href: '/crops/stone-fruit-insurance/', label: 'Stone Fruit' },
  { href: '/crops/avocado-insurance/', label: 'Avocados' },
  { href: '/crops/hops-insurance/', label: 'Hops' },
  { href: '/crops/wheat-grain-insurance/', label: 'Wheat & Grain' },
  { href: '/crops/maize-insurance/', label: 'Maize' },
  { href: '/crops/berry-insurance/', label: 'Berries' },
  { href: '/crops/vegetable-crop-insurance/', label: 'Vegetables' },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCropsOpen, setIsCropsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Crops Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors flex items-center gap-1">
                Crops
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-52 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                {cropLinks.map(l => (
                  <Link key={l.href} href={l.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 first:rounded-t-lg last:rounded-b-lg">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/growers/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">Grower Types</Link>
            <Link href="/compare/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">Compare</Link>
            <Link href="/blog/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">Blog</Link>
            <Link href="/claims/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">Claims</Link>
            <Link href="/faqs/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">FAQs</Link>
          </nav>

          {/* CTA */}
          <Link href="/contact/" className="hidden sm:inline-block px-5 py-2 bg-green-700 text-white rounded-lg font-semibold text-sm hover:bg-green-800 transition-colors shadow-sm">
            Get a Free Quote
          </Link>

          {/* Hamburger */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-1">
            <button onClick={() => setIsCropsOpen(!isCropsOpen)} className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50 flex justify-between items-center">
              Crops
              <svg className={`w-4 h-4 transition-transform ${isCropsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCropsOpen && (
              <div className="bg-gray-50">
                {cropLinks.map(l => (
                  <Link key={l.href} href={l.href} onClick={() => setIsMenuOpen(false)} className="block px-8 py-2 text-sm text-gray-700 hover:text-green-700">
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/growers/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50">Grower Types</Link>
            <Link href="/compare/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50">Compare</Link>
            <Link href="/blog/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50">Blog</Link>
            <Link href="/claims/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50">Claims</Link>
            <Link href="/faqs/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50">FAQs</Link>
            <div className="px-4 pt-3 border-t border-gray-200 mt-2">
              <Link href="/contact/" onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-4 py-2 bg-green-700 text-white rounded-lg font-semibold text-sm hover:bg-green-800 transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
