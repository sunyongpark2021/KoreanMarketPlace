import { View, StyleSheet, Text } from "react-native";
import Font1 from "./Font1.js";

function Card1({ id, name, description, price, location }) {
  return (
    <View>
      <View style={styles.card1}>
        <Font1>{name}</Font1>
        <Text>{description}</Text>
        <Text>Price: {price}</Text>
        <Text>Location: {location}</Text>
      </View>
    </View>
  );
}
//id name price location
export default Card1;

const styles = StyleSheet.create({
  card1: {
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 7,
    marginHorizontal: 7,
    padding: 7,
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "grey",
    width: 245,

    elevation: 4, //setting shadow for android
    shadowColor: "black", //shadow setting for IOS
    shadowOffset: { width: 0, height: 2 }, //shadow setting for IOS
    shadowRadius: 6, //shadow setting for IOS
    shadowOpacity: 0.25, //shadow setting for IOS
  },
});
