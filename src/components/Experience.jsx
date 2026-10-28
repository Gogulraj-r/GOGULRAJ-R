import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, CheckCircle2, Terminal } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#10131A] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

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
            <span className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase">04 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">WORK HISTORY</span>
            <div className="h-[1px] w-12 bg-[#00E5FF]/30" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Professional <span className="text-gradient-violet">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A1A7B3] mt-3 max-w-xl">
            Practical industry exposure contributing to software engineering pipelines and collaborative developer workflows.
          </p>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute left-4 sm:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#00E5FF] via-[#8B5CF6] to-transparent"
          />

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative pl-12 sm:pl-20 py-2"
          >
            {/* Timeline Node Icon */}
            <div className="absolute left-2 sm:left-6 -translate-x-1/2 top-4 w-6 h-6 rounded-full bg-[#08090D] border-2 border-[#00E5FF] shadow-glow-cyan flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
            </div>

            {/* Experience Card */}
            <div className="group rounded-3xl bg-[#08090D]/90 border border-white/[0.08] hover:border-[#00E5FF]/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl relative overflow-hidden">
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/20 mb-3">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Internship Role</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                    Software Developer Intern
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#A1A7B3] mt-1 font-medium">
                    <Building2 className="w-4 h-4 text-[#8B5CF6]" />
                    <span className="text-white">Altruist Technologies Private Limited</span>
                  </div>
                </div>
              </div>

              {/* Exact Description */}
              <p className="text-sm sm:text-base text-[#A1A7B3] leading-relaxed mb-6 font-normal">
                Gained practical experience in software development, programming, and debugging while strengthening technical skills and learning software development workflows.
              </p>

              {/* Competencies Acquired */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-white/[0.04] text-[#F5F7FA] border border-white/[0.08]">
                  Software Development
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/[0.04] text-[#F5F7FA] border border-white/[0.08]">
                  Programming & Debugging
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/[0.04] text-[#F5F7FA] border border-white/[0.08]">
                  Engineering Workflows
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/[0.04] text-[#F5F7FA] border border-white/[0.08]">
                  Collaborative Coding
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
