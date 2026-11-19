import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Feather, Sparkles, TrendingUp, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { CelestialStar } from '../components/CelestialElements';
import { TitleReveal, LineReveal } from '../components/TextReveal';
import { PillarCard } from '../components/Philosophy/PillarCard';
import { FounderQuoteCard } from '../components/Philosophy/FounderQuoteCard';
import { CORE_PILLARS, BRAND_INFO } from '../data/siteData';
import { Link } from 'react-router-dom';

const pillarIcons = {
  Compass: Compass,
  Feather: Feather,
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
};

export const PhilosophyPage = ({ onOpenBooking }) => {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F9F6F3]">

      {/* 1. Page Header */}
      <section className="py-16 sm:py-24 bg-[#F9F6F3] border-b border-[#D9CEC7]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 shadow-xs">
            <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
            <span>Core Brand Philosophy</span>
          </div>

          <TitleReveal
            as="h1"
            text="The Subconscious Reality Behind Outer Success"
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2D201A] leading-[1.12] mb-6 max-w-4xl mx-auto tracking-tight"
            highlight="Subconscious"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <LineReveal delay={0.25}>
            <p className="text-base sm:text-lg md:text-xl text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto mb-8">
              True abundance is never created through relentless struggle against internal resistance. It is born when your subconscious mind and somatic nervous system normalize receiving ease, wealth, and peace.
            </p>
          </LineReveal>

          <div className="flex justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="calmlyss-btn calmlyss-btn-primary"
            >
              <span>Book</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              to="/programs"
              className="calmlyss-btn calmlyss-btn-secondary"
            >
              <span>Explore Immersions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Deep Dive Editorial: Why Willpower Fails */}
      <section className="py-20 sm:py-28 bg-[#F2ECE5]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C78460] font-semibold mb-2 block">
                The Science of Invisible Ceilings
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-snug mb-4">
                Why 95% of Strategic Decisions are Driven by Subconscious Memory
              </h2>
              <p className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed mb-4">
                You can read every business book, hire tactical consultants, and work 14-hour days. Yet if your nervous system was conditioned in childhood to associate wealth with conflict, scarcity guilt, or abandonment, your subconscious mind will quietly sabotage your breakthrough.
              </p>
              <p className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed">
                At The Innate Bliss, we do not treat the symptoms of burnout or plateaus. We reprogram the underlying neuro-energetic software governing your reality.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-[#D9CEC7] shadow-premium">
              <div className="w-12 h-12 rounded-2xl bg-[#F2ECE5] text-[#866452] flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#2D201A] font-medium mb-3">
                The Nervous System Capacity Principle
              </h3>
              <p className="text-xs sm:text-sm text-[#6B584E] leading-relaxed mb-4">
                "Your capacity to hold money is exactly equal to your nervous system's capacity to tolerate safety in peace. When peace feels foreign, stress is unconsciously recreated."
              </p>
              <div className="pt-4 border-t border-[#D9CEC7]/60 flex items-center gap-2 text-xs font-semibold text-[#866452]">
                <ShieldCheck className="w-4 h-4" />
                <span>The Innate Bliss Axiom</span>
              </div>
            </div>
          </div>

          {/* Real Brand Divider */}
          <div className="flex justify-center mb-16">
            <img
              src={BRAND_INFO.divider}
              alt="Brand divider"
              className="h-5 w-auto opacity-70 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* 4 Pillars Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[#2D201A]">
              The Four Pillars of Subconscious Alignment
            </h2>
            <p className="text-xs text-[#8A766C] uppercase tracking-widest mt-1">
              Methodical, Repeatable Inner Calibration
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {CORE_PILLARS.map((pillar, idx) => {
              const IconComponent = pillarIcons[pillar.icon] || Sparkles;
              return (
                <PillarCard
                  key={pillar.number}
                  pillar={pillar}
                  idx={idx}
                  IconComponent={IconComponent}
                />
              );
            })}
          </div>

          {/* Founder Quote Card */}
          <FounderQuoteCard />
        </div>
      </section>

      {/* 3. Closing Philosophy Call to Action */}
      <section className="py-20 bg-[#F9F6F3] border-t border-[#D9CEC7] text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-serif text-[#2D201A] mb-4">
            Experience the Shift in Your Own Life
          </h2>
          <p className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed mb-8">
            Book an initial 1:1 conversation with Payal to diagnose your primary subconscious loyalty pattern.
          </p>
          <button
            onClick={onOpenBooking}
            className="calmlyss-btn calmlyss-btn-primary"
          >
            <span>Schedule Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};

