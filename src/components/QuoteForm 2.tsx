'use client';
import { useState } from 'react';

interface QuoteFormProps {
  variant?: 'hero' | 'sidebar' | 'full';
  cropType?: string;
}

export default function QuoteForm({ variant = 'hero', cropType = '' }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-6 text-center shadow-xl">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
        <p className="text-gray-600 text-sm">A specialist crop insurance adviser will be in touch within one business day.</p>
      </div>
    );
  }

  const isSidebar = variant === 'sidebar';

  return (
    <div className={`bg-white rounded-2xl shadow-xl ${isSidebar ? 'p-5' : 'p-6 sm:p-8'}`}>
      {!isSidebar && (
        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-900">Get a Free Crop Insurance Quote</h2>
          <p className="text-sm text-gray-500 mt-1">Our specialist brokers compare FMG, AJG, Aon and more — free, no obligation.</p>
        </div>
      )}
      {isSidebar && (
        <div className="mb-4">
          <h3 className="text-base font-bold text-gray-900">Get a Free Quote</h3>
          <p className="text-xs text-gray-500 mt-0.5">Specialist broker advice, no obligation.</p>
        </div>
      )}

      <form
        action="https://shiny-bush-41cd.darinbutler.workers.dev"
        method="POST"
        onSubmit={() => setTimeout(() => setSubmitted(true), 500)}
        className="space-y-3"
      >
        <input type="hidden" name="_subject" value="Crop Insurance Quote Request — CropInsurance.co.nz" />
        <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
        <input type="hidden" name="_next" value="https://cropinsurance.co.nz/thank-you/" />
        <input type="hidden" name="_captcha" value="false" />
        {cropType && <input type="hidden" name="crop_type" value={cropType} />}

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">First Name *</label>
            <input type="text" name="first_name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="John" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Last Name *</label>
            <input type="text" name="last_name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Smith" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
          <input type="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="john@example.com" />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Crop Type *</label>
          <select name="crop_type_select" required className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white">
            <option value="">Select your main crop...</option>
            <option value="Kiwifruit">Kiwifruit</option>
            <option value="Apples & Pears">Apples & Pears</option>
            <option value="Grapes / Vineyard">Grapes / Vineyard</option>
            <option value="Stone Fruit (cherries, peaches, etc.)">Stone Fruit (cherries, peaches, etc.)</option>
            <option value="Avocados">Avocados</option>
            <option value="Hops">Hops</option>
            <option value="Wheat / Barley / Grain">Wheat / Barley / Grain</option>
            <option value="Maize">Maize</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Berries">Berries</option>
            <option value="Flowers / Ornamentals">Flowers / Ornamentals</option>
            <option value="Multiple Crops">Multiple Crops</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Region *</label>
          <select name="region" required className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white">
            <option value="">Select your region...</option>
            <option>Bay of Plenty</option>
            <option>Hawke's Bay</option>
            <option>Marlborough</option>
            <option>Canterbury</option>
            <option>Central Otago</option>
            <option>Northland</option>
            <option>Waikato</option>
            <option>Nelson / Tasman</option>
            <option>Gisborne / Tairāwhiti</option>
            <option>Southland</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Estimated Crop Value (NZD)</label>
          <select name="crop_value" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white">
            <option value="">Approximate value...</option>
            <option>Under $50,000</option>
            <option>$50,000 – $150,000</option>
            <option>$150,000 – $500,000</option>
            <option>$500,000 – $1 million</option>
            <option>Over $1 million</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Message (optional)</label>
          <textarea name="message" rows={isSidebar ? 2 : 3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none" placeholder="Tell us about your operation, specific risks, or any questions..." />
        </div>

        <button type="submit" className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition-colors text-sm shadow-sm">
          Get My Free Quote →
        </button>
        <p className="text-xs text-gray-400 text-center">No obligation, no pitch. A specialist adviser will contact you shortly.</p>
      </form>
    </div>
  );
}
