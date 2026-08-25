'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FITNESS_PROGRAMS, ProgramItem } from '@/lib/data';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Dumbbell, 
  Flame, 
  Heart, 
  X, 
  Calendar,
  Activity,
  Layers
} from 'lucide-react';

interface ProgramsSectionProps {
  onOpenBooking: (programName?: string) => void;
}

export default function ProgramsSection({ onOpenBooking }: ProgramsSectionProps) {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  return (
    <section id="programs" className="py-16 md:py-24 bg-[#FAF8F5] dark:bg-[#0E0E0E] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <Flame className="w-3.5 h-3.5" />
            Specialized Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            Curated Programs for{' '}
            <span className="italic font-bold gold-gradient-text">Every Ambition</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Whether you want to build lean muscular tone on selectorized cables, torch energy in step aerobics, or reconnect in restorative yoga.
          </p>
        </div>

        {/* 6 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FITNESS_PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="group bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C49102]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Program Card Image */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-[#181818]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-black/80 text-[10px] font-bold text-[#E8D8C4] border border-[#C49102]/40 uppercase tracking-widest">
                    {program.badge}
                  </div>

                  {/* Intensity Tag */}
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-white/15 backdrop-blur-md text-[9px] uppercase tracking-widest font-semibold text-white">
                    {program.intensity}
                  </div>

                  {/* Target Goal Pill */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <div className="text-[10px] font-semibold text-[#E8D8C4] tracking-widest uppercase">
                      Target Focus
                    </div>
                    <div className="text-xs font-bold text-white drop-shadow-sm font-serif-editorial">
                      {program.targetGoal}
                    </div>
                  </div>
                </div>

                {/* Program Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] tracking-tight mb-2 group-hover:text-[#C49102] transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-[#F5F5F4]/60 leading-relaxed mb-4 line-clamp-2">
                    {program.shortDesc}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="space-y-2 mb-4">
                    {program.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-[#F5F5F4]/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C49102] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-gray-100 dark:border-white/5 mt-auto flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="text-[11px] font-bold uppercase tracking-widest text-gray-700 dark:text-[#F5F5F4]/70 hover:text-[#C49102] flex items-center gap-1 transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => onOpenBooking(program.title)}
                  className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] transition-all active:scale-95 glow-gold"
                >
                  Book Trial
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-white dark:bg-[#121212] border border-[#C49102]/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#C49102]" />
          <div className="flex items-center gap-4 text-center sm:text-left pl-2">
            <div className="w-12 h-12 bg-amber-50 dark:bg-white/5 border border-[#C49102]/30 text-[#C49102] flex items-center justify-center shrink-0">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
                Unsure which discipline best aligns with your goals?
              </h4>
              <p className="text-xs text-gray-600 dark:text-[#F5F5F4]/60 mt-0.5">
                Utilize our personalized Women&apos;s Fitness Assessment Tool or consult directly with our studio coaches.
              </p>
            </div>
          </div>
          <a
            href="#calculator"
            className="shrink-0 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#C49102] hover:text-[#A37801] dark:text-[#E8D8C4] border border-[#C49102]/40 hover:border-[#C49102] transition-colors"
          >
            Calculate Fitness Fit &rarr;
          </a>
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white dark:bg-[#121212] max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#C49102]/30 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-64 w-full">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 bg-[#C49102] text-[10px] font-bold uppercase tracking-widest">
                  {selectedProgram.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light font-serif-editorial mt-1">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C49102] mb-2">
                  Program Overview
                </h4>
                <p className="text-sm text-gray-700 dark:text-[#F5F5F4]/80 leading-relaxed">
                  {selectedProgram.fullDesc}
                </p>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C49102] mb-3">
                  Verified Health & Fitness Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProgram.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-xs font-medium text-gray-800 dark:text-[#F5F5F4]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#C49102] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Used */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C49102] mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Equipment & Studio Features Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.equipmentUsed.map((eq, eIdx) => (
                    <span key={eIdx} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-semibold text-gray-800 dark:text-[#F5F5F4]">
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-gray-500 dark:text-[#F5F5F4]/50">
                  Ready to experience this class at Glowfit Pathankot?
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const title = selectedProgram.title;
                      setSelectedProgram(null);
                      onOpenBooking(title);
                    }}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 glow-gold"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Trial for This Class</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
