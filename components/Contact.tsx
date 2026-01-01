
import React from 'react';
import { Mail, Phone, MapPin, Send, User } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-effect rounded-[40px] overflow-hidden border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-16 bg-gradient-to-br from-cyan-600 to-blue-700">
              <h2 className="text-4xl font-bold text-white mb-6">Let's Forge Your Vision</h2>
              <p className="text-cyan-100 text-lg mb-12">
                Ready to take the next step? Our lead expert is standing by to help you define and build your digital future.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-cyan-100 text-sm">Lead Engineer</div>
                    <div className="text-white font-bold">Venkatasiva Nallamothu</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-cyan-100 text-sm">Email Us</div>
                    <div className="text-white font-bold">nvsiv.c@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-cyan-100 text-sm">Call Us</div>
                    <div className="text-white font-bold">8074746531</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-cyan-100 text-sm">Our Hub</div>
                    <div className="text-white font-bold">Hyderabad, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-16 bg-slate-950">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Project Scope</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors appearance-none">
                    <option>Startup MVP</option>
                    <option>Enterprise Application</option>
                    <option>App Modernization</option>
                    <option>Design Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Tell us about your app idea..."
                  />
                </div>
                <button className="w-full bg-cyan-500 text-slate-950 font-bold py-4 rounded-xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2">
                  Send Proposal <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
