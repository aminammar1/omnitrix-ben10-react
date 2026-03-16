import { StyleSheet, Dimensions, Platform, StatusBar as RNStatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 54 : (RNStatusBar.currentHeight || 24) + 10;

export const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    paddingBottom: 20,
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
  content: {
    paddingHorizontal: 24,
    gap: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 25, 15, 0.9)',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(57, 255, 20, 0.2)',
  },
  settingLabel: {
    color: '#ccc',
    fontSize: 16,
    fontWeight: '600',
  },
  settingValue: {
    color: '#39FF14',
    fontSize: 14,
  },
  toggleButton: {
    width: 52,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  toggleDot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#fff',
  },
  versionSection: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    alignItems: 'center',
  },
  versionText: {
    color: '#333',
    fontSize: 12,
    letterSpacing: 2,
  },
  versionSub: {
    color: '#222',
    fontSize: 10,
    marginTop: 4,
  },
});
