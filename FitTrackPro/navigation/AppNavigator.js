// Import React for component creation
import React from 'react';
// Import bottom tab navigator from React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import all screen components
import HomeScreen from '../screens/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import ProgressScreen from '../screens/ProgressScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Create a bottom tab navigator instance
const Tab = createBottomTabNavigator();

// AppNavigator component - sets up the main navigation structure with bottom tabs
export default function AppNavigator() {
  return (
    // Tab.Navigator sets up the bottom tab navigation structure
    <Tab.Navigator
      screenOptions={{
        // Hide the header since we're using a custom tab-based navigation
        headerShown: false 
      }}
    >
      {/* Home tab - displays the main welcome screen */}
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* Workout tab - allows users to log new workouts */}
      <Tab.Screen name="Workout" component={WorkoutScreen} />
      {/* Progress tab - displays workout history */}
      <Tab.Screen name="Progress" component={ProgressScreen} />
      {/* Profile tab - displays user settings including theme toggle */}
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}