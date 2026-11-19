import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Film, Sparkles, Volume2 } from 'lucide-react';
import { CelestialStar } from '../components/CelestialElements';
import { TitleReveal, LineReveal } from '../components/TextReveal';
import { VideoShowcase } from '../components/VideoShowcase';
import { PreCallVideo } from '../components/PreCall/PreCallVideo';

export const VideoVaultPage = ({ onOpenVideo, onOpenBooking }) => {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F9F6F3]">
      
      {/* 1. Page Header */}
      <section className="py-16 sm:py-24 bg-[#F9F6F3] border-b border-[#D9CEC7]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 shadow-xs">
            <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
            <span>Spoken Transformations & Media</span>
          </div>

          <TitleReveal
            as="h1"
            text="The Innate Bliss Spoken Experience Vault"
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2D201A] leading-[1.12] mb-6 max-w-4xl mx-auto tracking-tight"
            highlight="Spoken"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <LineReveal delay={0.25}>
            <p className="text-base sm:text-lg md:text-xl text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto mb-6">
              Hear unrehearsed recordings and spoken reflections directly from clients who cleared generational money blocks and restored harmony in their life and business.
            </p>
          </LineReveal>
        </div>
      </section>

      {/* 2. Main Video Showcase Component */}
      <VideoShowcase onOpenModal={onOpenVideo} />

      {/* 3. Pre-Call Video Showcase */}
      <PreCallVideo onPlayClip={onOpenVideo} onOpenBooking={onOpenBooking} />

    </div>
  );
};

