
import React from 'react';

const BiosHeader = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="mb-4">
      <div className="text-xl md:text-2xl font-bold mb-2 text-white">NoCoded BIOS v1.04</div>
      <div className="text-gray-400 mb-4">{currentDate} - NoCoded Systems Inc.</div>
    </div>
  );
};

export default BiosHeader;
