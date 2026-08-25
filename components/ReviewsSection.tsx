'use client';

import React, { useState } from 'react';
import { VERIFIED_REVIEWS, STUDIO_INFO } from '@/lib/data';
import { 
  Star, 
  Sparkles, 
  CheckCircle2, 
  Quote, 
  ArrowRight,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export default function ReviewsSection() {
  const [filterRating, setFilterRating] = useState<number>(0);

  const filteredReviews = filterRating === 0 
    ? VERIFIED_REVIEWS 
    : VERIFIED_REVIEWS.filter(r => r.rating === filterRating);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Member Impressions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            Trusted by Women Across{' '}
            <span className="italic font-bold gold-gradient-text">Pathankot</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Real feedback from verified Google reviews praising our vibrant atmosphere, clean hygiene standards, and polite, encouraging staff.
          </p>
        </div>

        {/* Big Google Reviews Rating Scorecard */}
        <div className="bg-[#121212] border border-[#C49102]/30 p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#C49102]" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pl-2">
            
            {/* Overall Rating Score */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-center gap-3 text-4xl sm:text-5xl font-normal font-serif-editorial text-[#F5F5F4] mb-2">
                <span>4.8</span>
                <div className="flex text-[#C49102]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C49102] text-[#C49102]" />
                  ))}
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E8D8C4]">
                Overall Google Star Rating
              </div>
              <div className="text-xs text-gray-400 mt-0.5 font-normal">
                Based on {STUDIO_INFO.reviewCount} verified member reviews
              </div>
              <a
                href={STUDIO_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C49102] hover:text-[#E8D8C4] transition-colors"
              >
                <span>View Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* AI Summary Quote from Google Maps */}
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C49102] bg-[#C49102]/15 border border-[#C49102]/30 px-2.5 py-1">
                  Google Review AI Summary
                </span>
                <span className="text-xs text-gray-400 font-normal">
                  Verified Insights
                </span>
              </div>
              
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal font-serif-editorial italic">
                &ldquo;People say this gym features excellent equipment and offers a variety of classes, including aerobics, yoga, and Zumba. They also highlight the vibrant atmosphere and the effective training sessions that improve fitness and strength. Guests mention the safe environment and the polite staff.&rdquo;
              </p>

              <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-medium uppercase tracking-wider">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[#E8D8C4]">
                  ✨ Vibrant Atmosphere
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[#E8D8C4]">
                  💪 Excellent Equipment
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[#E8D8C4]">
                  🛡️ Safe & Hygienic
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[#E8D8C4]">
                  🌸 Polite Staff
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 bg-gray-50 dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 hover:border-[#C49102]/40 transition-all duration-200 flex flex-col justify-between shadow-xs group"
            >
              <div>
                {/* Top User & Star Meta */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#C49102] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                      {rev.avatarSeed[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
                        {rev.author}
                      </h4>
                      <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-[#F5F5F4]/40">
                        {rev.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex text-[#C49102]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C49102] text-[#C49102]" />
                    ))}
                  </div>
                </div>

                {/* Highlight Quote */}
                <div className="p-3 bg-white dark:bg-white/5 border border-[#E6DFD5] dark:border-white/5 text-xs font-serif-editorial italic text-[#C49102] dark:text-[#E8D8C4] mb-3 flex items-center gap-2">
                  <Quote className="w-3.5 h-3.5 shrink-0 rotate-180 text-[#C49102]" />
                  <span>&ldquo;{rev.highlightPhrase}&rdquo;</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-700 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
                  {rev.text}
                </p>
              </div>

              {/* Verified Badge Footer */}
              <div className="pt-4 mt-6 border-t border-gray-200 dark:border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium text-[11px] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Google Verified Customer</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Pathankot Studio</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
