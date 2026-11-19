import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Clock } from 'lucide-react';

export const ProgramCard = ({ program, idx, onOpenBooking }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.05 }}
      className="card-soothing-white rounded-2xl overflow-hidden border border-[#D9CEC7] bg-white transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-premium hover:border-[#866452]"
    >
      <div>
        {/* Real Image from Existing Website - Compact Aspect */}
        {program.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F2ECE5]">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            

            
          </div>
        )}

        <div className="p-4 sm:p-5">
          {/* Duration Ticker */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-sans flex items-center gap-1 text-[#8A766C]">
              <Clock className="w-3 h-3 text-[#C78460]" />
              {program.duration}
            </span>
          </div>

          {/* Title - Clean & Crisp */}
          <h3 className="card-title text-base sm:text-lg font-serif font-medium mb-1.5 leading-snug text-[#2D201A] line-clamp-2">
            {program.title}
          </h3>

          {/* Minimal 2-Line Summary Description */}
          <p className="card-desc text-xs font-light leading-relaxed text-[#6B584E] line-clamp-2">
            {program.description}
          </p>
        </div>
      </div>

      {/* Action Row - "Read More" & "Apply" */}
      <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-[#D9CEC7]/60 flex items-center justify-between gap-3">
        <Link
          to={`/programs/${program.id}`}
          className="text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1 text-[#2D201A] hover:text-[#866452] transition-colors group-hover:text-[#866452]"
        >
          <span>Read More</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        <button
          onClick={onOpenBooking}
          className="inline-flex items-center justify-center py-1.5 px-3.5 rounded-full text-xs font-medium uppercase tracking-wider bg-[#866452] hover:bg-[#6B584E] text-white shadow-xs transition-colors cursor-pointer"
        >
          Apply
        </button>
      </div>
    </motion.div>
  );
};
