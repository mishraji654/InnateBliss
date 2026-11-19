import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Briefcase, Wallet, CheckCircle2 } from 'lucide-react';
import { CelestialStar } from '../components/CelestialElements';
import { TitleReveal } from '../components/TextReveal';

import platinumLifestyleImg from '../assets/images/platinum-lifestyle.jpg';
import pillarHealthImg from '../assets/images/pillar-health.jpg';
import pillarRelationshipsImg from '../assets/images/pillar-relationships.jpg';
import whoWeWorkWithImg from '../assets/images/who-we-work-with.jpg';
import quantumWealthImg from '../assets/images/quantum-wealth-matrix.jpg';

const HEALTH_POINTS = [
  'Struggling with stress, anxiety, overthinking or racing thoughts.',
  'Finding it difficult to relax, unwind or get restful sleep.',
  'Experiencing anger, hurt, frustration or emotional outbursts.',
  'Carrying unresolved emotions or repeating negative patterns that hold you back.',
  'Experiencing stress-related physical discomfort and tension.',
  'Feeling empty, stuck or unfulfilled despite having everything you once wished for.',
  'Struggling with emotional eating or cravings for sweets, junk food, tea or coffee.',
];

const PERSONAL_RELATIONSHIP_POINTS = [
  'Struggling with self-love, self-confidence and emotional balance.',
  'Conflicts, misunderstandings or disconnection with your spouse.',
  'Facing challenges with parents, children or friends.',
  'Feeling unheard, unsupported, unappreciated or misunderstood.',
  'Wanting love, trust, connection, understanding and harmony in your relationships.',
];

const PROFESSIONAL_RELATIONSHIP_POINTS = [
  'Experiencing difficult relationships with your boss, colleagues or teams.',
  'Facing challenges in managing client relationships.',
  'Struggling with effective communication or setting healthy boundaries.',
  'Wanting stronger professional relationships and collaboration.',
];

const CAREER_POINTS = [
  'Are you currently jobless or struggling to find the right job?',
  'Have you been waiting for an increment or promotion for a long time?',
  'Do you feel stuck in your current role with limited opportunities for growth?',
  'Do you feel your skills and potential are not being recognised?',
  'Are you struggling with confidence, workplace relationships or communication?',
  'Do you feel unfulfilled or unsure about the next step in your career?',
];

const MONEY_POINTS = [
  'Is your income stuck at the same level despite your efforts?',
  'Are you struggling to save money or build financial security?',
  'Do you feel dependent on a single source of income?',
  'Are you finding it difficult to close business deals or convert leads into sales?',
  'Do you struggle to sell confidently, communicate your value or ask for the price you deserve?',
  'Are your business deals getting delayed or stuck?',
  'Do debts, loans or financial responsibilities feel overwhelming?',
  'Do you feel your business or financial growth is not matching your potential?',
];

