import { create } from 'zustand';
import { ALIENS, AlienInfo } from '../data/aliens';

interface OmnitrixState {
  active: boolean;
  alienIndex: number;
  currentAlien: AlienInfo;
  activate: () => void;
  deactivate: () => void;
  toggle: () => void;
  nextAlien: () => void;
  prevAlien: () => void;
}

export const useOmnitrixStore = create<OmnitrixState>((set) => ({
  active: false,
  alienIndex: 0,
  currentAlien: ALIENS[0],
  activate: () => set({ active: true }),
  deactivate: () => set({ active: false }),
  toggle: () =>
    set((s) => ({ active: !s.active })),
  nextAlien: () =>
    set((s) => {
      const next = (s.alienIndex + 1) % ALIENS.length;
      return { alienIndex: next, currentAlien: ALIENS[next] };
    }),
  prevAlien: () =>
    set((s) => {
      const prev = (s.alienIndex - 1 + ALIENS.length) % ALIENS.length;
      return { alienIndex: prev, currentAlien: ALIENS[prev] };
    }),
}));
