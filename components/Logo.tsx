
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'nav' | 'hero';
  logoImage?: string; 
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "w-12 h-12", 
  variant = 'nav',
  logoImage 
}) => {
  const brandName = "NEXTFORGE";
  const tagline = "BUILDING THE NEXT";

  // Navbar Version - Compact and Professional
  if (variant === 'nav') {
    return (
      <div className="flex flex-col items-start gap-1 group/nav-logo cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 transition-all duration-500 group-hover/nav-logo:rotate-[360deg] group-hover/nav-logo:scale-110">
            {logoImage ? (
              <img src={logoImage} alt="NEXTFORGE" className="w-full h-full object-contain" />
            ) : (
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 25 L45 40 L45 85 L20 70 Z" fill="#1d4ed8" />
                <path d="M55 15 L80 30 L80 75 L55 60 Z" fill="#38bdf8" />
              </svg>
            )}
          </div>
          <span className="text-lg font-black tracking-widest text-white transition-colors group-hover/nav-logo:text-cyan-400">{brandName}</span>
        </div>
      </div>
    );
  }

  // Hero Version - High-Impact Edge Glow and Smooth Sequence
  return (
    <div className="relative flex flex-col items-center justify-center group/logo cursor-pointer select-none min-h-[400px] md:min-h-[600px] w-full max-w-screen-2xl mx-auto overflow-hidden px-4 py-20">
      
      {/* 1. THE CORE: Central Floating Energy Source */}
      <div className={`${className} relative z-30 transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) group-hover/logo:opacity-0 group-hover/logo:blur-[120px] group-hover/logo:scale-[6] flex items-center justify-center animate-float pointer-events-none`}>
        {logoImage ? (
          <img src={logoImage} alt="NEXTFORGE Core" className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.7)]" />
        ) : (
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full drop-shadow-[0_0_80px_rgba(34,211,238,0.8)]"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <path d="M20 25 L45 40 L45 85 L20 70 Z" fill="#1e3a8a" />
            <path d="M55 15 L80 30 L80 75 L55 60 Z" fill="url(#neuralGrad)" />
            <path d="M45 40 L55 45 L55 65 L45 60 Z" fill="#38bdf8" className="animate-circuit-pulse" />
          </svg>
        )}
      </div>

      {/* 2. THE REVEAL: Scoped Brand Reveal Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 w-full">
        
        {/* Brand Name: Each letter has a distinct high-intensity glow */}
        <div className="flex justify-center items-center h-fit w-full px-2 mb-8 md:mb-16 overflow-visible">
          {brandName.split('').map((char, i) => (
            <span 
              key={i} 
              style={{ 
                transitionDelay: `${i * 80}ms`,
                fontSize: 'clamp(2.5rem, 11vw, 13rem)',
                textShadow: '0 0 15px rgba(34,211,238,0.8), 0 0 30px rgba(34,211,238,0.4)',
              }} 
              className="font-black tracking-[-0.05em] text-white opacity-0 -translate-y-24 blur-2xl group-hover/logo:opacity-100 group-hover/logo:translate-y-0 group-hover/logo:blur-0 transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) inline-block leading-none will-change-transform"
            >
              {char}
            </span>
          ))}
        </div>
        
        {/* Tagline: Smoothly emerges after the name is fully revealed */}
        <div className="flex justify-center items-center w-full max-w-[90vw] md:max-w-6xl opacity-0 translate-y-12 group-hover/logo:opacity-100 group-hover/logo:translate-y-0 transition-all duration-1000 delay-[900ms] px-4">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent flex-1" />
          
          <div className="relative px-6 md:px-16 py-3 flex flex-col items-center">
            <span className="text-xs sm:text-base md:text-3xl lg:text-4xl font-black tracking-[0.4em] md:tracking-[0.6em] text-cyan-400 uppercase italic whitespace-nowrap drop-shadow-[0_0_20px_rgba(34,211,238,0.6)] text-center block">
              {tagline}
            </span>
            
            {/* Animated Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 animate-scan-v opacity-0 group-hover/logo:opacity-100" />
          </div>
          
          <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent flex-1" />
        </div>
      </div>
      
      {/* 3. ATMOSPHERE: High-Performance Glow Layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-600/0 group-hover/logo:bg-cyan-500/10 blur-[200px] rounded-full transition-all duration-1500 -z-10" />
      
      {/* Matrix Data Overlay on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover/logo:opacity-10 transition-opacity duration-1000 pointer-events-none bg-grid z-0" />
    </div>
  );
};
