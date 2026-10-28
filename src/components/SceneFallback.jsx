import React from 'react';

// Lightweight CSS Fallback & Loading visual while Three.js initializes
export default function SceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative select-none pointer-events-none">
      {/* Outer pulsing cyber rings */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-[#00E5FF]/20 animate-spin-slow" />
      <div className="absolute w-52 h-52 sm:w-68 sm:h-68 md:w-80 md:h-80 rounded-full border border-[#8B5CF6]/30 animate-pulse-slow" />
      <div 
        className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full border border-dashed border-[#00E5FF]/35 animate-spin" 
        style={{ animationDuration: '24s' }} 
      />

      {/* Central glowing orb */}
      <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-tr from-[#8B5CF6]/35 to-[#00E5FF]/35 blur-xl animate-pulse" />
      
      {/* Facet core simulation */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#121620] to-[#08090D] border border-[#00E5FF]/40 shadow-glow-dual rotate-45 flex items-center justify-center">
        <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 animate-ping opacity-60" />
        <span className="absolute text-[#00E5FF] font-mono text-[11px] font-bold tracking-widest uppercase -rotate-45">
          GR 3D
        </span>
      </div>
    </div>
  );
}
