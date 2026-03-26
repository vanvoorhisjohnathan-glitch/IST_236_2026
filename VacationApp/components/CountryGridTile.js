import { View, Text, Pressable } from "react-native";

export default function CountryGridTile({ title, color, onPress }) {
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Pressable
        onPress={onPress}
        style={{ backgroundColor: color, padding: 20 }}
      >
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}