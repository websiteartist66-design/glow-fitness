'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { STUDIO_INFO } from '@/lib/data';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles, 
  Calendar, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (programOrClass?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'programs', 'classes', 'why-us', 'calculator', 'memberships', 'reviews', 'gallery', 'blog', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Classes', href: '#classes' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Membership', href: '#memberships' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#121212] text-[#F5F5F4] text-xs py-2 px-4 border-b border-white/5 font-sans-artistic">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 bg-[#C49102]/15 text-[#E8D8C4] px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-bold border border-[#C49102]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C49102] animate-pulse" />
              100% Women-Only Studio
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#F5F5F4]/70">
              <MapPin className="w-3.5 h-3.5 text-[#C49102]" />
              Patel Chowk, Pathankot (Punjab)
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-[#F5F5F4]/70">
              <Clock className="w-3.5 h-3.5 text-[#C49102]" />
              Mon - Sat: 7:00 AM - 8:30 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-[11px] text-[#E8D8C4] hover:text-[#C49102] transition-colors font-medium tracking-wide"
              id="top-bar-phone-link"
            >
              <Phone className="w-3 h-3 text-[#C49102]" />
              <span>Call: {STUDIO_INFO.phone}</span>
            </a>
            <span className="opacity-30">|</span>
            <button
              onClick={() => onOpenBooking()}
              className="text-[10px] uppercase tracking-widest text-[#C49102] hover:text-[#E8D8C4] transition-colors font-bold underline underline-offset-2"
              id="top-bar-book-trial-btn"
            >
              Free Trial Available
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-[#E6DFD5] dark:border-white/5' 
          : 'bg-white/85 dark:bg-[#0A0A0A]/85 backdrop-blur-sm py-3.5 border-b border-black/5 dark:border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Branding */}
          <a href="#home" className="flex items-center gap-3 group" id="navbar-brand-logo">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#E8D8C4] to-[#C49102] flex items-center justify-center text-[#0A0A0A] shadow-md group-hover:scale-105 transition-transform duration-200 glow-gold">
              <Sparkles className="w-4 h-4 text-[#0A0A0A]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tighter uppercase font-serif-editorial text-gray-900 dark:text-[#F5F5F4]">
                  GLOW<span className="text-[#C49102]">FIT</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] px-2 py-0.5 rounded-full bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30">
                  Ladies Only
                </span>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-[#F5F5F4]/50 font-medium tracking-widest uppercase">
                Pathankot&apos;s Fitness Sanctuary
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-widest font-semibold transition-all duration-200 py-1 ${
                    isActive 
                      ? 'text-[#C49102] border-b border-[#C49102]' 
                      : 'text-gray-700 dark:text-[#F5F5F4]/70 hover:text-[#C49102] dark:hover:text-[#E8D8C4]'
                  }`}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="p-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-[#F5F5F4] hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shadow-sm"
              id="theme-toggle-btn"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-[#C49102]" />
              ) : (
                <Sun className="w-4 h-4 text-[#C49102]" />
              )}
            </button>

            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest text-gray-800 dark:text-[#F5F5F4] border border-gray-300 dark:border-white/15 hover:border-[#C49102] dark:hover:border-[#C49102] transition-colors"
              id="nav-quick-call-btn"
            >
              <Phone className="w-3.5 h-3.5 text-[#C49102]" />
              <span>{STUDIO_INFO.phone}</span>
            </a>

            {/* Book Trial CTA Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none sm:rounded-lg text-[11px] font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 glow-gold"
              id="nav-book-trial-cta"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Free Trial</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-[#F5F5F4] hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border border-gray-200 dark:border-white/10"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A0A0A] px-4 pt-4 pb-6 shadow-2xl animate-fadeIn font-sans-artistic">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-[11px] uppercase tracking-wider font-semibold text-gray-700 dark:text-[#F5F5F4]/80 hover:text-[#C49102] dark:hover:text-[#E8D8C4] hover:bg-amber-50 dark:hover:bg-white/5 rounded flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3 h-3 text-[#C49102] opacity-60" />
                </a>
              ))}
            </div>

            <div className="border-t border-gray-100 dark:border-white/10 pt-3 flex flex-col gap-2">
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded text-xs uppercase tracking-widest font-bold text-gray-800 dark:text-[#F5F5F4] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10"
              >
                <Phone className="w-4 h-4 text-[#C49102]" />
                <span>Call: {STUDIO_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded text-xs uppercase tracking-widest font-bold text-white bg-[#C49102] hover:bg-[#A37801] shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Trial Session</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
