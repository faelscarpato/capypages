
import React from 'react';
import { motion } from 'motion/react';

const Contact: React.FC = () => {
  const contactLinks = [
    { name: 'WhatsApp', url: 'https://wa.me/5519995466902', sub: 'Inicie um Chat', icon: 'chat_bubble', color: 'hover:border-[#25D366]/50 hover:bg-[#25D366]/10', iconColor: 'text-[#25D366]' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rafaelscarpato/', sub: 'Rafael Scarpato', icon: 'diversity_3', color: 'hover:border-[#0077B5]/50 hover:bg-[#0077B5]/10', iconColor: 'text-[#0077B5]' },
    { name: 'GitHub', url: 'https://github.com/faelscarpato', sub: 'Open Source Projects', icon: 'terminal', color: 'hover:border-white/50 hover:bg-white/10', iconColor: 'text-white' },
    { name: 'Instagram', url: 'https://www.instagram.com/rafaelscarpato/', sub: '@rafaelscarpato', icon: 'photo_camera', color: 'hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10', iconColor: 'text-[#E1306C]' }
  ];

  return (
    <section id="contact" className="relative z-20 bg-midnight w-full py-32 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-teal-accent/30 bg-teal-accent/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-accent"></span>
              </span>
              <span className="text-[10px] font-bold text-teal-accent uppercase tracking-widest">Canais de Comunicação</span>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-display font-light text-white tracking-tight">
              Próximo <span className="font-bold text-primary">Uplink?</span>
            </h3>
            
            <p className="text-white/50 text-xl font-body leading-relaxed max-w-lg">
              Pronto para transformar sua visão em uma interface de alta conversão? Utilize nossos canais diretos para uma resposta em até 24h.
            </p>

            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="size-12 rounded-2xl glass-card flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">E-mail Corporativo</p>
                  <p className="text-lg text-white font-medium">scarpatodesigner@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((link, idx) => (
              <motion.a 
                key={link.name} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group flex flex-col justify-between p-8 rounded-3xl glass-card transition-all duration-300 ${link.color}`}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className={`material-symbols-outlined text-3xl ${link.iconColor} group-hover:scale-110 transition-transform`}>{link.icon}</span>
                  <span className="material-symbols-outlined text-white/20 group-hover:text-white transition-colors">arrow_outward</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 font-display">{link.name}</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">{link.sub}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
