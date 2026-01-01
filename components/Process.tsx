
import React from 'react';
import { Lightbulb, PencilRuler, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Discovery & Strategy",
    text: "We dive deep into your goals to forge a plan that aligns with your business vision."
  },
  {
    icon: <PencilRuler className="w-6 h-6" />,
    title: "Design & UX",
    text: "Creating pixel-perfect interfaces that provide an unmatched user experience."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Agile Development",
    text: "Rapid, quality-focused coding with regular updates and transparent communication."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch & Support",
    text: "Assisting with store submission and post-launch optimization to ensure long-term success."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">
              The <span className="text-cyan-400">Forge</span> Process
            </h2>
            <p className="text-slate-400 text-lg mb-12">
              Building great apps isn't just about code. It's about a systematic approach to problem-solving and innovation.
            </p>
            
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 relative">
                  {idx !== steps.length - 1 && (
                    <div className="absolute left-[27px] top-14 bottom-[-48px] w-px bg-gradient-to-b from-cyan-500 to-transparent opacity-30" />
                  )}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border border-cyan-500/30 bg-slate-950 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-slate-400">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
              <img 
                src="https://picsum.photos/seed/process/800/600" 
                alt="Our workflow" 
                className="relative z-10 rounded-3xl border border-slate-700 shadow-2xl opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
