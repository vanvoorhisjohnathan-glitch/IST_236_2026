import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Colors from "../constants/Colors";

export default function NavButton({ text, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.primary500,
        padding: 15,
        borderRadius: 8,
        marginVertical: 20,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 16 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}