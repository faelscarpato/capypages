
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-midnight/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="size-9 bg-primary/10 text-primary flex items-center justify-center rounded-lg border border-primary/20 transition-all group-hover:scale-110">
            <span className="material-symbols-outlined text-2xl font-bold">terminal</span>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">Scarpato<span className="text-primary">.</span></h2>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-10">
            <a className="text-white/60 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-y-[-1px]" href="#home">Home</a>
            <a className="text-white/60 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-y-[-1px]" href="#process">Workflow</a>
            <a className="text-white/60 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-y-[-1px]" href="#works">Portfólio</a>
            <a className="text-white/60 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-y-[-1px]" href="#contact">Contact</a>
          </div>
          <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center justify-center rounded-full h-11 px-7 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest transition-all backdrop-blur-md active:scale-95"
          >
            Hire Studio
          </button>
        </div>

        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors z-[70]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-midnight flex flex-col h-screen md:hidden animate-in fade-in duration-300">
          <div className="flex-1 flex flex-col items-center justify-center gap-12 px-10">
            <nav className="flex flex-col items-center gap-10">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Workflow', id: 'process' },
                { name: 'Portfólio', id: 'works' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-display font-medium text-white/30 hover:text-white transition-all hover:scale-105 active:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="p-12 border-t border-white/5 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[10px] font-mono font-bold text-white/50 tracking-[0.3em] uppercase">Sistemas Online</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
