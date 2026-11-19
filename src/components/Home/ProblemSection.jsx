import React from 'react';
import { motion } from 'framer-motion';
import { TitleReveal } from '../TextReveal';
import mindsetProblemImg from '../../assets/images/mindset-problem.jpg';

const PROBLEM_POINTS = [
  "Your revenue goes up, but somehow there's never enough left at the end of the month.",
  'Your income fluctuates between a great month and financially uncertain periods.',
  'You struggle to charge what your products or services are actually worth.',
  "You offer discounts even when you know you shouldn't.",
  'You feel guilty spending on yourself, or anxious every time you check your account.',
  'You find it difficult to delegate, trust others or let go of control.',
  'Despite working harder, your income seems to have reached a plateau.',
  'Your business demands so much of you that your personal life and peace of mind suffer.',
];

export const ProblemSection = () => {
  return (
    <section id="the-problem" className="py-12 sm:py-16 md:py-20 bg-[#F9F6F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Top Row: Text First on Mobile, Image Left on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D9CEC7] shadow-serene aspect-[4/3] bg-[#EAE1D6]">
              <img
                src={mindsetProblemImg}
                alt="Business owner reflecting on hidden financial plateaus"
                className="block w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
              The Problem
            </span>

            <TitleReveal
              as="h2"
              text="You know how to run a business. So why does money still feel like a struggle?"
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.16] mb-4 tracking-tight"
              highlight="struggle?"
              highlightClass="italic font-display text-[#C78460] font-normal"
            />

            <div className="space-y-2.5 text-sm sm:text-[15px] text-[#6B584E] font-light leading-relaxed">
              <p>You have invested your time, money and energy into building your business.</p>
              <p>You have tried new strategies, invested in marketing, built a team and explored different opportunities.</p>
              <p className="font-serif text-xl text-[#2D201A] font-medium pt-1">
                Yet, something still feels stuck.
              </p>
            </div>
          </div>
        </div>

        {/* Does any of this sound familiar? */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D9CEC7] shadow-xs">
          <h3 className="text-xl sm:text-2xl font-serif text-[#2D201A] font-medium mb-5">
            Does any of this sound familiar?
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 mb-7">
            {PROBLEM_POINTS.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-[15px] text-[#43342D] leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C78460] shrink-0 mt-2" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="pt-5 border-t border-[#D9CEC7]/80 space-y-2">
            <p className="text-sm text-[#6B584E] font-light leading-relaxed">
              You may have already tried changing your strategy. But have you explored the patterns influencing the way you think, feel and make decisions about money?
            </p>
            <p className="text-base sm:text-lg font-serif text-[#2D201A] font-medium">
              Because sometimes, the problem isn&apos;t what you are doing.{' '}
              <span className="italic text-[#866452]">
                It&apos;s the unconscious patterns driving what you do.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
