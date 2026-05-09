'use client';
import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const isWhite = variant === 'white';
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <div className="relative flex-shrink-0">
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill={isWhite ? 'rgba(255,255,255,0.15)' : '#15803d'} />
          <path d="M20 8 C20 8 10 14 10 22 C10 28 15 32 20 32 C25 32 30 28 30 22 C30 14 20 8 20 8Z" fill={isWhite ? 'white' : '#4ade80'} opacity="0.9"/>
          <path d="M20 14 C20 14 13 18 13 24 C16 23 19 20 20 14Z" fill={isWhite ? 'rgba(255,255,255,0.5)' : '#15803d'} />
          <line x1="20" y1="32" x2="20" y2="26" stroke={isWhite ? 'white' : '#4ade80'} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-[15px] sm:text-[17px] font-black uppercase tracking-widest ${isWhite ? 'text-white' : 'text-gray-900'}`}>
          CROP
        </span>
        <span className={`text-[15px] sm:text-[17px] font-black uppercase tracking-widest ${isWhite ? 'text-green-300' : 'text-green-700'}`}>
          INSURANCE
        </span>
      </div>
    </Link>
  );
}
