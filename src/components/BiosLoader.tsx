
import React, { useState, useEffect } from 'react';
import BiosHeader from './bios/BiosHeader';
import SystemInfo from './bios/SystemInfo';
import LoadingStatus from './bios/LoadingStatus';
import BiosFooter from './bios/BiosFooter';
import { AnimatePresence, motion } from 'framer-motion';

interface BiosLoaderProps {
  onFinish: () => void;
}

const BiosLoader: React.FC<BiosLoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState('');
  const [memoryTest, setMemoryTest] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [ready, setReady] = useState(false);

  const tasks = [
    { task: "Initializing system...", duration: 200 },
    { task: "Performing memory test", duration: 500 },
    { task: "Detecting AI modules", duration: 300 },
    { task: "Loading NoCoded's AI Agent", duration: 400 },
    { task: "Calibrating automation systems", duration: 300 },
    { task: "Starting NoCoded Portal", duration: 400 }
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    let currentIndex = 0;
    let totalDuration = 0;
    let memoryInterval: any = null;

    const bootInterval = setInterval(() => {
      if (currentIndex < tasks.length) {
        setCurrentTask(tasks[currentIndex].task);

        if (currentIndex === 1) {
          let memCount = 0;
          memoryInterval = setInterval(() => {
            memCount += 1024;
            setMemoryTest(memCount);
            if (memCount >= 16384) {
              clearInterval(memoryInterval);
            }
          }, 100);
        }

        totalDuration += tasks[currentIndex].duration;
        setProgress(Math.min(100, Math.floor((totalDuration / 2100) * 100)));
        currentIndex++;
      } else {
        clearInterval(bootInterval);
        setReady(true);
        onFinish(); // Immediately call onFinish when loading is complete
      }
    }, 350);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(bootInterval);
      if (memoryInterval) clearInterval(memoryInterval);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black font-mono text-sm md:text-base transition-colors duration-700 min-h-screen overflow-hidden" 
        style={{ color: "#9b87f5" }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-full max-w-xl mx-auto text-center relative">
          <BiosHeader />
          <SystemInfo memoryTest={memoryTest} />
          <LoadingStatus
            currentTask={currentTask}
            progress={progress}
            memoryTest={memoryTest}
            showCursor={showCursor}
          />
          <BiosFooter />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BiosLoader;
