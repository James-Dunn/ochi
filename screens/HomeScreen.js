import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import Header from '../components/Header';
import CategoryChips from '../components/CategoryChips';
import ProductCard from '../components/ProductCard';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';

const categories = ['Tees', 'New', 'Best Sellers', 'Sale', 'Essentials'];

const products = [
  { id: '1', name: 'Sunset Pocket Tee', price: '$28', swatch: '#ffd7d7' },
  { id: '2', name: 'Lilac Dream Tee', price: '$30', swatch: '#e9d6ff' },
  { id: '3', name: 'Coastal Blue Tee', price: '$29', swatch: '#c7e7ff' },
  { id: '4', name: 'Matcha Drop Tee', price: '$32', swatch: '#d8f5d2' },
  { id: '5', name: 'Buttercream Tee', price: '$27', swatch: '#fff2d8' },
  { id: '6', name: 'Rose Clay Tee', price: '$31', swatch: '#f9d5cf' },
  { id: '7', name: 'Ink Black Tee', price: '$34', swatch: '#dfe3eb' },
  { id: '8', name: 'Mint Pop Tee', price: '$30', swatch: '#d3f2f2' },
];

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Header />

      <View style={styles.heroCard}>
        <View style={styles.heroImage} />
        <View style={styles.heroTextWrapper}>
          <Text style={styles.heroLabel}>New Drops</Text>
          <Text style={styles.heroTitle}>Minimal tees. Cute colors.</Text>
          <Pressable style={styles.heroButton} accessibilityRole="button">
            <Text style={styles.heroButtonText}>Shop Tees</Text>
          </Pressable>
        </View>
      </View>

      <CategoryChips categories={categories} />

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Free shipping over $49 ✈️</Text>
      </View>

      <View style={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 32,
    gap: 18,
  },
  heroCard: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    gap: 14,
    shadowColor: '#0b3a42',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 2,
  },
  heroImage: {
    backgroundColor: '#d4f0ef',
    borderRadius: 16,
    width: 120,
    height: 160,
  },
  heroTextWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 6,
    gap: 10,
  },
  heroLabel: {
    ...typography.label,
    color: colors.accent,
  },
  heroTitle: {
    ...typography.heading,
    fontSize: 30,
    lineHeight: 36,
  },
  heroButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: 'flex-start',
    shadowColor: '#0b3a42',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  heroButtonText: {
    ...typography.button,
  },
  banner: {
    backgroundColor: '#dff4f3',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#c8e7e4',
    alignItems: 'center',
  },
  bannerText: {
    ...typography.body,
    fontFamily: 'Inter_600SemiBold',
    color: colors.textPrimary,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 6,
  },
});
