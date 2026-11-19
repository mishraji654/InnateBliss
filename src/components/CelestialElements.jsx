import React from 'react';

export const CelestialStar = ({ className = "w-4 h-4 text-gold-champagne", style = {} }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    style={style}
    aria-hidden="true"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export const CrescentMoon = ({ className = "w-6 h-6 text-gold-champagne", style = {} }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    className={className} 
    style={style}
    aria-hidden="true"
  >
    <path 
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
      fill="currentColor" 
      fillOpacity="0.15"
    />
  </svg>
);

export const CelestialRing = ({ className = "w-32 h-32 text-gold-300", style = {} }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    className={className} 
    style={style}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
    <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.6" />
    <line x1="50" y1="2" x2="50" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="50" y1="88" x2="50" y2="98" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="2" y1="50" x2="12" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="88" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
);

export const ConstellationVector = ({ className = "w-48 h-32 text-gold-champagne", style = {} }) => (
  <svg 
    viewBox="0 0 200 120" 
    fill="none" 
    className={className} 
    style={style}
    aria-hidden="true"
  >
    <circle cx="20" cy="30" r="2.5" fill="currentColor" />
    <circle cx="70" cy="50" r="3" fill="currentColor" />
    <circle cx="120" cy="25" r="2" fill="currentColor" />
    <circle cx="160" cy="70" r="3.5" fill="currentColor" />
    <circle cx="185" cy="40" r="2" fill="currentColor" />
    <circle cx="95" cy="95" r="2.5" fill="currentColor" />
    
    <path 
      d="M20 30L70 50L120 25L185 40L160 70L95 95L70 50" 
      stroke="currentColor" 
      strokeWidth="0.75" 
      strokeDasharray="2 2" 
      opacity="0.3" 
    />
  </svg>
);

export const GoldDivider = ({ className = "my-8" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-400 opacity-60"></div>
    <CelestialStar className="w-3 h-3 text-gold-500 opacity-80" />
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-400 opacity-60"></div>
  </div>
);

