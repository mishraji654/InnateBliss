import React from 'react';
import { Quote } from 'lucide-react';

export const ClientReflectionCard = ({ item }) => {
  return (
    <div className="card-soothing-white p-7 rounded-[2rem] bg-white border border-[#D9CEC7] hover:border-[#C78460] transition-colors flex flex-col justify-between shadow-xs">
      <div>
        <Quote className="w-6 h-6 text-[#C78460] mb-3 opacity-70" />
        <p className="card-desc text-xs sm:text-sm text-[#43342D] italic font-serif leading-relaxed mb-4">
          "{item.quote}"
        </p>
      </div>
      <div className="pt-4 border-t border-[#D9CEC7]/60">
        <div className="card-title font-semibold text-xs text-[#2D201A]">{item.name}</div>
        <div className="text-[11px] text-[#8A766C]">{item.role}</div>
        <div className="text-[10px] text-[#866452] font-semibold mt-1">✓ {item.outcome}</div>
      </div>
    </div>
  );
};

