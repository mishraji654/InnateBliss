import React from 'react';
import { Sparkles } from 'lucide-react';
import { CelestialStar } from '../CelestialElements';
import { TitleReveal, LineReveal } from '../TextReveal';
import { PreCallClipCard } from './PreCallClipCard';
import { PRE_CALL_CLIPS } from '../../data/testimonialsData';

export const PreCallVideo = ({ onPlayClip, onOpenBooking }) => {
  return (
    <section id="pre-call" className="py-16 sm:py-24 md:py-28 bg-[#F9F6F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Responsive & Well Proportioned */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-3 shadow-xs">
            <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
            <span>Essential Pre-Call Preparation</span>
          </div>

          <TitleReveal
            as="h2"
            text="Let Me Show You How This Method Has Helped My Clients."
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#2D201A] leading-[1.2] mb-4 tracking-tight"
            highlight="Method"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <LineReveal delay={0.25}>
            <p className="text-xs sm:text-sm md:text-base text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto">
              Before your discovery call, listen to these two pivotal moments. They illustrate the exact psychological transition from chronic hesitation into immediate breakthrough and total reality shift.
            </p>
          </LineReveal>
        </div>

        {/* The Two Pre-Call Storytelling Clips Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-14">
          {PRE_CALL_CLIPS.map((clip, idx) => (
            <PreCallClipCard
              key={clip.id}
              clip={clip}
              idx={idx}
              onPlayClip={onPlayClip}
            />
          ))}
        </div>

        {/* Discovery Call Preparation Footer Banner - Mobile Optimized */}
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl bg-[#F2ECE5] border border-[#D9CEC7] p-5 sm:p-7 md:p-8 text-[#2D201A] flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xs">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C78460] font-semibold mb-1 block">
              Ready to address your patterns?
            </span>
            <h4 className="text-lg sm:text-xl md:text-2xl font-serif text-[#2D201A] font-medium leading-snug">
              Bring Your Core Pattern to Your Discovery Session
            </h4>
            <p className="text-xs text-[#6B584E] font-sans mt-1">
              We review your subconscious blockages and outline the precise roadmap for your transformation.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#866452] hover:bg-[#6B584E] text-white text-xs font-medium uppercase tracking-wider transition-colors shrink-0 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book </span>
          </button>
        </div>

      </div>
    </section>
  );
};
