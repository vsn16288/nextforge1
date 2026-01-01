
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

  // Static Navbar Version - Minimalist
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

  // Ultra-Professional Hero Version - High Impact, No Clipping, No White Circle
  return (
    <div className="relative flex flex-col items-center justify-center group/logo cursor-pointer select-none min-h-[400px] md:min-h-[600px] w-full max-w-screen-2xl mx-auto overflow-visible">
      
      {/* Central Brand Core - Dynamic Floating & Dissolve */}
      <div className={`${className} relative z-20 transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) group-hover/logo:opacity-0 group-hover/logo:blur-[80px] group-hover/logo:scale-[4] flex items-center justify-center animate-float`}>
        {logoImage ? (
          <img src={logoImage} alt="NEXTFORGE Core" className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]" />
        ) : (
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full drop-shadow-[0_0_60px_rgba(34,211,238,0.7)]"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <path d="M20 25 L45 40 L45 85 L20 70 Z" fill="#1e3a8a" />
            <path d="M55 15 L80 30 L80 75 L55 60 Z" fill="url(#heroGrad)" />
            <path d="M45 40 L55 45 L55 65 L45 60 Z" fill="#38bdf8" className="animate-circuit-pulse" />
          </svg>
        )}
      </div>

      {/* Hero Reveal Container - Positioned to prevent clipping */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 w-full">
        
        {/* Typographic Core: Brand Name with Edge Glow */}
        <div className="flex justify-center items-center h-fit w-full px-4 mb-4 md:mb-8 overflow-visible">
          {brandName.split('').map((char, i) => (
            <span 
              key={i} 
              style={{ 
                transitionDelay: `${i * 55}ms`,
                fontSize: 'clamp(2.5rem, 12vw, 14rem)', // Fluid typography to prevent clipping
              }} 
              className="font-black tracking-[-0.04em] text-white opacity-0 translate-y-16 blur-md group-hover/logo:opacity-100 group-hover/logo:translate-y-0 group-hover/logo:blur-0 group-hover/logo:drop-shadow-[0_0_35px_rgba(34,211,238,1)] transition-all duration-1000 inline-block leading-none will-change-transform"
            >
              {char}
            </span>
          ))}
        </div>
        
        {/* Professional Scoped Tagline: BUILDING THE NEXT */}
        <div className="flex justify-center items-center w-full max-w-[90vw] md:max-w-6xl opacity-0 translate-y-12 group-hover/logo:opacity-100 group-hover/logo:translate-y-0 transition-all duration-1000 delay-500 px-2 sm:px-6">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent flex-1 hidden sm:block" />
          <div className="relative px-4 sm:px-12 md:px-20">
            <span className="text-xs sm:text-base md:text-3xl lg:text-5xl font-black tracking-[0.2em] md:tracking-[0.4em] text-cyan-400 uppercase italic whitespace-nowrap drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] text-center block">
              {tagline}
            </span>
            {/* Horizontal Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30 animate-scan-v opacity-0 group-hover/logo:opacity-100" />
          </div>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent flex-1 hidden sm:block" />
        </div>
      </div>
      
      {/* Hyper-Glow Atmospheric Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-cyan-600/0 group-hover/logo:bg-cyan-500/10 blur-[180px] rounded-full transition-all duration-1000 -z-10" />
      
      {/* Dynamic Grid Enhancement on Hover */}
      <div className="absolute inset-[-50%] opacity-0 group-hover/logo:opacity-10 transition-opacity duration-1000 pointer-events-none bg-grid" />
    </div>
  );
};
