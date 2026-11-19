import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Users, Briefcase, Wallet } from 'lucide-react';
import { CelestialStar } from '../components/CelestialElements';
import { TitleReveal } from '../components/TextReveal';
import { BRAND_INFO } from '../data/siteData';

import mindsetReframeImg from '../assets/images/mindset-reframe.jpg';
import quantumWealthImg from '../assets/images/quantum-wealth-matrix.jpg';
import pillarHealthImg from '../assets/images/pillar-health.jpg';
import pillarRelationshipsImg from '../assets/images/pillar-relationships.jpg';
import whoWeWorkWithImg from '../assets/images/who-we-work-with.jpg';

const LIFE_PILLARS = [
  { label: 'Money', icon: Wallet, img: quantumWealthImg },
  { label: 'Health', icon: Heart, img: pillarHealthImg },
  { label: 'Relationships', icon: Users, img: pillarRelationshipsImg },
  { label: 'Career', icon: Briefcase, img: whoWeWorkWithImg },
];

export const AboutPage = ({ onOpenBooking }) => {
  return (
    <div className="pt-16 sm:pt-20 bg-[#F9F6F3]">
      {/* 1. Centered Editorial Page Header (Original Clean Structure) */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#F9F6F3] border-b border-[#D9CEC7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 shadow-xs">
            <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
            <span>Founder, The Innate Bliss | Wealth Mindset Coach</span>
          </div>

          <TitleReveal
            as="h1"
            text="Meet Payal Gulati: From Media to Mindset Coaching"
            className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#2D201A] leading-[1.12] mb-5 max-w-4xl mx-auto tracking-tight"
            highlight="Mindset Coaching"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <p className="text-base sm:text-lg md:text-xl text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto">
            A Journey of Discovering What Truly Creates Success.
          </p>
        </div>
      </section>

      {/* 2. Founder Portrait + Media-to-Mindset Narrative */}
      <section className="py-16 sm:py-20 bg-[#F2ECE5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: HD Founder Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-[2.2rem] bg-white border border-[#D9CEC7] overflow-hidden shadow-premium max-w-md mx-auto">
                <div className="aspect-[4/5] relative bg-[#F2ECE5]">
                  <img
                    src={BRAND_INFO.founderPhoto}
                    alt="Payal Gulati - Founder, The Innate Bliss"
                    fetchPriority="high"
                    className="block w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.src = BRAND_INFO.coachPayal;
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#140F0D]/80 via-[#140F0D]/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/85 text-center shadow-lg">
                    <h3 className="text-lg font-serif text-[#2D201A] font-semibold">
                      Payal Gulati
                    </h3>
                    <p className="text-[11px] text-[#6B584E]">
                      Founder, The Innate Bliss · Wealth Mindset Coach
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Media to Mindset Story */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.18em] text-[#C78460] font-semibold mb-2 block">
                About the Founder
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-snug mb-5">
                From Media to Mindset Coaching – A Journey of Discovering What Truly Creates Success.
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-[#6B584E] font-light leading-relaxed">
                <p>
                  For nearly two decades, I worked in the media and corporate world, building my career, taking on responsibilities and working towards professional success.
                </p>
                <p>
                  From the outside, everything looked fine. I had a stable career, professional recognition and a good income. But behind the scenes, I was working 14-hour days and constantly trying to achieve more.
                </p>
                <p className="text-[#2D201A] font-medium">
                  But over time, I began to realise that external success doesn&apos;t always translate into inner fulfilment.
                </p>
                <p>
                  This curiosity led me to explore something deeper – the human mind, our subconscious beliefs, emotional patterns and the invisible factors that influence the way we think, behave and experience life.
                </p>
                <p>
                  What started as a personal exploration gradually became my passion and purpose.
                </p>
                <p>
                  I trained in <strong className="font-medium text-[#2D201A]">NLP, EFT, Ho&apos;oponopono</strong> and other transformation practices. Eventually, I made a conscious transition from the media world to coaching and founded <strong className="font-medium text-[#2D201A]">The Innate Bliss</strong> with a vision to help people create meaningful transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Personal Journey with Money (Fruit vs Roots Pictorial) */}
      <section className="py-14 sm:py-16 md:py-20 bg-[#F9F6F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <TitleReveal
                as="h2"
                text="My Personal Journey with Money Changed Everything."
                className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.16] mb-5 tracking-tight"
                highlight="Changed Everything."
                highlightClass="italic font-display text-[#C78460] font-normal"
              />

              <div className="space-y-3.5 text-sm sm:text-base text-[#6B584E] font-light leading-relaxed mb-6">
                <p>
                  For the longest time, I was trying to fix everything on the outside – my strategies, pricing and marketing funnels.
                </p>
                <p>
                  I was working 14-hour days, putting in everything I had, yet my income seemed to be stuck at the same level.
                </p>
                <p>
                  Until I realised something that changed the way I looked at wealth and success.
                </p>
              </div>

              <blockquote className="p-5 sm:p-6 rounded-2xl bg-[#F2ECE5] border-l-4 border-[#866452]">
                <p className="text-xl sm:text-2xl font-serif text-[#2D201A] font-semibold leading-snug mb-2">
                  I was trying to change the fruit while ignoring the roots.
                </p>
                <p className="text-sm sm:text-[15px] text-[#43342D] leading-relaxed">
                  Think about a tree. When it stops bearing healthy fruit, you don&apos;t try to fix each fruit individually. You look at the roots. The same applies to our lives.
                </p>
              </blockquote>
            </div>

            {/* Right Pictorial Tree & Roots Visual */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl sm:rounded-[2rem] overflow-hidden border border-[#D9CEC7] shadow-premium aspect-[4/3] bg-[#EAE1D6]">
                <img
                  src={mindsetReframeImg}
                  alt="Deep grounded tree roots illuminated by morning light"
                  className="block w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Birth of the Quantum Wealth Matrix Method */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F2ECE5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Pictorial Coaching Session (Second on Mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="rounded-3xl sm:rounded-[2rem] overflow-hidden border border-[#D9CEC7] shadow-premium aspect-[4/3] bg-[#EAE1D6]">
                <img
                  src={quantumWealthImg}
                  alt="Quantum Wealth Matrix Method coaching lounge"
                  className="block w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Right Story (First on Mobile) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-3.5 text-sm sm:text-base text-[#6B584E] font-light leading-relaxed">
              <p>
                Our external results are influenced by many factors, including our beliefs, subconscious patterns, emotional conditioning and the way we perceive ourselves and money.
              </p>
              <p>
                I realised that if I wanted different financial results, I had to stop looking only at external strategies and start understanding my internal money patterns.
              </p>
              <p>
                As I began working on my own beliefs and emotional blocks around money, I noticed changes in the way I thought, felt, made decisions and responded to opportunities.
              </p>
              <p className="text-base sm:text-lg font-serif text-[#2D201A] font-medium">
                That personal journey became the foundation of my{' '}
                <span className="italic text-[#866452]">Quantum Wealth Matrix Method.</span>
              </p>
              <p>
                Today, I bring together my personal experience, coaching practice and training in transformation modalities to help business owners work on their money mindset and create a stronger foundation for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: My Belief & Pictorial 4-Pillar Mosaic + CTA */}
      <section className="py-14 sm:py-16 md:py-20 bg-[#F9F6F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* 4 Pictorial Pillars Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
            {LIFE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="rounded-2xl overflow-hidden border border-[#D9CEC7] bg-white shadow-xs group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#EAE1D6]">
                    <img
                      src={pillar.img}
                      alt={pillar.label}
                      className="block w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-3.5 flex items-center justify-center gap-2">
                    <Icon className="w-4 h-4 text-[#866452]" />
                    <span className="font-serif text-base font-medium text-[#2D201A]">
                      {pillar.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* My Belief Dark Editorial Card */}
          <div className="max-w-4xl mx-auto rounded-3xl sm:rounded-[2.5rem] bg-[#191412] border border-[#3A2E28] p-7 sm:p-12 text-center shadow-velvet">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#D4A373] text-[10px] sm:text-xs uppercase tracking-[0.18em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>My Belief</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-light leading-snug mb-5">
              You don&apos;t always need another strategy. Sometimes, you need to work on the{' '}
              <span className="italic text-[#D4A373]">roots</span> that are influencing your results.
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-[#D9CEC7] font-light leading-relaxed max-w-2xl mx-auto mb-8">
              <p>
                At The Innate Bliss, I believe that a truly fulfilling life is built on four important pillars – <strong className="text-white font-medium">Money, Health, Relationships and Career.</strong>
              </p>
              <p>
                My mission is to help people transform from within so they can create greater success, experience deeper fulfilment and enjoy the life they are working so hard to build.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="calmlyss-btn calmlyss-btn-gold py-3.5 px-8 text-xs sm:text-sm w-full sm:w-auto"
            >
              <span>Know More About Payal</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
