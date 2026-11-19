import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Feather, Sparkles, TrendingUp, ArrowUpRight } from 'lucide-react';
import { CelestialStar } from '../CelestialElements';
import { TitleReveal, LineReveal } from '../TextReveal';
import { PillarCard } from './PillarCard';
import { FounderQuoteCard } from './FounderQuoteCard';
import { CORE_PILLARS, BRAND_INFO } from '../../data/siteData';

const pillarIcons = {
  Compass: Compass,
  Feather: Feather,
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
};

export const Philosophy = ({ compact = false }) => {
  return (
    <section id="philosophy" className="py-16 sm:py-20 md:py-24 bg-[#F2ECE5] relative overflow-hidden">
      {/* Delicate background ornament */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C78460]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-3 shadow-xs">
            <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
            <span>The Innate Bliss Philosophy</span>
          </div>

          <TitleReveal
            as="h2"
            text="The Bridge Between Inner Subconscious Reality & Tangible World Outcomes."
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.18] tracking-tight mb-4"
            highlight="Inner"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <LineReveal delay={0.2}>
            <p className="text-xs sm:text-sm md:text-base text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto">
              Your outer reality cannot sustain what your nervous system and subconscious mind believe is unsafe to hold. We rewire the underlying energetic software.
            </p>
          </LineReveal>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
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

        {compact ? (
          <div className="text-center pt-2">
            <Link
              to="/philosophy"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#866452] hover:text-[#2D201A] transition-colors group"
            >
              <span>Explore Our Full 4-Pillar Philosophy</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        ) : (
          <FounderQuoteCard />
        )}

      </div>
    </section>
  );
};
