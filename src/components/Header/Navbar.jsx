import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';
import { NavCta } from './NavCta';
import { MobileDrawer } from './MobileDrawer';

export const NAVIGATION_ITEMS = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Payal',
    path: '/about',
  },
  {
    name: 'Platinum Membership',
    path: '/platinum',
  },
];

export const Navbar = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-16 sm:h-20 bg-[#F9F6F3]/95 backdrop-blur-md border-b border-[#D9CEC7] shadow-[0_1px_12px_rgba(45,32,26,0.04)] transition-all duration-300">
        <div className="max-w-7xl mx-auto h-full px-5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* 1. Brand Logo */}
          <NavLogo />

          {/* 2. Desktop Navigation Menu with Minimal Dropdowns */}
          <NavMenu navigationItems={NAVIGATION_ITEMS} />

          {/* 3. Calmlyss Pill CTA Button */}
          <NavCta onOpenBooking={onOpenBooking} />

          {/* 4. Mobile Menu Trigger Button */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              type="button"
              onClick={onOpenBooking}
              className="sm:hidden calmlyss-btn calmlyss-btn-primary !py-1.5 !px-3.5 !text-[11px]"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#2D201A] hover:bg-[#F2ECE5] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* 5. Mobile Drawer with Nested Dropdown Accordions */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigationItems={NAVIGATION_ITEMS}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
};
