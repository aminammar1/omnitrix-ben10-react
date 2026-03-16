import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import { dialStyles as styles, DIAL_SIZE } from '../styles/dial.styles';

interface DialProps {
  animatedStyle: any;
}

export function Dial({ animatedStyle }: DialProps) {
  // Generate tick marks around the dial edge
  const ticks = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <>
      {/* OS Omnitrix 4 green base lights behind the dial */}
      {[0, 90, 180, 270].map((deg, i) => (
        <View
          key={`base-light-${i}`}
          style={[
            styles.baseLight,
            {
              transform: [
                { rotate: `${deg + 45}deg` },
                { translateY: -DIAL_SIZE / 1.7 },
              ],
            },
          ]}
        />
      ))}

      <Animated.View style={[styles.dialContainer, animatedStyle]}>
        <LinearGradient
          colors={['#b8b8b8', '#888888', '#dadada', '#666666']}
          style={styles.dialBase}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Inner dark mechanism ring */}
          <View style={styles.innerRing} />
          <View style={styles.innerMostRing} />

          {/* Tick marks */}
          {ticks.map((deg, i) => (
            <View
              key={`tick-${i}`}
              style={[
                styles.tickMark,
                {
                  transform: [
                    { rotate: `${deg}deg` },
                    { translateY: -DIAL_SIZE / 2.15 },
                  ],
                },
              ]}
            />
          ))}

          {/* 4 main prongs (the iconic blocky prongs of the OS Omnitrix) */}
          {[0, 90, 180, 270].map((deg, i) => (
            <View
              key={`prong-${i}`}
              style={[
                styles.prong,
                {
                  transform: [
                    { rotate: `${deg}deg` },
                    { translateY: -DIAL_SIZE / 2.02 },
                  ],
                },
              ]}
            >
               <View style={styles.prongHighlight} />
            </View>
          ))}
        </LinearGradient>
      </Animated.View>
    </>
  );
}
