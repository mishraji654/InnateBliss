import React from 'react';
import { motion } from 'framer-motion';

/**
 * SplitReveal character-by-character animation matching the exact Calmlyss .title-reveal effect:
 * yPercent: 110 -> 0, opacity: 0 -> 1, smooth cubic-bezier easing, staggered.
 */
export const TitleReveal = ({ 
  text, 
  as = 'h2', 
  className = '', 
  delay = 0,
  stagger = 0.018,
  highlight = null,
  highlightClass = 'italic font-display text-accent-terracotta'
}) => {
  const Component = motion[as] || motion.h2;

  // If text contains parts that should be styled differently
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const charVariants = {
    hidden: {
      y: '115%',
      opacity: 0,
      rotateX: -20,
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1], // power3.out / apple-like smooth ease
      },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`title-reveal ${className}`}
    >
      {words.map((word, wordIndex) => {
        const isHighlighted = highlight && word.toLowerCase().includes(highlight.toLowerCase());
        return (
          <span
            key={wordIndex}
            className={`inline-block whitespace-nowrap overflow-hidden mr-[0.26em] align-top ${
              isHighlighted ? highlightClass : ''
            }`}
          >
            <motion.span variants={wordVariants} className="inline-block">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={charVariants}
                  className="inline-block transform-gpu will-change-transform"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
};

export const LineReveal = ({ 
  children, 
  as = 'div', 
  className = '', 
  delay = 0.1 
}) => {
  const Component = motion[as] || motion.div;

  return (
    <div className="overflow-hidden">
      <Component
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </Component>
    </div>
  );
};

