import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Phone, Mail, X, Send, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

const WhatsAppIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.33-1.66a11.86 11.86 0 0 0 5.71 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.42-8.41ZM12.05 21.78h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.84 9.84 0 0 1-1.51-5.25c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.89 9.88Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
  </svg>
);

const QUICK_PROMPTS = [
  'Quantum Wealth Matrix',
  'Platinum Membership',
  '1:1 Money Unblock Call',
  'Client Results',
  'Book a Call',
];

const getBotReply = (rawText) => {
  const text = rawText.toLowerCase();

  if (text.includes('quantum') || text.includes('matrix') || text.includes('9 week') || text.includes('program')) {
    return {
      text: 'The Quantum Wealth Matrix Method is Payal Gulati’s structured 9-week Money Mindset Transformation Journey for business owners, founders, and entrepreneurs. It includes 2 live group sessions every week, personal guidance, workbooks, and 3 phases: Release Your Root Blocks, Elevate Your Money Mindset, and Sustain & Scale.',
      showBookCta: true,
    };
  }

  if (text.includes('platinum') || text.includes('lifetime') || text.includes('health') || text.includes('relationship') || text.includes('career')) {
    return {
      text: 'Platinum Lifetime Membership is a holistic lifestyle journey covering all 4 pillars of a fulfilling life: Health & Emotional Well-being, Personal & Professional Relationships, Career, and Money. You can also explore the full Platinum Membership tab in the top menu.',
      showBookCta: true,
    };
  }

  if (text.includes('1:1') || text.includes('unblock') || text.includes('99') || text.includes('call') || text.includes('book') || text.includes('price') || text.includes('fee')) {
    return {
      text: 'The 1:1 Money Unblock Call helps you identify hidden subconscious money patterns, break through financial anxiety, and explore whether the Quantum Wealth Matrix Method is right for you. Tap the button below to book your private session.',
      showBookCta: true,
    };
  }

  if (text.includes('result') || text.includes('client') || text.includes('proof') || text.includes('testimonial')) {
    return {
      text: 'Over 200 business owners have worked with The Innate Bliss — including Aarin (50+), who raised ₹25 Lakh in first-round funding within 2 weeks, and Neelakantappa S (70+), whose monthly leads grew from 20–30 to 120–140.',
      showBookCta: true,
    };
  }

  if (text.includes('payal') || text.includes('founder') || text.includes('about')) {
    return {
      text: 'Payal Gulati spent nearly two decades in the media and corporate world before training in NLP, EFT, and Ho’oponopono and founding The Innate Bliss. Her mission is helping leaders transform from the roots rather than chasing external strategies alone.',
      showBookCta: false,
    };
  }

  return {
    text: 'Welcome to The Innate Bliss! I can help you with the 1:1 Money Unblock Call, Quantum Wealth Matrix Method (9-Week Program), Platinum Lifetime Membership, or Payal Gulati’s approach. What would you like to explore?',
    showBookCta: true,
  };
};

