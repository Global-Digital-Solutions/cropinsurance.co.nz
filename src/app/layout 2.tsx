import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://cropinsurance.co.nz'),
  title: { default: 'Crop Insurance NZ | Compare Quotes for Every Crop | CropInsurance.co.nz', template: '%s | CropInsurance.co.nz' },
  description: 'Compare crop insurance for kiwifruit, grapes, apples, wheat, hops and all NZ crops. Free quotes from FMG, AJG, Aon, Farmcover and more. Specialist rural broker advice.',
  keywords: ['crop insurance NZ', 'kiwifruit insurance', 'vineyard insurance', 'orchard insurance', 'horticulture insurance', 'farm insurance New Zealand'],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://cropinsurance.co.nz',
    siteName: 'CropInsurance.co.nz',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NZ Crop Insurance Comparison' }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className="h-full scroll-smooth">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6745344450942342" crossOrigin="anonymous" />
      </head>
      <body className="h-full antialiased" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
