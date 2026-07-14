import React from 'react';
import { useGameStore } from '../core/useGameStore';

const Bullets = () => {
  const bullets = useGameStore(state => state.bullets);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      {bullets.map((bullet, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: bullet.x,
            top: bullet.y,
            width: '5px',
            height: '10px',
            backgroundColor: 'red',
            borderRadius: '2px'
          }}
        />
      ))}
    </div>
  );
};

export default Bullets;