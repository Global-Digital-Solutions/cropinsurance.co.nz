export default function HowItWorks() {
  const steps = [
    { step: '01', icon: '📋', title: 'Understand Your Risk', desc: 'Use our guides to explore what crop insurance is available for your crop type, region, and scale of operation.' },
    { step: '02', icon: '🔍', title: 'Compare the Market', desc: 'Review side-by-side comparisons of the specialist brokers and insurers active in the NZ crop insurance market.' },
    { step: '03', icon: '📞', title: 'Contact a Specialist', desc: 'Reach out to a licensed rural insurance broker or insurer directly — use the IBANZ directory or FSP register to find one.' },
    { step: '04', icon: '✅', title: 'Arrange Cover', desc: 'Work with your chosen broker or insurer to arrange cover suited to your operation, crop type, and risk profile.' },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How CropInsurance.co.nz Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Independent information to help you understand, compare, and arrange crop insurance — at your own pace and on your terms.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-green-200 z-0" style={{ width: 'calc(100% - 2rem)', left: 'calc(50% + 2rem)' }} />
              )}
              <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {s.icon}
                </div>
                <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Step {s.step}</span>
                <h3 className="text-base font-bold text-gray-900 mt-1 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
