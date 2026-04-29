import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Settings</Text>

      <Text>Dark Mode</Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />
    </View>
  );
}