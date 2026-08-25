'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BLOG_POSTS, BlogPost } from '@/lib/data';
import { 
  BookOpen, 
  Sparkles, 
  Clock, 
  Calendar, 
  ArrowRight, 
  X, 
  Share2,
  CheckCircle2
} from 'lucide-react';

interface BlogSectionProps {
  onOpenBooking: (selection?: string) => void;
}

export default function BlogSection({ onOpenBooking }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 md:py-24 bg-[#FAF8F5] dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Women&apos;s Fitness Insights & Guides
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            Educational Guides for{' '}
            <span className="italic font-bold gold-gradient-text">Lifelong Health</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Practical, science-backed fitness advice crafted to empower women in Pathankot with confidence, proper training principles, and sustainable habits.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C49102]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-bold uppercase tracking-widest text-[#E8D8C4] shadow-xs">
                    {post.category}
                  </div>

                  <div className="absolute bottom-2.5 left-3 text-white text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C49102]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-5">
                  <h3 className="text-base font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] tracking-tight mb-2 group-hover:text-[#C49102] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-[#F5F5F4]/60 leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-[#C49102] mt-auto">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Article Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white dark:bg-[#121212] max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#C49102]/40 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/80 hover:bg-black border border-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close reader"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Image */}
            <div className="relative h-60 w-full">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 bg-[#C49102] text-[9px] font-bold uppercase tracking-widest text-white">
                    {selectedPost.category}
                  </span>
                  <span className="text-xs text-gray-200">
                    {selectedPost.readTime}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-normal font-serif-editorial leading-snug">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-8 space-y-4">
              {selectedPost.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-gray-700 dark:text-[#F5F5F4]/80 leading-relaxed font-normal">
                  {paragraph}
                </p>
              ))}

              {/* Takeaway Box */}
              <div className="p-4 bg-gray-50 dark:bg-white/5 border border-[#C49102]/30 mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C49102] dark:text-[#E8D8C4] mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Key Takeaway for Glowfit Members
                </h4>
                <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium">
                  Consistency and proper technique build lasting results. Join us for a trial workout to practice these principles under polite trainer supervision!
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between gap-3">
                <div className="text-xs text-gray-500 dark:text-[#F5F5F4]/40">
                  Published by Glowfit Editorial Team • Pathankot
                </div>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenBooking('Blog Reader Consultation');
                  }}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-md hover:shadow-lg transition-all glow-gold"
                >
                  Book Studio Trial &rarr;
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
