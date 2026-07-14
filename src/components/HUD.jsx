import React from 'react';

const HUD = ({ score, hp, gameOver }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      left: '10px',
      color: 'white',
      fontSize: '16px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div>Score: {score}</div>
      <div>HP: {hp}</div>
      {gameOver && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'red',
          fontSize: '48px',
          fontWeight: 'bold'
        }}>
          GAME OVER
        </div>
      )}
    </div>
  );
};

export default HUD;