export const PlatinumPage = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#F9F6F3] pt-16 sm:pt-20">
      {/* Pictorial Hero Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#F9F6F3] relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Intro */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D9CEC7] text-[#866452] text-[10px] sm:text-xs uppercase tracking-[0.18em] font-semibold mb-4 shadow-xs">
                <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
                <span>Platinum Lifetime Membership</span>
              </div>

              <TitleReveal
                as="h1"
                text="True Success Is More Than Financial Growth. It's About Creating a Better Life."
                className="text-3xl sm:text-4xl md:text-[44px] font-serif text-[#2D201A] leading-[1.12] mb-5 tracking-tight"
                highlight="Creating a Better Life."
                highlightClass="italic font-display text-[#C78460] font-normal"
              />

              <div className="space-y-3.5 text-sm sm:text-base text-[#6B584E] font-light leading-relaxed mb-6">
                <p className="font-serif text-xl sm:text-2xl text-[#2D201A] font-medium">
                  Money matters. But is money alone enough to make you feel successful?
                </p>
                <p>
                  What is the value of business growth if your health suffers? What is the joy of financial abundance if your relationships are constantly strained? And what is the point of professional success if you don&apos;t feel fulfilled?
                </p>
                <p>
                  At The Innate Bliss, we believe a fulfilling life is built around four interconnected pillars:
                </p>
              </div>

              {/* Four Pillars Interactive Jump Strip */}
              <div className="flex flex-wrap items-center gap-2.5">
                {[
                  { label: 'HEALTH', href: '#pillar-health' },
                  { label: 'RELATIONSHIPS', href: '#pillar-relationships' },
                  { label: 'CAREER', href: '#pillar-career' },
                  { label: 'MONEY', href: '#pillar-money' },
                ].map((pillar) => (
                  <a
                    key={pillar.label}
                    href={pillar.href}
                    className="px-4 py-2 rounded-full bg-white border border-[#D9CEC7] hover:border-[#866452] text-xs font-semibold tracking-[0.16em] text-[#2D201A] transition-colors shadow-xs"
                  >
                    {pillar.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Pictorial Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl sm:rounded-[2rem] overflow-hidden border border-[#D9CEC7] shadow-premium aspect-[4/3] bg-[#EAE1D6]">
                <img
                  src={platinumLifestyleImg}
                  alt="Platinum Lifetime Membership holistic lifestyle"
                  fetchPriority="high"
                  className="block w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platinum Lifestyle Philosophy Band */}
      <section className="py-12 sm:py-16 bg-[#F2ECE5] border-y border-[#D9CEC7]/70">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#2D201A] font-medium leading-snug">
            That&apos;s why we created{' '}
            <span className="italic text-[#866452]">
              Platinum – Your Lifetime Journey of Holistic Transformation.
            </span>{' '}
            Platinum is not a course. It&apos;s a lifestyle.
          </h2>
          <p className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed">
            It&apos;s about making personal growth a part of your everyday life, continuously evolving and creating positive changes across every important area of life.
          </p>
          <p className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed">
            Whether you want to improve your emotional wellbeing, build stronger relationships, find greater career fulfilment or develop a healthier relationship with money, Platinum gives you a space to work on the inner patterns, beliefs and emotions that influence these areas.
          </p>
          <p className="text-base sm:text-lg font-serif text-[#2D201A] font-medium pt-1">
            Because true success isn&apos;t just about earning more. It&apos;s about creating a life where you feel healthier, happier, more fulfilled and connected.
          </p>
        </div>
      </section>

      {/* Four Pictorial Pillars Showcase */}
      <section className="py-14 sm:py-20 bg-[#F9F6F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          {/* Pillar 1: Health & Emotional Well-being */}
          <motion.article
            id="pillar-health"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="card-soothing-white rounded-[2rem] bg-white border border-[#D9CEC7] overflow-hidden shadow-premium grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] bg-[#EAE1D6]">
              <img
                src={pillarHealthImg}
                alt="Health and Emotional Well-being sanctuary"
                className="block w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F2ECE5] text-[#866452] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#C78460] font-semibold">
                    Pillar 01
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#2D201A] font-medium">
                    Health &amp; Emotional Well-being
                  </h2>
                </div>
              </div>
              <ul className="space-y-3">
                {HEALTH_POINTS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#43342D] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#866452] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          {/* Pillar 2: Relationships */}
          <motion.article
            id="pillar-relationships"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="card-soothing-white rounded-[2rem] bg-white border border-[#D9CEC7] overflow-hidden shadow-premium grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] bg-[#EAE1D6] lg:order-2">
              <img
                src={pillarRelationshipsImg}
                alt="Personal and Professional Relationships harmony"
                className="block w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 lg:order-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F2ECE5] text-[#866452] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#C78460] font-semibold">
                    Pillar 02
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#2D201A] font-medium">
                    Relationships
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-[#F9F6F3] border border-[#D9CEC7]/80">
                  <h3 className="text-lg font-serif text-[#2D201A] font-semibold mb-3">
                    Personal Relationships
                  </h3>
                  <ul className="space-y-2.5">
                    {PERSONAL_RELATIONSHIP_POINTS.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#43342D] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#866452] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#F9F6F3] border border-[#D9CEC7]/80">
                  <h3 className="text-lg font-serif text-[#2D201A] font-semibold mb-3">
                    Professional Relationships
                  </h3>
                  <ul className="space-y-2.5">
                    {PROFESSIONAL_RELATIONSHIP_POINTS.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#43342D] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#866452] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Pillar 3: Career */}
          <motion.article
            id="pillar-career"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="card-soothing-white rounded-[2rem] bg-white border border-[#D9CEC7] overflow-hidden shadow-premium grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] bg-[#EAE1D6]">
              <img
                src={whoWeWorkWithImg}
                alt="Career Growth and Fulfilment"
                className="block w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F2ECE5] text-[#866452] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#C78460] font-semibold">
                    Pillar 03
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#2D201A] font-medium">
                    Career
                  </h2>
                </div>
              </div>
              <ul className="space-y-3">
                {CAREER_POINTS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#43342D] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#866452] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          {/* Pillar 4: Money */}
          <motion.article
            id="pillar-money"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="card-soothing-white rounded-[2rem] bg-white border border-[#D9CEC7] overflow-hidden shadow-premium grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] bg-[#EAE1D6] lg:order-2">
              <img
                src={quantumWealthImg}
                alt="Money and Financial Growth"
                className="block w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 lg:order-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F2ECE5] text-[#866452] flex items-center justify-center shrink-0">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#C78460] font-semibold">
                    Pillar 04
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#2D201A] font-medium">
                    Money
                  </h2>
                </div>
              </div>
              <ul className="space-y-3">
                {MONEY_POINTS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#43342D] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#866452] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Closing Platinum CTA */}
      <section className="py-14 sm:py-20 bg-[#F2ECE5]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="rounded-3xl sm:rounded-[2.5rem] bg-[#191412] border border-[#3A2E28] p-8 sm:p-12 text-center shadow-velvet">
            <p className="text-base sm:text-lg md:text-xl font-serif text-[#E5DDD7] font-light leading-relaxed mb-7 max-w-2xl mx-auto">
              Whether you want to feel more balanced, strengthen your relationships, grow professionally or create a more empowering relationship with money, Platinum gives you a pathway to keep evolving.
            </p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="calmlyss-btn calmlyss-btn-gold py-3.5 px-7 sm:px-9 text-xs sm:text-sm w-full sm:w-auto"
            >
              <span>Discover Platinum Lifetime Membership</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
