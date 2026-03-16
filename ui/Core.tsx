import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import { coreStyles as styles } from '../styles/core.styles';

interface CoreProps {
  active: boolean;
  animatedStyle: any;
  currentAlien: { name: string; image: any };
  onToggle: () => void;
}

export function Core({ active, animatedStyle, currentAlien, onToggle }: CoreProps) {
  return (
    <Animated.View style={[styles.coreContainer, animatedStyle]}>
      <TouchableOpacity activeOpacity={0.8} onPress={onToggle}>
        <LinearGradient
          colors={active ? ['#39FF14', '#15bb05'] : ['#151515', '#080808']}
          style={styles.coreInner}
        >
          <View style={[styles.glassLayer, active && styles.glassActive]}>
            {active ? (
              <View style={styles.alienDisplay}>
                <Image
                  source={currentAlien.image}
                  style={styles.alienImage}
                  contentFit="contain"
                  tintColor="#000000" // Classic Omnitrix shows a pitch black silhouette 
                />
                {/* Hologram overlay effect over the silhouette */}
                <View style={styles.hologramOverlay} />
                <View style={styles.hologramScanline} />
              </View>
            ) : (
              <View style={styles.idlePattern}>
                <View style={styles.hourglassTop} />
                <View style={styles.hourglassBottom} />
              </View>
            )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
}
