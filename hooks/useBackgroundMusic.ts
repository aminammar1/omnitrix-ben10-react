import { useEffect } from 'react';
import { useAudioPlayer } from 'expo-audio';
import { useSettingsStore } from '../zustand/useSettingsStore';

export function useBackgroundMusic() {
  const player = useAudioPlayer(require('../assets/sounds/theme.mp3'));
  const musicEnabled = useSettingsStore((s) => s.musicEnabled);

  useEffect(() => {
    if (!player) return;
    player.loop = true;
    player.volume = 0.4;

    if (musicEnabled) {
      player.play();
    } else {
      player.pause();
    }
  }, [player, musicEnabled]);

  return player;
}
