import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const NavDropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const timeoutRef = useRef(null);

  // Check if any child route is currently active
  const isParentActive = item.dropdown.some((sub) => location.pathname === sub.path);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 180);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] font-medium transition-colors py-2 relative group focus:outline-none cursor-pointer ${
          isParentActive || isOpen ? 'text-[#866452] font-semibold' : 'text-[#6B584E] hover:text-[#2D201A]'
        }`}
      >
        <span>{item.name}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#866452]' : 'text-[#8A766C] group-hover:text-[#2D201A]'
          }`}
        />
        <span
          className={`absolute bottom-0.5 left-0 h-[1.5px] bg-[#C78460] transition-all duration-300 ${
            isParentActive ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 mt-1 w-56 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#D9CEC7] shadow-premium p-1.5 z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-0.5">
              {item.dropdown.map((sub) => {
                const isActive = location.pathname === sub.path;
                return (
                  <NavLink
                    key={sub.name}
                    to={sub.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl transition-all duration-150 group flex items-center justify-between text-xs sm:text-[13px] font-serif font-medium ${
                      isActive
                        ? 'bg-[#F2ECE5] text-[#866452] font-semibold'
                        : 'hover:bg-[#F9F6F3] text-[#2D201A] hover:text-[#866452]'
                    }`}
                  >
                    <span>{sub.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8A766C] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
