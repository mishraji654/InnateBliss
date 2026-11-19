import React from 'react';
import { Play } from 'lucide-react';
import { BRAND_INFO } from '../../data/siteData';

export const HeroProofCard = ({ onOpenVideoClip }) => {
  const handlePlayVideo = () => {
    if (onOpenVideoClip) {
      onOpenVideoClip({
        source: '/videos/vsl-intro.mp4',
        startTime: 0,
        endTime: 90,
        timeFormatted: '01:30',
        title: 'Your Money Blocks Are Running Your Income...',
        spokenQuote: '“Actually sit with it for a second before you answer... your money blocks are running your income.”'
      });
    }
  };

  return (
    <div className="relative w-full max-w-[460px] lg:max-w-[480px]">
      {/* Soothing Organic Back Glow */}
      <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-tr from-[#C78460]/15 via-[#D4A373]/20 to-[#F2ECE5] blur-xl pointer-events-none" />
      
      {/* Main Card Frame */}
      <article className="card-soothing-white relative rounded-3xl sm:rounded-[1.9rem] bg-white border border-[#D9CEC7] overflow-hidden shadow-premium">
        
        {/* Video / Portrait Preview */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[6/5] overflow-hidden bg-[#F2ECE5] group/video">
          <img
            src={BRAND_INFO.founderPhoto}
            alt="Payal Gulati - Holistic Success Coach"
            fetchPriority="high"
            className="block w-full h-full object-cover object-[center_6%] sm:object-top group-hover/video:scale-[1.03] transition-transform duration-700"
            onError={(e) => {
              e.target.src = BRAND_INFO.coachPayal;
            }}
          />

          {/* Full-Area Accessible Video Play Trigger */}
          <button
            type="button"
            onClick={handlePlayVideo}
            aria-label="Play intro video: Your Money Blocks Are Running Your Income"
            className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#866452]"
          />

          {/* Top Video Tag & Duration */}
          <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3.5 sm:left-3.5 sm:right-3.5 z-20 flex items-center justify-between gap-2 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium border border-white/20 shadow-sm truncate max-w-[80%]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
              <span className="truncate">Your Money Blocks Are Running Your Income...</span>
            </span>
            <span className="px-2 py-0.5 sm:px-2.5 rounded-full bg-black/60 backdrop-blur-md text-white/95 text-[9.5px] sm:text-[10px] font-mono border border-white/20 shrink-0">
              01:30
            </span>
          </div>

          {/* Subtle Bottom Scrim for Legibility */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#140F0D]/75 via-[#140F0D]/20 to-transparent pointer-events-none" />

          {/* Coach Identity + Play CTA Bar */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-xl border border-white/85 shadow-lg z-20 flex items-center justify-between gap-2.5 sm:gap-3 pointer-events-none">
            <div className="min-w-0 text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#866452] font-semibold">
                  Founder &amp; Master Coach
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#8A766C] font-mono">· EST. 2021</span>
              </div>
              <h3 className="text-[15px] sm:text-lg font-serif text-[#2D201A] font-semibold leading-tight mt-0.5">
                Payal Gulati
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#6B584E] font-sans leading-snug truncate">
                Creator of The Innate Bliss Method
              </p>
            </div>

            <span
              aria-hidden="true"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#866452] group-hover/video:bg-[#6B584E] text-white flex items-center justify-center shadow-md shrink-0 group-hover/video:scale-105 transition-all"
            >
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white translate-x-0.5" />
            </span>
          </div>
        </div>

        {/* Verified Client Results Footer */}
        <footer className="p-3 sm:p-4 bg-white border-t border-[#D9CEC7]/75 flex flex-col gap-2 sm:gap-2.5 text-left">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="text-[#8A766C] uppercase tracking-[0.08em] sm:tracking-[0.1em] text-[9.5px] sm:text-[10px] font-semibold">
              Verified Client Results
            </span>
            <button
              type="button"
              onClick={() => onOpenVideoClip && onOpenVideoClip({
                source: '/videos/innate-bliss-testimonials.mp4',
                startTime: 44,
                endTime: 56,
                timeFormatted: '00:44 – 00:56',
                title: 'Aarin’s Verification (₹25L Funding Raised)',
                spokenQuote: '“I secured 25 lakhs investment into my company... by the end of Aug we are looking for another 5 cr.”'
              })}
              className="text-[#C78460] hover:text-[#866452] flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold group cursor-pointer shrink-0"
            >
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#C78460] group-hover:scale-110 transition-transform" />
              <span>Watch Verified Clip</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#F2ECE5]/85 border border-[#D9CEC7]/80">
              <div className="text-[15px] sm:text-lg font-serif text-[#2D201A] font-semibold leading-tight">
                ₹25 Lakh
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#6B584E] font-sans leading-snug mt-0.5">
                Raised in 2 Weeks (Age 50+)
              </div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#F2ECE5]/85 border border-[#D9CEC7]/80">
              <div className="text-[15px] sm:text-lg font-serif text-[#2D201A] font-semibold leading-tight">
                120–140
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#6B584E] font-sans leading-snug mt-0.5">
                Leads/Mo vs 20 Earlier (Age 70+)
              </div>
            </div>
          </div>
        </footer>

      </article>
    </div>
  );
};
