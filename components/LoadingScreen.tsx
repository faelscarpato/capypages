
import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const bootLogs = [
    "INITIALIZING SCARPATO CORE...",
    "HANDSHAKE PROTOCOL: SECURE",
    "DECRYPTING ASSETS: 2048-BIT",
    "LOAD_MODULE: NEURAL_ENGINE [OK]",
    "LOAD_MODULE: VISUAL_RENDERER [OK]",
    "ESTABLISHING SAT-LINK: UPLINK_STABLE",
    "BYPASSING FIREWALL: GRANTED",
    "READY TO LAUNCH..."
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLogIndex]]);
        setStep(prev => Math.min(prev + 1, 4));
        currentLogIndex++;
      } else {
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#010009] flex items-center justify-center cursor-wait overflow-hidden font-mono">
      {/* Visual Glitch Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none crt-overlay opacity-50"></div>
      <div className="absolute inset-0 z-10 pointer-events-none animate-monitor-flicker bg-white/5 mix-blend-overlay opacity-10"></div>
      
      <div className="relative z-20 w-[90%] max-w-xl">
        <div className="bg-[#050A14]/90 border border-primary/30 p-6 md:p-8 rounded-sm shadow-[0_0_50px_rgba(240,112,0,0.1)] animate-monitor-flicker">
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-8 border-b border-primary/20 pb-4">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[10px] text-primary/80 uppercase tracking-[0.2em] font-bold">Terminal Session: S-042</span>
            </div>
            <span className="text-[9px] text-white/20 uppercase tracking-widest">Protocol: V.1.0.5</span>
          </div>

          {/* Log Stream */}
          <div className="space-y-1 mb-10 min-h-[160px] overflow-hidden">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-4 text-[11px] md:text-xs">
                <span className="text-white/20">[{new Date().toLocaleTimeString('en-GB', { hour12: false })}]</span>
                <span className={`${i === logs.length - 1 ? 'text-primary animate-pulse' : 'text-white/60'}`}>
                  {i === logs.length - 1 ? '> ' : '  '}{log}
                </span>
              </div>
            ))}
          </div>

          {/* Progress Section */}
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Sync Status</span>
                <span className="text-sm text-primary font-bold">
                  {logs.length === bootLogs.length ? 'SYSTEM READY' : 'ESTABLISHING...'}
                </span>
              </div>
              <span className="text-2xl font-bold text-primary tabular-nums">
                {Math.floor((logs.length / bootLogs.length) * 100)}%
              </span>
            </div>
            
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary relative transition-all duration-300 ease-out shadow-[0_0_10px_rgba(240,112,0,0.5)]"
                style={{ width: `${(logs.length / bootLogs.length) * 100}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-4 flex justify-between px-2 text-[8px] text-white/20 uppercase tracking-[0.3em]">
          <span>© Scarpato Studio</span>
          <span>Kernel Build: 4.8.1-RT-AMBER</span>
        </div>
      </div>
      
      {/* Random Data Glitch background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none text-[8px] break-all leading-none overflow-hidden text-white/50">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="mb-2">
            {Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
