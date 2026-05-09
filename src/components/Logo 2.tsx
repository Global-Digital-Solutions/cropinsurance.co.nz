'use client';
import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const isWhite = variant === 'white';
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      <div className="flex flex-col leading-none">
        <span className={`text-[17px] sm:text-[19px] font-black uppercase tracking-widest ${isWhite ? 'text-white' : 'text-gray-900'}`}>
          CROP
        </span>
        <span className={`text-[17px] sm:text-[19px] font-black uppercase tracking-widest ${isWhite ? 'text-green-300' : 'text-green-700'}`}>
          INSURANCE
        </span>
      </div>
    </Link>
  );
}
