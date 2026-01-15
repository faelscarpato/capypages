
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Descoberta',
      desc: 'Imersão total no seu universo para entender metas e público-alvo.',
      icon: 'search_insights',
      color: 'text-teal-accent'
    },
    {
      number: '02',
      title: 'Design',
      desc: 'Prototipagem visual focada em estética premium e UX.',
      icon: 'architecture',
      color: 'text-primary'
    },
    {
      number: '03',
      title: 'Build',
      desc: 'Desenvolvimento clean code, performance e animações fluidas.',
      icon: 'code_blocks',
      color: 'text-teal-accent'
    },
    {
      number: '04',
      title: 'Entrega',
      desc: 'Lançamento, testes finais e suporte para sucesso contínuo.',
      icon: 'speed',
      color: 'text-primary'
    }
  ];

  return (
    <section id="process" className="relative z-20 bg-midnight w-full py-32 px-6 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-primary/5 blur-[120px] rounded-full mix-blend-screen opacity-20"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="reveal reveal-up text-center mb-20">
          <h2 className="text-teal-accent text-xs font-bold uppercase tracking-[0.4em] mb-4">Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Metodologia Digital</h3>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Um processo ágil e modular projetado para transformar conceitos brutos em interfaces de alto desempenho.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={step.number} className={`reveal reveal-up stagger-${idx + 1} relative flex flex-col items-center text-center group`}>
              <div className="relative z-10 w-24 h-24 rounded-2xl glass-card flex items-center justify-center mb-6 group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <span className={`material-symbols-outlined text-4xl ${step.color} transition-transform group-hover:scale-110 duration-300`}>
                  {step.icon}
                </span>
                <div className="absolute -top-3 -right-3 text-[10px] font-mono text-white/20 font-bold">{step.number}</div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-display">{step.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed px-4 font-body">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
