import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

const YoutubeIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedInIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
  </svg>
);

export const Footer = ({ onOpenPrivacy, onOpenTerms, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#140F0D] text-[#E5DDD7] border-t border-[#2D201A] pt-8 pb-24 sm:pt-14 md:pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-10 pb-6 md:pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-4 group">
                <img
                  src={BRAND_INFO.logo}
                  alt="The Innate Bliss Logo"
                  className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="flex flex-col">
                  <span className="font-serif text-base sm:text-lg font-medium tracking-wider text-white uppercase leading-tight">
                    THE INNATE BLISS
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#C78460] font-sans">
                    Stop Solving. Start Evolving.
                  </span>
                </div>
              </Link>

              <p className="text-[11px] sm:text-sm text-[#D9CEC7] font-medium mb-3.5 sm:mb-5">
                Wealth Mindset Transformation | Holistic Life Transformation
              </p>

              {/* Social Channels */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <a
                  href={BRAND_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white/5 hover:bg-[#866452] text-[#E5DDD7] hover:text-white border border-white/10 text-[11px] sm:text-xs transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href={BRAND_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white/5 hover:bg-[#866452] text-[#E5DDD7] hover:text-white border border-white/10 text-[11px] sm:text-xs transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>YouTube</span>
                </a>
                <a
                  href={BRAND_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white/5 hover:bg-[#866452] text-[#E5DDD7] hover:text-white border border-white/10 text-[11px] sm:text-xs transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Column (2-Column Compact Grid on Mobile) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#C78460] mb-2.5 sm:mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-1.5 md:gap-y-2.5 text-xs sm:text-sm text-[#C5B7AE]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/#quantum-wealth-matrix" className="hover:text-white transition-colors">Quantum Wealth Matrix</Link>
              </li>
              <li>
                <Link to="/platinum" className="hover:text-white transition-colors">Platinum</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Payal</Link>
              </li>
              <li>
                <Link to="/#hero" className="hover:text-white transition-colors">Client Results</Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Call CTA Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#C78460] mb-2.5 sm:mb-4">
                Connect With Us
              </h4>

              <div className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-sm text-[#C5B7AE] mb-3.5 sm:mb-5">
                <a
                  href="mailto:connect@theinnatebliss.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C78460] shrink-0" />
                  <span>connect@theinnatebliss.com</span>
                </a>
                <a
                  href="http://www.theinnatebliss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C78460] shrink-0" />
                  <span>www.theinnatebliss.com</span>
                </a>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full calmlyss-btn calmlyss-btn-primary py-2.5 sm:py-3 text-[11px] sm:text-xs"
              >
                <span>Apply for a Wealth Breakthrough Call</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-5 sm:pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-[#8A766C] pr-12 sm:pr-0">
          <div>
            © The Innate Bliss. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#A8988F] hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
