// The main screen of the app. Shows a friendly welcome message and a counter.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../constants/colors';

export default function HomeScreen({ count, onIncrement }) {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>My First App</Text>
      <Text style={styles.subtitle}>
        Offline-friendly and beginner-ready. Your counter is saved on this device.
      </Text>

      <View style={styles.counterBox}>
        <Text style={styles.counterLabel}>Tap the button to count:</Text>
        <Text style={styles.counterValue}>{count}</Text>
      </View>

      <PrimaryButton label="Increase counter" onPress={onIncrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.mutedText,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 320,
    marginBottom: 16,
  },
  counterBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
    minWidth: 200,
  },
  counterLabel: {
    color: colors.mutedText,
    fontSize: 14,
    marginBottom: 6,
  },
  counterValue: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '700',
  },
});
