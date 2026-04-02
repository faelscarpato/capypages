
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
      className="fixed inset-0 z-[100] bg-midnight flex items-center justify-center overflow-hidden font-display px-4"
    >
      <div className="relative flex items-center justify-center w-full max-w-full">
        <div className="flex items-center gap-3 md:gap-6">
          {/* Final Logo Phase (Left side of dot) */}
          <AnimatePresence>
            {phase === 'LOGO' && (
              <motion.div
                variants={sentence}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-7xl font-light text-white tracking-tighter"
              >
                {"Scarpato".split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* The Orange Dot */}
          <motion.div
            layout
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-primary rounded-full shadow-[0_0_20px_rgba(240,112,0,0.6)] z-50"
          />

          {/* Word Loop Phase (Right side of dot) */}
          <div className="min-w-[120px] sm:min-w-[200px] md:min-w-[300px]">
            <AnimatePresence mode="wait">
              {phase === 'WORDS' && currentWordIndex < words.length && (
                <motion.div
                  key={words[currentWordIndex]}
                  variants={sentence}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="text-2xl sm:text-3xl md:text-5xl font-light text-white tracking-tight"
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
