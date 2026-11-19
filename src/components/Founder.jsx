import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ArrowUpRight, Sparkles } from 'lucide-react';
import { CelestialStar } from './CelestialElements';
import { TitleReveal } from './TextReveal';
import { FOUNDER_BIO, BRAND_INFO } from '../data/siteData';

export const Founder = ({ onOpenBooking, compact = false }) => {
  return (
    <section
      id="founder"
      className="py-16 sm:py-20 md:py-24 bg-[#F2ECE5] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#C78460]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Visual Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28 relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <div className="relative rounded-[2rem] bg-white border border-[#D9CEC7] overflow-hidden shadow-premium">
                <div className="aspect-[4/5] relative overflow-hidden bg-[#F2ECE5]">
                  <img
                    src={BRAND_INFO.coachPayal}
                    alt="Payal Gulati - Founder of The Innate Bliss"
                    className="block w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = BRAND_INFO.founderPhoto;
                    }}
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140F0D]/80 via-transparent to-transparent" />

                  {/* Identity Bottom Pill */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-2xl bg-[#140F0D]/85 backdrop-blur-md border border-white/10 text-white text-center">
                    <h3 className="text-lg font-serif text-white font-light">
                      {FOUNDER_BIO.name}
                    </h3>
                    <p className="text-xs text-[#D9CEC7] font-sans">
                      Founder · Quantum Wealth Matrix Method
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-4 -right-4 p-3.5 rounded-2xl bg-white border border-[#D9CEC7] shadow-premium hidden sm:flex items-center gap-2.5 text-[#2D201A]">
                <div className="w-9 h-9 rounded-xl bg-[#F2ECE5] text-[#866452] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold">200+ Business Owners</div>
                  <div className="text-[10px] text-[#8A766C]">Money Mindset Guided</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Minimal Story & Belief */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
              About Payal
            </span>

            <TitleReveal
              as="h2"
              text="I Was Trying to Change the Fruit While Ignoring the Roots."
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.16] mb-5 tracking-tight"
              highlight="Roots."
              highlightClass="italic font-display text-[#C78460] font-normal"
            />

            <div className="space-y-3.5 text-[#6B584E] font-light text-sm sm:text-base leading-relaxed mb-6">
              <p>
                I was working 14-hour days, yet my income stayed stuck — until I realised that when a tree stops bearing healthy fruit, you don&apos;t fix each fruit individually; you look at the roots.
              </p>
              {compact ? (
                <p>
                  Shifting my own money beliefs and emotional blocks transformed how I thought, decided, and acted on opportunities — becoming the foundation of the <strong className="font-medium text-[#2D201A]">Quantum Wealth Matrix Method</strong>.
                </p>
              ) : (
                <>
                  <p>
                    Our external results are influenced by our beliefs, subconscious patterns, emotional conditioning and the way we perceive ourselves and money.
                  </p>
                  <p>
                    As I began working on my own beliefs and emotional blocks around money, I noticed changes in the way I thought, felt, made decisions and responded to opportunities. That personal journey became the foundation of my Quantum Wealth Matrix Method.
                  </p>
                  <p>
                    Today, I bring together my personal experience, coaching practice and training in transformation modalities to help business owners create a stronger foundation for growth.
                  </p>
                </>
              )}
            </div>

            {/* Minimal Belief Pull-Quote */}
            <blockquote className="p-5 rounded-2xl bg-white border-l-4 border-[#866452] mb-6 shadow-xs">
              <p className="text-base sm:text-lg font-serif text-[#2D201A] font-medium leading-snug mb-1.5">
                &ldquo;A truly fulfilling life is built on four pillars – Money, Health, Relationships and Career.&rdquo;
              </p>
              <span className="text-xs text-[#8A766C]">
                — Payal Gulati, Founder of The Innate Bliss
              </span>
            </blockquote>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              {compact ? (
                <Link
                  to="/about"
                  className="calmlyss-btn calmlyss-btn-primary text-xs"
                >
                  <span>Know More About Payal</span>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="calmlyss-btn calmlyss-btn-primary text-xs"
                >
                  <span>Apply for a Wealth Breakthrough Call</span>
                </button>
              )}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
