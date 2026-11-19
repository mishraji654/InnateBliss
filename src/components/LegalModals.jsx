import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { CelestialStar } from './CelestialElements';
import { BRAND_INFO } from '../data/siteData';

export const LegalModal = ({ isOpen, onClose, type = 'privacy' }) => {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-midnight-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-2xl bg-midnight-900 border border-gold-400/30 rounded-3xl p-6 sm:p-8 text-ivory shadow-2xl my-auto max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              {isPrivacy ? (
                <ShieldCheck className="w-5 h-5 text-gold-champagne" />
              ) : (
                <FileText className="w-5 h-5 text-gold-champagne" />
              )}
              <h3 className="text-xl font-serif text-white">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-sand-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto pr-2 text-xs sm:text-sm text-sand-300 space-y-4 font-light leading-relaxed">
            {isPrivacy ? (
              <>
                <p>
                  At <strong>The Innate Bliss</strong> (founded by Payal Gulati / Payal Kapoor), we hold the highest reverence for your personal privacy and confidential transformation journey.
                </p>
                <h4 className="text-sm font-serif font-medium text-white uppercase tracking-wider text-gold-300">
                  1. Information We Collect
                </h4>
                <p>
                  We collect information you provide directly during discovery call booking, consultation requests, and program applications (such as your name, email address, WhatsApp/phone number, and reflection answers).
                </p>
                <h4 className="text-sm font-serif font-medium text-white uppercase tracking-wider text-gold-300">
                  2. Strict Confidentiality
                </h4>
                <p>
                  All 1:1 sessions, financial discussions, subconscious disclosures, and personal notes are held in strict confidence. Client stories and spoken testimonials are shared exclusively with explicit client permission.
                </p>
                <h4 className="text-sm font-serif font-medium text-white uppercase tracking-wider text-gold-300">
                  3. Contact & Inquiries
                </h4>
                <p>
                  For any privacy inquiries or record requests, contact us at <code className="text-gold-300 font-mono">contact@theinnatebliss.com</code>.
                </p>
              </>
            ) : (
              <>
                <p>
                  Welcome to <strong>The Innate Bliss</strong>. By accessing our websites (theinnatebliss.com, theinnatebliss.in, theinnatebliss.co.in) and booking coaching sessions, you agree to these terms.
                </p>
                <h4 className="text-sm font-serif font-medium text-white uppercase tracking-wider text-gold-300">
                  1. Nature of Coaching & Healing Services
                </h4>
                <p>
                  The services, programs, and consultations offered by Payal Gulati represent educational, mindset, Neuro-Linguistic Programming (NLP), and holistic coaching. They are not medical, psychiatric, or licensed financial advisory services.
                </p>
                <h4 className="text-sm font-serif font-medium text-white uppercase tracking-wider text-gold-300">
                  2. Individual Outcomes & Client Responsibility
                </h4>
                <p>
                  Client results (including funding rounds, lead increases, and emotional releases) represent individual experiences. Every participant brings their own background, dedication, and openness; results are not guaranteed.
                </p>
                <h4 className="text-sm font-serif font-medium text-white uppercase tracking-wider text-gold-300">
                  3. Intellectual Property
                </h4>
                <p>
                  All proprietary frameworks, meditation audios, challenge curricula, and content remain the intellectual property of The Innate Bliss and Payal Gulati.
                </p>
              </>
            )}
          </div>

          <div className="pt-4 mt-6 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-champagne text-midnight-950 hover:bg-gold-shimmer transition-colors"
            >
              I Understand
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

