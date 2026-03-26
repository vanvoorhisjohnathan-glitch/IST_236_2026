import { Pressable, Text, StyleSheet } from "react-native";

function ReserveButton({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Reserve Now</Text>
    </Pressable>
  );
}

export default ReserveButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#29eb8a",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});