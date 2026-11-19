import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Header/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Active Pages Only (Home, About Payal, Platinum Membership)
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PlatinumPage } from './pages/PlatinumPage';

// Shared Interactive Modals & Floating Utilities
import { VideoModal } from './components/VideoModal';
import { DiscoveryCallModal } from './components/DiscoveryCallModal';
import { LegalModal } from './components/LegalModals';
import { AmbientAudioPlayer } from './components/AmbientAudioPlayer';
import { FloatingActionHub } from './components/FloatingActionHub';
import { VslWelcomeModal } from './components/VslWelcomeModal';

export function App() {
  const [videoModalData, setVideoModalData] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null);
  const [isVslModalOpen, setIsVslModalOpen] = useState(true);

  const handleOpenVideo = (videoInfo) => {
    setVideoModalData(videoInfo);
  };

  const handleCloseVideo = () => {
    setVideoModalData(null);
  };

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <>
      {/* Scroll restoration so route changes start at top */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#F9F6F3] text-[#2D201A] flex flex-col font-sans overflow-x-clip selection:bg-[#E8DCD4] selection:text-[#2D201A]">
        
        {/* Full-Width Sticky Navigation */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Active Routes Only */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  onOpenVideo={handleOpenVideo}
                />
              }
            />

            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenBooking={handleOpenBooking}
                />
              }
            />

            <Route
              path="/platinum"
              element={
                <PlatinumPage
                  onOpenBooking={handleOpenBooking}
                />
              }
            />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Brand Footer */}
        <Footer
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
          onOpenBooking={handleOpenBooking}
        />

        {/* Global Floating Modals */}
        <VideoModal
          isOpen={!!videoModalData}
          videoData={videoModalData}
          onClose={handleCloseVideo}
          onBookCall={handleOpenBooking}
        />

        <DiscoveryCallModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
        />

        <LegalModal
          isOpen={!!legalModalType}
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />

        {/* Soothing Spa Ambient Sound System */}
        <AmbientAudioPlayer />

        {/* Floating Action Hub (Desktop: Left WhatsApp & Right AI | Mobile: Bottom Dock) */}
        <FloatingActionHub onOpenBooking={handleOpenBooking} />

        {/* VSL Welcome Video Modal on Site Load */}
        <VslWelcomeModal
          isOpen={isVslModalOpen}
          onClose={() => setIsVslModalOpen(false)}
          onBookCall={handleOpenBooking}
        />

      </div>
    </>
  );
}

export default App;
