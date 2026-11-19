/**
 * Central configuration for video testimonials, client transformation stories,
 * timestamps, and verified media paths.
 */

export const VIDEO_CONFIG = {
  // Main compilation video file (saved directly into public/videos/innate-bliss-testimonials.mp4)
  compilationVideoPath: '/videos/innate-bliss-testimonials.mp4',

  // Pre-call video path
  preCallVideoPath: '/videos/innate-bliss-testimonials.mp4',

  // YouTube source from existing website (theinnatebliss.com uses lfiGHm5Hgm8)
  websiteOfficialYouTubeUrl: 'https://www.youtube.com/embed/lfiGHm5Hgm8?enablejsapi=1&rel=0&playsinline=1',
  
  // Neelakantappa YouTube Video URL placeholder (or linked to official embed)
  neelakantappaYouTubeUrl: 'https://www.youtube.com/embed/lfiGHm5Hgm8?enablejsapi=1&rel=0&playsinline=1',

  // Thumbnail from the actual website
  heroVideoPoster: '/images/hero-payal-thumb.jpg',
  payalPortrait: '/images/payal-portrait-hd.jpg',
  coachPayal: '/images/coach-payal.webp',
};

export const CLIENT_STORIES = [
  {
    id: 'aarin',
    name: 'Aarin',
    ageBadge: 'Age 50+',
    designation: 'Founder & Entrepreneur',
    timeline: 'Within 2 Weeks',
    keyMetricNumber: '₹25 Lakh',
    keyMetricLabel: 'First Round Business Funding Raised',
    secondaryMetric: 'Preparing for ₹5 Cr next round',
    story: 'One of my clients, Aarin, is over 50. He worked with me on his money beliefs and patterns. Within just two weeks, he raised ₹25 lakh in his first round of funding for his business.',
    spokenQuote: '“I secured 25 lakhs investment into my company... by the end of Aug we are looking for another 5 cr.”',
    videoClip: {
      source: VIDEO_CONFIG.compilationVideoPath,
      startTime: 44, // 00:44
      endTime: 56,   // 00:56
      timeFormatted: '00:44 – 00:56',
      label: 'Watch Aarin’s 12-Second Verification Clip'
    },
    posterImage: '/images/hero-payal-thumb.jpg',
    tags: ['Money Patterns', 'Seed Funding', 'Subconscious Alignment', '50+ Founder'],
    initials: 'AR'
  },
  {
    id: 'neelakantappa',
    name: 'Neelakantappa S',
    ageBadge: 'Age 70+',
    designation: 'Senior Business Owner',
    timeline: 'After 1 Year Stagnation',
    keyMetricNumber: '120–140',
    keyMetricLabel: 'Qualified Inbound Leads / Month',
    beforeMetric: 'Earlier: 20–30 leads/mo',
    story: 'One of my clients, Neelakantappa S, is over 70. His business had been stuck at the same level for a year. Earlier, he was receiving around 20–30 leads per month. After working on his patterns, his monthly leads increased to 120–140.',
    spokenQuote: '“Earlier I was doing same type routine, everyday same routine no result... I am getting 100-120-140 leads.”',
    videoClip: {
      type: 'youtube',
      youtubeUrl: VIDEO_CONFIG.neelakantappaYouTubeUrl,
      label: 'Watch Video Testimonial on YouTube',
      note: 'Verified YouTube Video from the website'
    },
    posterImage: '/images/coach-payal.webp',
    tags: ['Business Growth', 'Breakthrough at 70+', 'Lead Flow Multiplier', 'Routine Reset'],
    initials: 'NS'
  }
];

export const PRE_CALL_CLIPS = [
  {
    id: 'clip-1',
    clipNumber: '01',
    startTime: 0,
    endTime: 35,
    timestamp: '00:00 – 00:35',
    title: 'The Shift from Hesitation to Instant Resolution',
    spokenQuote: '“Jab maine session join nahi kiya tha.. ek din mai kar diya.”',
    context: 'Overcoming subconscious procrastination and experiencing a dramatic turnaround in life decisions within 24 hours of clearing resistance.',
    source: VIDEO_CONFIG.preCallVideoPath,
    category: 'Immediate Momentum'
  },
  {
    id: 'clip-2',
    clipNumber: '02',
    startTime: 72, // 01:12
    endTime: 105,  // 01:45
    timestamp: '01:12 – 01:45',
    title: 'The Full Reality Transformation',
    spokenQuote: '“You know Payal, I must tell you... full thing is changed.”',
    context: 'How deep internal recalibration translates into tangible external outcomes across personal relationships, peace of mind, and financial clarity.',
    source: VIDEO_CONFIG.preCallVideoPath,
    category: 'Holistic Shift'
  }
];

export const ADDITIONAL_EXPERIENCES = [
  {
    quote: 'I used to carry an invisible ceiling around revenue. Every time our monthly revenue reached ₹10L, a crisis would wipe it out. Working with Payal revealed the root guilt pattern. In 45 days, we scaled past ₹28L with zero panic.',
    name: 'Vikram M.',
    role: 'Tech Agency Founder',
    outcome: 'Broke 3-year revenue plateau'
  },
  {
    quote: 'The Ho’oponopono and NLP process dissolved 12 years of generational financial anxiety. I stopped operating in fight-or-flight mode and closed our biggest international client within 3 weeks.',
    name: 'Radhika S.',
    role: 'Design Director & Consultant',
    outcome: 'Replaced anxiety with quiet confidence'
  },
  {
    quote: 'I felt like an imposter despite being in business for two decades. Payal does not just give you surface affirmations; she rewires how your nervous system reacts to success.',
    name: 'Sanjeev K.',
    role: 'Manufacturing Executive',
    outcome: 'Sustained calm & emotional freedom'
  }
];
