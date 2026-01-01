
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { Process } from './components/Process.tsx';
import { Stats } from './components/Stats.tsx';
import { Projects } from './components/Projects.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Contact } from './components/Contact.tsx';
import { SolutionExpert } from './components/SolutionExpert.tsx';
import { Footer } from './components/Footer.tsx';
import { DeploymentForge } from './components/DeploymentForge.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative selection:bg-cyan-500 selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 bg-grid z-0 opacity-20 pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />

      <Navbar isScrolled={isScrolled} />
      
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <DeploymentForge />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating AI Consultant */}
      <SolutionExpert />
    </div>
  );
};

export default App;
