
import React from 'react';
import { Rocket, Smartphone, Zap, Code2, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo.tsx';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-visible bg-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2)_0%,transparent_60%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-visible">
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center overflow-visible">
          
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect border border-cyan-500/20 text-[10px] font-black tracking-[0.3em] text-cyan-400 uppercase animate-float">
             <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
             Forge Laboratory Online
          </div>

          <div className="relative mb-12 md:mb-24 mt-4 w-full flex justify-center overflow-visible">
            <Logo variant="hero" className="w-32 h-32 md:w-64 md:h-64" />
          </div>
          
          <div className="space-y-6 max-w-5xl">
            <h2 className="text-lg md:text-2xl font-light tracking-[0.5em] text-slate-400 uppercase opacity-60">
              Forging the future of <span className="text-white font-black text-glow">Mobile Systems</span>
            </h2>
            
            <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-8 select-none">
              Small to <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 text-glow">Enterprise.</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              The premier destination for elite Android & iOS solutions. 
              We don't just build apps; we architect digital dominance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <button className="group relative bg-white text-slate-950 px-12 py-5 rounded-2xl font-black text-lg hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all flex items-center gap-3 overflow-hidden">
              <span className="relative z-10 uppercase tracking-widest">Start Forging</span>
              <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button className="glass-effect text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-800/80 transition-all flex items-center gap-3 border border-slate-700/50 group uppercase tracking-widest">
              Our Stack <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { icon: <Zap />, title: "Rapid Deployment", text: "2x faster delivery cycles" },
            { icon: <Code2 />, title: "Clean Architecture", text: "Enterprise-grade codebase" },
            { icon: <CheckCircle2 />, title: "Guaranteed Success", text: "98% client retention rate" }
          ].map((item, i) => (
            <div key={i} className="glass-effect p-8 rounded-3xl border border-slate-800/50 hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
