'use client';

import React, { useState } from 'react';
import { STUDIO_CLASSES, STUDIO_INFO } from '@/lib/data';
import { 
  Sparkles, 
  Clock, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Phone, 
  Flame, 
  Activity, 
  Heart,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

interface ClassesSectionProps {
  onOpenBooking: (className?: string) => void;
}

export default function ClassesSection({ onOpenBooking }: ClassesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Cardio & Dance', 'Strength & Tone', 'Mind & Body', 'HIIT & Functional'];

  const filteredClasses = activeCategory === 'All' 
    ? STUDIO_CLASSES 
    : STUDIO_CLASSES.filter(c => c.category === activeCategory);

  return (
    <section id="classes" className="py-16 md:py-24 bg-white dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <Activity className="w-3.5 h-3.5" />
            Class Formats & Schedules
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            Energizing Group Classes &{' '}
            <span className="italic font-bold gold-gradient-text">Guided Sessions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Every session at Glowfit is curated to be joyful, effective, and empowering. Explore our class styles and reserve your preferred batch slot.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#C49102] text-white glow-gold'
                  : 'bg-gray-100 dark:bg-[#141414] text-gray-700 dark:text-[#F5F5F4]/70 hover:bg-[#C49102]/10 border border-[#E6DFD5] dark:border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Classes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              className="bg-gray-50 dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#C49102]/40 transition-all duration-200 group"
            >
              <div>
                {/* Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800 dark:text-[#E8D8C4] text-[10px] font-bold uppercase tracking-widest">
                    {cls.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-[#F5F5F4]/50 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#C49102]" />
                    <span>{cls.duration}</span>
                  </div>
                </div>

                {/* Class Title */}
                <h3 className="text-xl font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] tracking-tight mb-2 group-hover:text-[#C49102] transition-colors">
                  {cls.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-[#F5F5F4]/60 leading-relaxed mb-5">
                  {cls.description}
                </p>

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cls.highlights.map((hl, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-2.5 py-1 bg-white dark:bg-white/5 border border-[#E6DFD5] dark:border-white/10 text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-[#F5F5F4]/80"
                    >
                      ✓ {hl}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/5 flex items-center justify-between gap-3 mt-auto">
                <div className="text-[11px] text-gray-500 dark:text-[#F5F5F4]/40 font-medium">
                  Level: <span className="font-bold text-gray-800 dark:text-[#F5F5F4]">{cls.suitableFor}</span>
                </div>
                <button
                  onClick={() => onOpenBooking(cls.name)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/40 hover:bg-[#C49102] hover:text-white transition-colors"
                >
                  Join Class
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Timings & Batch Notice Box (Accurate & Strictly Compliant) */}
        <div className="bg-amber-50/50 dark:bg-[#121212] border border-[#C49102]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#C49102]" />
          
          <div className="flex items-start sm:items-center gap-4 pl-2">
            <div className="w-12 h-12 bg-[#C49102] text-white flex items-center justify-center shrink-0 shadow-md">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base sm:text-lg font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
                  Current Batch Timings & Slot Availability
                </h4>
                <span className="text-[9px] font-bold uppercase px-2 py-0.5 bg-[#C49102]/20 text-[#C49102] dark:text-[#E8D8C4]">
                  Opens 7 AM
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-[#F5F5F4]/70 mt-1">
                We operate dedicated morning and evening batches Monday through Saturday. <strong className="font-bold text-gray-900 dark:text-white">Contact us for current class timings and slot reservations.</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0 pl-2 md:pl-0">
            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-[#F5F5F4] bg-white dark:bg-[#181818] border border-gray-300 dark:border-white/10 hover:border-[#C49102] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C49102]" />
              <span>Call: {STUDIO_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking('Class Timing Enquiry')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-md transition-all active:scale-95 glow-gold"
            >
              <Calendar className="w-4 h-4" />
              <span>Enquire Timings</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
