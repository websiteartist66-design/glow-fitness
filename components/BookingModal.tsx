'use client';

import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '@/lib/data';
import { 
  X, 
  Sparkles, 
  Calendar, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Send,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelection?: string;
}

export default function BookingModal({ isOpen, onClose, initialSelection }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState(initialSelection || 'Free Trial Workout');
  const [preferredBatch, setPreferredBatch] = useState('Morning Batch (7:00 AM - 11:30 AM)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Glowfit Team, I would like to book a trial session / enquire about ${program}. Name: ${name || 'Prospective Member'}, Batch: ${preferredBatch}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn font-sans-artistic">
      <div className="bg-white dark:bg-[#121212] max-w-lg w-full border border-[#E6DFD5] dark:border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-[#181818] p-6 text-white relative border-b border-[#C49102]/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#C49102]/20 text-[#E8D8C4] border border-[#C49102]/40 text-[9px] font-bold uppercase tracking-[0.2em] mb-2">
            <ShieldCheck className="w-3 h-3" />
            100% Women-Only Studio
          </div>
          <h3 className="text-xl sm:text-2xl font-light font-serif-editorial text-[#F5F5F4]">
            Book Your Free Trial <span className="italic font-bold gold-gradient-text">Session</span>
          </h3>
          <p className="text-xs text-[#F5F5F4]/60 mt-0.5 font-normal">
            Glowfit Women&apos;s Fitness Studio • Patel Chowk, Pathankot
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
                Trial Session Reserved!
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed max-w-xs mx-auto">
                Thank you, <strong className="font-bold">{name}</strong>! We will contact you at <strong className="font-bold">{phone}</strong> to confirm your slot.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/91${STUDIO_INFO.phoneRaw}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect Instantly on WhatsApp</span>
                </a>
                
                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-[#F5F5F4]/60 hover:bg-gray-100 dark:hover:bg-[#181818]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/70 mb-1">
                  Full Name <span className="text-[#C49102]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pooja Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-white/10 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#C49102]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/70 mb-1">
                  Phone Number <span className="text-[#C49102]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 09814406555"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-white/10 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#C49102]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/70 mb-1">
                  Program / Class Preference
                </label>
                <input
                  type="text"
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  placeholder="e.g. Aerobics, Zumba, Strength Training"
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-white/10 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#C49102]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/70 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={preferredBatch}
                  onChange={(e) => setPreferredBatch(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-white/10 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#C49102]"
                >
                  <option value="Morning Batch (7:00 AM - 11:30 AM)">Morning Batch (7:00 AM - 11:30 AM)</option>
                  <option value="Evening Batch (4:00 PM - 8:30 PM)">Evening Batch (4:00 PM - 8:30 PM)</option>
                  <option value="Flexible / Contact Me">Flexible / Call to discuss</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 glow-gold"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isSubmitting ? 'Reserving...' : 'Submit Trial Reservation'}</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-gray-500 dark:text-[#F5F5F4]/50">
                Prefer immediate booking? Call <a href={`tel:${STUDIO_INFO.phoneRaw}`} className="font-bold text-[#C49102] underline">{STUDIO_INFO.phone}</a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
