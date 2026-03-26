import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 20,
    color: "white",
    fontFamily: "campFont",
  },
});