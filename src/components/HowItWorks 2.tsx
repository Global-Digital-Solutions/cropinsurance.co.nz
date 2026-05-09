'use client';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    step: '01',
    icon: '📋',
    title: 'Tell Us About Your Crop',
    desc: 'Share your crop type, region, and coverage needs using our simple quote form. Takes under 2 minutes.',
    color: 'bg-green-600',
  },
  {
    step: '02',
    icon: '🔍',
    title: 'We Compare the Market',
    desc: 'Our specialist brokers approach FMG, AJG, Aon, Farmcover and specialist markets simultaneously on your behalf.',
    color: 'bg-green-700',
  },
  {
    step: '03',
    icon: '📊',
    title: 'You Receive Options',
    desc: 'We present a clear side-by-side comparison of policies, coverage terms, and premiums — no jargon, no pressure.',
    color: 'bg-green-800',
  },
  {
    step: '04',
    icon: '✅',
    title: 'Cover Arranged',
    desc: 'Choose your preferred policy and your broker arranges everything. Ongoing support for renewals and claims.',
    color: 'bg-green-900',
  },
];

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How CropInsurance.co.nz Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We do the hard work comparing multiple providers — from enquiry to cover in as little as one business day.</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-green-600 via-green-700 to-green-900 z-0 rounded-full" />

          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`relative z-10 flex flex-col items-center text-center px-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Step circle */}
              <div className={`w-16 h-16 ${s.color} rounded-full flex items-center justify-center shadow-lg mb-5 border-4 border-white ring-2 ring-green-200`}>
                <span className="text-2xl">{s.icon}</span>
              </div>

              {/* Step number badge */}
              <span className="absolute top-0 right-[calc(50%-2.5rem)] bg-green-600 text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow">{i + 1}</span>

              <div className={`bg-white rounded-2xl p-6 shadow-md border-2 ${visible ? 'border-green-600' : 'border-gray-100'} transition-colors duration-700 w-full`} style={{ transitionDelay: `${i * 150}ms` }}>
                <span className="text-xs font-black text-green-700 uppercase tracking-widest">Step {s.step}</span>
                <h3 className="text-base font-bold text-gray-900 mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>

              {/* Mobile arrow */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/contact/" className="inline-block px-8 py-3 bg-green-700 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-sm shadow-lg">
            Start Your Free Comparison →
          </a>
        </div>
      </div>
    </section>
  );
}
