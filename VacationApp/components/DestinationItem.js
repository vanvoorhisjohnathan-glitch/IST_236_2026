import { View, Text, Image, Pressable } from "react-native";

export default function DestinationItem(props) {
  return (
    <Pressable onPress={props.onPress}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <Image
          source={{ uri: props.imageUrl }}
          style={{ width: 100, height: 100 }}
        />
        <View>
          <Text>{props.name}</Text>
          <Text>${props.cost}</Text>
          <Text>Founded: {props.year}</Text>
          <Text>⭐ {props.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
}