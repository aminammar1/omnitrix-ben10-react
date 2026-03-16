import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useSettingsStore } from '../zustand/useSettingsStore';
import { settingsStyles as styles } from '../styles/settings.styles';

function Toggle({ value, onPress }: { value: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.toggleButton,
          { backgroundColor: value ? '#39FF14' : '#333' },
        ]}
      >
        <View
          style={[
            styles.toggleDot,
            { alignSelf: value ? 'flex-end' : 'flex-start' },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  const router = useRouter();
  const { musicEnabled, sfxEnabled, hapticsEnabled, toggleMusic, toggleSfx, toggleHaptics } =
    useSettingsStore();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={['#000', '#050a05']} style={{ ...styles.container, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="#39FF14" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>SETTINGS</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.settingRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <MaterialCommunityIcons name="music" size={20} color="#ccc" />
            <Text style={styles.settingLabel}>Background Music</Text>
          </View>
          <Toggle value={musicEnabled} onPress={toggleMusic} />
        </View>

        <View style={styles.settingRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <MaterialCommunityIcons name="volume-high" size={20} color="#ccc" />
            <Text style={styles.settingLabel}>Sound Effects</Text>
          </View>
          <Toggle value={sfxEnabled} onPress={toggleSfx} />
        </View>

        <View style={styles.settingRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <MaterialCommunityIcons name="vibrate" size={20} color="#ccc" />
            <Text style={styles.settingLabel}>Haptic Feedback</Text>
          </View>
          <Toggle value={hapticsEnabled} onPress={toggleHaptics} />
        </View>

        <View style={styles.settingRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <MaterialCommunityIcons name="palette" size={20} color="#ccc" />
            <Text style={styles.settingLabel}>Theme</Text>
          </View>
          <Text style={styles.settingValue}>Classic Green</Text>
        </View>

        <View style={styles.settingRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <MaterialCommunityIcons name="watch" size={20} color="#ccc" />
            <Text style={styles.settingLabel}>Omnitrix Model</Text>
          </View>
          <Text style={styles.settingValue}>Original</Text>
        </View>
      </View>

      <View style={styles.versionSection}>
        <Text style={styles.versionText}>OMNITRIX OS v55.0.0</Text>
        <Text style={styles.versionSub}>Alien Force Expansion Pack</Text>
      </View>
    </View>
  );
}
