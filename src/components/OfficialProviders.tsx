export default function OfficialProviders() {
  const providers = [
    {
      name: 'FMG',
      description: 'Specialist in orchard fruit (hail, fire, flood, frost), kiwifruit top-up, and arable crops. Dedicated horticulture and viticulture team with deep NZ rural experience.',
      url: 'https://www.fmg.co.nz/what-we-cover/horticulture-and-viticulture',
      directOnly: true,
    },
    {
      name: 'NZI (via Ag Guard)',
      description: 'Rural material damage cover for horticulturists including greenhouse and growing cost protection. Division of IAG NZ, available through licensed brokers.',
      url: 'https://www.nzi.co.nz/business-cover/rural-insurance',
      directOnly: false,
      brokerNote: 'Via broker only',
    },
    {
      name: 'Gallagher',
      description: 'Agribusiness specialist broker offering crop insurance including replanting costs. Access to specialist NZ and international markets for growers of all scales.',
      url: 'https://www.ajg.co.nz/industries/agriculture/',
      directOnly: false,
    },
    {
      name: 'Aon NZ',
      description: 'Global broker with a Food, Agribusiness and Beverage sector focus. Specialist advice for orchardists, vine growers, and arable farmers across NZ.',
      url: 'https://www.aon.co.nz',
      directOnly: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            Verified Providers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Official provider websites</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The following insurers and brokers offer cover in this area. Links go directly to their official websites.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-2">{p.name}</h3>

              {p.directOnly && (
                <p className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-md px-2 py-1 mb-3">
                  Direct insurer — contact FMG directly, no broker access
                </p>
              )}
              {p.brokerNote && (
                <p className="text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded-md px-2 py-1 mb-3">
                  {p.brokerNote}
                </p>
              )}

              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{p.description}</p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer external"
                className="mt-auto block text-center text-sm font-semibold text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded-xl transition-colors"
              >
                Visit website ↗
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-400 text-center max-w-3xl mx-auto leading-relaxed">
          Cover4You is not affiliated with, endorsed by, or acting as agent for any insurer listed. Some insurers deal with customers directly only.
        </p>
      </div>
    </section>
  );
}
