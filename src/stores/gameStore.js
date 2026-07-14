import { create } from 'zustand';

const useGameStore = create((set) => ({
  score: 0,
  lives: 3,
  bullets: [],
  enemies: [],
  gameState: 'START',
  startGame: () => set({ gameState: 'PLAYING' }),
  addScore: (points) => set(state => ({ score: state.score + points })),
  loseLife: () => set(state => ({ lives: state.lives - 1 })),
  shoot: (bullet) => set(state => ({ bullets: [...state.bullets, bullet] })),
  updatePositions: (newBullets, newEnemies) => set({ bullets: newBullets, enemies: newEnemies }),
}));

export default useGameStore;