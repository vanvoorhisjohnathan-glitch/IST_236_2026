import React from "react";
import { Text } from "react-native";

export default function Title({ text }) {
  return (
    <Text
      style={{
        fontFamily: "titleFont",
        fontSize: 28,
        textAlign: "center",
        marginVertical: 20,
      }}
    >
      {text}
    </Text>
  );
}