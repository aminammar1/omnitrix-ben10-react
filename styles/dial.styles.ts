import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const DIAL_SIZE = width * 0.82;

export const dialStyles = StyleSheet.create({
  dialContainer: {
    position: 'absolute',
    width: DIAL_SIZE,
    height: DIAL_SIZE,
    borderRadius: DIAL_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    // @ts-ignore
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.9), 0px 0px 5px rgba(57, 255, 20, 0.15)',
  },
  dialBase: {
    width: '100%',
    height: '100%',
    borderRadius: DIAL_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 8,
    borderColor: '#0e0e0e',
  },
  // Inner ring detail
  innerRing: {
    position: 'absolute',
    width: DIAL_SIZE * 0.88,
    height: DIAL_SIZE * 0.88,
    borderRadius: (DIAL_SIZE * 0.88) / 2,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  innerMostRing: {
    position: 'absolute',
    width: DIAL_SIZE * 0.77,
    height: DIAL_SIZE * 0.77,
    borderRadius: (DIAL_SIZE * 0.77) / 2,
    borderWidth: 4,
    borderColor: '#111',
  },
  // Prongs (the 4 bumps on the Omnitrix sides)
  prong: {
    position: 'absolute',
    width: 32,
    height: 48,
    backgroundColor: '#353535',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    // @ts-ignore
    boxShadow: '0px 3px 6px rgba(0,0,0,0.8)',
  },
  prongHighlight: {
    width: '60%',
    height: '80%',
    backgroundColor: '#4a4a4a',
    borderRadius: 4,
  },
  // Tick marks around the dial
  tickMark: {
    position: 'absolute',
    width: 3,
    height: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 1,
  },
  // 4 green lights on the base
  baseLight: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#39FF14',
    borderWidth: 3,
    borderColor: '#111',
    // @ts-ignore
    boxShadow: '0 0 15px #39FF14',
  },
});

export { DIAL_SIZE };
