// Import React and the useContext hook for accessing theme state
import React, { useContext } from 'react';
// Import UI components from React Native
import { Text, Switch, StyleSheet } from 'react-native';
// Import SafeAreaView to handle safe area boundaries on notched devices
import { SafeAreaView } from 'react-native-safe-area-context';
// Import theme context and theme objects for dynamic theming
import { ThemeContext } from '../constants/ThemeContext';
import { lightTheme, darkTheme } from '../constants/theme';

// ProfileScreen component - displays user settings including dark mode toggle
export default function ProfileScreen() {
  // Get the current darkMode state and setDarkMode function from ThemeContext
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  // Select the appropriate theme (light or dark) based on darkMode state
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    // SafeAreaView ensures content is visible on all device types
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Settings screen title */}
      <Text style={[styles.title, { color: theme.text }]}>Settings</Text>

      {/* Dark mode label */}
      <Text style={[styles.label, { color: theme.text }]}>Dark Mode</Text>
      {/* Switch component to toggle between light and dark themes */}
      <Switch value={darkMode} onValueChange={setDarkMode} />
    </SafeAreaView>
  );
}

// Define styles for the ProfileScreen component
const styles = StyleSheet.create({
  // Container styles: full height with padding
  container: { flex: 1, padding: 20 },
  // Title styles: larger font with bold weight and bottom margin
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  // Label styles: medium font size for setting labels
  label: { fontSize: 16 }
});