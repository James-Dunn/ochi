// A simple primary button component so the main screen stays clean and readable.
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function PrimaryButton({ label, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress} accessibilityRole="button">
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    color: colors.buttonText,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});
