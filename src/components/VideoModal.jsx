import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, ExternalLink, AlertCircle, ArrowUpRight } from 'lucide-react';
import { CelestialStar } from './CelestialElements';

export const VideoModal = ({ isOpen, onClose, videoData, onBookCall }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [activeClipRange, setActiveClipRange] = useState(null);

  // Sync active clip range when videoData changes
  useEffect(() => {
    if (videoData) {
      setVideoError(false);
      setIsPlaying(false);
      setCurrentTime(0);

      if (videoData.startTime !== undefined) {
        setActiveClipRange({
          start: videoData.startTime,
          end: videoData.endTime ?? null,
          label: videoData.timeFormatted || `${videoData.startTime}s - ${videoData.endTime}s`
        });
      } else {
        setActiveClipRange(null);
      }
    }
  }, [videoData]);

  // Handle key press (Esc to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle video element time updates for clip boundaries
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    setCurrentTime(current);

    if (activeClipRange && activeClipRange.end !== null) {
      if (current >= activeClipRange.end) {
        videoRef.current.pause();
        setIsPlaying(false);
        videoRef.current.currentTime = activeClipRange.start;
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
    if (activeClipRange) {
      videoRef.current.currentTime = activeClipRange.start;
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      if (activeClipRange && (videoRef.current.currentTime < activeClipRange.start || videoRef.current.currentTime >= (activeClipRange.end || 9999))) {
        videoRef.current.currentTime = activeClipRange.start;
      }
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setVideoError(true));
    }
  };

  const restartClip = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = activeClipRange ? activeClipRange.start : 0;
    videoRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(() => setVideoError(true));
  };

  const formatSeconds = (sec) => {
    if (isNaN(sec)) return '00:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!isOpen || !videoData) return null;

  const isYouTube = videoData.type === 'youtube' || (videoData.source && videoData.source.includes('youtube'));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-espresso-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-espresso-900 border border-white/10 rounded-3xl shadow-velvet overflow-hidden text-white flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-espresso-950/80">
            <div className="flex items-center gap-3">
              <span className="p-1.5 rounded-full bg-white/10 text-earth-sand border border-white/10">
                <CelestialStar className="w-4 h-4 text-earth-clay" />
              </span>
              <div>
                <h3 className="text-lg font-serif tracking-wide text-white">
                  {videoData.title || 'Client Transformation Story'}
                </h3>
                {videoData.subtitle && (
                  <p className="text-xs text-espresso-300 font-sans">{videoData.subtitle}</p>
                )}
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-espresso-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative bg-black aspect-video w-full flex items-center justify-center overflow-hidden">
            {isYouTube ? (
              <iframe
                src={videoData.youtubeUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              /* Local MP4 Player */
              <div className="relative w-full h-full flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={videoData.source}
                  poster="/images/hero-payal-thumb.jpg"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onError={() => setVideoError(true)}
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-contain"
                />

                {/* If video file error */}
                {videoError && (
                  <div className="absolute inset-0 bg-espresso-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-earth-bronze/20 border border-earth-clay/30 flex items-center justify-center text-earth-sand mb-3">
                      <AlertCircle className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-serif text-white mb-1">Video Stream</h4>
                    <p className="text-xs text-espresso-300 max-w-md mb-4 leading-relaxed">
                      Target asset path: <code className="px-2 py-0.5 rounded bg-white/10 text-earth-sand font-mono text-xs">{videoData.source}</code>
                    </p>
                  </div>
                )}

                {/* Play / Pause Overlay Button */}
                {!videoError && !isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-earth-bronze/90 hover:bg-earth-bronze text-white flex items-center justify-center shadow-velvet transition-all duration-300 hover:scale-105 group"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 ml-1 text-white fill-white group-hover:scale-110 transition-transform" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Video Controls Bar (for MP4 videos) */}
          {!isYouTube && !videoError && (
            <div className="px-6 py-3 bg-espresso-950/90 border-t border-white/5 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-espresso-300 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-earth-sand">{formatSeconds(currentTime)}</span>
                  <span>/</span>
                  <span>{formatSeconds(duration)}</span>
                </div>
                {activeClipRange && (
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-earth-sand border border-white/10 text-[11px]">
                    Focus Clip: {activeClipRange.label}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>
                  <button
                    onClick={restartClip}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-espresso-300 transition-colors"
                    title="Restart clip segment"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (!videoRef.current) return;
                      videoRef.current.muted = !isMuted;
                      setIsMuted(!isMuted);
                    }}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-espresso-300 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {onBookCall && (
                  <button
                    onClick={() => {
                      onClose();
                      onBookCall();
                    }}
                    className="calmlyss-btn calmlyss-btn-primary py-1.5 px-4 text-xs"
                  >
                    <span>Experience This Shift</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Transcript / Quote Context Footer */}
          <div className="p-6 bg-espresso-900 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-widest text-earth-sand font-semibold mb-1">
                  Verified Spoken Experience
                </div>
                <blockquote className="text-sm md:text-base text-white italic font-serif leading-relaxed">
                  "{videoData.spokenQuote || videoData.story || 'A powerful breakthrough in mindset, emotional release, and real-world results.'}"
                </blockquote>
              </div>

              {onBookCall && (
                <button
                  onClick={() => {
                    onClose();
                    onBookCall();
                  }}
                  className="calmlyss-btn calmlyss-btn-primary shrink-0 py-2.5 px-5 text-xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
