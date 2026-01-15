
import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece após 500px de scroll
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-8 right-8 z-[110] size-14 rounded-2xl glass-card flex items-center justify-center text-primary transition-all duration-500 shadow-2xl ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-20 opacity-0 scale-50 pointer-events-none'
      } hover:bg-primary hover:text-white group hover:shadow-[0_0_30px_rgba(240,112,0,0.5)] active:scale-90 border-primary/20 hover:border-primary border-2`}
    >
      <div className="relative flex flex-col items-center">
        <span className="material-symbols-outlined font-bold transition-transform group-hover:-translate-y-1">
          expand_less
        </span>
        <div className="absolute -bottom-1 w-4 h-[1px] bg-current opacity-0 group-hover:opacity-40 transition-opacity"></div>
      </div>
      
      {/* Decorative corners for cyberpunk feel */}
      <div className="absolute top-1 left-1 size-1 border-t border-l border-primary/40 group-hover:border-white/60"></div>
      <div className="absolute bottom-1 right-1 size-1 border-b border-r border-primary/40 group-hover:border-white/60"></div>
    </button>
  );
};

export default BackToTop;
