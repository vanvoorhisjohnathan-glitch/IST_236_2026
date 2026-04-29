import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log Workout</Text>

      <TextInput placeholder="Exercise Name" style={styles.input} />
      <TextInput placeholder="Sets" style={styles.input} />
      <TextInput placeholder="Reps" style={styles.input} />
      <TextInput placeholder="Weight" style={styles.input} />

      <Button title="Save Workout" onPress={() => alert("Saved (placeholder)")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 }
});