import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative bg-[#08090D] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase">05 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">ACADEMIC BACKGROUND</span>
            <div className="h-[1px] w-12 bg-[#00E5FF]/30" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Formal <span className="text-gradient-cyan">Education</span>
          </h2>
        </motion.div>

        {/* Minimal Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="group relative rounded-3xl bg-[#10131A] border border-white/[0.08] hover:border-[#00E5FF]/30 p-6 sm:p-10 transition-all duration-300 shadow-xl overflow-hidden">
            {/* Top decorative glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00E5FF]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              
              <div className="flex items-start sm:items-center gap-5">
                {/* Animated Graduation Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 to-[#8B5CF6]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shadow-glow-cyan shrink-0 transition-transform group-hover:scale-105 group-hover:rotate-3">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-[#00E5FF] tracking-wide uppercase">
                      Undergraduate Degree
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                    B.E. Computer Science and Engineering
                  </h3>
                  <p className="text-sm sm:text-base text-[#A1A7B3] mt-1 font-medium">
                    St. Joseph's College of Engineering & Technology
                  </p>
                </div>
              </div>

              {/* Period Pill */}
              <div className="sm:self-center shrink-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#F5F7FA]">
                  <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>2022 – 2026</span>
                </span>
              </div>

            </div>

            {/* Core Academic Foundations */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2 text-[#A1A7B3]">
                <BookOpen className="w-4 h-4 text-[#00E5FF]" />
                <span>Data Structures & Algorithms</span>
              </div>
              <div className="flex items-center gap-2 text-[#A1A7B3]">
                <BookOpen className="w-4 h-4 text-[#8B5CF6]" />
                <span>Database Management Systems</span>
              </div>
              <div className="flex items-center gap-2 text-[#A1A7B3]">
                <BookOpen className="w-4 h-4 text-[#00E5FF]" />
                <span>Software Engineering Methodologies</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
