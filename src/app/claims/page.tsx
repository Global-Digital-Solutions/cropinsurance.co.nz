import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Making a Crop Insurance Claim NZ | CropInsurance.co.nz',
  description: 'How to make a crop insurance claim in New Zealand. Step-by-step guide, insurer contacts, complaints process, and ICNZ Fair Code information.',
  alternates: { canonical: 'https://cropinsurance.co.nz/claims/' },
};

export default function ClaimsPage() {
  const steps = [
    { step: 1, title: 'Contact Your Broker or Insurer Immediately', desc: 'Notify your broker or insurer as soon as you identify crop damage. Most policies require notification within 24–48 hours of the event. Do not delay — late notification can affect your claim.' },
    { step: 2, title: 'Document All Damage', desc: 'Before touching or harvesting damaged crops, photograph everything thoroughly (close-up and wide-angle). Record the date, time, estimated area affected, and any weather bureau reports or news coverage of the event.' },
    { step: 3, title: 'Do Not Harvest Without Permission', desc: 'Insurers must have the opportunity to inspect damage before you harvest or remediate. Harvesting damaged crops without insurer approval can jeopardise your claim.' },
    { step: 4, title: 'Loss Adjuster Assessment', desc: 'An independent loss adjuster will be appointed to assess your claim. They will physically inspect the affected crop, review your production records, and assess the loss against your policy terms.' },
    { step: 5, title: 'Settlement Offer', desc: 'Once assessment is complete, the insurer will provide a settlement offer. Review it carefully — if you believe it is inaccurate, you have the right to dispute it and request an independent review.' },
    { step: 6, title: 'Appeal if Needed', desc: 'If you disagree with the settlement, refer first to the insurer\'s formal complaints process. If unresolved, escalate to FSCL or IFSO (details below). Your broker should support you throughout.' },
  ];

  const insurers = [
    { name: 'FMG – Farmers Mutual Group', claims: '0800 366 436', website: 'fmg.co.nz' },
    { name: 'Gallagher NZ', claims: '0800 425 524', website: 'gallagher.co.nz' },
    { name: 'Aon New Zealand', claims: '0800 266 276', website: 'aon.co.nz' },
    { name: 'Farmcover NZ', claims: 'Via broker', website: 'farmcover.co.nz' },
    { name: 'Howden Group NZ', claims: 'Via broker', website: 'howdengroup.com/nz' },
  ];

  return (
    <>
      <section className="bg-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">Making a Claim</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Making a Crop Insurance Claim</h1>
          <p className="text-green-200 text-lg max-w-2xl">CropInsurance.co.nz is a referral service, not an insurer or broker. We connect growers with licensed insurance advisers. For claims, contact your insurer or broker directly.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Steps */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Claims Guide</h2>
            <div className="space-y-4">
              {steps.map(s => (
                <div key={s.step} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm">{s.step}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{s.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insurer contacts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Insurer Claims Contacts</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-green-800 text-white"><th className="px-4 py-3 text-left">Insurer</th><th className="px-4 py-3 text-left">Claims Contact</th><th className="px-4 py-3 text-left">Website</th></tr></thead>
                <tbody>
                  {insurers.map((ins, i) => (
                    <tr key={ins.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium text-gray-700">{ins.name}</td>
                      <td className="px-4 py-3 text-gray-700">{ins.claims}</td>
                      <td className="px-4 py-3"><a href={`https://www.${ins.website}`} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">{ins.website} ↗</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Complaints */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Complaints Process (ICNZ Fair Code)</h2>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">Our partner advisers follow the Insurance Council of New Zealand (ICNZ) Fair Insurance Code. Under this code:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 mt-1.5" />Your insurer must <strong>acknowledge your complaint within 5 business days</strong></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 mt-1.5" />Your insurer must <strong>respond substantively within 10 business days</strong></li>
            </ul>
            <p className="text-sm text-gray-700 mt-4 mb-2"><strong>Escalation options:</strong></p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>FSCL</strong> (Financial Services Complaints Ltd): <a href="tel:08003472573" className="text-green-700 font-medium">0800 347 257</a></li>
              <li>• <strong>IFSO</strong> (Insurance & Financial Services Ombudsman): <a href="tel:08008882029" className="text-green-700 font-medium">0800 888 202</a></li>
              <li>• <strong>Service complaints about CropInsurance.co.nz:</strong> <a href="mailto:hello@cover4you.co.nz" className="text-green-700 font-medium">hello@cover4you.co.nz</a></li>
            </ul>
          </div>

          {/* Vulnerable customers */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Support for Vulnerable Customers</h2>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">If you are experiencing financial hardship following a crop loss or need additional support, the following free services are available:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>MoneyTalks</strong> (free financial advice): <a href="tel:08003451239" className="text-green-700 font-medium">0800 345 123</a></li>
              <li>• <strong>Lifeline</strong> (crisis support): <a href="tel:08005433540" className="text-green-700 font-medium">0800 543 354</a></li>
              <li>• <strong>Rural Support Trust</strong>: <a href="tel:0800787254" className="text-green-700 font-medium">0800 787 254</a></li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
