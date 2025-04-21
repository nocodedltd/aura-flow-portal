import React, { useState, useEffect, useCallback } from 'react';

const PRIMARY_COLOR = "#9b87f5";

interface BiosLoaderProps {
  onFinish: () => void;
}

const BiosLoader: React.FC<BiosLoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState('');
  const [memoryTest, setMemoryTest] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [ready, setReady] = useState(false);
  const [finished, setFinished] = useState(false);

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
      }
    }, 350);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(bootInterval);
      if (memoryInterval) clearInterval(memoryInterval);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const handleKey = (event: KeyboardEvent) => {
      if (!finished) {
        setFinished(true);
        setTimeout(onFinish, 300);
      }
    };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("click", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("click", handleKey);
    };
  }, [ready, finished]);

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black font-mono text-sm md:text-base transition-colors duration-700 min-h-screen overflow-auto"
      style={{ color: PRIMARY_COLOR }}
    >
      <div className="w-full max-w-xl mx-auto text-center">
        <div className="mb-4">
          <div className="text-xl md:text-2xl font-bold mb-2 text-white">NoCoded BIOS v1.04</div>
          <div className="text-gray-400 mb-4">{currentDate} - NoCoded Systems Inc.</div>
        </div>
        <div className="mb-6">
          <div className="mb-2">CPU: NoCoded Neural Processing Unit v3.5</div>
          <div className="mb-2">AI-CORE: LOADED</div>
          <div className="mb-4">RAM: {memoryTest > 0 ? `${memoryTest}K OK` : "Testing..."}</div>
        </div>
        <div className="mb-6">
          <div className="text-white mb-2">
            {currentTask}
            {currentTask === "Performing memory test" && memoryTest > 0 ? ` (${memoryTest}K)` : ""}
            {showCursor ? "_" : " "}
          </div>
          <div className="w-full bg-gray-800 h-2 mb-4">
            <div
              style={{
                width: `${progress}%`,
                background: PRIMARY_COLOR,
                height: "100%",
                transition: "width 0.3s"
              }}
            />
          </div>
          {progress >= 80 && (
            <div className="text-xs mb-3">
              <div style={{ color: PRIMARY_COLOR }}>
                AI Agent Status: {progress < 100 ? "Initializing..." : "READY"}
              </div>
              <div style={{ color: PRIMARY_COLOR }}>
                Automation Systems: {progress < 90 ? "Booting..." : "ONLINE"}
              </div>
            </div>
          )}
          {progress === 100 && (
            <div className="text-white mt-4 animate-pulse">
              Press any key to continue...
            </div>
          )}
        </div>
        <div className="text-xs text-gray-500 mt-8">
          <div>Mission: Help our clients save and scale</div>
          <div className="mt-1">Copyright (C) 2025 NoCoded Systems</div>
        </div>
      </div>
    </div>
  );
};

export default BiosLoader;
