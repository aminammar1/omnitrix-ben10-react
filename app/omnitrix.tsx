import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, runOnJS, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';

import { ALIENS } from '../data/aliens';
import { Dial } from '../ui/Dial';
import { Core } from '../ui/Core';
import { Controls } from '../ui/Controls';
import { useOmnitrixLogic } from '../logic/useOmnitrixLogic';
import { omnitrixStyles as styles } from '../styles/omnitrix.styles';
import { DIAL_SIZE } from '../styles/dial.styles';

export default function OmnitrixScreen() {
  const router = useRouter();
  const logic = useOmnitrixLogic();

  // Gesture turning math
  const centerX = DIAL_SIZE / 2;
  const centerY = DIAL_SIZE / 2;

  const panGesture = Gesture.Pan()
    .enabled(logic.active)
    .onStart((e) => {
      const startAngle = Math.atan2(e.y - centerY, e.x - centerX) * (180 / Math.PI);
      logic.gestureStartAngle.value = startAngle;
      logic.gestureBaseRotation.value = logic.rotation.value;
    })
    .onUpdate((e) => {
      const currentAngle = Math.atan2(e.y - centerY, e.x - centerX) * (180 / Math.PI);
      let angleDiff = currentAngle - logic.gestureStartAngle.value;
      
      // Handle 360 wraparound seamlessly
      if (angleDiff > 180) angleDiff -= 360;
      if (angleDiff < -180) angleDiff += 360;
      
      logic.rotation.value = logic.gestureBaseRotation.value + angleDiff;
      
      // Determine if moved enough to tick (1 tick = 30 degrees)
      const currentSteps = Math.floor((logic.rotation.value - logic.gestureBaseRotation.value) / 30);
      if (currentSteps > logic.lastStep.value) {
         logic.lastStep.value = currentSteps;
         runOnJS(logic.stepNext)();
      } else if (currentSteps < logic.lastStep.value) {
         logic.lastStep.value = currentSteps;
         runOnJS(logic.stepPrev)();
      }
    })
    .onEnd(() => {
      // Snap to nearest 30 degrees tick
       const target = Math.round(logic.rotation.value / 30) * 30;
       logic.rotation.value = withTiming(target, { duration: 250 });
       logic.lastStep.value = 0;
    });

  const animatedDialStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${logic.rotation.value}deg` }],
  }));

  const animatedCoreStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: logic.coreScale.value },
      { translateY: logic.popUpY.value },
    ],
  }));

  const animatedFlashStyle = useAnimatedStyle(() => ({
    opacity: logic.flashOpacity.value,
    zIndex: logic.flashOpacity.value > 0 ? 10 : -1,
    pointerEvents: logic.flashOpacity.value > 0 ? 'auto' : 'none',
  }));

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.bgBase} />
      {logic.active && (
        <LinearGradient
          colors={['transparent', 'rgba(57, 255, 20, 0.1)', 'transparent']}
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0, y: 0.3 }}
          end={{ x: 0, y: 0.7 }}
        />
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="#39FF14" />
      </TouchableOpacity>

      {/* Top info */}
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>OMNITRIX</Text>
        <View style={styles.statusRow}>
          <View style={[styles.statusDot, { backgroundColor: logic.active ? '#39FF14' : '#555' }]} />
          <Text style={[styles.statusText, logic.active && { color: '#39FF14' }]}>
            {logic.active ? 'ACTIVE' : 'STANDBY'}
          </Text>
        </View>
        <Text style={styles.counterText}>
          {logic.alienIndex + 1} / {ALIENS.length} SPECIES
        </Text>
      </View>

      {/* Wrist band & Omnitrix */}
      <View style={styles.wristBand}>
        <View style={styles.wristBandEdgeTop} />
        
        {/* The Dial is now interactive! */}
        <GestureDetector gesture={panGesture}>
          <Animated.View style={{ width: DIAL_SIZE, height: DIAL_SIZE, alignItems: 'center', justifyContent: 'center' }}>
            <Dial animatedStyle={animatedDialStyle} />
            <Core
              active={logic.active}
              animatedStyle={animatedCoreStyle}
              currentAlien={logic.currentAlien}
              onToggle={logic.handleToggle}
            />
          </Animated.View>
        </GestureDetector>
        {logic.active && (
          <Controls onPrev={logic.handlePrev} onNext={logic.handleNext} />
        )}
        <View style={styles.wristBandEdgeBottom} />
      </View>

      {/* Bottom alien info */}
      <View style={styles.bottomContainer}>
        {logic.active ? (
          <>
            <Animated.Text style={styles.alienName}>
              {logic.currentAlien.name.toUpperCase()}
            </Animated.Text>
            <Text style={styles.alienSpecies}>
              {logic.currentAlien.species.toUpperCase()}
            </Text>
          </>
        ) : (
          <Text style={[styles.statusText, { opacity: 0.3 }]}>
            TAP CORE TO ACTIVATE
          </Text>
        )}
      </View>

      <Animated.View style={[styles.transformFlash, animatedFlashStyle, { alignItems: 'center', justifyContent: 'center' }]}>
        {logic.isTransforming && (
           <Image
             source={logic.currentAlien.image}
             style={{ width: '80%', height: '80%' }}
             contentFit="contain"
           />
        )}
      </Animated.View>
    </View>
  );
}
