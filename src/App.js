  import React from 'react';
  import GameCanvas from './components/GameCanvas';
  import HUD from './components/HUD';
  import useGameStore from './stores/gameStore';

  function App() {
    const { score } = useGameStore();
    return (
      <div className="App">
        <GameCanvas />
        <HUD />
        <div>Score: {score}</div>
      </div>
    );
  }

  export default App;