import React from 'react';
import { CelestialStar } from '../CelestialElements';

export const FounderQuoteCard = () => {
  return (
    <div className="rounded-[2.5rem] bg-[#191412] border border-[#3A2E28] p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-velvet">
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <CelestialStar className="w-6 h-6 text-[#D4A373] mb-4 animate-glow" />
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic font-light leading-relaxed mb-6 text-[#F9F6F3]">
          “When you change the energy behind your actions, the outcome changes without brute force. Transformation is not an effort of willpower; it is an act of deep internal alignment.”
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-[1px] bg-[#D4A373] opacity-50"></div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4A373] font-medium">
            Payal Gulati — Founder, The Innate Bliss
          </span>
          <div className="w-10 h-[1px] bg-[#D4A373] opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

