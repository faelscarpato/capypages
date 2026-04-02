
import React, { useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Subtle parallax: move background image at 5% of scroll speed
  const y = useTransform(scrollY, [0, 1000], [0, 50]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Generate data flow particles with useMemo to prevent re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      width: Math.random() * 2 + 1,
      height: Math.random() * 100 + 40,
      left: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
      drift: Math.random() * 40 - 20 // Horizontal drift
    }));
  }, []);

  return (
    <main id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background with Parallax and Neural Flow Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-midnight/90 z-20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/95 via-transparent to-midnight z-20"></div>
        
        {/* Animated Data Flow Layer (Neural Network simulation) */}
        <div className="absolute inset-0 z-10 overflow-hidden opacity-40">
          {particles.map((p) => (
            <motion.div 
              key={p.id}
              className="absolute bg-primary/30 rounded-full blur-[1px]"
              initial={{ top: '-20%', opacity: 0, x: 0 }}
              animate={{ 
                top: '120%', 
                opacity: [0, p.opacity, p.opacity, 0],
                x: p.drift
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear"
              }}
              style={{
                width: p.width + 'px',
                height: p.height + 'px',
                left: p.left + '%',
                mixBlendMode: 'screen'
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
        <motion.div 
          className="w-full h-[120%] bg-cover bg-center opacity-25 absolute top-[-10%] pointer-events-none"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop')",
            filter: 'contrast(130%) brightness(60%) hue-rotate(-10deg) saturate(120%)',
            y: smoothY
          }}
        ></motion.div>
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-teal-accent/5 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-4 flex flex-col items-center text-center pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="reveal reveal-up mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.2em]">Sistemas Online & Operacionais</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="reveal reveal-up stagger-1 text-7xl md:text-9xl font-light tracking-tighter text-white mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] font-display"
        >
          Scarpato<motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 1.2 }}
            className="font-bold text-primary"
          >.</motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="reveal reveal-up stagger-2 text-lg md:text-2xl font-normal text-white/60 mb-12 max-w-2xl font-body leading-relaxed"
        >
          Unindo <span className="text-white font-medium">desenvolvimento front-end</span>, design gráfico e fotografia para construir experiências digitais que convertem.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="reveal reveal-up stagger-3 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <a href="#works" className="group relative flex w-full sm:w-auto min-w-[220px] items-center justify-center rounded-full h-16 px-8 bg-primary hover:bg-orange-500 text-white text-base font-bold transition-all shadow-[0_0_25px_rgba(240,112,0,0.4)] active:scale-95">
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-sm">
              Ver Portfólio
              <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
            </span>
          </a>
          
          <a href="#contact" className="group flex w-full sm:w-auto min-w-[220px] items-center justify-center rounded-full h-16 px-8 bg-transparent border border-white/20 hover:border-white/60 hover:bg-white/5 text-white text-base font-bold transition-all uppercase tracking-widest text-sm active:scale-95">
            Iniciar Contato
          </a>
        </motion.div>
      </div>

      {/* Simplified Status indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="reveal reveal-up stagger-4 absolute bottom-12 left-0 w-full flex justify-center z-40"
      >
        <div className="flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] text-white uppercase tracking-[0.6em] font-mono font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;
