import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Maximize2, 
  X, 
  Code, 
  CheckCircle, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const projects = [
  {
    id: 'real-estate',
    title: 'Real Estate Property Website',
    tagline: 'Residential & Commercial Property Showcase Platform',
    description:
      'Developed a responsive real estate website showcasing residential and commercial properties. Implemented property listings, search and filtering, detailed property information, and enquiry forms.',
    image: '/projects/real_estate.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Gogulraj-r/real-estate.git',
    highlights: [
      'Residential and commercial listing catalogue',
      'Location and budget search filtering',
      'Interactive detailed property overview cards',
      'Lead capture & enquiry contact forms',
      'Mobile-responsive fluid CSS layout',
    ],
    badge: 'Property Platform',
    color: '#00E5FF',
  },
  {
    id: 'cake-shop',
    title: 'Cake Shop Landing Page',
    tagline: 'Modern Artisan Bakery & Confectionery Showcase',
    description:
      'Designed and developed a modern, responsive cake shop landing page featuring product categories, featured cakes, special offers, customer reviews, and interactive call-to-action sections.',
    image: '/projects/cake_shop.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Gogulraj-r/cake-landing-page.git',
    highlights: [
      'Curated product categories for cakes and pastries',
      'Featured gourmet delicacies showcase',
      'Weekly promotional and special offers banners',
      'Verified customer review testimonial cards',
      'Interactive call-to-action ordering sections',
    ],
    badge: 'Artisan Commerce',
    color: '#8B5CF6',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00E5FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

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
            <span className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase">03 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">FEATURED PROJECTS</span>
            <div className="h-[1px] w-12 bg-[#00E5FF]/30" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
                Crafted With <span className="text-gradient-cyan">Precision</span> & Code
              </h2>
              <p className="text-sm sm:text-base text-[#A1A7B3] mt-3 max-w-2xl">
                Explore real web applications designed with responsive layouts, interactive elements, and clean semantic architecture.
              </p>
            </div>
            
            <a
              href="https://github.com/Gogulraj-r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#00E5FF] hover:underline self-start shrink-0"
            >
              <span>View All on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Projects Cards List */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative rounded-3xl bg-[#10131A]/80 border border-white/[0.08] hover:border-white/20 p-6 sm:p-8 lg:p-10 transition-all duration-500 shadow-2xl overflow-hidden"
              >
                {/* Subtle top edge glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundImage: `linear-gradient(to right, transparent, ${project.color}, transparent)` }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Project Preview Image Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-[#08090D] border border-white/10 group/img shadow-2xl">
                      {/* Browser Mockup Top Bar */}
                      <div className="px-4 py-3 bg-[#161B26] border-b border-white/[0.06] flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                        </div>
                        <span className="text-[11px] font-mono text-[#A1A7B3]/70 truncate max-w-[200px]">
                          {project.title.toLowerCase().replace(/\s+/g, '-')}.dev
                        </span>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="p-1 rounded text-[#A1A7B3] hover:text-white transition-colors"
                          aria-label={`Enlarge preview of ${project.title}`}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Image Frame with Zoom Hover */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <img
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#08090D]/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 rounded-xl bg-[#08090D]/90 text-white font-mono text-xs border border-white/20 shadow-lg flex items-center gap-2">
                            <Maximize2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                            View Full Preview
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info & Metadata Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
                    
                    {/* Badge & Number */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="glass-pill px-3 py-1 rounded-full text-xs font-mono font-medium" style={{ color: project.color, borderColor: `${project.color}30` }}>
                        {project.badge}
                      </span>
                      <span className="font-mono text-xs text-white/30">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-mono text-[#00E5FF] mb-4">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#A1A7B3] leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.slice(0, 3).map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#F5F7FA]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#F5F7FA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-[#08090D] hover:bg-[#00E5FF] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>View Source Code</span>
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium bg-white/[0.04] text-[#A1A7B3] hover:text-white hover:bg-white/[0.08] border border-white/10 transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Details & Gallery</span>
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Modal for High-Res Detail Inspection */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#10131A] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider">
                  Featured Project Review
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Full Image Preview */}
              <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 bg-black">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} high resolution preview`}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Details & Specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs font-mono text-[#A1A7B3] uppercase tracking-wider mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-[#F5F7FA] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#A1A7B3] uppercase tracking-wider mb-2">
                    Key Features Implemented
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#A1A7B3] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between pt-6 border-t border-white/10 gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-mono text-[#00E5FF] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-heading text-xs font-semibold bg-[#00E5FF] text-[#08090D] shadow-glow-cyan hover:bg-[#00B4D8] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source Code on GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
