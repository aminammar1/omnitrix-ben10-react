import { useCallback } from 'react';
import { useAudioPlayer } from 'expo-audio';

export function useOmnitrixSounds() {
  const activatePlayer = useAudioPlayer(require('../assets/sounds/activate.wav'));
  const deactivatePlayer = useAudioPlayer(require('../assets/sounds/deactivate.wav'));
  const dialPlayer = useAudioPlayer(require('../assets/sounds/dial.wav'));
  const transformPlayer = useAudioPlayer(require('../assets/sounds/transform.wav'));

  const playActivate = useCallback(() => {
    try { activatePlayer.seekTo(0); activatePlayer.play(); } catch {}
  }, [activatePlayer]);

  const playDeactivate = useCallback(() => {
    try { deactivatePlayer.seekTo(0); deactivatePlayer.play(); } catch {}
  }, [deactivatePlayer]);

  const playDial = useCallback(() => {
    try { dialPlayer.seekTo(0); dialPlayer.play(); } catch {}
  }, [dialPlayer]);

  const playTransform = useCallback(() => {
    try { transformPlayer.seekTo(0); transformPlayer.play(); } catch {}
  }, [transformPlayer]);

  return { playActivate, playDeactivate, playDial, playTransform };
}
