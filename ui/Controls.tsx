import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { controlsStyles as styles } from '../styles/controls.styles';

interface ControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function Controls({ onPrev, onNext }: ControlsProps) {
  return (
    <View style={[styles.controlsContainer, { pointerEvents: 'box-none' as any }]}>
      <TouchableOpacity style={styles.controlButton} onPress={onPrev}>
        <MaterialCommunityIcons name="chevron-left" size={32} color="#39FF14" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.controlButton} onPress={onNext}>
        <MaterialCommunityIcons name="chevron-right" size={32} color="#39FF14" />
      </TouchableOpacity>
    </View>
  );
}
