import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ChevronDown, Check, User, Mail, Phone } from 'lucide-react';
import { CelestialStar } from './CelestialElements';

export const DiscoveryCallModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const roleDropdownRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    primaryBlock: 'Subconscious Money & Wealth Ceilings',
    role: 'Founder / Business Owner',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (roleDropdownRef.current && !roleDropdownRef.current.contains(e.target)) {
        setIsRoleDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const blockOptions = [
    'Subconscious Money & Wealth Ceilings',
    'Business Revenue Stagnation & Lead Flow',
    'Chronic Stress, Burnout & Decision Fatigue',
    'Emotional Detox & Nervous System Overwhelm',
    'Relationship Dynamics & Self-Love Breakthrough'
  ];

  const roleOptions = [
    'Founder / Business Owner',
    'Senior Corporate Executive / Leader',
    'Consultant / Creative Professional',
    'Individual Seeking Holistic Transformation'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-espresso-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-xl max-h-[90dvh] overflow-y-auto bg-espresso-900 border border-espresso-700 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white shadow-velvet my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <CelestialStar className="w-4 h-4 text-earth-sand" />
              <span className="text-xs uppercase tracking-widest text-earth-sand font-semibold">
                Private Consultation
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-espresso-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-light text-white mb-2">
                  Book Your Discovery Call
                </h3>
                <p className="text-xs text-espresso-200 leading-relaxed">
                  Confidential 1:1 consultation with Payal Gulati to evaluate your core subconscious patterns, money blueprint, and transformation readiness.
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full text-xs font-mono flex items-center justify-center ${
                    step === 1 ? 'bg-earth-sand text-espresso-950 font-bold' : 'bg-white/10 text-espresso-300'
                  }`}>
                    1
                  </span>
                  <span className="text-xs text-espresso-300">Pattern Focus</span>
                </div>
                <div className="h-[1px] w-12 bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full text-xs font-mono flex items-center justify-center ${
                    step === 2 ? 'bg-earth-sand text-espresso-950 font-bold' : 'bg-white/10 text-espresso-300'
                  }`}>
                    2
                  </span>
                  <span className="text-xs text-espresso-300">Your Details</span>
                </div>
              </div>

              {step === 1 ? (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-earth-sand font-semibold mb-2">
                      What is the primary pattern you want to resolve?
                    </label>
                    <div className="space-y-2">
                      {blockOptions.map((opt) => {
                        const isSelected = formData.primaryBlock === opt;
                        return (
                          <label
                            key={opt}
                            className={`flex items-center gap-3 p-3 rounded-2xl border text-xs cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-earth-bronze/30 border-earth-clay text-white shadow-sm'
                                : 'bg-espresso-950/60 border-white/10 text-espresso-200 hover:bg-white/5'
                            }`}
                          >
                            <input
                              type="radio"
                              name="primaryBlock"
                              value={opt}
                              checked={isSelected}
                              onChange={(e) => setFormData({ ...formData, primaryBlock: e.target.value })}
                              className="sr-only"
                            />
                            <span
                              aria-hidden="true"
                              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                isSelected ? 'border-earth-sand bg-earth-sand/20' : 'border-white/30 bg-transparent'
                              }`}
                            >
                              {isSelected && <span className="w-2 h-2 rounded-full bg-earth-sand" />}
                            </span>
                            <span className="leading-snug">{opt}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Custom Styled In-Bounds Dropdown */}
                  <div ref={roleDropdownRef} className="relative">
                    <label className="block text-xs uppercase tracking-wider text-earth-sand font-semibold mb-2">
                      Which best describes your current profile?
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsRoleDropdownOpen((prev) => !prev)}
                      aria-haspopup="listbox"
                      aria-expanded={isRoleDropdownOpen}
                      className={`w-full flex items-center justify-between gap-2 px-3.5 py-3 rounded-2xl bg-espresso-950/80 border text-xs text-white text-left transition-colors cursor-pointer ${
                        isRoleDropdownOpen ? 'border-earth-sand' : 'border-white/15 hover:border-white/30'
                      }`}
                    >
                      <span className="truncate">{formData.role}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-earth-sand shrink-0 transition-transform duration-200 ${
                          isRoleDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isRoleDropdownOpen && (
                        <motion.ul
                          role="listbox"
                          initial={{ opacity: 0, y: 6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.16 }}
                          className="absolute bottom-full mb-2 left-0 right-0 z-30 rounded-2xl bg-[#1E1815] border border-[#C78460]/45 shadow-2xl p-1.5 space-y-1 max-h-56 overflow-y-auto"
                        >
                          {roleOptions.map((r) => {
                            const selected = formData.role === r;
                            return (
                              <li key={r}>
                                <button
                                  type="button"
                                  role="option"
                                  aria-selected={selected}
                                  onClick={() => {
                                    setFormData({ ...formData, role: r });
                                    setIsRoleDropdownOpen(false);
                                  }}
                                  className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-xs text-left transition-colors cursor-pointer ${
                                    selected
                                      ? 'bg-[#866452]/40 text-white font-medium border border-[#D4A373]/40'
                                      : 'text-[#E5DDD7] hover:bg-white/10'
                                  }`}
                                >
                                  <span className="leading-snug">{r}</span>
                                  {selected && <Check className="w-3.5 h-3.5 text-[#D4A373] shrink-0" />}
                                </button>
                              </li>
                            );
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsRoleDropdownOpen(false);
                      setStep(2);
                    }}
                    className="w-full calmlyss-btn calmlyss-btn-primary py-3.5 text-xs mt-4"
                  >
                    <span>Continue to Contact Info</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-earth-sand font-semibold mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-espresso-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarin Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-espresso-950/60 border border-white/10 text-xs text-white placeholder-espresso-400 focus:outline-none focus:border-earth-clay"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-earth-sand font-semibold mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-espresso-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-espresso-950/60 border border-white/10 text-xs text-white placeholder-espresso-400 focus:outline-none focus:border-earth-clay"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-earth-sand font-semibold mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-espresso-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-espresso-950/60 border border-white/10 text-xs text-white placeholder-espresso-400 focus:outline-none focus:border-earth-clay"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-earth-sand font-semibold mb-1">
                      What outcome would create an extraordinary shift for you?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Raising ₹25L funding, resolving a lead plateau, or clearing anxiety around money..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 rounded-2xl bg-espresso-950/60 border border-white/10 text-xs text-white placeholder-espresso-400 focus:outline-none focus:border-earth-clay resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 calmlyss-btn calmlyss-btn-primary py-3 text-xs shadow-serene"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Confirm Discovery Call Request</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            /* Confirmation State */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-earth-bronze/30 border border-earth-clay text-earth-sand flex items-center justify-center mx-auto mb-4 animate-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">
                Consultation Request Received
              </h3>
              <p className="text-xs sm:text-sm text-espresso-200 leading-relaxed max-w-sm mx-auto mb-6">
                Thank you, <strong className="text-white">{formData.name}</strong>. Payal's team will contact you directly on WhatsApp ({formData.phone}) to confirm your calendar slot and send your preparatory questions.
              </p>
              <div className="p-4 rounded-2xl bg-espresso-950 border border-white/10 text-left max-w-sm mx-auto mb-6 text-xs text-espresso-300 space-y-1">
                <div><strong className="text-earth-sand">Selected Focus:</strong> {formData.primaryBlock}</div>
                <div><strong className="text-earth-sand">Format:</strong> 1:1 Private Video Call</div>
                <div><strong className="text-earth-sand">Confirmation:</strong> Dispatched to {formData.email}</div>
              </div>
              <button
                onClick={handleReset}
                className="calmlyss-btn calmlyss-btn-primary py-3 px-8 text-xs"
              >
                Return to Website
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
