import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const MethodologyStepCard = ({ step, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="card-soothing-white rounded-[2.2rem] bg-white border border-[#D9CEC7] p-8 flex flex-col justify-between shadow-serene hover:shadow-premium hover:border-[#C78460] transition-all duration-300 group"
    >
      <div>
        {/* Step Number Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-3xl font-light text-[#C78460]">
            {step.step}
          </span>
          <div className="w-8 h-8 rounded-full bg-[#F2ECE5] group-hover:bg-[#D4A373]/20 flex items-center justify-center text-[#2D201A] group-hover:text-[#866452] transition-colors">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-widest text-[#C78460] font-semibold mb-1">
          {step.subtitle}
        </div>

        <h3 className="card-title text-xl font-serif font-medium text-[#2D201A] mb-3 leading-snug">
          {step.title}
        </h3>

        <p className="card-desc text-xs sm:text-sm text-[#6B584E] font-light leading-relaxed mb-6">
          {step.description}
        </p>
      </div>

      {/* Concrete Outcome */}
      <div className="pt-4 border-t border-[#D9CEC7]/60">
        <div className="text-[10px] uppercase tracking-wider text-[#8A766C] font-semibold mb-1">
          Tangible Milestone:
        </div>
        <div className="text-xs font-medium text-[#2D201A] flex items-start gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#866452] shrink-0 mt-0.5" />
          <span>{step.outcome}</span>
        </div>
      </div>
    </motion.div>
  );
};

