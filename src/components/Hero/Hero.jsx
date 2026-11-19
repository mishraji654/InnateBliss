import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { HeroProofCard } from './HeroProofCard';

export const Hero = ({ onOpenBooking, onOpenVideoClip }) => {
  return (
    <section
      id="hero"
      className="relative lg:min-h-[100dvh] flex items-center pt-[84px] pb-12 sm:pt-28 sm:pb-14 lg:pt-24 lg:pb-14 overflow-x-clip bg-[#F9F6F3]"
    >
      {/* Soothing Background Ambiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D4A373]/20 blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] rounded-full bg-[#EAE1D6]/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-9 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Full Editorial Hero Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-3.5 sm:mb-5 space-y-2 sm:space-y-2.5"
            >
              <h1 className="text-[33px] sm:text-[46px] md:text-[50px] lg:text-[54px] xl:text-[58px] font-serif font-medium text-[#2D201A] leading-[1.06] tracking-tight">
                The 1:1 Money Unblock Call
              </h1>
              <p className="text-[19px] sm:text-2xl md:text-[27px] lg:text-[30px] xl:text-[32px] font-serif font-light text-[#5A483E] leading-[1.26] tracking-tight max-w-md sm:max-w-xl lg:max-w-none mx-auto lg:mx-0">
                That Helps You Break Free From{' '}
                <span className="font-serif italic font-normal text-[#866452]">
                  Financial Anxiety,
                </span>{' '}
                Pressure &amp; Feeling Stuck With Money.
              </p>
            </motion.div>

            {/* Subtext / Description */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mb-5 sm:mb-7"
            >
              <p className="text-[14px] sm:text-base lg:text-[17px] text-[#6B584E] font-sans font-light leading-[1.6] max-w-[330px] sm:max-w-lg mx-auto lg:mx-0">
                Uncover the hidden subconscious blocks running your income and experience an immediate energetic reset.
              </p>
            </motion.div>

            {/* CTAs: Book a 1:1 Call @ ₹99 */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 mb-5 sm:mb-7 w-full max-w-[350px] sm:max-w-none"
            >
              <button
                type="button"
                onClick={onOpenBooking}
                className="calmlyss-btn calmlyss-btn-primary py-3.5 px-6 sm:px-7 text-[13px] sm:text-sm font-medium flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Book a 1:1 Call @ ₹99</span>
                <span className="line-through text-white/60 text-xs font-normal">₹999</span>
              </button>

              <a
                href="#quantum-wealth-matrix"
                className="calmlyss-btn calmlyss-btn-secondary py-3 sm:py-3.5 px-6 text-xs text-center cursor-pointer"
              >
                <span>What Happens in the Call</span>
              </a>
            </motion.div>

            {/* Trust Anchors / Client Signals (Compact Chips on Mobile, Clean Row on Desktop) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="pt-4 sm:pt-5 border-t border-[#D9CEC7]/75 w-full flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-x-6 sm:gap-y-2.5 text-[11px] sm:text-[13px] text-[#6B584E]"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:p-0 rounded-full sm:rounded-none bg-white/80 sm:bg-transparent border border-[#D9CEC7]/70 sm:border-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#866452] shrink-0" />
                <span>1:1 Confidential Coaching</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:p-0 rounded-full sm:rounded-none bg-white/80 sm:bg-transparent border border-[#D9CEC7]/70 sm:border-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#866452] shrink-0" />
                <span>NLP, EFT &amp; Ho&apos;oponopono Mastery</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:p-0 rounded-full sm:rounded-none bg-white/80 sm:bg-transparent border border-[#D9CEC7]/70 sm:border-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#866452] shrink-0" />
                <span>Led by Payal Gulati</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Prominent Video & Proof Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <HeroProofCard onOpenVideoClip={onOpenVideoClip} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
