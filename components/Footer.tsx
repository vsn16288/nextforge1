
import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="mb-6 flex justify-start">
              <Logo variant="nav" />
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We are an elite digital agency focused on building high-performance mobile ecosystems. Every line of code is forged with excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"><Github className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Solutions</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">iOS Architecture</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Android Ecosystems</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cross-Platform Sync</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Implementation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Laboratory</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">Our Protocol</a></li>
              <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Success Logic</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Direct Uplink</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-xs leading-loose">Subscribe to receive technical insights and development updates directly from the forge.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Secure Email" 
                className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500 flex-1 transition-colors"
              />
              <button className="bg-cyan-500 text-slate-950 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em]">
          <p>© {new Date().getFullYear()} NEXTFORGE PROTOCOL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
