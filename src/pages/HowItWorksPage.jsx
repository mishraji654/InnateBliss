import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, CheckCircle2, XCircle, Zap, RefreshCw } from 'lucide-react';
import { CelestialStar } from '../components/CelestialElements';
import { TitleReveal, LineReveal } from '../components/TextReveal';
import { MethodologyStepCard } from '../components/Methodology/MethodologyStepCard';
import { METHODOLOGY_STEPS } from '../data/siteData';
import { Link } from 'react-router-dom';

export const HowItWorksPage = ({ onOpenBooking }) => {
  const comparisonItems = [
    {
      topic: 'Mechanism',
      hacks: 'Superficial affirmations & conscious willpower (works on only 5% of the brain)',
      innate: 'Deep somatic nervous system & subconscious blueprint clearing (transforms the 95%)'
    },
    {
      topic: 'Longevity',
      hacks: 'Temporary motivational spike that wears off within 72 hours',
      innate: 'Permanent baseline shift: ease and abundance become your default state'
    },
    {
      topic: 'Root Focus',
      hacks: 'Attempts to force new actions while old fear patterns still operate in secret',
      innate: 'Dissolves hidden generational vows, fear of success, and survivor guilt at the root'
    },
    {
      topic: 'Business Impact',
      hacks: 'Exhausting hustle, constant feast-and-famine cycles, nervous system burnout',
      innate: 'Effortless client attraction, calm investment rounds, expanded holding capacity'
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 bg-[#F9F6F3]">
      
      {/* 1. Page Header */}
      <section className="py-16 sm:py-24 bg-[#F9F6F3] border-b border-[#D9CEC7]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 shadow-xs">
            <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
            <span>Proven Transformation Roadmap</span>
          </div>

          <TitleReveal
            as="h1"
            text="The 4-Step Innate Bliss Process: From Friction to Flow"
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2D201A] leading-[1.12] mb-6 max-w-4xl mx-auto tracking-tight"
            highlight="Innate Bliss"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <LineReveal delay={0.25}>
            <p className="text-base sm:text-lg md:text-xl text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto mb-8">
              A precise, neuro-somatic framework designed to dismantle subconscious limits, neutralize fear, and align your emotional set-points with sustained expansion.
            </p>
          </LineReveal>

          <div className="flex justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="calmlyss-btn calmlyss-btn-primary"
            >
              <span>Schedule Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              to="/programs"
              className="calmlyss-btn calmlyss-btn-secondary"
            >
              <span>View All Programs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Methodology Cards */}
      <section className="py-20 sm:py-28 bg-[#F2ECE5]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C78460] font-semibold mb-2 block">
              The Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D201A]">
              How True Transformation Actually Occurs
            </h2>
            <p className="text-sm text-[#6B584E] font-light max-w-xl mx-auto mt-2">
              We do not rely on intellectual analysis alone. We guide the body and nervous system into a state where receiving and thriving feels safe.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 mb-20">
            {METHODOLOGY_STEPS.map((step, idx) => (
              <MethodologyStepCard
                key={step.step}
                step={step}
                idx={idx}
                onOpenBooking={onOpenBooking}
              />
            ))}
          </div>

          {/* 3. Comparison Table */}
          <div className="rounded-[2.5rem] bg-white border border-[#D9CEC7] p-8 sm:p-12 shadow-premium">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest text-[#C78460] font-semibold mb-2 block">
                The Distinction
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#2D201A]">
                Temporary Affirmations vs. Subconscious Neuro-Somatic Clearing
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#D9CEC7] text-xs uppercase tracking-wider text-[#8A766C]">
                    <th className="py-4 px-4 font-semibold w-1/4">Dimension</th>
                    <th className="py-4 px-4 font-semibold w-3/8 text-red-800/80 bg-red-50/50 rounded-t-xl">
                      Conventional Mindset Hacks
                    </th>
                    <th className="py-4 px-4 font-semibold w-3/8 text-[#866452] bg-[#F2ECE5]/70 rounded-t-xl">
                      The Innate Bliss Method
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9CEC7]/60 text-xs sm:text-sm">
                  {comparisonItems.map((row, i) => (
                    <tr key={i} className="hover:bg-[#F9F6F3]/50 transition-colors">
                      <td className="py-5 px-4 font-serif font-medium text-[#2D201A]">
                        {row.topic}
                      </td>
                      <td className="py-5 px-4 text-[#6B584E] bg-red-50/30">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{row.hacks}</span>
                        </div>
                      </td>
                      <td className="py-5 px-4 text-[#2D201A] font-medium bg-[#F2ECE5]/40">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#866452] shrink-0 mt-0.5" />
                          <span>{row.innate}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="py-20 bg-[#F9F6F3] border-t border-[#D9CEC7] text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-serif text-[#2D201A] mb-4">
            Begin with a 90-Minute Pattern Mapping Session
          </h2>
          <p className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed mb-8">
            Experience the 4-step framework in real time. We will map your subconscious money and success ceilings and initiate immediate somatic release.
          </p>
          <button
            onClick={onOpenBooking}
            className="calmlyss-btn calmlyss-btn-primary"
          >
            <span>Book Your Transformation Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};

