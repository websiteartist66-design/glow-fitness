'use client';

import React from 'react';
import { STUDIO_INFO } from '@/lib/data';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export default function FloatingActions({ onOpenBooking }: FloatingActionsProps) {
  const whatsappUrl = `https://wa.me/91${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent("Hello Glowfit Studio, I'm interested in booking a trial workout / batch information in Pathankot.")}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 pointer-events-none font-sans-artistic">
      
      {/* Floating WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Glowfit on WhatsApp"
        className="pointer-events-auto w-11 h-11 bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
        title="WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5" />
      </a>

      {/* Floating Call Button */}
      <a
        href={`tel:${STUDIO_INFO.phoneRaw}`}
        aria-label="Call Glowfit Studio"
        className="pointer-events-auto w-11 h-11 bg-[#C49102] hover:bg-[#A37801] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 glow-gold"
        title="Call 098144 06555"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Floating Trial Pill (Mobile & Desktop) */}
      <button
        onClick={onOpenBooking}
        className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-2 bg-white dark:bg-[#121212] text-[#C49102] dark:text-[#E8D8C4] font-bold text-xs uppercase tracking-wider border border-[#C49102] shadow-xl hover:bg-[#C49102]/10 transition-all hover:scale-105 active:scale-95 glow-gold"
      >
        <Calendar className="w-3.5 h-3.5 text-[#C49102]" />
        <span>Book Trial</span>
      </button>

    </div>
  );
}
