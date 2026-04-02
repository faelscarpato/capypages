
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LoadingScreen: React.FC = () => {
  const [phase, setPhase] = useState<'DOT' | 'WORDS' | 'LOGO' | 'DONE'>('DOT');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Design', 'Criatividade', 'SEO', 'Analytics'];

  useEffect(() => {
    // Phase 1: Show Dot
    const dotTimer = setTimeout(() => {
      setPhase('WORDS');
    }, 800);

    return () => clearTimeout(dotTimer);
  }, []);

  useEffect(() => {
    if (phase === 'WORDS') {
      if (currentWordIndex < words.length) {
        const wordTimer = setTimeout(() => {
          setCurrentWordIndex(prev => prev + 1);
        }, 1000); // Reduced from 1200ms
        return () => clearTimeout(wordTimer);
      } else {
        setPhase('LOGO');
      }
    }
  }, [phase, currentWordIndex]);

  // Typing animation variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, display: 'none' },
    visible: {
      opacity: 1,
      display: 'inline-block',
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        filter: "blur(10px)",
        transition: { duration: 0.5, ease: "easeOut" }
      }}
      className="fixed inset-0 z-[100] bg-midnight flex items-center justify-center overflow-hidden font-display"
    >
      <div className="relative flex items-center justify-center">
        
        {/* The Orange Dot */}
        <motion.div
          layout
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            x: phase === 'LOGO' ? 140 : 0 // Slide right for the logo phase
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 100, 
            damping: 20,
            x: { duration: 0.8, ease: "easeInOut" }
          }}
          className="w-4 h-4 md:w-6 md:h-6 bg-primary rounded-full shadow-[0_0_20px_rgba(240,112,0,0.6)] z-50"
        />

        {/* Word Loop Phase */}
        <div className="absolute left-full ml-4 whitespace-nowrap">
          <AnimatePresence mode="wait">
            {phase === 'WORDS' && currentWordIndex < words.length && (
              <motion.div
                key={words[currentWordIndex]}
                variants={sentence}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="text-3xl md:text-5xl font-light text-white tracking-tight"
              >
                {words[currentWordIndex].split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Final Logo Phase */}
        <div className="absolute right-full mr-[-130px] whitespace-nowrap">
          <AnimatePresence>
            {phase === 'LOGO' && (
              <motion.div
                variants={sentence}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl font-light text-white tracking-tighter"
              >
                {"Scarpato".split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="crt-overlay absolute inset-0"></div>
        <div className="scanlines absolute inset-0"></div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
