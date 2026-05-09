export default function TrustBar() {
  const items = [
    { icon: '🌿', label: 'NZ Crop Specialists' },
    { icon: '🤝', label: 'Free Broker Advice' },
    { icon: '⚡', label: 'Fast Turnaround' },
    { icon: '🔒', label: 'Fair Practice Standard' },
    { icon: '🌾', label: 'We Compare Leading Insurers' },
    { icon: '📋', label: 'No Obligation Quotes' },
  ];
  return (
    <div className="bg-green-900 border-y border-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {items.map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-base">{item.icon}</span>
              <span className="text-xs font-semibold text-green-100 uppercase tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
