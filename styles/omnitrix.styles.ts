import { StyleSheet, Dimensions, Platform, StatusBar as RNStatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const DIAL_SIZE = width * 0.82;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 54 : (RNStatusBar.currentHeight || 24) + 10;

export const omnitrixStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bgBase: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#030503',
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
  // Status bar at top
  topContainer: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT + 50,
    alignItems: 'center',
  },
  titleText: {
    color: '#39FF14',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 12,
    // @ts-ignore
    textShadow: '0px 0px 12px #39FF14',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    color: '#888',
    fontSize: 11,
    letterSpacing: 4,
  },
  counterText: {
    color: '#444',
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 4,
  },
  // Wrist band
  wristBand: {
    width: width,
    height: DIAL_SIZE + 50,
    backgroundColor: '#080808',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wristBandEdgeTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 2,
    backgroundColor: '#252525',
  },
  wristBandEdgeBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 2,
    backgroundColor: '#252525',
  },
  // Bottom info
  bottomContainer: {
    position: 'absolute',
    bottom: height * 0.08,
    alignItems: 'center',
  },
  alienName: {
    color: '#39FF14',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 6,
    // @ts-ignore
    textShadow: '0px 0px 18px #39FF14, 0px 0px 40px rgba(57, 255, 20, 0.3)',
  },
  alienSpecies: {
    color: '#555',
    fontSize: 11,
    letterSpacing: 4,
    marginTop: 4,
  },
  transformFlash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#39FF14',
  },
});
