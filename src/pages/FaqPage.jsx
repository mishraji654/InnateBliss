import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';
import { CelestialStar } from '../components/CelestialElements';
import { TitleReveal, LineReveal } from '../components/TextReveal';
import { FaqItem } from '../components/FAQ/FaqItem';
import { FAQ_ITEMS } from '../data/siteData';
import { Link } from 'react-router-dom';

export const FaqPage = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="pt-28 sm:pt-36 bg-[#F9F6F3]">

      {/* 1. Page Header */}
      <section className="py-16 sm:py-24 bg-[#F9F6F3] border-b border-[#D9CEC7]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 shadow-xs">
            <CelestialStar className="w-3.5 h-3.5 text-[#C78460]" />
            <span>Transparency & Understanding</span>
          </div>

          <TitleReveal
            as="h1"
            text="Frequently Asked Questions & Inquiries"
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2D201A] leading-[1.12] mb-6 max-w-4xl mx-auto tracking-tight"
            highlight="Questions"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />

          <LineReveal delay={0.25}>
            <p className="text-base sm:text-lg md:text-xl text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Everything you need to know about the subconscious transformation process, session mechanics, confidentiality, and what to expect when working with Payal Gulati.
            </p>
          </LineReveal>
        </div>
      </section>

      {/* 2. Interactive FAQ Accordion Section */}
      <section className="py-20 sm:py-28 bg-[#F2ECE5]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="space-y-4 mb-16">
            {FAQ_ITEMS.map((item, idx) => (
              <FaqItem
                key={idx}
                item={item}
                idx={idx}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>

          {/* Still have questions card */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-[#D9CEC7] shadow-premium text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#F2ECE5] text-[#866452] flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#2D201A] font-medium mb-2">
              Have a question not addressed here?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B584E] max-w-md mx-auto mb-6">
              Every individual's life situation and pattern history is unique. We invite you to schedule a confidential 1:1 discovery conversation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="calmlyss-btn calmlyss-btn-primary"
              >
                <span>Book</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="calmlyss-btn calmlyss-btn-secondary"
              >
                <span>Contact Our Office</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

