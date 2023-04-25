import { View, StyleSheet } from "react-native";

function HeaderCard({ children }) {
  return <View style={styles.HeaderCard}>{children}</View>;
}

export default HeaderCard;

const styles = StyleSheet.create({
  HeaderCard: {
    justifyContents: "center",
    alignItems: "center",
    marginTop: 1,
    marginHorizontal: 1,
    padding: 15,
    backgroundColor: "#b1b9fc",
    borderRadius: 5,
    borderColor: "grey",

    elevation: 4, //setting shadow for android
    shadowColor: "black", //shadow setting for IOS
    shadowOffset: { width: 0, height: 2 }, //shadow setting for IOS
    shadowRadius: 6, //shadow setting for IOS
    shadowOpacity: 0.25, //shadow setting for IOS
  },
});
