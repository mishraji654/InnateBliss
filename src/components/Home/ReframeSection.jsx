import React from 'react';
import { motion } from 'framer-motion';
import { TitleReveal } from '../TextReveal';
import mindsetReframeImg from '../../assets/images/mindset-reframe.jpg';

const PATTERN_AREAS = [
  'Price your products and services.',
  'Negotiate and close deals.',
  'Receive and manage money.',
  'Take calculated risks.',
  'Delegate and make business decisions.',
  'Recognise and act on opportunities.',
];

export const ReframeSection = () => {
  return (
    <section id="the-reframe" className="py-14 sm:py-16 md:py-20 bg-[#F2ECE5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7">
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
              The Reframe
            </span>

            <TitleReveal
              as="h2"
              text="It May Not Be Another Strategy You Need. It May Be a Different Money Mindset."
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.15] mb-4 tracking-tight"
              highlight="Money Mindset."
              highlightClass="italic font-display text-[#C78460] font-normal"
            />

            <div className="space-y-2.5 text-sm sm:text-[15px] text-[#6B584E] font-light leading-relaxed mb-5">
              <p>
                Your conscious goals may be clear. You want more revenue, better profits, financial stability and greater opportunities.
              </p>
              <p>
                But beneath those goals are beliefs, fears, emotional conditioning and habits that influence how you respond to money.
              </p>
            </div>

            <p className="text-sm font-medium text-[#2D201A] mb-3">
              These patterns can show up in the way you:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
              {PATTERN_AREAS.map((area, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-[#43342D] leading-relaxed"
                >
                  <span className="text-[11px] font-mono text-[#C78460] font-semibold mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-2 border-[#866452] pl-4 space-y-1.5">
              <p className="text-sm text-[#6B584E] leading-relaxed">
                Until you begin addressing these underlying patterns, you may find yourself repeating familiar behaviours despite knowing what needs to change.
              </p>
              <p className="text-base sm:text-lg font-serif text-[#2D201A] font-medium">
                The first step towards different results is understanding what&apos;s driving your existing patterns.
              </p>
            </div>
          </div>

          {/* Right Sunlit Roots Photo */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl overflow-hidden border border-[#D9CEC7] shadow-serene aspect-[4/3] bg-[#EAE1D6]">
              <img
                src={mindsetReframeImg}
                alt="Deep grounded roots nourished by morning sunlight"
                className="block w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
