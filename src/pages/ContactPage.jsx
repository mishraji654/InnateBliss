import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, Globe, CheckCircle2, ShieldCheck, Sparkles, Clock, Calendar, Send } from 'lucide-react';
import { CelestialStar } from '../components/CelestialElements';
import { TitleReveal, LineReveal } from '../components/TextReveal';
import { BRAND_INFO, FOUNDER_BIO } from '../data/siteData';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    primaryGoal: 'money-mastery',
    currentStruggle: '',
    timeline: 'immediately'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 sm:pt-36 bg-[#F9F6F3]">
      
      {/* 1. Page Header */}
      <section className="py-16 sm:py-24 bg-[#F9F6F3] border-b border-[#D9CEC7]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 shadow-xs">
            <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
            <span>Confidential Discovery Conversation</span>
          </div>

          <TitleReveal
            as="h1"
            text="Your Next Chapter Begins With a Single Shift"
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2D201A] leading-[1.12] mb-6 max-w-4xl mx-auto tracking-tight"
            highlight="Single Shift"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <LineReveal delay={0.25}>
            <p className="text-base sm:text-lg md:text-xl text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto">
              Schedule your 1:1 confidential discovery session with Payal Gulati. We will map your subconscious patterns and determine whether our immersion programs are the right fit for your expansion.
            </p>
          </LineReveal>
        </div>
      </section>

      {/* 2. Main Form & Coordinates Section */}
      <section className="py-20 sm:py-28 bg-[#F2ECE5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Interactive Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 sm:p-12 border border-[#D9CEC7] shadow-premium">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#F2ECE5] text-[#866452] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#2D201A] mb-3">
                    Application Received With Reverence
                  </h3>
                  <p className="text-sm text-[#6B584E] font-light max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <span className="font-semibold text-[#2D201A]">{formData.name}</span>. Payal's private office will review your responses and reach out within 24 hours with your Zoom consultation invitation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="calmlyss-btn calmlyss-btn-secondary text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif text-[#2D201A] mb-1">
                      Step 1: Choose Your Primary Focus
                    </h2>
                    <p className="text-xs text-[#8A766C]">
                      Select the core area where you are currently experiencing subconscious resistance.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'money-mastery', label: 'Money Ceiling & Business Growth' },
                      { id: 'emotional-freedom', label: 'Emotional & Anxiety Release' },
                      { id: 'relationship-harmony', label: 'Relationship & Intimacy Patterns' },
                      { id: 'executive-grounding', label: 'Executive Grounding & Clarity' },
                    ].map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center gap-3 p-3.5 rounded-2xl border text-xs font-medium cursor-pointer transition-all ${
                          formData.primaryGoal === option.id
                            ? 'border-[#866452] bg-[#F2ECE5] text-[#2D201A] shadow-xs'
                            : 'border-[#D9CEC7] bg-white text-[#6B584E] hover:border-[#C78460]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="primaryGoal"
                          value={option.id}
                          checked={formData.primaryGoal === option.id}
                          onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                          className="accent-[#866452]"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-[#D9CEC7]/60">
                    <h3 className="text-lg font-serif text-[#2D201A] mb-4">
                      Step 2: Your Details
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#2D201A] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Aarin Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-[#D9CEC7] focus:border-[#866452] focus:outline-none bg-[#F9F6F3] text-sm text-[#2D201A]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-[#2D201A] mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@domain.com"
                            className="w-full px-4 py-3 rounded-xl border border-[#D9CEC7] focus:border-[#866452] focus:outline-none bg-[#F9F6F3] text-sm text-[#2D201A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-[#2D201A] mb-1.5">
                            WhatsApp / Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl border border-[#D9CEC7] focus:border-[#866452] focus:outline-none bg-[#F9F6F3] text-sm text-[#2D201A]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#2D201A] mb-1.5">
                          Describe the recurring pattern or limitation you wish to resolve
                        </label>
                        <textarea
                          rows={4}
                          value={formData.currentStruggle}
                          onChange={(e) => setFormData({ ...formData, currentStruggle: e.target.value })}
                          placeholder="e.g. My business hits a revenue wall every quarter, or I feel intense unconscious resistance when asking for higher fees..."
                          className="w-full px-4 py-3 rounded-xl border border-[#D9CEC7] focus:border-[#866452] focus:outline-none bg-[#F9F6F3] text-sm text-[#2D201A]"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full calmlyss-btn calmlyss-btn-primary py-4 text-xs shadow-serene group"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Submit Discovery Application</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <p className="text-[11px] text-center text-[#8A766C] mt-2.5">
                      100% Confidential. All communications are bound by professional non-disclosure.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Office Coordinates & Next Steps */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Coordinates Card */}
              <div className="p-8 rounded-[2rem] bg-white border border-[#D9CEC7] shadow-sm">
                <span className="text-xs uppercase tracking-widest text-[#C78460] font-semibold mb-2 block">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-serif text-[#2D201A] mb-4">
                  The Innate Bliss Office
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#6B584E]">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#866452] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[#2D201A] font-medium">Official Correspondence</div>
                      <a href="mailto:contact@theinnatebliss.com" className="hover:text-[#866452] transition-colors">
                        contact@theinnatebliss.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-[#866452] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[#2D201A] font-medium">Official Web Destinations</div>
                      <div className="space-y-0.5 mt-0.5">
                        <a href="https://theinnatebliss.com" target="_blank" rel="noreferrer" className="block hover:text-[#866452]">theinnatebliss.com</a>
                        <a href="https://theinnatebliss.in" target="_blank" rel="noreferrer" className="block hover:text-[#866452]">theinnatebliss.in</a>
                        <a href="https://www.theinnatebliss.co.in" target="_blank" rel="noreferrer" className="block hover:text-[#866452]">theinnatebliss.co.in</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#866452] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[#2D201A] font-medium">Session Availability</div>
                      <p className="text-xs text-[#8A766C]">Monday – Saturday, by prior appointment only (Global Zoom sessions).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="p-8 rounded-[2rem] bg-[#F2ECE5] border border-[#D9CEC7]">
                <h4 className="text-lg font-serif font-medium text-[#2D201A] mb-4">
                  What Happens After You Apply:
                </h4>

                <div className="space-y-3.5 text-xs text-[#6B584E]">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#866452] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">1</div>
                    <p><strong className="text-[#2D201A]">Intake Review:</strong> Payal personally reviews your submission within 24 hours.</p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#866452] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">2</div>
                    <p><strong className="text-[#2D201A]">Diagnostic Invitation:</strong> If aligned, you will receive a direct link to select your Zoom timeslot.</p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#866452] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">3</div>
                    <p><strong className="text-[#2D201A]">Preliminary Prep:</strong> A brief somatic reflection sheet is provided to maximize session depth.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

