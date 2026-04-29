// Import React and the useContext hook for accessing theme state
import React, { useContext } from 'react';
// Import UI components from React Native
import { Text, Button, StyleSheet } from 'react-native';
// Import SafeAreaView to handle safe area boundaries on notched devices
import { SafeAreaView } from 'react-native-safe-area-context';
// Import theme context and theme objects for dynamic theming
import { ThemeContext } from '../constants/ThemeContext';
import { lightTheme, darkTheme } from '../constants/theme';

// HomeScreen component - displays the main welcome screen with app title and start button
export default function HomeScreen({ navigation }) {
  // Get the current darkMode state from the ThemeContext
  const { darkMode } = useContext(ThemeContext);
  // Select the appropriate theme (light or dark) based on darkMode state
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    // SafeAreaView ensures content is visible on all device types
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* App title */}
      <Text style={[styles.title, { color: theme.text }]}>FitTrack Pro</Text>
      {/* Welcome message */}
      <Text style={{ color: theme.text }}>Welcome back!</Text>

      {/* Button to navigate to the Workout screen */}
      <Button
        title="Start Workout"
        onPress={() => navigation.navigate('Workout')}
      />
    </SafeAreaView>
  );
}

// Define styles for the HomeScreen component
const styles = StyleSheet.create({
  // Container styles: full height, centered content with padding
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20
  },
  // Title styles: larger font with bold weight
  title: { fontSize: 24, fontWeight: 'bold' }
});