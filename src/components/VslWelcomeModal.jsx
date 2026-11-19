import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize, ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const VslWelcomeModal = ({ isOpen, onClose, onBookCall }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('01:30');
  const [needsUserUnmute, setNeedsUserUnmute] = useState(false);
  const [useYouTubeView, setUseYouTubeView] = useState(false);

  // Official YouTube destination
  const YOUTUBE_URL = "https://www.youtube.com/watch?v=lfiGHm5Hgm8";
  const YOUTUBE_EMBED = "https://www.youtube.com/embed/lfiGHm5Hgm8?autoplay=1&enablejsapi=1&rel=0";

  // Notify AmbientAudioPlayer to pause when VSL opens, resume when VSL closes
  useEffect(() => {
    if (isOpen) {
      window.dispatchEvent(new CustomEvent('vsl-state-change', { detail: { isOpen: true } }));
    } else {
      window.dispatchEvent(new CustomEvent('vsl-state-change', { detail: { isOpen: false } }));
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  // Attempt automatic video playback when modal opens
  useEffect(() => {
    if (!isOpen) return;

    const video = videoRef.current;
    if (!video) return;

    // First attempt: Play with sound
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
          setNeedsUserUnmute(false);
        })
        .catch(() => {
          // If browser blocks unmuted auto-play, immediately play muted so video starts on load
          video.muted = true;
          setIsMuted(true);
          video.play()
            .then(() => {
              setIsPlaying(true);
              setNeedsUserUnmute(true);
            })
            .catch(() => {});
        });
    }

    // Keyboard ESC to close
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, useYouTubeView]);

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 90;
    setProgress((current / total) * 100);

    const curMin = Math.floor(current / 60);
    const curSec = Math.floor(current % 60);
    setCurrentTime(`${curMin < 10 ? '0' : ''}${curMin}:${curSec < 10 ? '0' : ''}${curSec}`);

    const durMin = Math.floor(total / 60);
    const durSec = Math.floor(total % 60);
    setDuration(`${durMin < 10 ? '0' : ''}${durMin}:${durSec < 10 ? '0' : ''}${durSec}`);
  };

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      if (needsUserUnmute) {
        videoRef.current.muted = false;
        setIsMuted(false);
        setNeedsUserUnmute(false);
      }
      videoRef.current.play().then(() => setIsPlaying(true));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      setNeedsUserUnmute(false);
    }
  };

  const handleUnmuteClick = (e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    setIsMuted(false);
    setNeedsUserUnmute(false);
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true));
    }
  };

  const handleFullscreen = (e) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Blur Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
            className="fixed inset-0 bg-[#0F0C0A]/90 backdrop-blur-md"
          />

          {/* Modal Container - Expansive Screen-Covering Cinema Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[96vw] max-w-6xl xl:max-w-7xl 2xl:max-w-[1380px] bg-[#181311] rounded-2xl sm:rounded-3xl border border-[#D9CEC7]/30 shadow-2xl overflow-hidden z-10 flex flex-col my-auto max-h-[96vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar - Clean & Minimal (Removed "Important Message") */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 bg-[#140F0D] border-b border-white/10">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm font-serif text-[#F2ECE5] tracking-wide font-medium">
                  The Innate Bliss
                </span>
                <span className="text-white/20 hidden sm:inline">•</span>
                <span className="text-[11px] sm:text-xs text-[#AC9A90] font-light hidden sm:inline">
                  Subconscious Transformation with Payal Gulati
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Watch on YouTube direct link */}
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600/90 hover:bg-red-600 text-white text-[11px] font-medium tracking-wide transition-all shadow-xs cursor-pointer"
                  title="Open video on YouTube"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Watch on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#D9CEC7] hover:text-white transition-colors cursor-pointer"
                  aria-label="Close video popup"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Video Player Frame - Expansive Cinema Aspect */}
            <div className="relative aspect-video w-full max-h-[75vh] bg-black flex items-center justify-center overflow-hidden group">
              {!useYouTubeView ? (
                <>
                  <video
                    ref={videoRef}
                    src="/videos/VSL%2001_2.mp4"
                    className="w-full h-full object-contain cursor-pointer"
                    playsInline
                    autoPlay
                    onTimeUpdate={handleTimeUpdate}
                    onClick={togglePlay}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/videos/VSL%2001_2.mp4" type="video/mp4" />
                    <source src="/videos/vsl-intro.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>

                  {/* Unmute Tap Banner for Strict Chrome Autoplay Policy */}
                  {needsUserUnmute && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      onClick={handleUnmuteClick}
                      className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-[#866452] text-white text-xs font-medium uppercase tracking-wider shadow-xl cursor-pointer hover:bg-[#6B584E] transition-all"
                    >
                      <Volume2 className="w-4 h-4 animate-bounce" />
                      <span>Video Playing Muted • Click For Sound 🔊</span>
                    </motion.div>
                  )}

                  {/* Big Play Pause Overlay on Pause */}
                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer z-10 transition-opacity"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#866452]/90 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                        <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Video Control Bar */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-2 z-20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    {/* Scrubber Bar */}
                    <div
                      className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer relative overflow-hidden transition-all"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const pos = (e.clientX - rect.left) / rect.width;
                        if (videoRef.current) {
                          videoRef.current.currentTime = pos * (videoRef.current.duration || 90);
                        }
                      }}
                    >
                      <div
                        className="h-full bg-[#D4A373] transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    {/* Bottom Controls Row */}
                    <div className="flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-3">
                        <button onClick={togglePlay} className="p-1 hover:text-[#D4A373] transition-colors cursor-pointer">
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                        </button>

                        <button onClick={toggleMute} className="p-1 hover:text-[#D4A373] transition-colors cursor-pointer">
                          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                        </button>

                        <span className="font-mono text-[11px] text-[#D9CEC7]">
                          {currentTime} / {duration}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setUseYouTubeView(true)}
                          className="text-[11px] text-[#D9CEC7] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                          <span>Switch to YouTube Player</span>
                        </button>

                        <button onClick={handleFullscreen} className="p-1 hover:text-[#D4A373] transition-colors cursor-pointer">
                          <Maximize className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* YouTube Embedded View */
                <div className="relative w-full h-full">
                  <iframe
                    src={YOUTUBE_EMBED}
                    title="The Innate Bliss YouTube Presentation"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <button
                      onClick={() => setUseYouTubeView(false)}
                      className="px-3 py-1 rounded-full bg-black/80 text-white text-xs border border-white/20 hover:bg-[#866452] transition-colors"
                    >
                      Switch to HD Video File
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="px-4 sm:px-6 py-3 sm:py-3.5 bg-[#140F0D] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-white/10 shrink-0">
              <div className="text-center sm:text-left">
                <h4 className="font-serif text-white text-sm sm:text-base md:text-lg font-medium leading-tight">
                  Transform Your Subconscious Money & Life Patterns
                </h4>
                <p className="text-[11px] sm:text-xs text-[#AC9A90] font-sans mt-0.5">
                  Private 1:1 immersion guidance with Coach Payal Gulati
                </p>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-center sm:justify-end">
                <button
                  onClick={() => {
                    handleCloseModal();
                    if (onBookCall) onBookCall();
                  }}
                  className="calmlyss-btn calmlyss-btn-primary py-2.5 px-5 text-xs whitespace-nowrap cursor-pointer"
                >
                  <span>Book Discovery Call</span>
                </button>

                
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
