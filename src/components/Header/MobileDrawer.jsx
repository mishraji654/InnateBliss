import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';

export const MobileDrawer = ({ isOpen, onClose, navigationItems, onOpenBooking }) => {
  // Track open accordion section in mobile drawer
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (name) => {
    setExpandedSection(expandedSection === name ? null : name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-16 sm:top-20 bottom-0 z-50 bg-[#F9F6F3] border-t border-[#D9CEC7] md:hidden overflow-y-auto shadow-2xl flex flex-col justify-between"
        >
          <div className="max-w-xl mx-auto w-full px-6 py-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => {
                if (item.dropdown) {
                  const isExpanded = expandedSection === item.name;
                  return (
                    <div key={item.name} className="py-1">
                      <button
                        type="button"
                        onClick={() => toggleSection(item.name)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-lg font-serif font-medium text-[#2D201A] hover:bg-[#F2ECE5] hover:text-[#866452] transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#8A766C] transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#866452]' : ''
                            }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6 pb-1 space-y-1 border-l-2 border-[#C78460]/40 ml-4 mt-1 overflow-hidden"
                          >
                            {item.dropdown.map((sub) => (
                              <NavLink
                                key={sub.name}
                                to={sub.path}
                                onClick={onClose}
                                className={({ isActive }) =>
                                  `block py-2 text-sm font-serif font-medium transition-colors ${isActive
                                    ? 'text-[#866452] font-semibold'
                                    : 'text-[#2D201A] hover:text-[#866452]'
                                  }`
                                }
                              >
                                {sub.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3.5 rounded-2xl text-xl font-serif font-medium transition-colors ${isActive
                        ? 'bg-[#F2ECE5] text-[#866452] font-semibold border border-[#D9CEC7]'
                        : 'text-[#2D201A] hover:bg-[#F2ECE5]/70 hover:text-[#866452]'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </div>

            {/* Bottom Booking Action in Drawer */}
            <div className="pt-5 border-t border-[#D9CEC7] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full calmlyss-btn calmlyss-btn-primary py-3.5 text-xs flex items-center justify-center"
              >
                <span>Apply for a Wealth Breakthrough Call</span>
              </button>
              <p className="text-center text-xs text-[#8A766C]">
                The Innate Bliss · Stop Solving. Start Evolving.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
