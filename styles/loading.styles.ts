import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  // Decorative circuit lines
  circuitLine1: {
    position: 'absolute',
    top: height * 0.15,
    left: -20,
    width: width * 0.5,
    height: 1,
    backgroundColor: 'rgba(57, 255, 20, 0.15)',
  },
  circuitLine2: {
    position: 'absolute',
    top: height * 0.75,
    right: -20,
    width: width * 0.6,
    height: 1,
    backgroundColor: 'rgba(57, 255, 20, 0.1)',
  },
  circuitLine3: {
    position: 'absolute',
    left: width * 0.2,
    top: 0,
    width: 1,
    height: height * 0.3,
    backgroundColor: 'rgba(57, 255, 20, 0.08)',
  },
  // Main omnitrix symbol
  symbolContainer: {
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerRing: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#39FF14',
    alignItems: 'center',
    justifyContent: 'center',
    // @ts-ignore
    boxShadow: '0 0 25px rgba(57, 255, 20, 0.4), inset 0 0 15px rgba(57, 255, 20, 0.1)',
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(57, 255, 20, 0.08)',
    borderWidth: 2,
    borderColor: 'rgba(57, 255, 20, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hourglassContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: -2,
  },
  hourglassTop: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 22,
    borderRightWidth: 22,
    borderTopWidth: 22,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#39FF14',
  },
  hourglassBottom: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 22,
    borderRightWidth: 22,
    borderBottomWidth: 22,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#39FF14',
  },
  // Text
  titleContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  titleBen: {
    color: '#fff',
    fontSize: 56,
    fontWeight: '900',
    letterSpacing: 12,
    // @ts-ignore
    textShadow: '0px 0px 15px rgba(255, 255, 255, 0.3)',
  },
  titleTen: {
    color: '#39FF14',
    fontSize: 56,
    fontWeight: '900',
    letterSpacing: 12,
    // @ts-ignore
    textShadow: '0px 0px 20px #39FF14, 0px 0px 40px rgba(57, 255, 20, 0.3)',
  },
  subtitle: {
    color: '#39FF14',
    fontSize: 11,
    letterSpacing: 10,
    marginTop: 8,
    opacity: 0.6,
  },
  // Loading bar
  loadingBarContainer: {
    position: 'absolute',
    bottom: height * 0.12,
    width: width * 0.7,
    height: 3,
    backgroundColor: 'rgba(57, 255, 20, 0.1)',
    borderRadius: 2,
  },
  loadingBar: {
    height: '100%',
    backgroundColor: '#39FF14',
    borderRadius: 2,
    // @ts-ignore
    boxShadow: '0 0 8px #39FF14',
  },
  loadingText: {
    position: 'absolute',
    bottom: height * 0.08,
    color: '#39FF14',
    fontSize: 11,
    letterSpacing: 6,
    opacity: 0.5,
  },
});
