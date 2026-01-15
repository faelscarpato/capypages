
import React, { useState, useEffect } from 'react';

const Works: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 'capyuniverse',
      title: 'CapyUniverse',
      category: 'IA & Automação',
      description: 'Plataforma de agentes inteligentes para inovação digital.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      size: 'md:col-span-2 md:row-span-2',
      color: 'text-primary',
      icon: 'psychology'
    },
    {
      id: 'capyuni',
      title: 'CapyUNI Codium',
      category: 'Educação & Dev',
      description: 'Ferramentas e estudos de IA para desenvolvedores.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
      size: 'lg:row-span-2',
      color: 'text-teal-accent',
      icon: 'terminal'
    },
    {
      id: 'capyide',
      title: 'CapyIDE',
      category: 'Produtividade',
      description: 'Ambiente visual para teste e organização de prompts.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
      size: '',
      color: 'text-blue-400',
      icon: 'data_object'
    },
    {
      id: 'cardapio',
      title: 'Cardápio Digital',
      category: 'E-commerce',
      description: 'Landing page com pedidos automáticos via WhatsApp.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
      size: '',
      color: 'text-green-400',
      icon: 'payments'
    }
  ];

  return (
    <section id="works" className="relative z-20 bg-midnight w-full py-32 px-6">
      <div className="max-w-[1440px] mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
        <div className="reveal reveal-up space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Exposição Visual</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-light tracking-tight text-white leading-none">
            Galeria <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Visual</span>
          </h2>
          <p className="text-white/50 text-lg max-w-md font-body">
            Fronteira digital entre estética cyberpunk e performance orientada a resultados.
          </p>
        </div>
        
        <div className="reveal reveal-right stagger-2 flex gap-3 flex-wrap">
          {['Todos', 'IA Tools', 'Web Apps', 'Branding'].map((filter) => (
            <button key={filter} className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest transition-all backdrop-blur-sm active:scale-95">
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px] grid-flow-dense">
        {projects.map((project, idx) => (
          <div key={project.id} className={`reveal reveal-up stagger-${(idx % 3) + 1} group relative rounded-3xl overflow-hidden glass-card cursor-pointer border-white/5 hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-primary/5 ${project.size}`}>
            {/* Parallax Layer - Constrained */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <div 
                className="absolute w-full h-[120%] top-[-10%] left-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ 
                  backgroundImage: `url('${project.image}')`,
                  // Fixed parallax: ensure it doesn't move too much. 
                  // Uses a modulo or clamp logic conceptually to stay within the card.
                  transform: `translateY(${(offsetY * 0.03) % 20}px)`
                }}
              ></div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-700 z-10"></div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px] z-20">
              <div className="space-y-2 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2 mb-2">
                   <span className={`material-symbols-outlined text-sm ${project.color}`}>{project.icon}</span>
                   <span className={`block text-[10px] font-bold uppercase tracking-widest ${project.color}`}>{project.category}</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-white tracking-tight">{project.title}</h3>
                <p className="text-white/60 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-body">
                  {project.description}
                </p>
                
                <div className="pt-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="h-12 w-12 rounded-2xl glass-card text-white flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <span className="material-symbols-outlined font-bold">arrow_forward</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Explorar Projeto</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="reveal reveal-up stagger-3 group relative rounded-3xl overflow-hidden glass-card flex flex-col items-center justify-center p-12 text-center border-dashed border-2 border-white/10 hover:border-primary/50 transition-all active:scale-95">
          <span className="material-symbols-outlined text-5xl text-white/10 mb-6 group-hover:text-primary transition-all duration-500 group-hover:scale-110">rocket_launch</span>
          <h4 className="text-xl font-bold text-white mb-2 font-display">Seu Projeto Aqui?</h4>
          <p className="text-white/40 text-sm mb-8 font-body">Inicie sua decolagem digital com quem entende de performance.</p>
          <a href="#contact" className="px-8 py-3 rounded-full bg-primary hover:bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(240,112,0,0.2)]">
            Solicitar Briefing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
