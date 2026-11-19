import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Sparkles, Award } from 'lucide-react';
import { CelestialStar } from '../components/CelestialElements';
import { TitleReveal, LineReveal } from '../components/TextReveal';
import { AarinStoryCard } from '../components/Transformations/AarinStoryCard';
import { NeelakantappaStoryCard } from '../components/Transformations/NeelakantappaStoryCard';
import { ClientReflectionCard } from '../components/Transformations/ClientReflectionCard';
import { ADDITIONAL_EXPERIENCES } from '../data/testimonialsData';

export const TransformationsPage = ({ onPlayVideo, onOpenBooking }) => {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F9F6F3]">
      
      {/* 1. Page Header */}
      <section className="py-16 sm:py-24 bg-[#F9F6F3] border-b border-[#D9CEC7]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 shadow-xs">
            <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
            <span>Verified Client Experiences</span>
          </div>

          <TitleReveal
            as="h1"
            text="Real People. Real Shifts. Extraordinary Transformations."
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2D201A] leading-[1.12] mb-6 max-w-4xl mx-auto tracking-tight"
            highlight="Extraordinary"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <LineReveal delay={0.25}>
            <p className="text-base sm:text-lg md:text-xl text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto mb-10">
              When internal friction dissolves, external reality reorganizes. Explore how entrepreneurs, executives, and individuals experienced measurable breakthroughs after rewiring their subconscious money beliefs.
            </p>
          </LineReveal>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-[#D9CEC7] shadow-xs">
              <div className="text-2xl font-serif text-[#866452] font-semibold">₹25 Lakh</div>
              <div className="text-xs text-[#6B584E] mt-0.5">Raised in 2 Weeks (Age 50+)</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#D9CEC7] shadow-xs">
              <div className="text-2xl font-serif text-[#866452] font-semibold">120–140</div>
              <div className="text-xs text-[#6B584E] mt-0.5">Monthly Leads vs 20 Earlier</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#D9CEC7] shadow-xs">
              <div className="text-2xl font-serif text-[#866452] font-semibold">1,000+</div>
              <div className="text-xs text-[#6B584E] mt-0.5">Global Coaching Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Verified Case Studies Grid */}
      <section className="py-20 sm:py-28 bg-[#F2ECE5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-20">
            <AarinStoryCard onPlayVideo={onPlayVideo} />
            <NeelakantappaStoryCard onPlayVideo={onPlayVideo} />
          </div>

          {/* Additional Testimonials */}
          <div className="pt-6">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-serif text-[#2D201A]">
                More Subconscious Shifts from Founders & Executives
              </h3>
              <p className="text-xs text-[#8A766C] uppercase tracking-widest mt-1">
                Private 1:1 Immersion Reflections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ADDITIONAL_EXPERIENCES.map((item, idx) => (
                <ClientReflectionCard key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-14 text-center text-[11px] text-[#8A766C] max-w-2xl mx-auto leading-relaxed">
            * Disclaimer: The transformations detailed above represent verified individual client experiences and spoken testimonials. Results vary based on individual subconscious readiness, background, active participation, and application of coaching insights. They are not intended as typical or guaranteed financial returns.
          </div>

        </div>
      </section>

      {/* 3. Closing Call to Action */}
      <section className="py-20 bg-[#F9F6F3] border-t border-[#D9CEC7] text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-serif text-[#2D201A] mb-4">
            Ready for Your Own Extraordinary Shift?
          </h2>
          <p className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed mb-8">
            Schedule a confidential discovery conversation to uncover the subconscious patterns holding your business or personal expansion back.
          </p>
          <button
            onClick={onOpenBooking}
            className="calmlyss-btn calmlyss-btn-primary"
          >
            <span>Book Your Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};

