'use client';

import React, { useState } from 'react';
import { FAQS } from '@/lib/data';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  MessageCircle, 
  Phone
} from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: (selection?: string) => void;
}

export default function FaqSection({ onOpenBooking }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'General', 'Classes & Facilities', 'Location & Timing', 'Safety & Beginners'];

  const filteredFaqs = activeFilter === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeFilter);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            Everything You Need to Know About{' '}
            <span className="italic font-bold gold-gradient-text">Glowfit</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Find quick answers regarding our women-only environment, classes, equipment, trial sessions, and location in Pathankot.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setOpenIndex(0);
              }}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[#C49102] text-white glow-gold'
                  : 'bg-gray-100 dark:bg-[#141414] text-gray-700 dark:text-[#F5F5F4]/70 hover:bg-[#C49102]/10 border border-gray-200 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-gray-50 dark:bg-[#141414] border-[#C49102]/50 shadow-sm'
                    : 'bg-white dark:bg-[#121212] border-[#E6DFD5] dark:border-white/10 hover:border-[#C49102]/30'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-normal font-serif-editorial text-sm sm:text-base text-gray-900 dark:text-[#F5F5F4]"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1">{faq.question}</span>
                  <div className={`w-7 h-7 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen 
                      ? 'bg-[#C49102] text-white rotate-180' 
                      : 'bg-gray-100 dark:bg-[#1c1c1c] text-[#C49102]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-700 dark:text-[#F5F5F4]/80 leading-relaxed border-t border-gray-200 dark:border-white/5 mt-1 pt-3 font-normal animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-6 bg-gray-50 dark:bg-[#141414] border border-[#E6DFD5] dark:border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
              Have a specific question not listed here?
            </h4>
            <p className="text-xs text-gray-600 dark:text-[#F5F5F4]/50 mt-0.5 font-normal">
              Our polite team is happy to guide you over a phone call or WhatsApp message.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-xs glow-gold"
            >
              Ask Our Team
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
