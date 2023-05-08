import { Text, StyleSheet } from "react-native";

function Font1({ children, style }) {
  return <Text style={(styles.font1, style)}>{children}</Text>;
}

export default Font1;

const styles = StyleSheet.create({
  font1: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
  },
});
