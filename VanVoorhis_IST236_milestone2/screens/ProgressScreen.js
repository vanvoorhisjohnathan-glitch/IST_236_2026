import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function ProgressScreen() {
  const data = [
    { id: '1', workout: 'Bench Press - 3x10' },
    { id: '2', workout: 'Squats - 4x8' }
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Workout History</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.workout}</Text>}
      />
    </View>
  );
}