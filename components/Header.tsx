
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const LOGO_SRC =
  'https://res.cloudinary.com/dij4v6vtx/image/upload/v1771838976/Gemini_Generated_Image_ro5ow2ro5ow2ro5o-removebg-preview_pmroh6.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#060a14]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20 md:h-24 py-4">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="relative h-20 md:h-28 w-auto">
              <Image
                src={LOGO_SRC}
                alt="AI Trade SaaS Logo"
                width={400}
                height={150}
                className="h-full w-auto object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection('opportunity')}
              className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5 cursor-pointer whitespace-nowrap"
            >
              Opportunity
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5 cursor-pointer whitespace-nowrap"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('what-you-get')}
              className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5 cursor-pointer whitespace-nowrap"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5 cursor-pointer whitespace-nowrap"
            >
              FAQ
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('early-partner')}
              className="px-5 py-2.5 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/15 transition-all cursor-pointer whitespace-nowrap"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('early-partner')}
              className="px-5 py-2.5 text-sm font-medium text-[#060a14] bg-white rounded-full hover:bg-white/90 transition-all cursor-pointer whitespace-nowrap"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-white`}></i>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => scrollToSection('opportunity')}
                className="text-white/60 hover:text-white hover:bg-white/5 transition-colors text-left px-4 py-3 rounded-lg cursor-pointer"
              >
                Opportunity
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-white/60 hover:text-white hover:bg-white/5 transition-colors text-left px-4 py-3 rounded-lg cursor-pointer"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('what-you-get')}
                className="text-white/60 hover:text-white hover:bg-white/5 transition-colors text-left px-4 py-3 rounded-lg cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-white/60 hover:text-white hover:bg-white/5 transition-colors text-left px-4 py-3 rounded-lg cursor-pointer"
              >
                FAQ
              </button>
              <div className="flex gap-3 mt-3 px-4">
                <button
                  onClick={() => scrollToSection('early-partner')}
                  className="flex-1 px-5 py-2.5 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-full cursor-pointer whitespace-nowrap text-center"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection('early-partner')}
                  className="flex-1 px-5 py-2.5 text-sm font-medium text-[#060a14] bg-white rounded-full cursor-pointer whitespace-nowrap text-center"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
