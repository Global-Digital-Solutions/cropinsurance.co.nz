import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cropinsurance.co.nz'),
  title: { default: 'Crop Insurance NZ | Get a Quote | CropInsurance.co.nz', template: '%s | CropInsurance.co.nz' },
  description: 'Compare crop insurance for kiwifruit, grapes, apples, wheat, hops and all NZ crops. Specialist rural broker advice — access to NZ and international underwriters.',
  keywords: ['crop insurance NZ', 'kiwifruit insurance', 'vineyard insurance', 'orchard insurance', 'horticulture insurance', 'farm insurance New Zealand'],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.cropinsurance.co.nz',
    siteName: 'CropInsurance.co.nz',
    images: [{ url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&h=630&q=80', width: 1200, height: 630, alt: 'CropInsurance.co.nz — Specialist crop insurance for NZ growers' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  authors: [{ name: 'CropInsurance.co.nz', url: 'https://www.cropinsurance.co.nz' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.cropinsurance.co.nz/#organization',
  name: 'CropInsurance.co.nz',
  legalName: 'Cover4You (GDS)',
  url: 'https://www.cropinsurance.co.nz',
  description: 'Specialist crop insurance comparison and broker referral for NZ growers — kiwifruit, grapes, apples, wheat, hops and all crop types.',
  contactPoint: { '@type': 'ContactPoint', email: 'hello@cover4you.co.nz', contactType: 'customer service', areaServed: 'NZ' },
  areaServed: { '@type': 'Country', name: 'New Zealand' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.cropinsurance.co.nz/#website',
  url: 'https://www.cropinsurance.co.nz',
  name: 'CropInsurance.co.nz',
  publisher: { '@id': 'https://www.cropinsurance.co.nz/#organization' },
  inLanguage: 'en-NZ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className="h-full scroll-smooth">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6745344450942342" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="h-full antialiased" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
