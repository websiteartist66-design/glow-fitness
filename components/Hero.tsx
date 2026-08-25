'use client';

import React from 'react';
import Image from 'next/image';
import { STUDIO_INFO } from '@/lib/data';
import { 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Activity,
  Heart
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: (initialGoal?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF8F5] dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 font-sans-artistic transition-colors duration-300">
      {/* Background Subtle Ambient Gold Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#C49102]/5 dark:bg-[#C49102]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#E8D8C4]/10 dark:bg-[#E8D8C4]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines, Trust Proof & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Top Micro-Eyebrow with Gold Line */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#C49102] font-bold">
                Pathankot&apos;s Premier Fitness Sanctuary
              </span>
              <div className="h-[1px] w-12 bg-[#C49102] hidden sm:block" />
            </div>

            {/* Main Editorial H1 Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-light leading-[0.95] text-gray-900 dark:text-[#F5F5F4] font-serif-editorial">
              Empowering <br className="hidden sm:inline" />
              <span className="font-bold italic text-[#141413] dark:text-[#F5F5F4]">Strength,</span> <br className="hidden sm:inline" />
              <span className="opacity-50 dark:opacity-40 font-light">Redefining</span> <br className="hidden sm:inline" />
              <span className="gold-gradient-text font-serif-editorial font-normal">Radiance.</span>
            </h1>

            {/* Subheading & Verified Location context */}
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-[#F5F5F4]/70 max-w-xl font-normal">
              A premier women-only fitness gym at Patel Chowk. Experience certified Aerobics, Zumba, Strength Training, Yoga, and HIIT in an uplifting atmosphere crafted exclusively for your evolution.
            </p>

            {/* Verified Studio Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full max-w-lg">
              <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#C49102] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/90">100% Women-Only</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 shadow-xs">
                <Flame className="w-4 h-4 text-[#C49102] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/90">Aerobics & Zumba</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 shadow-xs">
                <Activity className="w-4 h-4 text-[#C49102] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/90">Leg Press & Cables</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 sm:px-10 py-4 sm:py-4.5 bg-[#C49102] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#A37801] shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 glow-gold flex items-center justify-center gap-2"
                id="hero-book-trial-cta"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Free Trial</span>
              </button>

              <a
                href="#classes"
                className="px-8 sm:px-10 py-4 sm:py-4.5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-[#F5F5F4] font-bold uppercase tracking-widest text-xs hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-2"
                id="hero-view-classes-cta"
              >
                <span>View Class Schedule</span>
              </a>
            </div>

            {/* Social Proof with Overlapping Avatars & Verified Count */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-[#2A2416] text-[#E8D8C4] border-2 border-[#FAF8F5] dark:border-[#0A0A0A] flex items-center justify-center text-[10px] font-bold">
                  S
                </div>
                <div className="w-9 h-9 rounded-full bg-[#1F1F1F] text-[#E8D8C4] border-2 border-[#FAF8F5] dark:border-[#0A0A0A] flex items-center justify-center text-[10px] font-bold">
                  M
                </div>
                <div className="w-9 h-9 rounded-full bg-[#352B18] text-[#E8D8C4] border-2 border-[#FAF8F5] dark:border-[#0A0A0A] flex items-center justify-center text-[10px] font-bold">
                  A
                </div>
                <div className="w-9 h-9 rounded-full bg-[#C49102] text-white border-2 border-[#FAF8F5] dark:border-[#0A0A0A] flex items-center justify-center text-[10px] font-bold">
                  ★
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-gray-900 dark:text-[#F5F5F4]">4.8 ★ Rating</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#C49102] font-semibold">Google Verified</span>
                </div>
                <span className="text-[11px] text-gray-500 dark:text-[#F5F5F4]/50 tracking-wider uppercase">
                  22 Verified Reviews • Patel Chowk
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Artistic Preview & Interactive Program Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 p-6 sm:p-8 flex flex-col gap-6 shadow-xl relative">
              
              {/* Studio Showcase Image */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden border border-black/5 dark:border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80"
                  alt="Women fitness and aerobics studio at Glowfit Patel Chowk Pathankot"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="uppercase tracking-widest text-[10px] font-bold text-[#E8D8C4] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C49102] animate-pulse"></span>
                    Above Engross Matrix Salon
                  </span>
                  <span className="text-[10px] bg-black/60 px-2 py-0.5 border border-white/20 uppercase tracking-widest">
                    Patel Chowk
                  </span>
                </div>
              </div>

              {/* Specialized Programs Fast Access */}
              <div className="space-y-3">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 dark:text-white/40">
                  Signature Disciplines
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => onOpenBooking('Strength & Resistance')}
                    className="w-full group flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-[#C49102]/50 transition-all text-left"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-bold tracking-tight text-gray-900 dark:text-[#F5F5F4]">
                        Strength & Cable Resistance
                      </span>
                      <span className="text-[9px] text-gray-500 dark:text-[#F5F5F4]/40 uppercase tracking-wider">
                        Leg Press • Multi-Station Cables
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center group-hover:bg-[#C49102] group-hover:text-white group-hover:border-[#C49102] text-xs transition-all text-gray-600 dark:text-[#F5F5F4]">
                      →
                    </div>
                  </button>

                  <button
                    onClick={() => onOpenBooking('Aerobics & Step Cardio')}
                    className="w-full group flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-[#C49102]/50 transition-all text-left"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-bold tracking-tight text-gray-900 dark:text-[#F5F5F4]">
                        Aerobics & Zumba Rhythm
                      </span>
                      <span className="text-[9px] text-gray-500 dark:text-[#F5F5F4]/40 uppercase tracking-wider">
                        High Calorie Burn • Dance Choreography
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center group-hover:bg-[#C49102] group-hover:text-white group-hover:border-[#C49102] text-xs transition-all text-gray-600 dark:text-[#F5F5F4]">
                      →
                    </div>
                  </button>
                </div>
              </div>

              {/* Member Quote Card with Left Accent Bar */}
              <div className="p-4 sm:p-5 border border-[#C49102]/30 relative overflow-hidden bg-amber-50/40 dark:bg-[#181510]">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C49102]" />
                <p className="italic text-gray-800 dark:text-[#F5F5F4]/80 text-xs sm:text-sm leading-relaxed mb-2 font-serif-editorial">
                  &ldquo;Excellent equipment and variety of classes. The environment is completely safe, polite, and respectful. Highly recommended for women in Pathankot!&rdquo;
                </p>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#C49102]">
                  — Verified Member • Google Review
                </span>
              </div>

              {/* Bottom Operating Hours Info */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-white/5 text-[10px] uppercase tracking-widest text-gray-500 dark:text-[#F5F5F4]/40">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-700 dark:text-[#F5F5F4]/70">Studio Timings</span>
                  <span>Mon - Sat: 7:00 AM - 8:30 PM</span>
                </div>
                <div className="flex items-center gap-1 text-[#C49102] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Now Open</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
