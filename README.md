# My First Offline Expo App

A minimal Expo + React Native starter that runs entirely offline. It shows a single Home screen with a counter stored locally on your device.

## Requirements
- Expo SDK (JavaScript, no TypeScript)
- Runs on iOS and Android via Expo
- No backend or authentication

## Getting Started
1. Install dependencies (you need Node.js and npm):
   ```bash
   npm install
   ```
2. Start the Expo development server:
   ```bash
   npm start
   ```
3. Open the project in the Expo Go app on your device or an emulator using the on-screen prompts.

## Where to Edit
- **Text content**: `screens/HomeScreen.js`
- **Colors**: `constants/colors.js`
- **Buttons and layout**: `components/PrimaryButton.js`, `components/ScreenContainer.js`
- **Main logic**: `App.js`

## How It Works
- The app displays a title, subtitle, and a button that increments a counter.
- The counter value is saved locally with `AsyncStorage` so it persists between launches.
- Everything runs on the device—no servers, APIs, or cloud services are used.

## Notes
- This starter uses only React hooks and keeps dependencies minimal.
- There is no navigation set up yet; the Home screen is the only screen for now.
