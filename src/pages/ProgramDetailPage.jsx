import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock, ShieldCheck, UserCheck, Calendar, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { PROGRAMS, BRAND_INFO } from '../data/siteData';

export const ProgramDetailPage = ({ onOpenBooking }) => {
  const { programId } = useParams();

  const program = PROGRAMS.find((p) => p.id === programId) || PROGRAMS[0];

  // Related programs (excluding current)
  const relatedPrograms = PROGRAMS.filter((p) => p.id !== program.id).slice(0, 3);

  return (
    <div className="pt-24 sm:pt-32 bg-[#F9F6F3] min-h-screen">
      
      {/* 1. Breadcrumbs Bar - Wide 7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A766C] font-medium">
          <Link to="/" className="hover:text-[#2D201A] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#D9CEC7]" />
          <Link to="/programs" className="hover:text-[#2D201A] transition-colors">Programs</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#D9CEC7]" />
          <span className="text-[#866452] font-semibold truncate max-w-[240px] sm:max-w-none">{program.title}</span>
        </nav>
      </div>

      {/* 2. Hero Header - Wide Full-Featured Editorial Banner */}
      <section className="pb-12 sm:pb-16 bg-[#F9F6F3] border-b border-[#D9CEC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Left 8 Cols: Badges, Title, Description, Buttons */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#866452] text-white text-[10px] sm:text-xs uppercase tracking-wider font-semibold shadow-xs">
                  {program.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2ECE5] text-[#2D201A] text-xs font-mono border border-[#D9CEC7]">
                  <Clock className="w-3 h-3 text-[#C78460]" />
                  {program.duration}
                </span>
                <span className="text-xs text-[#8A766C] font-sans font-medium">
                  {program.format}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-[#2D201A] leading-[1.15] mb-5 tracking-tight">
                {program.title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#6B584E] font-light leading-relaxed max-w-3xl mb-8">
                {program.description}
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenBooking}
                  className="calmlyss-btn calmlyss-btn-primary py-3 px-6 text-xs shadow-serene"
                >
                  <span>Apply for this Immersion</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBooking}
                  className="calmlyss-btn calmlyss-btn-secondary py-3 px-6 text-xs"
                >
                  <span>Schedule Diagnostic Call</span>
                </button>
              </div>
            </div>

            {/* Right 4 Cols: Quick Meta Snapshot Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-[#F2ECE5] border border-[#D9CEC7] shadow-xs">
                <div className="text-[10px] uppercase tracking-widest text-[#866452] font-semibold mb-2">
                  Key Immersion Metric
                </div>
                <div className="text-2xl font-serif font-medium text-[#2D201A] mb-1">
                  Private 1:1 Focus
                </div>
                <p className="text-xs text-[#6B584E] leading-relaxed mb-4">
                  Forensic diagnostic mapping of subconscious vows, money loyalties, and somatic set-points with Coach Payal Gulati.
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-[#2D201A] pt-3 border-t border-[#D9CEC7]/70">
                  <ShieldCheck className="w-4 h-4 text-[#866452] shrink-0" />
                  <span>100% Confidential Professional Advisory</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Main Editorial Body & Sticky Logistics Sidebar - Wide 7xl */}
      <section className="py-14 sm:py-20 bg-[#F2ECE5]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column (8 cols): Main Article & Detailed Roadmap */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-[#D9CEC7] shadow-sm space-y-8 sm:space-y-10">
              
              {/* Wide Panoramic Program Visual */}
              {program.image && (
                <div className="rounded-2xl overflow-hidden aspect-[16/8] sm:aspect-[21/9] w-full bg-[#F2ECE5] border border-[#D9CEC7]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              )}

              {/* Section 1: The Subconscious Dynamic */}
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C78460] font-semibold mb-2 block">
                  The Subconscious Dynamic
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#2D201A] mb-4 leading-snug">
                  Why Conventional Effort Fails at this Stage
                </h2>
                <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#6B584E] font-light leading-relaxed">
                  <p>
                    Most high-achieving individuals attempt to resolve external bottlenecks using willpower, tactical hustle, or analytical logic. However, 95% of human behavioral momentum is governed by the autonomic nervous system and subconscious memory.
                  </p>
                  <p>
                    When expanding into a higher income tier, charging premium pricing, or experiencing prolonged peace triggers an unconscious survival fear (such as fear of abandonment, survivor guilt, or fear of conflict), the subconscious mind quietly self-sabotages your progress.
                  </p>
                  <p>
                    At The Innate Bliss, this immersion targets the hidden neurological programming responsible for repetitive financial ceilings and emotional exhaustion.
                  </p>
                </div>
              </div>

              {/* Section 2: Structured Roadmap & Core Curriculum */}
              <div className="pt-6 border-t border-[#D9CEC7]/60">
                <span className="text-xs uppercase tracking-widest text-[#866452] font-semibold mb-2 block">
                  Structured Curriculum
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#2D201A] mb-5">
                  What We Clear & Recalibrate in This Immersion
                </h3>

                <div className="space-y-3.5">
                  {program.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-[#F9F6F3] border border-[#D9CEC7]/70 hover:border-[#866452] transition-colors">
                      <div className="w-7 h-7 rounded-full bg-[#866452] text-white flex items-center justify-center shrink-0 text-xs font-semibold mt-0.5 shadow-xs">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="font-serif font-medium text-base sm:text-lg text-[#2D201A] mb-1">
                          {item}
                        </div>
                        <p className="text-xs sm:text-sm text-[#6B584E] font-light leading-relaxed">
                          Targeted somatic release combining Neuro-Linguistic Programming (NLP), Ho’oponopono ancestral clearing, and nervous system capacity calibration.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Ideal Candidate Profile */}
              <div className="pt-6 border-t border-[#D9CEC7]/60">
                <span className="text-xs uppercase tracking-widest text-[#C78460] font-semibold mb-2 block">
                  Candidacy & Alignment
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#2D201A] mb-3">
                  Who This Immersion Is Specifically Designed For
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#6B584E] font-light leading-relaxed mb-6">
                  {program.idealFor}
                </p>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#F2ECE5] border border-[#D9CEC7]">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-[#866452] mb-1.5">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Private 1:1 Confidential Advisory Guarantee</span>
                  </div>
                  <p className="text-xs text-[#6B584E] leading-relaxed">
                    All consultations, pattern mapping sessions, and somatic transmissions are strictly one-on-one and protected by professional non-disclosure. We do not discuss your identity, numbers, or history with third parties.
                  </p>
                </div>
              </div>

              {/* Bottom Immersion Application Bar */}
              <div className="pt-6 border-t border-[#D9CEC7]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-medium text-lg sm:text-xl text-[#2D201A]">
                    Ready to initiate this shift?
                  </h4>
                  <p className="text-xs text-[#8A766C] mt-0.5">
                    Limited private immersion slots available each quarter.
                  </p>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="calmlyss-btn calmlyss-btn-primary py-3 px-7 text-xs shadow-serene shrink-0"
                >
                  <span>Apply for Immersion</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Column (4 cols): Sticky Logistics & Guide Bio */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Immersion Summary Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D9CEC7] shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-[#C78460] font-semibold mb-2 block">
                  Immersion Summary
                </span>
                <h4 className="text-lg font-serif text-[#2D201A] font-medium mb-4 pb-3 border-b border-[#D9CEC7]/60">
                  Program Logistics
                </h4>

                <div className="space-y-4 text-xs text-[#6B584E]">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#866452] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#2D201A] block mb-0.5">Duration</span>
                      <span>{program.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <UserCheck className="w-4 h-4 text-[#866452] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#2D201A] block mb-0.5">Format</span>
                      <span>{program.format} (Online via Zoom)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#866452] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#2D201A] block mb-0.5">Modalities</span>
                      <span>NLP, EFT Tapping, Somatic Clearing, Ho’oponopono</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#D9CEC7]/60">
                  <button
                    onClick={onOpenBooking}
                    className="w-full calmlyss-btn calmlyss-btn-primary py-3 text-xs shadow-xs"
                  >
                    Apply for Consultation
                  </button>
                </div>
              </div>

              {/* Guide Profile Widget */}
              <div className="bg-[#F2ECE5] rounded-3xl p-6 border border-[#D9CEC7]">
                <div className="flex items-center gap-3.5 mb-3">
                  <img
                    src={BRAND_INFO.founderPhoto}
                    alt="Payal Gulati"
                    className="w-12 h-12 rounded-full object-cover border border-[#D9CEC7]"
                    onError={(e) => { e.target.src = BRAND_INFO.coachPayal; }}
                  />
                  <div>
                    <h5 className="font-serif font-medium text-base text-[#2D201A]">Payal Gulati</h5>
                    <span className="text-[10px] text-[#866452] uppercase tracking-wider block">Master Coach & Founder</span>
                  </div>
                </div>
                <p className="text-xs text-[#6B584E] font-light leading-relaxed mb-3">
                  Creator of The Innate Bliss methodology with over 1,000+ hours coached across entrepreneurs and high-performers worldwide.
                </p>
                <Link
                  to="/about"
                  className="text-xs font-semibold text-[#2D201A] hover:text-[#866452] transition-colors inline-flex items-center gap-1"
                >
                  <span>Read Full Bio & Journey</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

          {/* 4. Other Related Immersions - Wide 7xl */}
          <div className="mt-16 sm:mt-20 pt-12 border-t border-[#D9CEC7]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C78460] font-semibold mb-1 block">
                  Explore More Pathways
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#2D201A]">
                  Other Signature Transformation Immersions
                </h3>
              </div>
              <Link
                to="/programs"
                className="text-xs font-semibold text-[#866452] hover:text-[#2D201A] transition-colors inline-flex items-center gap-1"
              >
                <span>View All 6 Programs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {relatedPrograms.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-5 sm:p-6 border border-[#D9CEC7] shadow-xs flex flex-col justify-between group hover:border-[#866452] hover:shadow-premium transition-all">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F2ECE5] text-[#2D201A] border border-[#D9CEC7] font-medium inline-block mb-3">
                      {item.badge}
                    </span>
                    <h4 className="font-serif font-medium text-base sm:text-lg text-[#2D201A] mb-1.5 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6B584E] font-light line-clamp-2 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    to={`/programs/${item.id}`}
                    className="text-xs font-semibold text-[#866452] hover:text-[#2D201A] inline-flex items-center gap-1 pt-3 border-t border-[#D9CEC7]/60"
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
