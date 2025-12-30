import React, { useState } from 'react';
import { ScrollView, Pressable, Text, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';

export default function CategoryChips({ categories }) {
  const [active, setActive] = useState(categories?.[0]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipRow}
      >
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <Pressable
              key={category}
              style={[styles.chip, isActive && styles.activeChip]}
              onPress={() => setActive(category)}
              accessibilityRole="button"
            >
              <Text style={[styles.label, isActive && styles.activeLabel]}>{category}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  chipRow: {
    gap: 10,
    paddingRight: 6,
  },
  chip: {
    backgroundColor: '#e0efed',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#c8dbd8',
  },
  activeChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primaryDark,
  },
  label: {
    ...typography.label,
    color: colors.textPrimary,
    fontSize: 12,
  },
  activeLabel: {
    color: colors.buttonText,
    fontFamily: 'Inter_600SemiBold',
  },
});
