import React from 'react';

export const NavCta = ({ onOpenBooking }) => {
  return (
    <div className="hidden sm:flex items-center gap-2.5 shrink-0">
      <button
        type="button"
        onClick={onOpenBooking}
        className="calmlyss-btn calmlyss-btn-primary !py-2 !px-5 text-[11px] sm:text-xs"
      >
        <span>Book</span>
      </button>
    </div>
  );
};
