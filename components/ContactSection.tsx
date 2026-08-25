'use client';

import React, { useState } from 'react';
import { STUDIO_INFO } from '@/lib/data';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fitnessGoal: 'Weight Loss & Toning',
    preferredProgram: 'Aerobics & Zumba',
    experienceLevel: 'Beginner',
    preferredTime: 'Morning (7:00 AM - 11:30 AM)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable trial request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Glowfit Team, I would like to book a trial workout at your Pathankot studio. Name: ${formData.name || 'Prospective Member'}, Goal: ${formData.fitnessGoal}, Preferred Time: ${formData.preferredTime}`
  );

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF8F5] dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <Phone className="w-3.5 h-3.5" />
            Connect With Glowfit
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            Book Your Free Trial or{' '}
            <span className="italic font-bold gold-gradient-text">Enquire Today</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Take the first step toward a stronger, healthier you. Visit our studio at Patel Chowk, call us directly, or send an enquiry below.
          </p>
        </div>

        {/* 2-Column Suite: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Verified Location, Phone & Timings */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 shadow-md">
              <h3 className="text-xl font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] mb-6">
                Studio Contact Details
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#C49102]/15 text-[#C49102] flex items-center justify-center shrink-0 border border-[#C49102]/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 dark:text-[#F5F5F4]/40 uppercase tracking-widest">
                      Direct Studio Phone
                    </div>
                    <a
                      href={`tel:${STUDIO_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] hover:text-[#C49102] transition-colors"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                    <div className="text-[11px] text-gray-500 dark:text-[#F5F5F4]/50">
                      Available for batch queries & trial slot booking
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#C49102]/15 text-[#C49102] flex items-center justify-center shrink-0 border border-[#C49102]/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 dark:text-[#F5F5F4]/40 uppercase tracking-widest">
                      Physical Location
                    </div>
                    <div className="text-xs sm:text-sm font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] leading-snug mt-0.5">
                      {STUDIO_INFO.address.line1}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-[#F5F5F4]/60 font-normal">
                      {STUDIO_INFO.address.line2}, {STUDIO_INFO.address.landmark}
                    </div>
                    <div className="text-xs text-[#C49102] font-semibold mt-1">
                      {STUDIO_INFO.address.city}, {STUDIO_INFO.address.state} {STUDIO_INFO.address.pincode}
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#C49102]/15 text-[#C49102] flex items-center justify-center shrink-0 border border-[#C49102]/30">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 dark:text-[#F5F5F4]/40 uppercase tracking-widest">
                      Operating Schedule
                    </div>
                    <div className="text-xs sm:text-sm font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] mt-0.5">
                      Opens 7:00 AM • Mon to Sat
                    </div>
                    <div className="text-xs text-gray-600 dark:text-[#F5F5F4]/50">
                      Morning: 7:00 AM – 11:30 AM | Evening: 4:00 PM – 8:30 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 flex flex-col gap-2.5">
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="w-full py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] transition-colors shadow-sm flex items-center justify-center gap-2 glow-gold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {STUDIO_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/91${STUDIO_INFO.phoneRaw}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/40 hover:bg-emerald-200 dark:hover:bg-emerald-900/60 transition-colors border border-emerald-300 dark:border-emerald-800 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Map Preview Card */}
            <div className="bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/70">
                  Interactive Map & Directions
                </span>
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-[#C49102] hover:underline flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Canvas Frame */}
              <div className="relative h-44 w-full bg-stone-100 dark:bg-[#181818] border border-gray-200 dark:border-white/5 flex items-center justify-center">
                <div className="text-center p-4">
                  <MapPin className="w-7 h-7 text-[#C49102] mx-auto mb-1 animate-bounce" />
                  <div className="text-xs font-normal font-serif-editorial text-gray-900 dark:text-white">
                    Glowfit Women&apos;s Fitness Studio
                  </div>
                  <div className="text-[10px] text-gray-500 dark:text-[#F5F5F4]/40 mt-0.5">
                    Patel Chowk, Improvement Trust Road, Pathankot
                  </div>
                  <a
                    href={STUDIO_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block px-3 py-1 bg-[#C49102] text-white text-[10px] font-bold uppercase tracking-wider"
                  >
                    View Exact Location
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Generation & Trial Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 shadow-xl">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
                    Request a Free Trial Session
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-[#F5F5F4]/50 mt-0.5">
                    Experience our studio atmosphere, equipment, and classes with zero obligation.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#C49102] dark:text-[#E8D8C4] bg-[#C49102]/15 px-3 py-1 border border-[#C49102]/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Free Trial</span>
                </div>
              </div>

              {/* Form Success State */}
              {isSuccess ? (
                <div className="p-8 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-normal font-serif-editorial text-emerald-900 dark:text-emerald-100">
                    Trial Request Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="font-bold">{formData.name}</strong>! Our studio team will call you at <strong className="font-bold">{formData.phone}</strong> to confirm your reserved trial slot.
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/91${STUDIO_INFO.phoneRaw}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm Faster on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/70 mb-1.5">
                        Your Full Name <span className="text-[#C49102]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Simran Kaur"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-white/10 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#C49102]"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/70 mb-1.5">
                        Mobile Phone Number <span className="text-[#C49102]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9814406555"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-white/10 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#C49102]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Fitness Goal */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/70 mb-1.5">
                        Primary Fitness Goal
                      </label>
                      <select
                        value={formData.fitnessGoal}
                        onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-white/10 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#C49102]"
                      >
                        <option value="Weight Loss & Toning">Weight Loss & Toning</option>
                        <option value="Strength Training">Strength & Muscle Tone</option>
                        <option value="Aerobics & Zumba Cardio">Aerobics & Zumba Cardio</option>
                        <option value="Yoga & Flexibility">Yoga & Flexibility</option>
                        <option value="Overall Health & Stamina">Overall Health & Stamina</option>
                      </select>
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/70 mb-1.5">
                        Preferred Batch Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-white/10 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#C49102]"
                      >
                        <option value="Morning (7:00 AM - 9:00 AM)">Morning (7:00 AM - 9:00 AM)</option>
                        <option value="Late Morning (9:00 AM - 11:30 AM)">Late Morning (9:00 AM - 11:30 AM)</option>
                        <option value="Evening (4:00 PM - 6:30 PM)">Evening (4:00 PM - 6:30 PM)</option>
                        <option value="Late Evening (6:30 PM - 8:30 PM)">Late Evening (6:30 PM - 8:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/70 mb-1.5">
                      Your Workout Experience
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Total Beginner', 'Intermediate', 'Regular Workout'].map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setFormData({ ...formData, experienceLevel: lvl })}
                          className={`py-2 text-xs font-semibold uppercase tracking-wider border transition-all ${
                            formData.experienceLevel === lvl
                              ? 'bg-[#C49102] text-white border-[#C49102] glow-gold'
                              : 'bg-gray-50 dark:bg-[#181818] text-gray-700 dark:text-[#F5F5F4]/70 border-gray-200 dark:border-white/10'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Questions */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/70 mb-1.5">
                      Any questions or specific health requirements? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Interested in morning Zumba and machine training..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-white/10 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#C49102] resize-none"
                    />
                  </div>

                  {/* Privacy & Safety Guarantee */}
                  <div className="text-[11px] text-gray-500 dark:text-[#F5F5F4]/40 flex items-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Your phone number is confidential and strictly used for trial reservation.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 glow-gold"
                    id="contact-form-submit-btn"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin">⏳</span>
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                    <span>{isSubmitting ? 'Reserving Trial Slot...' : 'Confirm Free Trial Reservation'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
