
import React from 'react';

export const Stats: React.FC = () => {
  return (
    <div className="py-12 border-y border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-extrabold text-white mb-1">500+</div>
            <div className="text-sm text-cyan-400 font-bold uppercase tracking-wider">Apps Forged</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-white mb-1">10M+</div>
            <div className="text-sm text-cyan-400 font-bold uppercase tracking-wider">Downloads</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-white mb-1">98%</div>
            <div className="text-sm text-cyan-400 font-bold uppercase tracking-wider">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-white mb-1">24/7</div>
            <div className="text-sm text-cyan-400 font-bold uppercase tracking-wider">Live Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};
