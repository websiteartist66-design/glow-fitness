'use client';

import React from 'react';
import { STUDIO_INFO } from '@/lib/data';
import { 
  Star, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Dumbbell, 
  Users, 
  CheckCircle,
  MapPin
} from 'lucide-react';

export default function TrustMetrics() {
  const metrics = [
    {
      icon: Star,
      iconColor: 'text-[#C49102]',
      value: '4.8 ★',
      label: 'Google Rating',
      detail: `${STUDIO_INFO.reviewCount} Verified Reviews`
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-[#C49102]',
      value: '100%',
      label: 'Women-Only Space',
      detail: 'Private & Judgment-Free'
    },
    {
      icon: Clock,
      iconColor: 'text-[#C49102]',
      value: 'Opens 7 AM',
      label: 'Flexible Batches',
      detail: 'Morning & Evening Slots'
    },
    {
      icon: Dumbbell,
      iconColor: 'text-[#C49102]',
      value: 'Modern Gym',
      label: 'Leg Press & Cables',
      detail: 'Plus Steppers & Yoga Area'
    },
    {
      icon: Users,
      iconColor: 'text-[#C49102]',
      value: 'Polite Staff',
      label: 'Supportive Guidance',
      detail: 'Tailored for All Levels'
    },
    {
      icon: MapPin,
      iconColor: 'text-[#C49102]',
      value: 'Patel Chowk',
      label: 'Central Location',
      detail: 'Above Engross Matrix Salon'
    }
  ];

  return (
    <section className="py-8 bg-white dark:bg-[#0E0E0E] border-b border-[#E6DFD5] dark:border-white/5 font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Summary Quote Banner */}
        <div className="mb-6 p-4 sm:p-5 bg-amber-50/50 dark:bg-[#141414] border border-[#C49102]/25 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#C49102]" />
          
          <div className="flex items-start sm:items-center gap-3.5 pl-2">
            <div className="w-9 h-9 bg-[#C49102] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              G
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C49102]">
                  Google Review AI Summary
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-[#C49102]/20 text-[#C49102] dark:text-[#E8D8C4] font-bold uppercase tracking-widest">
                  4.8 ★★★★★
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 dark:text-[#F5F5F4]/80 font-normal italic font-serif-editorial">
                &ldquo;Members highlight the excellent equipment, wide variety of classes (Aerobics, Zumba, Yoga, Strength), vibrant neon ambiance, respectful environment, and exceptionally polite staff.&rdquo;
              </p>
            </div>
          </div>

          <a
            href={STUDIO_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-[11px] font-bold uppercase tracking-widest text-[#C49102] hover:text-[#A37801] dark:hover:text-[#E8D8C4] flex items-center gap-1.5 px-4 py-2 border border-[#C49102]/30 hover:border-[#C49102] transition-colors ml-2 md:ml-0"
          >
            <span>Read 22 Reviews</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* 6 Key Verified Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-4 bg-gray-50 dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/5 transition-all duration-200 hover:border-[#C49102]/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-[#C49102]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <CheckCircle className="w-3 h-3 text-[#C49102]/60" />
                </div>
                <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-[#F5F5F4] font-serif-editorial">
                  {item.value}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/80 mt-0.5">
                  {item.label}
                </div>
                <div className="text-[10px] text-gray-500 dark:text-[#F5F5F4]/40 mt-0.5 line-clamp-1">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
