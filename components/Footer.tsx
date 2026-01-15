
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-30 w-full bg-[#03070d] border-t border-white/5 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 text-primary flex items-center justify-center rounded-xl glass-card">
                <span className="material-symbols-outlined text-2xl font-bold">terminal</span>
              </div>
              <h2 className="text-white text-2xl font-bold tracking-tight">Scarpato</h2>
            </div>
            <p className="text-white/40 text-sm font-body leading-relaxed">
              Design & Development Studio focado em performance e estética cyberpunk. Elevando marcas através de tecnologia moderna.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] opacity-40">Nav</h4>
              <ul className="space-y-4">
                {['Home', 'Works', 'Process', 'Contact'].map(link => (
                  <li key={link}>
                    <a className="text-white/60 hover:text-primary text-sm font-medium transition-all block hover:translate-x-1" href={`#${link.toLowerCase()}`}>{link === 'Works' ? 'Portfólio' : link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] opacity-40">Follow</h4>
              <ul className="space-y-4">
                {[
                  { n: 'Instagram', l: 'https://www.instagram.com/rafaelscarpato/' },
                  { n: 'LinkedIn', l: 'https://www.linkedin.com/in/rafaelscarpato/' },
                  { n: 'GitHub', l: 'https://github.com/faelscarpato' }
                ].map(social => (
                  <li key={social.n}>
                    <a className="text-white/60 hover:text-white text-sm font-medium transition-all block hover:translate-x-1" href={social.l} target="_blank">{social.n}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em]">
          <div className="text-white/20">
            © 2024 Scarpato Visual Studio. Build v.1.0.5-release
          </div>
          <div className="flex items-center gap-6">
            <a href="https://capyscar.pages.dev" className="text-white/40 hover:text-primary transition-colors">Main Portfolio</a>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-none bg-green-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-500 font-bold">Uplink Active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
