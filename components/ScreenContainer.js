// A reusable container that centers content and applies the app background color.
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function ScreenContainer({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});
