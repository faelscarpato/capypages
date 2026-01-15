
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background with Parallax and Neural Flow Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-midnight/90 z-20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/95 via-transparent to-midnight z-20"></div>
        
        {/* Animated Data Flow Layer (Neural Network simulation) */}
        <div className="absolute inset-0 z-10 overflow-hidden opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-primary/40 rounded-full blur-[1px]"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 80 + 20 + 'px',
                left: Math.random() * 100 + '%',
                top: '-10%',
                animation: `data-flow ${Math.random() * 5 + 3}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>

        {/* Animated Grid Layer */}
        <div className="absolute inset-0 z-10 opacity-10" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
               backgroundSize: '50px 50px',
               maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
             }}>
          <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-transparent via-primary/5 to-transparent h-full w-full"></div>
        </div>

        {/* Parallax Image Layer */}
        <div 
          className="w-full h-[150%] bg-cover bg-center opacity-20 absolute top-[-25%] pointer-events-none transition-transform duration-100 ease-out"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop')",
            filter: 'contrast(130%) brightness(70%) hue-rotate(-15deg)',
            transform: `translateY(${offsetY * 0.15}px)`
          }}
        ></div>
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-teal-accent/5 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-4 flex flex-col items-center text-center pb-32">
        <div className="reveal reveal-up mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.2em]">Sistemas Online & Operacionais</span>
        </div>

        <h1 className="reveal reveal-up stagger-1 text-7xl md:text-9xl font-light tracking-tighter text-white mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] font-display">
          Scarpato<span className="font-bold text-primary">.</span>
        </h1>
        
        <p className="reveal reveal-up stagger-2 text-lg md:text-2xl font-normal text-white/60 mb-12 max-w-2xl font-body leading-relaxed">
          Unindo <span className="text-white font-medium">desenvolvimento front-end</span>, design gráfico e fotografia para construir experiências digitais que convertem.
        </p>

        <div className="reveal reveal-up stagger-3 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <a href="#works" className="group relative flex w-full sm:w-auto min-w-[220px] items-center justify-center rounded-full h-16 px-8 bg-primary hover:bg-orange-500 text-white text-base font-bold transition-all shadow-[0_0_25px_rgba(240,112,0,0.4)] active:scale-95">
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-sm">
              Ver Portfólio
              <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
            </span>
          </a>
          
          <a href="#contact" className="group flex w-full sm:w-auto min-w-[220px] items-center justify-center rounded-full h-16 px-8 bg-transparent border border-white/20 hover:border-white/60 hover:bg-white/5 text-white text-base font-bold transition-all uppercase tracking-widest text-sm active:scale-95">
            Iniciar Contato
          </a>
        </div>
      </div>

      {/* Simplified Status indicator */}
      <div className="reveal reveal-up stagger-4 absolute bottom-12 left-0 w-full flex justify-center z-40">
        <div className="flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] text-white uppercase tracking-[0.6em] font-mono font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
        </div>
      </div>

      <style>{`
        @keyframes data-flow {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
      `}</style>
    </main>
  );
};

export default Hero;
