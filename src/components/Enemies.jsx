import React, { useState, useEffect } from 'react';

const Enemies = ({ enemyCount }) => {
  const [enemies, setEnemies] = useState([]);

  useEffect(() => {
    const createEnemies = () => {
      const newEnemies = [];
      for (let i = 0; i < enemyCount; i++) {
        newEnemies.push({
          id: i,
          x: Math.random() * 800,
          y: Math.random() * 600,
          speed: 2 + Math.random() * 3
        });
      }
      setEnemies(newEnemies);
    };

    createEnemies();
    const interval = setInterval(createEnemies, 5000);

    return () => clearInterval(interval);
  }, [enemyCount]);

  useEffect(() => {
    const moveEnemies = () => {
      setEnemies(prevEnemies =>
        prevEnemies.map(enemy => ({
          ...enemy,
          x: (enemy.x + enemy.speed) % 800
        }))
      );
    };

    const interval = setInterval(moveEnemies, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {enemies.map(enemy => (
        <div
          key={enemy.id}
          style={{
            position: 'absolute',
            left: enemy.x,
            top: enemy.y,
            width: '20px',
            height: '20px',
            backgroundColor: 'red',
            borderRadius: '50%'
          }}
        />
      ))}
    </div>
  );
};

export default Enemies;