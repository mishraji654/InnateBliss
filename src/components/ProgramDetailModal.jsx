import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, Sparkles, ArrowUpRight } from 'lucide-react';
import { CelestialStar } from './CelestialElements';

export const ProgramDetailModal = ({ program, isOpen, onClose, onApply }) => {
  if (!isOpen || !program) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-espresso-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-2xl bg-espresso-900 border border-espresso-700 rounded-3xl p-6 sm:p-8 text-white shadow-velvet my-auto overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-earth-sand border border-white/10 text-[10px] uppercase tracking-wider font-semibold">
                {program.badge}
              </span>
              <span className="text-xs text-espresso-300 flex items-center gap-1 font-mono">
                <Clock className="w-3 h-3 text-earth-sand" />
                {program.duration}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-espresso-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto pr-2 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-white mb-2 leading-snug">
                {program.title}
              </h3>
              <p className="text-xs text-earth-sand font-sans uppercase tracking-widest">
                {program.format}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-espresso-100 font-light leading-relaxed">
              {program.description}
            </p>

            {/* Core Highlights */}
            <div className="p-5 rounded-2xl bg-espresso-950/80 border border-white/10">
              <h4 className="text-xs uppercase tracking-widest text-earth-sand font-semibold mb-3">
                Curriculum Focus & Modalities Included
              </h4>
              <div className="space-y-2.5">
                {program.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-espresso-200">
                    <CheckCircle2 className="w-4 h-4 text-earth-sand shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal Candidate Profile */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-espresso-200">
              <strong className="text-earth-sand block mb-1 uppercase tracking-wider text-[11px]">
                Who This Is Designed For:
              </strong>
              {program.idealFor}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-espresso-300 hover:text-white transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onApply(program);
              }}
              className="calmlyss-btn calmlyss-btn-primary py-2.5 px-6 text-xs shadow-serene"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply for this Immersion</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
