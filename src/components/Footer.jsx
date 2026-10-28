import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const footerNav = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090D] border-t border-white/[0.06] py-14 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Logo & Brand Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#10131A] to-[#171B26] border border-white/10 flex items-center justify-center hover:border-[#00E5FF]/40 transition-colors group"
              aria-label="Back to Top"
            >
              <span className="font-heading font-extrabold text-xl bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                GR
              </span>
            </button>
            <div>
              <div className="text-white font-heading font-bold text-base">
                Gogulraj R
              </div>
              <div className="text-xs text-[#A1A7B3]">
                Full-Stack Developer • Tamil Nadu, India
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#A1A7B3]">
            {footerNav.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-[#00E5FF] transition-colors focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Gogulraj-r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#10131A] border border-white/10 text-[#A1A7B3] hover:text-white hover:border-[#00E5FF]/40 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#10131A] border border-white/10 text-[#A1A7B3] hover:text-white hover:border-[#8B5CF6]/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:gogulrajr2004@gmail.com"
              className="p-2.5 rounded-xl bg-[#10131A] border border-white/10 text-[#A1A7B3] hover:text-white hover:border-[#00E5FF]/40 transition-all"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#10131A] border border-white/10 text-[#00E5FF] hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]/50 transition-all ml-2"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A1A7B3]/70 gap-4">
          <p>
            Designed & Built by <span className="text-white font-medium">Gogulraj R</span>
          </p>
          <p className="font-mono text-[11px]">
            © {currentYear} All rights reserved. Built with React & Three.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
