'use client';

import React from 'react';
import { X, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { STUDIO_INFO } from '@/lib/data';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn font-sans-artistic">
      <div className="bg-white dark:bg-[#121212] max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-[#E6DFD5] dark:border-white/10 shadow-2xl relative p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 bg-gray-100 dark:bg-[#181818] hover:bg-gray-200 dark:hover:bg-[#222] text-gray-700 dark:text-[#F5F5F4] flex items-center justify-center transition-colors border border-gray-200 dark:border-white/10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content based on type */}
        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#C49102] font-bold text-[10px] uppercase tracking-[0.2em]">
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy Policy</span>
            </div>
            <h3 className="text-2xl font-light font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
              Privacy Policy for <span className="italic font-bold gold-gradient-text">Glowfit Studio</span>
            </h3>
            <p className="text-xs text-gray-500 dark:text-[#F5F5F4]/40 font-normal">
              Last updated: August 2026
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-[#F5F5F4]/80 leading-relaxed font-normal">
              <p>
                At <strong>Glowfit Women&apos;s Fitness Studio</strong> ({STUDIO_INFO.address.full}), we respect and protect the privacy of all our visitors, trial applicants, and members.
              </p>
              <h4 className="font-bold font-serif-editorial text-gray-900 dark:text-[#F5F5F4] pt-2 text-sm sm:text-base">1. Information Collection</h4>
              <p>
                We only collect basic contact information (such as your name, mobile phone number, preferred workout goals, and batch timings) that you voluntarily submit through our free trial and membership inquiry forms.
              </p>
              <h4 className="font-bold font-serif-editorial text-gray-900 dark:text-[#F5F5F4] pt-2 text-sm sm:text-base">2. Use of Information</h4>
              <p>
                Your phone number and submitted details are strictly used to schedule your workout trials, provide batch schedule information, and answer your gym queries. We do not sell, rent, or distribute personal information to any third parties.
              </p>
              <h4 className="font-bold font-serif-editorial text-gray-900 dark:text-[#F5F5F4] pt-2 text-sm sm:text-base">3. Studio Privacy Guarantee</h4>
              <p>
                As a 100% women-exclusive fitness studio, our members&apos; comfort and privacy on premises are maintained with the highest ethical standards.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#C49102] font-bold text-[10px] uppercase tracking-[0.2em]">
              <FileText className="w-4 h-4" />
              <span>Terms of Service</span>
            </div>
            <h3 className="text-2xl font-light font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
              Terms & <span className="italic font-bold gold-gradient-text">Studio Guidelines</span>
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-[#F5F5F4]/80 leading-relaxed font-normal">
              <p>
                Welcome to Glowfit Women&apos;s Fitness Studio. By using this website, submitting an inquiry, or visiting our studio at Patel Chowk, Pathankot, you agree to the following terms:
              </p>
              <h4 className="font-bold font-serif-editorial text-gray-900 dark:text-[#F5F5F4] pt-2 text-sm sm:text-base">1. Women-Exclusive Facility</h4>
              <p>
                Glowfit is an exclusive women&apos;s fitness facility. All workout spaces, changing areas, and group classes are designated exclusively for female members and authorized female staff.
              </p>
              <h4 className="font-bold font-serif-editorial text-gray-900 dark:text-[#F5F5F4] pt-2 text-sm sm:text-base">2. Facility Etiquette & Hygiene</h4>
              <p>
                Members and trial participants are expected to maintain proper hygiene, bring clean indoor athletic footwear, re-rack weights, and follow trainer safety recommendations during equipment use.
              </p>
              <h4 className="font-bold font-serif-editorial text-gray-900 dark:text-[#F5F5F4] pt-2 text-sm sm:text-base">3. Trial Sessions</h4>
              <p>
                Free trial sessions are subject to prior schedule reservation and slot availability during regular morning and evening batches.
              </p>
            </div>
          </div>
        )}

        {type === 'disclaimer' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#C49102] font-bold text-[10px] uppercase tracking-[0.2em]">
              <AlertTriangle className="w-4 h-4" />
              <span>Health & Fitness Disclaimer</span>
            </div>
            <h3 className="text-2xl font-light font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
              General Fitness & <span className="italic font-bold gold-gradient-text">Medical Disclaimer</span>
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-[#F5F5F4]/80 leading-relaxed font-normal">
              <p className="p-3.5 bg-[#C49102]/10 border border-[#C49102]/30 text-[#C49102] dark:text-[#E8D8C4] text-xs font-semibold">
                Please Note: The fitness programs, workout articles, calorie estimates, and class schedules provided on this website are for educational and motivational purposes only.
              </p>
              <p>
                Physical exercise, strength training, aerobics, Zumba, and HIIT workouts involve inherent physical exertion. Always consult with a qualified medical doctor or healthcare professional before beginning any new exercise routine, particularly if you have pre-existing cardiovascular conditions, joint injuries, pregnancy, or post-partum considerations.
              </p>
              <p>
                Glowfit Women&apos;s Fitness Studio makes no guaranteed claims of specific weight loss amounts or timelines. Individual fitness progress depends on consistency, proper nutrition, lifestyle, and individual genetics.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-gray-100 dark:border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-xs glow-gold"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
}
