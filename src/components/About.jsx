import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Layers, 
  Database, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Globe 
} from 'lucide-react';

const technicalInterests = [
  {
    title: 'Modern Frontend Development',
    desc: 'Crafting responsive, high-performance user interfaces using React.js and modern JavaScript (ES6+).',
    icon: LayoutGridIcon,
  },
  {
    title: 'Backend & API Engineering',
    desc: 'Building reliable backend solutions and server logic with Node.js.',
    icon: Terminal,
  },
  {
    title: 'Database Architecture',
    desc: 'Designing structured relational data models and querying with MySQL.',
    icon: Database,
  },
  {
    title: 'Interactive User Experiences',
    desc: 'Blending fluid animations, accessible layouts, and clean visual design.',
    icon: Cpu,
  },
];

function LayoutGridIcon(props) {
  return <Layers {...props} />;
}

const highlights = [
  {
    label: 'Architecture',
    value: 'Full-Stack Foundation',
    sub: 'Frontend, Backend & Relational DB',
  },
  {
    label: 'Methodology',
    value: 'Clean & Maintainable',
    sub: 'Modular code & Git version control',
  },
  {
    label: 'Design Mindset',
    value: 'Responsive & Accessible',
    sub: 'Pixel-perfect across all screen sizes',
  },
  {
    label: 'Dedication',
    value: 'Continuous Learning',
    sub: 'Exploring cutting-edge web standards',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase">01 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">ABOUT ME</span>
            <div className="h-[1px] w-12 bg-[#00E5FF]/30" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white max-w-3xl leading-tight">
            Turning Ideas Into <span className="text-gradient-cyan">Interactive Digital</span> Experiences.
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Profile Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gradient Border */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#00E5FF]/30 via-[#8B5CF6]/30 to-transparent blur-md opacity-70 transition duration-500 group-hover:opacity-100" />
              
              {/* Profile Card Container */}
              <div className="relative rounded-2xl bg-[#10131A] border border-white/10 overflow-hidden shadow-2xl">
                {/* Visual Image */}
                <div className="relative aspect-[4/4] sm:aspect-[4/4.5] w-full overflow-hidden bg-[#08090D]">
                  <img
                    src="/avatar.jpg"
                    alt="Gogulraj R - Full-Stack Developer visual portrait"
                    className="w-full h-full object-cover object-center filter contrast-105 transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10131A] via-transparent to-transparent opacity-90" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-[#08090D]/80 backdrop-blur-md border border-white/10">
                    <div>
                      <div className="text-xs font-mono text-[#00E5FF]">Gogulraj R</div>
                      <div className="text-[11px] text-[#A1A7B3]">Full-Stack Developer</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </div>
                  </div>
                </div>

                {/* Card Base Information */}
                <div className="p-5 border-t border-white/[0.06] bg-[#121620]/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#A1A7B3]">
                    <Globe className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>Based in Tamil Nadu, India</span>
                  </div>
                  <span className="font-mono text-[#8B5CF6] text-[11px]">CS Engineer</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Summary & Highlights (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Professional Summary */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl mb-8 relative border-l-4 border-l-[#00E5FF]">
              <p className="text-base sm:text-lg text-[#F5F7FA] leading-relaxed font-normal">
                I'm a motivated <strong className="text-white font-semibold">Full-Stack Developer</strong> with a foundation in frontend development, backend technologies, and database management. I enjoy building responsive web applications, creating intuitive user experiences, and writing clean, maintainable code. I'm passionate about learning modern technologies and solving real-world problems through software development.
              </p>
            </div>

            {/* Compact Professional Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#10131A]/70 border border-white/[0.06] hover:border-[#00E5FF]/30 transition-colors"
                >
                  <div className="text-[11px] font-mono text-[#00E5FF] tracking-wider uppercase mb-1">
                    {h.label}
                  </div>
                  <div className="text-sm font-heading font-semibold text-white mb-0.5">
                    {h.value}
                  </div>
                  <div className="text-xs text-[#A1A7B3]">
                    {h.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Interests Sub-section */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#A1A7B3] mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                TECHNICAL FOCUS & INTERESTS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {technicalInterests.map((interest, idx) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white mb-0.5 font-heading">
                          {interest.title}
                        </div>
                        <div className="text-[11px] text-[#A1A7B3] leading-snug">
                          {interest.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
