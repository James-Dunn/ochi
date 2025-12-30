import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const typography = StyleSheet.create({
  heading: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 28,
    color: colors.textPrimary,
    letterSpacing: 0.3,
  },
  subheading: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 20,
    color: colors.textPrimary,
    letterSpacing: 0.2,
  },
  body: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 20,
  },
  button: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: colors.buttonText,
    letterSpacing: 0.4,
  },
  label: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: colors.textMuted,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  price: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: colors.textPrimary,
  },
});
