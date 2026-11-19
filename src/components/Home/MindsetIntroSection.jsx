import React from 'react';
import { motion } from 'framer-motion';
import { TitleReveal } from '../TextReveal';
import platinumLifestyleImg from '../../assets/images/platinum-lifestyle.jpg';

export const MindsetIntroSection = ({ onOpenBooking }) => {
  return (
    <section
      id="mindset-shift"
      className="py-12 sm:py-16 md:py-20 bg-[#F2ECE5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7">
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
              THE INNATE BLISS · Stop Solving. Start Evolving.
            </span>

            <TitleReveal
              as="h2"
              text="You Can't Scale Your Business Beyond the Mindset That Got You Here."
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.15] mb-3.5 tracking-tight"
              highlight="Mindset"
              highlightClass="italic font-display text-[#C78460] font-normal"
            />

            <p className="text-base sm:text-lg font-serif text-[#5A483E] leading-snug mb-4">
              Transform your relationship with money, break through your financial ceiling and develop the mindset to support your next level of business growth.
            </p>

            <div className="space-y-3 text-sm sm:text-[15px] text-[#6B584E] font-light leading-relaxed max-w-2xl mb-6">
              <p>
                At The Innate Bliss, we help business owners, founders and entrepreneurs identify and transform the subconscious money patterns, limiting beliefs and emotional blocks that may be influencing their financial decisions and business growth.
              </p>
              <p className="text-[#2D201A] font-normal">
                Because growing a business isn&apos;t always about doing more. Sometimes, the next breakthrough begins with changing what&apos;s happening within.
              </p>
            </div>

            <div className="flex flex-col items-stretch sm:items-start gap-2.5">
              <button
                type="button"
                onClick={onOpenBooking}
                className="calmlyss-btn calmlyss-btn-primary py-3.5 px-6 text-xs sm:text-sm font-medium inline-flex items-center justify-center w-full sm:w-auto"
              >
                <span>Apply for a Wealth Breakthrough Call</span>
              </button>
              <p className="text-xs sm:text-[13px] text-[#8A766C] leading-relaxed max-w-xl">
                Discover what&apos;s holding you back and explore whether the Quantum Wealth Matrix Method is right for you.
              </p>
            </div>
          </div>

          {/* Right Clean Editorial Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl overflow-hidden border border-[#D9CEC7] shadow-serene aspect-[4/3] bg-[#EAE1D6]">
              <img
                src={platinumLifestyleImg}
                alt="Calm sunlit workspace representing wealth mindset alignment"
                className="block w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
