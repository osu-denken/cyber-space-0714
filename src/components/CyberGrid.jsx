// filepath: src/components/CyberGrid.jsx
import React from 'react';

const CyberGrid = () => {
  return (
    <div className="cyber-grid" style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%)',
      backgroundSize: '40px 40px',
      pointerEvents: 'none'
    }}></div>
  );
};

export default CyberGrid;