export const FloatingActionHub = ({ onOpenBooking }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! I’m The Innate Bliss AI Guide. Ask me about the 1:1 Money Unblock Call, Quantum Wealth Matrix Method, or Platinum Lifetime Membership.',
      showBookCta: false,
    },
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isChatOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatOpen]);

  const sendMessage = (textToSend) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    const userMsg = { id: Date.now(), sender: 'user', text: trimmed };
    const reply = getBotReply(trimmed);
    const botMsg = {
      id: Date.now() + 1,
      sender: 'bot',
      text: reply.text,
      showBookCta: reply.showBookCta,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const whatsappHref = BRAND_INFO.contact.whatsappUrl;
  const phoneHref = `tel:${BRAND_INFO.contact.phone}`;
  const emailHref = `mailto:${BRAND_INFO.contact.email}`;

  return (
    <>
      {/* AI Chatbot Popup Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.95 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[82px] right-4 md:bottom-24 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-[370px] max-h-[70dvh] rounded-3xl bg-[#F9F6F3] border border-[#D9CEC7] shadow-2xl overflow-hidden flex flex-col"
            role="dialog"
            aria-label="The Innate Bliss AI Assistant"
          >
            {/* Header */}
            <div className="px-4 py-3.5 bg-[#191412] text-white flex items-center justify-between gap-3 border-b border-white/10">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4A373] to-[#866452] flex items-center justify-center text-[#191412] shrink-0 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-serif font-medium leading-tight truncate">
                    Innate Bliss AI Guide
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#D4A373]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online · Instant Guidance</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                aria-label="Close AI chat"
                className="p-1.5 rounded-full text-[#C5B7AE] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F9F6F3]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[86%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#866452] text-white rounded-br-sm'
                        : 'bg-white border border-[#D9CEC7] text-[#2D201A] rounded-bl-sm shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.showBookCta && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsChatOpen(false);
                        if (onOpenBooking) onOpenBooking();
                      }}
                      className="mt-2 calmlyss-btn calmlyss-btn-primary !py-2 !px-4 !text-[10.5px]"
                    >
                      Book a Wealth Breakthrough Call
                    </button>
                  )}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3.5 py-2 bg-[#F2ECE5] border-t border-[#D9CEC7]/70 flex items-center gap-1.5 overflow-x-auto">
              {QUICK_PROMPTS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendMessage(q)}
                  className="px-2.5 py-1 rounded-full bg-white border border-[#D9CEC7] hover:border-[#866452] text-[10.5px] font-medium text-[#43342D] whitespace-nowrap transition-colors cursor-pointer shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="p-3 bg-white border-t border-[#D9CEC7] flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about programs, calls, results..."
                className="flex-1 min-w-0 px-3.5 py-2 rounded-full bg-[#F9F6F3] border border-[#D9CEC7] focus:border-[#866452] focus:outline-none text-xs text-[#2D201A] placeholder-[#8A766C]"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="w-9 h-9 rounded-full bg-[#866452] hover:bg-[#6B584E] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP VIEW: Left Side = WhatsApp | Right Side = AI Chatbot */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="hidden md:flex group fixed bottom-6 left-6 z-40 w-[52px] h-[52px] rounded-full bg-gradient-to-b from-[#2EE372] to-[#1FA855] text-white border border-white/30 shadow-[0_10px_26px_rgba(37,211,102,0.4)] items-center justify-center transition-transform hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="pointer-events-none absolute left-full ml-3 px-3 py-1.5 rounded-full bg-[#191412] text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
          WhatsApp Us
        </span>
      </a>

      <button
        type="button"
        onClick={() => setIsChatOpen((prev) => !prev)}
        aria-label={isChatOpen ? 'Close AI Chatbot' : 'Open AI Chatbot'}
        title="AI Assistant"
        className="hidden md:flex group fixed bottom-6 right-6 z-40 w-[52px] h-[52px] rounded-full bg-gradient-to-b from-[#9C7863] via-[#866452] to-[#6E5040] text-white border border-white/30 shadow-[0_10px_26px_rgba(134,100,82,0.5)] items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        {isChatOpen ? <X className="w-5 h-5" /> : <Bot className="w-6 h-6" />}
        {!isChatOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#D4A373] border-2 border-[#F9F6F3]" />
        )}
        <span className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-full bg-[#191412] text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
          AI Assistant
        </span>
      </button>

      {/* MOBILE VIEW: Sleek Floating Horizontal Bottom Dock (Call, Email, WhatsApp, AI Chat) */}
      <nav
        aria-label="Quick contact actions"
        className="md:hidden fixed bottom-3 inset-x-4 z-40 max-w-md mx-auto rounded-full bg-white/95 backdrop-blur-xl border border-[#D9CEC7] shadow-[0_10px_30px_rgba(45,32,26,0.18)] px-2 py-1.5 grid grid-cols-4 gap-1"
      >
        {/* Call */}
        <a
          href={phoneHref}
          aria-label="Call The Innate Bliss"
          className="flex flex-col items-center justify-center gap-0.5 py-1 rounded-full text-[#2D201A] active:scale-95 transition-transform"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-b from-[#D4A373] to-[#B9714E] text-white flex items-center justify-center shadow-sm">
            <Phone className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-medium text-[#43342D] leading-none">Call</span>
        </a>

        {/* Email */}
        <a
          href={emailHref}
          aria-label="Email The Innate Bliss"
          className="flex flex-col items-center justify-center gap-0.5 py-1 rounded-full text-[#2D201A] active:scale-95 transition-transform"
        >
          <span className="w-8 h-8 rounded-full bg-[#2D201A] text-white flex items-center justify-center shadow-sm">
            <Mail className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-medium text-[#43342D] leading-none">Email</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-col items-center justify-center gap-0.5 py-1 rounded-full text-[#2D201A] active:scale-95 transition-transform"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-b from-[#2EE372] to-[#1FA855] text-white flex items-center justify-center shadow-sm">
            <WhatsAppIcon className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-medium text-[#43342D] leading-none">WhatsApp</span>
        </a>

        {/* AI Chatbot */}
        <button
          type="button"
          onClick={() => setIsChatOpen((prev) => !prev)}
          aria-label={isChatOpen ? 'Close AI Chatbot' : 'Open AI Chatbot'}
          className="flex flex-col items-center justify-center gap-0.5 py-1 rounded-full text-[#2D201A] active:scale-95 transition-transform cursor-pointer"
        >
          <span className="relative w-8 h-8 rounded-full bg-gradient-to-b from-[#9C7863] via-[#866452] to-[#6E5040] text-white flex items-center justify-center shadow-sm">
            {isChatOpen ? <X className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            {!isChatOpen && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#D4A373] border border-white" />
            )}
          </span>
          <span className="text-[10px] font-medium text-[#43342D] leading-none">AI Chat</span>
        </button>
      </nav>
    </>
  );
};
