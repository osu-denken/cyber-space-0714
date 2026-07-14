import React from 'react';
import { GameCanvas } from './components/GameCanvas';
import HUD from './components/HUD';
import Enemy from './components/Enemy';

function App() {
  return (
    <div className="App">
        <GameCanvas />
        <Enemy />
        <HUD />
     </div>
  );
}

export default App;