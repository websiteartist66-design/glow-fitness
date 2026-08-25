'use client';

import React from 'react';
import { STUDIO_INFO, LOCAL_AREAS_SERVED } from '@/lib/data';
import { 
  MapPin, 
  Navigation, 
  Car, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  Phone
} from 'lucide-react';

export default function LocalSeoSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Local Fitness Hub in Pathankot
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            Pathankot&apos;s Preferred{' '}
            <span className="italic font-bold gold-gradient-text">Ladies Fitness Studio</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Conveniently situated at Patel Chowk on Improvement Trust Road, offering effortless connectivity for women across all neighborhoods of Pathankot.
          </p>
        </div>

        {/* 2-Column Info & Neighborhoods */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location & Landmark Directions Guide */}
          <div className="lg:col-span-7 bg-gray-50 dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#C49102] font-bold text-[10px] uppercase tracking-widest mb-2">
                <Navigation className="w-3.5 h-3.5" />
                How to Reach Glowfit Studio
              </div>

              <h3 className="text-xl sm:text-2xl font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] mb-4">
                Central Location at Patel Chowk, Pathankot
              </h3>

              <div className="p-4 bg-white dark:bg-[#181818] border border-[#E6DFD5] dark:border-white/10 mb-6">
                <div className="text-[10px] font-bold text-gray-500 dark:text-[#F5F5F4]/40 uppercase tracking-widest mb-1">
                  Full Studio Address
                </div>
                <div className="text-sm sm:text-base font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
                  {STUDIO_INFO.address.full}
                </div>
                <div className="text-xs text-[#C49102] dark:text-[#E8D8C4] font-medium mt-1">
                  Landmark: 2nd Floor, Above Engross Matrix Salon, in the ICICI Bank Building.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-gray-700 dark:text-[#F5F5F4]/80">
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#181818] border border-[#E6DFD5] dark:border-white/5">
                  <Car className="w-4 h-4 text-[#C49102] shrink-0" />
                  <span>Ample road & scooter parking</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#181818] border border-[#E6DFD5] dark:border-white/5">
                  <Clock className="w-4 h-4 text-[#C49102] shrink-0" />
                  <span>Morning batches from 7:00 AM</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-md hover:shadow-lg transition-all glow-gold"
              >
                <span>Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#F5F5F4]/80 hover:text-[#C49102]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C49102]" />
                <span>Call: {STUDIO_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Neighborhoods & Serving Areas */}
          <div className="lg:col-span-5 bg-[#FAF8F5] dark:bg-[#141414] border border-[#E6DFD5] dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C49102] bg-[#C49102]/15 border border-[#C49102]/30 px-2.5 py-1 inline-block mb-3">
                Serving All Pathankot Areas
              </span>
              
              <h3 className="text-xl font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] mb-2">
                Nearby Localities & Communities
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-600 dark:text-[#F5F5F4]/60 mb-6 leading-relaxed">
                Whether you live or work near Model Town, Gandhi Nagar, or Mission Road, our central Patel Chowk location makes your daily fitness routine seamless and accessible.
              </p>

              {/* Area Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {LOCAL_AREAS_SERVED.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white dark:bg-[#1c1c1c] border border-[#E6DFD5] dark:border-white/10 text-xs font-medium text-gray-800 dark:text-[#F5F5F4]/80 shadow-xs"
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-[#181818] border border-[#E6DFD5] dark:border-white/5 text-xs text-gray-600 dark:text-[#F5F5F4]/50 font-normal">
              ⭐ Dedicated women-only batches ensure you can comfortably finish your workout before office hours or school drop-offs.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
