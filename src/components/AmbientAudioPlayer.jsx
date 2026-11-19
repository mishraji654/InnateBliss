import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AmbientAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const TARGET_VOLUME = 0.30;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Keep UI state synchronized with real audio state
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Function to ensure unmuted playback with full volume
    const enableSoundAndPlay = () => {
      if (!audio) return;
      audio.muted = false;
      audio.volume = TARGET_VOLUME;
      audio.play().catch(() => {});
    };

    // 1. Attempt unmuted auto-play immediately on page mount
    audio.muted = false;
    audio.volume = TARGET_VOLUME;
    const initialPlayPromise = audio.play();

    if (initialPlayPromise !== undefined) {
      initialPlayPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser policy blocked unmuted autoplay:
          // Start playing muted (always permitted by modern browsers)
          audio.muted = true;
          audio.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {});

          // Unmute on the very first micro-gesture (cursor move, touch, scroll, click, or key)
          const unlockAudio = () => {
            enableSoundAndPlay();
            cleanupTriggers();
          };

          const cleanupTriggers = () => {
            const events = ['pointerdown', 'mousedown', 'mousemove', 'touchstart', 'scroll', 'wheel', 'keydown', 'click'];
            events.forEach(evt => window.removeEventListener(evt, unlockAudio));
          };

          const events = ['pointerdown', 'mousedown', 'mousemove', 'touchstart', 'scroll', 'wheel', 'keydown', 'click'];
          events.forEach(evt => window.addEventListener(evt, unlockAudio, { passive: true, once: true }));
        });
    }

    // Global listener so ANY click or touch on the website ensures audio is playing
    const handleGlobalClick = () => {
      // If VSL modal is currently active, do not play background ambient audio
      if (window.__isVslModalOpen) return;
      if (audio && (audio.paused || audio.muted)) {
        enableSoundAndPlay();
      }
    };
    window.addEventListener('click', handleGlobalClick, { passive: true, once: true });

    // Listen for VSL Welcome Modal opening/closing so background audio doesn't clash
    const handleVslStateChange = (e) => {
      const isVslOpen = !!e.detail?.isOpen;
      window.__isVslModalOpen = isVslOpen;
      if (isVslOpen) {
        if (audio && !audio.paused) {
          audio.pause();
        }
      } else {
        if (audio && audio.paused) {
          enableSoundAndPlay();
        }
      }
    };
    window.addEventListener('vsl-state-change', handleVslStateChange);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('vsl-state-change', handleVslStateChange);
    };
  }, []);

  const togglePlayPause = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
    } else {
      audio.muted = false;
      audio.volume = TARGET_VOLUME;
      audio.play().catch(console.error);
    }
  };

  return (
    <>
      {/* Background HTML5 Audio with autoplay and loop attributes */}
      <audio
        ref={audioRef}
        src="/audio/innate-bliss-ambient.mp3"
        loop
        autoPlay
        playsInline
        preload="auto"
      />

      {/* Floating Ambient Music Controller - Clear of Bottom Dock on Mobile & WhatsApp on Desktop */}
      <aside 
        aria-label="Ambient sound controls" 
        className="fixed bottom-[82px] left-4 md:bottom-7 md:left-[88px] z-40 flex items-center gap-3 select-none"
      >
        <motion.button
          onClick={togglePlayPause}
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group flex items-center justify-center sm:justify-start gap-2 sm:gap-2.5 w-10 h-10 sm:w-auto sm:h-auto sm:px-3.5 sm:py-2 rounded-full bg-white/95 hover:bg-white backdrop-blur-xl border border-[#D9CEC7] shadow-premium hover:border-[#866452] transition-all duration-300 text-[#2D201A] focus:outline-none cursor-pointer"
          title={isPlaying ? 'Pause Soothing Spa Music' : 'Play Soothing Spa Music'}
          aria-label={isPlaying ? 'Pause Ambient Spa Music' : 'Play Ambient Spa Music'}
        >
          {/* Animated Waveform Indicator (Desktop/Tablet) */}
          <div className="hidden sm:flex items-center gap-0.5 h-3.5 w-4 justify-center">
            {isPlaying ? (
              <>
                <span className="w-0.5 bg-[#866452] rounded-full animate-[soundWave_1.2s_ease-in-out_infinite] h-3" />
                <span className="w-0.5 bg-[#866452] rounded-full animate-[soundWave_1.2s_ease-in-out_0.2s_infinite] h-2" />
                <span className="w-0.5 bg-[#866452] rounded-full animate-[soundWave_1.2s_ease-in-out_0.4s_infinite] h-3.5" />
                <span className="w-0.5 bg-[#866452] rounded-full animate-[soundWave_1.2s_ease-in-out_0.6s_infinite] h-1.5" />
              </>
            ) : (
              <>
                <span className="w-0.5 bg-[#8A766C] rounded-full h-1" />
                <span className="w-0.5 bg-[#8A766C] rounded-full h-1" />
                <span className="w-0.5 bg-[#8A766C] rounded-full h-1" />
                <span className="w-0.5 bg-[#8A766C] rounded-full h-1" />
              </>
            )}
          </div>

          {/* Sound State Label (Desktop/Tablet) */}
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-medium text-[#2D201A]">
            <span>Spa Sound</span>
            <span className="text-[#866452] font-semibold">
              {isPlaying ? 'ON' : 'OFF'}
            </span>
          </div>

          {/* Volume Icon */}
          <div className="p-1.5 sm:p-1 rounded-full bg-[#F2ECE5] text-[#866452] group-hover:bg-[#866452] group-hover:text-white transition-colors">
            {isPlaying ? (
              <Volume2 className="w-4 h-4 sm:w-3 sm:h-3" />
            ) : (
              <VolumeX className="w-4 h-4 sm:w-3 sm:h-3" />
            )}
          </div>
        </motion.button>
      </aside>
    </>
  );
};
