'use client';

import React from 'react';
import Image from 'next/image';
import { STUDIO_INFO } from '@/lib/data';
import { 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Heart, 
  CheckCircle2, 
  Users, 
  Flame, 
  Smile,
  ArrowRight
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: (selection?: string) => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            About Our Sanctuary
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            Pathankot&apos;s Premier Sanctuary for{' '}
            <span className="italic font-bold gold-gradient-text">Women&apos;s Evolution</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Designed from the ground up for women who seek to exercise freely, sculpt strength, enjoy rhythmic cardio, and elevate vitality in an uplifting sisterhood.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase with Verified Equipment Features */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden border border-[#E6DFD5] dark:border-white/10 bg-gray-50 dark:bg-[#121212] p-2 sm:p-3 shadow-xl">
              <div className="relative h-[380px] sm:h-[450px] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80"
                  alt="Leg press and strength training equipment at Glowfit Women's Fitness Studio Pathankot"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                
                {/* Floating Location Overlay */}
                <div className="absolute top-4 left-4 right-4 bg-black/75 backdrop-blur-md p-3.5 border border-white/15 text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#C49102] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold tracking-wide uppercase text-[11px] text-[#E8D8C4]">Above Engross Matrix Salon</div>
                    <div className="text-gray-300 text-[10px] line-clamp-1 uppercase tracking-wider">2nd Floor, Patel Chowk, Pathankot</div>
                  </div>
                </div>

                {/* Floating Bottom Card: Real Atmosphere Highlights */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md p-4 border border-[#C49102]/30 shadow-lg">
                  <div className="flex items-center gap-2 text-[#C49102] font-bold text-[10px] uppercase tracking-widest mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    Strict Women-Only Sanctuary
                  </div>
                  <p className="text-xs text-gray-700 dark:text-[#F5F5F4]/80 font-medium">
                    Enjoy total peace of mind with 100% female privacy, hygienic floors, sanitized machine grips, and polite, encouraging trainers at every step.
                  </p>
                </div>

              </div>
            </div>

            {/* Corner Badge */}
            <div className="absolute -top-3 -right-3 bg-[#C49102] text-white px-4 py-2 shadow-lg flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>4.8 ★ Verified</span>
            </div>
          </div>

          {/* Right Column: Narrative, Core Values & Equipment */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <h3 className="text-2xl sm:text-3xl font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] tracking-tight mb-4">
              A Judgment-Free Space Where Every Woman Flourishes
            </h3>

            <p className="text-base text-gray-700 dark:text-[#F5F5F4]/70 leading-relaxed mb-5 font-normal">
              At <strong className="font-bold text-gray-900 dark:text-[#F5F5F4]">Glowfit Women&apos;s Fitness Studio</strong>, we understand that consistency begins with comfort. Many women hesitate to enter conventional gyms due to crowded environments or lack of tailored guidance.
            </p>

            <p className="text-base text-gray-700 dark:text-[#F5F5F4]/70 leading-relaxed mb-6 font-normal">
              We changed that by creating a vibrant, hygienic, and safe fitness home in the heart of Pathankot. Featuring modern resistance machines (including our heavy-duty leg press, multi-station cables, and lat pulldowns), stacked red-and-black aerobic step decks, and custom lighting, our studio blends serious fitness with supportive energy.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              
              <div className="flex items-start gap-2.5 p-3.5 bg-gray-50 dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#C49102] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-[#F5F5F4]">Ergonomic Gym Machinery</h4>
                  <p className="text-[11px] text-gray-600 dark:text-[#F5F5F4]/50 mt-0.5">Targeted leg press, cable pulley systems, and free weights</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 bg-gray-50 dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/5">
                <Flame className="w-4 h-4 text-[#C49102] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-[#F5F5F4]">Dynamic Step Aerobics & Zumba</h4>
                  <p className="text-[11px] text-gray-600 dark:text-[#F5F5F4]/50 mt-0.5">Rhythm stepping decks & energizing dance cardio</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 bg-gray-50 dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/5">
                <Smile className="w-4 h-4 text-[#C49102] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-[#F5F5F4]">Polite & Guiding Staff</h4>
                  <p className="text-[11px] text-gray-600 dark:text-[#F5F5F4]/50 mt-0.5">Supportive form checks and welcoming encouragement</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 bg-gray-50 dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#C49102] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-[#F5F5F4]">Sanitized & Safe Environment</h4>
                  <p className="text-[11px] text-gray-600 dark:text-[#F5F5F4]/50 mt-0.5">Regular hygiene checks, clean mats & locker space</p>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-md transition-all active:scale-95 glow-gold"
                id="about-try-studio-btn"
              >
                <span>Experience Glowfit Yourself</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-[#F5F5F4]/70 hover:text-[#C49102] dark:hover:text-[#E8D8C4] transition-colors"
              >
                <span>View Our Programs</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
