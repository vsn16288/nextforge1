
import React from 'react';
import { Smartphone, Tablet, Globe, Layout, Layers, Shield, Cpu, Zap, Activity, Code2, Lock } from 'lucide-react';

const services = [
  {
    icon: (
      <div className="relative flex items-center justify-center w-full h-full">
        <Smartphone className="w-8 h-8 relative z-10 group-hover:text-cyan-300 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none rounded-lg">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-v" />
        </div>
        <div className="absolute inset-0 border border-cyan-500/20 rounded-lg animate-pulse" />
      </div>
    ),
    title: 'iOS App Development',
    description: 'Beautiful, high-performance applications built natively for the Apple ecosystem using Swift and SwiftUI.'
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-full h-full">
        <Tablet className="w-8 h-8 z-10" />
        <div className="absolute w-2 h-2 bg-cyan-500 rounded-full animate-orbit opacity-70" />
        <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-orbit [animation-delay:-2s] opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-12 h-12 rotate-[-45deg] opacity-20">
            <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-cyan-400 animate-spin-slow" />
          </svg>
        </div>
      </div>
    ),
    title: 'Android Development',
    description: 'Scalable and robust apps for millions of Android devices using Kotlin and Jetpack Compose.'
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-full h-full">
        <Globe className="w-8 h-8 animate-spin-slow text-cyan-400" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border border-cyan-500/40 rounded-full animate-radar-ping" />
          <div className="w-10 h-10 border border-cyan-500/40 rounded-full animate-radar-ping [animation-delay:1s]" />
        </div>
      </div>
    ),
    title: 'Cross-Platform',
    description: 'Efficient development cycles using React Native or Flutter to target both platforms with a single codebase.'
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-full h-full">
        <Layout className="w-8 h-8 animate-glitch-active" />
        <div className="absolute inset-0 flex flex-col justify-around py-2 px-1 opacity-40">
          <div className="h-0.5 w-full bg-cyan-500 animate-data-flow" />
          <div className="h-0.5 w-full bg-cyan-500 animate-data-flow [animation-delay:1.5s]" />
        </div>
        <div className="absolute -inset-1 border-t border-cyan-500/30 rounded-full animate-spin-slow opacity-20" />
      </div>
    ),
    title: 'UI/UX Design',
    description: 'Human-centric design that focuses on aesthetics, usability, and modern futuristic interfaces.'
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-full h-full">
        <Layers className="w-8 h-8 animate-circuit-pulse" />
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <path d="M4 8h8M4 12h12M4 16h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-cyan-400 animate-data-flow" />
        </svg>
        <Code2 className="absolute bottom-0 right-0 w-3 h-3 text-cyan-500 opacity-60" />
      </div>
    ),
    title: 'Full-Stack Solutions',
    description: 'Comprehensive backend architectures that scale with your users, ensuring seamless performance.'
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-full h-full">
        <Shield className="w-8 h-8 relative z-10" />
        <Lock className="absolute w-3 h-3 top-1 right-1 text-cyan-400 opacity-80 animate-pulse" />
        <div className="absolute inset-0 bg-cyan-400/5 rounded-full animate-pulse-ring" />
        <div className="absolute inset-2 border-2 border-cyan-500/20 rounded-full border-dashed animate-spin-slow" />
      </div>
    ),
    title: 'Security & QA',
    description: 'Rigorous testing and enterprise-grade security protocols to protect your data and users.'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Activity className="w-4 h-4 animate-circuit-pulse" />
            <span>Forge Laboratory</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Small to Big. We Build Everything.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Whether you are a startup looking for an MVP or a global enterprise requiring a digital overhaul, 
            NEXTFORGE provides the technical edge you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[2.5rem] border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Card internal glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-colors" />
              
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-500 relative overflow-hidden">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                {service.title}
                <Zap className="w-3 h-3 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm lg:text-base group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-800/50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold text-cyan-500 uppercase tracking-tighter">Forge Phase 0{idx + 1}</span>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
