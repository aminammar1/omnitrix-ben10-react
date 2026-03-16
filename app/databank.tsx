import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';

import { ALIENS, AlienInfo } from '../data/aliens';
import { databankStyles as styles } from '../styles/databank.styles';

function AlienCard({ alien, index }: { alien: AlienInfo; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Animated.View entering={FadeInUp.duration(500).delay(index * 80)}>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => setExpanded(!expanded)}
      >
        <LinearGradient
          colors={['rgba(20, 30, 20, 0.95)', 'rgba(5, 10, 5, 0.98)']}
          style={styles.cardGradient}
        >
          <View style={styles.cardHeader}>
            <Image source={alien.image} style={styles.alienImage} contentFit="contain" />
            <View style={styles.cardInfo}>
              <Text style={styles.alienName}>{alien.name.toUpperCase()}</Text>
              <Text style={styles.alienSpecies}>{alien.species}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 }}>
                <MaterialCommunityIcons name="earth" size={12} color="#555" />
                <Text style={[styles.alienHomeworld, { marginTop: 0 }]}>{alien.homeworld}</Text>
              </View>
              <Text style={styles.firstAppearance}>"{alien.firstAppearance}"</Text>
            </View>
            <MaterialCommunityIcons
              name={expanded ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#39FF14"
            />
          </View>

          {expanded && (
            <>
              <Text style={styles.descText}>{alien.description}</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <MaterialCommunityIcons name="lightning-bolt" size={14} color="#39FF14" style={{ opacity: 0.8 }} />
                <Text style={[styles.sectionLabel, { marginBottom: 0 }]}>POWERS</Text>
              </View>
              <View style={styles.powersRow}>
                {alien.powers.map((p, i) => (
                  <View key={i} style={styles.powerBadge}>
                    <Text style={styles.powerText}>{p}</Text>
                  </View>
                ))}
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <MaterialCommunityIcons name="alert" size={14} color="#ff6b6b" style={{ opacity: 0.8 }} />
                <Text style={[styles.sectionLabel, { marginBottom: 0, color: '#ff6b6b' }]}>WEAKNESS</Text>
              </View>
              <Text style={styles.weaknessText}>{alien.weakness}</Text>
            </>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function DatabankScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={['#000', '#051005']} style={styles.gradient} />

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="#39FF14" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>DATABANK</Text>
        <Text style={styles.headerSub}>{ALIENS.length} SPECIES CATALOGUED</Text>
      </View>

      <FlatList
        data={ALIENS}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => <AlienCard alien={item} index={index} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
