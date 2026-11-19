import React from 'react';

export const FaqItem = ({ item, idx, isOpen, onToggle }) => {
  return (
    <div className="rounded-2xl bg-white border border-[#D9CEC7] overflow-hidden transition-colors shadow-xs">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 text-[#2D201A] hover:text-[#866452] transition-colors"
      >
        <span className="text-sm sm:text-base font-serif font-medium">
          {item.question}
        </span>
        <span className="text-[#C78460] font-mono text-xl shrink-0 font-light">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-xs sm:text-sm text-[#6B584E] leading-relaxed border-t border-[#D9CEC7]/50 pt-3 font-light">
          {item.answer}
        </div>
      )}
    </div>
  );
};

