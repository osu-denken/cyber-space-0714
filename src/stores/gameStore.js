import { create } from 'zustand';

const useGameStore = create((set) => ({
score: 0,
playerPosition: { x: 0, y: 0 },
enemies: [],
setScore: (newScore) => set({ score: newScore }),
setPlayerPosition: (pos) => set({ playerPosition: pos }),
}));

export default useGameStore;