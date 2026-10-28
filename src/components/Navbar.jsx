import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map(item => item.id), 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090D]/80 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo GR Monogram */}
          <button
            onClick={() => scrollTo('home')}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded-lg"
            aria-label="Gogulraj R - Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#10131A] to-[#171B26] border border-white/10 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-[#00E5FF]/40">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/10 to-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-heading font-extrabold text-lg tracking-tight bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                GR
              </span>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-heading font-bold text-sm tracking-wide text-white leading-tight">
                Gogulraj R
              </span>
              <span className="text-[11px] font-mono text-[#00E5FF] tracking-wider uppercase">
                Full-Stack Dev
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#10131A]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.06]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00E5FF] ${
                    isActive ? 'text-white' : 'text-[#A1A7B3] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/15 to-[#8B5CF6]/15 border border-[#00E5FF]/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#08090D] shadow-glow-cyan hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#10131A] border border-white/10 text-[#F5F7FA] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pt-3 pb-6 bg-[#08090D]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                      isActive
                        ? 'bg-gradient-to-r from-[#00E5FF]/10 to-[#8B5CF6]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold'
                        : 'text-[#A1A7B3] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />}
                  </button>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/[0.06]">
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#08090D] shadow-glow-cyan"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
