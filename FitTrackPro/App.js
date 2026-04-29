// Import gesture handler - required for navigation and gesture support
import 'react-native-gesture-handler';
// Import React for component creation
import React from 'react';
// Import NavigationContainer from React Navigation to enable navigation functionality
import { NavigationContainer } from '@react-navigation/native';
// Import StatusBar to control the status bar appearance
import { StatusBar } from 'react-native';
// Import SafeAreaProvider to handle safe area boundaries on notched devices
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Import ThemeProvider to enable theme switching throughout the app
import { ThemeProvider } from './constants/ThemeContext';
// Import AppNavigator which contains the app's navigation structure
import AppNavigator from './navigation/AppNavigator';

// Root App component - sets up all providers and navigation for the entire application
export default function App() {
  return (
    // ThemeProvider enables theme context (light/dark mode) for all child components
    <ThemeProvider>
      {/* SafeAreaProvider handles safe area boundaries on devices with notches or rounded corners */}
      <SafeAreaProvider>
        {/* NavigationContainer enables React Navigation functionality */}
        <NavigationContainer>
          {/* StatusBar configuration - sets the status bar style to dark */}
          <StatusBar barStyle="dark-content" />
          {/* AppNavigator contains the bottom tab navigation structure */}
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}