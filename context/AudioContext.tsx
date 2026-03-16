import React, { createContext } from 'react';
import { useBackgroundMusic } from '../hooks/useBackgroundMusic';

export const AudioContext = createContext(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  useBackgroundMusic();

  return (
    <AudioContext.Provider value={null}>
      {children}
    </AudioContext.Provider>
  );
}
