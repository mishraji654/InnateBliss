import React from 'react';
import { CelestialStar } from './CelestialElements';
import { TitleReveal, LineReveal } from './TextReveal';

export const BookingSection = ({ onOpenBookingModal }) => {
  return (
    <section id="contact" className="py-14 sm:py-16 md:py-20 bg-[#F9F6F3] text-[#2D201A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Main Closing CTA Card Frame */}
        <div className="max-w-4xl mx-auto rounded-3xl sm:rounded-[2.5rem] bg-[#191412] border border-[#3A2E28] p-7 sm:p-12 md:p-14 text-center relative overflow-hidden shadow-velvet">
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#D4A373] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 sm:mb-6">
              <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
              <span>Stop Solving. Start Evolving.</span>
            </div>

            {/* Headline */}
            <TitleReveal
              as="h2"
              text="Your Next Level Begins Within You."
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white font-light leading-[1.14] mb-5 tracking-tight"
              highlight="Within You."
              highlightClass="italic font-display text-[#D4A373] font-normal"
            />

            {/* Supporting Copy */}
            <LineReveal delay={0.15} className="mb-8">
              <div className="space-y-2.5 text-sm sm:text-base text-[#D9CEC7] font-light leading-relaxed max-w-2xl mx-auto">
                <p>
                  You&apos;ve already invested time, effort and energy into building the business you have today.
                </p>
                <p>
                  Perhaps it&apos;s time to work on the patterns that may be holding you back from your next level.
                </p>
                <p className="text-white font-medium pt-1">
                  Stop solving the same problems. Start evolving into the person who can create different results.
                </p>
              </div>
            </LineReveal>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="calmlyss-btn calmlyss-btn-gold py-3.5 px-7 sm:px-9 text-xs sm:text-sm w-full sm:w-auto"
              >
                <span>Apply for a Wealth Breakthrough Call</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
