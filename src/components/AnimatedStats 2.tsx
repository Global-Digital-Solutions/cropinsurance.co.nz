'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 12, suffix: '+', label: 'Crop Types Covered' },
  { value: 5, suffix: '', label: 'Leading NZ Insurers' },
  { value: 100, suffix: '%', label: 'Free Broker Service' },
  { value: 1, suffix: ' Day', label: 'Response Time' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1200;
        const step = (timestamp: number, startTime: number) => {
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(t => step(t, startTime));
        };
        requestAnimationFrame(t => step(t, t));
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AnimatedStats() {
  return (
    <section className="py-14 bg-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-1">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-green-200 text-sm font-medium uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
