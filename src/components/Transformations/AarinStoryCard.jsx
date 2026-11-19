import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';
import { CLIENT_STORIES } from '../../data/testimonialsData';

export const AarinStoryCard = ({ onPlayVideo }) => {
  const story = CLIENT_STORIES[0]; // Aarin

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="card-soothing-white rounded-3xl sm:rounded-[2.2rem] bg-white border border-[#D9CEC7] text-[#2D201A] p-5 sm:p-8 lg:p-10 flex flex-col justify-between shadow-premium hover:border-[#C78460] transition-all duration-300 group"
    >
      <div>
        {/* Badge & Demographic */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-full bg-[#F2ECE5] text-[#2D201A] border border-[#D9CEC7] text-[11px] uppercase tracking-wider font-semibold">
            Client Case Study • {story.ageBadge}
          </span>
          <span className="text-xs font-mono text-[#6B584E] flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C78460]" />
            {story.timeline}
          </span>
        </div>

        {/* Massive Result Number Callout */}
        <div className="mb-6">
          <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#866452] tracking-tight mb-1">
            {story.keyMetricNumber}
          </div>
          <div className="text-xs sm:text-sm uppercase tracking-wider text-[#2D201A] font-semibold">
            {story.keyMetricLabel}
          </div>
          <div className="text-xs text-[#C78460] font-mono mt-1 font-medium">
            {story.secondaryMetric}
          </div>
        </div>

        {/* Client Narrative */}
        <p className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed mb-6">
          {story.story}
        </p>

        {/* Spoken Quote Card with Audio/Video Preview */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F2ECE5] border border-[#D9CEC7] mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-wider text-[#866452] font-semibold mb-2">
            <span>Spoken Client Audio / Video</span>
            <span className="font-mono bg-white px-2.5 py-0.5 rounded-full text-[#2D201A] border border-[#D9CEC7]">
              {story.videoClip.timeFormatted}
            </span>
          </div>
          <p className="text-sm sm:text-base font-serif italic text-[#2D201A] leading-relaxed">
            {story.spokenQuote}
          </p>
        </div>
      </div>

      {/* Video Play Button CTA */}
      <div className="pt-5 border-t border-[#D9CEC7]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-base font-serif font-medium text-[#2D201A]">{story.name}</div>
          <div className="text-xs text-[#8A766C]">{story.designation}</div>
        </div>

        <button
          type="button"
          onClick={() => onPlayVideo({
            source: story.videoClip.source,
            startTime: story.videoClip.startTime,
            endTime: story.videoClip.endTime,
            timeFormatted: story.videoClip.timeFormatted,
            title: `Aarin’s Verification (${story.videoClip.timeFormatted})`,
            subtitle: 'First Round Seed Funding Raised in 2 Weeks',
            spokenQuote: story.spokenQuote,
            story: story.story
          })}
          className="calmlyss-btn calmlyss-btn-primary py-2.5 px-5 text-xs shadow-serene group-hover:scale-105 w-full sm:w-auto"
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          <span>Play Clip ({story.videoClip.timeFormatted})</span>
        </button>
      </div>
    </motion.div>
  );
};

