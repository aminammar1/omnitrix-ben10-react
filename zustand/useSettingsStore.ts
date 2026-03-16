import { create } from 'zustand';

interface SettingsState {
  musicEnabled: boolean;
  sfxEnabled: boolean;
  hapticsEnabled: boolean;
  toggleMusic: () => void;
  toggleSfx: () => void;
  toggleHaptics: () => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  musicEnabled: true,
  sfxEnabled: true,
  hapticsEnabled: true,
  toggleMusic: () => set((s) => ({ musicEnabled: !s.musicEnabled })),
  toggleSfx: () => set((s) => ({ sfxEnabled: !s.sfxEnabled })),
  toggleHaptics: () => set((s) => ({ hapticsEnabled: !s.hapticsEnabled })),
}));
