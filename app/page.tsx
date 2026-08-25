'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustMetrics from '@/components/TrustMetrics';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import ClassesSection from '@/components/ClassesSection';
import FitnessCalculator from '@/components/FitnessCalculator';
import WhyChooseUs from '@/components/WhyChooseUs';
import MembershipSection from '@/components/MembershipSection';
import ReviewsSection from '@/components/ReviewsSection';
import GallerySection from '@/components/GallerySection';
import LocalSeoSection from '@/components/LocalSeoSection';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import BookingModal from '@/components/BookingModal';
import LegalModals from '@/components/LegalModals';
import { STUDIO_INFO, FAQS } from '@/lib/data';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSelection, setBookingSelection] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleOpenBooking = (selection?: string) => {
    setBookingSelection(selection);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setBookingSelection(undefined);
  };

  const handleOpenLegal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    setLegalModalType(type);
  };

  const handleCloseLegal = () => {
    setLegalModalType(null);
  };

  // Structured Data Schema for LocalBusiness and FAQ
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: "Glowfit Women's Fitness Studio",
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
    '@id': 'https://maps.google.com/?q=Glowfit+Women\'s+Fitness+Studio+Patel+Chowk+Pathankot+Punjab',
    url: 'https://glowfitpathankot.com',
    telephone: '09814406555',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2nd Floor, ICICI Bank, 5-6, B-Block, Improvement Trust Road, above Engross Matrix Salon, Patel Chowk',
      addressLocality: 'Pathankot',
      addressRegion: 'Punjab',
      postalCode: '145001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.2684,
      longitude: 75.6499
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '07:00',
        closes: '20:30'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '22'
    }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#0A0A0A] text-[#141413] dark:text-[#F5F5F4] selection:bg-[#C49102] selection:text-white transition-colors duration-300 font-sans-artistic">
      
      {/* SEO Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Sticky Header Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <Hero onOpenBooking={handleOpenBooking} />
        <TrustMetrics />
        <AboutSection onOpenBooking={() => handleOpenBooking('General Studio Visit')} />
        <ProgramsSection onOpenBooking={handleOpenBooking} />
        <ClassesSection onOpenBooking={handleOpenBooking} />
        <FitnessCalculator onOpenBooking={handleOpenBooking} />
        <WhyChooseUs onOpenBooking={() => handleOpenBooking('Free Trial Request')} />
        <MembershipSection onOpenBooking={handleOpenBooking} />
        <ReviewsSection />
        <GallerySection />
        <LocalSeoSection />
        <BlogSection onOpenBooking={() => handleOpenBooking('Blog Consultation')} />
        <FaqSection onOpenBooking={() => handleOpenBooking('General Enquiry')} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenLegal={handleOpenLegal} 
        onOpenBooking={() => handleOpenBooking('Footer Free Trial CTA')} 
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenBooking={() => handleOpenBooking('Floating Trial Button')} />

      {/* Universal Trial & Membership Booking Modal */}
      <BookingModal
        key={bookingSelection || 'default'}
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialSelection={bookingSelection}
      />

      {/* Legal & Health Disclaimer Modals */}
      <LegalModals
        type={legalModalType}
        onClose={handleCloseLegal}
      />

    </div>
  );
}
