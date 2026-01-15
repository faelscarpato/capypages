
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      };

      const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersect, observerOptions);
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-midnight overflow-x-hidden">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          {/* Seção 1: Hero */}
          <Hero />
          
          {/* Seção 2: Processo (Metodologia antecede os resultados) */}
          <Process />
          
          {/* Seção 3: Works (Galeria Visual conforme pedido) */}
          <Works />
          
          {/* Seção 4: Contato */}
          <Contact />
          
          {/* Back to Top Button */}
          <BackToTop />
          
          <Footer />
          
          {/* Global HUD elements */}
          <div className="fixed inset-0 pointer-events-none z-[100]">
            <div className="crt-overlay opacity-[0.05] absolute inset-0"></div>
            <div className="scanlines opacity-[0.03] absolute inset-0"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
