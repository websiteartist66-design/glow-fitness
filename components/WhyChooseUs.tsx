'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Dumbbell, 
  Users, 
  HeartHandshake, 
  Smile, 
  CheckCircle2, 
  MapPin, 
  Flame,
  ArrowRight
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: (selection?: string) => void;
}

export default function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  const reasons = [
    {
      icon: ShieldCheck,
      title: '100% Women-Only Space',
      desc: 'Complete privacy and a comfortable, judgment-free zone where women of all ages can workout confidently.'
    },
    {
      icon: Dumbbell,
      title: 'Ergonomic Quality Equipment',
      desc: 'Featuring dedicated leg press machines, multi-station cables, dumbbells, and step decks specifically selected for female biomechanics.'
    },
    {
      icon: Flame,
      title: 'Vibrant & Energizing Atmosphere',
      desc: 'High-spirit music, motivational lighting, and electrifying group dynamics that make daily workouts exciting.'
    },
    {
      icon: Smile,
      title: 'Polite, Guiding & Welcoming Staff',
      desc: 'Friendly staff and trainers who ensure correct exercise posture, warm support, and beginner encouragement.'
    },
    {
      icon: Sparkles,
      title: 'Uncompromising Hygiene & Safety',
      desc: 'Sanitized workout mats, sparkling clean workout floors, proper ventilation, and well-maintained equipment.'
    },
    {
      icon: MapPin,
      title: 'Central Patel Chowk Location',
      desc: 'Located on the 2nd floor above Engross Matrix Salon on Improvement Trust Road, offering effortless access for all Pathankot residents.'
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            The Glowfit Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            Why Women in Pathankot Choose{' '}
            <span className="italic font-bold gold-gradient-text">Glowfit Studio</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Rated 4.8 Stars with 22 verified Google reviews. Here is why our studio has become Pathankot&apos;s favorite health and wellness destination for women.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 bg-gray-50 dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 hover:border-[#C49102]/50 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-[#C49102]/10 border border-[#C49102]/30 flex items-center justify-center text-[#C49102] mb-5 group-hover:bg-[#C49102] group-hover:text-white transition-colors duration-200 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] tracking-tight mb-2 group-hover:text-[#C49102] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-[#F5F5F4]/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-200 dark:border-white/5 flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-[#C49102]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified by Members</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Community Motivation Banner */}
        <div className="bg-[#121212] text-white p-8 sm:p-12 border border-[#C49102]/40 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 glow-gold">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49102]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <span className="px-3 py-1 bg-white/10 border border-white/15 text-[10px] font-bold uppercase tracking-widest text-[#E8D8C4] mb-3 inline-block">
              Begin Today
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light font-serif-editorial tracking-tight mb-3">
              Your Fitness Journey <span className="italic font-bold text-[#C49102]">Starts Here.</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              Join dozens of inspiring women across Pathankot who have made healthy habits, strong muscles, and positive energy an effortless part of their daily life.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-[#C49102] hover:bg-[#E8D8C4] shadow-xl transition-all duration-200 active:scale-95 flex items-center gap-2"
            >
              <span>Claim Your Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
