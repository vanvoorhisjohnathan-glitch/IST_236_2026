// Import React and hooks for state management and context
import React, { useState, useContext } from 'react';
// Import UI components from React Native
import { Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// Import SafeAreaView to handle safe area boundaries on notched devices
import { SafeAreaView } from 'react-native-safe-area-context';
// Import AsyncStorage for persistent data storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import theme context and theme objects for dynamic theming
import { ThemeContext } from '../constants/ThemeContext';
import { lightTheme, darkTheme } from '../constants/theme';

// WorkoutScreen component - allows users to log and save workout details
export default function WorkoutScreen() {
  // Get the current darkMode state from ThemeContext
  const { darkMode } = useContext(ThemeContext);
  // Select the appropriate theme (light or dark) based on darkMode state
  const theme = darkMode ? darkTheme : lightTheme;

  // State for exercise name
  const [exercise, setExercise] = useState('');
  // State for number of sets
  const [sets, setSets] = useState('');
  // State for number of reps
  const [reps, setReps] = useState('');
  // State for weight in pounds
  const [weight, setWeight] = useState('');

  // Function to save the workout to AsyncStorage
  const saveWorkout = async () => {
    // Validate that all fields are filled before saving
    if (!exercise || !sets || !reps || !weight) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    // Create a new workout object with a unique ID and formatted workout string
    const newWorkout = {
      id: Date.now().toString(),
      workout: `${exercise} - ${sets}x${reps} @ ${weight}lbs`
    };

    try {
      // Retrieve existing workouts from AsyncStorage
      const existing = await AsyncStorage.getItem('workouts');
      // Parse existing workouts or initialize as empty array
      const workouts = existing ? JSON.parse(existing) : [];

      // Add the new workout to the array
      workouts.push(newWorkout);

      // Save the updated workouts array back to AsyncStorage
      await AsyncStorage.setItem('workouts', JSON.stringify(workouts));

      // Show success message to the user
      Alert.alert("Success", "Workout saved!");

      // Clear all input fields after successful save
      setExercise('');
      setSets('');
      setReps('');
      setWeight('');
    } catch (error) {
      // Log any errors that occur during the save operation
      console.log(error);
    }
  };

  return (
    // SafeAreaView ensures content is visible on all device types
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Screen title */}
      <Text style={[styles.title, { color: theme.text }]}>Log Workout</Text>

      {/* Exercise name input field */}
      <TextInput 
        placeholder="Exercise Name"
        value={exercise}
        onChangeText={setExercise}
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        style={[styles.input, { color: theme.text, borderColor: theme.text }]}
      />
      {/* Sets input field - numeric keyboard */}
      <TextInput 
        placeholder="Sets"
        value={sets}
        onChangeText={setSets}
        keyboardType="numeric"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        style={[styles.input, { color: theme.text, borderColor: theme.text }]}
      />
      {/* Reps input field - numeric keyboard */}
      <TextInput 
        placeholder="Reps"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        style={[styles.input, { color: theme.text, borderColor: theme.text }]}
      />
      {/* Weight input field - numeric keyboard */}
      <TextInput 
        placeholder="Weight"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        style={[styles.input, { color: theme.text, borderColor: theme.text }]}
      />

      {/* Button to save the workout */}
      <Button title="Save Workout" onPress={saveWorkout} />
    </SafeAreaView>
  );
}

// Define styles for the WorkoutScreen component
const styles = StyleSheet.create({
  // Container styles: full height with padding
  container: { flex: 1, padding: 20 },
  // Title styles: larger font with bold weight and bottom margin
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  // Input styles: border, padding, and spacing for TextInput fields
  input: { borderWidth: 1, padding: 10, marginBottom: 10 }
});