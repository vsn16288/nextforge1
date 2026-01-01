
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { SolutionExpert } from './components/SolutionExpert';
import { Footer } from './components/Footer';

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
