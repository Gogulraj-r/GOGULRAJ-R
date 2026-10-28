import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database as DatabaseIcon, 
  Wrench, 
  Sparkles, 
  Cpu, 
  Smartphone, 
  Check, 
  ExternalLink 
} from 'lucide-react';

const skillGroups = [
  {
    id: 'frontend',
    category: 'Frontend Development',
    icon: Code2,
    color: '#00E5FF',
    gradient: 'from-[#00E5FF]/20 to-[#00B4D8]/5',
    description: 'Building responsive, performant, and interactive interfaces with modern web standards.',
    skills: [
      { 
        name: 'React.js', 
        tag: 'Component Architecture & State', 
        iconType: 'react'
      },
      { 
        name: 'JavaScript (ES6+)', 
        tag: 'Modern Syntax & Asynchronous JS', 
        iconType: 'javascript'
      },
      { 
        name: 'HTML5', 
        tag: 'Semantic Markup & Web Accessibility', 
        iconType: 'html5'
      },
      { 
        name: 'CSS3', 
        tag: 'Flexbox, Grid & Modern Styling', 
        iconType: 'css3'
      },
      { 
        name: 'Responsive Web Design', 
        tag: 'Fluid Layouts & Mobile-First', 
        iconType: 'responsive'
      },
    ],
  },
  {
    id: 'backend',
    category: 'Backend Development',
    icon: Server,
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6]/20 to-[#6D28D9]/5',
    description: 'Creating server-side logic, RESTful API endpoints, and scalable application services.',
    skills: [
      { 
        name: 'Node.js', 
        tag: 'Server Runtime & JavaScript Engine', 
        iconType: 'nodejs'
      },
    ],
  },
  {
    id: 'database',
    category: 'Database Management',
    icon: DatabaseIcon,
    color: '#3B82F6',
    gradient: 'from-[#3B82F6]/20 to-[#1D4ED8]/5',
    description: 'Relational data modeling, table normalization, and SQL query execution.',
    skills: [
      { 
        name: 'MySQL', 
        tag: 'Relational Schema & SQL Queries', 
        iconType: 'mysql'
      },
    ],
  },
  {
    id: 'tools',
    category: 'Developer Tools',
    icon: Wrench,
    color: '#10B981',
    gradient: 'from-[#10B981]/20 to-[#047857]/5',
    description: 'Industry-standard workflows for source control, collaboration, and rapid code editing.',
    skills: [
      { 
        name: 'Git', 
        tag: 'Version Control & Branch Management', 
        iconType: 'git'
      },
      { 
        name: 'GitHub', 
        tag: 'Repository Hosting & Collaboration', 
        iconType: 'github'
      },
      { 
        name: 'Visual Studio Code', 
        tag: 'Primary Code Editor & Debugger', 
        iconType: 'vscode'
      },
    ],
  },
];

