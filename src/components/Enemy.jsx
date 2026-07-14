import React from 'react';
import { useGameStore } from '../core/useGameStore';

const Enemy = () => {
  const enemies = useGameStore(state => state.enemies);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      {enemies.map((enemy, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: enemy.x,
            top: enemy.y,
            width: '20px',
            height: '20px',
            backgroundColor: 'green',
            borderRadius: '50%'
          }}
        />
      ))}
    </div>
  );
};

export default Enemy;