// Main entry point for the app. Sets up state and passes it down to screens.
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import ScreenContainer from './components/ScreenContainer';
import HomeScreen from './screens/HomeScreen';
import { colors } from './constants/colors';

const STORAGE_KEY = 'offline-counter-value';

export default function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Load the stored count when the app starts.
  useEffect(() => {
    const loadStoredCount = async () => {
      try {
        const storedValue = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedValue !== null) {
          setCount(Number(storedValue));
        }
      } catch (error) {
        console.warn('Could not load saved count', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredCount();
  }, []);

  // Save the count to local storage whenever it changes.
  useEffect(() => {
    const saveCount = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, String(count));
      } catch (error) {
        console.warn('Could not save count', error);
      }
    };

    if (!isLoading) {
      saveCount();
    }
  }, [count, isLoading]);

  const handleIncrement = () => {
    setCount((current) => current + 1);
  };

  if (isLoading) {
    return (
      <ScreenContainer>
        <ActivityIndicator size="large" color={colors.primary} />
        <StatusBar style="dark" />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <HomeScreen count={count} onIncrement={handleIncrement} />
      <StatusBar style="dark" />
    </ScreenContainer>
  );
}
