import React from 'react';
import GameCanvas from './components/GameCanvas';
import HUD from './components/HUD';
import Enemy from './components/Enemy';
import useGameStore from './stores/gameStore';

function App() {
  const { score } = useGameStore();
  return (
    <div className="App">
      <GameCanvas />
      <Enemy />
      <HUD />
      <div>Score: {score}</div>
    </div>
  );
}

export default App;