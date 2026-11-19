import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const PillarCard = ({ pillar, idx, IconComponent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="card-soothing-white bg-white rounded-3xl p-7 border border-[#D9CEC7] hover:border-[#C78460] transition-all duration-300 shadow-serene hover:shadow-premium flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs text-[#C78460] font-semibold tracking-wider">
            {pillar.number}
          </span>
          <div className="w-10 h-10 rounded-2xl bg-[#F2ECE5] group-hover:bg-[#D4A373]/20 flex items-center justify-center text-[#2D201A] group-hover:text-[#866452] transition-colors">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        <h3 className="card-title text-xl font-serif text-[#2D201A] font-medium mb-3 leading-snug">
          {pillar.title}
        </h3>

        <p className="card-desc text-sm text-[#6B584E] font-sans leading-relaxed">
          {pillar.description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-[#D9CEC7]/60 flex items-center gap-2 text-[11px] text-[#C78460] font-medium uppercase tracking-wider">
        <Check className="w-3.5 h-3.5" />
        <span>Subconscious Target</span>
      </div>
    </motion.div>
  );
};

