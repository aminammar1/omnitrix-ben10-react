import { useCallback, useState, useRef } from 'react';
import { useSharedValue, withTiming, withSequence, Easing, withSpring } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

import { useOmnitrixStore } from '../zustand/useOmnitrixStore';
import { useOmnitrixSounds } from '../hooks/useOmnitrixSounds';
import { useSettingsStore } from '../zustand/useSettingsStore';

export function useOmnitrixLogic() {
  const {
    active, alienIndex, currentAlien,
    activate, deactivate, toggle,
    nextAlien, prevAlien,
  } = useOmnitrixStore();

  const { sfxEnabled, hapticsEnabled } = useSettingsStore();

  const sounds = useOmnitrixSounds();

  // Animated values
  const rotation = useSharedValue(0);
  const coreScale = useSharedValue(1);
  const popUpY = useSharedValue(0);
  const flashOpacity = useSharedValue(0);

  const [isTransforming, setIsTransforming] = useState(false);

  const gestureStartAngle = useSharedValue(0);
  const gestureBaseRotation = useSharedValue(0);
  const lastStep = useSharedValue(0);

  const triggerHaptic = useCallback((type: 'light' | 'medium' | 'heavy' = 'medium') => {
    if (!hapticsEnabled) return;
    try {
      const map = { light: Haptics.ImpactFeedbackStyle.Light, medium: Haptics.ImpactFeedbackStyle.Medium, heavy: Haptics.ImpactFeedbackStyle.Heavy };
      Haptics.impactAsync(map[type]);
    } catch {}
  }, [hapticsEnabled]);

  const handleToggle = useCallback(() => {
    if (active) {
      if (isTransforming) return;
      // Transform Sequence
      setIsTransforming(true);
      if (sfxEnabled) sounds.playTransform();
      triggerHaptic('heavy');
      
      // Flash screen green, holding it for 2.5s
      flashOpacity.value = withSequence(
        withTiming(1, { duration: 100 }),
        withTiming(1, { duration: 2500 }),
        withTiming(0, { duration: 500 })
      );
      
      // Smash core down
      popUpY.value = withTiming(10, { duration: 100 });
      coreScale.value = withTiming(0.8, { duration: 100 });
      
      // Clean up and return to standby after sequence finishes
      setTimeout(() => {
        deactivate();
        setIsTransforming(false);
        coreScale.value = 1;
        popUpY.value = 0;
      }, 3100);
      
    } else {
      // Activate
      if (sfxEnabled) sounds.playActivate();
      triggerHaptic('heavy');
      
      flashOpacity.value = withSequence(
        withTiming(0.8, { duration: 80 }),
        withTiming(0, { duration: 400 })
      );
      
      // Core dynamically POPs out like a cylinder
      popUpY.value = withSpring(-30, { damping: 10, mass: 0.7 });
      coreScale.value = withSequence(
        withTiming(1.15, { duration: 150 }),
        withTiming(1, { duration: 200 })
      );
      activate();
    }
  }, [active, isTransforming, sfxEnabled, hapticsEnabled]);

  const handleNext = useCallback(() => {
    if (sfxEnabled) sounds.playDial();
    triggerHaptic('light');
    rotation.value = withTiming(rotation.value + 30, { duration: 200, easing: Easing.out(Easing.cubic) });
    nextAlien();
  }, [sfxEnabled, hapticsEnabled]);

  const handlePrev = useCallback(() => {
    if (sfxEnabled) sounds.playDial();
    triggerHaptic('light');
    rotation.value = withTiming(rotation.value - 30, { duration: 200, easing: Easing.out(Easing.cubic) });
    prevAlien();
  }, [sfxEnabled, hapticsEnabled]);

  const stepNext = useCallback(() => {
    if (sfxEnabled) sounds.playDial();
    triggerHaptic('light');
    nextAlien();
  }, [sfxEnabled, hapticsEnabled]);

  const stepPrev = useCallback(() => {
    if (sfxEnabled) sounds.playDial();
    triggerHaptic('light');
    prevAlien();
  }, [sfxEnabled, hapticsEnabled]);

  return {
    active,
    alienIndex,
    currentAlien,
    rotation,
    gestureStartAngle,
    gestureBaseRotation,
    lastStep,
    coreScale,
    popUpY,
    flashOpacity,
    handleToggle,
    handleNext,
    handlePrev,
    stepNext,
    stepPrev,
    isTransforming,
  };
}
