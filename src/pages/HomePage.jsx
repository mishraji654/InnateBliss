import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { MindsetIntroSection } from '../components/Home/MindsetIntroSection';
import { ProblemSection } from '../components/Home/ProblemSection';
import { ReframeSection } from '../components/Home/ReframeSection';
import { QuantumWealthSection } from '../components/Home/QuantumWealthSection';
import { WhoWeWorkWithSection } from '../components/Home/WhoWeWorkWithSection';
import { BookingSection } from '../components/BookingSection';

export const HomePage = ({ onOpenBooking, onOpenVideo }) => {
  return (
    <>
      {/* TOP LANDING HERO */}
      <Hero
        onOpenBooking={onOpenBooking}
        onOpenVideoClip={onOpenVideo}
      />

      {/* SECTION 1 – SCALE BEYOND MINDSET */}
      <MindsetIntroSection onOpenBooking={onOpenBooking} />

      {/* SECTION 2 – THE PROBLEM */}
      <ProblemSection />

      {/* SECTION 3 – THE REFRAME */}
      <ReframeSection />

      {/* SECTION 4 – SIGNATURE PROGRAM: QUANTUM WEALTH MATRIX METHOD */}
      <QuantumWealthSection onOpenBooking={onOpenBooking} />

      {/* SECTION 6 – WHO WE WORK WITH */}
      <WhoWeWorkWithSection />

      {/* SECTION 7 – CLOSING CTA */}
      <BookingSection
        onOpenBookingModal={onOpenBooking}
      />
    </>
  );
};