// Custom SVGs for Tech Stack Icons
function TechIcon({ type, className = "w-5 h-5" }) {
  switch (type) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#00E5FF"/>
          <g stroke="#00E5FF" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
          <path d="M19.5 24.2c.7.4 1.6.7 2.6.7 2.1 0 3.3-1.1 3.3-3.1v-9.3h-2.9v9.2c0 1-.5 1.5-1.4 1.5-.7 0-1.2-.2-1.6-.5v1.5zm-8.2-.1c1 .6 2.2 1 3.5 1 2.9 0 4.6-1.5 4.6-3.8 0-2.1-1.3-3.1-3.6-4.1-1.6-.7-2.3-1.1-2.3-2.1 0-.8.6-1.5 2-1.5 1 0 1.8.3 2.4.7l.8-1.7c-.8-.5-1.8-.8-3.1-.8-2.6 0-4.3 1.5-4.3 3.6 0 2 1.3 3.1 3.5 4 1.6.7 2.4 1.3 2.4 2.2 0 1-.9 1.7-2.3 1.7-1.2 0-2.3-.5-3-1.1l-.9 1.9z" fill="#000000"/>
        </svg>
      );
    case 'html5':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#E34F26">
          <path d="M5 2h22l-2 22.5L16 29 7 24.5 5 2zm18.3 6H8.7l.4 4.5h13.7l-.4 4.8-6.4 1.8-6.4-1.8-.2-2.3H6.8l.5 5 8.7 2.4 8.7-2.4 1.1-12.7.2-2.1z"/>
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#1572B6">
          <path d="M5 2h22l-2 22.5L16 29 7 24.5 5 2zm18.5 4.5H8.5l.3 3.5h14.4l-.4 4.8H12l.3 3.5h10.2l-.6 6.8-5.9 1.6-5.9-1.6-.4-4.2H6.2l.6 7 9.2 2.5 9.2-2.5 1.8-19.6.5-2z"/>
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#339933">
          <path d="M16 2.5l11.5 6.6v13.8L16 29.5 4.5 22.9V9.1L16 2.5zm0 3.3L7.4 10.7v10.6L16 26.2l8.6-4.9V10.7L16 5.8z"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#4479A1">
          <path d="M16 4C9.4 4 4 7.6 4 12c0 2.8 2.2 5.3 5.7 6.7L8 23l5-3c1 .1 2 .2 3 .2 6.6 0 12-3.6 12-8s-5.4-8-12-8zm0 13c-5.5 0-10-2.7-10-6s4.5-6 10-6 10 2.7 10 6-4.5 6-10 6z"/>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#F05032">
          <path d="M29.2 14.3L17.7 2.8c-.8-.8-2.1-.8-2.9 0l-2.8 2.8 3.7 3.7c.9-.3 1.9-.1 2.6.6.7.7.9 1.8.6 2.6l3.6 3.6c.9-.3 1.9-.1 2.6.6 1 .1 1 2.8 0 3.9-1 1-2.8 1-3.9 0-.7-.7-.9-1.8-.6-2.6l-3.3-3.4v8.3c.3.2.5.5.6.8 1 1.1.8 2.8-.3 3.9-1.1 1-2.8.8-3.9-.3-1-1.1-.8-2.8.3-3.9.4-.4.9-.6 1.4-.7v-8.4c-.5-.1-1-.3-1.4-.7-.9-.9-1-2.3-.3-3.3L10.6 8.4 2.8 16.2c-.8.8-.8 2.1 0 2.9l11.5 11.5c.8.8 2.1.8 2.9 0l12-12c.8-.8.8-2.1 0-2.9z"/>
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#FFFFFF">
          <path d="M16 2C8.3 2 2 8.3 2 16c0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.5c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.5-2-1.5-2-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.5 2.2 1.5 1.2 2.2 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.9 1.5 1.1-.3 2.4-.5 3.6-.5s2.5.2 3.6.5c2.7-1.9 3.9-1.5 3.9-1.5.7 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.5 7 .5.4 1 1.3 1 2.6v3.8c0 .4.3.8 1 .7C26 27.4 30 22.2 30 16c0-7.7-6.3-14-14-14z"/>
        </svg>
      );
    case 'vscode':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#007ACC">
          <path d="M23.5 2.5L14 10.3 8.3 5.8 4 8v16l4.3 2.2 5.7-4.5 9.5 7.8 4.5-2.2V4.7l-4.5-2.2zM24 22.5l-8.5-6.5 8.5-6.5v13z"/>
        </svg>
      );
    default:
      return <Smartphone className={className} />;
  }
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredGroups = activeTab === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.id === activeTab);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#10131A] overflow-hidden">
      {/* Subtle Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase">02 //</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">TECH STACK</span>
              <div className="h-[1px] w-12 bg-[#00E5FF]/30" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              Tools, Technologies & <span className="text-gradient-violet">Frameworks</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A1A7B3] mt-3 max-w-xl">
              Organized into interactive domains covering client-side interfaces, backend runtimes, database architecture, and developer workflows.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#08090D]/80 p-1.5 rounded-2xl border border-white/10 self-start">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#08090D] font-semibold shadow-glow-cyan'
                  : 'text-[#A1A7B3] hover:text-white'
              }`}
            >
              All Skills
            </button>
            {skillGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === group.id
                    ? 'bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#08090D] font-semibold shadow-glow-cyan'
                    : 'text-[#A1A7B3] hover:text-white'
                }`}
              >
                {group.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="group relative rounded-2xl bg-[#08090D]/90 border border-white/[0.08] hover:border-[#00E5FF]/30 p-6 sm:p-8 transition-all duration-300 shadow-card hover:shadow-glow-cyan/10 flex flex-col justify-between"
              >
                {/* Subtle Card Header Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${group.gradient}`} />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
                        style={{ backgroundColor: `${group.color}15`, color: group.color }}
                      >
                        <GroupIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-white group-hover:text-[#00E5FF] transition-colors">
                          {group.category}
                        </h3>
                        <span className="text-[11px] font-mono text-[#A1A7B3]">
                          {group.skills.length} core {group.skills.length === 1 ? 'skill' : 'technologies'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs text-[#A1A7B3] mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="space-y-3">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-[#121620]/60 border border-white/[0.05] hover:border-white/15 hover:bg-[#161B26] transition-all flex items-center justify-between group/item"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center p-1.5 border border-white/[0.08] group-hover/item:border-[#00E5FF]/40 transition-colors">
                            <TechIcon type={skill.iconType} className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover/item:text-[#00E5FF] transition-colors">
                              {skill.name}
                            </div>
                            <div className="text-[11px] text-[#A1A7B3]">
                              {skill.tag}
                            </div>
                          </div>
                        </div>

                        <div className="w-6 h-6 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/[0.06] group-hover/item:border-emerald-500/40 text-emerald-400 opacity-60 group-hover/item:opacity-100 transition-opacity">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Meta indicator */}
                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-[#A1A7B3]">
                  <span>Domain verified</span>
                  <span className="text-[#00E5FF] group-hover:translate-x-1 transition-transform">
                    Production Ready →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
