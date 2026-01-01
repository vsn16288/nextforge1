
import React from 'react';
import { Logo } from './Logo.tsx';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 glass-effect border-b border-slate-800' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo variant="nav" />
          </div>

          <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#services" className="hover:text-cyan-400 hover:text-glow transition-all">Services</a>
            <a href="#process" className="hover:text-cyan-400 hover:text-glow transition-all">Process</a>
            <a href="#testimonials" className="hover:text-cyan-400 hover:text-glow transition-all">Testimonials</a>
            <a href="#contact" className="hover:text-cyan-400 hover:text-glow transition-all">Contact</a>
          </div>

          <button className="relative group overflow-hidden bg-cyan-500 px-7 py-3 rounded-full font-black text-slate-950 text-xs uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 active:scale-95">
            <span className="relative z-10">Start Forging</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
          </button>
        </div>
      </div>
    </nav>
  );
};
