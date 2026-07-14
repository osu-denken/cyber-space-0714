import React, { useState, useEffect } from 'react';
import { useGameStore } from '../core/useGameStore';

const Player = () => {
  const [position, setPosition] = useState({ x: 400, y: 300 });
  const shoot = useGameStore(state => state.shoot);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const speed = 5;
      switch (e.key) {
        case 'ArrowUp': setPosition(prev => ({ ...prev, y: prev.y - speed })); break;
        case 'ArrowDown': setPosition(prev => ({ ...prev, y: prev.y + speed })); break;
        case 'ArrowLeft': setPosition(prev => ({ ...prev, x: prev.x - speed })); break;
        case 'ArrowRight': setPosition(prev => ({ ...prev, x: prev.x + speed })); break;
        case ' ': shoot(position); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shoot, position]);

  return (
    <div
      className="player"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '20px',
        height: '20px',
        backgroundColor: 'blue',
        borderRadius: '50%'
      }}
    >
      <div style={{ fontSize: '10px', textAlign: 'center' }}>Player</div>
    </div>
  );
};

export default Player;