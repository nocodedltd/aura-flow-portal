
import React from 'react';

interface LoadingStatusProps {
  currentTask: string;
  progress: number;
  memoryTest: number;
  showCursor: boolean;
}

const LoadingStatus: React.FC<LoadingStatusProps> = ({ currentTask, progress, memoryTest, showCursor }) => {
  return (
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
            background: "#9b87f5",
            height: "100%",
            transition: "width 0.3s"
          }}
        />
      </div>
      {progress >= 80 && (
        <div className="text-xs mb-3">
          <div className="text-[#9b87f5]">
            AI Agent Status: {progress < 100 ? "Initializing..." : "READY"}
          </div>
          <div className="text-[#9b87f5]">
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
  );
};

export default LoadingStatus;
