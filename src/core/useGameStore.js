// filepath: src/core/useGameStore.js
import { create } from 'zustand';

const useGameStore = create((set) => ({
  player: { position: { x: 0, y: 0, z: 0 }, health: 100 },
  enemies: [],
  bullets: [],
  addEnemy: (enemy) => set((state) => ({ enemies: [...state.enemies, enemy] })),
  addBullet: (bullet) => set((state) => ({ bullets: [...state.bullets, bullet] })),
  reset: () => set({ player: { position: { x: 0, y: 0, z: 0 }, health: 100 }, enemies: [], bullets: [] })
}));

export default useGameStore;