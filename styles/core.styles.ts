import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const DIAL_SIZE = width * 0.82;

export const coreStyles = StyleSheet.create({
  coreContainer: {
    width: DIAL_SIZE * 0.72,
    height: DIAL_SIZE * 0.72,
    borderRadius: (DIAL_SIZE * 0.72) / 2,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    // @ts-ignore
    boxShadow: '0px 0px 15px rgba(57, 255, 20, 0.4)',
  },
  coreInner: {
    width: DIAL_SIZE * 0.67,
    height: DIAL_SIZE * 0.67,
    borderRadius: (DIAL_SIZE * 0.67) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderWidth: 4,
    borderColor: '#39FF14',
  },
  glassLayer: {
    width: '100%',
    height: '100%',
    borderRadius: DIAL_SIZE,
    backgroundColor: 'rgba(57, 255, 20, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(57, 255, 20, 0.2)',
  },
  // Active background - bright green
  glassActive: {
    backgroundColor: '#39FF14', // Classic Omnitrix active screen is bright green
    borderWidth: 2,
    borderColor: '#ffffff', // A flash of white on the border
    // @ts-ignore
    boxShadow: 'inset 0 0 15px rgba(255,255,255,0.8), 0 0 30px #39FF14',
  },
  // Idle pattern
  idlePattern: {
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hourglassTop: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderTopWidth: 35,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#39FF14',
  },
  hourglassBottom: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderBottomWidth: 35,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#39FF14',
  },
  // Active alien display
  alienDisplay: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alienImage: {
    width: '90%',
    height: '90%',
  },
  // Holographic overlay over the active silhouette
  hologramOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  hologramScanline: {
    position: 'absolute',
    width: '200%',
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    opacity: 0.6,
  },
});
