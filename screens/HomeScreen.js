// The main screen of the app. Shows a friendly welcome message and a counter.
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../constants/colors';

const highlights = [
  {
    title: 'Works anywhere',
    description: 'Keeps counting even without internet access.',
  },
  {
    title: 'Autosaves instantly',
    description: 'Your last number is stored locally every time you tap.',
  },
  {
    title: 'Reset-friendly',
    description: 'Close and reopen the app without losing progress.',
  },
];

export default function HomeScreen({ count, onIncrement }) {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heroCard}>
        <View style={styles.pill}>
          <Text style={styles.pillText}>Offline counter</Text>
        </View>
        <Text style={styles.title}>Keep your streak going</Text>
        <Text style={styles.subtitle}>
          Track progress without worrying about connectivity. Everything you do is saved on
          this device.
        </Text>

        <View style={styles.statusRow}>
          <View style={[styles.statusBadge, styles.successBadge]}>
            <Text style={styles.statusText}>Synced locally</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>No account required</Text>
          </View>
        </View>
      </View>

      <View style={styles.counterCard}>
        <View style={styles.counterHeader}>
          <Text style={styles.counterLabel}>Current counter</Text>
          <View style={styles.counterChip}>
            <Text style={styles.counterChipText}>Live</Text>
          </View>
        </View>

        <Text style={styles.counterValue}>{count}</Text>
        <Text style={styles.counterHint}>Tap the button to add one.</Text>

        <PrimaryButton label="Increase counter" onPress={onIncrement} />
      </View>

      <View style={styles.highlightsCard}>
        <Text style={styles.sectionTitle}>Why this is reliable</Text>
        <View style={styles.highlightGrid}>
          {highlights.map((item) => (
            <View key={item.title} style={styles.highlightItem}>
              <View style={styles.bullet} />
              <View style={styles.highlightTextWrapper}>
                <Text style={styles.highlightTitle}>{item.title}</Text>
                <Text style={styles.highlightDescription}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 32,
    gap: 16,
  },
  heroCard: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 1,
    gap: 12,
  },
  pill: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accent,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  pillText: {
    color: '#111',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    color: colors.mutedText,
    lineHeight: 22,
  },
  statusRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  statusBadge: {
    backgroundColor: '#eef2ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  successBadge: {
    backgroundColor: '#ecfdf3',
  },
  statusText: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 13,
  },
  counterCard: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 1,
  },
  counterHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counterLabel: {
    color: colors.mutedText,
    fontSize: 15,
    fontWeight: '600',
  },
  counterChip: {
    backgroundColor: '#e0e7ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  counterChipText: {
    color: colors.primary,
    fontWeight: '700',
  },
  counterValue: {
    color: colors.text,
    fontSize: 48,
    fontWeight: '800',
  },
  counterHint: {
    color: colors.mutedText,
    fontSize: 14,
    marginBottom: 6,
  },
  highlightsCard: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  highlightGrid: {
    gap: 12,
  },
  highlightItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginTop: 5,
  },
  highlightTextWrapper: {
    flex: 1,
    gap: 2,
  },
  highlightTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.text,
  },
  highlightDescription: {
    color: colors.mutedText,
    lineHeight: 20,
    fontSize: 14,
  },
});
