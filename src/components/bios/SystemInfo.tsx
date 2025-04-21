
import React from 'react';

interface SystemInfoProps {
  memoryTest: number;
}

const SystemInfo: React.FC<SystemInfoProps> = ({ memoryTest }) => {
  return (
    <div className="mb-6">
      <div className="mb-2">CPU: NoCoded Neural Processing Unit v3.5</div>
      <div className="mb-2">AI-CORE: LOADED</div>
      <div className="mb-4">RAM: {memoryTest > 0 ? `${memoryTest}K OK` : "Testing..."}</div>
    </div>
  );
};

export default SystemInfo;
