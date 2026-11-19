# The Innate Bliss — Complete Website Redesign

A redesign for **The Innate Bliss** (founded by **Payal Gulati / Payal Kapoor**), transforming it into a holistic wellness and personal transformation brand inspired by the serenity, polish, and editorial craftsmanship of **Calmlyss**.

---

## ✦ Key Architecture & Design System

### 1. Visual Aesthetics & Palette (Inspired by Calmlyss)
- **Primary Canvas**: Warm Ivory (`#FAF8F5`) & Soft Pearl Linen (`#F6F1E9`)
- **Dark Dramatic Accents**: Deep Midnight Navy (`#060B11`, `#0B131D`)
- **Metallic & Sacred Highlights**: Champagne Gold (`#D4AF37`, `#B69135`) & Shimmer Gold (`#FAF7EE`)
- **Typography**: 
  - *Headings & Quotes*: **Cormorant Garamond** & **Playfair Display** (Editorial Serifs)
  - *Body, Metrics & Buttons*: **Plus Jakarta Sans** (Contemporary Geometric Sans)
- **Celestial & Sacred Motifs**: Minimal custom SVGs (`CelestialStar`, `CrescentMoon`, `CelestialRing`, `ConstellationVector`)

---

## ✦ Complete Website Structure (11 Sections)

1. **Section 1: Sticky Editorial Navigation (`Navbar.jsx`)**
   - Translucent glassmorphism header transitioning into solid ivory on scroll.
   - Complete anchor links to all sections.
   - Primary CTA: *Book*.
   - Animated mobile drawer with smooth slide entrance.

2. **Section 2: Hero Section (`Hero.jsx`)**
   - Split layout with oversized emotional typography.
   - Headline: *"Transform Your Inner World. Create a Different Reality."*
   - Supporting narrative on subconscious beliefs shaping money, relationships, and success.
   - Dual CTAs (*Begin Your Transformation* / *Discover Our Approach*).
   - Right-side founder composition with floating proof metrics (₹25L Funding / 120–140 Leads).

3. **Section 3: Introduction & Brand Philosophy (`Philosophy.jsx`)**
   - Editorial exploration of how inner subconscious patterns dictate outer business & life reality.
   - 4 Core Pillars: Subconscious Money Blueprints, Emotional Freedom & Release, Relational Resonance, Business Growth & High-Impact Flow.
   - Founder pull-quote callout.

4. **Section 4: Services & Transformation Programs (`Services.jsx`)**
   - Verified programs retrieved from existing websites:
     1. *1:1 Private Money Mastery & Subconscious Breakthrough* (Flagship Immersion)
     2. *1:1 Money Unblock Consultation Call* (90-Min Diagnostic)
     3. *Heal to Attract Abundance* (Signature 6-Week Immersion)
     4. *Emotional Detox & Somatic Well-Being* (Holistic Healing)
     5. *Relationship Harmony & Self-Love Breakthrough* (Relational Healing)
     6. *11 Days Emotional Freedom Challenge* (Daily Habit Reset)
   - Interactive curriculum inspector modal (`ProgramDetailModal.jsx`).

5. **Section 5: Client Transformations (`Transformations.jsx`)**
   - Heading: *"Real People. Real Shifts. Extraordinary Transformations."*
   - **Client Story 1 (Aarin, Age 50+)**: Raised ₹25 lakh in 2 weeks for his business. Includes 1-click video trigger for clip **00:44–00:56**.
   - **Client Story 2 (Neelakantappa S, Age 70+)**: Increased leads from 20–30/mo to 120–140/mo after 1 year of stagnation. Configurable YouTube source integration.
   - 3 Additional verified client case reflections from founders and executives.
   - Clear individual client experience disclaimer.

6. **Section 6: Video Testimonials Compilation (`VideoShowcase.jsx`)**
   - Cinematic midnight navy frame with subtle gold glow.
   - Custom play button, time scrubber, mute/unmute, and fullscreen modal launcher.
   - Timestamp quick-jump buttons (00:00 Opening, 00:44 Aarin ₹25L, 01:12 Full transformation).
   - Target asset: `public/videos/innate-bliss-testimonials.mp4`.

7. **Section 7: Dedicated Pre-Call Video (`PreCallVideo.jsx`)**
   - Heading: *"Let Me Show You How This Method Has Helped My Clients."*
   - **Clip 1 (00:00–00:35)**: *"Jab maine session join nahi kiya tha.. ek din mai kar diya."*
   - **Clip 2 (01:12–01:45)**: *"You know Payal, I must tell you... full thing is changed."*
   - Storytelling layout with transcripts, timestamps, and audio waveforms.

8. **Section 8: Founder & Master Coach (`Founder.jsx`)**
   - Editorial biography of **Payal Gulati** (Payal Kapoor): Former mainstream media journalist turned NLP Master Coach and Energy Healer.
   - Verified certifications and modalities: NLP, EFT, Ho'oponopono, Subconscious Reprogramming.
   - Personal philosophy and quote.

9. **Section 9: How It Works (`Methodology.jsx`)**
   - The 4-Step Innate Bliss Process:
     - Step 01: Subconscious Pattern Mapping
     - Step 02: Root-Cause Emotional Release
     - Step 03: Neuro-Energetic Blueprint Recalibration
     - Step 04: Real-World Integration & Expansion

10. **Section 10: Final Closing CTA & FAQ (`BookingSection.jsx`)**
    - Headline: *"Your Next Chapter Begins Within."*
    - Interactive discovery call scheduler with pattern assessment (`DiscoveryCallModal.jsx`).
    - Accordion FAQ addressing session format, timeline, confidentiality, and money beliefs.

11. **Section 11: Footer (`Footer.jsx`)**
    - Brand logo, navigation links, program directory, contact details, social links (YouTube, Instagram), Privacy Policy and Terms modals, copyright.

---

## ✦ Video Configuration

All video paths, timestamps, quotes, and sources are centrally managed in `src/data/testimonialsData.js`:
- Compilation video: `/videos/innate-bliss-testimonials.mp4`
- Aarin clip segment: `00:44 – 00:56`
- Neelakantappa S: `[INSERT NEELAKANTAPPA YOUTUBE VIDEO URL]`
- Pre-call clip 1: `00:00 – 00:35`
- Pre-call clip 2: `01:12 – 01:45`

*To enable local playback*: Place `WhatsApp Video 2026-11-13 at 10.21.36 AM.mp4` into `public/videos/innate-bliss-testimonials.mp4`.

---

## ✦ Development & Build

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:3000)
npm run dev

# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

