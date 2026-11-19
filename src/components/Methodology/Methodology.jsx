import React from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { CelestialStar } from '../CelestialElements';
import { TitleReveal, LineReveal } from '../TextReveal';
import { MethodologyStepCard } from './MethodologyStepCard';
import { METHODOLOGY_STEPS } from '../../data/siteData';

export const Methodology = ({ onOpenBooking }) => {
  return (
    <section id="methodology" className="py-24 md:py-32 bg-[#F9F6F3] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 shadow-xs">
            <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
            <span>The Transformation Architecture</span>
          </div>

          <TitleReveal
            as="h2"
            text="How It Works: The 4-Step Innate Bliss Process"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D201A] leading-[1.15] mb-5 tracking-tight"
            highlight="Process"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <LineReveal delay={0.25}>
            <p className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto">
              A methodical, structured framework that moves beyond surface advice into neurological and somatic rewiring—anchoring sustainable transformation that lasts.
            </p>
          </LineReveal>
        </div>

        {/* 4 Steps Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <MethodologyStepCard
              key={step.step}
              step={step}
              idx={idx}
            />
          ))}
        </div>

        {/* Process Guarantee / Assurance Banner */}
        <div className="rounded-[2rem] bg-[#F2ECE5] border border-[#D9CEC7] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-serene">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#866452] text-white flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-medium text-[#2D201A]">
                Root-Level Clearing vs. Temporary Affirmations
              </h4>
              <p className="text-xs text-[#6B584E] font-sans max-w-xl mt-0.5">
                Because we resolve subconscious loyalties and somatic trauma, our clients experience lasting calm and high-tier momentum without rebounding into old scarcity habits.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="calmlyss-btn calmlyss-btn-primary shrink-0"
          >
            <span>Schedule Assessment</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

