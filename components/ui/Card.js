import { View, StyleSheet } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContents: "center",
    alignItems: "center",
    marginTop: 16,
    marginHorizontal: 24,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "grey",

    elevation: 4, //setting shadow for android
    shadowColor: "black", //shadow setting for IOS
    shadowOffset: { width: 0, height: 2 }, //shadow setting for IOS
    shadowRadius: 6, //shadow setting for IOS
    shadowOpacity: 0.25, //shadow setting for IOS
  },
});
