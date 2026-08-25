'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GalleryItem } from '@/lib/data';
import { 
  Sparkles, 
  X, 
  Maximize2, 
  Camera, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Gym Equipment', 'Studio Floor', 'Aerobics & Steppers', 'Lighting & Vibe'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_ITEMS.findIndex(i => i.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedImage(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_ITEMS.findIndex(i => i.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedImage(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FAF8F5] dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <Camera className="w-3.5 h-3.5" />
            Studio Atmosphere
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            A Glimpse Inside{' '}
            <span className="italic font-bold gold-gradient-text">Glowfit Studio</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Take a visual tour of our sanitized workout spaces, modern resistance machinery, stacked aerobics step platforms, and curated aesthetic atmosphere.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#C49102] text-white glow-gold'
                  : 'bg-white dark:bg-[#121212] text-gray-700 dark:text-[#F5F5F4]/70 hover:bg-[#C49102]/10 border border-[#E6DFD5] dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative overflow-hidden bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 shadow-sm hover:shadow-2xl cursor-pointer transition-all duration-300 hover:border-[#C49102]/50"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-bold uppercase tracking-widest text-[#E8D8C4]">
                  {item.category}
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C49102]" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base font-normal font-serif-editorial tracking-tight text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E8D8C4]/80 line-clamp-1 font-normal">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn">
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-20 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev / Next Nav */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Main Lightbox Content */}
          <div className="max-w-4xl w-full overflow-hidden bg-[#121212] border border-[#C49102]/40 shadow-2xl">
            <div className="relative h-[400px] sm:h-[520px] w-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-[#181818] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 bg-[#C49102]/20 border border-[#C49102]/40 text-[#E8D8C4] text-[9px] font-bold uppercase tracking-widest">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg font-normal font-serif-editorial text-white mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-0.5 font-normal">
                  {selectedImage.description}
                </p>
              </div>

              <div className="text-xs uppercase tracking-wider font-semibold text-[#C49102] shrink-0">
                Glowfit Women&apos;s Fitness Studio • Pathankot
              </div>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}
