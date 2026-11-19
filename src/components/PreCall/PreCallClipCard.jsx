import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Volume2 } from 'lucide-react';

export const PreCallClipCard = ({ clip, idx, onPlayClip }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.12 }}
      className="card-soothing-white rounded-2xl sm:rounded-3xl bg-white border border-[#D9CEC7] p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-premium hover:border-[#C78460] transition-all duration-300 relative group"
    >
      <div>
        {/* Header row with Clip Number & Timestamp */}
        <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2D201A] text-white font-mono text-[11px] sm:text-xs flex items-center justify-center font-semibold shrink-0">
              {clip.clipNumber}
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6B584E] font-medium">
              {clip.category}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#F2ECE5] text-[#2D201A] font-mono text-[11px] sm:text-xs border border-[#D9CEC7] shrink-0">
            <Clock className="w-3 h-3 text-[#C78460]" />
            {clip.timestamp}
          </span>
        </div>

        {/* Clip Title */}
        <h3 className="card-title text-lg sm:text-xl md:text-2xl font-serif font-medium text-[#2D201A] mb-3 leading-snug">
          {clip.title}
        </h3>

        {/* Spoken Quote Audio Card - Optimized for Mobile */}
        <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#191412] text-white border border-[#3A2E28] mb-4 sm:mb-5 relative overflow-hidden">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#D4A373] font-semibold mb-2">
            <span className="flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-[#D4A373] shrink-0" />
              <span>Spoken Transcript</span>
            </span>
            <span className="font-mono text-[#AC9A90] text-[10px] sm:text-xs">{clip.timestamp}</span>
          </div>
          
          <blockquote className="text-sm sm:text-base md:text-lg font-serif italic text-white leading-relaxed mb-3">
            {clip.spokenQuote}
          </blockquote>

          {/* Responsive Sound Waveform Graphic */}
          <div className="flex items-center justify-between gap-0.5 sm:gap-1 opacity-60 pt-2 border-t border-white/10 w-full overflow-hidden">
            {[10, 20, 14, 28, 18, 24, 12, 26, 20, 16, 22, 10, 24, 30, 18, 14, 20, 16, 26, 20, 12, 24, 16].map((h, wIdx) => (
              <span 
                key={wIdx} 
                className="w-1 bg-[#D4A373] rounded-full shrink-0" 
                style={{ height: `${h}px` }} 
              />
            ))}
          </div>
        </div>

        {/* Context Description */}
        <p className="card-desc text-xs sm:text-sm text-[#6B584E] font-light leading-relaxed mb-5">
          {clip.context}
        </p>
      </div>

      {/* Action Button - Responsive Row */}
      <div className="pt-4 border-t border-[#D9CEC7]/70 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onPlayClip({
            source: clip.source,
            startTime: clip.startTime,
            endTime: clip.endTime,
            timeFormatted: clip.timestamp,
            title: `Pre-Call Video: Clip ${clip.clipNumber} (${clip.timestamp})`,
            subtitle: clip.title,
            spokenQuote: clip.spokenQuote,
            story: clip.context
          })}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full bg-[#866452] hover:bg-[#6B584E] text-white text-xs font-medium uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-md group-hover:scale-[1.02]"
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          <span>Play Clip ({clip.timestamp})</span>
        </button>

        <span className="text-[11px] text-[#8A766C] font-mono shrink-0">
          Duration: {clip.endTime - clip.startTime}s
        </span>
      </div>
    </motion.div>
  );
};
