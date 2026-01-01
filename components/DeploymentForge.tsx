
import React from 'react';
import { Github, Globe, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export const DeploymentForge: React.FC = () => {
  const steps = [
    {
      icon: <Github className="w-6 h-6" />,
      title: "Commit to GitHub",
      desc: "Push your code to a repository. It's the secure vault for your digital assets."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Link to Vercel/Netlify",
      desc: "Connect your repo to a cloud provider. They handle the heavy lifting for free."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Go Live Instantly",
      desc: "Every commit automatically updates your site. Zero-cost global scaling."
    }
  ];

  return (
    <section id="deployment" className="py-24 relative overflow-hidden bg-slate-900/20 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-500 uppercase mb-4">The Live Protocol</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Deploy & Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow">For Free.</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We don't just build; we launch. Here is how we get your vision from local code to a global URL in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent -translate-y-12" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="glass-effect p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all group relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                0{idx + 1}. {step.title}
                <CheckCircle2 className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-500 group-hover:gap-4 transition-all">
                Learn Protocol <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="px-6 py-3 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-xs font-bold text-cyan-400 animate-pulse">
            Recommended Stack: GitHub + Vercel + Gemini API
          </div>
        </div>
      </div>
    </section>
  );
};
