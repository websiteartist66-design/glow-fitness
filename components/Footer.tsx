'use client';

import React from 'react';
import { STUDIO_INFO } from '@/lib/data';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Heart, 
  ExternalLink,
  Star,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
  onOpenBooking: (selection?: string) => void;
}

export default function Footer({ onOpenLegal, onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F4]/70 border-t border-white/10 pt-16 pb-12 relative overflow-hidden font-sans-artistic">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#C49102]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Verified Proof */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#C49102] flex items-center justify-center text-white font-black shadow-md glow-gold">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="text-xl font-normal font-serif-editorial tracking-tight text-white">
                  GLOW<span className="font-bold gold-gradient-text">FIT</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 bg-[#C49102]/20 text-[#E8D8C4] border border-[#C49102]/30 ml-2">
                  Women Only
                </span>
                <p className="text-[11px] text-gray-400 font-normal">
                  Women&apos;s Fitness Studio • Pathankot
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
              Empowering women in Pathankot with dedicated strength training, high-energy step aerobics, Zumba, and restorative yoga in a 100% private, safe, and hygienic sanctuary.
            </p>

            {/* Google Rating Badge */}
            <div className="p-3 bg-[#141414] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex text-[#C49102]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C49102]" />
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-white">4.8 ★ Google Rating</span>
              </div>
              <span className="text-[11px] text-[#C49102] font-semibold">
                {STUDIO_INFO.reviewCount} Reviews
              </span>
            </div>
          </div>

          {/* Col 2: Studio Programs & Classes */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Studio Programs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#programs" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  Strength & Resistance Circuit
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  Step Aerobics & Cardio
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  Zumba & Dance Fitness
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  Yoga & Core Mobility
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  HIIT & Functional Conditioning
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-[#C49102] hover:underline font-bold uppercase tracking-wider text-xs">
                  → Assessment Tool
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#memberships" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  Verified Reviews
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  Studio Gallery
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  Fitness Guides & Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#E8D8C4] transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Studio Location & Hours
            </h4>
            
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C49102] shrink-0 mt-0.5" />
                <span>
                  {STUDIO_INFO.address.line1}, {STUDIO_INFO.address.line2}, {STUDIO_INFO.address.landmark}, {STUDIO_INFO.address.city}, {STUDIO_INFO.address.state} {STUDIO_INFO.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C49102] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phoneRaw}`} className="text-white font-bold hover:text-[#C49102]">
                  {STUDIO_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C49102] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Opens at 7:00 AM</div>
                  <div className="text-[11px] text-gray-500">Morning & Evening batches (Mon–Sat)</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] transition-all glow-gold"
              >
                Book Free Trial Slot
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Glowfit Women&apos;s Fitness Studio. All rights reserved. • Patel Chowk, Pathankot, Punjab.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#C49102] transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#C49102] transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-[#C49102] transition-colors"
            >
              Health Disclaimer
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 bg-[#181818] hover:bg-[#222222] border border-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
