import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { OmnitrixLogo } from '../ui/OmnitrixLogo';
import { menuStyles as styles } from '../styles/menu.styles';

interface MenuItemProps {
  icon: string;
  label: string;
  onPress: () => void;
  delay: number;
}

function MenuItem({ icon, label, onPress, delay }: MenuItemProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <Animated.View entering={FadeInDown.duration(600).delay(delay)}>
      <Pressable
        style={styles.menuButton}
        onPress={onPress}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
      >
        <View style={[styles.menuButtonGlass, pressed && styles.menuButtonGlassActive]}>
          <MaterialCommunityIcons
            name={icon as any}
            size={24}
            color="#39FF14"
            style={styles.menuIcon}
          />
          <Text style={styles.buttonText}>{label}</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color="#39FF14"
            style={styles.buttonArrow}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default function MenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#000000', '#020802', '#000000']}
        style={styles.bgGradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      {/* Liquid glass orbs */}
      <View style={styles.glassOrb} />
      <View style={styles.glassOrb2} />

      {/* Header */}
      <Animated.View entering={FadeInUp.duration(800).delay(200)} style={styles.header}>
        <View style={{ marginBottom: 22 }}>
           <OmnitrixLogo size={70} color="#39FF14" bgColor="#000000" />
        </View>
        <View style={styles.titleRow}>
          <Text style={styles.titleBen}>BEN</Text>
          <Text style={styles.titleTen}> 10</Text>
        </View>
        <Text style={styles.subtitleText}>OMNITRIX SIMULATOR</Text>
      </Animated.View>

      {/* Menu */}
      <View style={styles.menuContainer}>
        <MenuItem
          icon="watch"
          label="OMNITRIX"
          onPress={() => router.push('/omnitrix')}
          delay={400}
        />
        <MenuItem
          icon="dna"
          label="DATABANK"
          onPress={() => router.push('/databank')}
          delay={520}
        />
        <MenuItem
          icon="cog"
          label="SETTINGS"
          onPress={() => router.push('/settings')}
          delay={640}
        />
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.versionText}>V1.0 — By Amine Ammar</Text>
      </View>
    </View>
  );
}
