import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { TitleReveal } from '../TextReveal';
import whoWeWorkWithImg from '../../assets/images/who-we-work-with.jpg';

const IDEAL_FOR_POINTS = [
  'Business owners who feel stuck at an income or revenue plateau.',
  'Founders who want to develop a stronger relationship with money and growth.',
  'Entrepreneurs who struggle with pricing, receiving, sales or financial confidence.',
  'Business owners who are tired of repeating the same financial patterns.',
  'Individuals who are ready to invest in their personal growth alongside their business growth.',
];

export const WhoWeWorkWithSection = () => {
  return (
    <section id="who-we-work-with" className="py-12 sm:py-16 md:py-20 bg-[#F2ECE5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
          {/* Left Editorial Image (Second on Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D9CEC7] shadow-serene aspect-[4/3] bg-[#EAE1D6]">
              <img
                src={whoWeWorkWithImg}
                alt="Confident entrepreneur ready for next-level growth"
                className="block w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Profiles (First on Mobile) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
              Who We Work With
            </span>

            <TitleReveal
              as="h2"
              text="For Business Owners Who Know They Are Capable of More."
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.15] mb-3 tracking-tight"
              highlight="Capable of More."
              highlightClass="italic font-display text-[#C78460] font-normal"
            />

            <p className="text-sm sm:text-base text-[#6B584E] font-light mb-5">
              The Quantum Wealth Matrix Method is designed for:
            </p>

            <ul className="space-y-3 mb-6">
              {IDEAL_FOR_POINTS.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#43342D] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#866452] shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-2 border-t border-[#D9CEC7]/80 pt-4 text-sm leading-relaxed">
              <p className="text-[#2D201A] font-medium">
                This program is for you if you are willing to look within, take responsibility for your growth and consistently apply what you learn.
              </p>
              <p className="text-[#8A766C]">
                It is not for those looking for stock tips, guaranteed income, quick-money schemes or someone to do the work for them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
