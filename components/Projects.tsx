
import React from 'react';
import { ExternalLink, Smartphone, Server, ShieldCheck, Zap } from 'lucide-react';

const projects = [
  {
    title: "Quantum Pay",
    type: "Fintech Solution",
    scope: "Enterprise",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    tags: ["Mobile Banking", "Blockchain", "High Security"]
  },
  {
    title: "EcoDash",
    type: "IoT Ecosystem",
    scope: "Mid-Size",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    tags: ["Real-time Data", "Sustainability", "Cross-Platform"]
  },
  {
    title: "VitalPulse",
    type: "Healthcare App",
    scope: "Startup MVP",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Telemedicine", "AI Diagnostics", "iOS Native"]
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-500 uppercase mb-4">The Portfolio</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              Small Ideas.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Big Impact.</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-md text-lg leading-relaxed">
            From agile startup MVPs to complex enterprise ecosystems, we forge digital tools that drive massive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 transition-all duration-700 hover:border-cyan-500/50"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1 opacity-60 group-hover:opacity-100"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black uppercase tracking-widest text-cyan-400">
                    {project.scope}
                  </span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    {project.type}
                  </span>
                </div>

                <h4 className="text-3xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">#{tag}</span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-cyan-400 transition-colors">
                  View Protocol <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Hover highlight border line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          ))}
        </div>

        {/* Industry Benchmarks */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-800/50">
           <div className="flex flex-col items-center gap-4 group">
              <Smartphone className="w-8 h-8 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mobile First</span>
           </div>
           <div className="flex flex-col items-center gap-4 group">
              <Server className="w-8 h-8 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Cloud Native</span>
           </div>
           <div className="flex flex-col items-center gap-4 group">
              <ShieldCheck className="w-8 h-8 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Zero Trust</span>
           </div>
           <div className="flex flex-col items-center gap-4 group">
              <Zap className="w-8 h-8 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Peak Performance</span>
           </div>
        </div>
      </div>
    </section>
  );
};
