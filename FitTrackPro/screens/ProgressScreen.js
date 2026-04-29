// Import React and hooks for state management, effects, and focus events
import React, { useContext, useEffect, useState } from 'react';
// Import UI components from React Native
import { Text, FlatList, StyleSheet } from 'react-native';
// Import SafeAreaView to handle safe area boundaries on notched devices
import { SafeAreaView } from 'react-native-safe-area-context';
// Import AsyncStorage for persistent data storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import theme context and theme objects for dynamic theming
import { ThemeContext } from '../constants/ThemeContext';
import { lightTheme, darkTheme } from '../constants/theme';
// Import useFocusEffect to refresh data when screen comes into focus
import { useFocusEffect } from '@react-navigation/native';

// ProgressScreen component - displays a list of completed workouts from stored history
export default function ProgressScreen() {
  // Get the current darkMode state from ThemeContext
  const { darkMode } = useContext(ThemeContext);
  // Select the appropriate theme (light or dark) based on darkMode state
  const theme = darkMode ? darkTheme : lightTheme;

  // State to store the list of workouts loaded from AsyncStorage
  const [workouts, setWorkouts] = useState([]);

  // Function to load workout history from AsyncStorage
  const loadWorkouts = async () => {
    try {
      // Retrieve the 'workouts' data from AsyncStorage
      const data = await AsyncStorage.getItem('workouts');
      // If data exists, parse it and update the workouts state
      if (data) {
        setWorkouts(JSON.parse(data));
      }
    } catch (error) {
      // Log any errors that occur during data retrieval
      console.log(error);
    }
  };

  // useFocusEffect runs the loadWorkouts function whenever the screen comes into focus
  // This ensures the workout list is always up-to-date when the user navigates to this screen
  useFocusEffect(
  React.useCallback(() => {
    loadWorkouts();
  }, [])
);

  return (
    // SafeAreaView ensures content is visible on all device types
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Screen title */}
      <Text style={[styles.title, { color: theme.text }]}>Workout History</Text>

      {/* FlatList renders the workout history items */}
      <FlatList
        // Use the workouts state as the data source
        data={workouts}
        // Use the unique id from each workout object as the key
        keyExtractor={(item) => item.id}
        // Render each workout item as text
        renderItem={({ item }) => (
          <Text style={[styles.item, { color: theme.text }]}>
            {item.workout}
          </Text>
        )}
        // Display this message when there are no workouts in the list
        ListEmptyComponent={
          <Text style={{ color: theme.text }}>No workouts yet</Text>
        }
      />
    </SafeAreaView>
  );
}

// Define styles for the ProgressScreen component
const styles = StyleSheet.create({
  // Container styles: full height with padding
  container: { flex: 1, padding: 20 },
  // Title styles: larger font with bold weight and bottom margin
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  // Item styles: medium font size with bottom margin for spacing between items
  item: { fontSize: 16, marginBottom: 5 }
});