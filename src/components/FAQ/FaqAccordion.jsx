import React, { useState } from 'react';
import { FaqItem } from './FaqItem';
import { FAQ_ITEMS } from '../../data/siteData';

export const FaqAccordion = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div id="faq" className="max-w-3xl mx-auto pt-6">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-[#C78460] font-semibold mb-2 block">
          Clear Answers
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif text-[#2D201A]">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-4">
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
    </div>
  );
};

