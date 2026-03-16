import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  // Liquid glass decorative circle
  glassOrb: {
    position: 'absolute',
    top: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'rgba(57, 255, 20, 0.02)',
    borderWidth: 1,
    borderColor: 'rgba(57, 255, 20, 0.04)',
  },
  glassOrb2: {
    position: 'absolute',
    bottom: -60,
    right: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(57, 255, 20, 0.015)',
    borderWidth: 1,
    borderColor: 'rgba(57, 255, 20, 0.03)',
  },
  // Header
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  omnitrixMini: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#39FF14',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
    backgroundColor: 'rgba(57, 255, 20, 0.05)',
    // @ts-ignore
    boxShadow: '0 0 25px rgba(57, 255, 20, 0.35), 0 0 50px rgba(57, 255, 20, 0.1)',
  },
  miniHourglassTop: {
    width: 0, height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 11, borderRightWidth: 11, borderTopWidth: 11,
    borderLeftColor: 'transparent', borderRightColor: 'transparent',
    borderTopColor: '#39FF14',
  },
  miniHourglassBottom: {
    width: 0, height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 11, borderRightWidth: 11, borderBottomWidth: 11,
    borderLeftColor: 'transparent', borderRightColor: 'transparent',
    borderBottomColor: '#39FF14',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  titleBen: {
    color: '#fff',
    fontSize: 62,
    fontWeight: '900',
    letterSpacing: 8,
  },
  titleTen: {
    color: '#39FF14',
    fontSize: 62,
    fontWeight: '900',
    letterSpacing: 8,
    // @ts-ignore
    textShadow: '0px 0px 25px #39FF14, 0px 0px 50px rgba(57, 255, 20, 0.3)',
  },
  subtitleText: {
    color: '#555',
    fontSize: 12,
    letterSpacing: 10,
    marginTop: 6,
  },
  // Menu buttons — liquid glass style
  menuContainer: {
    width: width * 0.84,
    gap: 14,
  },
  menuButton: {
    width: '100%',
    height: 66,
    borderRadius: 16,
    overflow: 'hidden',
  },
  menuButtonGlass: {
    flex: 1,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    // Liquid glass effect
    backgroundColor: 'rgba(57, 255, 20, 0.04)',
    borderWidth: 1,
    borderColor: 'rgba(57, 255, 20, 0.2)',
    // @ts-ignore
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 15px rgba(0,0,0,0.3)',
  },
  menuButtonGlassActive: {
    backgroundColor: 'rgba(57, 255, 20, 0.08)',
    borderColor: 'rgba(57, 255, 20, 0.5)',
    // @ts-ignore
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 0 20px rgba(57, 255, 20, 0.2), 0 4px 15px rgba(0,0,0,0.3)',
  },
  menuIcon: {
    marginRight: 16,
  },
  buttonText: {
    color: '#39FF14',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 3,
    flex: 1,
  },
  buttonArrow: {
    opacity: 0.5,
  },
  // Footer
  footerContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  versionText: {
    color: '#333',
    fontSize: 11,
    letterSpacing: 1,
  },
});
