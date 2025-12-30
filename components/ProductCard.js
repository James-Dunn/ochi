import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';

export default function ProductCard({ product }) {
  return (
    <Pressable style={styles.card} accessibilityRole="button">
      <View style={[styles.image, { backgroundColor: product.swatch }]}> 
        <Text style={styles.heart}>♡</Text>
      </View>
      <View style={styles.meta}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#0b3a42',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 1,
    flexBasis: '48%',
  },
  image: {
    height: 160,
    borderRadius: 12,
    justifyContent: 'flex-end',
    padding: 10,
  },
  heart: {
    alignSelf: 'flex-end',
    fontSize: 16,
  },
  meta: {
    marginTop: 10,
    gap: 4,
  },
  name: {
    ...typography.body,
    fontFamily: 'Inter_600SemiBold',
    color: colors.textPrimary,
    fontSize: 15,
  },
  price: {
    ...typography.price,
    color: colors.textMuted,
  },
});
