import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Making a Crop Insurance Claim NZ | CropInsurance.co.nz',
  description: 'How to make a crop insurance claim in New Zealand. Step-by-step guide, insurer contacts, complaints process, and ICNZ Fair Code information.',
  alternates: { canonical: 'https://www.cropinsurance.co.nz/claims/' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Make a Crop Insurance Claim in New Zealand',
  description: 'Step-by-step guide to making a crop insurance claim in NZ, from initial notification through to settlement.',
  totalTime: 'P8W',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Contact Your Broker or Insurer Immediately', text: 'Notify your broker or insurer as soon as you identify crop damage. Most policies require notification within 24–48 hours of the event. Do not delay — late notification can affect your claim.' },
    { '@type': 'HowToStep', position: 2, name: 'Document All Damage', text: 'Before touching or harvesting damaged crops, photograph everything thoroughly (close-up and wide-angle). Record the date, time, estimated area affected, and any weather bureau reports or news coverage of the event.' },
    { '@type': 'HowToStep', position: 3, name: 'Do Not Harvest Without Permission', text: 'Insurers must have the opportunity to inspect damage before you harvest or remediate. Harvesting damaged crops without insurer approval can jeopardise your claim.' },
    { '@type': 'HowToStep', position: 4, name: 'Loss Adjuster Assessment', text: 'An independent loss adjuster will be appointed to assess your claim. They will physically inspect the affected crop, review your production records, and assess the loss against your policy terms.' },
    { '@type': 'HowToStep', position: 5, name: 'Settlement Offer', text: 'Once assessment is complete, the insurer will provide a settlement offer. Review it carefully — if you believe it is inaccurate, you have the right to dispute it and request an independent review.' },
    { '@type': 'HowToStep', position: 6, name: 'Appeal if Needed', text: 'If you disagree with the settlement, refer first to the insurer\'s formal complaints process. If unresolved, escalate to FSCL or IFSO. Your broker should support you throughout.' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cropinsurance.co.nz/' },
    { '@type': 'ListItem', position: 2, name: 'Claims Guide', item: 'https://www.cropinsurance.co.nz/claims/' },
  ],
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

  // Claims contacts removed — use your broker or insurer's policy documents for direct claims numbers

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">Making a Claim</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Making a Crop Insurance Claim</h1>
          <p className="text-green-200 text-lg max-w-2xl">CropInsurance.co.nz is an independent information site. We are not an insurer, a broker, or a licensed financial adviser. We do not arrange claims on your behalf.</p>
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

          {/* Claims contacts */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Finding Your Insurer's Claims Contact</h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Your insurer's claims contact number will be on your policy schedule or Certificate of Insurance. If you arranged cover through a broker, contact your broker first — they will manage the claim notification. If you cannot locate your policy documents, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-green-700 font-medium">hello@cover4you.co.nz</a> and we will help point you to the right contacts.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Contact your broker first', desc: 'If you used a broker to arrange cover, call them immediately. They have direct claims lines and will manage the notification process.' },
                { title: 'Check your policy schedule', desc: 'Your Certificate of Insurance lists the claims contact number and email for your specific insurer.' },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-4 border border-green-200">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Complaints */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Complaints</h2>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">If you need to complain about an insurer, contact them directly first. Most ICNZ member insurers commit to acknowledging complaints within 5 business days and responding substantively within 10 business days.</p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">If your complaint is not resolved, you can escalate it to the insurer&apos;s dispute resolution scheme — either Financial Services Complaints Limited (FSCL) or the Insurance and Financial Services Ombudsman (IFSO) Scheme. Your insurer will tell you which one applies to them.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>FSCL</strong> (Financial Services Complaints Ltd): <a href="tel:08003472573" className="text-green-700 font-medium">0800 347 257</a></li>
              <li>• <strong>IFSO</strong> (Insurance &amp; Financial Services Ombudsman): <a href="tel:08008882029" className="text-green-700 font-medium">0800 888 202</a></li>
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
