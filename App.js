// Main entry point for the app. Renders the revamped storefront layout.
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import ScreenContainer from './components/ScreenContainer';
import HomeScreen from './screens/HomeScreen';
import {
  useFonts,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScreenContainer>
      <HomeScreen />
      <StatusBar style="dark" />
    </ScreenContainer>
  );
}
