import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, CheckCircle2 } from 'lucide-react';
import { CelestialStar } from './CelestialElements';
import { TitleReveal, LineReveal } from './TextReveal';
import { VIDEO_CONFIG } from '../data/testimonialsData';

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const VideoShowcase = ({ onOpenModal }) => {
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState('mp4'); // 'mp4' | 'youtube'
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const jumpToTime = (seconds) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = seconds;
    videoRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  const formatSeconds = (sec) => {
    if (isNaN(sec)) return '00:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section id="video-showcase" className="py-24 md:py-32 bg-espresso-950 text-white relative overflow-hidden">
      {/* Soothing Velvet Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-earth-clay/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-velvet-grain opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-earth-sand text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4">
            <CelestialStar className="w-3.5 h-3.5 text-earth-clay" />
            <span>Website Media Vault</span>
          </div>

          <TitleReveal
            as="h2"
            text="Hear the Shifts in Their Own Voices & Spoken Words"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-[1.15] mb-5 tracking-tight"
            highlight="Voices"
            highlightClass="italic font-display text-earth-sand font-normal"
          />

          <LineReveal delay={0.25}>
            <p className="text-sm sm:text-base text-espresso-200 font-light text-black leading-relaxed max-w-2xl mx-auto">
              Authentic video features streamed directly from the official The Innate Bliss website servers and YouTube archives.
            </p>
          </LineReveal>

          {/* Media Switcher Tabs */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('mp4')}
              className={`px-5 py-2 rounded-full text-xs text-black font-medium uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'mp4'
                  ? 'bg-earth-bronze text-white shadow-serene'
                  : 'bg-white/5 text-black hover:bg-white/10'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span className='text-black'>Official Website Video (MP4)</span>
            </button>

            <button
              onClick={() => setActiveTab('youtube')}
              className={`px-5 py-2 rounded-full text-black text-xs font-medium uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'youtube'
                  ? 'bg-earth-bronze text-white shadow-serene'
                  : 'bg-white/5 text-espresso-300 hover:bg-white/10'
              }`}
            >
              <YoutubeIcon className="w-3.5 h-3.5 text-red-400" />
              <span>Website YouTube Feature</span>
            </button>
          </div>
        </div>

        {/* Cinematic Video Player Frame */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[2.2rem] p-2 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-espresso-900 border border-white/10 shadow-velvet">
            
            {/* The Video Screen */}
            <div className="relative aspect-video w-full rounded-2xl bg-black overflow-hidden flex items-center justify-center">
              {activeTab === 'mp4' ? (
                <>
                  <video
                    ref={videoRef}
                    src={VIDEO_CONFIG.compilationVideoPath}
                    poster={VIDEO_CONFIG.heroVideoPoster}
                    onTimeUpdate={() => videoRef.current && setCurrentTime(videoRef.current.currentTime)}
                    onLoadedMetadata={() => videoRef.current && setDuration(videoRef.current.duration)}
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-contain"
                  />

                  {/* Play Button Overlay */}
                  {!isPlaying && (
                    <button
                      onClick={togglePlay}
                      className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-earth-bronze/90 hover:bg-earth-bronze text-white flex items-center justify-center shadow-velvet transition-all duration-300 hover:scale-105 group z-20"
                      aria-label="Play compilation video"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-white fill-white group-hover:scale-110 transition-transform" />
                    </button>
                  )}

                  {/* Bottom Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between z-20">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                      </button>
                      <button
                        onClick={() => {
                          if (!videoRef.current) return;
                          videoRef.current.muted = !isMuted;
                          setIsMuted(!isMuted);
                        }}
                        className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
                        aria-label="Toggle mute"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <span className="text-xs font-mono text-espresso-200">
                        {formatSeconds(currentTime)} / {formatSeconds(duration)}
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenModal({
                        source: VIDEO_CONFIG.compilationVideoPath,
                        title: 'The Innate Bliss — Official Video',
                        subtitle: 'Spoken Transformations from the Website'
                      })}
                      className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
                      aria-label="Fullscreen modal"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </>
              ) : (
                <iframe
                  src={VIDEO_CONFIG.websiteOfficialYouTubeUrl}
                  title="The Innate Bliss Official YouTube Feature"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>

            {/* Quick Segment Jump Bar (for MP4 stream) */}
            {activeTab === 'mp4' && (
              <div className="p-4 bg-espresso-900 rounded-b-2xl border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-wider text-espresso-300 font-semibold flex items-center gap-2">
                  <Film className="w-3.5 h-3.5 text-earth-sand" />
                  <span>Verified Timecodes:</span>
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => jumpToTime(0)}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-earth-bronze/30 text-xs font-mono text-espresso-200 border border-white/10 transition-colors"
                  >
                    00:00 • Opening & Resistance
                  </button>
                  <button
                    onClick={() => jumpToTime(44)}
                    className="px-3.5 py-1.5 rounded-full bg-earth-bronze/20 hover:bg-earth-bronze/40 text-xs font-mono text-earth-sand border border-earth-clay/40 transition-colors"
                  >
                    00:44 • Aarin (₹25L Funding)
                  </button>
                  <button
                    onClick={() => jumpToTime(72)}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-earth-bronze/30 text-xs font-mono text-espresso-200 border border-white/10 transition-colors"
                  >
                    01:12 • Full Transformation
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
