// Main entry point for the app. Renders the revamped storefront layout.
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import ScreenContainer from './components/ScreenContainer';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <ScreenContainer>
      <HomeScreen />
      <StatusBar style="dark" />
    </ScreenContainer>
  );
}
