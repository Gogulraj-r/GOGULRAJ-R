import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, FolderGit2, Send, Mail, MapPin } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import SceneFallback from './SceneFallback';

const Scene3D = lazy(() => import('./Scene3D'));

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#00E5FF]/10 via-[#8B5CF6]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[#8B5CF6]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-mono text-[#A1A7B3] flex items-center gap-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for Opportunities</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1 text-[#00E5FF]">
                  <MapPin className="w-3 h-3 inline" />
                  Tamil Nadu, India
                </span>
              </span>
            </motion.div>

            {/* Small introductory label */}
            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#00E5FF] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                HELLO, I'M
              </span>
            </motion.div>

            {/* Main Heading: GOGULRAJ R */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-white leading-[1.05] mb-3"
            >
              GOGULRAJ <span className="text-gradient-cyan">R</span>
            </motion.h1>

            {/* Professional Title: Full-Stack Developer */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-gradient-violet">
                Full-Stack Developer
              </h2>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#A1A7B3] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              I build responsive, interactive, and user-focused web experiences with modern frontend technologies and backend solutions.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="group px-7 py-3.5 rounded-xl font-heading font-semibold text-sm bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#08090D] shadow-glow-cyan hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5"
              >
                <span>Explore My Work</span>
                <FolderGit2 className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="group px-7 py-3.5 rounded-xl font-heading font-semibold text-sm bg-[#10131A] text-[#F5F7FA] border border-white/10 hover:border-[#8B5CF6]/50 hover:text-white hover:bg-[#171B26] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 shadow-card"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 text-[#8B5CF6] transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>

            {/* Quick Links & Core Tech Chips */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-6 border-t border-white/[0.06] text-xs text-[#A1A7B3]"
            >
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Gogulraj-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:text-[#00E5FF] border border-white/5 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:gogulrajr2004@gmail.com"
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:text-[#00E5FF] border border-white/5 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="h-4 w-[1px] bg-white/10" />
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="text-white/40">SPECIALTY:</span>
                <span className="text-[#00E5FF]">React</span>
                <span className="text-white/20">•</span>
                <span className="text-[#8B5CF6]">Node.js</span>
                <span className="text-white/20">•</span>
                <span className="text-[#00E5FF]">MySQL</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 3D Canvas (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-[380px] sm:h-[460px] lg:h-[540px] relative flex items-center justify-center"
          >
            {/* Backdrop Glow Frame */}
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-[#00E5FF]/10 via-[#8B5CF6]/10 to-transparent blur-2xl pointer-events-none" />
            
            {/* 3D Scene */}
            <div className="w-full h-full relative z-10">
              <Suspense fallback={<SceneFallback />}>
                <Scene3D />
              </Suspense>
            </div>

            {/* Floating 3D Interaction Hint Badge */}
            <div className="absolute bottom-4 right-4 glass-pill px-3 py-1.5 rounded-full text-[10px] font-mono text-[#A1A7B3] flex items-center gap-1.5 pointer-events-none select-none z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
              <span>Interactive 3D • Drag to rotate</span>
            </div>
          </motion.div>
        </div>

        {/* Small Scroll Indicator at bottom */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full flex justify-center pt-8 pb-2"
        >
          <button
            onClick={() => scrollTo('about')}
            className="group flex flex-col items-center gap-2 text-xs font-mono text-[#A1A7B3] hover:text-[#00E5FF] transition-colors focus:outline-none"
            aria-label="Scroll to About section"
          >
            <span className="tracking-widest uppercase text-[10px]">SCROLL DOWN</span>
            <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center p-1 group-hover:border-[#00E5FF]/50 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
