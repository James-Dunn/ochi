import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
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
    fontWeight: '700',
    color: colors.text,
    fontSize: 15,
    lineHeight: 20,
  },
  price: {
    color: colors.mutedText,
    fontWeight: '600',
  },
});
