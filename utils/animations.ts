import { withTiming, Easing } from 'react-native-reanimated';

export const toggleDrawerAnimation = (isDrawerOpen: boolean) => ({
  transform: [
    { rotateZ: withTiming(isDrawerOpen ? '-10deg' : '0deg', { duration: 1000, easing: Easing.ease }) },
    { translateX: withTiming(isDrawerOpen ? 190 : 0, { duration: 1000, easing: Easing.ease }) },
    { translateY: withTiming(isDrawerOpen ? 80 : 0, { duration: 1000, easing: Easing.ease }) },
  ],
  borderRadius: withTiming(isDrawerOpen ? 30 : 0, { duration: 100, easing: Easing.ease }),
});

export const drawer2Animation = (isDrawerOpen: boolean) => ({
  transform: [
    { translateY: withTiming(isDrawerOpen ? 20 : 0, { duration: 1200, easing: Easing.ease }) },
  ],
});
