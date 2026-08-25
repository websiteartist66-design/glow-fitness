'use client';

import React from 'react';
import { MEMBERSHIP_PLANS, STUDIO_INFO } from '@/lib/data';
import { 
  Sparkles, 
  Check, 
  Phone, 
  Calendar, 
  ArrowRight, 
  Tag,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

interface MembershipSectionProps {
  onOpenBooking: (planName?: string) => void;
}

export default function MembershipSection({ onOpenBooking }: MembershipSectionProps) {
  return (
    <section id="memberships" className="py-16 md:py-24 bg-[#FAF8F5] dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <Tag className="w-3.5 h-3.5" />
            Membership Options
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            Simple & Transparent{' '}
            <span className="italic font-bold gold-gradient-text">Membership Plans</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Choose a plan that matches your fitness aspirations. We offer flexible options with full access to our gym machinery, aerobics steppers, Zumba, and yoga sessions.
          </p>
        </div>

        {/* 4 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 mb-16">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-white dark:bg-[#141414] border-2 border-[#C49102] shadow-2xl glow-gold lg:-translate-y-2'
                  : 'bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 shadow-sm hover:shadow-lg hover:border-[#C49102]/40'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C49102] text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                  Most Recommended
                </div>
              )}

              <div>
                {/* Plan Title & Duration */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C49102] dark:text-[#E8D8C4]">
                    {plan.durationLabel}
                  </span>
                  <h3 className="text-xl font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] tracking-tight mt-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-[#F5F5F4]/50 mt-1 min-h-[32px]">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price Display (Strictly compliant with prompt - transparent enquiry) */}
                <div className="p-4 bg-gray-50 dark:bg-white/5 border border-[#E6DFD5] dark:border-white/5 mb-6 text-center">
                  <div className="text-sm font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
                    Affordable Studio Pricing
                  </div>
                  <div className="text-[11px] text-[#C49102] dark:text-[#E8D8C4] font-bold uppercase tracking-wider mt-0.5">
                    Enquire for Seasonal Offers
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-[#F5F5F4]/75 font-normal">
                      <div className="w-4 h-4 bg-[#C49102]/15 text-[#C49102] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/5">
                <button
                  onClick={() => onOpenBooking(plan.name)}
                  className={`w-full py-3 text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'text-white bg-[#C49102] hover:bg-[#A37801] shadow-md glow-gold'
                      : 'text-gray-900 dark:text-[#F5F5F4] bg-gray-100 dark:bg-white/5 hover:bg-[#C49102]/20 border border-[#E6DFD5] dark:border-white/10'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Details</span>
                </button>
                <div className="text-[10px] text-center text-gray-400 dark:text-[#F5F5F4]/40 mt-2">
                  Best For: {plan.recommendedFor}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Add-ons & Direct Phone Consultation Callout */}
        <div className="p-6 sm:p-8 bg-white dark:bg-[#121212] border border-[#C49102]/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 bg-[#C49102]/10 border border-[#C49102]/30 text-[#C49102] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
                Personal Training & Group Batch Inquiries
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-[#F5F5F4]/60 mt-0.5 font-normal">
                Looking for 1-on-1 personalized form correction or special student/homemaker timing packages? Speak directly with the studio.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-md hover:shadow-lg transition-all flex items-center gap-2 glow-gold"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {STUDIO_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
