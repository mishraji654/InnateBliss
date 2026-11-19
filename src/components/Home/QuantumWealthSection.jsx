import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { TitleReveal } from '../TextReveal';
import quantumWealthImg from '../../assets/images/quantum-wealth-matrix.jpg';

const TRANSFORMATION_PHASES = [
  {
    number: '01',
    title: 'Release Your Root Blocks',
    description:
      'Identify and work through the fears, limiting beliefs, emotional blocks and old money stories that may be keeping you from moving forward.',
  },
  {
    number: '02',
    title: 'Elevate Your Money Mindset',
    description:
      'Develop a healthier relationship with money, strengthen your sense of self-worth and build greater confidence around pricing, receiving, opportunities and financial growth.',
  },
  {
    number: '03',
    title: 'Sustain & Scale',
    description:
      'Translate your internal transformation into more confident everyday actions, including pricing decisions, sales conversations, delegation, financial habits and business choices.',
  },
];

const JOURNEY_HIGHLIGHTS = [
  'A structured 9-week transformation journey.',
  'Two live group sessions every week.',
  'Personal guidance and accountability.',
  'Practical mindset and emotional transformation exercises.',
  'Guided practices, recordings and workbooks.',
  'A supportive community of like-minded entrepreneurs.',
];

export const QuantumWealthSection = ({ onOpenBooking }) => {
  return (
    <section
      id="quantum-wealth-matrix"
      className="py-14 sm:py-16 md:py-20 bg-[#F9F6F3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-7">
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
              Signature Program
            </span>

            <TitleReveal
              as="h2"
              text="Introducing the Quantum Wealth Matrix Method"
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.15] mb-2.5 tracking-tight"
              highlight="Quantum Wealth Matrix"
              highlightClass="italic font-display text-[#C78460] font-normal"
            />

            <p className="text-base sm:text-lg font-serif text-[#866452] font-medium mb-4">
              A 9-Week Money Mindset Transformation Journey for Business Owners, Founders and Entrepreneurs.
            </p>

            <div className="space-y-3 text-sm sm:text-[15px] text-[#6B584E] font-light leading-relaxed mb-4">
              <p>
                You have worked hard to build your business. Now it&apos;s time to work on the mindset that supports your next level of growth.
              </p>
              <p>
                The Quantum Wealth Matrix Method is a structured, high-accountability transformation program designed to help you identify money-related subconscious patterns, work through limiting beliefs and develop healthier, more empowering ways of thinking and responding to money.
              </p>
            </div>

            <div className="border-l-2 border-[#866452] pl-4 space-y-1 text-sm text-[#43342D]">
              <p className="font-medium text-[#2D201A]">
                This is not another business strategy course.
              </p>
              <p>
                It&apos;s an opportunity to work on the internal patterns that may be influencing your financial decisions, business behaviour and relationship with wealth.
              </p>
            </div>
          </div>

          {/* Right Editorial Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl overflow-hidden border border-[#D9CEC7] shadow-serene aspect-[4/3] bg-[#EAE1D6]">
              <img
                src={quantumWealthImg}
                alt="Quantum Wealth Matrix Method executive coaching session"
                className="block w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Three Phases of Transformation */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-serif text-[#2D201A] font-medium mb-5">
            Your Three Phases of Transformation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TRANSFORMATION_PHASES.map((phase) => (
              <article
                key={phase.number}
                className="p-6 rounded-2xl bg-white border border-[#D9CEC7]/90 shadow-xs"
              >
                <span className="text-xs font-mono tracking-widest text-[#C78460] font-semibold">
                  {phase.number}.
                </span>
                <h4 className="text-xl font-serif text-[#2D201A] font-medium mt-1 mb-2">
                  {phase.title}
                </h4>
                <p className="text-sm text-[#6B584E] font-light leading-relaxed">
                  {phase.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* What Makes This Journey Different */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#191412] border border-[#3A2E28] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-light mb-5">
                What Makes This Journey Different?
              </h3>
              <button
                type="button"
                onClick={onOpenBooking}
                className="calmlyss-btn calmlyss-btn-gold py-3.5 px-6 text-xs sm:text-sm w-full sm:w-auto"
              >
                <span>Explore the Quantum Wealth Matrix Method</span>
              </button>
            </div>

            <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {JOURNEY_HIGHLIGHTS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#E5DDD7] font-light leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A373] shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
