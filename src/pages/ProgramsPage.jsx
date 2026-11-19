import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowUpRight, Sparkles } from 'lucide-react';
import { CelestialStar } from '../components/CelestialElements';
import { TitleReveal, LineReveal } from '../components/TextReveal';
import { ProgramCard } from '../components/Programs/ProgramCard';
import { PROGRAMS } from '../data/siteData';

export const ProgramsPage = ({ onSelectProgram, onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Immersions' },
    { id: 'money', label: 'Money & Wealth Mastery' },
    { id: 'emotional', label: 'Emotional & Somatic Healing' },
    { id: 'relational', label: 'Relationships & Daily Habits' },
  ];

  const filteredPrograms = PROGRAMS.filter((p) => {
    if (activeFilter === 'money') return p.id.includes('money') || p.id.includes('abundance');
    if (activeFilter === 'emotional') return p.id.includes('emotional') || p.id.includes('detox');
    if (activeFilter === 'relational') return p.id.includes('relationship') || p.id.includes('challenge');
    return true;
  });

  return (
    <div className="pt-28 sm:pt-36 bg-[#F9F6F3]">
      
      {/* 1. Page Header */}
      <section className="py-16 sm:py-24 bg-[#F9F6F3] border-b border-[#D9CEC7]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 shadow-xs">
            <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
            <span>Curated Transformation Pathways</span>
          </div>

          <TitleReveal
            as="h1"
            text="Explore Our Signature Programs & Immersions"
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2D201A] leading-[1.12] mb-6 max-w-4xl mx-auto tracking-tight"
            highlight="Signature"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <LineReveal delay={0.25}>
            <p className="text-base sm:text-lg md:text-xl text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Each pathway is custom-engineered to dismantle subconscious resistance, recalibrate emotional set-points, and establish sustained external flow.
            </p>
          </LineReveal>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                  activeFilter === cat.id
                    ? 'bg-[#866452] text-white shadow-serene'
                    : 'bg-white text-[#6B584E] border border-[#D9CEC7] hover:border-[#C78460]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Programs Directory Grid */}
      <section className="py-20 sm:py-28 bg-[#F9F6F3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
            {filteredPrograms.map((program, idx) => (
              <ProgramCard
                key={program.id}
                program={program}
                idx={idx}
                onSelectProgram={onSelectProgram}
                onOpenBooking={onOpenBooking}
              />
            ))}
          </div>

          {/* Diagnostic Help Banner */}
          <div className="p-8 sm:p-10 rounded-[2rem] bg-[#F2ECE5] border border-[#D9CEC7] flex flex-col md:flex-row items-center justify-between gap-6 shadow-serene">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#866452] text-white flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-medium text-[#2D201A]">
                  Need personalized guidance on where to begin?
                </h4>
                <p className="text-xs text-[#6B584E] font-sans mt-0.5">
                  Book a 90-minute Money & Mindset Diagnostic call with Payal to pinpoint your immediate bottleneck.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="calmlyss-btn calmlyss-btn-primary shrink-0"
            >
              <span>Schedule Diagnostic Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

