import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass } from 'lucide-react';
import { CelestialStar } from '../CelestialElements';
import { TitleReveal, LineReveal } from '../TextReveal';
import { ProgramCard } from './ProgramCard';
import { PROGRAMS } from '../../data/siteData';

export const Services = ({ onOpenBooking, featuredOnly = false }) => {
  const displayPrograms = featuredOnly ? PROGRAMS.slice(0, 3) : PROGRAMS;

  return (
    <section id="programs" className="py-16 sm:py-20 md:py-24 bg-[#F9F6F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-3 shadow-xs">
              <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
              <span>Curated Transformation Pathways</span>
            </div>

            <TitleReveal
              as="h2"
              text="Signature Programs & 1:1 Transformation Immersions"
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.18] mb-3 tracking-tight"
              highlight="Transformation"
              highlightClass="italic font-display text-[#C78460] font-normal"
            />

            <LineReveal delay={0.2}>
              <p className="text-xs sm:text-sm md:text-base text-[#6B584E] font-light leading-relaxed">
                Targeted neuro-somatic immersions to dismantle subconscious ceilings and establish sustained external flow.
              </p>
            </LineReveal>
          </div>

          {featuredOnly && (
            <Link
              to="/programs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#866452] hover:text-[#2D201A] transition-colors shrink-0 group self-start md:self-end"
            >
              <span>View All 6 Immersions</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          )}
        </div>

        {/* Compact Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {displayPrograms.map((program, idx) => (
            <ProgramCard
              key={program.id}
              program={program}
              idx={idx}
              onOpenBooking={onOpenBooking}
            />
          ))}
        </div>

        {/* View All Programs CTA if on HomePage */}
        {featuredOnly && (
          <div className="text-center pt-2">
            <Link
              to="/programs"
              className="calmlyss-btn calmlyss-btn-secondary text-xs"
            >
              <span>Explore All 6 Pathways & Curriculums</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
