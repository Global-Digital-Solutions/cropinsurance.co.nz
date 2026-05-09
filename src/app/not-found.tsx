import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="text-6xl mb-4">🌾</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, we couldn't find the page you were looking for.</p>
        <Link href="/" className="inline-block px-6 py-3 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-colors">Back to Home</Link>
      </div>
    </section>
  );
}
