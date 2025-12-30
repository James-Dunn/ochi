import React, { useState } from 'react';
import { ScrollView, Pressable, Text, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';

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
    backgroundColor: '#eef2ff',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#e0e7ff',
  },
  activeChip: {
    backgroundColor: colors.text,
    borderColor: colors.text,
  },
  label: {
    fontWeight: '600',
    color: colors.text,
    letterSpacing: 0.2,
  },
  activeLabel: {
    color: '#ffffff',
  },
});
