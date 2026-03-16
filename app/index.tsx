import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { OmnitrixLogo } from '../ui/OmnitrixLogo';
import { loadingStyles as styles } from '../styles/loading.styles';

export default function LoadingScreen() {
  const router = useRouter();
  const pulseValue = useRef(new Animated.Value(0.5)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const loadingWidth = useRef(new Animated.Value(0)).current;
  const glowValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Gentle pulse for the Omnitrix symbol
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, { toValue: 1, duration: 1200, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(pulseValue, { toValue: 0.5, duration: 1200, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    ).start();

    // Fade in the whole screen
    Animated.timing(opacityValue, { toValue: 1, duration: 800, useNativeDriver: true }).start();

    // Loading bar progress
    Animated.timing(loadingWidth, { toValue: 1, duration: 3200, easing: Easing.inOut(Easing.ease), useNativeDriver: false }).start();

    // Glow effect
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowValue, { toValue: 1, duration: 2000, useNativeDriver: true }),
        Animated.timing(glowValue, { toValue: 0.3, duration: 2000, useNativeDriver: true }),
      ])
    ).start();

    const timer = setTimeout(() => {
      router.replace('/menu');
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const scale = pulseValue.interpolate({
    inputRange: [0.5, 1],
    outputRange: [0.95, 1.05],
  });

  const loadBarWidth = loadingWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#000000', '#020a02', '#000000']}
        style={styles.bgGradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      {/* Decorative circuit lines */}
      <View style={styles.circuitLine1} />
      <View style={styles.circuitLine2} />
      <View style={styles.circuitLine3} />

      <Animated.View style={{ opacity: opacityValue, alignItems: 'center' }}>
        {/* Omnitrix Symbol */}
        <Animated.View style={[styles.symbolContainer, { transform: [{ scale }] }]}>
          <OmnitrixLogo size={140} color="#39FF14" bgColor="#000000" />
        </Animated.View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.titleBen}>BEN</Text>
            <Text style={styles.titleTen}> 10</Text>
          </View>
          <Text style={styles.subtitle}>OMNITRIX SYSTEM</Text>
        </View>
      </Animated.View>

      {/* Loading bar */}
      <View style={styles.loadingBarContainer}>
        <Animated.View style={[styles.loadingBar, { width: loadBarWidth as any }]} />
      </View>
      <Text style={styles.loadingText}>INITIALIZING...</Text>
    </View>
  );
}
