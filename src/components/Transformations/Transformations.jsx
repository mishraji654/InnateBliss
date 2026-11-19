import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CelestialStar } from '../CelestialElements';
import { TitleReveal, LineReveal } from '../TextReveal';
import { AarinStoryCard } from './AarinStoryCard';
import { NeelakantappaStoryCard } from './NeelakantappaStoryCard';
import { ClientReflectionCard } from './ClientReflectionCard';
import { ADDITIONAL_EXPERIENCES } from '../../data/testimonialsData';

export const Transformations = ({ onPlayVideo, onOpenBooking, featuredOnly = false }) => {
  return (
    <section
      id="transformations"
      className="py-16 sm:py-20 md:py-24 bg-[#F2ECE5] relative overflow-hidden"
    >
      {/* Background Accent Gradient */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#C78460]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
            Client Transformations
          </span>

          <TitleReveal
            as="h2"
            text="Real Business Owners. Real Mindset Shifts. Real-Life Progress."
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.15] mb-3.5 tracking-tight"
            highlight="Real-Life Progress."
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <div className="space-y-1.5 text-sm sm:text-[15px] text-[#6B584E] font-light leading-relaxed">
            <p className="font-serif text-lg text-[#2D201A] font-medium">
              Every transformation has a story.
            </p>
            <p>
              Over 200 business owners have worked with us on their relationship with money, limiting beliefs and internal patterns.
            </p>
            <p>
              Explore their experiences and discover what can begin to change when you start working from within.
            </p>
          </div>
        </div>

        {/* Money & Business Testimonial Videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <AarinStoryCard onPlayVideo={onPlayVideo} />
          <NeelakantappaStoryCard onPlayVideo={onPlayVideo} />
        </div>

        {!featuredOnly && (
          <>
            {/* Additional Verified Client Experience Cards */}
            <div className="pt-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-serif text-[#2D201A]">
                  More Subconscious Shifts from Founders &amp; Executives
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
            <div className="mt-12 text-center text-[11px] text-[#8A766C] max-w-2xl mx-auto leading-relaxed">
              * Disclaimer: The transformations detailed above represent verified individual client experiences and spoken testimonials. Results vary based on individual subconscious readiness, background, active participation, and application of coaching insights. They are not intended as typical or guaranteed financial returns.
            </div>
          </>
        )}

      </div>
    </section>
  );
};
