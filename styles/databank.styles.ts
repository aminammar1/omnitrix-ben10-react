import { StyleSheet, Dimensions, Platform, StatusBar as RNStatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 54 : (RNStatusBar.currentHeight || 24) + 10;

export const databankStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  backButton: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT,
    left: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(10, 10, 10, 0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(57, 255, 20, 0.3)',
    zIndex: 999,
    // @ts-ignore
    boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
  },
  header: {
    paddingTop: STATUS_BAR_HEIGHT + 20,
    paddingBottom: 15,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#39FF14',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 8,
    // @ts-ignore
    textShadow: '0px 0px 12px #39FF14',
  },
  headerSub: {
    color: '#666',
    fontSize: 12,
    letterSpacing: 4,
    marginTop: 4,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  card: {
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(57, 255, 20, 0.3)',
    overflow: 'hidden',
  },
  cardGradient: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  alienImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#39FF14',
    backgroundColor: 'rgba(57, 255, 20, 0.05)',
  },
  cardInfo: {
    flex: 1,
    marginLeft: 14,
  },
  alienName: {
    color: '#39FF14',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 2,
  },
  alienSpecies: {
    color: '#888',
    fontSize: 13,
    marginTop: 2,
    letterSpacing: 1,
  },
  alienHomeworld: {
    color: '#555',
    fontSize: 11,
    marginTop: 2,
  },
  firstAppearance: {
    color: '#444',
    fontSize: 10,
    marginTop: 4,
    fontStyle: 'italic',
  },
  descText: {
    color: '#aaa',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 10,
  },
  sectionLabel: {
    color: '#39FF14',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 6,
    opacity: 0.8,
  },
  powersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 10,
  },
  powerBadge: {
    backgroundColor: 'rgba(57, 255, 20, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(57, 255, 20, 0.3)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  powerText: {
    color: '#39FF14',
    fontSize: 11,
    fontWeight: '600',
  },
  weaknessText: {
    color: '#ff6b6b',
    fontSize: 12,
    lineHeight: 18,
    opacity: 0.8,
  },
});
